/**
 * Apply curated keywords to banks/swt_pt1.js
 * Usage: node scripts/apply-swt-keywords.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BANK_PATH = path.join(__dirname, "..", "banks", "swt_pt1.js");
const KEYWORDS_PATH = path.join(__dirname, "swt_pt1-keywords.json");

function loadBank() {
    const src = fs.readFileSync(BANK_PATH, "utf8");
    const match = src.match(/const bank = (\[[\s\S]*\n\s*\]);/);
    if (!match) throw new Error("Cannot parse bank");
    return { src, bank: JSON.parse(match[1]) };
}

function writeBank(bank) {
    const src = fs.readFileSync(BANK_PATH, "utf8");
    const json = JSON.stringify(bank, null, 4).replace(/^/gm, "    ").trim();
    const newBody = `/** Ngân hàng câu hỏi: Software Testing PT1 (${bank.length} câu) — load on demand */
(function (global) {
    const bank = ${json};
    global.QUIZ_BANKS = global.QUIZ_BANKS || {};
    global.QUIZ_BANKS["swt_pt1"] = bank;
})(typeof window !== "undefined" ? window : globalThis);
`;
    fs.writeFileSync(BANK_PATH, newBody, "utf8");
}

function main() {
    const keywordsMap = JSON.parse(fs.readFileSync(KEYWORDS_PATH, "utf8"));
    const { bank } = loadBank();
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
