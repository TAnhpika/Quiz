/**
 * Validate THML keywords (keywordsRulesVN.md §VI A + §VII Q)
 * Usage:
 *   node scripts/validate-thml-keywords.mjs
 *   node scripts/validate-thml-keywords.mjs --report
 *   node scripts/validate-thml-keywords.mjs --json
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { validateQuestionCueVII, countWords } from "./thml-q-utils.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BANK_PATH = path.join(__dirname, "..", "banks", "thml.js");
const KEYWORDS_PATH = path.join(__dirname, "thml-keywords.json");

const Q_FORMAT = /^Q:\s(.+?)\s\|\sA:\s(.+)$/s;
const MAX_FRAGS = 4;
const REPORT = process.argv.includes("--report");
const jsonIdx = process.argv.indexOf("--json");
const JSON_MODE = jsonIdx !== -1;
const jsonPath = JSON_MODE
    ? (process.argv[jsonIdx + 1] && !process.argv[jsonIdx + 1].startsWith("-")
        ? process.argv[jsonIdx + 1]
        : KEYWORDS_PATH)
    : null;

function normalize(str) {
    return (str || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d")
        .replace(/Đ/g, "D")
        .toLowerCase()
        .replace(/[^\p{L}\p{N}\s]/gu, " ")
        .replace(/\s+/g, " ")
        .trim();
}

function fragmentInSource(fragment, sources) {
    const f = normalize(fragment);
    if (!f) return false;
    return sources.some((src) => normalize(src.replace(/\.$/, "")).includes(f));
}

function loadBank() {
    const src = fs.readFileSync(BANK_PATH, "utf8");
    const match = src.match(/const bank = (\[[\s\S]*\n\s*\]);/);
    if (!match) throw new Error("Cannot parse bank");
    return JSON.parse(match[1]);
}

function loadFromKeywordsJson() {
    const bank = loadBank();
    const keywords = JSON.parse(fs.readFileSync(jsonPath || KEYWORDS_PATH, "utf8"));
    return bank.map((q) => ({
        ...q,
        keywords: keywords[String(q.id)] || q.keywords || "",
    }));
}

function validateQuestion(q, allQCues) {
    const kw = (q.keywords || "").trim();
    const errors = [];
    const warnings = [];

    if (!kw) errors.push("missing keywords");
    if (kw.includes("≠")) errors.push("old format (contains ≠)");

    const match = kw.match(Q_FORMAT);
    if (!match) {
        errors.push("invalid format (expected Q: ... | A: ...)");
        return { id: q.id, text: q.text, keywords: kw, errors, warnings };
    }

    const qCue = match[1].trim();
    const aPart = match[2].trim();
    const correct = q.options ? q.options[q.answer] : q.answer;
    const expl = q.explanation || correct;
    const sources = [correct, expl];

    const qVii = validateQuestionCueVII(qCue);
    errors.push(...qVii.errors);
    warnings.push(...qVii.warnings);

    const fragments = aPart.split(/\s*·\s*/).map((f) => f.trim()).filter(Boolean);
    if (fragments.length < 1) errors.push("A has no fragments");
    if (fragments.length > MAX_FRAGS) errors.push(`A has ${fragments.length} fragments (max ${MAX_FRAGS})`);

    for (const frag of fragments) {
        if (!fragmentInSource(frag, sources)) errors.push(`A fragment not verbatim: "${frag}"`);
    }

    const dupCount = allQCues.filter((x) => x === qCue).length;
    if (dupCount > 1) warnings.push(`duplicate Q cue (${dupCount} questions)`);

    return { id: q.id, text: q.text, answer: correct, keywords: kw, errors, warnings };
}

function main() {
    const bank = JSON_MODE ? loadFromKeywordsJson() : loadBank();
    const allQCues = bank.map((q) => {
        const m = (q.keywords || "").match(/^Q:\s(.+?)\s\|\sA:/s);
        return m ? m[1].trim() : "";
    });
    const results = bank.map((q) => validateQuestion(q, allQCues));
    const failed = results.filter((r) => r.errors.length);
    const warned = results.filter((r) => r.warnings.length && !r.errors.length);

    console.log(`Validated ${bank.length} THML questions (§VII Q + A verbatim)\n`);

    if (REPORT) {
        const reportPath = path.join(__dirname, "thml-q-audit.json");
        fs.writeFileSync(
            reportPath,
            JSON.stringify(
                failed.map((r) => ({
                    id: r.id,
                    errors: r.errors,
                    text: r.text,
                    keywords: r.keywords,
                })),
                null,
                2
            ) + "\n",
            "utf8"
        );
        console.log(`Report: ${failed.length} issues → ${reportPath}`);
    }

    if (failed.length) {
        console.log(`ERRORS (${failed.length}):`);
        failed.forEach((r) => {
            console.log(`  #${r.id}: ${r.errors.join("; ")}`);
            console.log(`    "${r.keywords}"`);
        });
    }
    if (warned.length) {
        console.log(`\nWARNINGS (${warned.length}):`);
        warned.slice(0, 20).forEach((r) => console.log(`  #${r.id}: ${r.warnings.join("; ")}`));
        if (warned.length > 20) console.log(`  ... and ${warned.length - 20} more`);
    }
    if (!failed.length && !warned.length) {
        console.log("All questions passed (0 errors, 0 warnings).");
    } else if (!failed.length) {
        console.log("\nAll blocking checks passed.");
    }

    process.exit(failed.length ? 1 : 0);
}

main();
