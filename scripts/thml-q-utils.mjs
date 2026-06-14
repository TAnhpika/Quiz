/**
 * Question cue helpers for THML keywords (keywordsRulesVN.md §VII)
 */

export const MIN_Q_WORDS = 2;
export const TARGET_Q_WORDS = 7;
export const MAX_Q_WORDS = 7;

export const Q_FILLER_PREFIX =
    /^(theo |chọn |chọn |lựa chọn |lua chon |trong các |nhận định nào |hình thức nào |phạm trù nào |quy luật nào |ai là |theo ai)/i;

export const DANGLING_ENDINGS = new Set([
    "trong", "cua", "của", "ve", "về", "theo", "nao", "nào", "su", "sự", "ma", "mà",
    "va", "và", "tu", "từ", "voi", "với", "la", "là", "mot", "một", "cac", "các",
    "cho", "khi", "de", "để", "tren", "trên", "duoi", "dưới", "dung", "đúng", "ve",
    "giua", "giữa", "dau", "đâu", "gi", "gì", "ai", "do", "den", "đến", "nhu", "như",
    "thi", "thì", "duoc", "được", "hay", "hoac", "hoặc", "neu", "nếu", "dien", "điền",
    "them", "thêm", "vach", "vạch", "dang", "đang", "da", "đã", "tung", "từng", "nay", "này",
]);

export const CURRICULUM_TERMS = [
    "phủ định của phủ định",
    "mối liên hệ phổ biến",
    "quan hệ sản xuất",
    "lực lượng sản xuất",
    "phương thức sản xuất",
    "kiến trúc thượng tầng",
    "cơ sở hạ tầng",
    "tồn tại xã hội",
    "ý thức xã hội",
    "hình thái ý thức",
    "bản nguyên thế giới",
    "ý niệm tuyệt đối",
    "duy vật biện chứng",
    "duy tâm khách quan",
    "mâu thuẫn biện chứng",
    "phép biện chứng",
    "lao động sản xuất",
    "tồn tại khách quan",
    "vận động tuyệt đối",
    "nhận thức cảm tính",
    "nhận thức lý tính",
    "thực tiễn",
    "bản chất",
    "hiện tượng",
    "mâu thuẫn",
    "phủ định",
    "biện chứng",
    "vật chất",
    "ý thức",
    "nhà nước",
    "giai cấp",
    "dân tộc",
    "tôn giáo",
    "triết học",
    "quy luật",
    "phạm trù",
    "chân lý",
    "vận động",
    "lượng",
    "chất",
    "thống nhất",
    "đấu tranh",
];

export const PHILOSOPHERS = [
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
    ["khong tu", "Khổng Tử"],
    ["descart", "Descartes"],
];

export function strip(s) {
    return (s || "").replace(/\.$/, "").trim();
}

