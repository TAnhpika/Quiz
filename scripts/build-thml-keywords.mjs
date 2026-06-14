/**
 * Build thml-keywords.json (Q|A per keywordsRulesVN.md)
 * Usage: node scripts/build-thml-keywords.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DUMP = path.join(__dirname, "thml-questions-dump.json");
const OUT = path.join(__dirname, "thml-keywords.json");

const MAX_FRAGS = 4;
const MAX_FRAG_WORDS = 8;
const SHORT_ANSWER_WORDS = 6;

const PHILOSOPHERS = [
    ["hegel", "Hegel"],
    ["heracl", "Hêraclít"],
    ["heraclit", "Hêraclít"],
    ["platon", "Platon"],
    ["angghen", "Ăngghen"],
    ["engels", "Ăngghen"],
    ["feuerbach", "Feuerbach"],
    ["democrit", "Democrit"],
    ["aristote", "Aristotle"],
    ["spinoza", "Spinoza"],
    ["kant", "Kant"],
    ["lenin", "Lênin"],
    ["mac", "Mác"],
];

function strip(s) {
    return (s || "").replace(/\.$/, "").trim();
}

function norm(s) {
    return (s || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d")
        .replace(/Đ/g, "D")
        .toLowerCase()
        .replace(/[^\p{L}\p{N}\s]/gu, " ")
        .replace(/\s+/g, " ")
        .trim();
}

function countWords(s) {
    return s.split(/\s+/).filter(Boolean).length;
}

function trimQ(s, max = 8) {
    const w = s.split(/\s+/).filter(Boolean);
    return w.length <= max ? w.join(" ") : w.slice(0, max).join(" ");
}

function extractQuoted(text) {
    const m = text.match(/[""]([^""]+)[""]/);
    return m ? m[1] : null;
}

function detectPhilosopher(text) {
    const n = norm(text);
    for (const [key, name] of PHILOSOPHERS) {
        if (n.includes(key)) return name;
    }
    return null;
}

function isSaiQuestion(text) {
    const n = norm(text);
    return /phuong an sai|chon.*sai/.test(n);
}

function isNotQuestion(text) {
    const n = norm(text);
    if (/chon dap an khong dung|chon dap khong dung/.test(n)) return true;
    if (/khong bao gom/.test(n)) return true;
    if (/khong phai la/.test(n)) return true;
    if (/nao khong phai|khong phai la hinh thuc/.test(n)) return true;
    return false;
}

function cleanQuestionStem(text) {
    return text
        .replace(/^Chọn đáp án (đúng nhất|KHÔNG đúng|đúng)\.?\s*/i, "")
        .replace(/^Chọn đáp án (đúng nhất|KHÔNG đúng|đúng)\.?\s*/i, "")
        .replace(/^Lựa chọn câu đúng nhất\.?\s*/i, "")
        .replace(/^Theo (triết học )?Mác( - Lênin)?,?\s*/gi, "")
        .replace(/^Theo triết học Mác:?\s*/gi, "")
        .replace(/^Theo quan điểm của triết học Mác[^,]*,?\s*/gi, "")
        .replace(/^Theo chủ nghĩa Mác-Lênin,?\s*/gi, "")
        .replace(/["""]["""][^"""]{40,}["""]/g, " ")
        .replace(/\?.*$/, "")
        .replace(/\(Chọn phương án SAI\)/gi, "")
        .replace(/^\s*,\s*/, "")
        .replace(/\s+/g, " ")
        .trim();
}

function dedupeFrags(frags) {
    const seen = new Set();
    return frags.filter((f) => {
        const k = norm(f);
        if (!k || seen.has(k)) return false;
        seen.add(k);
        return true;
    });
}

function trimFragWords(s, max = MAX_FRAG_WORDS) {
    const w = s.split(/\s+/).filter(Boolean);
    return w.length <= max ? w.join(" ") : w.slice(0, max).join(" ");
}

function allInSource(frags, src) {
    return frags.every((f) => norm(src).includes(norm(f)));
}

function isFixedTermAnswer(src) {
    if (/^Chủ nghĩa\s/i.test(src)) return true;
    if (/^Triết học\s/i.test(src)) return true;
    if (/^Ý niệm tuyệt đối$/i.test(src)) return true;
    if (countWords(src) <= SHORT_ANSWER_WORDS) return true;
    return false;
}

