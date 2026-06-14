/**
 * Apply curated keywords JSON to a bank file.
 * Usage: node scripts/apply-bank-keywords.mjs tthcm
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const bankId = process.argv[2];
if (!bankId) {
    console.error("Usage: node scripts/apply-bank-keywords.mjs <bankId>");
    process.exit(1);
}

const BANK_PATH = path.join(__dirname, "..", "banks", `${bankId}.js`);
const KEYWORDS_PATH = path.join(__dirname, `${bankId}-keywords.json`);

const BANK_HEADERS = {
    tthcm: (n) => `/** Ngân hàng câu hỏi: Tư tưởng Hồ Chí Minh (${n} câu) — load on demand */`,
    thml: (n) => `/** Ngân hàng câu hỏi: Triết học Mác - Lênin (${n} câu) — load on demand */`,
    swt_pt1: (n) => `/** Ngân hàng câu hỏi: Software Testing PT1 (${n} câu) — load on demand */`,
};

function loadBank() {
    const src = fs.readFileSync(BANK_PATH, "utf8");
    const match = src.match(/const bank = (\[[\s\S]*\n\s*\]);/);
    if (!match) throw new Error("Cannot parse bank");
    return JSON.parse(match[1]);
}

function writeBank(bank) {
    const headerFn = BANK_HEADERS[bankId] || ((n) => `/** Quiz bank ${bankId} (${n} câu) */`);
    const json = JSON.stringify(bank, null, 4).replace(/^/gm, "    ").trim();
    const newBody = `${headerFn(bank.length)}
(function (global) {
    const bank = ${json};
    global.QUIZ_BANKS = global.QUIZ_BANKS || {};
    global.QUIZ_BANKS["${bankId}"] = bank;
})(typeof window !== "undefined" ? window : globalThis);
`;
    fs.writeFileSync(BANK_PATH, newBody, "utf8");
}

function main() {
    const keywordsMap = JSON.parse(fs.readFileSync(KEYWORDS_PATH, "utf8"));
    const bank = loadBank();
    if (Object.keys(keywordsMap).length !== bank.length) {
        throw new Error(`Expected ${bank.length} keywords, got ${Object.keys(keywordsMap).length}`);
    }
    for (const q of bank) {
        const kw = keywordsMap[String(q.id)];
        if (!kw) throw new Error(`Missing keywords for id ${q.id}`);
        q.keywords = kw;
    }
    writeBank(bank);
    console.log(`Applied ${bank.length} keywords to ${BANK_PATH}`);
}

main();
