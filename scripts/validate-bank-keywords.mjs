/**
 * Validate keywords in banks/{bankId}.js
 * Usage: node scripts/validate-bank-keywords.mjs tthcm
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const bankId = process.argv[2];
if (!bankId) {
    console.error("Usage: node scripts/validate-bank-keywords.mjs <bankId>");
    process.exit(1);
}

const BANK_PATH = path.join(__dirname, "..", "banks", `${bankId}.js`);

const GENERIC_ALONE = new Set([
    "ensure", "helps", "help", "must", "define", "may", "lead", "according",
    "dam", "can", "phai", "phải", "la", "là", "co", "có", "khong", "không",
    "theo", "mot", "một", "cac", "các", "nhu", "như", "khi", "voi", "với",
]);

function loadBank() {
    const src = fs.readFileSync(BANK_PATH, "utf8");
    const match = src.match(/const bank = (\[[\s\S]*\n\s*\]);/);
    if (!match) throw new Error("Cannot parse bank");
    return JSON.parse(match[1]);
}

function normalize(str) {
    return (str || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^\p{L}\p{N}\s]/gu, " ")
        .replace(/\s+/g, " ")
        .trim();
}

function isAnswerRepeat(keywords, correct) {
    const hook = keywords.split("≠")[0].replace(/^⚠\s*NOT\s*·\s*/i, "").trim();
    const p = normalize(hook);
    const c = normalize(correct.replace(/\.$/, ""));
    if (!p || !c) return false;
    if (p === c) return true;
    const shorter = p.length <= c.length ? p : c;
    const longer = p.length <= c.length ? c : p;
    return longer.includes(shorter) && shorter.length >= longer.length * 0.85;
}

function countHookWords(keywords) {
    const hook = keywords.split("≠")[0].replace(/^⚠\s*NOT\s*·\s*/i, "").trim();
    return hook.split(/\s+/).filter(Boolean).length;
}

function genericHookWarning(keywords) {
    const hook = keywords
        .split("≠")[0]
        .replace(/^⚠\s*NOT\s*·\s*/i, "")
        .trim()
        .toLowerCase();
    const words = hook.split(/\s+/).filter(Boolean);
    if (words.length === 1 && GENERIC_ALONE.has(words[0])) return "single generic word";
    if (words.length === 2 && GENERIC_ALONE.has(words[0]) && words[1].length < 4)
        return "weak two-word hook";
    return null;
}

function validateQuestion(q) {
    const kw = (q.keywords || "").trim();
    const errors = [];
    const warnings = [];

    if (!kw) errors.push("missing keywords");

    const wc = countHookWords(kw);
    if (wc < 3) errors.push(`hook has ${wc} words (min 3)`);
    if (wc > 8) errors.push(`hook has ${wc} words (max 8)`);

    const correct = q.options[q.answer];
    if (isAnswerRepeat(kw, correct)) errors.push("repeats correct answer");

    if (!kw.includes("≠")) warnings.push("missing ≠ contrast");

    const gw = genericHookWarning(kw);
    if (gw) warnings.push(gw);

    return { id: q.id, keywords: kw, wc, errors, warnings };
}

function main() {
    const bank = loadBank();
    const results = bank.map(validateQuestion);
    const failed = results.filter((r) => r.errors.length);
    const warned = results.filter((r) => r.warnings.length && !r.errors.length);

    console.log(`Validated ${bank.length} questions in ${bankId}\n`);
    if (failed.length) {
        console.log(`ERRORS (${failed.length}):`);
        failed.forEach((r) => {
            console.log(`  #${r.id}: ${r.errors.join("; ")}`);
            console.log(`    "${r.keywords}"`);
        });
    }
    if (warned.length) {
        console.log(`\nWARNINGS (${warned.length}):`);
        warned.slice(0, 15).forEach((r) => {
            console.log(`  #${r.id}: ${r.warnings.join("; ")} — "${r.keywords}"`);
        });
        if (warned.length > 15) console.log(`  ... and ${warned.length - 15} more`);
    }
    if (!failed.length) console.log("All questions passed blocking checks.");
    process.exit(failed.length ? 1 : 0);
}

main();
