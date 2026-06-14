/**
 * Generate curated TTHCM keywords (draft) — run then validate & fix failures.
 * Usage: node scripts/generate-tthcm-keywords.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DUMP = path.join(__dirname, "tthcm-questions-dump.json");
const OUT = path.join(__dirname, "tthcm-keywords.json");

const STOP = new Set([
    "theo", "trong", "cua", "của", "voi", "với", "cho", "den", "đến", "nay", "la", "là",
    "mot", "một", "cac", "các", "nhu", "như", "khi", "thi", "thì", "duoc", "được",
    "khong", "không", "co", "có", "va", "và", "hay", "hoac", "hoặc", "neu", "nếu",
    "dung", "đúng", "nhat", "nhất", "chon", "chọn", "dien", "điền", "vao", "vào",
    "cho", "trong", "the", "gi", "gì", "nao", "nào", "dau", "đâu", "thi", "thời",
    "gian", "thoi", "nam", "năm", "ngay", "ngày", "thi", "tháng", "thang",
]);

function normalize(s) {
    return (s || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^\p{L}\p{N}\s]/gu, " ")
        .replace(/\s+/g, " ")
        .trim();
}

function isNotQuestion(text) {
    const n = normalize(text);
    return (
        n.includes("khong dung") ||
        n.includes("khong phai") ||
        n.includes("khong bao gom") ||
        n.includes("khong dung nhat") ||
        n.includes("khong dung.") ||
        n.includes("khong dung,") ||
        /khong\s+dung/.test(n) ||
        /khong\s+bao\s+gom/.test(n)
    );
}

function isAnswerRepeat(hook, correct) {
    const p = normalize(hook);
    const c = normalize(correct.replace(/\.$/, ""));
    if (!p || !c) return false;
    if (p === c) return true;
    const shorter = p.length <= c.length ? p : c;
    const longer = p.length <= c.length ? c : p;
    return longer.includes(shorter) && shorter.length >= longer.length * 0.85;
}

function countWords(s) {
    return s.split(/\s+/).filter(Boolean).length;
}

function trimWords(s, max = 8, min = 3) {
    const words = s.replace(/\.$/, "").split(/\s+/).filter(Boolean);
    if (words.length <= max) return words.join(" ");
    return words.slice(0, max).join(" ");
}

function shortLabel(opt, maxLen = 12) {
    let s = opt.replace(/\.$/, "").trim();
    // dates: keep date part
    const dateMatch = s.match(/\d{1,2}[\/\-]\d{1,2}[\/\-]?\d{0,4}/);
    if (dateMatch) return dateMatch[0].replace(/\//g, "-");
    if (/^năm \d{4}/i.test(s)) return s.match(/\d{4}/)[0];
    if (/^tháng \d+/i.test(s)) {
        const m = s.match(/tháng\s*\d+[\/\-]?\d{0,4}/i);
        if (m) return m[0].replace(/\s+/g, "").replace(/\//g, "-");
    }
    // first 1-2 meaningful words
    const words = s.split(/[\s,;]+/).filter((w) => w.length > 1 && !STOP.has(normalize(w)));
    if (words.length >= 2 && words[0].length <= 8) return words.slice(0, 2).join(" ").slice(0, maxLen);
    if (words[0]) return words[0].slice(0, maxLen);
    return s.slice(0, maxLen);
}

function buildContrast(q) {
    const correct = q.answer ?? q.options[q.answer];
    const wrong = q.options.filter((o) => o !== correct);
    const labels = wrong.map((o) => shortLabel(o)).filter(Boolean);
    const uniq = [...new Set(labels)].slice(0, 3);
    return uniq.join("/");
}

function hookFromWork(answer) {
    const a = answer.replace(/\.$/, "");
    if (/đường kách mệnh/i.test(a)) return "luận điểm trong Đường Kách mệnh";
    if (/bản án/i.test(a)) return "tác phẩm Bản án thực dân";
    if (/đạo đức cách mạng/i.test(a)) return "ngọc mài vàng luyện đạo đức";
    if (/sửa đổi lối/i.test(a)) return "cán bộ đạo đức Sửa đổi lối làm";
    if (/di chúc/i.test(a)) return "giữ đoàn kết như con ngươi Di chúc";
    if (/tuyên ngôn độc lập/i.test(a)) return "tự giúp mình Tuyên ngôn độc lập";
    if (/lịch sử nước ta/i.test(a)) return "Dân ta phải biết sử Lịch sử";
    if (/nâng cao đạo đức/i.test(a)) return "Đảng viên đi trước Nâng cao đức";
    if (/thư gửi/i.test(a)) return "việc lợi hại dân Thư UBND";
    if (/lời kêu gọi/i.test(a)) return "không sợ chiến tranh Lời kêu gọi";
    if (/tự phê bình/i.test(a)) return "sửa khuyết điểm bài Tự phê bình";
    return trimWords(a, 6);
}

function hookFromQuestion(q, answer) {
    const t = normalize(q.text);
    const a = answer.replace(/\.$/, "");

    if (/tac pham|trich trong|trích trong|van kien|văn kiện|bai bao|bài báo/.test(t)) {
        if (/đường kách|duong kach/.test(normalize(a))) return "luận điểm Đảng vững thuyền chạy";
        if (/di chuc|di chúc/.test(normalize(a))) return "đoàn kết như con ngươi Di chúc";
        if (/dai hoi|đại hội/.test(normalize(a))) {
            const m = a.match(/lần thứ\s*(II|III|IV|V|IX|X|XI|XII|\d+)/i);
            if (m) return `văn kiện Đại hội ${m[1]}`;
        }
        return hookFromWork(a);
    }

    if (/dien vao|điền vào|cho trống|\[\.\.\.\]|\[\.\.\.\]|\[\…\]/.test(t)) {
        if (a.includes(";")) {
            const parts = a.split(";").map((p) => p.trim());
            return trimWords(parts.join(" "), 8);
        }
        if (a.length <= 25) return trimWords(`điền khẩu ${a}`, 8);
        return trimWords(a, 6);
    }

    if (/ngay |ngày |nam |năm |thoi gian|thời gian/.test(t)) {
        const date = shortLabel(a, 20);
        if (/1858|1884|1920|1925|1930|1941|1945|1951|1977/.test(a)) {
            const ctx = t.includes("thanh lap") ? "thành lập" : t.includes("xuat ban") ? "xuất bản" : "thời điểm";
            return trimWords(`${ctx} ${date}`, 8);
        }
        return trimWords(`thời điểm ${date}`, 8);
    }

    if (/tai dau|tại đâu|o dau|ở đâu/.test(t)) {
        return trimWords(`địa điểm ${shortLabel(a, 25)}`, 8);
    }

    if (/ai\?|cua ai|của ai|la ai|là ai/.test(t)) {
        return trimWords(`nhân vật ${shortLabel(a, 20)}`, 8);
    }

    if (/mac – lenin|mác – lênin|chu nghia/.test(normalize(a))) {
        const m = a.match(/chủ nghĩa [^,;.]+/i);
        if (m) return trimWords(`nền tảng ${m[0]}`, 8);
    }

    if (/giai cap|giai cấp|giai đoạn/.test(t)) {
        return trimWords(a, 7);
    }

    if (/nguyen tac|nguyên tắc/.test(t)) {
        return trimWords(`nguyên tắc ${shortLabel(a, 20)}`, 8);
    }

    if (/vai tro|vai trò/.test(t)) {
        return trimWords(`vai trò ${shortLabel(a, 25)}`, 8);
    }

    if (/muc dich|mục đích|muc tieu|mục tiêu/.test(t)) {
        return trimWords(`mục tiêu ${shortLabel(a, 22)}`, 8);
    }

    if (/dan chu|dân chủ/.test(t)) {
        if (/gián tiếp/.test(a)) return "bầu cử đại biểu gián tiếp";
        if (/trực tiếp/.test(a)) return "dân chủ trực tiếp biểu quyết";
        if (/làm chủ/.test(a)) return "nước dân chủ nhân dân làm chủ";
        if (/là chủ|la chu/.test(normalize(a))) return "dân là chủ khát vọng";
    }

    if (/giai phong|giải phóng/.test(t)) {
        if (/tien de|tiền đề/.test(normalize(a))) {
            if (/dan toc truoc|dân tộc trước/.test(normalize(a))) return "dân tộc trước giai cấp tiền đề";
            return trimWords(a, 7);
        }
    }

    if (/tu luc|tự lực/.test(normalize(a))) return "tự lực cánh sinh chính";

    if (/dac tinh|đặc tính/.test(normalize(a))) return "do đặc tính giai cấp công nhân";

    if (/triet de|triệt để/.test(normalize(a))) return "ba giải phóng thống nhất triệt để";

    if (/cung ran mem deo|cứng rắn mềm dẻo/.test(normalize(a))) return "cứng rắn nguyên tắc mềm dẻo sách lược";

    if (/can bo| cán bộ/.test(t) && /tot hay kem|tốt hay kém/.test(normalize(a))) return "thành bại do cán bộ tốt kém";

    if (/chien luoc|chiến lược/.test(normalize(a))) return "đại đoàn kết vấn đề chiến lược";

    if (/hiến pháp|hien phap/.test(normalize(a))) return "quản lý bằng Hiến pháp pháp luật";

    // default: take distinctive words from answer avoiding full copy
    const words = a.split(/\s+/).filter((w) => w.length > 2 && !STOP.has(normalize(w)));
    if (words.length >= 3) {
        let hook = words.slice(0, 6).join(" ");
        if (countWords(hook) > 8) hook = words.slice(0, 5).join(" ");
        if (countWords(hook) >= 3 && !isAnswerRepeat(hook, a)) return hook;
    }

    // verb + concept from question
    if (/vi sao|vì sao/.test(t)) return trimWords(`lý do ${shortLabel(a, 30)}`, 8);
    if (/la gi|là gì|la gì/.test(t)) return trimWords(`khái niệm ${shortLabel(a, 30)}`, 8);

    return trimWords(a, 6);
}

function generateKeyword(q) {
    const answer = q.answer ?? q.options[q.answerIndex];
    if (!answer) throw new Error(`No answer for id ${q.id}`);
    const notQ = isNotQuestion(q.text);
    const contrast = buildContrast(q);

    let hook;
    if (notQ) {
        // NOT question: hook describes the WRONG option (correct answer in NOT questions IS the wrong one)
        hook = hookFromQuestion(q, answer);
        if (countWords(hook) < 3) hook = trimWords(`⚠ sai ${answer}`, 8).replace(/^⚠ sai /, "");
        hook = `⚠ NOT · ${trimWords(hook, 8)}`;
    } else {
        hook = hookFromQuestion(q, answer);
        if (countWords(hook) < 3) {
            hook = trimWords(answer, 8);
        }
        if (countWords(hook) > 8) hook = trimWords(hook, 8);
    }

    // ensure min 3 words for NOT (after prefix stripped in validate)
    const hookBody = hook.replace(/^⚠\s*NOT\s*·\s*/i, "");
    if (countWords(hookBody) < 3) {
        const extra = trimWords(answer, 5);
        hook = notQ ? `⚠ NOT · ${extra}` : extra;
    }
    if (countWords(hook.replace(/^⚠\s*NOT\s*·\s*/i, "")) > 8) {
        const body = trimWords(hook.replace(/^⚠\s*NOT\s*·\s*/i, ""), 8);
        hook = notQ ? `⚠ NOT · ${body}` : body;
    }

    if (!notQ && isAnswerRepeat(hook, answer)) {
        // add question-context prefix
        const t = normalize(q.text);
        if (/tac pham/.test(t)) hook = `trích tác phẩm ${shortLabel(answer, 15)}`;
        else if (/dien vao/.test(t)) hook = `điền ${shortLabel(answer, 18)}`;
        else hook = trimWords(`theo Bác ${shortLabel(answer, 20)}`, 8);
    }

    hook = notQ ? hook : hook.replace(/^⚠\s*NOT\s*·\s*/i, "");
    if (notQ && !hook.startsWith("⚠ NOT")) hook = `⚠ NOT · ${hook}`;

    const body = hook.replace(/^⚠\s*NOT\s*·\s*/i, "");
    if (countWords(body) > 8) {
        const trimmed = trimWords(body, 8);
        hook = notQ ? `⚠ NOT · ${trimmed}` : trimmed;
    }

    return contrast ? `${hook} · ≠ ${contrast}` : hook;
}

