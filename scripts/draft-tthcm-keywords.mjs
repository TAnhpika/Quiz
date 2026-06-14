/**
 * Draft-generate all TTHCM Q|A keywords, report verbatim failures.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DUMP = path.join(__dirname, "tthcm-questions-dump.json");

function strip(s) {
    return (s || "").replace(/\.$/, "").trim();
}

function norm(s) {
    return (s || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
}

function countWords(s) {
    return s.split(/\s+/).filter(Boolean).length;
}

function trimQ(s, max = 8) {
    const w = s.split(/\s+/).filter(Boolean);
    return w.length <= max ? w.join(" ") : w.slice(0, max).join(" ");
}

function extractQuote(t) {
    const m = t.match(/[""]([^""]{8,90})[""]/);
    return m ? m[1].replace(/\[\.\.\.\]|\[\…\]/g, "").trim() : null;
}

function isNot(t) {
    const n = norm(t);
    return /khong dung|khong phai|khong bao gom|sai nhat|sai nhất/.test(n);
}

function buildQ(q) {
    const t = q.text;
    const a = strip(q.answer);
    const n = norm(t);

    if (isNot(t)) return trimQ(`KHÔNG đúng - ${a}`, 8);

    const quote = extractQuote(t);
    if (quote && /tac pham|trich|trích|van kien|tác phẩm|tuyên bố|tuyên bố/.test(n)) {
        if (/đảng.*vững|thuyền/.test(norm(quote))) return "Đảng vững thuyền chạy - tác phẩm";
        if (/ngọc.*mài|vang.*luyện/.test(norm(quote))) return "ngọc mài vàng luyện - tác phẩm";
        if (/thành hay bại|cán bộ/.test(norm(quote))) return "thành bại do cán bộ - tác phẩm";
        if (/lợi.*dân|loi.*dan/.test(norm(quote))) return "việc lợi hại cho dân - tác phẩm";
        if (/mục đích.*đảng|muc dich.*dang/.test(norm(t))) return "Mục đích ĐLVN - sự kiện";
        return trimQ(`${quote.slice(0, 40)} - tác phẩm`, 8);
    }

    if (/dien vao|điền vào|\[\.\.\.\]|\[\…\]/.test(n)) {
        const q2 = extractQuote(t);
        if (q2) return trimQ(q2.replace(/\[\.\.\.\].*/, "").trim(), 8);
        return "điền khẩu theo Bác";
    }

    if (/ngay |ngày |nam |năm |thời gian|thời gian|thời điểm/.test(n)) {
        const subj = t.replace(/\?.*$/, "").slice(-55);
        return trimQ(subj, 8);
    }

    if (/vi sao|vì sao|vì sao/.test(n)) {
        const m = t.match(/vì sao ([^?]+)/i) || t.match(/vì sao ([^?]+)/i);
        if (m) return trimQ(m[1], 8);
    }

    if (/tai dau|tại đâu|o dau|ở đâu|tại đâu/.test(n)) return trimQ(`địa điểm ${a}`, 8);

    const cleaned = t
        .replace(/["""].*?["""]/g, "")
        .replace(/theo hồ chí minh|theo hồ chí minh|chọn đáp án|chọn đáp án[^.]*\./gi, "")
        .replace(/\?.*$/, "")
        .trim();
    return trimQ(cleaned || t.slice(0, 50), 8);
}

function buildA(q) {
    const src = strip(q.answer);
    if (src.includes(";")) return src.split(";").map((p) => p.trim()).join(" · ");
    if (src.length > 70 && src.includes(",")) {
        const parts = src.split(",").map((p) => p.trim()).filter(Boolean);
        if (parts.length <= 3 && parts.every((p) => norm(src).includes(norm(p)))) {
            return parts.join(" · ");
        }
    }
    return src;
}

const dump = JSON.parse(fs.readFileSync(DUMP, "utf8"));
const out = {};
const badA = [];
const badQ = [];

for (const q of dump) {
    let qCue = buildQ(q);
    if (countWords(qCue) < 2) qCue = trimQ(`${qCue} ${strip(q.answer).slice(0, 15)}`, 8);
    const aCue = buildA(q);
    const kw = `Q: ${qCue} | A: ${aCue}`;
    out[String(q.id)] = kw;

    if (countWords(qCue) > 10) badQ.push({ id: q.id, q: qCue, words: countWords(qCue) });

    const frags = aCue.split(/\s*·\s*/);
    const src = strip(q.answer);
    for (const f of frags) {
        if (!norm(src).includes(norm(f))) badA.push({ id: q.id, f, answer: q.answer });
    }
}

console.log("badA", badA.length, "badQ", badQ.length);
badA.slice(0, 15).forEach((b) => console.log(JSON.stringify(b)));
badQ.slice(0, 10).forEach((b) => console.log(JSON.stringify(b)));

fs.writeFileSync(path.join(__dirname, "tthcm-keywords-draft.json"), JSON.stringify(out, null, 2) + "\n");
console.log("draft written", Object.keys(out).length);
