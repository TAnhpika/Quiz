/**
 * One-shot script: generate keywords for all questions in QUESTION_BANKS
 * and patch index.html. Usage:
 *   node scripts/generate-keywords.mjs --dry-run
 *   node scripts/generate-keywords.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const INDEX_PATH = path.join(__dirname, "..", "index.html");
const DRY_RUN = process.argv.includes("--dry-run");
const REFRESH = process.argv.includes("--refresh");

const STOPWORDS = new Set([
    "the", "a", "an", "of", "to", "in", "for", "and", "or", "is", "are", "was", "were", "be", "been",
    "that", "this", "with", "by", "on", "at", "as", "it", "from", "not", "all", "can", "has", "have",
    "la", "là", "cua", "của", "va", "và", "mot", "một", "các", "cac", "theo", "trong", "cho", "den",
    "đến", "nay", "hay", "hoac", "hoặc", "neu", "nếu", "thi", "thì", "duoc", "được", "khong", "không",
    "co", "có", "mot", "một", "nhung", "những", "cac", "các", "nhu", "như", "khi", "voi", "với",
]);

function normalize(str) {
    return str
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
}

function tokenize(text) {
    return text
        .replace(/[^\p{L}\p{N}\s-]/gu, " ")
        .split(/\s+/)
        .filter((t) => t.length > 2);
}

function trimAnswer(text) {
    return (text || "").replace(/\.$/, "").trim();
}

function isNegativeQuestion(text) {
    const n = normalize(text);
    return (
        n.includes("khong dung") ||
        n.includes("khong phai") ||
        n.includes("not correct") ||
        n.includes("is not") ||
        n.includes("are not") ||
        /\bnot\b/.test(text) && /which|choose|select|pick/i.test(text)
    );
}

function isEnglishBank(bankKey) {
    return bankKey === "swt_pt1";
}

function shortenPhrase(text, maxWords = 6) {
    const words = trimAnswer(text).split(/\s+/);
    if (words.length <= maxWords) return words.join(" ");
    return words.slice(0, maxWords).join(" ") + "…";
}

function buildContrast(q) {
    const correct = q.options[q.answer];
    const all = q.options;

    let prefix = "";
    const minLen = Math.min(...all.map((o) => o.length));
    for (let i = 0; i < minLen; i++) {
        const ch = all[0][i];
        if (all.every((o) => o[i] === ch)) prefix += ch;
        else break;
    }

    if (prefix.length > 12) {
        const suffixes = all.map((o) => trimAnswer(o.slice(prefix.length)));
        const wrongSuffixes = suffixes.filter((_, i) => i !== q.answer);
        const shortWrong = wrongSuffixes
            .map((s) => {
                const words = s.split(/\s+/).filter(Boolean);
                const chunk = words.slice(-2).join(" ");
                return chunk.length > 24 ? words.slice(-1)[0] : chunk;
            })
            .filter(Boolean);
        if (shortWrong.length >= 2) {
            return "≠ " + [...new Set(shortWrong)].slice(0, 3).join("/");
        }
    }

    const correctNorm = normalize(correct);
    const hooks = q.options
        .filter((_, i) => i !== q.answer)
        .map((w) => {
            const tokens = tokenize(w).filter(
                (t) => !STOPWORDS.has(normalize(t)) && !correctNorm.includes(normalize(t))
            );
            return tokens.slice(-1)[0] || tokens[0];
        })
        .filter(Boolean);

    if (hooks.length >= 2) {
        return "≠ " + [...new Set(hooks)].slice(0, 3).join("/");
    }
    return null;
}

function isAnswerRepeat(part, correct) {
    const p = normalize(part.replace(/[^\p{L}\p{N}\s]/gu, " ").replace(/\s+/g, " ").trim());
    const c = normalize(trimAnswer(correct).replace(/[^\p{L}\p{N}\s]/gu, " ").replace(/\s+/g, " ").trim());
    if (!p || !c) return false;
    if (p === c) return true;
    const shorter = p.length <= c.length ? p : c;
    const longer = p.length <= c.length ? c : p;
    return longer.includes(shorter) && shorter.length >= longer.length * 0.85;
}

function generateKeywords(q, bankKey) {
    const correct = trimAnswer(q.options[q.answer]);
    const expl = trimAnswer(q.explanation);
    const en = isEnglishBank(bankKey);
    const parts = [];

    if (isNegativeQuestion(q.text)) {
        parts.push(en ? "⚠ NOT" : "⚠ KHÔNG phải");
    }

    if (expl && expl.length <= 80 && !isAnswerRepeat(expl, correct)) {
        parts.push(expl);
    }

    const wrongText = normalize(q.options.filter((_, i) => i !== q.answer).join(" "));
    const distinctive = tokenize(correct)
        .filter((t) => !STOPWORDS.has(normalize(t)))
        .filter((t) => !wrongText.includes(normalize(t)))
        .slice(0, 2);
    distinctive.forEach((t) => parts.push(t));

    const contrast = buildContrast(q);
    if (contrast) parts.push(contrast);

    const seen = new Set();
    const deduped = [];
    for (const p of parts) {
        const key = normalize(p);
        if (!key || seen.has(key) || isAnswerRepeat(p, correct)) continue;
        seen.add(key);
        deduped.push(p);
    }

    return deduped.slice(0, 4).join(" · ");
}

function escapeJsString(s) {
    return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, " ");
}

function extractQuestionBanks(html) {
    const marker = "const QUESTION_BANKS = ";
    const start = html.indexOf(marker);
    if (start < 0) throw new Error("QUESTION_BANKS not found");
    let i = html.indexOf("{", start);
    let depth = 0;
    for (; i < html.length; i++) {
        if (html[i] === "{") depth++;
        else if (html[i] === "}") {
            depth--;
            if (depth === 0) break;
        }
    }
    const objStr = html.slice(html.indexOf("{", start), i + 1);
    return Function(`"use strict"; return ${objStr};`)();
}

function findQuestionBanksBounds(html) {
    const marker = "const QUESTION_BANKS = ";
    const start = html.indexOf(marker);
    if (start < 0) throw new Error("QUESTION_BANKS not found");
    let i = html.indexOf("{", start);
    let depth = 0;
    for (; i < html.length; i++) {
        if (html[i] === "{") depth++;
        else if (html[i] === "}") {
            depth--;
            if (depth === 0) break;
        }
    }
    return { start, end: i + 1 };
}

function patchQuestionBanks(html, banks) {
    const { start, end } = findQuestionBanksBounds(html);
    let section = html.slice(start, end);

    const flat = [];
    for (const [bankKey, questions] of Object.entries(banks)) {
        for (const q of questions) {
            flat.push({ bankKey, id: q.id, keywords: generateKeywords(q, bankKey) });
        }
    }

    if (REFRESH) {
        let ki = 0;
        section = section.replace(/^(\s+keywords:\s*")(?:[^"\\]|\\.)*("),?\s*$/gm, (match, prefix, suffix) => {
            if (ki >= flat.length) return match;
            const kw = escapeJsString(flat[ki++].keywords);
            return `${prefix}${kw}${suffix},`;
        });
        if (ki !== flat.length) {
            throw new Error(`Keyword refresh mismatch: updated ${ki}, expected ${flat.length}`);
        }
        return html.slice(0, start) + section + html.slice(end);
    }

    section = section.replace(/^(\s+explanation:\s*"(?:[^"\\]|\\.)*"),?\s*$/gm, (match, explPart) => {
        if (flat.length === 0) return match;
        const item = flat.shift();
        const indent = match.match(/^(\s+)/)[1];
        const kw = escapeJsString(item.keywords);
        if (match.includes("keywords:")) return match;
        return `${explPart},\n${indent}keywords: "${kw}",`;
    });

    if (flat.length > 0) {
        throw new Error(`Unmatched questions remaining: ${flat.length}`);
    }

    return html.slice(0, start) + section + html.slice(end);
}

function main() {
    const html = fs.readFileSync(INDEX_PATH, "utf8");
    const banks = extractQuestionBanks(html);

    if (DRY_RUN) {
        for (const [bankKey, questions] of Object.entries(banks)) {
            console.log(`\n=== ${bankKey} (${questions.length} câu) — sample 10 ===`);
            questions.slice(0, 10).forEach((q) => {
                console.log(`  #${q.id}: ${generateKeywords(q, bankKey)}`);
            });
        }
        const total = Object.values(banks).reduce((s, arr) => s + arr.length, 0);
        console.log(`\nTotal: ${total} questions`);
        return;
    }

    const patched = patchQuestionBanks(html, banks);
    fs.writeFileSync(INDEX_PATH, patched, "utf8");

    const total = Object.values(banks).reduce((s, arr) => s + arr.length, 0);
    console.log(`${REFRESH ? "Refreshed" : "Patched"} ${total} questions with keywords in ${INDEX_PATH}`);
}

main();
