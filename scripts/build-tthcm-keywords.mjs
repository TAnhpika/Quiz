/**
 * Build tthcm-keywords.json (Q|A per keywordsRulesVN.md)
 * Usage: node scripts/build-tthcm-keywords.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DUMP = path.join(__dirname, "tthcm-questions-dump.json");
const OUT = path.join(__dirname, "tthcm-keywords.json");

const MAX_FRAGS = 4;
const MAX_FRAG_WORDS = 8;
const SHORT_ANSWER_WORDS = 6;

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

function isNotQuestion(text) {
    const n = norm(text);
    if (/chon dap an khong dung/.test(n)) return true;
    if (/yeu to khong/.test(n)) return true;
    if (/khong bao gom/.test(n) && /nao sau day|noi dung nao|suc manh/.test(n)) return true;
    if (/quan diem nao.*khong phai/.test(n)) return true;
    if (/khong phai cua ho chi minh/.test(n)) return true;
    return false;
}

function cleanQuestionStem(text) {
    return text
        .replace(/^Chọn đáp án (đúng nhất|KHÔNG đúng|đúng)\.?\s*/i, "")
        .replace(/^Chọn đáp án (đúng nhất|KHÔNG đúng|đúng)\.?\s*/i, "")
        .replace(/^Theo (Hồ )?Chí Minh,?\s*/gi, "")
        .replace(/^Theo tư tưởng Hồ Chí Minh,?\s*/gi, "")
        .replace(/^Trong môn học tư tưởng Hồ Chí Minh,?\s*/gi, "")
        .replace(/^Trong quan điểm[^,]+,\s*/gi, "")
        .replace(/["""]["""][^"""]{35,}["""]/g, " ")
        .replace(/\?.*$/, "")
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
    const n = norm(src);
    return frags.every((f) => n.includes(norm(f)));
}

