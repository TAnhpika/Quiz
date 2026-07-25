/**
 * Convert FE raw exam dumps → Quizzy bank JS files.
 * Usage: node scripts/build-swt-fe-banks.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const RAW_DIR = path.join(__dirname, "fe-raw");
const BANKS_DIR = path.join(__dirname, "..", "banks");

const BANKS = [
    { raw: "SWT_SP26.txt", id: "swt_sp26", title: "SWT SP26" },
    { raw: "SWT_FA25.txt", id: "swt_fa25", title: "SWT FA25" },
    { raw: "SWT_SU25.txt", id: "swt_su25", title: "SWT SU25" },
];

const OPTION_RE = /^([A-Ea-e])[\.\)]\s*(.*)$/;
/** Single letter A–E, or multi-select keys like ABC / AD / ABD */
const ANSWER_RE = /^[A-Ea-e]{1,5}$/;

function cue(text, maxWords = 8) {
    const words = String(text || "")
        .replace(/\s+/g, " ")
        .trim()
        .split(" ")
        .filter(Boolean);
    return words.slice(0, maxWords).join(" ");
}

function formatLetterList(letters) {
    if (letters.length === 1) return letters[0];
    if (letters.length === 2) return `${letters[0]} and ${letters[1]}`;
    return `${letters.slice(0, -1).join(", ")}, and ${letters[letters.length - 1]}`;
}

function parseExam(text) {
    const lines = text.replace(/\r\n/g, "\n").split("\n");
    const questions = [];
    const errors = [];
    let i = 0;
    let qNum = 0;

    const peekNonEmpty = (from) => {
        let j = from;
        while (j < lines.length && !lines[j].trim()) j++;
        return { j, line: j < lines.length ? lines[j].trim() : null };
    };

    while (i < lines.length) {
        while (i < lines.length && !lines[i].trim()) i++;
        if (i >= lines.length) break;

        const start = i;
        const qLines = [];
        while (
            i < lines.length &&
            !OPTION_RE.test(lines[i].trim()) &&
            !ANSWER_RE.test(lines[i].trim())
        ) {
            const t = lines[i].trim();
            if (t) qLines.push(t);
            i++;
        }

        const options = [];
        while (i < lines.length && OPTION_RE.test(lines[i].trim())) {
            const m = lines[i].trim().match(OPTION_RE);
            let optText = m[2].trim();
            i++;
            // Continuation lines of this option (wrapped OCR text)
            while (i < lines.length) {
                const t = lines[i].trim();
                if (!t) {
                    const { line: next } = peekNonEmpty(i + 1);
                    if (next && (OPTION_RE.test(next) || ANSWER_RE.test(next))) break;
                    if (!next) break;
                    // blank then more prose → still continuation
                    i++;
                    continue;
                }
                if (OPTION_RE.test(t) || ANSWER_RE.test(t)) break;
                optText += " " + t;
                i++;
            }
            options.push({ letter: m[1].toUpperCase(), text: optText.replace(/\s+/g, " ").trim() });
            while (i < lines.length && !lines[i].trim()) {
                const { line: next } = peekNonEmpty(i);
                if (next && (OPTION_RE.test(next) || ANSWER_RE.test(next))) {
                    i = peekNonEmpty(i).j;
                    break;
                }
                break;
            }
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
        const selected = letters
            .map((L) => options.find((o) => o.letter === L))
            .filter(Boolean);

        if (!textQ || options.length < 2 || !answerKey || selected.length !== letters.length) {
            errors.push({
                qNum,
                line: start + 1,
                textQ: textQ.slice(0, 80),
                optCount: options.length,
                answerLetter: answerKey,
            });
            continue;
        }

        let finalOptions = options.map((o) => o.text);
        let answerIdx;
        let correct;

        if (letters.length === 1) {
            answerIdx = options.findIndex((o) => o.letter === letters[0]);
            correct = options[answerIdx].text;
        } else {
            correct = selected.map((o) => o.text).join(" · ");
            const comboLabel = formatLetterList(letters);
            finalOptions = [...finalOptions, comboLabel];
            answerIdx = finalOptions.length - 1;
        }

        questions.push({
            id: questions.length + 1,
            text: textQ,
            options: finalOptions,
            answer: answerIdx,
            explanation: correct,
            keywords: `Q: ${cue(textQ)} | A: ${cue(correct, 6)}`,
        });
    }

    return { questions, errors };
}

function writeBank(bankId, title, questions) {
    const json = JSON.stringify(questions, null, 4).replace(/^/gm, "    ").trim();
    const body = `/** Ngân hàng câu hỏi: ${title} (${questions.length} câu) — load on demand */
(function (global) {
    const bank = ${json};
    global.QUIZ_BANKS = global.QUIZ_BANKS || {};
    global.QUIZ_BANKS["${bankId}"] = bank;
})(typeof window !== "undefined" ? window : globalThis);
`;
    const out = path.join(BANKS_DIR, `${bankId}.js`);
    fs.writeFileSync(out, body, "utf8");
    return out;
}

function main() {
    for (const cfg of BANKS) {
        const rawPath = path.join(RAW_DIR, cfg.raw);
        const raw = fs.readFileSync(rawPath, "utf8");
        const { questions, errors } = parseExam(raw);
        const out = writeBank(cfg.id, cfg.title, questions);
        console.log(`${cfg.id}: ${questions.length} OK → ${path.relative(process.cwd(), out)}`);
        if (errors.length) {
            console.warn(`  ${errors.length} parse error(s):`);
            for (const e of errors.slice(0, 15)) {
                console.warn(`    #${e.qNum} line ${e.line}: opts=${e.optCount} ans=${e.answerLetter} "${e.textQ}"`);
            }
        }
    }
}

main();