function extractAnswerFragments(answer, expl) {
    const src = strip(answer);

    if (isFixedTermAnswer(src)) {
        return src;
    }

    if (src.includes(";")) {
        const parts = src.split(";").map((p) => p.trim()).filter(Boolean).slice(0, MAX_FRAGS);
        if (allInSource(parts, src)) return parts.join(" · ");
    }

    const candidates = [];

    const laParts = src.match(/^(.+?)\s+là\s+(.+)$/iu);
    if (laParts) {
        const a = laParts[1].trim();
        const b = laParts[2].trim();
        if (countWords(a) <= MAX_FRAG_WORDS && countWords(b) <= MAX_FRAG_WORDS) {
            candidates.push([a, b]);
        }
    }

    if (src.includes(",")) {
        const parts = src.split(",").map((p) => p.trim()).filter(Boolean);
        if (parts.length >= 2 && parts.length <= MAX_FRAGS && parts.every((p) => countWords(p) <= MAX_FRAG_WORDS)) {
            candidates.push(parts);
        }
    }

    if (/\s+và\s+/iu.test(src) && !src.includes(",")) {
        const parts = src.split(/\s+và\s+/iu).map((p) => p.trim()).filter(Boolean);
        if (parts.length >= 2 && parts.length <= MAX_FRAGS && parts.every((p) => countWords(p) <= MAX_FRAG_WORDS)) {
            candidates.push(parts);
        }
    }

    const tuMatch = src.match(/(.{8,55})\s+từ\s+(.{8,55})/iu);
    if (tuMatch) {
        candidates.push([tuMatch[2].trim(), tuMatch[1].trim()].filter(Boolean));
    }

    const words = src.split(/\s+/);
    if (words.length > MAX_FRAG_WORDS + 2) {
        const mid = Math.ceil(words.length / 2);
        candidates.push([words.slice(0, mid).join(" "), words.slice(mid).join(" ")]);
    }

    let best = [src];
    for (const c of candidates) {
        const frags = dedupeFrags(c.map((f) => trimFragWords(f)).filter(Boolean)).slice(0, MAX_FRAGS);
        if (!frags.length || !allInSource(frags, src)) continue;
        if (frags.length > 1 && (best.length === 1 || frags.length >= best.length)) {
            best = frags;
        }
    }

    if (best.length === 1 && countWords(best[0]) > MAX_FRAG_WORDS) {
        const w = best[0].split(/\s+/);
        const mid = Math.ceil(w.length / 2);
        best = [w.slice(0, mid).join(" "), w.slice(mid).join(" ")];
    }

    return dedupeFrags(best).slice(0, MAX_FRAGS).join(" · ");
}

function buildQuestionCue(q) {
    const text = q.text;
    const answer = strip(q.answer);
    const n = norm(text);
    const quote = extractQuoted(text);
    const phil = detectPhilosopher(text);

    if (isSaiQuestion(text)) {
        if (quote) return trimQ(`SAI - vận động nhờ cái khác`, 8);
        return trimQ(`SAI - ${cleanQuestionStem(text)}`, 8);
    }

    if (isNotQuestion(text)) {
        const stem = text
            .replace(/^Chọn đáp án KHÔNG đúng\.?\s*/i, "")
            .replace(/^Chọn đáp KHÔNG đúng\.?\s*/i, "")
            .replace(/^Theo triết học Mác-Lênin,?\s*/i, "")
            .replace(/\?.*$/, "")
            .trim();
        return trimQ(`KHÔNG đúng - ${stem}`, 8);
    }

    if (phil === "Platon" && /ban nguyen|y niem|phi vat chat/.test(n)) {
        return "Platon - bản nguyên thế giới";
    }
    if (phil === "Mác" && /thuoc phien|thuốc phiện/.test(n)) {
        return "Mác - thuốc phiện của nhân dân";
    }
    if (phil === "Hêraclít" && /dong song|dòng sông|tam hai lan/.test(n)) {
        return "Hêraclít - dòng sông";
    }
    if (phil === "Hegel" && /khoi nguyen|khởi nguyên/.test(n)) {
        return "Hegel - khởi nguyên thế giới";
    }
    if (/duy vat.*may hinh thuc|mấy hình thức phát triển/.test(n)) {
        return "duy vật - mấy hình thức phát triển";
    }
    if (phil === "Ăngghen" && /hinh thuc van dong/.test(n)) {
        return trimQ(`Ăngghen - hình thức vận động`, 8);
    }

    if (/dien vao|điền vào/.test(n)) {
        if (quote) return trimQ(quote.replace(/\[\.\.\.\].*/, "").trim(), 8);
        return trimQ(cleanQuestionStem(text), 8);
    }

    if (phil && quote) {
        const qn = norm(quote);
        if (qn.includes("dong song")) return "Hêraclít - dòng sông";
        if (qn.includes("thuoc phien")) return "Mác - thuốc phiện của nhân dân";
        return trimQ(`${phil} - ${quote.slice(0, 28)}`, 8);
    }

    if (phil) {
        const stem = cleanQuestionStem(text);
        const topic = stem.replace(new RegExp(phil, "i"), "").trim();
        if (topic.length > 3) return trimQ(`${phil} - ${topic}`, 8);
        return trimQ(`${phil} - ${answer.slice(0, 20)}`, 8);
    }

    if (/la gi|là gì|duoc hieu la|được hiểu là/.test(n)) {
        return trimQ(cleanQuestionStem(text), 8);
    }

    if (/theo mac|theo lenin|theo triet hoc/.test(n)) {
        return trimQ(cleanQuestionStem(text), 8);
    }

    return trimQ(cleanQuestionStem(text), 8);
}

