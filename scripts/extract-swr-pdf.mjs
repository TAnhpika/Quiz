/**
 * OCR banks/swr.pdf (Google Slides) → banks/swr.md Q&A blocks + audit JSON.
 * Usage:
 *   node scripts/extract-swr-pdf.mjs
 *   node scripts/extract-swr-pdf.mjs --from 1 --to 10
 *   node scripts/extract-swr-pdf.mjs --resume
 */
import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createWorker } from "tesseract.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const PDF_PATH = path.join(ROOT, "banks", "swr.pdf");
const OUT_MD = path.join(ROOT, "banks", "swr.md");
const OUT_AUDIT = path.join(__dirname, "swr-ocr-audit.json");
const CACHE_DIR = path.join(__dirname, ".ocr-cache", "swr");
const TOTAL_PAGES = 428;
const DPI = 200;

const WATERMARK_RE =
    /FOR\s*U|FORU|Hoàng|Hoang|Buôn|Buon|Source|Google\s+Trang|SEMESTER_5_SWR|gle\.com|SWR302\s*@|Bantrinhchi|Chixem|Chi\s*xem|Trợ\s*giúp|Tro\s*giup|Bản\s*trình/i;
const ANSWER_RE = /^[A-Ea-e]{1,5}$/;
const QUESTION_START_RE =
    /^(Which|What|When|Where|Why|How|In\s|The\s|A\s|An\s|True|False|Identify|Select|Fill|During|Given|According|Name|List|Describe|All\s+of)/i;

function normalizeOptionLine(line) {
    const m = line.match(/^[^A-Za-z]*([A-Ea-e])[\.\)]\s*(.*)$/);
    if (!m) return null;
    return { letter: m[1].toUpperCase(), text: m[2].replace(/\s+/g, " ").trim() };
}

function isOptionLine(line) {
    return !!normalizeOptionLine(line);
}

