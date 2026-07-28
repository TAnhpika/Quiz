/**
 * Convert banks/swr.md → banks/swr.js (Quizzy bank).
 * Usage: node scripts/build-swr-bank.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const MD_PATH = path.join(ROOT, "banks", "swr.md");
const OUT_PATH = path.join(ROOT, "banks", "swr.js");
const BANK_ID = "swr";

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
            keywords: `Q: ${cue(textQ)} | A: ${cue(correct, 6)}`,
        };
        if (answerIndices.length > 1) qObj.answers = answerIndices;

        questions.push(qObj);
    }

    return { questions, errors };
}

function writeBank(questions) {
    const json = JSON.stringify(questions, null, 4).replace(/^/gm, "    ").trim();
    const body = `/** Ngân hàng câu hỏi: SWR (${questions.length} câu) — load on demand */
(function (global) {
    const bank = ${json};
    global.QUIZ_BANKS = global.QUIZ_BANKS || {};
    global.QUIZ_BANKS["${BANK_ID}"] = bank;
})(typeof window !== "undefined" ? window : globalThis);
`;
    fs.writeFileSync(OUT_PATH, body, "utf8");
}

function main() {
    const raw = fs.readFileSync(MD_PATH, "utf8");
    const { questions, errors } = parseMd(raw);
    writeBank(questions);
    console.log(`swr: ${questions.length} OK → banks/swr.js`);
    if (errors.length) {
        console.warn(`  ${errors.length} parse skip(s):`);
        for (const e of errors.slice(0, 15)) {
            console.warn(`    #${e.qNum} line ${e.line}: opts=${e.optCount} ans=${e.answerKey} "${e.textQ}"`);
        }
    }
}

main();
