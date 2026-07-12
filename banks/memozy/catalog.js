/**
 * Memozy — cây phân loại Skill → Group → Leaf
 * path của leaf khớp card.path trong banks
 */
window.MEMOZY_CATALOG = {
    reading: {
        id: "reading",
        name: "Reading",
        goal: "Hiểu nhanh và chính xác nội dung bài đọc học thuật.",
        icon: "fa-book-open",
        color: "emerald",
        groups: [
            {
                id: "topics",
                name: "Theo chủ đề",
                leaves: [
                    { id: "environment", name: "Environment", path: ["topics", "environment"] },
                    { id: "health", name: "Health", path: ["topics", "health"] },
                ],
            },
            {
                id: "skill",
                name: "Skill-based",
                leaves: [
                    { id: "paraphrasing", name: "Paraphrasing keywords", path: ["skill", "paraphrasing"] },
                    { id: "awl", name: "Academic Word List", path: ["skill", "awl"] },
                ],
            },
        ],
    },
    listening: {
        id: "listening",
        name: "Listening",
        goal: "Nghe và bắt kịp thông tin trong ngữ cảnh đời sống và học thuật.",
        icon: "fa-headphones",
        color: "sky",
        groups: [
            {
                id: "section12",
                name: "Section 1–2 (Đời sống)",
                leaves: [
                    { id: "hotel", name: "Booking a hotel", path: ["section12", "hotel"] },
                    { id: "job", name: "Job Application", path: ["section12", "job"] },
                ],
            },
            {
                id: "section34",
                name: "Section 3–4 (Học thuật)",
                leaves: [
                    { id: "academic", name: "Lecture & Seminar", path: ["section34", "academic"] },
                ],
            },
        ],
    },
    writing: {
        id: "writing",
        name: "Writing",
        goal: "Dùng từ chính xác, đa dạng và học thuật để viết luận.",
        icon: "fa-pen-nib",
        color: "violet",
        groups: [
            {
                id: "task1",
                name: "Writing Task 1",
                leaves: [
                    { id: "trends", name: "Trend language", path: ["task1", "trends"] },
                    { id: "compare", name: "So sánh & tương phản", path: ["task1", "compare"] },
                    { id: "chart", name: "Chart", path: ["task1", "chart"] },
                    { id: "map", name: "Map", path: ["task1", "map"] },
                    { id: "process", name: "Process", path: ["task1", "process"] },
                ],
            },
            {
                id: "task2",
                name: "Writing Task 2",
                leaves: [
                    { id: "cohesive", name: "Cohesive devices", path: ["task2", "cohesive"] },
                    { id: "education", name: "Topic: Education", path: ["task2", "education"] },
                    { id: "paraphrase", name: "Paraphrase", path: ["task2", "paraphrase"] },
                ],
            },
        ],
    },
    speaking: {
        id: "speaking",
        name: "Speaking",
        goal: "Giao tiếp trôi chảy, tự nhiên và thể hiện vốn từ.",
        icon: "fa-comments",
        color: "orange",
        groups: [
            {
                id: "part1",
                name: "Part 1 (Thân mật)",
                leaves: [
                    { id: "hometown", name: "Hometown", path: ["part1", "hometown"] },
                    { id: "weather", name: "Weather", path: ["part1", "weather"] },
                ],
            },
            {
                id: "part2",
                name: "Part 2 (Miêu tả)",
                leaves: [
                    { id: "senses", name: "Ngũ quan & cảm xúc", path: ["part2", "senses"] },
                    { id: "place", name: "Tả cảnh đẹp", path: ["part2", "place"] },
                ],
            },
            {
                id: "part3",
                name: "Part 3 (Thảo luận)",
                leaves: [
                    { id: "analysis", name: "Phân tích & suy đoán", path: ["part3", "analysis"] },
                    { id: "fillers", name: "Fluency fillers", path: ["part3", "fillers"] },
                ],
            },
        ],
    },
};
