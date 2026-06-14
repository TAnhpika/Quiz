/**
 * Extract QUESTION_BANKS from index.html into banks/{subjectId}.js
 * Usage: node scripts/extract-banks.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const INDEX_PATH = path.join(ROOT, "index.html");
const BANKS_DIR = path.join(ROOT, "banks");

const SUBJECT_NAMES = {
    tthcm: "Tư tưởng Hồ Chí Minh",
    thml: "Triết học Mác - Lênin",
    swt_pt1: "Software Testing PT1",
};

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
    return {
        banks: Function(`"use strict"; return ${objStr};`)(),
        blockStart: start,
        blockEnd: i + 1,
    };
}

function bankFileContent(subjectId, questions) {
    const name = SUBJECT_NAMES[subjectId] || subjectId;
    const json = JSON.stringify(questions, null, 4)
        .replace(/^/gm, "    ")
        .trim();
    return `/** Ngân hàng câu hỏi: ${name} (${questions.length} câu) — load on demand */
(function (global) {
    const bank = ${json};
    global.QUIZ_BANKS = global.QUIZ_BANKS || {};
    global.QUIZ_BANKS["${subjectId}"] = bank;
})(typeof window !== "undefined" ? window : globalThis);
`;
}

function main() {
    const html = fs.readFileSync(INDEX_PATH, "utf8");
    const { banks, blockStart, blockEnd } = extractQuestionBanks(html);

    fs.mkdirSync(BANKS_DIR, { recursive: true });

    const counts = {};
    for (const [subjectId, questions] of Object.entries(banks)) {
        counts[subjectId] = questions.length;
        fs.writeFileSync(path.join(BANKS_DIR, `${subjectId}.js`), bankFileContent(subjectId, questions), "utf8");
        console.log(`Wrote banks/${subjectId}.js (${questions.length} questions)`);
    }

    const replacement = `            // QUESTION_BANKS → banks/{subjectId}.js (load on demand via bankLoader)`;
    const newHtml = html.slice(0, blockStart) + replacement + html.slice(blockEnd);
    fs.writeFileSync(INDEX_PATH, newHtml, "utf8");

    console.log("\nRemoved inline QUESTION_BANKS from index.html");
    console.log("Counts:", counts);
}

main();