function formatQA(qCue, aCue) {
    return `Q: ${qCue.trim()} | A: ${aCue.trim()}`;
}

function fragmentInSource(fragment, sources) {
    const f = norm(fragment);
    if (!f) return false;
    return sources.some((src) => norm(strip(src)).includes(f));
}

const OVERRIDES = {
    "1": "Q: Platon - bản nguyên thế giới | A: Chủ nghĩa duy tâm khách quan",
    "2": "Q: Mác - thuốc phiện của nhân dân | A: Tôn giáo",
    "3": "Q: Hêraclít - dòng sông | A: Biện chứng",
    "4": "Q: Hegel - khởi nguyên thế giới | A: Ý niệm tuyệt đối",
    "5": "Q: SAI - vận động nhờ cái khác | A: Triết học duy vật",
    "6": "Q: duy vật - mấy hình thức phát triển | A: Ba hình thức",
    "7": "Q: Ăngghen - hình thức vận động | A: Lý học",
    "8": "Q: ý thức hình thành từ lao động | A: lao động sản xuất vật chất · xã hội",
    "9": "Q: Mác - khả năng nhận thức thế giới | A: Có",
    "10": "Q: tồn tại khách quan | A: Tồn tại độc lập với ý thức của con người",
    "11": "Q: chân lý là gì | A: Tri thức phù hợp với hiện thực khách quan",
    "12": "Q: không gian tồn tại vật chất | A: 3 chiều",
    "13": "Q: bản chất ý thức | A: phản ánh năng động · sáng tạo hiện thực khách quan",
    "14": "Q: mặt đối lập của mâu thuẫn | A: Trái ngược nhau",
    "15": "Q: mối liên hệ phổ biến | A: giữa các sự vật · trong bản thân sự vật",
    "10": "Q: tồn tại khách quan | A: Tồn tại độc lập · ý thức của con người",
    "24": "Q: KHÔNG đúng - phương thức sản xuất | A: quan hệ sản xuất · quyết định tính chất · lực lượng sản xuất",
    "55": "Q: KHÔNG đúng - lực lượng sản xuất | A: mối quan hệ giữa người và người · quá trình sản xuất",
    "100": "Q: đồng hóa và dị hóa sinh học | A: Hai mặt đối lập",
    "141": "Q: nguồn gốc vận động - duy vật biện chứng | A: trong bản thân sự vật · tác động của các mặt, các yếu tố",
    "280": "Q: triết học là gì - Mác Lênin | A: tri thức lý luận chung nhất · thế giới · vị trí của con người",
    "344": "Q: trình tự phát triển duy vật | A: Chủ nghĩa duy vật chất phác · Chủ nghĩa duy vật siêu hình · Chủ nghĩa duy vật biện chứng",
};

function buildKeyword(q) {
    const id = String(q.id);
    if (OVERRIDES[id]) return OVERRIDES[id];

    let qCue = buildQuestionCue(q);
    const aCue = extractAnswerFragments(q.answer, q.expl);

    if (countWords(qCue) < 2) qCue = trimQ(`${qCue} ${strip(q.answer).slice(0, 18)}`, 8);
    if (countWords(qCue) > 10) qCue = trimQ(qCue, 8);

    return formatQA(qCue, aCue);
}

function main() {
    const bank = JSON.parse(fs.readFileSync(DUMP, "utf8"));
    const out = {};
    const failures = [];

    for (const q of bank) {
        const kw = buildKeyword(q);
        out[String(q.id)] = kw;

        const m = kw.match(/^Q:\s(.+?)\s\|\sA:\s(.+)$/s);
        if (!m) {
            failures.push({ id: q.id, err: "bad format", kw });
            continue;
        }
        const sources = [strip(q.answer), strip(q.expl || q.answer)];
        const frags = m[2].split(/\s*·\s*/).map((f) => f.trim()).filter(Boolean);
        if (frags.length > MAX_FRAGS) failures.push({ id: q.id, err: `too many frags`, kw });
        for (const frag of frags) {
            if (!fragmentInSource(frag, sources)) {
                failures.push({ id: q.id, err: `not verbatim: "${frag}"`, answer: q.answer });
            }
        }
        if (countWords(m[1]) > 10) failures.push({ id: q.id, err: "Q too long", kw });
    }

    fs.writeFileSync(OUT, JSON.stringify(out, null, 2) + "\n", "utf8");
    console.log(`Wrote ${Object.keys(out).length} keywords`);
    if (failures.length) {
        console.error(`Failures: ${failures.length}`);
        failures.slice(0, 40).forEach((f) => console.error(JSON.stringify(f)));
        process.exit(1);
    }
}

main();