/** Cân bằng A: tối đa 4 cụm nguyên văn, không đọc như câu hoàn chỉnh dài */
function extractAnswerFragments(answer, expl) {
    const src = strip(answer);
    const sources = [src, strip(expl || answer)];

    if (src.includes(";")) {
        const parts = src.split(";").map((p) => p.trim()).filter(Boolean).slice(0, MAX_FRAGS);
        if (allInSource(parts, src)) return parts.join(" · ");
    }

    if (countWords(src) <= SHORT_ANSWER_WORDS) {
        return src;
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

    const vuaParts = src.match(/vừa\s+(.+?),?\s+vừa\s+(.+)$/iu);
    if (vuaParts) {
        candidates.push([`vừa ${vuaParts[1].trim()}`, `vừa ${vuaParts[2].trim()}`]);
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

    if (/\s+·\s+/u.test(src)) {
        const parts = src.split(/\s+·\s+/u).map((p) => p.trim()).filter(Boolean);
        if (parts.length >= 2 && allInSource(parts, src)) candidates.push(parts.slice(0, MAX_FRAGS));
    }

    if (/\s+–\s+|\s+-\s+/u.test(src)) {
        const parts = src.split(/\s+–\s+|\s+-\s+/u).map((p) => p.trim()).filter(Boolean);
        if (parts.length >= 2 && parts.length <= MAX_FRAGS && parts.every((p) => countWords(p) <= MAX_FRAG_WORDS)) {
            candidates.push(parts);
        }
    }

    const bangMatch = src.match(/(.{8,50})\s+bằng\s+(.{8,55})/iu);
    if (bangMatch) {
        candidates.push([bangMatch[1].trim(), `bằng ${bangMatch[2].trim()}`.slice(0, 55)]);
    }

    const deMatch = src.match(/(.{10,45})\s+để\s+(.{8,50})/iu);
    if (deMatch) {
        candidates.push([deMatch[1].trim(), `để ${deMatch[2].trim()}`.slice(0, 50)]);
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
        const score = frags.length * 10 - Math.max(...frags.map(countWords));
        const bestScore = best.length * 10 - Math.max(...best.map(countWords));
        if (frags.length > 1 && (best.length === 1 || score >= bestScore)) {
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

function buildAnswerCue(answer, expl) {
    return extractAnswerFragments(answer, expl);
}

function buildQuestionCue(q) {
    const text = q.text;
    const answer = strip(q.answer);
    const n = norm(text);

    if (isNotQuestion(text)) {
        const stem = text
            .replace(/^Chọn đáp án KHÔNG đúng\.?\s*/i, "")
            .replace(/^Chọn đáp án KHÔNG đúng\.?\s*/i, "")
            .replace(/^Theo (Hồ )?Chí Minh,?\s*/gi, "")
            .replace(/\?.*$/, "")
            .trim();
        return trimQ(`KHÔNG đúng - ${stem}`, 8);
    }

    const quote = extractQuoted(text);

    if (quote && /tac pham|trich|trích|tác phẩm|van kien|văn kiện|luận điểm/.test(n)) {
        const qn = norm(quote);
        if (qn.includes("dang co vung") || qn.includes("thuyen")) return "Đảng vững thuyền chạy - tác phẩm";
        if (qn.includes("ngoc") && qn.includes("mai")) return "ngọc mài vàng luyện - tác phẩm";
        if (qn.includes("thanh hay bai") || qn.includes("can bo")) return "thành bại do cán bộ - tác phẩm";
        if (qn.includes("loi cho dan") || qn.includes("hai cho dan")) return "việc lợi hại cho dân - tác phẩm";
        if (qn.includes("chong") && qn.includes("quan lieu")) return "chống tham ô quan liêu - điền";
        const short = quote.replace(/\[\.\.\.\]|\[\…\]|….*$/g, "").trim();
        return trimQ(`${short.slice(0, 35)} - tác phẩm`, 8);
    }

    if (/dien vao|điền vào|cho trống|\[\.\.\.\]|\[\…\]|…/.test(n)) {
        if (quote) {
            let qPart = quote.replace(/\[\.\.\.\]|\[\…\].*$/g, "").trim();
            qPart = qPart.replace(/,\s*$/, "");
            if (/giải phóng dân tộc.*giải phóng giai cấp/i.test(qPart)) return "ba giải phóng thống nhất";
            if (/nước ta là nước/i.test(qPart)) return "nước dân chủ - điền khẩu";
            if (/chế độ ta là chế độ/i.test(qPart)) return "chế độ dân chủ - điền khẩu";
            if (/đảng có vững/i.test(qPart)) return "Đảng vững cách mệnh - điền";
            if (/ham muốn|ham muon/i.test(qPart)) return "ham muốn nước độc lập - điền";
            if (/việt nam muốn làm bạn/i.test(qPart)) return "Việt Nam làm bạn - điền";
            if (/mục đích phê bình/i.test(qPart)) return "mục đích phê bình - điền";
            if (/giữ gìn sự đoàn kết/i.test(qPart)) return "đoàn kết như con ngươi - điền";
            if (/cơ quan nhà nước/i.test(qPart)) return "cơ quan dựa vào nhân dân - điền";
            if (/nông dân giàu/i.test(qPart)) return "Nông dân giàu - điền khẩu";
            return trimQ(qPart, 8);
        }
        return "điền khẩu theo Bác";
    }

    if (/mục đích.*đảng lao|muc dich.*dang lao|ra mắt.*đảng lao/i.test(text)) {
        return "Mục đích ĐLVN - sự kiện";
    }

    if (/ngay |ngày |nam |năm |thoi gian|thời gian|thời điểm|thời điểm/.test(n)) {
        const stem = cleanQuestionStem(text);
        if (/thanh lap|thành lập/.test(n)) {
            const m = stem.match(/(Bộ|Đảng|Hội|Liên|Việt|Đoàn|Quốc hội|Việt Minh|Mặt trận)[^,?]*/i);
            return trimQ(`thành lập ${m ? m[0] : stem}`, 8);
        }
        if (/xuat ban|xuất bản/.test(n)) return trimQ(`xuất bản ${stem}`, 8);
        return trimQ(stem, 8);
    }

    if (/tai dau|tại đâu|o dau|ở đâu|tại đâu|ở đâu/.test(n)) {
        return trimQ(`địa điểm ${answer}`, 8);
    }

    if (/vi sao|vì sao|vì sao/.test(n)) {
        const m = text.match(/vì sao ([^?]+)/i) || text.match(/vì sao ([^?]+)/i);
        if (m) return trimQ(m[1], 8);
    }

    if (/la gi|là gì|la gì|nghia la|nghĩa là|là gì/.test(n)) {
        return trimQ(cleanQuestionStem(text), 8);
    }

    if (/bầu cử|bau cu/.test(n)) return "bầu cử đại biểu - dân chủ";
    if (/vai tro|vai trò/.test(n)) return trimQ(cleanQuestionStem(text), 8);
    if (/nguyen tac|nguyên tắc/.test(n)) return "nguyên tắc ngoại giao theo Bác";
    if (/nhan vat|nhân vật|ai la|ai là/.test(n)) return trimQ(`nhân vật ${answer}`, 8);

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

// Override Q + A (A: tối đa 4 cụm, cân bằng gợi nhớ)
const OVERRIDES = {
    "1": "Q: Đảng vững thuyền chạy - tác phẩm | A: Đường Kách mệnh",
    "2": "Q: nông dân không lãnh đạo CM | A: Không có tư tưởng độc lập · phương thức sản xuất tiên tiến",
    "3": "Q: ba giải phóng thống nhất | A: Triệt để nhất",
    "4": "Q: bầu cử đại biểu QH-HĐND | A: Dân chủ gián tiếp",
    "5": "Q: thành lập Bộ ngoại giao | A: 28/08/1945",
    "6": "Q: nước dân chủ - điền khẩu | A: Dân chủ · Làm chủ",
    "7": "Q: vai trò lãnh đạo công nhân | A: Đặc tính của giai cấp công nhân",
    "8": "Q: việc lợi hại cho dân - tác phẩm | A: Thư gửi Ủy ban nhân dân · các Kỳ, Tỉnh, Huyện và Làng",
    "9": "Q: Pháp xâm lược Việt Nam | A: Năm 1858 · đồn An Hải - Sơn Trà",
    "10": "Q: chế độ dân chủ - điền khẩu | A: Nhân dân",
    "11": "Q: nhà nước của dân | A: Mọi quyền lực · thuộc về nhân dân",
    "12": "Q: tranh thủ giúp đỡ nước XHCN | A: Tự lực cánh sinh · sức mình là chính",
    "13": "Q: Nông dân giàu - điền khẩu | A: Nông nghiệp",
    "14": "Q: Mục đích ĐLVN - sự kiện | A: Lời mở đầu buổi ra mắt · ngày 03/03/1951",
    "15": "Q: Việt Nam làm bạn - điền khẩu | A: Mọi nước dân chủ",
    "16": "Q: đại đoàn kết cách mạng | A: Yêu cầu khách quan",
    "17": "Q: văn hóa nghĩa hẹp - thời điểm | A: Sau Cách mạng Tháng Tám · 1945",
    "18": "Q: mục đích phê bình - điền | A: Giúp nhau sữa chữa",
    "19": "Q: hành vi đạo đức gắn với | A: Ý thức đạo đức",
    "20": "Q: việc lợi hại - điền khẩu | A: Dân",
    "21": "Q: nền tảng tư tưởng Đảng | A: Chủ nghĩa Mác – Lênin",
    "22": "Q: chế độ chính trị ta xây dựng | A: Giai cấp công nhân · nhân dân lao động làm chủ",
    "23": "Q: nguyên tắc ngoại giao theo Bác | A: vừa cứng rắn về nguyên tắc · vừa mềm dẻo về sách lược",
    "24": "Q: thành bại cách mạng | A: Cán bộ tốt hay kém",
    "25": "Q: đại đoàn kết dân tộc | A: Đại đoàn kết dân tộc · vấn đề chiến lược",
    "26": "Q: nhà nước pháp quyền hiệu lực | A: quản lý đất nước bằng Hiến pháp · pháp luật",
    "27": "Q: nhà nước CNTB có TB và XH | A: chủ nghĩa tư bản · chủ nghĩa xã hội",
    "28": "Q: chống tham ô quan liêu - điền | A: Tham ô · lãng phí",
    "29": "Q: Đảng vững cách mệnh - điền | A: Cách mệnh · thuyền mới chạy",
    "30": "Q: nhà nước pháp quyền hiện nay | A: luật pháp hoàn chỉnh · phân quyền rõ ràng",
    "31": "Q: cơ quan dựa vào nhân dân - điền | A: Nhân dân",
    "32": "Q: đoàn kết như con ngươi - điền | A: Con ngươi mắt mình",
    "33": "Q: CN ra đời dễ ở đâu | A: Châu Á · phương Đông",
    "34": "Q: nhiệm vụ quốc tế lần III | A: Lý Thuỵ",
    "35": "Q: bản chất cách mạng của Đảng | A: Bản chất cách mạng của Đảng",
    "36": "Q: ham muốn nước độc lập - điền | A: Hoàn toàn độc lập",
    "37": "Q: ngọc mài vàng luyện - tác phẩm | A: Đạo đức cách mạng",
    "38": "Q: New York - ảnh hưởng tư tưởng | A: nhập cư mặc nhiên được hưởng những quyền hợp pháp · người Việt Nam phải đi xin của Pháp",
    "39": "Q: chủ nghĩa dân tộc HCM | A: Chân chính",
    "40": "Q: CM giải phóng dân tộc - sự nghiệp | A: Quần chúng nhân dân",
    "41": "Q: quy tắc đạo đức xã hội | A: Tôn trọng củng cố · phát triển",
    "42": "Q: động lực giải phóng dân tộc | A: Chủ nghĩa dân tộc",
    "43": "Q: CM chống Pháp cuối XIX | A: Tất cả đều thất bại",
    "44": "Q: thành bại do cán bộ - tác phẩm | A: Sửa đổi lối làm việc",
    "45": "Q: dân tộc và giai cấp thuộc địa | A: Giải phóng dân tộc · tiền đề · giải phóng giai cấp",
    "46": "Q: thành lập Hội VNCMTN | A: Quảng Châu (Trung Quốc)",
    "47": "Q: KHÔNG đúng - kẻ thù CM giải phóng | A: Chủ nghĩa cá nhân",
    "48": "Q: mục tiêu lý tưởng Đảng CSVN | A: Phụng sự tổ quốc · phục vụ nhân dân",
    "49": "Q: CM bạo lực - đấu tranh | A: đấu tranh quân sự · đấu tranh ngoại giao",
    "50": "Q: nội lực và ngoại lực | A: Nội lực là chính · ngoại lực là quan trọng",
    "51": "Q: Tự phê bình - bài báo 28/1/1946 | A: Tự phê bình",
    "68": "Q: đạo đức CM không từ trời - của ai | A: Hồ Chí Minh",
    "90": "Q: KHÔNG đúng - TTHCM không bao gồm | A: cách mạng thế giới · tài sản tinh thần cho cách mạng thế giới",
    "100": "Q: hạt nhân trong đại đoàn kết | A: điều kiện · đoàn kết ngoài xã hội",
    "134": "Q: CM dân tộc và CM XH | A: Hai cánh của một con chim",
    "165": "Q: KHÔNG đúng - không phải quan điểm HCM | A: chống chủ nghĩa đế quốc · cách mạng thuộc địa · tầm quan trọng đặc biệt",
    "172": "Q: KHÔNG đúng - sức mạnh dân tộc | A: Tài nguyên thiên nhiên",
    "250": "Q: Luận điểm HCM viết 17/12/1958 | A: 17/12/1958",
    "300": "Q: KHÔNG đúng - đoàn kết quốc tế | A: chống lại · chủ nghĩa xét lại",
};

function buildKeyword(q) {
    const id = String(q.id);
    if (OVERRIDES[id]) return OVERRIDES[id];

    let qCue = buildQuestionCue(q);
    const aCue = buildAnswerCue(q.answer, q.expl);

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
        if (frags.length > MAX_FRAGS) {
            failures.push({ id: q.id, err: `too many frags: ${frags.length}`, kw });
        }
        for (const frag of frags) {
            if (!fragmentInSource(frag, sources)) {
                failures.push({ id: q.id, err: `not verbatim: "${frag}"`, answer: q.answer });
            }
            if (countWords(frag) > MAX_FRAG_WORDS + 2) {
                failures.push({ id: q.id, err: `frag too long: "${frag}"`, kw });
            }
        }
        if (countWords(m[1]) > 10) {
            failures.push({ id: q.id, err: `Q too long: ${countWords(m[1])} words`, kw });
        }
    }

    fs.writeFileSync(OUT, JSON.stringify(out, null, 2) + "\n", "utf8");
    console.log(`Wrote ${Object.keys(out).length} keywords`);

    if (failures.length) {
        console.error(`Failures: ${failures.length}`);
        failures.forEach((f) => console.error(JSON.stringify(f)));
        process.exit(1);
    }
}

main();
