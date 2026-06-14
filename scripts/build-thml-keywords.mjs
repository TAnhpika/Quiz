/**
 * Rebuild THML keywords — refresh Q per §VII, preserve A from bank.
 * Usage: node scripts/build-thml-keywords.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
    buildQuestionCueVII,
    countWords,
    strip,
    trimQ,
    TARGET_Q_WORDS,
} from "./thml-q-utils.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DUMP = path.join(__dirname, "thml-questions-dump.json");
const BANK_PATH = path.join(__dirname, "..", "banks", "thml.js");
const OUT = path.join(__dirname, "thml-keywords.json");
const Q_OVERRIDES_PATH = path.join(__dirname, "thml-q-overrides.json");

function loadBankKeywordsA() {
    const src = fs.readFileSync(BANK_PATH, "utf8");
    const match = src.match(/const bank = (\[[\s\S]*\n\s*\]);/);
    if (!match) throw new Error("Cannot parse bank");
    const bank = JSON.parse(match[1]);
    const aMap = {};
    for (const q of bank) {
        const m = (q.keywords || "").match(/\|\sA:\s(.+)$/s);
        if (m) aMap[String(q.id)] = m[1].trim();
    }
    return aMap;
}

function loadQOverrides() {
    if (!fs.existsSync(Q_OVERRIDES_PATH)) return {};
    return JSON.parse(fs.readFileSync(Q_OVERRIDES_PATH, "utf8"));
}

function formatQA(qCue, aCue) {
    return `Q: ${qCue.trim()} | A: ${aCue.trim()}`;
}

function buildKeyword(q, aMap, qOverrides) {
    const id = String(q.id);
    const aCue = aMap[id];
    if (!aCue) throw new Error(`Missing A for #${id}`);

    let qCue = qOverrides[id] || buildQuestionCueVII(q);

    if (countWords(qCue) < 2) {
        qCue = trimQ(`${qCue} ${strip(q.answer).slice(0, 12)}`);
    } else if (countWords(qCue) > TARGET_Q_WORDS) {
        qCue = trimQ(qCue);
    }

    return formatQA(qCue, aCue);
}

function main() {
    const dump = JSON.parse(fs.readFileSync(DUMP, "utf8"));
    const aMap = loadBankKeywordsA();
    const qOverrides = loadQOverrides();
    const out = {};
    const failures = [];

    for (const q of dump) {
        try {
            out[String(q.id)] = buildKeyword(q, aMap, qOverrides);
        } catch (e) {
            failures.push({ id: q.id, err: e.message });
        }
    }

    fs.writeFileSync(OUT, JSON.stringify(out, null, 2) + "\n", "utf8");
    console.log(`Wrote ${Object.keys(out).length} keywords (${Object.keys(qOverrides).length} Q overrides)`);

    if (failures.length) {
        console.error(`Failures: ${failures.length}`);
        failures.forEach((f) => console.error(JSON.stringify(f)));
        process.exit(1);
    }
}

main();
