/**
 * Convert banks/{id}.md → banks/{id}.js (Quizzy bank).
 * Usage:
 *   node scripts/build-swr-bank.mjs           # builds swr + swr_extra
 *   node scripts/build-swr-bank.mjs swr_extra  # one bank
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const BANK_IDS = ["swr", "swr_extra", "fer"];
const BANK_LABELS = { swr: "SWR", swr_extra: "SWR Extra", fer: "FER" };

const OPTION_RE = /^([A-Fa-f])[\.\)]\s*(.*)$/;
const ANSWER_RE = /^[A-Fa-f]{1,5}$/;

function cue(text, maxWords = 8) {
    const words = String(text || "")
        .replace(/\s+/g, " ")
        .trim()
        .split(" ")
        .filter(Boolean);
    return words.slice(0, maxWords).join(" ");
}

function stripQBoilerplate(textQ) {
    return String(textQ || "")
        .replace(/\s+/g, " ")
        .trim()
        .replace(/\s*[\(\[]?\s*(Choose|Select)\s+\d+\s+correct\s+answers?\.?\s*[\)\]]?/gi, "")
        .replace(/\s*[\(\[]?\s*Select\s+(two|all that apply)\.?\s*[\)\]]?/gi, "")
        .replace(/\s*Choose\s+\d+\s+answers?\.?/gi, "")
        .replace(
            /^(Which\s+of\s+the\s+following|Which\s+one\s+of\s+the\s+following|Which\s+of\s+these|Which\s+one|What\s+do|What\s+does|What\s+are|What\s+is|How\s+does|How\s+do|How\s+can|Why\s+is|Why\s+are|Why\s+do|When|Where|Who)\s+/i,
            ""
        )
        .replace(/^of\s+the\s+following\s+/i, "")
        .replace(/\(\s*\)/g, "")
        .replace(/\[\s*\]/g, "")
        .replace(/\s{2,}/g, " ")
        .replace(/\s+([?.!])/g, "$1")
        .trim();
}

function answerSnippet(optionText) {
    const raw = String(optionText || "")
        .replace(/\s+/g, " ")
        .trim()
        .replace(/\.$/, "");
    if (!raw) return "";
    const words = raw.split(" ").filter(Boolean);
    if (raw.length <= 45 || words.length <= 7) return raw;
    const comma = raw.indexOf(",");
    if (comma > 10 && comma <= 50) return raw.slice(0, comma).trim();
    return cue(raw, 5);
}

function makeKeywords(textQ, selectedOptionTexts) {
    const qPart = cue(stripQBoilerplate(textQ), 8) || cue(textQ, 8);
    const aPart = selectedOptionTexts.map(answerSnippet).filter(Boolean).join(" · ");
    return `Q: ${qPart} | A: ${aPart}`;
}

function parseMd(text) {
    const lines = text.replace(/\r\n/g, "\n").split("\n");
    const questions = [];
    const errors = [];
    let i = 0;
    let qNum = 0;

    while (i < lines.length) {
        while (i < lines.length && (!lines[i].trim() || lines[i].trim().startsWith("<!--"))) i++;
        if (i >= lines.length) break;

        const start = i;
        const qLines = [];
        while (
            i < lines.length &&
            !OPTION_RE.test(lines[i].trim()) &&
            !ANSWER_RE.test(lines[i].trim())
        ) {
            const t = lines[i].trim();
            if (t && !t.startsWith("<!--")) qLines.push(t);
            i++;
        }

        const options = [];
        while (i < lines.length && OPTION_RE.test(lines[i].trim())) {
            const m = lines[i].trim().match(OPTION_RE);
            let optText = m[2].trim();
            i++;
            while (
                i < lines.length &&
                lines[i].trim() &&
                !OPTION_RE.test(lines[i].trim()) &&
                !ANSWER_RE.test(lines[i].trim())
            ) {
                optText += " " + lines[i].trim();
                i++;
            }
            options.push({ letter: m[1].toUpperCase(), text: optText.replace(/\s+/g, " ").trim() });
        }

        while (i < lines.length && !lines[i].trim()) i++;

        let answerKey = null;
        if (i < lines.length && ANSWER_RE.test(lines[i].trim())) {
            answerKey = lines[i].trim().toUpperCase();
            i++;
        }

        qNum++;
        const textQ = qLines.join(" ").replace(/\s+/g, " ").trim();
        const letters = answerKey ? answerKey.split("") : [];
        const selected = letters.map((L) => options.find((o) => o.letter === L)).filter(Boolean);

        if (!textQ || options.length < 2 || !answerKey || selected.length !== letters.length) {
            errors.push({
                qNum,
                line: start + 1,
                textQ: textQ.slice(0, 80),
                optCount: options.length,
                answerKey,
            });
            continue;
        }

        const finalOptions = options.map((o) => o.text);
        const answerIndices = letters.map((L) => options.findIndex((o) => o.letter === L));
        const correct = selected.map((o) => o.text).join(" · ");

        const qObj = {
            id: questions.length + 1,
            text: textQ,
            options: finalOptions,
            answer: answerIndices[0],
            explanation: correct,
            keywords: makeKeywords(
                textQ,
                selected.map((o) => o.text)
            ),
        };
        if (answerIndices.length > 1) qObj.answers = answerIndices;

        questions.push(qObj);
    }

    return { questions, errors };
}

function writeBank(bankId, questions) {
    const outPath = path.join(ROOT, "banks", `${bankId}.js`);
    const label = BANK_LABELS[bankId] || bankId.toUpperCase();
    const json = JSON.stringify(questions, null, 4).replace(/^/gm, "    ").trim();
    const body = `/** Ngân hàng câu hỏi: ${label} (${questions.length} câu) — load on demand */
(function (global) {
    const bank = ${json};
    global.QUIZ_BANKS = global.QUIZ_BANKS || {};
    global.QUIZ_BANKS["${bankId}"] = bank;
})(typeof window !== "undefined" ? window : globalThis);
`;
    fs.writeFileSync(outPath, body, "utf8");
}

function buildOne(bankId) {
    const mdPath = path.join(ROOT, "banks", `${bankId}.md`);
    if (!fs.existsSync(mdPath)) {
        console.error(`${bankId}: missing ${mdPath}`);
        return false;
    }
    const raw = fs.readFileSync(mdPath, "utf8");
    const { questions, errors } = parseMd(raw);
    writeBank(bankId, questions);
    console.log(`${bankId}: ${questions.length} OK → banks/${bankId}.js`);
    if (errors.length) {
        console.warn(`  ${errors.length} parse skip(s):`);
        for (const e of errors.slice(0, 15)) {
            console.warn(`    #${e.qNum} line ${e.line}: opts=${e.optCount} ans=${e.answerKey} "${e.textQ}"`);
        }
    }
    return true;
}

function main() {
    const arg = process.argv[2];
    const ids = arg ? [arg] : BANK_IDS;
    for (const id of ids) buildOne(id);
}

main();