// Manual overrides for quality (high-value / tricky questions)
const OVERRIDES = {
    "1": "luận điểm lái thuyền Đảng vững · ≠ Bản án/Chánh cương/Thường thức",
    "2": "thiếu tư tưởng độc lập PTTSTT · ≠ lý luận/đảng/chiến tranh",
    "3": "ba giải phóng thống nhất triệt để · ≠ an toàn/phù hợp/thông minh",
    "4": "bầu cử đại biểu gián tiếp · ≠ trực tiếp/tập trung/trực tiếp",
    "5": "thành lập BNG 28-08-1945 · ≠ 02-09/07-05/03-02",
    "6": "nước dân chủ nhân dân làm chủ · ≠ vô sản/vì dân/quản lý",
    "7": "do đặc tính giai cấp công nhân · ≠ ý muốn/số lượng/Đảng",
    "8": "việc lợi hại dân Thư UBND · ≠ Tỉnh nhà/Bắc bộ/kháng chiến",
    "9": "Pháp xâm lược 1858 An Hải · ≠ 1885/1858 cảng/1860",
    "10": "dân chủ nhân dân làm chủ · ≠ công nhân/công dân/công-nông",
    "11": "mọi quyền lực thuộc nhân dân · ≠ chăm lo/đại biểu/biểu quyết",
    "12": "tự lực cánh sinh chính · ≠ lãnh đạo/đường lối/độc lập",
    "13": "nông dân giàu nông nghiệp thịnh · ≠ công nghiệp/nhân tài/thương nghiệp",
    "14": "mở đầu ra mắt ĐLVN 03-03-1951 · ≠ kết thúc/03-02/07-02",
    "21": "nền tảng tư tưởng Mác Lênin · ≠ phê bình/đoàn kết/tập trung",
    "23": "cứng rắn nguyên tắc mềm dẻo · ≠ nhân nhượng/bất biến/mềm lợi ích",
    "24": "thành bại do cán bộ tốt kém · ≠ đường lối/hoạch định",
    "25": "đại đoàn kết vấn đề chiến lược · ≠ sách lược/sống còn/thủ đoạn",
    "27": "nhà nước CNTB có TB và XH · ≠ QHSX cũ/chỉ TB/chỉ XH",
    "28": "chống tham ô lãng phí như giặc · ≠ bè phái/tham nhũng/phá hoại",
    "29": "Đảng vững cách mệnh thuyền chạy · ≠ có thể/cách mạng",
    "33": "CN dễ ra đời châu Á Đông · ≠ châu Âu/Tây Nam/Đông Âu",
    "34": "nhiệm vụ QT III tên Lý Thụy · ≠ Lin/HCM/Nguyễn Ba",
    "36": "ham muốn nước hoàn toàn độc lập · ≠ nhanh/thắng nhanh/giải phóng",
    "37": "ngọc mài vàng luyện đạo đức CM · ≠ ĐK mệnh/Nâng cao/Liên Xô",
    "45": "dân tộc trước giai cấp tiền đề · ≠ song song/giai cấp trước/không liên quan",
    "47": "⚠ NOT · chủ nghĩa cá nhân kẻ thù · ≠ đế quốc/tư bản/nghèo nàn",
    "48": "phụng sự tổ quốc phục vụ dân · ≠ lợi ích VS/giàu mạnh",
    "50": "nội lực chính ngoại lực quan trọng · ≠ không cần/ngoại đầu/như nhau",
    "52": "con đường bạo lực cách mạng · ≠ chính quốc/Mác-Lênin/ngoại giao",
    "54": "mỗi người có tốt xấu thiện ác · ≠ ưu nhược/không tốt/đúng sai",
    "55": "kẻ thù XH là cá nhân · ≠ lạm quyền/tham ô/phản động",
    "68": "đạo đức CM do rèn luyện HCM · ≠ Trường Chinh/Lê Duẩn/Lênin",
    "90": "⚠ NOT · không gồm CM thế giới tài sản · ≠ quy luật/nguồn gốc/nội dung VN",
    "93": "⚠ NOT · thất bại phương Đông cơ sở · ≠ truyền thống VN/thực tiễn/Mác-Lênin",
    "108": "⚠ NOT · phong trào quần chúng rộng · ≠ nói đi làm/xây chống/tu dưỡng",
    "120": "⚠ NOT · đòi bình đẳng dân tộc · ≠ đấu tranh/nhà nước/thành lập NN",
    "133": "⚠ NOT · văn hóa phải tiên tiến · ≠ đại chúng/dân tộc/khoa học",
    "134": "hai cánh một con chim · ≠ bạch tuộc/đĩa hai vòi/đại bàng",
    "132": "cốt lõi nhân đạo chiến đấu · ≠ yêu thương/thương dân/quan tâm",
    "142": "⚠ NOT · đạo đức không gắn thói quen · ≠ người-người/xã hội/việc làm",
    "144": "⚠ NOT · nhà nước XHCN cơ cấu MT · ≠ Đảng/Tổ chức/Đoàn TN",
    "147": "⚠ NOT · kế thừa yêu nước đoàn kết · ≠ yêu thương/niềm tin/khoan dung",
    "157": "⚠ NOT · con đường cải cách tư sản · ≠ phong kiến/dân chủ/vô sản",
    "158": "⚠ NOT · văn hóa du lịch lĩnh vực · ≠ giáo dục/văn nghệ/đời sống",
    "159": "⚠ NOT · sẵn sàng hy sinh Tổ quốc · ≠ trung-hiếu/yêu thương/cần kiệm",
    "165": "⚠ NOT · CM thuộc địa tầm quan trọng · ≠ tự giải phóng VS/anh em/công nhân",
    "167": "hình tượng chủ nghĩa TB con đĩa · ≠ bạch tuộc/chim/ hai cánh",
    "168": "CM dân tộc thắng trước chính quốc · ≠ đồng thời/tiền đề/phụ thuộc",
    "172": "⚠ NOT · tài nguyên thiên nhiên sức mạnh · ≠ yêu nước/đoàn kết/văn hóa",
    "174": "⚠ NOT · phục tùng đa số không đúng · ≠ kỷ luật/đoàn kết/phê bình",
    "197": "⚠ NOT · dân làm gì pháp không cấm · ≠ đại biểu/ủng hộ/kiểm soát",
    "202": "⚠ NOT · Việt Minh hợp nhất MT · ≠ Tổ quốc/Liên minh/GP miền Nam",
    "229": "⚠ NOT · gắn độc lập thuộc địa khác · ≠ thống nhất/tự do/thật sự",
    "230": "⚠ NOT · yêu cầu CM giải phóng thuộc địa · ≠ truyền thống/tinh hoa Đông",
    "236": "⚠ NOT · đóng góp không phải con người mới · ≠ văn hóa mới/văn nghệ/quan điểm",
    "241": "⚠ NOT · lợi ích VS làm mục tiêu · ≠ đoàn kết/công-nông-trí/hiệp thương",
    "244": "⚠ NOT · giải phóng các nước thuộc địa · ≠ khát vọng/giải pháp/cổ vũ",
    "244": "⚠ NOT · giải phóng thuộc địa không phải · ≠ khát vọng/giải pháp/cổ vũ",
    "253": "⚠ NOT · tiêu cực không phải thành tích · ≠ kiêu ngạo/tư túng/tham ô",
    "254": "⚠ NOT · đánh đổ địa chủ ruộng đất · ≠ đế quốc/con đường/nhà nước",
    "258": "yêu nước kết hợp quốc tế · ≠ dân-giai cấp/dân tộc-XH/độc lập-hạnh phúc",
};

function main() {
    const bank = JSON.parse(fs.readFileSync(DUMP, "utf8"));
    const out = {};
    for (const q of bank) {
        out[String(q.id)] = OVERRIDES[String(q.id)] || generateKeyword(q);
    }
    fs.writeFileSync(OUT, JSON.stringify(out, null, 2) + "\n", "utf8");
    console.log(`Wrote ${Object.keys(out).length} keywords to ${OUT}`);
}

main();