function cleanLines(text) {
    return text
        .replace(/\r\n/g, "\n")
        .split("\n")
        .map((l) => l.trim())
        .filter((l) => l.length > 1 && !WATERMARK_RE.test(l))
        .filter((l) => !/^[\|\\\/\[\]§=\-_'".\s]+$/.test(l));
}

function findQuestionStart(lines) {
    for (let i = 0; i < lines.length; i++) {
        const stripped = lines[i].replace(/^[^A-Za-z]+/, "");
        if (QUESTION_START_RE.test(stripped)) return i;
    }
    return 0;
}

function cropSlidePng(src, dest) {
    execSync(`python "${path.join(__dirname, "crop-slide-png.py")}" "${src}" "${dest}"`, {
        stdio: "pipe",
    });
}

function parseArgs() {
    const args = process.argv.slice(2);
    let from = 1;
    let to = TOTAL_PAGES;
    let resume = false;
    for (let i = 0; i < args.length; i++) {
        if (args[i] === "--from") from = parseInt(args[++i], 10);
        else if (args[i] === "--to") to = parseInt(args[++i], 10);
        else if (args[i] === "--resume") resume = true;
    }
    return { from, to, resume };
}

function padPage(n) {
    return String(n).padStart(3, "0");
}

function renderPage(page) {
    fs.mkdirSync(CACHE_DIR, { recursive: true });
    const prefix = path.join(CACHE_DIR, `page-${padPage(page)}`);
    const png = `${prefix}.png`;
    if (!fs.existsSync(png)) {
        execSync(`pdftoppm -f ${page} -l ${page} -png -r ${DPI} "${PDF_PATH}" "${prefix}"`, {
            stdio: "pipe",
        });
    }
    const candidates = [`${prefix}.png`, `${prefix}-${padPage(page)}.png`];
    const found = candidates.find((p) => fs.existsSync(p));
    if (!found) throw new Error(`PNG not found for page ${page}`);
    return found;
}

function parseSlideText(text, page) {
    const lines = cleanLines(text);
    if (!lines.length) return { error: "empty_ocr", page, raw: text };

    let answerKey = null;
    let bodyEnd = lines.length;
    for (let i = lines.length - 1; i >= 0; i--) {
        const compact = lines[i].replace(/[\s.|,;:!?]/g, "");
        if (ANSWER_RE.test(compact)) {
            answerKey = compact.toUpperCase();
            bodyEnd = i;
            break;
        }
    }

    const body = lines.slice(0, bodyEnd);
    let optStart = body.findIndex((l) => isOptionLine(l));
    if (optStart < 0) {
        return { error: "no_options", page, raw: text, lines: body.slice(0, 15) };
    }

    const qStart = findQuestionStart(body.slice(0, optStart));
    const qLines = body.slice(qStart, optStart);

    const options = [];
    let i = optStart;
    while (i < body.length) {
        const parsed = normalizeOptionLine(body[i]);
        if (!parsed) break;
        let optText = parsed.text;
        i++;
        while (i < body.length && !isOptionLine(body[i])) {
            optText += " " + body[i].trim();
            i++;
        }
        options.push({ letter: parsed.letter, text: optText.replace(/\s+/g, " ").trim() });
    }

    const textQ = qLines.join(" ").replace(/\s+/g, " ").trim();
    const letters = answerKey ? answerKey.split("") : [];
    const selected = letters.map((L) => options.find((o) => o.letter === L)).filter(Boolean);

    if (!textQ || options.length < 2 || !answerKey || selected.length !== letters.length) {
        return {
            error: "parse_failed",
            page,
            raw: text,
            textQ: textQ.slice(0, 120),
            optCount: options.length,
            answerKey,
        };
    }

    const block = [textQ, ...options.map((o) => `${o.letter}. ${o.text}`), answerKey].join("\n");
    return { block, page, textQ, answerKey };
}

async function ocrPage(worker, page) {
    const txtCache = path.join(CACHE_DIR, `page-${padPage(page)}.txt`);
    const cropped = path.join(CACHE_DIR, `page-${padPage(page)}-crop.png`);
    if (fs.existsSync(txtCache)) return fs.readFileSync(txtCache, "utf8");

    const png = renderPage(page);
    if (!fs.existsSync(cropped)) cropSlidePng(png, cropped);
    const {
        data: { text },
    } = await worker.recognize(cropped);
    fs.writeFileSync(txtCache, text, "utf8");
    return text;
}

async function main() {
    const { from, to, resume } = parseArgs();
    if (!fs.existsSync(PDF_PATH)) {
        console.error("Missing:", PDF_PATH);
        process.exit(1);
    }

    fs.mkdirSync(CACHE_DIR, { recursive: true });

    let existingBlocks = [];
    let existingAudit = [];
    if (resume && fs.existsSync(OUT_MD)) {
        existingBlocks = fs.readFileSync(OUT_MD, "utf8").split(/\n\n+/).filter(Boolean);
    }
    if (resume && fs.existsSync(OUT_AUDIT)) {
        try {
            existingAudit = JSON.parse(fs.readFileSync(OUT_AUDIT, "utf8"));
        } catch {
            existingAudit = [];
        }
    }

    const processedPages = new Set(existingAudit.map((a) => a.page));
    const okBlocks = resume ? [...existingBlocks] : [];
    const audit = resume ? [...existingAudit] : [];

    console.log(`OCR swr.pdf pages ${from}-${to} (resume=${resume})`);
    const worker = await createWorker("eng");
    await worker.setParameters({
        tessedit_pageseg_mode: "6",
    });

    for (let page = from; page <= to; page++) {
        if (resume && processedPages.has(page) && okBlocks.length >= page - from) {
            continue;
        }
        process.stdout.write(`\rpage ${page}/${to}...`);
        try {
            const text = await ocrPage(worker, page);
            const result = parseSlideText(text, page);
            if (result.error) {
                audit.push({
                    page,
                    reason: result.error,
                    textQ: result.textQ,
                    optCount: result.optCount,
                    answerKey: result.answerKey,
                    rawOcr: (result.raw || text).slice(0, 800),
                });
            } else {
                okBlocks.push(result.block);
            }
        } catch (err) {
            audit.push({ page, reason: "ocr_error", message: String(err.message || err) });
        }

        if (page % 25 === 0) {
            fs.writeFileSync(OUT_MD, okBlocks.join("\n\n") + (okBlocks.length ? "\n" : ""), "utf8");
            fs.writeFileSync(OUT_AUDIT, JSON.stringify(audit, null, 2), "utf8");
        }
    }

    await worker.terminate();

    fs.writeFileSync(OUT_MD, okBlocks.join("\n\n") + (okBlocks.length ? "\n" : ""), "utf8");
    fs.writeFileSync(OUT_AUDIT, JSON.stringify(audit, null, 2), "utf8");

    console.log(`\nDone: ${okBlocks.length} OK, ${audit.length} audit entries`);
    console.log("→", OUT_MD);
    console.log("→", OUT_AUDIT);
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
});
