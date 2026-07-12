window.MEMOZY_BANKS = window.MEMOZY_BANKS || {};
window.MEMOZY_BANKS.listening = [
    // Booking a hotel
    { id: "ls-htl-01", term: "reservation", meaning: "đặt chỗ / đặt phòng", example: "I'd like to make a reservation for two nights.", paraphrase: null, phonetic: "/ˌrez.əˈveɪ.ʃən/", skill: "listening", path: ["section12", "hotel"], owner: "both", tags: ["situation"] },
    { id: "ls-htl-02", term: "single room", meaning: "phòng đơn", example: "Do you have a single room available?", paraphrase: null, phonetic: "/ˈsɪŋ.ɡəl ruːm/", skill: "listening", path: ["section12", "hotel"], owner: "tuananh", tags: ["situation"] },
    { id: "ls-htl-03", term: "double room", meaning: "phòng đôi", example: "We need a double room with a sea view.", paraphrase: null, phonetic: "/ˈdʌb.əl ruːm/", skill: "listening", path: ["section12", "hotel"], owner: "linh", tags: ["situation"] },
    { id: "ls-htl-04", term: "ensuite bathroom", meaning: "phòng tắm riêng liền kề", example: "All rooms come with an ensuite bathroom.", paraphrase: null, phonetic: "/ˌɒnˈswiːt ˈbɑːθ.ruːm/", skill: "listening", path: ["section12", "hotel"], owner: "both", tags: ["situation"] },
    { id: "ls-htl-05", term: "facilities", meaning: "tiện nghi / cơ sở vật chất", example: "The hotel facilities include a gym and pool.", paraphrase: null, phonetic: "/fəˈsɪl.ɪ.tiz/", skill: "listening", path: ["section12", "hotel"], owner: "tuananh", tags: ["situation"] },
    { id: "ls-htl-06", term: "complimentary breakfast", meaning: "bữa sáng miễn phí", example: "Complimentary breakfast is served from 7 to 10.", paraphrase: null, phonetic: "/ˌkɒm.plɪˈmen.tər.i/", skill: "listening", path: ["section12", "hotel"], owner: "linh", tags: ["situation"] },
    { id: "ls-htl-07", term: "check-in", meaning: "nhận phòng", example: "Check-in starts at 2 p.m.", paraphrase: null, phonetic: "/ˈtʃek.ɪn/", skill: "listening", path: ["section12", "hotel"], owner: "both", tags: ["situation"] },
    { id: "ls-htl-08", term: "check-out", meaning: "trả phòng", example: "Check-out is before 11 a.m.", paraphrase: null, phonetic: "/ˈtʃek.aʊt/", skill: "listening", path: ["section12", "hotel"], owner: "tuananh", tags: ["situation"] },

    // Job Application
    { id: "ls-job-01", term: "qualifications", meaning: "bằng cấp / trình độ", example: "What qualifications do you have for this role?", paraphrase: null, phonetic: "/ˌkwɒl.ɪ.fɪˈkeɪ.ʃənz/", skill: "listening", path: ["section12", "job"], owner: "both", tags: ["situation"] },
    { id: "ls-job-02", term: "vacancy", meaning: "vị trí tuyển dụng trống", example: "Is there a vacancy for a part-time assistant?", paraphrase: null, phonetic: "/ˈveɪ.kən.si/", skill: "listening", path: ["section12", "job"], owner: "linh", tags: ["situation"] },
    { id: "ls-job-03", term: "salary expectations", meaning: "mức lương mong muốn", example: "What are your salary expectations?", paraphrase: null, phonetic: "/ˈsæl.ər.i/", skill: "listening", path: ["section12", "job"], owner: "tuananh", tags: ["situation"] },
    { id: "ls-job-04", term: "shift work", meaning: "làm việc theo ca", example: "The position involves shift work, including nights.", paraphrase: null, phonetic: "/ʃɪft wɜːk/", skill: "listening", path: ["section12", "job"], owner: "both", tags: ["situation"] },
    { id: "ls-job-05", term: "interpersonal skills", meaning: "kỹ năng giao tiếp liên nhân", example: "Strong interpersonal skills are essential.", paraphrase: null, phonetic: "/ˌɪn.təˈpɜː.sən.əl/", skill: "listening", path: ["section12", "job"], owner: "linh", tags: ["situation"] },
    { id: "ls-job-06", term: "references", meaning: "người / thư giới thiệu", example: "Please provide two professional references.", paraphrase: null, phonetic: "/ˈref.ər.ən.sɪz/", skill: "listening", path: ["section12", "job"], owner: "tuananh", tags: ["situation"] },

    // Academic
    { id: "ls-ac-01", term: "lecture", meaning: "bài giảng", example: "The lecture will cover statistical methods.", paraphrase: null, phonetic: "/ˈlek.tʃər/", skill: "listening", path: ["section34", "academic"], owner: "both", tags: ["academic"] },
    { id: "ls-ac-02", term: "seminar", meaning: "hội thảo / buổi thảo luận nhỏ", example: "Students must attend the weekly seminar.", paraphrase: null, phonetic: "/ˈsem.ɪ.nɑː/", skill: "listening", path: ["section34", "academic"], owner: "tuananh", tags: ["academic"] },
    { id: "ls-ac-03", term: "deadline", meaning: "hạn chót", example: "The assignment deadline is next Friday.", paraphrase: null, phonetic: "/ˈded.laɪn/", skill: "listening", path: ["section34", "academic"], owner: "linh", tags: ["academic"] },
    { id: "ls-ac-04", term: "assignment", meaning: "bài tập lớn", example: "This assignment counts for 40% of the grade.", paraphrase: null, phonetic: "/əˈsaɪn.mənt/", skill: "listening", path: ["section34", "academic"], owner: "both", tags: ["academic"] },
    { id: "ls-ac-05", term: "bibliography", meaning: "danh mục tài liệu tham khảo", example: "Include a bibliography at the end of your essay.", paraphrase: null, phonetic: "/ˌbɪb.liˈɒɡ.rə.fi/", skill: "listening", path: ["section34", "academic"], owner: "tuananh", tags: ["academic"] },
    { id: "ls-ac-06", term: "hypothesis", meaning: "giả thuyết", example: "Our hypothesis is that sleep improves memory.", paraphrase: null, phonetic: "/haɪˈpɒθ.ə.sɪs/", skill: "listening", path: ["section34", "academic"], owner: "linh", tags: ["academic"] },
    { id: "ls-ac-07", term: "statistical data", meaning: "dữ liệu thống kê", example: "The lecture presented statistical data from 2020.", paraphrase: null, phonetic: "/stəˈtɪs.tɪ.kəl ˈdeɪ.tə/", skill: "listening", path: ["section34", "academic"], owner: "both", tags: ["academic"] },
];