export function norm(s) {
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

export function countWords(s) {
    return s
        .split(/\s+/)
        .filter((w) => w && !/^[-–:|]+$/u.test(w))
        .length;
}

export function trimDanglingEnd(s) {
    let words = s.trim().split(/\s+/).filter(Boolean);
    while (words.length > MIN_Q_WORDS && DANGLING_ENDINGS.has(norm(words[words.length - 1]))) {
        words.pop();
    }
    while (words.length > MIN_Q_WORDS && /^[-–:]$/u.test(words[words.length - 1])) {
        words.pop();
    }
    return words.join(" ");
}

export function trimQ(s, max = TARGET_Q_WORDS) {
    const w = s.split(/\s+/).filter(Boolean);
    if (w.length <= max) return trimDanglingEnd(w.join(" "));
    return trimDanglingEnd(w.slice(0, max).join(" "));
}

export function extractQuoted(text) {
    const m = text.match(/[""]([^""]+)[""]/);
    return m ? m[1] : null;
}

export function detectPhilosopher(text) {
    const n = norm(text);
    if (/mac\s*[-–]?\s*lenin|marx\s*[-–]?\s*lenin|triet hoc mac/.test(n)) return null;
    for (const [key, name] of PHILOSOPHERS) {
        if (n.includes(key)) return name;
    }
    return null;
}

export function findCurriculumTerm(text) {
    const n = norm(text);
    for (const term of CURRICULUM_TERMS) {
        if (n.includes(norm(term))) return term;
    }
    return null;
}

export function isSaiQuestion(text) {
    return /phuong an sai|chon.*sai|\(chon phuong an sai\)/i.test(norm(text));
}

export function isNotQuestion(text) {
    const n = norm(text);
    return (
        /chon dap an khong dung|chon dap khong dung|chon dap khong dung/.test(n) ||
        /khong bao gom/.test(n) ||
        /khong phai la/.test(n) ||
        /nao khong phai|khong phai la hinh thuc/.test(n)
    );
}

export function cleanQuestionStem(text) {
    return text
        .replace(/^Chọn đáp án (đúng nhất|KHÔNG đúng|đúng)\.?\s*/i, "")
        .replace(/^Chọn đáp án (đúng nhất|KHÔNG đúng|đúng)\.?\s*/i, "")
        .replace(/^Chọn câu trả lời đúng[^.]*\.\s*/i, "")
        .replace(/^Chọn câu trả lời đúng:\s*/i, "")
        .replace(/^Chọn cụm từ (điền vào chỗ trống|đúng điền vào)[^:]*:\s*/i, "")
        .replace(/^Lựa chọn câu đúng nhất\.?\s*/i, "")
        .replace(/^Lựa chọn câu đúng theo quan điểm[^.]*\.?\s*/i, "")
        .replace(/^Lựa chọn đáp án đúng\.?\s*/i, "")
        .replace(/^(với|theo) quan điểm (của )?(triết học )?Mác( - Lênin)?[^:]*:?\s*/gi, "")
        .replace(/^(với|theo) quan điểm (của )?(Chủ nghĩa|Chủ nghĩa) duy vật biện chứng[^:]*:?\s*/gi, "")
        .replace(/^Theo triết học của Mác - Lênin,?\s*/gi, "")
        .replace(/^Theo (triết học )?Mác( - Lênin)?,?\s*/gi, "")
        .replace(/^Theo triết học Mác:?\s*/gi, "")
        .replace(/^Theo quan điểm của triết học Mác[^,]*,?\s*/gi, "")
        .replace(/^Theo Chủ nghĩa Mác[^,]*,?\s*/gi, "")
        .replace(/^Theo chủ nghĩa Mác-Lênin,?\s*/gi, "")
        .replace(/^Theo quan điểm của triết học Mác - Lênin,?\s*/gi, "")
        .replace(/^Trong các nhận định sau[^,]*,?\s*/i, "")
        .replace(/^Trong các câu sau[^:]*:\s*/i, "")
        .replace(/^Trong các cụm từ dưới đây[^,]*,?\s*/i, "")
        .replace(/^Trong các yếu tố của\s+/i, "")
        .replace(/^Theo quan điểm (của )?(chủ nghĩa )?Mác[^,]*,?\s*/gi, "")
        .replace(/^Theo quan điểm triết học Mác[^,]*\.?\s*/gi, "")
        .replace(/^Triết học Mác - Lênin cho rằng[^:]*:\s*/i, "")
        .replace(/^Trong các mặt của\s+/i, "")
        .replace(/^Nhận định nào đúng về\s+/i, "")
        .replace(/^Hình thức nào của\s+/i, "")
        .replace(/^Phạm trù nào dùng để chỉ\s+/i, "")
        .replace(/^Quy luật nào\s+/i, "")
        .replace(/^Vai trò của\s+/i, "")
        .replace(/^Đặc điểm của\s+/i, "")
        .replace(/^Chức năng của\s+/i, "")
        .replace(/^Nguồn gốc của\s+/i, "")
        .replace(/^Bản chất của\s+/i, "")
        .replace(/^Thêm cụm từ thích hợp vào chỗ trống:\s*/i, "")
        .replace(/^Điền (cụm từ|đáp án)[^:]*:\s*/i, "")
        .replace(/["""]["""][^"""]{40,}["""]/g, " ")
        .replace(/\?.*$/, "")
        .replace(/:\s*$/, "")
        .replace(/\(Chọn phương án SAI\)/gi, "")
        .replace(/^\s*,\s*/, "")
        .replace(/\s+/g, " ")
        .trim();
}

export function removeQuestionWords(stem) {
    return stem
        .replace(/\s+là\s+gì\b.*$/i, "")
        .replace(/\s+là\s+ai\b.*$/i, "")
        .replace(/\s+la\s+gi\b.*$/i, "")
        .replace(/\s+nào\s+(đúng|sai|quan trọng nhất|sau đây).*$/i, "")
        .replace(/\s+nào\b.*$/i, "")
        .replace(/\s+bao nhiêu\b.*$/i, "")
        .replace(/\s+mấy\b/i, " mấy")
        .replace(/\s+được hiểu là\b.*$/i, "")
        .replace(/\s+cho rằng\b.*$/i, "")
        .replace(/^Ai là\s+/i, "")
        .replace(/^Theo ai\b.*$/i, "")
        .replace(/\s+trong\s+lịch sử.*$/i, "")
        .replace(/\s+trong\s+quan hệ.*$/i, "")
        .replace(/\s+trong\s+các.*$/i, "")
        .replace(/\s+trong\s+quá trình.*$/i, "")
        .replace(/\s+đã,?\s*đang.*$/i, "")
        .replace(/\s+đã\s+từng.*$/i, "")
        .replace(/\s+hiện nay.*$/i, "")
        .replace(/\s+theo\s+quan\s+điểm.*$/i, "")
        .replace(/\s+với\s+quan\s+điểm.*$/i, "")
        .trim();
}

export function formatTwoPart(anchor, qualifier) {
    const a = anchor.trim();
    const b = qualifier.trim();
    if (!b || norm(a) === norm(b)) return trimQ(a);
    if (norm(b).startsWith(norm(a))) return trimQ(b);
    return trimQ(`${a} - ${b}`);
}

export function deriveTopicFromAnswer(answer, text) {
    const a = strip(answer);
    const quote = extractQuoted(text);
    if (quote) {
        const q = quote.replace(/\[\.\.\.\]|\[\…\]/g, "").trim();
        if (q.length > 6) return trimQ(q);
    }

    const rules = [
        [/lao động sản xuất vật chất/i, "ý thức - nguồn gốc trực tiếp"],
        [/Tâm lý xã hội/i, "tâm lý xã hội - đặc điểm"],
        [/Quy luật phủ định của phủ định/i, "quy luật - phủ định của phủ định"],
        [/Đấu tranh là tuyệt đối/i, "thống nhất - đấu tranh mặt đối lập"],
        [/Lượng/i, "phạm trù - lượng"],
        [/Kiến trúc thượng tầng/i, "kiến trúc thượng tầng"],
        [/Sở hữu đối với tư liệu/i, "quan hệ sản xuất - sở hữu"],
        [/5 hình thái|hình thái kinh tế/i, "lịch sử - mấy hình thái KTXH"],
        [/Tồn tại xã hội quyết định/i, "tồn tại xã hội - vai trò"],
        [/trọng nam khinh nữ/i, "trọng nam khinh nữ"],
        [/Mối liên hệ của sự vật/i, "mối liên hệ phổ biến"],
        [/độc lập tương đối.*ý thức xã hội/i, "ý thức xã hội - độc lập tương đối"],
        [/phi giai cấp|có giai cấp/i, "cấu trúc xã hội - giai cấp"],
        [/đấu tranh giai cấp/i, "đấu tranh giai cấp - vai trò"],
        [/lộn ngược/i, "hình thái ý thức - lộn ngược"],
        [/Nguyên nhân là phạm trù/i, "nguyên nhân - phạm trù triết học"],
        [/Tri thức phù hợp/i, "chân lý - định nghĩa"],
        [/3 chiều/i, "không gian - mấy chiều"],
        [/phản ánh năng động/i, "ý thức - bản chất"],
        [/Trái ngược nhau/i, "mâu thuẫn - mặt đối lập"],
        [/Vận động cơ học/i, "hình thức vận động - thứ tự"],
        [/Ý thức chỉ có ở con người/i, "ý thức - chỉ con người"],
        [/tri thức lý luận chung nhất/i, "triết học - định nghĩa"],
        [/Ý thức là sự phản ánh/i, "ý thức - bản chất"],
        [/Những kết luận của triết học/i, "triết học - thế giới quan"],
        [/Không phải mọi sự thay đổi/i, "lượng - chất biến đổi"],
        [/Một nội dung có thể/i, "nội dung - nhiều hình thức"],
        [/Vật chất và ý thức tồn tại/i, "vật chất - ý thức quyết định"],
    ];

    for (const [re, cue] of rules) {
        if (re.test(a) || re.test(text)) return cue;
    }

    const term = findCurriculumTerm(a);
    if (term) return trimQ(term);

    return trimQ(a.slice(0, 35));
}

function isGenericStem(stem) {
    const n = norm(stem);
    if (!stem || countWords(stem) <= 2) return true;
    if (/^(chon dap|lua chon|chon cum tu|voi quan diem|theo quan diem|chon dap khong)/.test(n)) return true;
    if (/^chon dap an dung nhat\b/.test(n)) return true;
    if (/^chon cum tu\b/.test(n)) return true;
    if (/^(triet hoc|y thuc|vat chat|nha nuoc|quy luat|pham tru)$/.test(n)) return true;
    return false;
}

export function buildQuestionCueVII(q) {
    const text = q.text;
    const answer = strip(q.answer);
    const n = norm(text);
    const quote = extractQuoted(text);
    const phil = detectPhilosopher(text);

    if (/phạm trù nào/i.test(text)) {
        const m = text.match(/Phạm trù nào\s+(.+?)(?:\?|:)/is);
        if (m) {
            let qual = m[1]
                .replace(/\s+trong quá trình.*/i, "")
                .replace(/\s+trong quan hệ.*/i, "")
                .replace(/\s+giữa người với người/i, " giữa người người")
                .trim();
            return formatTwoPart("phạm trù", trimQ(qual, 5));
        }
    }

    if (/đặc điểm tâm lý xã hội/i.test(text)) return "tâm lý xã hội - đặc điểm";
    if (/tồn tại khách quan/i.test(text) && /được hiểu/i.test(text)) return "tồn tại khách quan";
    if (/vai trò của tồn tại xã hội/i.test(text)) return "tồn tại xã hội - vai trò";
    if (/quy luật nào vạch ra khuynh hướng/i.test(text)) return "quy luật - khuynh hướng vận động";
    if (/triết học là gì/i.test(text)) return "triết học - định nghĩa";
    if (/vấn đề cơ bản của triết học/i.test(text)) return "vấn đề cơ bản - triết học";
    if (/phương pháp luận là/i.test(text)) return "phương pháp luận";
    if (/vật chất là/i.test(text)) return "vật chất - định nghĩa";
    if (/ý thức là/i.test(text) && !/hình thành/i.test(text)) return "ý thức - định nghĩa";
    if (/sản xuất vật chất là/i.test(text)) return "sản xuất vật chất - định nghĩa";
    if (/sản xuất xã hội gồm/i.test(text)) return "sản xuất xã hội - các loại";
    if (/vật chất có trước/i.test(text)) return "vật chất - quyết định ý thức";
    if (/thực tiễn là toàn bộ/i.test(text)) return "thực tiễn - hoạt động vật chất";
    if (/hạt nhân.*ý thức/i.test(text)) return "ý thức - hạt nhân tri thức";
    if (/nhân tố quyết định.*xã hội/i.test(text)) return "xã hội - nhân tố quyết định";
    if (/hình thức.*sản xuất xã hội.*nền tảng/i.test(text)) return "sản xuất xã hội - nền tảng";
    if (/phát triển của sự vật/i.test(text)) return "phát triển - tính kế thừa";
    if (/hình thức.*Truyện Kiều/i.test(text)) return "Truyện Kiều - hình thức";
    if (/tư liệu sản xuất.*quan trọng/i.test(text)) return "tư liệu sản xuất - yếu tố quan trọng";
    if (/mọi sự thay đổi về lượng/i.test(text)) return "lượng - chất biến đổi";
    if (/lịch sử được quyết định/i.test(text)) return "lịch sử - quyết định nhân dân";

    if (isSaiQuestion(text)) {
        if (/dong song|tam hai lan|van dong nho/.test(n)) return "SAI - vận động nhờ cái khác";
        const term = findCurriculumTerm(text) || deriveTopicFromAnswer(answer, text);
        return formatTwoPart("SAI", term.replace(/^SAI\s*-?\s*/i, ""));
    }

    if (isNotQuestion(text)) {
        let stem = cleanQuestionStem(text);
        stem = removeQuestionWords(stem);
        if (!stem || countWords(stem) <= 2) stem = deriveTopicFromAnswer(answer, text);
        return formatTwoPart("KHÔNG đúng", stem.replace(/^KHÔNG đúng\s*-?\s*/i, ""));
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
        return "Ăngghen - hình thức vận động";
    }

    if (/dien vao|điền vào|\[\.\.\.\]|\[\…\]/.test(n)) {
        if (quote) return trimQ(quote.replace(/\[\.\.\.\].*/, "").trim());
        return deriveTopicFromAnswer(answer, text);
    }

    if (phil && quote) {
        const qn = norm(quote);
        if (qn.includes("dong song")) return "Hêraclít - dòng sông";
        if (qn.includes("thuoc phien")) return "Mác - thuốc phiện của nhân dân";
        const short = quote.length > 30 ? quote.slice(0, 30).trim() : quote;
        return formatTwoPart(phil, short);
    }

    if (phil) {
        let stem = cleanQuestionStem(text);
        stem = removeQuestionWords(stem);
        stem = stem.replace(new RegExp(phil, "i"), "").replace(/^[-–:\s]+/, "").trim();
        const term = findCurriculumTerm(stem) || findCurriculumTerm(text);
        if (term) return formatTwoPart(phil, term);
        if (stem.length > 3) return formatTwoPart(phil, stem);
        return formatTwoPart(phil, deriveTopicFromAnswer(answer, text).split(" - ").pop());
    }

    let stem = cleanQuestionStem(text);
    stem = removeQuestionWords(stem);

    const term = findCurriculumTerm(stem) || findCurriculumTerm(text);
    if (term && stem.length > term.length + 3) {
        const rest = stem.replace(new RegExp(term, "i"), "").trim();
        if (rest.length > 2) return formatTwoPart(term, rest);
    }
    if (term && countWords(term) <= 5) {
        if (isGenericQ(trimQ(term))) return deriveTopicFromAnswer(answer, text);
        if (/mấy|bao nhiêu/.test(n)) {
            if (/hinh thuc phat trien/.test(n)) return "duy vật - mấy hình thức phát triển";
            const m = text.match(/mấy\s+([^?]+)/i) || text.match(/bao nhiêu\s+([^?]+)/i);
            if (m) return formatTwoPart(term, `mấy ${trimQ(m[1].trim(), 3)}`);
        }
        if (stem.length > term.length + 3) {
            const rest = stem.replace(new RegExp(term, "i"), "").trim();
            if (rest.length > 2) return formatTwoPart(term, rest);
        }
        return trimQ(term);
    }

    if (/la gi|là gì|duoc hieu la|được hiểu là/.test(n)) {
        const subj = text.match(/(.+?)\s+(là gì|được hiểu là)/i);
        if (subj) {
            const s = removeQuestionWords(subj[1].trim());
            const t = findCurriculumTerm(s) || s;
            return trimQ(t);
        }
    }

    if (stem && countWords(stem) >= 2 && !isGenericStem(stem)) return trimQ(stem);

    return deriveTopicFromAnswer(answer, text);
}

export function isGenericQ(qCue) {
    const c = qCue.trim();
    if (c.includes(" - ")) return false;
    if (/^(Platon|Hegel|Mác|Lênin|Ăngghen|Hêraclít|Aristotle|Khổng Tử)$/i.test(c)) return true;
    if (/^(Ý thức|Vật chất|Triết học|Nhà nước|Quy luật|Phạm trù)$/i.test(c)) return true;
    return false;
}

export function validateQuestionCueVII(qCue) {
    const errors = [];
    const warnings = [];
    const w = countWords(qCue);

    if (w < MIN_Q_WORDS) errors.push(`Q has ${w} words (min ${MIN_Q_WORDS})`);
    if (w > MAX_Q_WORDS) errors.push(`Q has ${w} words (max ${MAX_Q_WORDS} per §VII)`);
    if (Q_FILLER_PREFIX.test(qCue)) errors.push(`Q has filler prefix: "${qCue}"`);
    if (isGenericQ(qCue)) errors.push(`Q too generic: "${qCue}"`);

    const trimmed = qCue.trim();
    if (/là gì$|la gi$|là ai$|theo ai$/iu.test(trimmed)) {
        // ok patterns
    } else {
        const words = trimmed.split(/\s+/);
        const last = norm(words[words.length - 1]);
        if (DANGLING_ENDINGS.has(last) && w > 2) {
            errors.push(`Q dangling ending: "${qCue}"`);
        }
    }

    return { errors, warnings };
}
