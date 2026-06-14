/**
 * Validate Q|A keywords in banks/swt_pt1.js
 * Usage: node scripts/validate-swt-keywords.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BANK_PATH = path.join(__dirname, "..", "banks", "swt_pt1.js");

const Q_FORMAT = /^Q:\s(.+?)\s\|\sA:\s(.+)$/s;
const GENERIC_Q = [
    "main concept", "testing topic", "general idea", "important thing",
    "software testing", "test process", "key component",
];

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

function countWords(s) {
    return s.split(/\s+/).filter(Boolean).length;
}

function fragmentInSource(fragment, sources) {
    const f = normalize(fragment);
    if (!f) return false;
    return sources.some((src) => {
        const n = normalize(src.replace(/\.$/, ""));
        return n.includes(f);
    });
}

function validateQuestion(q) {
    const kw = (q.keywords || "").trim();
    const errors = [];
    const warnings = [];

    if (!kw) errors.push("missing keywords");
    if (kw.includes("≠")) errors.push("old format (contains ≠)");

    const match = kw.match(Q_FORMAT);
    if (!match) {
        errors.push("invalid format (expected Q: ... | A: ...)");
        return { id: q.id, keywords: kw, errors, warnings };
    }

    const qCue = match[1].trim();
    const aPart = match[2].trim();
    const correct = q.options[q.answer];
    const expl = q.explanation || correct;
    const sources = [correct, expl];

    const qWords = countWords(qCue);
    if (qWords < 2) errors.push(`Q has ${qWords} words (min 2)`);
    if (qWords > 6) errors.push(`Q has ${qWords} words (max 6)`);

    const fragments = aPart.split(/\s*·\s*/).map((f) => f.trim()).filter(Boolean);
    if (fragments.length < 1) errors.push("A has no fragments");
    if (fragments.length > 4) errors.push(`A has ${fragments.length} fragments (max 4)`);

    for (const frag of fragments) {
        if (!fragmentInSource(frag, sources)) {
            errors.push(`A fragment not verbatim: "${frag}"`);
        }
        if (countWords(frag) > 8) warnings.push(`long fragment: "${frag}"`);
    }

    const qLower = qCue.toLowerCase();
    for (const g of GENERIC_Q) {
        if (qLower === g) warnings.push(`generic Q cue: "${qCue}"`);
    }

    return { id: q.id, keywords: kw, qWords, fragCount: fragments.length, errors, warnings };
}

function main() {
    const bank = loadBank();
    const results = bank.map(validateQuestion);
    const failed = results.filter((r) => r.errors.length);
    const warned = results.filter((r) => r.warnings.length && !r.errors.length);

    console.log(`Validated ${bank.length} SWT questions (Q|A format)\n`);
    if (failed.length) {
        console.log(`ERRORS (${failed.length}):`);
        failed.forEach((r) => {
            console.log(`  #${r.id}: ${r.errors.join("; ")}`);
            console.log(`    "${r.keywords}"`);
        });
    }
    if (warned.length) {
        console.log(`\nWARNINGS (${warned.length}):`);
        warned.slice(0, 20).forEach((r) => {
            console.log(`  #${r.id}: ${r.warnings.join("; ")} — "${r.keywords}"`);
        });
        if (warned.length > 20) console.log(`  ... and ${warned.length - 20} more`);
    }
    if (!failed.length) console.log("All questions passed blocking checks.");
    process.exit(failed.length ? 1 : 0);
}

main();
