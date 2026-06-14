/** Ngân hàng câu hỏi: Tư tưởng Hồ Chí Minh (300 câu) — load on demand */
(function (global) {
    const bank = [
        {
            "id": 1,
            "text": "\"Đảng có vững thì cách mệnh mới thành công, cũng như người cầm lái có vững thuyền mới chạy\". Luận điểm này được trích trong tác phẩm nào của Bác?",
            "options": [
                "Bản án chế độ thực dân Pháp.",
                "Đường Kách mệnh.",
                "Chánh cương vắn tắt của Đảng.",
                "Thường thức chính trị."
            ],
            "answer": 1,
            "explanation": "Đường Kách mệnh.",
            "keywords": "Q: Đảng vững thuyền chạy - tác phẩm | A: Đường Kách mệnh"
        },
        {
            "id": 2,
            "text": "Theo Hồ Chí Minh, vì sao giai cấp nông dân không thể lãnh đạo được cách mạng Việt Nam?",
            "options": [
                "Lực lượng đông nhưng không có tiền đề tư tưởng, lý luận cách mạng triệt để.",
                "Không có tư tưởng độc lập, không đại diện cho phương thức sản xuất tiên tiến.",
                "Không có chính đảng, không thực hiện được đoàn kết giai cấp, tầng lớp khác.",
                "Không có phương tiện tổ chức chiến tranh hiện đại, không có đường lối đúng."
            ],
            "answer": 1,
            "explanation": "Không có tư tưởng độc lập, không đại diện cho phương thức sản xuất tiên tiến.",
            "keywords": "Q: nông dân không lãnh đạo CM | A: Không có tư tưởng độc lập · phương thức sản xuất tiên tiến"
        },
        {
            "id": 3,
            "text": "Điền vào chỗ trống đúng theo Hồ Chí Minh, “Giải phóng dân tộc, giải phóng giai cấp, giải phóng con người thống nhất nhau là tư tưởng cách mạng [...]”.",
            "options": [
                "An toàn nhất.",
                "Triệt để nhất.",
                "Phù hợp nhất.",
                "Thông minh nhất."
            ],
            "answer": 1,
            "explanation": "Triệt để nhất.",
            "keywords": "Q: ba giải phóng thống nhất | A: Triệt để nhất"
        },
        {
            "id": 4,
            "text": "Bầu cử các đại biểu Quốc hội và Hội đồng Nhân dân các cấp vào các cơ quan quyền lực nhà nước thuộc loại hình dân chủ:",
            "options": [
                "Trực tiếp và gián tiếp.",
                "Dân chủ gián tiếp.",
                "Tự do tập trung.",
                "Dân chủ trực tiếp."
            ],
            "answer": 1,
            "explanation": "Dân chủ gián tiếp.",
            "keywords": "Q: bầu cử đại biểu QH-HĐND | A: Dân chủ gián tiếp"
        },
        {
            "id": 5,
            "text": "Ngày thành lập Bộ ngoại giao của Viêt Nam là:",
            "options": [
                "28/08/1945.",
                "07/05/1954.",
                "02/09/1945.",
                "03/02/1930."
            ],
            "answer": 0,
            "explanation": "28/08/1945.",
            "keywords": "Q: thành lập Bộ ngoại giao | A: 28/08/1945"
        },
        {
            "id": 6,
            "text": "Điền vào chỗ trống đúng theo Hồ Chí Minh, “Nước ta là nước […], nghĩa là nhà nước do nhân dân […]”.",
            "options": [
                "Vô sản; Quản lý.",
                "Vì dân; Kiểm soát.",
                "Dân chủ; Làm chủ.",
                "Dân chủ; Quản lý."
            ],
            "answer": 2,
            "explanation": "Dân chủ; Làm chủ.",
            "keywords": "Q: nước dân chủ - điền khẩu | A: Dân chủ · Làm chủ"
        },
        {
            "id": 7,
            "text": "Vai trò lãnh đạo của giai cấp công nhân trong cách mạng Việt Nam được quyết định bởi:",
            "options": [
                "Ý muốn của Đảng Cộng sản.",
                "Đặc tính của giai cấp công nhân.",
                "Số lượng giai cấp công nhân.",
                "Ý muốn của giai cấp công nhân."
            ],
            "answer": 1,
            "explanation": "Đặc tính cuả giai cấp công nhân.",
            "keywords": "Q: vai trò lãnh đạo công nhân | A: Đặc tính của giai cấp công nhân"
        },
        {
            "id": 8,
            "text": "\"Việc gì có lợi cho dân, ta phải hết sức làm. Việc gì có hại cho dân, ta phải hết sức tránh\"… Được trích trong tác phẩm nào của Bác?",
            "options": [
                "Thư gửi các đồng chí Tỉnh nhà.",
                "Thư gửi các đồng chí Bắc bộ.",
                "Thư gửi Ủy ban nhân dân các Kỳ, Tỉnh, Huyện và Làng.",
                "Lời kêu gọi toàn quốc kháng chiến."
            ],
            "answer": 2,
            "explanation": "Thư gửi Ủy ban nhân dân các Kỳ, Tỉnh, Huyện và Làng.",
            "keywords": "Q: việc lợi hại cho dân - tác phẩm | A: Thư gửi Ủy ban nhân dân · các Kỳ, Tỉnh, Huyện và Làng"
        },
        {
            "id": 9,
            "text": "Pháp bắt đầu tiến công xâm lược Việt Nam vào thời gian nào? Ở đâu?",
            "options": [
                "Năm 1885, tại cảng Đà Nẵng.",
                "Năm 1858, tại đồn An Hải - Sơn Trà - Quảng nam Đà nẵng.",
                "Năm 1858, tại cảng Đà Nẵng.",
                "Năm 1860, tại Sơn Trà - Quảng nam Đà nẵng."
            ],
            "answer": 1,
            "explanation": "Năm 1858, tại đồn An Hải - Sơn Trà - Quảng nam Đà nẵng.",
            "keywords": "Q: Pháp xâm lược Việt Nam | A: Năm 1858 · đồn An Hải - Sơn Trà"
        },
        {
            "id": 10,
            "text": "Điền vào chỗ trống đúng theo Hồ Chí Minh, “Chế độ ta là chế độ dân chủ, nghĩa là […] làm chủ”.",
            "options": [
                "Công nhân.",
                "Công- Nông.",
                "Công dân.",
                "Nhân dân."
            ],
            "answer": 3,
            "explanation": "Nhân dân.",
            "keywords": "Q: chế độ dân chủ - điền khẩu | A: Nhân dân"
        },
        {
            "id": 11,
            "text": "Chọn đáp án đúng nhất. Nhà nước của dân theo tư tưởng Hồ Chí Minh nghĩa là:",
            "options": [
                "Chăm lo mọi mặt đời sống người lao động và các tầng lớp nhân dân.",
                "Đại biểu của Nhà nước do nhân dân trực tiếp hoặc gián tiếp bầu ra.",
                "Mọi quyền lực trong nhà nước và trong xã hội đều thuộc về nhân dân.",
                "Mọi công việc của nhà nước để dân có quyền biểu quyết để quyết định."
            ],
            "answer": 2,
            "explanation": "Mọi quyền lực trong nhà nước và trong xã hội đều thuộc về nhân dân.",
            "keywords": "Q: nhà nước của dân | A: Mọi quyền lực · thuộc về nhân dân"
        },
        {
            "id": 12,
            "text": "Chọn đáp án đúng nhất. Để tranh thủ sự giúp đỡ của các nước XHCN trong đấu tranh cách mạng, cần coi trọng nhân tố nào?",
            "options": [
                "Có sự lãnh đạo đúng đắn của Đảng Cộng sản.",
                "Đường lối đấu tranh theo cách mạng vô sản.",
                "Tự lực cánh sinh, dựa vào sức mình là chính.",
                "Có đường lối đấu tranh độc lập, tự chủ."
            ],
            "answer": 2,
            "explanation": "Tự lực cánh sinh, dựa vào sức mình là chính.",
            "keywords": "Q: tranh thủ giúp đỡ nước XHCN | A: Tự lực cánh sinh · sức mình là chính"
        },
        {
            "id": 13,
            "text": "Chọn cụm từ đúng với tư tưởng Hồ Chí Minh: \"Nông dân giàu thì nước ta giàu, […] thịnh thì nước ta thịnh\"",
            "options": [
                "Công nghiệp.",
                "Nhân tài.",
                "Thương nghiệp.",
                "Nông nghiệp."
            ],
            "answer": 3,
            "explanation": "Nông nghiệp.",
            "keywords": "Q: Nông dân giàu - điền khẩu | A: Nông nghiệp"
        },
        {
            "id": 14,
            "text": "“Mục đích của Đảng Lao động Việt Nam có thể gộp trong tám chữ…”, Hồ Chí Minh tuyên bố này trong sự kiện nào? Thời gian nào?",
            "options": [
                "Kết thúc buổi ra mắt của Đảng Lao động Việt Nam, ngày 03/02/1930.",
                "Lời kết thúc buổi ra mắt của Đảng Lao động Việt Nam, ngày 03/03/1951.",
                "Kết thúc buổi ra mắt của Đảng Lao động Việt Nam, ngày 07/02/1930.",
                "Lời mở đầu buổi ra mắt của Đảng Lao động Việt Nam, ngày 03/03/1951."
            ],
            "answer": 3,
            "explanation": "Lời mở đầu buổi ra mắt của Đảng Lao động Việt Nam, ngày 03/03/1951.",
            "keywords": "Q: Mục đích ĐLVN - sự kiện | A: Lời mở đầu buổi ra mắt · ngày 03/03/1951"
        },
        {
            "id": 15,
            "text": "Điền vào chỗ trống đúng theo Hồ Chí Minh, “Việt Nam muốn làm bạn với […], không gây thù oán với một ai”",
            "options": [
                "Mọi nước dân chủ.",
                "Các nước phát triển cao.",
                "Tất cả các nước dân chủ.",
                "Các nước xã hội chủ nghĩa."
            ],
            "answer": 0,
            "explanation": "Mọi nước dân chủ.",
            "keywords": "Q: Việt Nam làm bạn - điền khẩu | A: Mọi nước dân chủ"
        },
        {
            "id": 16,
            "text": "Theo Hồ Chí Minh, đối với sự nghiệp cách mạng, đại đoàn kết là:",
            "options": [
                "Yêu cầu khách quan.",
                "Yêu cầu của công nhân.",
                "Yêu cầu chủ quan.",
                "Yêu cầu của nông dân."
            ],
            "answer": 0,
            "explanation": "Yêu cầu khách quan.",
            "keywords": "Q: đại đoàn kết cách mạng | A: Yêu cầu khách quan"
        },
        {
            "id": 17,
            "text": "Quan điểm của Hồ Chí Minh về văn hoá theo nghĩa hẹp bắt đầu tính từ thời gian nào?",
            "options": [
                "Sau Cách mạng Tháng Tám năm 1945.",
                "Sau Cách mạng thành công năm 1975.",
                "Sau Cách mạng thành công năm 1954.",
                "Sau khi Nhật vào Đông Dương, 1943."
            ],
            "answer": 0,
            "explanation": "Sau Cách mạng Tháng Tám năm 1945.",
            "keywords": "Q: văn hóa nghĩa hẹp - thời điểm | A: Sau Cách mạng Tháng Tám · 1945"
        },
        {
            "id": 18,
            "text": "Điền vào chỗ trống đúng theo Hồ Chí Minh, “Mục đích phê bình cốt để […], giúp nhau tiến bộ”.",
            "options": [
                "Giúp nhau sữa chữa.",
                "Giúp nhau cải tạo.",
                "Sửa chữa sai lầm.",
                "Chỉ ra khuyết điểm."
            ],
            "answer": 0,
            "explanation": "Giúp nhau sữa chữa.",
            "keywords": "Q: mục đích phê bình - điền | A: Giúp nhau sữa chữa"
        },
        {
            "id": 19,
            "text": "Hành vi đạo đức gắn với:",
            "options": [
                "Ý thức trách nhiệm.",
                "Lòng nhân đạo.",
                "Lý trí.",
                "Ý thức đạo đức."
            ],
            "answer": 3,
            "explanation": "Ý thức đạo đức.",
            "keywords": "Q: hành vi đạo đức gắn với | A: Ý thức đạo đức"
        },
        {
            "id": 20,
            "text": "Điền vào chỗ trống đúng theo Hồ Chí Minh, “Việc gì có lợi cho […], ta phải hết sức làm; việc gì có hại cho […], ta phải hết sức tránh”.",
            "options": [
                "Nhà nước.",
                "Công dân.",
                "Dân.",
                "Đảng."
            ],
            "answer": 2,
            "explanation": "Dân.",
            "keywords": "Q: việc lợi hại - điền khẩu | A: Dân"
        },
        {
            "id": 21,
            "text": "Theo Hồ Chí Minh, nền tảng tư tưởng của Đảng phải dựa trên:",
            "options": [
                "Nguyên tắc tự phê bình và phê bình.",
                "Đại đoàn kết dân tộc.",
                "Nguyên tắc tập trung dân chủ.",
                "Chủ nghĩa Mác – Lênin."
            ],
            "answer": 3,
            "explanation": "Chủ nghĩa Mác – Lênin.",
            "keywords": "Q: nền tảng tư tưởng Đảng | A: Chủ nghĩa Mác – Lênin"
        },
        {
            "id": 22,
            "text": "Theo Hồ Chí Minh, chế độ chính trị mà chúng ta xây dựng là chế độ do:",
            "options": [
                "Giai cấp công nhân và nhân dân lao động làm chủ.",
                "Giai cấp nông dân và các tầng lớp nhân dân làm chủ.",
                "Giai cấp công nhân và giai cấp nông dân làm chủ.",
                "Đảng Cộng sản của giai cấp công nhân làm chủ."
            ],
            "answer": 0,
            "explanation": "Giai cấp công nhân và nhân dân lao động làm chủ.",
            "keywords": "Q: chế độ chính trị ta xây dựng | A: Giai cấp công nhân · nhân dân lao động làm chủ"
        },
        {
            "id": 23,
            "text": "Chọn đáp án đúng nhất theo tư tưởng Hồ Chí Minh về nguyên tắc ngoại giao:",
            "options": [
                "Phải cứng rắn về nguyên tắc, nhân nhượng về lợi ích.",
                "Dĩ bất biến, ứng vạn biến.",
                "Vừa cứng rắn về nguyên tắc, vừa mềm dẻo về sách lược.",
                "Phải mềm dẻo về sách lược, có thể nhân nhượng về lợi ích."
            ],
            "answer": 2,
            "explanation": "Vừa cứng rắn về nguyên tắc, vừa mềm dẻo về sách lược.",
            "keywords": "Q: nguyên tắc ngoại giao theo Bác | A: vừa cứng rắn về nguyên tắc · vừa mềm dẻo về sách lược"
        },
        {
            "id": 24,
            "text": "Theo tư tưởng Hồ Chí Minh, mọi việc thành công hay thất bại là do:",
            "options": [
                "Đường lối lãnh đạo đúng hay sai.",
                "Đường lối đúng hay sai.",
                "Cán bộ tốt hay kém.",
                "Công tác hoạch định cán bộ."
            ],
            "answer": 2,
            "explanation": "Cán bộ tốt hay kém.",
            "keywords": "Q: thành bại cách mạng | A: Cán bộ tốt hay kém"
        },
        {
            "id": 25,
            "text": "Chọn câu trả lời đúng nhất với tư tưởng Hồ Chí Minh:",
            "options": [
                "Đại đoàn kết dân tộc là vấn đề sách lược.",
                "Đại đoàn kết dân tộc là vấn đề sống còn.",
                "Đại đoàn kết dân tộc là thủ đoạn chính trị.",
                "Đại đoàn kết dân tộc là vấn đề chiến lược."
            ],
            "answer": 3,
            "explanation": "Đại đoàn kết dân tộc là vấn đề chiến lược.",
            "keywords": "Q: đại đoàn kết dân tộc | A: Đại đoàn kết dân tộc · vấn đề chiến lược"
        },
        {
            "id": 26,
            "text": "Theo Hồ Chí Minh, yêu cầu cơ bản nhất để xây dựng nhà nước pháp quyền có hiệu lực pháp lý mạnh mẽ là gì?",
            "options": [
                "Nhà nước phải chịu sự lãnh đạo của Đảng Cộng sản Việt Nam.",
                "Đẩy mạnh quan hệ quốc tế, tuân thủ hệ thống pháp luật quốc tế.",
                "Nhà nước phải quản lý đất nước bằng Hiến pháp và pháp luật.",
                "Nhà nước phải chịu sự kiểm tra, giám sát chặt chẽ của nhân dân."
            ],
            "answer": 2,
            "explanation": "Nhà nước phải quản lý đất nước bằng Hiến pháp và pháp luật.",
            "keywords": "Q: nhà nước pháp quyền hiệu lực | A: quản lý đất nước bằng Hiến pháp · pháp luật"
        },
        {
            "id": 27,
            "text": "Theo Hồ Chí Minh, trong CNTB nhà nước dưới chế độ dân chủ mới có những yếu tố nào?",
            "options": [
                "Quan hệ sản xuất cũ chiếm vai trò chủ đạo.",
                "Chủ nghĩa xã hội.",
                "Cả chủ nghĩa tư bản, cả chủ nghĩa xã hội.",
                "Chủ nghĩa tư bản."
            ],
            "answer": 2,
            "explanation": "Cả chủ nghĩa tư bản, cả chủ nghĩa xã hội.",
            "keywords": "Q: nhà nước CNTB có TB và XH | A: chủ nghĩa tư bản · chủ nghĩa xã hội"
        },
        {
            "id": 28,
            "text": "Điền vào chỗ trống đúng theo Hồ Chí Minh: \"Chống […] và bệnh quan liêu cũng quan trọng và cần thiết như việc đánh giặc trên mặt trận\".",
            "options": [
                "Tham ô, lãng phí.",
                "Lãng phí, bè phái.",
                "Tham nhũng, lãng phí.",
                "Phá hoại của công."
            ],
            "answer": 0,
            "explanation": "Tham ô, lãng phí.",
            "keywords": "Q: chống tham ô quan liêu - điền | A: Tham ô · lãng phí"
        },
        {
            "id": 29,
            "text": "Điền vào chỗ trống đúng theo Hồ Chí Minh, “Đảng có vững, [...] mới thành công, cũng như người cầm lái có vững thì […]”.",
            "options": [
                "Cách mệnh; thuyền có thể chạy.",
                "Cách mệnh; thuyền mới chạy.",
                "Cách mạng; thuyền có thể chạy.",
                "Cách mạng; thuyền mới chạy."
            ],
            "answer": 1,
            "explanation": "Cách mệnh; thuyền mới chạy.",
            "keywords": "Q: Đảng vững cách mệnh - điền | A: Cách mệnh · thuyền mới chạy"
        },
        {
            "id": 30,
            "text": "Xây dựng nhà nước pháp quyền, của dân, do dân và vì dân ở nước ta hiện nay cần phải:",
            "options": [
                "Xây dựng hệ thống luật pháp hoàn chỉnh và phân quyền rõ ràng.",
                "Đưa luật pháp triển khai đầy đủ vào đời sống nhân dân.",
                "Tăng cường sự lãnh đạo của Đảng Cộng sản Việt Nam.",
                "Dân chủ hoá tổ chức và hoạt động của bộ máy Nhà nước."
            ],
            "answer": 0,
            "explanation": "Xây dựng hệ thống luật pháp hoàn chỉnh và phân quyền rõ ràng.",
            "keywords": "Q: nhà nước pháp quyền hiện nay | A: luật pháp hoàn chỉnh · phân quyền rõ ràng"
        },
        {
            "id": 31,
            "text": "Điền vào chỗ trống đúng theo Hồ Chí Minh, “Tất cả các cơ quan nhà nước đều phải dựa vào […], liên hệ chặt chẽ với […], lắng nghe ý kiến và chịu sự kiểm soát của […]”.",
            "options": [
                "Công dân.",
                "Nhân dân.",
                "Quốc hội.",
                "Chính phủ."
            ],
            "answer": 1,
            "explanation": "Nhân dân.",
            "keywords": "Q: cơ quan dựa vào nhân dân - điền | A: Nhân dân"
        },
        {
            "id": 32,
            "text": "Điền vào chỗ trống đúng theo Hồ Chí Minh, “Cần phải giữ gìn sự đoàn kết nhất trí của Đảng như giữ gìn […]”.",
            "options": [
                "Tính mạng của mình.",
                "Con mắt của mình.",
                "Nhân cách của mình.",
                "Con ngươi mắt mình."
            ],
            "answer": 3,
            "explanation": "Con ngươi mắt mình.",
            "keywords": "Q: đoàn kết như con ngươi - điền | A: Con ngươi mắt mình"
        },
        {
            "id": 33,
            "text": "Theo Hồ Chí Minh, chủ nghĩa cộng sản ra đời dễ dàng hơn ở đâu?",
            "options": [
                "Châu Á, phương Đông.",
                "Châu Âu, Tây Âu.",
                "Châu Á, phương Tây Nam.",
                "Châu Âu, Đông Âu."
            ],
            "answer": 0,
            "explanation": "Châu Á, phương Đông.",
            "keywords": "Q: CN ra đời dễ ở đâu | A: Châu Á · phương Đông"
        },
        {
            "id": 34,
            "text": "Nguyễn Ái Quốc nhận nhiệm vụ quốc tế đầu tiên của Quốc tế III, lấy tên là gì?",
            "options": [
                "Lin.",
                "Hồ Chí Minh.",
                "Lý Thuỵ.",
                "Nguyễn Ba."
            ],
            "answer": 2,
            "explanation": "Lý Thuỵ.",
            "keywords": "Q: nhiệm vụ quốc tế lần III | A: Lý Thuỵ"
        },
        {
            "id": 35,
            "text": "Theo Hồ Chí Minh, Đảng Cộng sản Việt Nam là của giai cấp công nhân, đồng thời là của nhân dân lao động và cả dân tộc Việt Nam, là xác định:",
            "options": [
                "Vị thế cầm quyền của Đảng.",
                "Bản chất cách mạng của Đảng.",
                "Nội dung ra đời của Đảng.",
                "Nhiệm vụ lịch sử của Đảng."
            ],
            "answer": 1,
            "explanation": "Bản chất cách mạng của Đảng.",
            "keywords": "Q: bản chất cách mạng của Đảng | A: Bản chất cách mạng của Đảng"
        },
        {
            "id": 36,
            "text": "Điền vào chỗ trống đúng theo Hồ Chí Minh, “Tôi chỉ có một ham muốn, ham muốn tột bậc, là làm sao cho nước ta được […]”.",
            "options": [
                "Nhanh chóng độc lập.",
                "Hoàn toàn độc lập.",
                "Thắng lợi nhanh chóng.",
                "Hoàn toàn giải phóng."
            ],
            "answer": 1,
            "explanation": "Hoàn toàn độc lập.",
            "keywords": "Q: ham muốn nước độc lập - điền | A: Hoàn toàn độc lập"
        },
        {
            "id": 37,
            "text": "\"Cũng như ngọc càng mài càng sáng, vàng càng luyện càng trong\". Luận điểm này được trích trong tác phẩm nào của Bác?",
            "options": [
                "Đường Kách mệnh.",
                "Nâng cao đạo đức cách mạng, quét sạch chủ nghĩa cá nhân.",
                "Liên Xô vĩ đại.",
                "Đạo đức cách mạng."
            ],
            "answer": 3,
            "explanation": "Đạo đức cách mạng.",
            "keywords": "Q: ngọc mài vàng luyện - tác phẩm | A: Đạo đức cách mạng"
        },
        {
            "id": 38,
            "text": "Khi làm việc tại New York, Hồ Chí Minh đã thấy được điều quan trọng ảnh hưởng đến tư tưởng của Người là gì?",
            "options": [
                "Nhiều dân tộc nhập cư cùng sinh sống với nhau, đoàn kết giúp nhau cùng phát triển.",
                "Những người dân nhập cư mặc nhiên được hưởng những quyền hợp pháp mà người Việt Nam phải đi xin của Pháp.",
                "Không có sự phân biệt chủng tộc ở đây, Vàng, Đỏ, Trắng, Đen đều là anh em.",
                "Một khu phố ngự trị bởi người dân nhập cư."
            ],
            "answer": 1,
            "explanation": "Những người dân nhập cư mặc nhiên được hưởng những quyền hợp pháp mà người Việt Nam phải đi xin của Pháp.",
            "keywords": "Q: New York - ảnh hưởng tư tưởng | A: nhập cư mặc nhiên được hưởng những quyền hợp pháp · người Việt Nam phải đi xin của Pháp"
        },
        {
            "id": 39,
            "text": "Chủ nghĩa dân tộc trong tư tưởng Hồ Chí Minh là chủ nghĩa dân tộc:",
            "options": [
                "Trong sáng.",
                "Chân chính.",
                "Cực đoan, hẹp hòi.",
                "Sô vanh nước lớn."
            ],
            "answer": 1,
            "explanation": "Chân chính.",
            "keywords": "Q: chủ nghĩa dân tộc HCM | A: Chân chính"
        },
        {
            "id": 40,
            "text": "Theo Hồ Chí Minh, cách mạng giải phóng dân tộc là sự nghiệp của:",
            "options": [
                "Đảng Cộng sản Việt Nam.",
                "Giai cấp công nhân.",
                "Giai cấp công nhân.",
                "Quần chúng nhân dân."
            ],
            "answer": 3,
            "explanation": "Quần chúng nhân dân.",
            "keywords": "Q: CM giải phóng dân tộc - sự nghiệp | A: Quần chúng nhân dân"
        },
        {
            "id": 41,
            "text": "Xã hội chỉ phát triển bền vững khi các quy tắc, chuẩn mực đạo đức trong xã hội đó luôn được:",
            "options": [
                "Tạo điều kiện để phát triển thuận lợi.",
                "Thúc đẩy nhanh chóng để phát triển.",
                "Tôn trọng củng cố và phát triển.",
                "Phát triển mạnh mẽ."
            ],
            "answer": 2,
            "explanation": "Tôn trọng củng cố và phát triển.",
            "keywords": "Q: quy tắc đạo đức xã hội | A: Tôn trọng củng cố · phát triển"
        },
        {
            "id": 42,
            "text": "Yếu tố nào là một động lực lớn trong cuộc đấu tranh giải phóng dân tộc ở các nước thuộc địa?",
            "options": [
                "Chủ nghĩa dân tộc.",
                "Chủ nghĩa cộng sản.",
                "Chủ nghĩa yêu nước.",
                "Chủ nghĩa xã hội."
            ],
            "answer": 0,
            "explanation": "Chủ nghĩa dân tộc.",
            "keywords": "Q: động lực giải phóng dân tộc | A: Chủ nghĩa dân tộc"
        },
        {
            "id": 43,
            "text": "Các cuộc cách mạng đấu tranh chống Pháp trong giai đoạn cuối thế kỷ XIX đầu thế kỷ XX có đặc điểm chung là gì?",
            "options": [
                "Theo con đường phong kiến.",
                "Không đến nơi đến chốn.",
                "Theo con đường dân chủ tư sản.",
                "Tất cả đều thất bại."
            ],
            "answer": 3,
            "explanation": "Tất cả đều thất bại.",
            "keywords": "Q: CM chống Pháp cuối XIX | A: Tất cả đều thất bại"
        },
        {
            "id": 44,
            "text": "“Mọi việc thành hay bại, chủ chốt là do cán bộ có thấm nhuần đạo đức cách mạng, hay là không”, câu nói của Hồ Chí Minh trích trong tác phẩm nào?",
            "options": [
                "Sửa đổi lối làm việc.",
                "Người cán bộ cách mạng.",
                "Đạo đức cách mạng.",
                "Nâng cao đạo đức cách mạng, quét sạch chủ nghĩa cá nhân."
            ],
            "answer": 0,
            "explanation": "Sửa đổi lối làm việc.",
            "keywords": "Q: thành bại do cán bộ - tác phẩm | A: Sửa đổi lối làm việc"
        },
        {
            "id": 45,
            "text": "Theo Hồ Chí Minh mối quan hệ giữa vấn đề dân tộc và vấn đề giai cấp ở các nước thuộc địa là:",
            "options": [
                "Giải phóng dân tộc và giải phóng giai cấp cần được tiến hành song song.",
                "Giải phóng giai cấp là tiền đề để giải phóng dân tộc.",
                "Giải phóng dân tộc không liên quan đến giải phóng giai cấp.",
                "Giải phóng dân tộc là tiền đề để giải phóng giai cấp."
            ],
            "answer": 3,
            "explanation": "Giải phóng dân tộc là tiền đề để giải phóng giai cấp.",
            "keywords": "Q: dân tộc và giai cấp thuộc địa | A: Giải phóng dân tộc · tiền đề · giải phóng giai cấp"
        },
        {
            "id": 46,
            "text": "Nguyễn Ái Quốc đã thành lập Hội Việt Nam cách mạng thanh niên tại đâu?",
            "options": [
                "Quảng Châu (Trung Quốc).",
                "Cao Bằng (Việt Nam).",
                "Hương Cảng (Trung Quốc).",
                "Thượng Hải (Trung Quốc)."
            ],
            "answer": 0,
            "explanation": "Quảng Châu (Trung Quốc).",
            "keywords": "Q: thành lập Hội VNCMTN | A: Quảng Châu (Trung Quốc)"
        },
        {
            "id": 47,
            "text": "Chọn đáp án KHÔNG đúng. Theo Hồ Chí Minh, kẻ thù cần phải đánh đổ trong cách mạng giải phóng là gì?",
            "options": [
                "Đế quốc, thực dân và tay sai của chúng.",
                "Chủ nghĩa cá nhân.",
                "Chủ nghĩa tư bản, chủ nghĩa đế quốc.",
                "Nghèo nàn, dốt nát, lạc hậu."
            ],
            "answer": 1,
            "explanation": "Chủ nghĩa cá nhân.",
            "keywords": "Q: KHÔNG đúng - kẻ thù CM giải phóng | A: Chủ nghĩa cá nhân"
        },
        {
            "id": 48,
            "text": "Theo Hồ Chí Minh, mục tiêu, lý tưởng của Đảng Cộng sản Việt Nam là:",
            "options": [
                "Phụng sự tổ quốc, phục vụ nhân dân.",
                "Phục vụ lợi ích của giai cấp vô sản.",
                "Phục vụ lợi ích của giai cấp công nhân.",
                "Xây dựng đất nước giàu mạnh."
            ],
            "answer": 0,
            "explanation": "Phụng sự tổ quốc, phục vụ nhân dân.",
            "keywords": "Q: mục tiêu lý tưởng Đảng CSVN | A: Phụng sự tổ quốc · phục vụ nhân dân"
        },
        {
            "id": 49,
            "text": "Theo Hồ Chí Minh, cách mạng bạo lực là đấu tranh:",
            "options": [
                "Kết hợp chính trị quần chúng với vũ trang nhân dân.",
                "Kết hợp đấu tranh quân sự với đấu tranh ngoại giao.",
                "Kết hợp chính trị quần chúng với đấu tranh ngoại giao.",
                "Kết hợp vũ trang nhân dân với mặt trận ngoại giao."
            ],
            "answer": 1,
            "explanation": "Kết hợp đấu tranh quân sự với đấu tranh ngoại giao.",
            "keywords": "Q: CM bạo lực - đấu tranh | A: đấu tranh quân sự · đấu tranh ngoại giao"
        },
        {
            "id": 50,
            "text": "Mối quan hệ giữa nội lực và ngoại lực trong thời kỳ quá độ lên CNXH theo quan điểm của Hồ Chí Minh là gì?",
            "options": [
                "Nội lực là quan trọng nhất, không cần ngoại lực.",
                "Nội lực là chính, ngoại lực là quan trọng.",
                "Ngoại lực trong thời kì đầu là cần thiết.",
                "Nội lực và ngoại lực quan trọng như nhau."
            ],
            "answer": 1,
            "explanation": "Nội lực là chính, ngoại lực là quan trọng.",
            "keywords": "Q: nội lực và ngoại lực | A: Nội lực là chính · ngoại lực là quan trọng"
        },
        {
            "id": 51,
            "text": "Ngày 28/1/1946, Chủ tịch Hồ Chí Minh viết: \"Người đời không phải thánh thần, không ai tránh khỏi khuyết điểm. Chúng ta không sợ khuyết điểm, nhưng chỉ sợ không biết kiên quyết sửa nó đi\". Bài báo đó có tên gọi là gì?",
            "options": [
                "Lời xin lỗi đồng bào.",
                "Lời căn dặn cán bộ tuyên truyền.",
                "Tự phê bình.",
                "Lời khuyên công nhân, viên chức"
            ],
            "answer": 2,
            "explanation": "Tự phê bình.",
            "keywords": "Q: Tự phê bình - bài báo 28/1/1946 | A: Tự phê bình"
        },
        {
            "id": 52,
            "text": "Theo Hồ Chí Minh, cách mạng giải phóng dân tộc thuộc địa muốn giành được thắng lợi triệt để phải:",
            "options": [
                "Dựa vào sự thắng lợi của cách mạng vô sản ở chính quốc.",
                "Dựa trên phương pháp cách mạng của chủ nghĩa Mác – Lênin.",
                "Thực hiện bằng con đường bạo lực cách mạng.",
                "Kết hợp đấu tranh quân sự với đấu tranh ngoại giao."
            ],
            "answer": 2,
            "explanation": "Thực hiện bằng con đường bạo lực cách mạng.",
            "keywords": "Q: Theo Hồ Chí Minh, cách mạng giải phóng | A: Thực hiện · bằng con đường bạo lực cách mạng"
        },
        {
            "id": 53,
            "text": "Câu nói “Dù phải đốt cháy cả dãy Trường Sơn cũng phải giành cho được độc lập” của Hồ Chí Minh vào thời gian nào?",
            "options": [
                "Tháng 05/1941.",
                "Tháng 08/1945.",
                "Tháng 08/1942.",
                "Tháng 12/1944."
            ],
            "answer": 1,
            "explanation": "Tháng 08/1945.",
            "keywords": "Q: Câu nói “Dù phải đốt cháy cả dãy | A: Tháng 08/1945"
        },
        {
            "id": 54,
            "text": "Theo tư tưởng Hồ Chí Minh, trong mỗi con người bao giờ cũng có:",
            "options": [
                "Tốt – xấu, thiện – ác.",
                "Ưu điểm và nhược điểm.",
                "Không tốt, không xấu.",
                "Tốt – xấu, đúng – sai."
            ],
            "answer": 0,
            "explanation": "Tốt – xấu, thiện – ác.",
            "keywords": "Q: trong mỗi con người bao giờ cũng có: | A: Tốt – xấu, thiện – ác"
        },
        {
            "id": 55,
            "text": "Theo Hồ Chí Minh, kẻ thù hung ác nhất của chủ nghĩa xã hội là gì?",
            "options": [
                "Chủ nghĩa cá nhân.",
                "Lạm dụng chức quyền.",
                "Tham ô, lãng phí.",
                "Các thế lực phản động."
            ],
            "answer": 0,
            "explanation": "Chủ nghĩa cá nhân.",
            "keywords": "Q: Theo Hồ Chí Minh, kẻ thù hung ác | A: Chủ nghĩa cá nhân"
        },
        {
            "id": 56,
            "text": "Trong quan điểm toàn diện và hệ thống, Hồ Chí Minh xem xét cách mạng Việt Nam trong:",
            "options": [
                "Quan hệ với cách mạng giải phóng dân tộc.",
                "Quan hệ với cách mạng giải phóng dân tộc và giai cấp.",
                "Quan hệ tổng thể với cách mạng thế giới.",
                "Quan hệ với cách mạng giải phóng giai cấp."
            ],
            "answer": 2,
            "explanation": "Quan hệ tổng thể với cách mạng thế giới.",
            "keywords": "Q: Hồ Chí Minh xem xét cách mạng Việt | A: Quan hệ tổng thể với · cách mạng thế giới"
        },
        {
            "id": 57,
            "text": "Chọn đáp án đúng nhất. Theo Hồ Chí Minh, đời sống mới bao gồm những mặt nào?",
            "options": [
                "Đạo đức mới, nếp sống mới và cách sống mới.",
                "Đạo đức mới, lối sống mới, nếp sống mới.",
                "Đạo đức mới và lối sống mới; cách sống mới.",
                "Nếp sống mới, lối sống mới và tư tưởng mới."
            ],
            "answer": 1,
            "explanation": "Đạo đức mới, lối sống mới, nếp sống mới.",
            "keywords": "Q: Theo Hồ Chí Minh, đời sống mới bao | A: Đạo đức mới · lối sống mới · nếp sống mới"
        },
        {
            "id": 58,
            "text": "Theo Hồ Chí Minh, cách mạng giải phóng dân tộc là sự nghiệp đoàn kết của:",
            "options": [
                "Toàn dân, trên cơ sở liên minh công – nông.",
                "Nhân dân các nước thuộc địa trên thế giới.",
                "Giai cấp vô sản, nông dân và tầng lớp trí thức.",
                "Công nhân, nông dân và tầng lớp trí thức."
            ],
            "answer": 0,
            "explanation": "Toàn dân, trên cơ sở liên minh công – nông.",
            "keywords": "Q: Theo Hồ Chí Minh, cách mạng giải phóng | A: Toàn dân, trên cơ sở liên minh công · nông"
        },
        {
            "id": 59,
            "text": "Tác phẩm “Bản án chế độ thực dân Pháp” của Nguyễn Ái Quốc được xuất bản lần đầu tiên vào năm nào?",
            "options": [
                "Năm 1924.",
                "Năm 1930.",
                "Năm 1925.",
                "Năm 1927."
            ],
            "answer": 2,
            "explanation": "Năm 1925.",
            "keywords": "Q: xuất bản Tác phẩm “Bản án chế độ | A: Năm 1925"
        },
        {
            "id": 60,
            "text": "Trong khối đại đoàn kết dân tộc, đặc biệt chú trọng yếu tố hạt nhân là gì?",
            "options": [
                "Sự đoàn kết, thống nhất trong sáng.",
                "Sự đoàn kết, nhất trí trong nhân dân.",
                "Sự thống nhất, đồng sức, đồng lòng.",
                "Sự đoàn kết và thống nhất trong Đảng."
            ],
            "answer": 3,
            "explanation": "Sự đoàn kết và thống nhất trong Đảng.",
            "keywords": "Q: Trong khối đại đoàn kết dân tộc, đặc | A: Sự đoàn kết và thống nhất trong Đảng"
        },
        {
            "id": 61,
            "text": "Mục tiêu của chức năng giáo dục là gì?",
            "options": [
                "Hoàn thiện nhân cách con người.",
                "Trở thành người có ích cho xã hội.",
                "Nâng cao học thức.",
                "Giúp con người vươn đến CHÂN – THIỆN – MỸ."
            ],
            "answer": 3,
            "explanation": "Giúp con người vươn đến CHÂN – THIỆN – MỸ.",
            "keywords": "Q: Mục tiêu của chức năng giáo dục là | A: Giúp con người vươn đến CHÂN · THIỆN · MỸ"
        },
        {
            "id": 62,
            "text": "Hồ Chí Minh đã tham dự cuộc biểu tình chống thuế của nông dân tỉnh Thừa Thiên vào thời gian nào?",
            "options": [
                "Tháng 5/1906.",
                "Tháng 5/1908.",
                "Tháng 5/1905.",
                "Tháng 5/1911."
            ],
            "answer": 1,
            "explanation": "Tháng 5/1908.",
            "keywords": "Q: Hồ Chí Minh đã tham dự cuộc biểu | A: Tháng 5/1908"
        },
        {
            "id": 63,
            "text": "Năm 1970, Đảng Cộng sản Việt Nam đưa ra khẩu hiệu tuyên truyền, cổ động về tư tưởng, tấm gương đạo đức Hồ Chí Minh là:",
            "options": [
                "Toàn Đảng hãy ra sức học tập đường lối chính trị, tác phong và đạo đức cách mạng của Hồ Chủ tịch.",
                "Sống, chiến đấu, lao động và học tập theo gương Bác Hồ vĩ đại.",
                "Toàn Đảng, toàn dân thực hiện cần, kiệm, liêm, chính, chí công, vô tư theo tấm gương của Chủ tịch Hồ Chí Minh vĩ đại.",
                "Sống và làm việc theo gương Bác Hồ vĩ đại."
            ],
            "answer": 1,
            "explanation": "Sống, chiến đấu, lao động và học tập theo gương Bác Hồ vĩ đại.",
            "keywords": "Q: Năm 1970, Đảng Cộng sản Việt Nam đưa | A: Sống, chiến đấu, lao động và học · tập theo gương Bác Hồ vĩ đại"
        },
        {
            "id": 64,
            "text": "Theo Hồ Chí Minh, cách mạng giải phóng dân tộc phải đi theo con đường:",
            "options": [
                "Con đường cách mạng dân chủ tư sản.",
                "Con đường cách mạng vô sản.",
                "Con đường cách mạng tư sản.",
                "Con đường cách mạng phong kiến."
            ],
            "answer": 1,
            "explanation": "Con đường cách mạng vô sản.",
            "keywords": "Q: Theo Hồ Chí Minh, cách mạng giải phóng | A: Con đường cách mạng vô sản"
        },
        {
            "id": 65,
            "text": "Điền vào chỗ trống đúng theo Hồ Chí Minh, “Toàn thể dân tộc Việt Nam quyết đem […] để giữ vững quyền tự do, độc lập ấy”.",
            "options": [
                "Tất cả tinh thần và lực lượng, tính mạng và của cải.",
                "Toàn bộ sinh mệnh và quyết tâm cao nhất.",
                "Tất cả tinh thần và lực lượng đang có và sẽ có.",
                "Toàn bộ sức lực và của cải, tinh thần và lực lượng."
            ],
            "answer": 0,
            "explanation": "Tất cả tinh thần và lực lượng, tính mạng và của cải.",
            "keywords": "Q: điền khẩu theo Bác | A: Tất cả tinh thần và lực · lượng, tính mạng và của cải"
        },
        {
            "id": 66,
            "text": "Chọn đáp án đúng nhất. Con tàu mà Hồ Chí Minh thực hiện chuyến đi của mình tên gì, của nước nào?",
            "options": [
                "Latouche-Tréville của Pháp.",
                "Latouche-Tréville của Mỹ.",
                "Latouche-Tréville của Anh.",
                "Amiral Latouche-Tréville của Pháp."
            ],
            "answer": 3,
            "explanation": "Amiral Latouche-Tréville của Pháp.",
            "keywords": "Q: Con tàu mà Hồ Chí Minh thực hiện | A: Amiral Latouche-Tréville của Pháp"
        },
        {
            "id": 67,
            "text": "Người khởi xướng và lãnh đạo phong trào Đông Du (1905 -1909) là ai?",
            "options": [
                "Phan Chu Trinh.",
                "Phan Bội Châu.",
                "Lương Văn Can.",
                "Nguyễn Thái Học."
            ],
            "answer": 1,
            "explanation": "Phan Bội Châu.",
            "keywords": "Q: Người khởi xướng và lãnh đạo phong trào | A: Phan Bội Châu"
        },
        {
            "id": 68,
            "text": "Luận điểm “Đạo đức cách mạng không phải ở trên trời sa xuống. Nó do đấu tranh, rèn luyện bền bỉ hàng ngày mà phát triển và cũng cố…”, của ai?",
            "options": [
                "Trường Chinh.",
                "Lê Duẩn.",
                "V.I Lênin.",
                "Hồ Chí Minh."
            ],
            "answer": 3,
            "explanation": "Hồ Chí Minh.",
            "keywords": "Q: đạo đức CM không từ trời - của ai | A: Hồ Chí Minh"
        },
        {
            "id": 69,
            "text": "\"Toàn quốc đồng bào hãy đứng dậy […] mà tự giải phóng cho ta\". Chọn phương án đúng nhất điền vào […].",
            "options": [
                "Dựa vào sự giúp đỡ quốc tế.",
                "Dựa vào sự đoàn kết toàn dân.",
                "Dưới sự lãnh đạo của Đảng.",
                "Đem sức ta."
            ],
            "answer": 3,
            "explanation": "Đem sức ta.",
            "keywords": "Q: Toàn quốc đồng bào hãy đứng dậy | A: Đem sức ta"
        },
        {
            "id": 70,
            "text": "Hồ Chí Minh nói: “Tôi cố gắng là học trò nhỏ của các vị ấy”. Các vị ấy là ai?",
            "options": [
                "Khổng Tử; Đạt Ma; Mác; Lênin.",
                "Lão Tử; Khổng Tử; Mác; Lênin.",
                "Khổng Tử; Giêxu; Mác; Tôn Dật Tiên.",
                "Mạnh Tử; Lão Tử; Khổng Tử; Mác."
            ],
            "answer": 2,
            "explanation": "Khổng Tử; Giêxu; Mác; Tôn Dật Tiên.",
            "keywords": "Q: Hồ Chí Minh nói: “Tôi cố gắng là | A: Khổng Tử · Giêxu · Mác · Tôn Dật Tiên"
        },
        {
            "id": 71,
            "text": "Mặt trận Việt Nam độc lập đồng minh (Việt Minh) được thành lập vào thời gian nào?",
            "options": [
                "Ngày 19/05/1940.",
                "Ngày 19/05/1945.",
                "Ngày 19/05/1941.",
                "Ngày 19/05/1942."
            ],
            "answer": 2,
            "explanation": "Ngày 19/05/1941.",
            "keywords": "Q: thành lập Mặt trận Việt Nam độc lập | A: Ngày 19/05/1941"
        },
        {
            "id": 72,
            "text": "Nội dung bản sắc văn hoá dân tộc được nhìn nhận qua hai lớp quan hệ, đó là:",
            "options": [
                "Tinh thần yêu nước, thương dân và tinh thần quốc tế trong sáng.",
                "Tinh thần yêu nước và tinh thần dũng cảm, hy sinh vì độc lập dân tộc.",
                "Lòng yêu nước, thương nòi và tinh thần độc lập, tự tôn dân tộc.",
                "Tinh thần yêu nước, thương dân và tinh thần tự lập, tự ti dân tộc."
            ],
            "answer": 2,
            "explanation": "Lòng yêu nước, thương nòi và tinh thần độc lập, tự tôn dân tộc.",
            "keywords": "Q: Nội dung bản sắc văn hoá dân tộc | A: Lòng yêu nước · thương nòi và tinh thần độc lập · tự tôn dân tộc"
        },
        {
            "id": 73,
            "text": "Cuối thế kỷ XIX đầu thế kỷ XX ở thế giới, chủ nghĩa tư bản phát triển như thế nào?",
            "options": [
                "Phát triển mạnh thành các mạng lưới xuyên quốc gia.",
                "Phát triển từ tự do cạnh tranh sang đế quốc chủ nghĩa.",
                "Phát triển thành các loại hình: cacten, xanhdica, congxoocxiom.",
                "Phát triển thành các tổ chức độc quyền nhà nước."
            ],
            "answer": 1,
            "explanation": "Phát triển từ tự do cạnh tranh sang đế quốc chủ nghĩa.",
            "keywords": "Q: Cuối thế kỷ XIX đầu thế kỷ XX | A: Phát triển từ tự do cạnh · tranh sang đế quốc chủ nghĩa"
        },
        {
            "id": 74,
            "text": "Trong câu nói: \"Dân chủ là khát vọng muôn đời của con người\". Hồ Chí Minh đã nêu lên quan điểm dân chủ có nghĩa là:",
            "options": [
                "Dân là chủ.",
                "Dân làm chủ.",
                "Dân kiểm soát.",
                "Dân điều hành."
            ],
            "answer": 0,
            "explanation": "Dân là chủ.",
            "keywords": "Q: Trong câu nói: \"Dân chủ là khát vọng | A: Dân là chủ"
        },
        {
            "id": 75,
            "text": "Lô-gíc phát triển của tư tưởng Hồ Chí Minh là:",
            "options": [
                "Giải phóng xã hội, giải phóng dân tộc, giải phóng con người.",
                "Giải phóng dân tộc, giải phóng giai cấp, giải phóng con người.",
                "Giải phóng xã hội, giải phóng con người, giải phóng dân tộc.",
                "Giải phóng con người, giải phóng dân tộc, giải phóng xã hội."
            ],
            "answer": 1,
            "explanation": "Giải phóng dân tộc, giải phóng giai cấp, giải phóng con người.",
            "keywords": "Q: Lô-gíc phát triển của tư tưởng Hồ Chí | A: Giải phóng dân tộc · giải phóng giai cấp · giải phóng con người"
        },
        {
            "id": 76,
            "text": "Giai đoạn vượt qua thử thách, giữ vững đường lối, phương pháp cách mạng Việt Nam của Hồ Chí Minh được tính từ:",
            "options": [
                "Từ khi sinh ra đến trước 05/06/1911.",
                "Từ năm 1931 đến năm 1945.",
                "Từ năm 1911 đến năm 1920.",
                "Từ năm 1921 đến năm 1930."
            ],
            "answer": 1,
            "explanation": "Từ năm 1931 đến năm 1945.",
            "keywords": "Q: Giai đoạn vượt qua thử thách, giữ vững | A: Từ năm 1931 đến năm 1945"
        },
        {
            "id": 77,
            "text": "Hồ Chí minh thường nêu và phân tích 5 đức tính chủ yếu nào của người cách mạng?",
            "options": [
                "Nhân - Nghĩa - Trí - Dũng - Liêm.",
                "Nhân - Nghĩa - Lễ - Trí - Tín.",
                "Cần - Kiệm - Liêm - Chính - Dũng.",
                "Nhân - Nghĩa - Trí - Dũng - Tín."
            ],
            "answer": 0,
            "explanation": "Nhân - Nghĩa - Trí - Dũng - Liêm.",
            "keywords": "Q: Hồ Chí minh thường nêu và phân tích | A: Nhân - Nghĩa - Trí · - Dũng - Liêm"
        },
        {
            "id": 78,
            "text": "Hồ Chí Minh lấy tên là Nguyễn ái Quốc khi đang ở đâu? Thời gian nào?",
            "options": [
                "Ở Paris - Pháp, năm 1919.",
                "Ở Boston - Mỹ, năm 1917.",
                "Ở Pháp, năm 1920.",
                "Ở Paris - Pháp, năm 1920."
            ],
            "answer": 0,
            "explanation": "Ở Paris - Pháp, năm 1919.",
            "keywords": "Q: Hồ Chí Minh lấy tên là Nguyễn ái | A: Ở Paris - Pháp, năm 1919"
        },
        {
            "id": 79,
            "text": "Phương pháp luận Hồ Chí Minh cho rằng: con người phải luôn luôn thích nghi với mọi hoàn cảnh, muốn thích nghi con người cần:",
            "options": [
                "Phải luôn luôn học tập mở rộng tri thức của bản thân về xã hội.",
                "Phải học tập để thích nghi với hoàn cảnh mới.",
                "Phải luôn luôn học tập mở rộng tri thức khám phá về bản thân, về xã hội.",
                "Phải luôn luôn tự đổi mới để phát triển."
            ],
            "answer": 3,
            "explanation": "Phải luôn luôn tự đổi mới để phát triển.",
            "keywords": "Q: Phương pháp luận Hồ Chí Minh cho rằng: | A: Phải luôn luôn tự đổi · mới để phát triển"
        },
        {
            "id": 80,
            "text": "Điền vào chỗ trống đúng theo Hồ Chí Minh, “Chính sách ngoại giao của Chính phủ thì chỉ có một điều tức là thân thiện với […] trên thế giới để giữ gìn hòa bình”.",
            "options": [
                "Các nước xã hội chủ nghĩa.",
                "Tất cả các nước dân chủ.",
                "Các nước cộng sản chủ nghĩa.",
                "Mọi nước dân chủ."
            ],
            "answer": 1,
            "explanation": "Tất cả các nước dân chủ.",
            "keywords": "Q: điền khẩu theo Bác | A: Tất cả các nước dân chủ"
        },
        {
            "id": 81,
            "text": "Hồ Chí Minh học tập được gì quan trọng ở chủ nghĩa Mác- Lênin?",
            "options": [
                "Học thuộc các luận điểm lí luận.",
                "Phương pháp làm việc biện chứng.",
                "Học tập phương thức triển khai kế hoạch.",
                "Vận dụng các luận điểm vào thực tế."
            ],
            "answer": 1,
            "explanation": "Phương pháp làm việc biện chứng.",
            "keywords": "Q: Hồ Chí Minh học tập được gì quan | A: Phương pháp làm việc biện chứng"
        },
        {
            "id": 82,
            "text": "Trong xây dựng CNXH, Hồ Chí Minh chủ trương đối xử với giai cấp tư sản dân tộc như thế nào?",
            "options": [
                "Xóa bỏ quyền sở hữu về tư liệu sản xuất của họ.",
                "Đánh đổ họ với tư cách là giai cấp bóc lột.",
                "Không xóa bỏ quyền sở hữu về tư liệu sản xuất của họ.",
                "Có hình thức hợp tác phù hợp."
            ],
            "answer": 2,
            "explanation": "Không xóa bỏ quyền sở hữu về tư liệu sản xuất của họ.",
            "keywords": "Q: Trong xây dựng CNXH, Hồ Chí Minh chủ | A: Không xóa bỏ quyền sở hữu về · tư liệu sản xuất của họ"
        },
        {
            "id": 83,
            "text": "Hồ Chí Minh nhận nhiệm vụ quốc tế đầu tiên của Quốc tế III là ở đâu? Nhiệm vụ gì?",
            "options": [
                "Quảng Châu – Trung Quốc, giúp thành lập các tổ chức cộng sản.",
                "Hương Cảng – Trung Quốc, giúp thành lập các tổ chức cộng sản.",
                "Quảng Đông – Trung Quốc, giúp thành lập các tổ chức cộng sản.",
                "Quảng Tây – Trung Quốc, giúp thành lập các tổ chức cộng sản."
            ],
            "answer": 0,
            "explanation": "Quảng Châu – Trung Quốc, giúp thành lập các tổ chức cộng sản.",
            "keywords": "Q: địa điểm Quảng Châu – Trung Quốc, giúp | A: Quảng Châu – Trung Quốc, giúp thành · lập các tổ chức cộng sản"
        },
        {
            "id": 84,
            "text": "“Một dân tộc không tự lực cánh sinh mà cứ ngồi chờ dân tộc khác giúp đỡ thì không xứng đáng được độc lập”. Câu nói Hồ Chí Minh trong:",
            "options": [
                "Kháng chiến chống phong kiến.",
                "Kháng chiến chống đế quốc Mỹ.",
                "Kháng chiến chống thực dân.",
                "Kháng chiến chống thực dân Pháp."
            ],
            "answer": 3,
            "explanation": "Kháng chiến chống thực dân Pháp.",
            "keywords": "Q: “Một dân tộc không tự lực cánh sinh | A: Kháng chiến chống thực dân Pháp"
        },
        {
            "id": 85,
            "text": "Hồ Chí Minh là người đấu tranh đòi quyền độc lập cho:",
            "options": [
                "Dân tộc thuộc địa các nước đang bị áp bức trên thế giới.",
                "Tất cả các quốc gia, tộc người và dân tộc trên thế giới.",
                "Dân tộc thuộc địa các nước đang bị áp bức ở phương Đông.",
                "Dân tộc Việt Nam và tất cả các dân tộc bị áp bức trên thế giới."
            ],
            "answer": 3,
            "explanation": "Dân tộc Việt Nam và tất cả các dân tộc bị áp bức trên thế giới.",
            "keywords": "Q: Hồ Chí Minh là người đấu tranh đòi | A: Dân tộc Việt Nam và tất cả các · dân tộc bị áp bức trên thế giới"
        },
        {
            "id": 86,
            "text": "Đối với Hồ Chí Minh, đại đoàn kết không chỉ là khẩu hiệu chiến lược mà còn là:",
            "options": [
                "Mục tiêu lâu dài của cách mạng.",
                "Thực tiễn đấu tranh của cách mạng.",
                "Nhiệm vụ trường tồn của cách mạng.",
                "Đích đến cuối cùng của cách mạng."
            ],
            "answer": 0,
            "explanation": "Mục tiêu lâu dài của cách mạng.",
            "keywords": "Q: Đối với Hồ Chí Minh, đại đoàn kết | A: Mục tiêu lâu dài của cách mạng"
        },
        {
            "id": 87,
            "text": "“Tất cả các dân tộc trên thế giới đều sinh ra bình đẳng, dân tộc nào cũng có quyền sống, quyền sung sướng và quyền tự do”. Câu này được trích từ:",
            "options": [
                "Tuyên ngôn độc lập nước Mỹ 1776.",
                "Tuyên ngôn Đảng Lao động.",
                "Tuyên ngôn dân quyền và nhân quyền.",
                "Tuyên ngôn Đảng Cộng sản."
            ],
            "answer": 0,
            "explanation": "Tuyên ngôn độc lập nước Mỹ 1776.",
            "keywords": "Q: “Tất cả các dân tộc trên thế giới | A: Tuyên ngôn độc lập nước Mỹ 1776"
        },
        {
            "id": 88,
            "text": "Trong môn học tư tưởng Hồ Chí Minh nêu bao nhiêu phương pháp nghiên cứu?",
            "options": [
                "Ba phương pháp.",
                "Sáu phương pháp.",
                "Bốn phương pháp.",
                "Năm phương pháp."
            ],
            "answer": 1,
            "explanation": "Sáu phương pháp.",
            "keywords": "Q: Trong môn học tư tưởng Hồ Chí Minh | A: Sáu phương pháp"
        },
        {
            "id": 89,
            "text": "Vở kịch “Con Rồng tre” được Nguyễn Ái Quốc viết nhân dịp vua Khải Định sang Pháp vào thời gian nào?",
            "options": [
                "Tháng 07 năm 1920.",
                "Tháng 07 năm 1927.",
                "Tháng 05 năm 1922.",
                "Tháng 05 năm 1925."
            ],
            "answer": 2,
            "explanation": "Tháng 05 năm 1922.",
            "keywords": "Q: Vở kịch “Con Rồng tre” được Nguyễn Ái | A: Tháng 05 năm 1922"
        },
        {
            "id": 90,
            "text": "Khái niệm “Tư tưởng Hồ Chí Minh” không bao gồm nội dung nào sau đây?",
            "options": [
                "Hệ thống các quan điểm lý luận, phản ánh những vấn đề có tính quy luật của cách mạng Việt Nam.",
                "Nguồn gốc tư tưởng, lý luận của tư tưởng Hồ Chí Minh: chủ nghĩa Mác – Lênin; giá trị văn hoá dân tộc, tinh hoa văn hoá nhân loại.",
                "Nội dung cơ bản nhất của tư tưởng Hồ Chí Minh, bao gồm những vấn đề có liên quan trực tiếp đến cách mạng Việt Nam.",
                "Bao gồm những vấn đề có liên quan đến cách mạng thế giới, tài sản tinh thần cho cách mạng thế giới."
            ],
            "answer": 3,
            "explanation": "Bao gồm những vấn đề có liên quan đến cách mạng thế giới, tài sản tinh thần cho cách mạng thế giới.",
            "keywords": "Q: KHÔNG đúng - TTHCM không bao gồm | A: cách mạng thế giới · tài sản tinh thần cho cách mạng thế giới"
        },
        {
            "id": 91,
            "text": "Chọn đáp án đúng nhất. Trong tư tưởng Hồ Chí Minh, đại đoàn kết dân tộc là:",
            "options": [
                "Nhiệm vụ và trách nhiệm hàng đầu của cách mạng.",
                "Mục tiêu của cách mạng, trách nhiệm của Đảng.",
                "Mục tiêu, nhiệm vụ hàng đầu của cách mạng, của dân tộc.",
                "Nhiệm vụ quan trọng nhất của cách mạng dân tộc."
            ],
            "answer": 2,
            "explanation": "Mục tiêu, nhiệm vụ hàng đầu của cách mạng, của dân tộc.",
            "keywords": "Q: Trong tư tưởng Hồ Chí Minh, đại đoàn | A: Mục tiêu · nhiệm vụ hàng đầu của cách mạng · của dân tộc"
        },
        {
            "id": 92,
            "text": "Tiêu chí của đạo đức là gì?",
            "options": [
                "Ý thức đạo đức – Hành vi đạo đức – Quan hệ đạo đức.",
                "Hiểu đạo đức – Hành vi đạo đức – Quan hệ đạo đức.",
                "Nhận thức đạo đức – Hành vi đạo đức – Quan hệ đạo đức.",
                "Có đạo đức – Hành vi đạo đức – Quan hệ đạo đức."
            ],
            "answer": 0,
            "explanation": "Ý thức đạo đức – Hành vi đạo đức – Quan hệ đạo đức.",
            "keywords": "Q: Tiêu chí của đạo đức là gì | A: Ý thức đạo đức · Hành vi đạo đức · Quan hệ đạo đức"
        },
        {
            "id": 93,
            "text": "Chọn đáp án KHÔNG đúng. Cơ sở hình thành tư tưởng đại đoàn kết dân tộc của Hồ Chí Minh là:",
            "options": [
                "Truyền thống đoàn kết nhân ái, tinh thần gắn kết cộng đồng dân tộc Việt Nam.",
                "Thực tiễn thành công và thất bại của phong trào cách mạng Việt Nam và thế giới.",
                "Thực tiễn thất bại của phong trào cách mạng ở các nước phương Đông.",
                "Quan điểm của chủ nghĩa Mác –Lênin về vai trò của quần chúng nhân dân."
            ],
            "answer": 2,
            "explanation": "Thực tiễn thất bại của phong trào cách mạng ở các nước phương Đông.",
            "keywords": "Q: KHÔNG đúng - Cơ sở hình thành tư | A: Thực tiễn thất bại của phong trào · cách mạng ở các nước phương Đông"
        },
        {
            "id": 94,
            "text": "Theo tư tưởng Hồ Chí Minh, cán bộ nhà nước là gì của nhân nhân?",
            "options": [
                "Người làm công.",
                "Người phục vụ.",
                "Công bộc.",
                "Người quản lý."
            ],
            "answer": 1,
            "explanation": "Người phục vụ.",
            "keywords": "Q: cán bộ nhà nước là gì của nhân | A: Người phục vụ"
        },
        {
            "id": 95,
            "text": "Dưới góc nhìn và phân tích của các nhà nghiên cứu, Hồ Chí Minh có chiều cao và cân nặng bao nhiêu?",
            "options": [
                "Cao 1,5 m; Nặng 45 kg.",
                "Cao 1,5 m; Nặng 55 kg.",
                "Cao 1,52 m; Nặng 45,5 kg.",
                "Cao 1,55 m; Nặng 46 kg."
            ],
            "answer": 0,
            "explanation": "Cao 1,5 m; Nặng 45 kg.",
            "keywords": "Q: Dưới góc nhìn và phân tích của các | A: Cao 1,5 m · Nặng 45 kg"
        },
        {
            "id": 96,
            "text": "Đạo đức nghề nghiệp là gì?",
            "options": [
                "Đạo đức nghề nghiệp là những chuẩn mực về nhận thức và hành vi phù hợp với đặc thù của từng lĩnh vực.",
                "Đạo đức nghề nghiệp là những chuẩn mực về nhận thức và hành vi phù hợp với đặc thù của từng lĩnh vực trong hoạt động nghề nghiệp do cơ quan, tổ chức có thẩm quyền quy định.",
                "Đạo đức nghề nghiệp là những chuẩn mực về nhận thức và hành vi phù hợp với đặc thù của từng lĩnh vực trong hoạt động nghề nghiệp do tổ chức có thẩm quyền quy định.",
                "Đạo đức nghề nghiệp là những chuẩn mực về nhận thức trong hoạt động nghề nghiệp do cơ quan, tổ chức có thẩm quyền quy định."
            ],
            "answer": 1,
            "explanation": "Đạo đức nghề nghiệp là những chuẩn mực về nhận thức và hành vi phù hợp với đặc thù của từng lĩnh vực trong hoạt động nghề nghiệp do cơ quan, tổ chức có thẩm quyền quy định.",
            "keywords": "Q: Đạo đức nghề nghiệp là gì | A: Đạo đức nghề nghiệp là những chuẩn mực · của từng lĩnh vực trong hoạt động nghề"
        },
        {
            "id": 97,
            "text": "Đâu là phạm trù cơ bản của đạo đức?",
            "options": [
                "Lẽ sống, thiện ác.",
                "Lẽ sống, hạnh phúc, trách nhiệm.",
                "Lẽ sống, thiện ác, hạnh phúc, trách nhiệm, lương tâm.",
                "Lẽ sống, thiện ác, hạnh phúc."
            ],
            "answer": 2,
            "explanation": "Lẽ sống, thiện ác, hạnh phúc, trách nhiệm, lương tâm.",
            "keywords": "Q: Đâu là phạm trù cơ bản của đạo | A: Lẽ sống, thiện ác, hạnh · phúc, trách nhiệm, lương tâm"
        },
        {
            "id": 98,
            "text": "Theo Hồ Chí Minh, nguyên tắc cơ bản nhất tổ chức và sinh hoạt Đảng là gì?",
            "options": [
                "Thiểu số phục tùng đa số.",
                "Cấp dưới phục tùng cấp trên.",
                "Tập trung dân chủ.",
                "Tự phê bình và phê bình."
            ],
            "answer": 2,
            "explanation": "Tập trung dân chủ.",
            "keywords": "Q: Theo Hồ Chí Minh, nguyên tắc cơ bản | A: Tập trung dân chủ"
        },
        {
            "id": 99,
            "text": "Nguyễn ái Quốc viết câu mở đầu: “Dân ta phải biết sử ta. Cho tường gốc tích nước nhà Việt Nam”, vào thời gian nào?",
            "options": [
                "Năm 1925.",
                "Năm 1941.",
                "Năm 1930.",
                "Năm 1943."
            ],
            "answer": 1,
            "explanation": "Năm 1941.",
            "keywords": "Q: Nguyễn ái Quốc viết câu mở đầu: “Dân | A: Năm 1941"
        },
        {
            "id": 100,
            "text": "Trong khối đại đoàn kết dân tộc, vì sao phải đặc biệt chú trọng yếu tố “hạt nhân”?",
            "options": [
                "Vì đó là cơ sở phát huy cho sự đoàn kết.",
                "Vì đó là điều kiện cho sự đoàn kết ngoài xã hội.",
                "Vì đó là điều kiện cho thành công của đoàn kết.",
                "Vì đó là mong muốn của đại đa số người dân."
            ],
            "answer": 1,
            "explanation": "Vì đó là điều kiện cho sự đoàn kết ngoài xã hội.",
            "keywords": "Q: hạt nhân trong đại đoàn kết | A: điều kiện · đoàn kết ngoài xã hội"
        },
        {
            "id": 101,
            "text": "Chọn đáp án đúng nhất. Theo Hồ Chí Minh, nhà nước vì dân là nhà nước:",
            "options": [
                "Phục vụ quần chúng nhân dân lao động.",
                "Chăm lo mọi mặt đời sống cho nhân dân.",
                "Do quần chúng nhân dân lao động làm chủ.",
                "Tất cả đều vì lợi ích của nhân dân."
            ],
            "answer": 3,
            "explanation": "Tất cả đều vì lợi ích của nhân dân.",
            "keywords": "Q: Theo Hồ Chí Minh, nhà nước vì dân | A: Tất cả đều vì lợi · ích của nhân dân"
        },
        {
            "id": 102,
            "text": "Phương thức xây dựng khối đại đoàn kết dân tộc là làm tốt công tác vận động quần chúng. Đây là phương thức công tác:",
            "options": [
                "Tuyên giáo.",
                "Tuyên truyền.",
                "Dân vận.",
                "Tuyên vận."
            ],
            "answer": 1,
            "explanation": "Tuyên truyền.",
            "keywords": "Q: Phương thức xây dựng khối đại đoàn kết | A: Tuyên truyền"
        },
        {
            "id": 103,
            "text": "Cơ chế vận hành của hệ thống chính trị nước ta là:",
            "options": [
                "Đảng lãnh đạo, nhà nước quản lý, nhân dân làm chủ.",
                "Nhà nước làm chủ, Đảng lãnh đạo, nhân dân quản lý.",
                "Đảng và nhà nước lãnh đạo, quản lý, nhân dân làm chủ.",
                "Nhà nước lãnh đạo, Đảng quản lý, nhân dân làm chủ."
            ],
            "answer": 0,
            "explanation": "Đảng lãnh đạo, nhà nước quản lý, nhân dân làm chủ.",
            "keywords": "Q: Cơ chế vận hành của hệ thống chính | A: Đảng lãnh đạo · nhà nước quản lý · nhân dân làm chủ"
        },
        {
            "id": 104,
            "text": "Mâu thuẫn cơ bản và chủ yếu ở Việt Nam đầu thế kỷ XX là mâu thuẫn giữa:",
            "options": [
                "Giai cấp nông dân với giai cấp địa chủ phong kiến, tư sản Việt Nam và tư sản Pháp.",
                "Giai cấp công nhân và nông dân với đế quốc phong kiến và chính quyền thực dân.",
                "Giai cấp công nhân với giai cấp tư sản Pháp và tay sai của chúng.",
                "Dân tộc Việt Nam với đế quốc xâm lược và tay sai của chúng."
            ],
            "answer": 3,
            "explanation": "Dân tộc Việt Nam với đế quốc xâm lược và tay sai của chúng.",
            "keywords": "Q: Mâu thuẫn cơ bản và chủ yếu ở | A: Dân tộc Việt Nam với đế quốc · xâm lược và tay sai của chúng"
        },
        {
            "id": 105,
            "text": "Chọn đáp đúng nhất theo Hồ Chí Minh. \"Kiệm\" nghĩa là:",
            "options": [
                "Tiết kiệm của cải.",
                "Tiết kiệm cho nhân dân.",
                "Keo kiệt.",
                "Không lãng phí."
            ],
            "answer": 3,
            "explanation": "Không lãng phí.",
            "keywords": "Q: Chọn đáp đúng nhất theo Hồ Chí Minh. | A: Không lãng phí"
        },
        {
            "id": 106,
            "text": "Hồ Chí Minh lần đầu tiên đưa ra khái niệm về văn hoá theo nghĩa rộng vào thời gian nào? Ở đâu?",
            "options": [
                "Tháng 07/1925, trong cuốn “Đường kách mệnh” tại Trung Quốc.",
                "Tháng 08/1943, trong nhà tù của Tưởng Giới Thạch tại Trung Quốc.",
                "Tháng 02/1930, trong “Cương lĩnh chính trị Đảng” tại Trung Quốc.",
                "Tháng 06/1931, trong nhà tù của thực dân Anh tại Hồng Kông."
            ],
            "answer": 1,
            "explanation": "Tháng 08/1943, trong nhà tù của Tưởng Giới Thạch tại Trung Quốc.",
            "keywords": "Q: Hồ Chí Minh lần đầu tiên đưa ra | A: Tháng 08/1943, trong nhà tù của · Tưởng Giới Thạch tại Trung Quốc"
        },
        {
            "id": 107,
            "text": "Khái niệm tư tưởng Hồ Chí Minh được bổ sung và hoàn thiện tại:",
            "options": [
                "Đại hội đại biển toàn quốc lần thứ VII của Đảng.",
                "Đại hội đại biển toàn quốc lần thứ XI của Đảng.",
                "Đại hội đại biển toàn quốc lần thứ IX của Đảng.",
                "Đại hội đại biển toàn quốc lần thứ X của Đảng."
            ],
            "answer": 2,
            "explanation": "Đại hội đại biển toàn quốc lần thứ IX của Đảng.",
            "keywords": "Q: Khái niệm tư tưởng Hồ Chí Minh được | A: Đại hội đại biển toàn quốc · lần thứ IX của Đảng"
        },
        {
            "id": 108,
            "text": "Chọn đáp án KHÔNG đúng. Quan điểm của Hồ Chí Minh về nguyên tắc xây dựng đạo đức cách mạng:",
            "options": [
                "Nói đi đôi với làm, nêu gương về đạo đức.",
                "Tạo thành phong trào quần chúng rộng rãi.",
                "Xây đi đôi với chống.",
                "Tu dưỡng đạo đức suốt đời."
            ],
            "answer": 1,
            "explanation": "Tạo thành phong trào quần chúng rộng rãi.",
            "keywords": "Q: KHÔNG đúng - Quan điểm của Hồ Chí | A: Tạo thành phong trào quần chúng rộng rãi"
        },
        {
            "id": 109,
            "text": "Nguyễn ái Quốc viết câu mở đầu: “Dân ta phải biết sử ta. Cho tường gốc tích nước nhà Việt Nam”, trong tác phẩm nào?",
            "options": [
                "Bài ca du kích.",
                "Lịch sử nước nhà.",
                "Đường kách mệnh.",
                "Lịch sử nước ta."
            ],
            "answer": 3,
            "explanation": "Lịch sử nước ta.",
            "keywords": "Q: Nguyễn ái Quốc viết câu mở đầu: “Dân | A: Lịch sử nước ta"
        },
        {
            "id": 110,
            "text": "Quốc tế Cộng sản trên thế giới ra đời thời gian nào?",
            "options": [
                "02/03/1919.",
                "03/02/1930.",
                "03/02/1919.",
                "16/07/1920."
            ],
            "answer": 0,
            "explanation": "02/03/1919.",
            "keywords": "Q: Quốc tế Cộng sản trên thế giới ra | A: 02/03/1919"
        },
        {
            "id": 111,
            "text": "Chọn phương án trả lời đúng với tư tưởng Hồ Chí Minh:",
            "options": [
                "Từ 1890 - 1911: Thời kỳ nghiên cứu, khảo sát thực tế, đến với chủ nghia Mác – Lênin.",
                "Từ 1921 - 1930: Thời kỳ nghiên cứu, khảo sát thực tế, đến với chủ nghia Mác – Lênin.",
                "Từ 1911 - 1920: Thời kỳ hình thành tư tưởng yêu nước, chí hướng cứu nước.",
                "Từ 1921 - 1930: Thời kỳ hình thành nội dung cơ bản tư tưởng cách mạng Việt Nam."
            ],
            "answer": 3,
            "explanation": "Từ 1921 - 1930: Thời kỳ hình thành nội dung cơ bản tư tưởng cách mạng Việt Nam.",
            "keywords": "Q: Chọn phương án trả lời đúng với tư | A: Từ 1921 - 1930: Thời kỳ hình thành · dung cơ bản tư tưởng cách mạng Việt"
        },
        {
            "id": 112,
            "text": "“Toàn Đảng hãy ra sức học tập đường lối chính trị, tác phong và đạo đức cách mạng của Hồ Chủ tịch…” được viết trong văn kiện tại:",
            "options": [
                "Đại hội đại biển toàn quốc lần thứ II của Đảng.",
                "Đại hội đại biển toàn quốc lần thứ XI của Đảng.",
                "Đại hội đại biển toàn quốc lần thứ IV của Đảng.",
                "Đại hội đại biển toàn quốc lần thứ V của Đảng."
            ],
            "answer": 0,
            "explanation": "Đại hội đại biển toàn quốc lần thứ II của Đảng.",
            "keywords": "Q: “Toàn Đảng hãy ra sức học tập đường | A: Đại hội đại biển toàn quốc · lần thứ II của Đảng"
        },
        {
            "id": 113,
            "text": "“Trước hết phải có Đảng cách mệnh để trong thì vận động và tổ chức dân chúng, ngoài thì liên lạc với dân tộc bị áp bức và vô sản giai cấp mọi nơi”. Câu được trích trong:",
            "options": [
                "Tác phẩm “Con Rồng tre”.",
                "Tác phẩm “Sửa đổi lối làm việc”.",
                "Tác phẩm “Đường kách mệnh”.",
                "Tác phẩm “Bản án chế độ thực dân Pháp”."
            ],
            "answer": 2,
            "explanation": "Tác phẩm “Đường kách mệnh”.",
            "keywords": "Q: “Trước hết phải có Đảng cách mệnh để | A: Tác phẩm “Đường kách mệnh”"
        },
        {
            "id": 114,
            "text": "Hoạt động đấu tranh đầu tiên của Hồ Chí Minh là gì?",
            "options": [
                "Cùng đoàn biểu tình của nông dân ở Huế biểu tình chống chế độ tham nhũng và mức thuế cao.",
                "Phiên dịch ra tiếng pháp những đòi hỏi của cuộc biểu tình để các viên chức thực dân có thể đọc nó.",
                "Cùng học sinh trường Quốc học Huế biểu tình chống chế độ tham nhũng và mức thuế cao.",
                "Phiên dịch ra tiếng anh những đòi hỏi của cuộc biểu tình để các viên chức thực dân có thể đọc nó."
            ],
            "answer": 0,
            "explanation": "Cùng học sinh trường Quốc học Huế biểu tình chống chế độ tham nhũng và mức thuế cao.",
            "keywords": "Q: Hoạt động đấu tranh đầu tiên của Hồ | A: Cùng đoàn biểu tình của nông dân ở · tình chống chế độ tham nhũng và mức"
        },
        {
            "id": 115,
            "text": "Theo Hồ Chí Minh, nhân dân lao động làm chủ nhà nước dẫn đến hệ quả là:",
            "options": [
                "Nhân dân có quyền bãi miễn Nhà nước.",
                "Nhân dân có quyền phê bình Nhà nước.",
                "Nhân dân có quyền quản lý Nhà nước.",
                "Nhân dân có quyền kiểm soát Nhà nước."
            ],
            "answer": 3,
            "explanation": "Nhân dân có quyền phê bình Nhà nước.",
            "keywords": "Q: Theo Hồ Chí Minh, nhân dân lao động | A: Nhân dân có quyền kiểm soát Nhà nước"
        },
        {
            "id": 116,
            "text": "Đối với Hồ Chí Minh để nghiên cứu, kế thừa và phát triển lý luận cách mạng Việt Nam phải xuất phát từ:",
            "options": [
                "Thực tiễn cách mạng Việt Nam.",
                "Thực tiễn cách mạng phương Đông và phương Tây.",
                "Thực tiễn cách mạng.",
                "Thực tiễn thế giới."
            ],
            "answer": 0,
            "explanation": "Thực tiễn cách mạng Việt Nam.",
            "keywords": "Q: Đối với Hồ Chí Minh để nghiên cứu, | A: Thực tiễn cách mạng Việt Nam"
        },
        {
            "id": 117,
            "text": "Đánh giá về cách mạng Tháng Mười Nga 1917, Hồ Chí Minh xác định:",
            "options": [
                "Cách mạng triệt để.",
                "Cách mạng thành công một nữa.",
                "Cách mạng đến nơi.",
                "Cách mạng thành công."
            ],
            "answer": 2,
            "explanation": "Cách mạng đến nơi.",
            "keywords": "Q: Đánh giá về cách mạng Tháng Mười Nga | A: Cách mạng đến nơi"
        },
        {
            "id": 118,
            "text": "Điểm đặc sắc nhất trong tư tưởng Hồ Chí Minh về nhà nước pháp quyền là gì?",
            "options": [
                "Coi trọng pháp luật trong quản lý xã hội, đặc biệt trong phát triển kinh tế.",
                "Đảm bảo tính nghiêm minh và hiệu lực của pháp luật trong quản lý xã hội.",
                "Đề cao đạo đức trong quản lý xã hội, đề cao tư tưởng nhân đạo hoà bình.",
                "Kết hợp nhuần nhuyễn cả pháp luật và đạo đức trong quản lý xã hội."
            ],
            "answer": 2,
            "explanation": "Đề cao đạo đức trong quản lý xã hội, đề cao tư tưởng nhân đạo hoà bình.",
            "keywords": "Q: Điểm đặc sắc nhất trong tư tưởng Hồ | A: Đề cao đạo đức trong quản lý xã · đề cao tư tưởng nhân đạo hoà bình"
        },
        {
            "id": 119,
            "text": "Trong Nghị quyết 24C/18.6.5 của khoá họp 24 Đại Hội đồng UNESCO, Hồ Chí Minh được ghi nhận là:",
            "options": [
                "Anh hùng giải phóng dân tộc của Việt Nam, Nhà văn hoá lớn của thế giới.",
                "Anh hùng giải phóng dân tộc, Nhà văn hóa kiệt xuất Việt Nam.",
                "Anh hùng cứu nước của dân tộc Việt Nam và Danh nhân văn hóa thế giới.",
                "Anh hùng giải phóng của dân tộc và là Nhà văn hóa lớn của thế giới."
            ],
            "answer": 1,
            "explanation": "Anh hùng giải phóng dân tộc, Nhà văn hóa kiệt xuất Việt Nam.",
            "keywords": "Q: Trong Nghị quyết 24C/18.6.5 của khoá họp 24 | A: Anh hùng giải phóng dân tộc, Nhà · văn hóa kiệt xuất Việt Nam"
        },
        {
            "id": 120,
            "text": "Chọn đáp án KHÔNG đúng. Thực chất của vấn đề dân tộc độc lập trong tư tưởng Hồ Chí Minh là:",
            "options": [
                "Đấu tranh giải phóng dân tộc.",
                "Xây dựng nhà nước của dân, do dân, vì dân.",
                "Thành lập nhà nước dân tộc độc lập.",
                "Đòi quyền bình đẳng giữa các dân tộc."
            ],
            "answer": 3,
            "explanation": "Đòi quyền bình đẳng giữa các dân tộc.",
            "keywords": "Q: KHÔNG đúng - Thực chất của vấn đề | A: Đòi quyền bình đẳng giữa các dân tộc"
        },
        {
            "id": 121,
            "text": "Điền vào chỗ trống đúng theo Hồ Chí Minh, “Rằng đây bốn bể một nhà, […] đều là anh em”.",
            "options": [
                "Bốn phương vô sản.",
                "Lao động thế giới.",
                "Đông Tây Nam Bắc.",
                "Vàng Đen Trắng Đỏ."
            ],
            "answer": 0,
            "explanation": "Bốn phương vô sản.",
            "keywords": "Q: điền khẩu theo Bác | A: Bốn phương vô sản"
        },
        {
            "id": 122,
            "text": "Theo Hồ Chí Minh, ưu điểm lớn nhất của học thuyết Khổng Tử là gì?",
            "options": [
                "Tinh thần hiếu học.",
                "Sự tu dưỡng đạo đức cá nhân.",
                "Quản lý xã hội bằng đạo đức.",
                "Tinh thần lễ nghĩa."
            ],
            "answer": 1,
            "explanation": "Sự tu dưỡng đạo đức cá nhân.",
            "keywords": "Q: Theo Hồ Chí Minh, ưu điểm lớn nhất | A: Sự tu dưỡng đạo đức cá nhân"
        },
        {
            "id": 123,
            "text": "Nguyễn Ái Quốc nhận được lời mời tham dự Quốc tế III tại Moscow vào thời gian nào?",
            "options": [
                "Tháng 12 năm 1920.",
                "Tháng 06 năm 1923.",
                "Tháng 02 năm 1921.",
                "Tháng 12 năm 1922."
            ],
            "answer": 0,
            "explanation": "Tháng 12 năm 1920.",
            "keywords": "Q: Nguyễn Ái Quốc nhận được lời mời tham | A: Tháng 12 năm 1920"
        },
        {
            "id": 124,
            "text": "Theo Hồ Chí Minh, mục đích của Đảng Lao động Việt Nam có thể gộp trong tám chữ, đó là:",
            "options": [
                "Thành công, thành công, đại thành công.",
                "Đoàn kết toàn dân, quyết tâm thắng lợi.",
                "Đoàn kết nhất trí, xây dựng thành công.",
                "Đoàn kết toàn dân, phụng sự tổ quốc."
            ],
            "answer": 3,
            "explanation": "Đoàn kết toàn dân, phụng sự tổ quốc.",
            "keywords": "Q: Theo Hồ Chí Minh, mục đích của Đảng | A: Đoàn kết toàn dân · phụng sự tổ quốc"
        },
        {
            "id": 125,
            "text": "Nguyễn Tất Thành tham gia vào Đảng Xã hội Pháp thời gian nào?",
            "options": [
                "Tháng 10 năm 1917.",
                "Tháng 02 năm 1920.",
                "Tháng 12 năm 1918.",
                "Tháng 02 năm 1919."
            ],
            "answer": 3,
            "explanation": "Tháng 02 năm 1919.",
            "keywords": "Q: Nguyễn Tất Thành tham gia vào Đảng Xã | A: Tháng 02 năm 1919"
        },
        {
            "id": 126,
            "text": "Theo Hồ Chí Minh, để phát huy sức mạnh cá nhân người lao động, cần phải tác động vào:",
            "options": [
                "Nhu cầu và lợi ích của con người.",
                "Nguyện vọng và mong muốn của họ.",
                "Động lực chính trị, tinh thần của con người.",
                "Sở thích của cá nhân của con người."
            ],
            "answer": 0,
            "explanation": "Nhu cầu và lợi ích của con người.",
            "keywords": "Q: Theo Hồ Chí Minh, để phát huy sức | A: Nhu cầu · lợi ích của con người"
        },
        {
            "id": 127,
            "text": "Hồ Chí Minh tiếp cận văn hoá nghĩa hẹp hơn, có nghĩa là:",
            "options": [
                "Tổng hợp mọi phương thức sản xuất của con người.",
                "Sản phẩm, công cụ sinh hoạt cụ thể của người dân.",
                "Các trường học, số người đi học, biết đọc, biết viết.",
                "Đời sống tính thần của xã hội, thuộc cơ sở hạ tầng."
            ],
            "answer": 2,
            "explanation": "Các trường học, số người đi học, biết đọc, biết viết.",
            "keywords": "Q: Hồ Chí Minh tiếp cận văn hoá nghĩa | A: Các trường học · số người đi học · biết đọc · biết viết"
        },
        {
            "id": 128,
            "text": "Ý thức đạo đức thể hiện qua những tiêu chí nào?",
            "options": [
                "Ý thức, trách nhiệm và lý trí.",
                "Khách quan và chủ quan.",
                "Thái độ, quan điểm và quan niệm sống.",
                "Thái độ, quan niệm sống và trách nhiệm."
            ],
            "answer": 2,
            "explanation": "Thái độ, quan điểm và quan niệm sống.",
            "keywords": "Q: Ý thức đạo đức thể hiện qua những | A: Thái độ · quan điểm và quan niệm sống"
        },
        {
            "id": 129,
            "text": "Người khởi xướng và lãnh đạo phong trào Duy Tân (1906 -1908) là:",
            "options": [
                "Phan Chu Trinh.",
                "Phan Bội Châu.",
                "Lương Văn Can.",
                "Nguyễn Thái Học."
            ],
            "answer": 0,
            "explanation": "Phan Chu Trinh.",
            "keywords": "Q: Người khởi xướng và lãnh đạo phong trào | A: Phan Chu Trinh"
        },
        {
            "id": 130,
            "text": "\"Đoàn kết là một truyền thống cực kỳ quý báu của Đảng ta, của dân ta. Các đồng chí từ trung ương đến các chi bộ cần phải giữ gìn sự đoàn kết nhất trí của Đảng…\", luận điểm này được trích trong tác phầm nào của Bác?",
            "options": [
                "Đạo đức cách mạng.",
                "Di chúc.",
                "Sửa đổi lối làm việc.",
                "Thường thức chính trị."
            ],
            "answer": 1,
            "explanation": "Di chúc.",
            "keywords": "Q: Đoàn kết là một truyền thống cực kỳ | A: Di chúc"
        },
        {
            "id": 131,
            "text": "“Đảng phải đặc biệt coi trọng việc tổ chức học tập một cách có hệ thống tư tưởng, đạo đức tác phong của Hồ Chí Minh trong toàn Đảng” được nhấn mạnh trong văn kiện tại:",
            "options": [
                "Đại hội đại biển toàn quốc lần thứ II của Đảng.",
                "Đại hội đại biển toàn quốc lần thứ XI của Đảng.",
                "Đại hội đại biển toàn quốc lần thứ IV của Đảng.",
                "Đại hội đại biển toàn quốc lần thứ V của Đảng."
            ],
            "answer": 3,
            "explanation": "Đại hội đại biển toàn quốc lần thứ V của Đảng.",
            "keywords": "Q: “Đảng phải đặc biệt coi trọng việc tổ | A: Đại hội đại biển toàn quốc · lần thứ V của Đảng"
        },
        {
            "id": 132,
            "text": "Đặc trưng cốt lõi nhất trong tư tưởng đạo đức của Hồ Chí Minh là gì?",
            "options": [
                "Lòng yêu thương người.",
                "Chủ nghĩa nhân đạo chiến đấu.",
                "Lòng yêu nước, thương dân.",
                "Sự quan tâm đến con người."
            ],
            "answer": 1,
            "explanation": "Chủ nghĩa nhân đạo chiến đấu.",
            "keywords": "Q: Đặc trưng cốt lõi nhất trong tư tưởng | A: Chủ nghĩa nhân đạo chiến đấu"
        },
        {
            "id": 133,
            "text": "Chọn đáp án KHÔNG đúng. Theo Hồ Chí Minh, nền văn hóa mà chúng ta xây dựng phải có:",
            "options": [
                "Tính tiên tiến.",
                "Tính đại chúng.",
                "Tính dân tộc.",
                "Tính khoa học."
            ],
            "answer": 0,
            "explanation": "Tính tiên tiến.",
            "keywords": "Q: KHÔNG đúng - Theo Hồ Chí Minh, nền | A: Tính tiên tiến"
        },
        {
            "id": 134,
            "text": "Để mô tả mối quan hệ giữa cách mạng giải phóng dân và cách mạng vô sản, Hồ Chí Minh sử dụng hình tượng:",
            "options": [
                "Hai cánh của một con chim.",
                "Con bạch tuộc.",
                "Con đĩa có hai vòi.",
                "Hai con chim đại bàng."
            ],
            "answer": 0,
            "explanation": "Hai cánh của một con chim.",
            "keywords": "Q: CM dân tộc và CM XH | A: Hai cánh của một con chim"
        },
        {
            "id": 135,
            "text": "Điền vào chỗ trống đúng theo Hồ Chí Minh. Trong đoàn kết quốc tế, “Muốn người ta giúp cho thì trước hết mình phải […]”.",
            "options": [
                "Giúp người ta trước.",
                "Kêu gọi sự giúp đỡ.",
                "Tự cố gắng đứng dậy.",
                "Tự giúp lấy mình đã."
            ],
            "answer": 3,
            "explanation": "Tự giúp lấy mình đã.",
            "keywords": "Q: điền khẩu theo Bác | A: Tự giúp lấy mình đã"
        },
        {
            "id": 136,
            "text": "Theo Hồ Chí Minh, khát vọng lớn nhất của dân tộc thuộc địa là gì?",
            "options": [
                "Ruộng đất cho dân cày.",
                "Quyền bình đẳng.",
                "Hòa bình và ruộng đất.",
                "Độc lập và tự do."
            ],
            "answer": 3,
            "explanation": "Độc lập và tự do.",
            "keywords": "Q: Theo Hồ Chí Minh, khát vọng lớn nhất | A: Độc lập và tự do"
        },
        {
            "id": 137,
            "text": "Hồ Chí Minh đánh giá thực tế phong trào cách mạng ở Mỹ và Pháp:",
            "options": [
                "Thành công triệt để.",
                "Thành công một nữa.",
                "Thành công không đến nơi.",
                "Chưa thực sự thành công."
            ],
            "answer": 2,
            "explanation": "Thành công không đến nơi.",
            "keywords": "Q: Hồ Chí Minh đánh giá thực tế phong | A: Thành công không đến nơi"
        },
        {
            "id": 138,
            "text": "Câu nói nào sau đây là của Hồ Chí Minh?",
            "options": [
                "Học không biết chán, dạy không biết mỏi.",
                "Học vì ngày mai lập nghiệp.",
                "Học, học nữa, học mãi.",
                "Việc học không bao giờ cùng, còn sống còn phải học."
            ],
            "answer": 3,
            "explanation": "Việc học không bao giờ cùng, còn sống còn phải học.",
            "keywords": "Q: Câu nói nào sau đây là của Hồ | A: Việc học không bao giờ cùng, · còn sống còn phải học"
        },
        {
            "id": 139,
            "text": "Chọn đáp án đúng nhất. Hồ Chí Minh ra đi tìm đường cứu nước vào thời gian nào? Ở đâu?",
            "options": [
                "Năm 1911; Thành phố Hồ Chí Minh.",
                "Ngày 05/06/1911; Bến cảng Nhà rồng – Hương cảng.",
                "Ngày 05/06/1911; Bến cảng Nhà rồng - Sài gòn.",
                "Ngày 05/06/1911; Thành phố Sài gòn."
            ],
            "answer": 2,
            "explanation": "Ngày 05/06/1911; Bến cảng Nhà rồng - Sài gòn.",
            "keywords": "Q: Hồ Chí Minh ra đi tìm đường cứu | A: Ngày 05/06/1911 · Bến cảng Nhà rồng - Sài gòn"
        },
        {
            "id": 140,
            "text": "Theo Hồ Chí Minh, mối quan hệ giữa văn hoá với các lĩnh vực khác là gì?",
            "options": [
                "Văn hoá là một trong bốn lĩnh vực đời sống: chính trị, kinh tế, văn hoá, xã hội.",
                "Văn hoá là một mặt trận, cùng góp phần thắng lợi mặt trận chính trị, kinh tế, xã hội.",
                "Văn hoá với các lĩnh vực chính trị, kinh tế, xã hội có sự tác động qua lại lẫn nhau.",
                "Văn hoá không thể đứng ngoài mà phải đứng trong chính trị, kinh tế, xã hội."
            ],
            "answer": 3,
            "explanation": "Văn hoá không thể đứng ngoài mà phải đứng trong chính trị, kinh tế, xã hội.",
            "keywords": "Q: Theo Hồ Chí Minh, mối quan hệ giữa | A: Văn hoá không thể đứng ngoài mà phải · đứng trong chính trị, kinh tế, xã hội"
        },
        {
            "id": 141,
            "text": "\"Theo tư tưởng Hồ Chí Minh, quan điểm: “Xác lập tất cả mọi quyền lực trong Nhà nước và trong xã hội đều thuộc về nhân dân” được thể hiện trong hiến pháp nào?\"",
            "options": [
                "Hiến pháp 1959 và Hiến pháp 1976.",
                "Hiến pháp 1946 và Hiến pháp 1959.",
                "Hiến pháp 1976 và Hiến pháp 1980.",
                "Hiến pháp 1980 và Hiến pháp 1992."
            ],
            "answer": 1,
            "explanation": "Hiến pháp 1946 và Hiến pháp 1959.",
            "keywords": "Q: \"Theo tư tưởng Hồ Chí Minh, quan điểm: | A: Hiến pháp 1946 · Hiến pháp 1959"
        },
        {
            "id": 142,
            "text": "Chọn đáp án KHÔNG đúng. Hồ Chí Minh đề cập đến đạo đức trong mối quan hệ giữa:",
            "options": [
                "Con người với con người.",
                "Con người với xã hội.",
                "Con người với việc làm.",
                "Con người với thói quen."
            ],
            "answer": 3,
            "explanation": "Con người với thói quen.",
            "keywords": "Q: KHÔNG đúng - Hồ Chí Minh đề cập | A: Con người với thói quen"
        },
        {
            "id": 143,
            "text": "Hồ Chí Minh tiếp thu tư tưởng văn hoá phương Đông chủ yếu từ đâu?",
            "options": [
                "Nho giáo và Phật giáo.",
                "Chủ nghĩa Mác – Lênin.",
                "Nho giáo và Thiên Chúa giáo.",
                "Phật giáo và Thiên Chúa giáo."
            ],
            "answer": 0,
            "explanation": "Nho giáo và Phật giáo.",
            "keywords": "Q: Hồ Chí Minh tiếp thu tư tưởng văn | A: Nho giáo và Phật giáo"
        },
        {
            "id": 144,
            "text": "Yếu tố KHÔNG nằm trong cơ cấu Mặt trận Dân tộc thống nhất là gì?",
            "options": [
                "Đảng Cộng sản Việt Nam.",
                "Nhà nước xã hội chủ nghĩa.",
                "Các tổ chức chính trị - xã hội.",
                "Đoàn Thanh niên Cộng sản Hồ Chí Minh."
            ],
            "answer": 1,
            "explanation": "Nhà nước xã hội chủ nghĩa.",
            "keywords": "Q: KHÔNG đúng - Yếu tố KHÔNG nằm trong | A: Nhà nước xã hội chủ nghĩa"
        },
        {
            "id": 145,
            "text": "Chọn đáp án đúng điền vào chỗ trống, theo Hồ Chí Minh: “[…] mà không tiết kiệm thì khác nào gió vào nhà trống”.",
            "options": [
                "Cần cù.",
                "Xây dựng chủ nghĩa xã hội.",
                "Tăng gia sản xuất.",
                "Sản xuất."
            ],
            "answer": 3,
            "explanation": "Sản xuất.",
            "keywords": "Q: điền khẩu theo Bác | A: Sản xuất"
        },
        {
            "id": 146,
            "text": "Hệ tư tưởng có tính quyết định đến sự hình thành lối sống của Hồ Chí Minh là:",
            "options": [
                "Tư tưởng Lão giáo.",
                "Tư tưởng Phật giáo.",
                "Tư tưởng Nho giáo.",
                "Chủ nghĩa Mác – Lênin."
            ],
            "answer": 0,
            "explanation": "Tư tưởng Lão giáo.",
            "keywords": "Q: Hệ tư tưởng có tính quyết định đến | A: Tư tưởng Lão giáo"
        },
        {
            "id": 147,
            "text": "Chọn đáp án KHÔNG đúng. Điều kiện để xây dựng khối đại đoàn kết toàn dân tộc:",
            "options": [
                "Phải có lòng yêu thương con người, sống có hoài bão.",
                "Phải có niềm tin vào nhân dân.",
                "Phải kế thừa truyền thống yêu nước, nhân nghĩa, đoàn kết.",
                "Phải có lòng khoan dung, độ lượng với con người."
            ],
            "answer": 2,
            "explanation": "Phải kế thừa truyền thống yêu nước, nhân nghĩa, đoàn kết.",
            "keywords": "Q: KHÔNG đúng - Điều kiện để xây dựng | A: Phải kế thừa truyền thống yêu nước · nhân nghĩa · đoàn kết"
        },
        {
            "id": 148,
            "text": "Xác định lẽ sống để làm gì?",
            "options": [
                "Chọn cho mình lý do để sống.",
                "Chọn cho mình nghề nghiệp.",
                "Chọn cho mình ý nghĩa của cuộc sống.",
                "Chọn cho mình hướng đi."
            ],
            "answer": 0,
            "explanation": "Chọn cho mình lý do để sống.",
            "keywords": "Q: Xác định lẽ sống để làm gì | A: Chọn cho mình lý do để sống"
        },
        {
            "id": 149,
            "text": "Cơ sở khách quan quyết định đến sự hình thành tư tưởng Hồ Chí Minh là:",
            "options": [
                "Tinh hoa văn hóa dân tộc.",
                "Chủ nghĩa tam dân.",
                "Tinh hoa văn hoá nhân loại.",
                "Chủ nghĩa Mác – Lênin."
            ],
            "answer": 2,
            "explanation": "Tinh hoa văn hoá nhân loại.",
            "keywords": "Q: Cơ sở khách quan quyết định đến sự | A: Tinh hoa văn hoá nhân loại"
        },
        {
            "id": 150,
            "text": "Vấn đề dân tộc độc lập trong tư tưởng Hồ Chí Minh là vấn đề dân tộc:",
            "options": [
                "Phong kiến.",
                "Độc lập.",
                "Thuộc địa.",
                "Tư sản."
            ],
            "answer": 2,
            "explanation": "Thuộc địa.",
            "keywords": "Q: Vấn đề dân tộc độc lập trong tư | A: Thuộc địa"
        },
        {
            "id": 151,
            "text": "Hạnh phúc đích thực của con người là gì?",
            "options": [
                "Sống và hoạt động để tạo ra giá trị vật chất.",
                "Sống và hoạt động để tạo ra giá trị vật chất, tinh thần nhằm thoả mãn nhu cầu cá nhân.",
                "Sống và hoạt động để tạo ra giá trị tinh thần.",
                "Sống và hoạt động để tạo ra giá trị vật chất, tinh thần nhằm thoả mãn nhu cầu xã hội."
            ],
            "answer": 3,
            "explanation": "Sống và hoạt động để tạo ra giá trị vật chất, tinh thần nhằm thoả mãn nhu cầu xã hội.",
            "keywords": "Q: Hạnh phúc đích thực của con người là | A: Sống và hoạt động để tạo ra giá · chất, tinh thần nhằm thoả mãn nhu cầu"
        },
        {
            "id": 152,
            "text": "Điền vào chỗ trống đúng theo Hồ Chí Minh, “Làm cách mệnh rồi thì quyền trao cho […] chớ để trong tay một bọn ít người”.",
            "options": [
                "Giai cấp công nhân.",
                "Dân chúng số nhiều.",
                "Quần chúng nhân dân.",
                "Người dân lao động."
            ],
            "answer": 2,
            "explanation": "Quần chúng nhân dân.",
            "keywords": "Q: điền khẩu theo Bác | A: Quần chúng nhân dân"
        },
        {
            "id": 153,
            "text": "Chọn đáp án đúng nhất theo tư tưởng Hồ Chí Minh về Nhà nước Việt Nam?",
            "options": [
                "Mang bản chất giai cấp công nhân.",
                "Mang tính dân tộc.",
                "Có tính dân tộc và tính nhân dân sâu sắc.",
                "Có sự thống nhất bản chất giai cấp công nhân với tính nhân dân và tính dân tộc."
            ],
            "answer": 3,
            "explanation": "Có sự thống nhất bản chất giai cấp công nhân với tính nhân dân và tính dân tộc.",
            "keywords": "Q: về Nhà nước Việt Nam | A: Có sự thống nhất bản chất giai cấp · nhân với tính nhân dân và tính dân"
        },
        {
            "id": 154,
            "text": "Chọn phương án trả lời đúng theo tư tưởng Hồ Chí Minh:",
            "options": [
                "Pháp luật đúng là pháp luật thể hiện bảo vệ được quyền lợi ích của dân.",
                "Pháp luật đúng là pháp luật bảo vệ lợi ích của giai cấp cầm quyền.",
                "Pháp luật đúng là pháp luật duy trì sự cầm quyền của Đảng.",
                "Pháp luật đúng là công cụ thống trị của thế lực cầm quyền."
            ],
            "answer": 0,
            "explanation": "Pháp luật đúng là pháp luật thể hiện bảo vệ được quyền lợi ích của dân.",
            "keywords": "Q: Chọn phương án trả lời đúng theo tư | A: Pháp luật đúng là pháp luật thể hiện · bảo vệ được quyền lợi ích của dân"
        },
        {
            "id": 155,
            "text": "Cơ quan ngôn luận của tổ chức Việt Nam Thanh niên cách mạng đồng chí Hội là tờ báo tên là gì?",
            "options": [
                "Báo Người cùng khổ.",
                "Báo Người cùng khổ.",
                "Báo Thanh niên.",
                "Báo Đời sống, xã hội."
            ],
            "answer": 2,
            "explanation": "Báo Thanh niên.",
            "keywords": "Q: Cơ quan ngôn luận của tổ chức Việt | A: Báo Thanh niên"
        },
        {
            "id": 156,
            "text": "Theo Hồ Chí Minh, mục đích tiếp thu của văn hoá nhân loại là để:",
            "options": [
                "Làm giàu cho văn hoá Việt Nam, xây dựng nó phù hợp với tinh thần dân chủ.",
                "Mở rộng giá trị cho văn hoá Việt Nam, tiếp thu chọn lọc những nét tiến bộ mới.",
                "Làm giàu cho Việt Nam, xây dựng nền văn hoá phù hợp với tinh thần dân chủ.",
                "Làm giàu cho văn hoá Việt Nam, xây dựng nó phù hợp với tinh thần cách mạng."
            ],
            "answer": 0,
            "explanation": "Làm giàu cho văn hoá Việt Nam, xây dựng nó phù hợp với tinh thần dân chủ.",
            "keywords": "Q: nhân vật Làm giàu cho văn hoá Việt | A: Làm giàu cho văn hoá Việt Nam, xây · nó phù hợp với tinh thần dân chủ"
        },
        {
            "id": 157,
            "text": "Chọn đáp án KHÔNG đúng. Con đường cách mạng cuối thế kỷ XIX đầu thế kỷ XX ở Việt Nam:",
            "options": [
                "Cách mạng Phong kiến.",
                "Cải cách dân chủ tư sản.",
                "Cách mạng dân chủ tư sản.",
                "Cách mạng vô sản."
            ],
            "answer": 1,
            "explanation": "Cải cách dân chủ tư sản.",
            "keywords": "Q: KHÔNG đúng - Con đường cách mạng cuối | A: Cải cách dân chủ tư sản"
        },
        {
            "id": 158,
            "text": "Chọn đáp án KHÔNG đúng. Theo Hồ Chí Minh, các lĩnh vực chính của văn hóa là:",
            "options": [
                "Văn hóa giáo dục.",
                "Văn hóa văn nghệ.",
                "Văn hoá du lịch.",
                "Văn hóa đời sống."
            ],
            "answer": 2,
            "explanation": "Văn hoá du lịch.",
            "keywords": "Q: KHÔNG đúng - Theo Hồ Chí Minh, các | A: Văn hoá du lịch"
        },
        {
            "id": 159,
            "text": "Chọn đáp án KHÔNG đúng. Theo Hồ Chí Minh, chuẩn mực đạo đức cách mạng là:",
            "options": [
                "Trung với nước, hiếu với dân.",
                "Yêu thương con người, sống có tình có nghĩa.",
                "Sẵn sàng chiến đấu, hy sinh vì Tổ quốc.",
                "Cần, kiệm, liêm, chính, chí công vô tư."
            ],
            "answer": 2,
            "explanation": "Sẵn sàng chiến đấu, hy sinh vì Tổ quốc.",
            "keywords": "Q: KHÔNG đúng - Theo Hồ Chí Minh, chuẩn | A: Sẵn sàng chiến đấu · hy sinh vì Tổ quốc"
        },
        {
            "id": 160,
            "text": "\"Người cách mạng phải học suốt đời, học lý luận, học quần chúng, học thực tế. Người không học thì như đi ban đêm không đèn, không gậy, dễ vấp té, có phải thế không?\". Đây là Hồ Chí Minh căn dặn ai?",
            "options": [
                "Nguyễn Thị Thập.",
                "Nguyễn Thị Định.",
                "Tạ Thị Kiều.",
                "Nguyễn Thị Chiến."
            ],
            "answer": 1,
            "explanation": "Nguyễn Thị Định.",
            "keywords": "Q: \"Người cách mạng phải học suốt đời, học | A: Nguyễn Thị Định"
        },
        {
            "id": 161,
            "text": "“Đảng Cộng Sản Việt Nam là sự kết hợp của chủ nghĩa Mác – Lênin với phong trào công nhân và […]”. Điền vào chỗ trống đúng theo Hồ Chí Minh.",
            "options": [
                "Phong trào nông dân.",
                "Phong trào dân chủ.",
                "Tầng lớp trí thức.",
                "Phong trào yêu nước."
            ],
            "answer": 3,
            "explanation": "Phong trào yêu nước.",
            "keywords": "Q: điền khẩu theo Bác | A: Phong trào yêu nước"
        },
        {
            "id": 162,
            "text": "Mặt trận dân tộc thống nhất được hợp nhất vào thời gian nào?",
            "options": [
                "Ngày 20/12/1960.",
                "Ngày 22/12/1944.",
                "Ngày 04/02/1977.",
                "Ngày 12/12/1986."
            ],
            "answer": 2,
            "explanation": "Ngày 04/02/1977.",
            "keywords": "Q: Mặt trận dân tộc thống nhất được hợp | A: Ngày 04/02/1977"
        },
        {
            "id": 163,
            "text": "Xét về tính giá trị, sự khác nhau giữa văn hóa và văn minh là:",
            "options": [
                "Văn hóa gắn với phương Đông nông nghiệp, văn minh gắn với phương tây đô thị.",
                "Văn hóa mang tính dân tộc còn văn minh mang tính quốc tế.",
                "Văn minh có trình độ phát triển còn văn hóa có bề dày lịch sử.",
                "Văn minh thiên về vật chất - kỹ thuật còn văn hóa thiên về vật chất tinh thần."
            ],
            "answer": 3,
            "explanation": "Văn minh thiên về vật chất - kỹ thuật còn văn hóa thiên về vật chất tinh thần.",
            "keywords": "Q: Xét về tính giá trị, sự khác nhau | A: Văn minh thiên về vật chất - kỹ · còn văn hóa thiên về vật chất tinh"
        },
        {
            "id": 164,
            "text": "Chuẩn mực xã hội là gì?",
            "options": [
                "Quy tắc (tường minh/ hàm ẩn) nhằm xác định kiểu hành vi nào là được chấp nhận trong một xã hội/cộng đồng/nhóm.",
                "Quy tắc ứng xử chung của xã hội.",
                "Chuẩn mực đạo đức trong đời sống.",
                "Những hành vi được chấp nhận."
            ],
            "answer": 0,
            "explanation": "Quy tắc (tường minh/ hàm ẩn) nhằm xác định kiểu hành vi nào là được chấp nhận trong một xã hội/cộng đồng/nhóm.",
            "keywords": "Q: Chuẩn mực xã hội là gì | A: Quy tắc (tường minh/ hàm ẩn) nhằm xác · vi nào là được chấp nhận trong một"
        },
        {
            "id": 165,
            "text": "Quan điểm nào sau đây không phải của Hồ Chí Minh?",
            "options": [
                "Trong cuộc đấu tranh chống chủ nghĩa đế quốc, chủ nghĩa thực dân, cách mạng thuộc địa có tầm quan trọng đặc biệt.",
                "Sự giải phóng của giai cấp công nhân phải là sự nghiệp của bản thân giai cấp công nhân.",
                "Công cuộc giải phóng anh em (tức nhân dân thuộc địa) chỉ có thể thực hiện được bằng sự nỗ lực của bản thân anh em.",
                "Cuộc đấu tranh của công nhân ở tất cả các nước để tự giải phóng, chỉ có thể thành công được, nếu công nhân cùng nhau đấu tranh chống lại tư bản quốc tế."
            ],
            "answer": 0,
            "explanation": "Trong cuộc đấu tranh chống chủ nghĩa đế quốc, chủ nghĩa thực dân, cách mạng thuộc địa có tầm quan trọng đặc biệt.",
            "keywords": "Q: KHÔNG đúng - không phải quan điểm HCM | A: chống chủ nghĩa đế quốc · cách mạng thuộc địa · tầm quan trọng đặc biệt"
        },
        {
            "id": 166,
            "text": "Theo Hồ Chí Minh, muốn xây dựng CNXH trước hết cần phải có:",
            "options": [
                "Khoa học - kỹ thuật tiên tiến.",
                "Văn hóa đậm đà bản sắc dân tộc.",
                "Nền kinh tế phát triển cao.",
                "Con người xã hội chủ nghĩa."
            ],
            "answer": 3,
            "explanation": "Con người xã hội chủ nghĩa.",
            "keywords": "Q: Theo Hồ Chí Minh, muốn xây dựng CNXH | A: Con người xã hội chủ nghĩa"
        },
        {
            "id": 167,
            "text": "Để chỉ chủ nghĩa tư bản, Hồ Chí Minh sử dụng hình tượng nào?",
            "options": [
                "Con bạch tuộc.",
                "Con chim đại bàng.",
                "Con đĩa hai vòi.",
                "Hai cánh của con chim."
            ],
            "answer": 2,
            "explanation": "Con đĩa hai vòi.",
            "keywords": "Q: Để chỉ chủ nghĩa tư bản, Hồ Chí | A: Con đĩa hai vòi"
        },
        {
            "id": 168,
            "text": "Chọn đáp án ĐÚNG nhất với tư tưởng Hồ Chí Minh:",
            "options": [
                "Cách mạng giải phóng dân tộc giành thắng lợi đồng thời với thắng lợi cách mạng vô sản ở chính quốc.",
                "Thắng lợi của cách mạng vô sản ở chính quốc là tiền đề, cách mạng giải phóng dân tộc ở thuộc địa là hệ quả.",
                "Thắng lợi của cách mạng vô sản ở thuộc địa phải phụ thuộc vào thắng lợi của cách mạng vô sản ở chính quốc.",
                "Cách mạng giải phóng dân tộc có khả năng nổ ra và giành được thắng lợi trước cách mạng vô sản ở chính quốc."
            ],
            "answer": 3,
            "explanation": "Cách mạng giải phóng dân tộc có khả năng nổ ra và giành được thắng lợi trước cách mạng vô sản ở chính quốc.",
            "keywords": "Q: Chọn đáp án ĐÚNG nhất với tư tưởng | A: Cách mạng giải phóng dân tộc có khả · giành được thắng lợi trước cách mạng vô"
        },
        {
            "id": 169,
            "text": "Cơ sở thế giới quan và phương pháp luận của tư tưởng Hồ Chí Minh là:",
            "options": [
                "Chủ nghĩa yêu nước.",
                "Tinh hoa văn hoá người Việt Nam.",
                "Tinh hoa văn hóa nhân loại.",
                "Chủ nghĩa Mác – Lênin."
            ],
            "answer": 3,
            "explanation": "Chủ nghĩa Mác – Lênin.",
            "keywords": "Q: Cơ sở thế giới quan và phương pháp | A: Chủ nghĩa Mác – Lênin"
        },
        {
            "id": 170,
            "text": "Lênin coi phong trào giải phóng dân tộc là gì?",
            "options": [
                "Một bộ phận của cách mạng vô sản thế giới.",
                "Cơ sở của quyền tự do, dân chủ chân chính.",
                "Một bộ phận của vấn đề giai cấp.",
                "Kim chỉ nam cho các dân tộc bị áp bức trên thế giới."
            ],
            "answer": 0,
            "explanation": "Một bộ phận của cách mạng vô sản thế giới.",
            "keywords": "Q: Lênin coi phong trào giải phóng dân tộc | A: Một bộ phận của cách · mạng vô sản thế giới"
        },
        {
            "id": 171,
            "text": "Điền vào chỗ trống đúng theo Hồ Chí Minh, “Việc gì có lợi cho […], ta phải hết sức làm;việc gì có hại cho […], ta phải hết sức tránh”.",
            "options": [
                "Nhà nước.",
                "Công dân.",
                "Dân.",
                "Đảng."
            ],
            "answer": 2,
            "explanation": "Dân.",
            "keywords": "Q: điền khẩu theo Bác | A: Dân"
        },
        {
            "id": 172,
            "text": "Sức mạnh dân tộc trong tư tưởng Hồ Chí Minh KHÔNG bao gồm:",
            "options": [
                "Chủ nghĩa yêu nước Việt Nam.",
                "Tài nguyên thiên nhiên.",
                "Tinh thần đoàn kết, ý thức tự lực tự cường.",
                "Văn hóa truyền thống Việt Nam."
            ],
            "answer": 1,
            "explanation": "Tài nguyên thiên nhiên.",
            "keywords": "Q: KHÔNG đúng - sức mạnh dân tộc | A: Tài nguyên thiên nhiên"
        },
        {
            "id": 173,
            "text": "Trong tư tưởng Hồ Chí Minh, nhiệm vụ hàng đầu, trên hết, trước hết của cách mạng Việt Nam là gì?",
            "options": [
                "Giải phóng giai cấp công nhân.",
                "Người cày phải có ruộng.",
                "Giải phóng dân tộc.",
                "Giải phóng con người."
            ],
            "answer": 2,
            "explanation": "Giải phóng dân tộc.",
            "keywords": "Q: Trong tư tưởng Hồ Chí Minh, nhiệm vụ | A: Giải phóng dân tộc"
        },
        {
            "id": 174,
            "text": "Chọn đáp án KHÔNG đúng. Nguyên tắc xây dựng Đảng Cộng sản Việt Nam theo tư tưởng Hồ Chí Minh là:",
            "options": [
                "Thiểu số phục tùng đa số.",
                "Kỷ luật nghiêm minh, tự giác.",
                "Đoàn kết, thống nhất trong Đảng.",
                "Tự phê bình và phê bình."
            ],
            "answer": 0,
            "explanation": "Thiểu số phục tùng đa số.",
            "keywords": "Q: KHÔNG đúng - Chọn đáp án KHÔNG đúng. | A: Thiểu số phục tùng đa số"
        },
        {
            "id": 175,
            "text": "Đặc trưng nào cho phép phân biệt văn hóa như một hiện tượng xã hội do con người tạo ra với các giá trị tự nhiên do thiên nhiên tạo ra?",
            "options": [
                "Tính lịch sử.",
                "Tính hệ thống.",
                "Tính giá trị.",
                "Tính nhân sinh."
            ],
            "answer": 3,
            "explanation": "Tính nhân sinh.",
            "keywords": "Q: Đặc trưng nào cho phép phân biệt văn | A: Tính nhân sinh"
        },
        {
            "id": 176,
            "text": "Các luồng tư tưởng dân chủ tư sản, tư tưởng Mac- Lênin được truyền vào Việt Nam vào giai đoạn văn hóa nào?",
            "options": [
                "Giai đoạn văn hóa thời kì Bắc thuộc.",
                "Giai đoạn văn hóa hiện đại.",
                "Giai đoạn văn hóa Đại Việt.",
                "Giai đoạn văn hóa thời kì Pháp thuộc."
            ],
            "answer": 3,
            "explanation": "Giai đoạn văn hóa thời kì Pháp thuộc.",
            "keywords": "Q: Các luồng tư tưởng dân chủ tư sản, | A: Giai đoạn văn hóa thời kì Pháp thuộc"
        },
        {
            "id": 177,
            "text": "“Đưa hổ cửa trước, rước beo cửa sau” là câu đánh giá của ai?",
            "options": [
                "Phan Chu Trinh.",
                "Phan Bội Châu.",
                "Hồ Chí Minh.",
                "Giai đoạn văn hóa thời kì Pháp thuộc."
            ],
            "answer": 1,
            "explanation": "Phan Bội Châu.",
            "keywords": "Q: “Đưa hổ cửa trước, rước beo cửa sau” | A: Phan Bội Châu"
        },
        {
            "id": 178,
            "text": "Quá trình hình thành và phát triển tư tưởng Hồ Chí Minh trải qua mấy giai đoạn và giai đoạn nào quan trọng nhất?",
            "options": [
                "Ba giai đoạn, giai đoạn từ khi sinh ra đến trước 05/06/1911 là quan trọng nhất.",
                "Sáu giai đoạn, giai đoạn từ cuối 1920 đến 03/02/1930 là quan trọng nhất.",
                "Bốn giai đoạn, giai đoạn từ khi sinh ra đến trước 05/06/1911 là quan trọng nhất.",
                "Năm giai đoạn, giai đoạn từ cuối 1920 đến 03/02/1930 là quan trọng nhất."
            ],
            "answer": 3,
            "explanation": "Năm giai đoạn, giai đoạn từ cuối 1920 đến 03/02/1930 là quan trọng nhất.",
            "keywords": "Q: Quá trình hình thành và phát triển tư | A: Năm giai đoạn, giai đoạn từ cuối · 1920 đến 03/02/1930 là quan trọng nhất"
        },
        {
            "id": 179,
            "text": "Truyền thống văn hoá dân tộc giữ vị trí hàng đầu hình thành nên tư tưởng Hồ Chí Minh là:",
            "options": [
                "Truyền thống đoàn kết.",
                "Truyền thống hiếu học.",
                "Truyền thống cần cù, sáng tạo.",
                "Truyền thống yêu nước."
            ],
            "answer": 3,
            "explanation": "Truyền thống yêu nước.",
            "keywords": "Q: Truyền thống văn hoá dân tộc giữ vị | A: Truyền thống yêu nước"
        },
        {
            "id": 180,
            "text": "Hồ Chí Minh có bao nhiêu cách tiếp cận chủ yếu về văn hoá?",
            "options": [
                "Hai cách: Theo nghĩa rộng; Theo nghĩa hẹp.",
                "Năm cách: Theo nghĩa rộng; Theo nghĩa hẹp; Theo nghĩa hẹp hơn; Theo phương thức phát triển của công cụ sản xuất; Theo phương thức sử dụng công cụ sinh hoạt.",
                "Ba cách: Theo nghĩa rộng; Theo nghĩa hẹp; Theo nghĩa hẹp hơn.",
                "Bốn cách: Theo nghĩa rộng; Theo nghĩa hẹp; Theo nghĩa hẹp hơn; Theo phương thức sử dụng công cụ sinh hoạt."
            ],
            "answer": 3,
            "explanation": "Bốn cách: Theo nghĩa rộng; Theo nghĩa hẹp; Theo nghĩa hẹp hơn; Theo phương thức sử dụng công cụ sinh hoạt.",
            "keywords": "Q: Hồ Chí Minh có bao nhiêu cách tiếp | A: Bốn cách: Theo nghĩa rộng · Theo nghĩa hẹp · Theo nghĩa hẹp hơn · Theo phương thức sử dụng công cụ sinh hoạt"
        },
        {
            "id": 181,
            "text": "Đảng Cộng sản Việt Nam trở thành Đảng cầm quyền ở Việt Nam từ thời gian nào?",
            "options": [
                "Ngày 03/02/1930.",
                "Ngày 30/04/1975.",
                "Ngày 24/02/1930.",
                "Ngày 06/01/1946."
            ],
            "answer": 3,
            "explanation": "Ngày 06/01/1946.",
            "keywords": "Q: Đảng Cộng sản Việt Nam trở thành Đảng | A: Ngày 06/01/1946"
        },
        {
            "id": 182,
            "text": "Theo Hồ Chí Minh độc lập, tự do là:",
            "options": [
                "Quyền thiêng liêng, bất khả xâm phạm của tất cả các dân tộc.",
                "Quyền tự quyết của tất cả các dân tộc trên thế giới.",
                "Quyền thiêng liêng của tất cả các dân tộc trên thế giới.",
                "Quyền bất khả xâm phạm của tất cả các dân tộc trên thế giới."
            ],
            "answer": 0,
            "explanation": "Quyền thiêng liêng, bất khả xâm phạm của tất cả các dân tộc.",
            "keywords": "Q: Theo Hồ Chí Minh độc lập, tự do | A: Quyền thiêng liêng, bất khả xâm phạm · của tất cả các dân tộc"
        },
        {
            "id": 183,
            "text": "Theo Hồ Chí Minh, thực chất của giải phóng giai cấp là:",
            "options": [
                "Tiêu diệt cá nhân những con người thuộc giai cấp bóc lột.",
                "Xóa bỏ giai cấp bóc lột với tư cách là giai cấp thống trị xã hội.",
                "Thay thế giai cấp thống trị này bằng giai cấp thống trị khác.",
                "Giải phóng giai cấp vô sản trên toàn thế giới."
            ],
            "answer": 1,
            "explanation": "Xóa bỏ giai cấp bóc lột với tư cách là giai cấp thống trị xã hội.",
            "keywords": "Q: Theo Hồ Chí Minh, thực chất của giải | A: Xóa bỏ giai cấp bóc lột với tư · cách là giai cấp thống trị xã hội"
        },
        {
            "id": 184,
            "text": "Cống hiến lý luận lớn đầu tiên của Hồ Chí Minh là:",
            "options": [
                "Về cách mạng ruộng đất.",
                "Về cách mạng dân chủ.",
                "Về cách mạng giải phóng dân tộc.",
                "Về cách mạng XHCN."
            ],
            "answer": 2,
            "explanation": "Về cách mạng giải phóng dân tộc.",
            "keywords": "Q: Cống hiến lý luận lớn đầu tiên của | A: Về cách mạng giải phóng dân tộc"
        },
        {
            "id": 185,
            "text": "Quan niệm thiện, ác được hình thành từ đâu?",
            "options": [
                "Từ những quan hệ kinh tế, xã hội, giai cấp con người.",
                "Từ quan hệ kinh tế, xã hội.",
                "Từ giai cấp con người.",
                "Từ quan hệ kinh tế."
            ],
            "answer": 0,
            "explanation": "Từ những quan hệ kinh tế, xã hội, giai cấp con người.",
            "keywords": "Q: Quan niệm thiện, ác được hình thành từ | A: Từ những quan hệ kinh tế · xã hội · giai cấp con người"
        },
        {
            "id": 186,
            "text": "Theo Hồ Chí Minh, lực lượng làm nền tảng cho khối đại đoàn kết dân tộc là gì?",
            "options": [
                "Công nhân, nông dân, lao động trí óc.",
                "Giai cấp công nhân, giai cấp vô sản.",
                "Công nhân, nông dân, trí thức cao.",
                "Học trò, nhà buôn, tư sản nhân dân."
            ],
            "answer": 0,
            "explanation": "Công nhân, nông dân, lao động trí óc.",
            "keywords": "Q: Theo Hồ Chí Minh, lực lượng làm nền | A: Công nhân · nông dân · lao động trí óc"
        },
        {
            "id": 187,
            "text": "“Mọi việc thành hay bại, chủ chốt là do cán bộ có thấm nhuần đạo đức cách mạng, hay là không”, câu nói của Hồ Chí Minh viết trong thời gian nào?",
            "options": [
                "Năm 1955.",
                "Năm 1969.",
                "Năm 1947.",
                "Năm 1958."
            ],
            "answer": 0,
            "explanation": "Năm 1955.",
            "keywords": "Q: “Mọi việc thành hay bại, chủ chốt là | A: Năm 1955"
        },
        {
            "id": 188,
            "text": "Báo Le Paria (Người Cùng khổ) do Nguyễn Ái Quốc đồng sáng lập, ra số đầu tiên vào ngày nào?",
            "options": [
                "30/12/1920.",
                "16/08/1923.",
                "10/05/1921.",
                "01/04/1922."
            ],
            "answer": 3,
            "explanation": "01/04/1922.",
            "keywords": "Q: Báo Le Paria (Người Cùng khổ) do Nguyễn | A: 01/04/1922"
        },
        {
            "id": 189,
            "text": "Theo Hồ Chí Minh, nội dung tiếp thu văn hoá nhân loại là:",
            "options": [
                "Toàn diện, có hệ thống, tất cả các mặt, tất cả các khía cạnh.",
                "Chắt lọc tinh hoa văn hoá nhân loại, bài trừ cái cũ, tiếp thu cái mới.",
                "Toàn diện gồm Đông, Tây, kim, cổ, tất cả các mặt, các khía cạnh.",
                "Toàn diện, có chọn lọc, tất cả các mặt, tất cả các khía cạnh."
            ],
            "answer": 2,
            "explanation": "Toàn diện gồm Đông, Tây, kim, cổ, tất cả các mặt, các khía cạnh.",
            "keywords": "Q: nhân vật Toàn diện gồm Đông, Tây, kim, | A: Toàn diện gồm Đông, Tây, kim, cổ, · tất cả các mặt, các khía cạnh"
        },
        {
            "id": 190,
            "text": "“Ỷ Pháp cầu tiến bộ chẳng khác nào xin giặc rủ lòng thương” là câu Nguyễn Ái Quốc nhận xét về chủ trương cứu nước của ai?",
            "options": [
                "Phan Bội Châu.",
                "Phan Chu Trinh.",
                "Hoàng Hoa Thám.",
                "Nguyễn Thái Học."
            ],
            "answer": 1,
            "explanation": "Phan Chu Trinh.",
            "keywords": "Q: “Ỷ Pháp cầu tiến bộ chẳng khác nào | A: Phan Chu Trinh"
        },
        {
            "id": 191,
            "text": "Chọn đáp án đúng theo tư tưởng Hồ Chí Minh về lý luận và thực tiễn:",
            "options": [
                "Lý luận là sự tổng kết thực tiễn, được phản ánh vào trong bộ não của con người.",
                "Thực tiễn và lý luận luôn đi với nhau, nếu lý luận và thực tiễn không giống với thì phải điều chỉnh thực tiễn trước.",
                "Thực tiễn là sự tổng kết lý thuyết, được phản ánh thành lý luận vào trong bộ não của con người.",
                "Thực tiễn không có lý luận như nhắm mắt mà đi, lý luận không đem ra thực hành thì giống như cái hòm đựng đầy sách."
            ],
            "answer": 3,
            "explanation": "Thực tiễn không có lý luận như nhắm mắt mà đi, lý luận không đem ra thực hành thì giống như cái hòm đựng đầy sách.",
            "keywords": "Q: theo tư tưởng Hồ Chí Minh về lý | A: Thực tiễn không có lý luận như nhắm · không đem ra thực hành thì giống như"
        },
        {
            "id": 192,
            "text": "Theo Hồ Chí Minh, chủ thể của khối đại đoàn kết dân tộc là gì?",
            "options": [
                "Toàn bộ những con người Việt Nam cụ thể sinh sống tại trong nước.",
                "Toàn bộ những con người Việt Nam sinh sống trong nước và nước ngoài.",
                "Con người Việt Nam cụ thể và tập hợp đông đảo quần chúng nhân dân.",
                "Toàn bộ những con người Việt Nam cụ thể sinh sống tại nước ngoài."
            ],
            "answer": 3,
            "explanation": "Toàn bộ những con người Việt Nam cụ thể sinh sống tại nước ngoài.",
            "keywords": "Q: Theo Hồ Chí Minh, chủ thể của khối | A: Toàn bộ những con người Việt Nam · cụ thể sinh sống tại nước ngoài"
        },
        {
            "id": 193,
            "text": "Nguyễn Ái Quốc đọc “Sơ thảo lần thứ nhất vấn đề dân tộc và thuộc địa” vào thời gian nào? Ở đâu?",
            "options": [
                "Tháng 07/1920 tại Moscow.",
                "Tháng 07/1920 tại London.",
                "Tháng 07/1920 tại Paris.",
                "Tháng 02/1917 tại New York."
            ],
            "answer": 2,
            "explanation": "Tháng 07/1920 tại Paris.",
            "keywords": "Q: Nguyễn Ái Quốc đọc “Sơ thảo lần thứ | A: Tháng 07/1920 tại Paris"
        },
        {
            "id": 194,
            "text": "Chức năng điều chỉnh xã hội tương ứng với đặc trưng nào của văn hóa?",
            "options": [
                "Tính lịch sử.",
                "Tính hệ thống.",
                "Tính giá trị.",
                "Tính nhân sinh."
            ],
            "answer": 2,
            "explanation": "Tính giá trị.",
            "keywords": "Q: Chức năng điều chỉnh xã hội tương ứng | A: Tính giá trị"
        },
        {
            "id": 195,
            "text": "Tư tưởng Hồ Chí Minh về Đảng Cộng sản được hình thành trên cơ sở nào?",
            "options": [
                "Lý luận của chủ nghĩa Mác – Lênin.",
                "Lý luận khoa học và thực tiễn cách mạng.",
                "Thực tiễn cách mạng đấu tranh trong nước.",
                "Thực tiễn cách mạng đấu tranh thế giới."
            ],
            "answer": 0,
            "explanation": "Lý luận của chủ nghĩa Mác – Lênin.",
            "keywords": "Q: Tư tưởng Hồ Chí Minh về Đảng Cộng | A: Lý luận của chủ nghĩa Mác · Lênin"
        },
        {
            "id": 196,
            "text": "Chọn đáp đúng nhất theo Hồ Chí Minh. \"Cần\" nghĩa là:",
            "options": [
                "Cần cù, chăm chỉ, ham học hỏi.",
                "Chăm chỉ, siêng năng, nhiệt tình công việc, ham học hỏi.",
                "Cần cù, chăm chỉ, chăm học, chăm làm.",
                "Cần cù, chăm chỉ, năng động, sáng tạo, làm việc có kế hoạch."
            ],
            "answer": 3,
            "explanation": "Cần cù, chăm chỉ, năng động, sáng tạo, làm việc có kế hoạch.",
            "keywords": "Q: Chọn đáp đúng nhất theo Hồ Chí Minh. | A: Cần cù, chăm chỉ, năng động, sáng · tạo, làm việc có kế hoạch"
        },
        {
            "id": 197,
            "text": "Chọn đáp án KHÔNG đúng. Nhà nước do dân theo tư tưởng Hồ Chí Minh là:",
            "options": [
                "Đại biểu của nhà nước do dân lựa chọn, phải liên hệ chặt chẽ với dân.",
                "Dân có quyền làm những gì mà pháp luật không cấm và đạo đức cho phép.",
                "Dân ủng hộ, giúp đỡ, đóng thuế để nhà nước chi tiêu, hoạt động.",
                "Dân kiểm soát, giám sát, bãi miễn nếu đại biểu không làm tròn sự ủy thác của dân."
            ],
            "answer": 1,
            "explanation": "Dân có quyền làm những gì mà pháp luật không cấm và đạo đức cho phép.",
            "keywords": "Q: KHÔNG đúng - Nhà nước do dân theo | A: Dân có quyền làm những gì mà pháp · luật không cấm và đạo đức cho phép"
        },
        {
            "id": 198,
            "text": "Khi học trường Quốc tế Lênin, Hồ Chí Minh đã lấy bí danh là gì?",
            "options": [
                "Victor Lebon.",
                "Polopxki.",
                "Lin.",
                "Nilopxki."
            ],
            "answer": 2,
            "explanation": "Lin.",
            "keywords": "Q: Khi học trường Quốc tế Lênin, Hồ Chí | A: Lin"
        },
        {
            "id": 199,
            "text": "“Công nông là gốc của cách mệnh, còn học trò, nhà buôn nhỏ, điền chủ nhỏ là bầu bạn cách mệnh của công nông” được Nguyễn Ái Quốc đưa ra để xác định:",
            "options": [
                "Phương pháp cách mạng.",
                "Vai trò của đoàn kết.",
                "Nhiệm vụ của cách mạng.",
                "Lực lượng cách mạng."
            ],
            "answer": 2,
            "explanation": "Nhiệm vụ của cách mạng.",
            "keywords": "Q: “Công nông là gốc của cách mệnh, còn | A: Nhiệm vụ của cách mạng"
        },
        {
            "id": 200,
            "text": "\"Muốn người ta giúp cho thì trước hết mình phải tự giúp lấy mình đã\". Luận điểm trên được trích trong tác phẩm nào của Bác?",
            "options": [
                "Đường Kách mệnh.",
                "Bản án chế độ thực dân Pháp.",
                "Chánh cương vắn tắt của Đảng.",
                "Tuyên ngôn độc lập."
            ],
            "answer": 0,
            "explanation": "Đường Kách mệnh.",
            "keywords": "Q: Muốn người ta giúp cho thì trước hế | A: Đường Kách mệnh"
        },
        {
            "id": 201,
            "text": "Trong tư tưởng Lão giáo khuyên con người cần phải có đầy đủ tri thức. Người cần có đầy đủ tri thức là ai?",
            "options": [
                "Toàn bộ người dân.",
                "Người thuộc tầng lớp thượng lưu.",
                "Người thuộc tầng lớp cai trị.",
                "Người thuộc tầng lớp trí thức giả."
            ],
            "answer": 2,
            "explanation": "Người thuộc tầng lớp cai trị.",
            "keywords": "Q: Trong tư tưởng Lão giáo khuyên con người | A: Người thuộc tầng lớp cai trị"
        },
        {
            "id": 202,
            "text": "Chọn đáp án KHÔNG đúng. Mặt trận dân tộc thống nhất được hợp nhất từ các tổ chức:",
            "options": [
                "Mặt trận Tổ quốc Việt Nam.",
                "Liên minh các lực lượng Dân tộc Dân chủ và Hòa bình Việt Nam.",
                "Mặt trận Dân tộc Giải phóng miền Nam Việt Nam.",
                "Mặt trận Việt Nam Độc lập Đồng minh."
            ],
            "answer": 3,
            "explanation": "Mặt trận Việt Nam Độc lập Đồng minh.",
            "keywords": "Q: KHÔNG đúng - Mặt trận dân tộc thống | A: Mặt trận Việt Nam Độc lập Đồng minh"
        },
        {
            "id": 203,
            "text": "Nhà Nguyễn ký hiệp ước với Pháp biến Việt Nam chính thức thành thuộc địa vào năm bao nhiêu?",
            "options": [
                "Hiệp ước Patonot năm 1884.",
                "Hiệp ước Unclos năm 1992.",
                "Hiệp ước Patonot năm 1883.",
                "Hiệp ước thuộc địa năm 1884."
            ],
            "answer": 0,
            "explanation": "Hiệp ước Patonot năm 1884.",
            "keywords": "Q: Nhà Nguyễn ký hiệp ước với Pháp biến | A: Hiệp ước Patonot năm 1884"
        },
        {
            "id": 204,
            "text": "Chọn luận điểm đúng với tư tưởng Hồ Chí Minh:",
            "options": [
                "Muốn tiến lên CNXH thì phải phát triển văn hóa và kinh tế.",
                "Muốn tiến lên CNXH thì phải phát triển văn hóa.",
                "Muốn tiến lên CNXH thì phải phát triển kinh tế và văn hóa.",
                "Muốn tiến lên CNXH thì phải phát triển kinh tế."
            ],
            "answer": 2,
            "explanation": "Muốn tiến lên CNXH thì phải phát triển kinh tế và văn hóa.",
            "keywords": "Q: Chọn luận điểm đúng với tư tưởng Hồ | A: Muốn tiến lên CNXH thì phải phát · triển kinh tế và văn hóa"
        },
        {
            "id": 205,
            "text": "Chọn đáp án đúng nhất. Con người theo quan niệm của Hồ Chí Minh là:",
            "options": [
                "Vốn quý nhất, nhân tố quan trọng đến thành công của cách mạng.",
                "Nguồn vốn vô giá của xã hội, là động lực của cách mạng.",
                "Vốn quý nhất, nhân tố quyết định thành công của cách mạng.",
                "Vốn quý của cách mạng, là nguồn vốn quý giá của xã hội."
            ],
            "answer": 0,
            "explanation": "Vốn quý nhất, nhân tố quan trọng đến thành công của cách mạng.",
            "keywords": "Q: Con người theo quan niệm của Hồ Chí | A: Vốn quý nhất, nhân tố quan trọng · đến thành công của cách mạng"
        },
        {
            "id": 206,
            "text": "Theo Hồ Chí Minh, đoàn kết quốc tế có vai trò như thế nào đối với thắng lợi của cách mạng?",
            "options": [
                "Là vấn đề chiến lược quyết định sự thắng lợi.",
                "Là vấn đề mang tính quyết định.",
                "Là vấn đề vừa quan trọng vừa quyết định.",
                "Là vấn đề mang tính quan trọng."
            ],
            "answer": 1,
            "explanation": "Là vấn đề mang tính quyết định.",
            "keywords": "Q: Theo Hồ Chí Minh, đoàn kết quốc tế | A: Là vấn đề mang tính quyết định"
        },
        {
            "id": 207,
            "text": "Nguyễn Tất Thành tham dự Đại hội lần thứ 18 của Đảng Xã hội Pháp tại Tours (từ 25 đến 30/12/1920) với tư cách là:",
            "options": [
                "Đại biểu duy nhất của các nước thuộc địa Đông Dương.",
                "Đại biểu đầu tiên là người Việt Nam tham dự một Đại hội.",
                "Đại biểu duy nhất của các nước thuộc địa châu Á.",
                "Đại biểu duy nhất cho Đảng xã hội Pháp tại Paris."
            ],
            "answer": 0,
            "explanation": "Đại biểu duy nhất của các nước thuộc địa Đông Dương.",
            "keywords": "Q: Nguyễn Tất Thành tham dự Đại hội lần | A: Đại biểu duy nhất của các · nước thuộc địa Đông Dương"
        },
        {
            "id": 208,
            "text": "Trong tư tưởng Hồ Chí Minh, đại đoàn kết dân tộc là:",
            "options": [
                "Đoàn kết giai cấp công nhân – nông dân – lao động trí óc.",
                "Đoàn kết toàn bộ các tộc người trên một lãnh thổ.",
                "Đoàn kết công – nông và các tầng lớp khác trong xã hội.",
                "Đoàn kết giai cấp công nhân – nông dân."
            ],
            "answer": 2,
            "explanation": "Đoàn kết công – nông và các tầng lớp khác trong xã hội.",
            "keywords": "Q: Trong tư tưởng Hồ Chí Minh, đại đoàn | A: Đoàn kết công – nông và các · tầng lớp khác trong xã hội"
        },
        {
            "id": 209,
            "text": "Điền vào chỗ trống đúng theo Hồ Chí Minh, “Văn hóa phải […] cho quốc dân đi”.",
            "options": [
                "Dẫn đường.",
                "Dẫn lối.",
                "Chỉ đường.",
                "Soi đường."
            ],
            "answer": 3,
            "explanation": "Soi đường.",
            "keywords": "Q: điền khẩu theo Bác | A: Soi đường"
        },
        {
            "id": 210,
            "text": "Theo giáo trình Tư tưởng Hồ Chí Minh, nguyên tắc phân phối chủ yếu trong CNXH là gì?",
            "options": [
                "Làm theo năng lực, hưởng theo nhu cầu.",
                "Làm theo năng lực, hưởng theo đóng góp.",
                "Làm theo năng lực, hưởng theo lao động.",
                "Phân phối bình quân cho tất cả mọi người."
            ],
            "answer": 2,
            "explanation": "Làm theo năng lực, hưởng theo lao động.",
            "keywords": "Q: Theo giáo trình Tư tưởng Hồ Chí Minh, | A: Làm theo năng lực · hưởng theo lao động"
        },
        {
            "id": 211,
            "text": "Trong tư tưởng Hồ Chí Minh, bạo lực cách mạng luôn thống nhất với:",
            "options": [
                "Tư tưởng đấu tranh ngoại giao.",
                "Tư tưởng cách mạng không ngừng.",
                "Tư tưởng đấu tranh hoà bình.",
                "Tư tưởng nhân đạo hòa bình."
            ],
            "answer": 3,
            "explanation": "Tư tưởng nhân đạo hòa bình.",
            "keywords": "Q: Trong tư tưởng Hồ Chí Minh, bạo lực | A: Tư tưởng nhân đạo hòa bình"
        },
        {
            "id": 212,
            "text": "Cách mạng giải phóng dân tộc trong thời đại mới phải do Đảng của ai lãnh đạo?",
            "options": [
                "Giai cấp vô sản bần cùng.",
                "Tầng lớp trí thức.",
                "Giai cấp công nhân.",
                "Giai cấp nông dân."
            ],
            "answer": 2,
            "explanation": "Giai cấp công nhân.",
            "keywords": "Q: nhân vật Giai cấp công nhân | A: Giai cấp công nhân"
        },
        {
            "id": 213,
            "text": "Theo Hồ Chí Minh, nguyên tắc cơ bản nhất trong đoàn kết quốc tế là gì?",
            "options": [
                "Đoàn kết trên cơ sở không dùng vũ lực và đe doạ dùng vũ lực.",
                "Đoàn kết trên cơ sở thống nhất mục tiêu và lợi ích, có lý, có tình.",
                "Đoàn kết trên cơ sở hợp tác đa phương và các bên cùng có lợi.",
                "Đoàn kết trên cơ sở đảm bảo sự bình đẳng quốc gia; có đi, có lại."
            ],
            "answer": 1,
            "explanation": "Đoàn kết trên cơ sở thống nhất mục tiêu và lợi ích, có lý, có tình.",
            "keywords": "Q: Theo Hồ Chí Minh, nguyên tắc cơ bản | A: Đoàn kết trên cơ sở thống nhất mục · tiêu và lợi ích, có lý, có tình"
        },
        {
            "id": 214,
            "text": "Nhận định: \"Đạo đức là pháp luật tối đa, pháp luật là đạo đức tối thiểu\", muốn đề cập đến điều gì?",
            "options": [
                "Phạm vi điều chỉnh của pháp luật rộng hơn.",
                "Tính quyết định của đạo đức đối với pháp luật.",
                "Phạm vi điều chỉnh của đạo đức rộng hơn.",
                "Tính phụ thuộc của đạo đức đối với pháp luật."
            ],
            "answer": 2,
            "explanation": "Phạm vi điều chỉnh của đạo đức rộng hơn.",
            "keywords": "Q: Nhận định: \"Đạo đức là pháp luật tối | A: Phạm vi điều chỉnh của · đạo đức rộng hơn"
        },
        {
            "id": 215,
            "text": "Hồ Chí Minh được UNESCO ra quyết định công nhận vào thời gian nào?",
            "options": [
                "Ngày 30/4/1987 đến 01/5/1987.",
                "Ngày 20/11/1987 đến 22/12/1987.",
                "Ngày 19/5/1987 đến 20/6/1987.",
                "Ngày 20/10/1987 đến 20/11/1987."
            ],
            "answer": 3,
            "explanation": "Ngày 20/10/1987 đến 20/11/1987.",
            "keywords": "Q: Hồ Chí Minh được UNESCO ra quyết định | A: Ngày 20/10/1987 đến 20/11/1987"
        },
        {
            "id": 216,
            "text": "“Đại đoàn kết dân tộc là đường lối chiến lược của cách mạng Việt Nam, là động lực và nguồn lực to lớn xây dựng và bảo vệ Tổ quốc”, được trích trong văn kiện:",
            "options": [
                "Đại hội Đảng lần thứ IX.",
                "Đại hội Đảng lần thứ XII.",
                "Đại hội Đảng lần thứ X.",
                "Đại hội Đảng lần thứ XI."
            ],
            "answer": 1,
            "explanation": "Đại hội Đảng lần thứ XII.",
            "keywords": "Q: “Đại đoàn kết dân tộc là đường lối | A: Đại hội Đảng lần thứ XII"
        },
        {
            "id": 217,
            "text": "Trong tư tưởng Hồ Chí Minh, giải phóng con người trước hết là:",
            "options": [
                "Giải phóng giai cấp công nhân.",
                "Giải phóng giai cấp vô sản.",
                "Giải phóng giai cấp nông dân.",
                "Giải phóng quần chúng lao động."
            ],
            "answer": 3,
            "explanation": "Giải phóng quần chúng lao động.",
            "keywords": "Q: Trong tư tưởng Hồ Chí Minh, giải phóng | A: Giải phóng quần chúng lao động"
        },
        {
            "id": 218,
            "text": "Người thầy giáo đầu tiên của Nguyễn Sinh Cung là ai?",
            "options": [
                "Vương Thúc Quý.",
                "Nguyễn Sinh Sắc.",
                "Lê Văn Miến.",
                "Phan Bội Châu."
            ],
            "answer": 1,
            "explanation": "Nguyễn Sinh Sắc.",
            "keywords": "Q: địa điểm Nguyễn Sinh Sắc | A: Nguyễn Sinh Sắc"
        },
        {
            "id": 219,
            "text": "Nguyễn Tất Thành dạy học ở trường Dục Thanh trong khoảng thời gian từ:",
            "options": [
                "Từ 09/1908 đến 09/1909.",
                "Từ 09/1910 đến 02/1911.",
                "Từ 11/1908 đến 02/1909.",
                "Từ 09/1909 đến 02/1910."
            ],
            "answer": 1,
            "explanation": "Từ 09/1910 đến 02/1911.",
            "keywords": "Q: Nguyễn Tất Thành dạy học ở trường Dục | A: Từ 09/1910 đến 02/1911"
        },
        {
            "id": 220,
            "text": "Theo Hồ Chí Minh, cách mạng giải phóng dân tộc muốn giành được thắng lợi cần phải:",
            "options": [
                "Dựa vào sự thắng lợi của cách mạng vô sản ở chính quốc.",
                "Được tiến hành chủ động và sáng tạo.",
                "Dựa vào sự thắng lợi của cách mạng ở các nước thuộc địa khác.",
                "Dựa vào sự giúp đỡ của các nước xã hội chủ nghĩa."
            ],
            "answer": 1,
            "explanation": "Được tiến hành chủ động và sáng tạo.",
            "keywords": "Q: Theo Hồ Chí Minh, cách mạng giải phóng | A: Được tiến hành chủ động · sáng tạo"
        },
        {
            "id": 221,
            "text": "Theo Hồ Chí Minh, đặc trưng kinh tế nổi bật nhất của CNXH là:",
            "options": [
                "Nhân dân lao động làm chủ",
                "Sở hữu xã hội về tư liệu sản xuất.",
                "Khoa học - Kỹ thuật phát triển.",
                "Cơ cấu Công - Nông nghiệp hợp lý."
            ],
            "answer": 1,
            "explanation": "Sở hữu xã hội về tư liệu sản xuất.",
            "keywords": "Q: Theo Hồ Chí Minh, đặc trưng kinh tế | A: Sở hữu xã hội về · tư liệu sản xuất"
        },
        {
            "id": 222,
            "text": "Luận điểm sáng tạo của Hồ Chí minh về con đường cách mạng Việt Nam được hình thành về cơ bản vào năm nào?",
            "options": [
                "Năm 1920.",
                "Năm 1930.",
                "Năm 1941.",
                "Năm 1925."
            ],
            "answer": 1,
            "explanation": "Năm 1930.",
            "keywords": "Q: Luận điểm sáng tạo của Hồ Chí minh | A: Năm 1930"
        },
        {
            "id": 223,
            "text": "Theo tư tưởng Hồ Chí Minh, tính đại chúng của nền văn hóa được thể hiện ở chỗ:",
            "options": [
                "Nền văn hóa ấy phải phục vụ cho nhân dân và do nhân dân xây dựng nên.",
                "Đó là một nền văn hóa rộng lớn, phổ cập đến tất cả mọi người trong xã hội.",
                "Đó là một nền văn hóa đa dạng cùng với sự đa dạng của các dân tộc anh em.",
                "Nền văn hóa ấy vượt ra khỏi biên giới quốc gia, vươn tầm khu vực và thế giới."
            ],
            "answer": 0,
            "explanation": "Nền văn hóa ấy phải phục vụ cho nhân dân và do nhân dân xây dựng nên.",
            "keywords": "Q: tính đại chúng của nền văn hóa được | A: Nền văn hóa ấy phải phục vụ cho · dân và do nhân dân xây dựng nên"
        },
        {
            "id": 224,
            "text": "Theo Hồ Chí Minh, trong quan hệ với quần chúng nhân dân, Đảng cần làm gì?",
            "options": [
                "Luôn luôn lắng nghe quần chúng.",
                "Lắng nghe và thực hiện theo yêu cầu của quần chúng.",
                "Không theo đuôi quần chúng.",
                "Thực hiện theo yêu cầu của nhân dân."
            ],
            "answer": 2,
            "explanation": "Không theo đuôi quần chúng.",
            "keywords": "Q: Theo Hồ Chí Minh, trong quan hệ với | A: Không theo đuôi quần chúng"
        },
        {
            "id": 225,
            "text": "Theo tư tưởng Hồ Chí Minh, nếu lý luận và thực tiễn không thống nhất với nhau cần phải điều chỉnh một yếu tố thì trước hết phải điều chỉnh yếu tố nào?",
            "options": [
                "Điều chỉnh cả lý luận và thực tiễn.",
                "Điều chỉnh lý luận trước.",
                "Điều chỉnh thực tiễn trước.",
                "Thực hành phải nhắm theo lý luận."
            ],
            "answer": 1,
            "explanation": "Điều chỉnh lý luận trước.",
            "keywords": "Q: Theo tư tưởng Hồ Chí Minh, nếu lý | A: Điều chỉnh lý luận trước"
        },
        {
            "id": 226,
            "text": "Theo Hồ Chí Minh, sử dụng bạo lực cách mạng là để:",
            "options": [
                "Lật đổ chế độ cũ, xây dựng chế độ mới.",
                "Tiêu diệt các lực lượng phản cách mạng, lật đổ chính quyền phản động và tay sai.",
                "Xây dựng và bảo vệ chính quyền; xây dựng chế độ mới.",
                "Giành chính quyền và giữ chính quyền."
            ],
            "answer": 3,
            "explanation": "Giành chính quyền và giữ chính quyền.",
            "keywords": "Q: Theo Hồ Chí Minh, sử dụng bạo lực | A: Giành chính quyền · giữ chính quyền"
        },
        {
            "id": 227,
            "text": "Chủ trương trong quan hệ quốc tế của Việt Nam hiện nay là:",
            "options": [
                "Việt Nam sẵn sàng là bạn, là đối tác tin cậy của các nước trong cộng đồng quốc tế.",
                "Việt Nam sẵn sàng là bạn tin cậy của các nước trong cộng đồng quốc tế.",
                "Việt Nam sẵn sàng là bạn của các nước trong cộng đồng quốc tế.",
                "Việt Nam muốn là bạn, là đối tác của các nước trong cộng đồng quốc tế."
            ],
            "answer": 0,
            "explanation": "Việt Nam sẵn sàng là bạn, là đối tác tin cậy của các nước trong cộng đồng quốc tế.",
            "keywords": "Q: Chủ trương trong quan hệ quốc tế của | A: Việt Nam sẵn sàng là bạn, là đối · cậy của các nước trong cộng đồng quốc"
        },
        {
            "id": 228,
            "text": "Theo Hồ Chí Minh, ưu điểm lớn nhất của chủ nghĩa tam dân của Tôn Trung Sơn đối với nước ta là:",
            "options": [
                "Giúp người dân Việt Nam chống phong kiến.",
                "Đem lại độc lập, tự do cho người dân Việt Nam.",
                "Chính sách phù hợp với điều kiện của nước ta.",
                "Giúp người dân Việt Nam đấu tranh vì tự do."
            ],
            "answer": 2,
            "explanation": "Chính sách phù hợp với điều kiện của nước ta.",
            "keywords": "Q: Theo Hồ Chí Minh, ưu điểm lớn nhất | A: Chính sách phù hợp với · điều kiện của nước ta"
        },
        {
            "id": 229,
            "text": "Chọn đáp án KHÔNG đúng. Độc lập dân tộc trong tư tưởng Hồ Chí Minh phải:",
            "options": [
                "Gắn liền với độc lập của các dân tộc thuộc địa.",
                "Gắn liền với thống nhất và toàn vẹn lãnh thổ.",
                "Gắn liền với tự do, hạnh phúc của nhân dân.",
                "Độc lập thật sự, hoàn toàn và triệt để."
            ],
            "answer": 0,
            "explanation": "Gắn liền với độc lập của các dân tộc thuộc địa.",
            "keywords": "Q: KHÔNG đúng - Độc lập dân tộc trong | A: Gắn liền với độc lập của · các dân tộc thuộc địa"
        },
        {
            "id": 230,
            "text": "Tư tưởng Hồ Chí Minh KHÔNG bắt nguồn từ:",
            "options": [
                "Giá trị truyền thống tốt đẹp của dân tộc Việt Nam.",
                "Giá trị tinh hoa văn hoá của nhân loại.",
                "Giá trị tinh hoa văn hoá của phương Đông.",
                "Yêu cầu của cách mạng giải phóng thuộc địa."
            ],
            "answer": 3,
            "explanation": "Yêu cầu của cách mạng giải phóng thuộc địa.",
            "keywords": "Q: Tư tưởng Hồ Chí Minh KHÔNG bắt nguồn | A: Yêu cầu của cách mạng · giải phóng thuộc địa"
        },
        {
            "id": 231,
            "text": "Văn minh là khái niệm:",
            "options": [
                "Thiên về giá trị tinh thần và chỉ trình độ phát triển.",
                "Thiên về giá trị vật chất - kỹ thuật và chỉ trình độ phát triển.",
                "Thiên về giá trị tinh thần và có bề dày lịch sử.",
                "Thiên về giá trị vật chất và có bề dày lịch sử."
            ],
            "answer": 1,
            "explanation": "Thiên về giá trị vật chất - kỹ thuật và chỉ trình độ phát triển.",
            "keywords": "Q: Văn minh là khái niệm: | A: Thiên về giá trị vật chất - kỹ · thuật và chỉ trình độ phát triển"
        },
        {
            "id": 232,
            "text": "Động lực chủ đạo của sự phát triển đất nước ta hiện nay là gì?",
            "options": [
                "Sự ủng hộ quốc tế.",
                "Đại đoàn kết dân tộc.",
                "Khoa học công nghệ.",
                "Nguồn vốn đầu tư."
            ],
            "answer": 1,
            "explanation": "Đại đoàn kết dân tộc.",
            "keywords": "Q: Động lực chủ đạo của sự phát triển | A: Đại đoàn kết dân tộc"
        },
        {
            "id": 233,
            "text": "“Chúng ta tranh được tự do, độc lập rồi mà dân cứ chết đói, chết rét, thì tự do, độc lập cũng không làm gì” nói lên quan điểm nào của Hồ Chí Minh về độc lập dân tộc?",
            "options": [
                "Độc lập dân tộc phải là nền độc lập thật sự, hoàn toàn và triệt để.",
                "Độc lập dân tộc gắn liền với hòa bình, thống nhất và toàn vẹn lãnh thổ.",
                "Độc lập dân tộc phải gắn liền tự do và hạnh phúc của nhân dân.",
                "Độc lập dân tộc phải gắn liền tự do và tiến lên xây dựng CNXH."
            ],
            "answer": 2,
            "explanation": "Độc lập dân tộc phải gắn liền tự do và hạnh phúc của nhân dân.",
            "keywords": "Q: “Chúng ta tranh được tự do, độc lập | A: Độc lập dân tộc phải gắn liền tự · do và hạnh phúc của nhân dân"
        },
        {
            "id": 234,
            "text": "Điền vào chỗ trống đúng theo Hồ Chí Minh, “Toàn quốc đồng bào hãy đứng dậy […] mà tự giải phóng cho ta”.",
            "options": [
                "Dựa vào sự đoàn kết.",
                "Dựa vào sự giúp đỡ quốc tế.",
                "Đem sức ta.",
                "Dưới sự lãnh đạo của Đảng."
            ],
            "answer": 2,
            "explanation": "Đem sức ta.",
            "keywords": "Q: điền khẩu theo Bác | A: Đem sức ta"
        },
        {
            "id": 235,
            "text": "Theo Hồ Chí Minh, Đảng Cộng sản Việt Nam là sản phẩm của sự kết hợp của 3 yếu tố, là xác định:",
            "options": [
                "Nhiệm vụ lịch sử của Đảng.",
                "Bản chất ra đời của Đảng.",
                "Nguồn gốc ra đời của Đảng.",
                "Tiêu chuẩn ra đời của Đảng."
            ],
            "answer": 2,
            "explanation": "Nguồn gốc ra đời của Đảng.",
            "keywords": "Q: Theo Hồ Chí Minh, Đảng Cộng sản Việt | A: Nguồn gốc ra đời của Đảng"
        },
        {
            "id": 236,
            "text": "Chọn đáp án KHÔNG đúng. Cống hiến của Hồ Chí Minh trong lĩnh vực văn hoá được thể hiện:",
            "options": [
                "Xây dựng con người mới.",
                "Xây dựng nền văn hoá mới Việt Nam.",
                "Sáng tạo văn hoá văn nghệ.",
                "Xác lập hệ thống quan điểm về văn hoá."
            ],
            "answer": 0,
            "explanation": "Xây dựng con người mới.",
            "keywords": "Q: KHÔNG đúng - Cống hiến của Hồ Chí | A: Xây dựng con người mới"
        },
        {
            "id": 237,
            "text": "\"Chiến tranh có thể kéo dài 5 năm, 10 năm, 20 năm hoặc lâu hơn nữa… song nhân dân Việt Nam quyết không sợ, không có gì quí hơn độc lập tự do\". Câu nói được trích trong tác phẩm nào của Hồ Chí Minh?",
            "options": [
                "Lời kêu gọi toàn quốc kháng chiến, ngày 19/12/1946.",
                "Lời kêu gọi, ngày 17/7/1966.",
                "Di chúc, năm 1969.",
                "Thư chúc Tết, năm 1968."
            ],
            "answer": 1,
            "explanation": "Lời kêu gọi, ngày 17/7/1966.",
            "keywords": "Q: Chiến tranh có thể kéo dài 5 năm, | A: Lời kêu gọi, ngày 17/7/1966"
        },
        {
            "id": 238,
            "text": "Theo Hồ Chí Minh, ưu điểm lớn nhất của tôn giáo GiêSu là gì?",
            "options": [
                "Đức hy sinh.",
                "Lòng từ bi bác ái.",
                "Lòng cao thượng.",
                "Lòng nhân ái cao cả."
            ],
            "answer": 3,
            "explanation": "Lòng nhân ái cao cả.",
            "keywords": "Q: Theo Hồ Chí Minh, ưu điểm lớn nhất | A: Lòng nhân ái cao cả"
        },
        {
            "id": 239,
            "text": "Sau khi học trường Quốc tế Lênin, Hồ Chí Minh đã viết thư muốn ngỏ ý cống hiến cho Quốc tế Cộng sản. Lá thư được viết vào thời gian nào?",
            "options": [
                "Tháng 01/1938.",
                "Tháng 12/1939.",
                "Tháng 06/1938.",
                "Tháng 10/1938."
            ],
            "answer": 0,
            "explanation": "Tháng 01/1938.",
            "keywords": "Q: Sau khi học trường Quốc tế Lênin, Hồ | A: Tháng 01/1938"
        },
        {
            "id": 240,
            "text": "Nguyễn Ái Quốc tán thành Quốc tế III, tham gia thành lập Đảng Cộng sản Pháp vào thời gian nào?",
            "options": [
                "Tháng 02 năm 1919.",
                "Tháng 02 năm 1921.",
                "Tháng 12 năm 1919.",
                "Tháng 12 năm 1920."
            ],
            "answer": 3,
            "explanation": "Tháng 12 năm 1920.",
            "keywords": "Q: thành lập Đảng Cộng sản Pháp vào thời | A: Tháng 12 năm 1920"
        },
        {
            "id": 241,
            "text": "Chọn đáp án KHÔNG đúng. Nguyên tắc xây dựng và hoạt động của Mặt trận Dân tộc thống nhất là:",
            "options": [
                "Lấy lợi ích tối cao của giai cấp công nhân, giai cấp vô sản làm mục tiêu phấn đấu.",
                "Đoàn kết lâu dài, chặt chẽ, đoàn kết thực sự, chân thành, thân ái giúp đỡ nhau tiến bộ.",
                "Xây dựng trên nền tảng liên minh công – nông – trí, dưới sự lãnh đạo của Đảng.",
                "Xuất phát từ mục tiêu vì nước, vì dân; hoạt động theo nguyên tắc hiệp thương dân chủ."
            ],
            "answer": 0,
            "explanation": "Lấy lợi ích tối cao của giai cấp công nhân, giai cấp vô sản làm mục tiêu phấn đấu.",
            "keywords": "Q: KHÔNG đúng - Nguyên tắc xây dựng và | A: Lấy lợi ích tối cao của giai cấp · giai cấp vô sản làm mục tiêu phấn"
        },
        {
            "id": 242,
            "text": "Trong môn học tư tưởng Hồ Chí Minh nêu bao nhiêu cơ sở phương pháp luận nghiên cứu?",
            "options": [
                "Bốn phương pháp luận.",
                "Bảy phương pháp luận.",
                "Năm phương pháp luận.",
                "Sáu phương pháp luận."
            ],
            "answer": 3,
            "explanation": "Sáu phương pháp luận.",
            "keywords": "Q: Trong môn học tư tưởng Hồ Chí Minh | A: Sáu phương pháp luận"
        },
        {
            "id": 243,
            "text": "Theo Hồ Chí Minh, nguy cơ lớn nhất của một đảng cầm quyền là gì?",
            "options": [
                "Diễn biến hòa bình của các thế lực thù địch bên trong và bên ngoài.",
                "Tụt hậu về nhận thức sự thay đổi trong thời đại khoa học, công nghệ.",
                "Đi lệch định hướng, mục tiêu đã đề ra khi xây dựng chủ nghĩa xã hội.",
                "Sai lầm về đường lối và sự suy thoái đạo đức của cán bộ, đảng viên."
            ],
            "answer": 3,
            "explanation": "Sai lầm về đường lối và sự suy thoái đạo đức của cán bộ, đảng viên.",
            "keywords": "Q: Theo Hồ Chí Minh, nguy cơ lớn nhất | A: Sai lầm về đường lối và sự suy · thoái đạo đức của cán bộ, đảng viên"
        },
        {
            "id": 244,
            "text": "Chọn đáp án không đúng, tư tưởng Hồ Chí Minh đối với sự phát triển cách mạng thế giới:",
            "options": [
                "Phản ánh khát vọng thời đại.",
                "Tìm ra các giải pháp đấu tranh giải phóng các nước thuộc địa.",
                "Cổ vũ các dân tộc đấu tranh vì những mục tiêu cao cả.",
                "Giải phóng các nước thuộc địa."
            ],
            "answer": 3,
            "explanation": "Giải phóng các nước thuộc địa.",
            "keywords": "Q: KHÔNG đúng - , tư tưởng Hồ Chí | A: Giải phóng các nước thuộc địa"
        },
        {
            "id": 245,
            "text": "Theo Ph. Ănghen, để có sự bình đẳng, đoàn kết thật sự, chặt chẽ và lâu dài giữa các dân tộc; cần phải làm gì?",
            "options": [
                "Phải đoàn kết với các nước vô sản, đoàn kết với Quốc tế Cộng sản",
                "Phải tự vươn lên thành giai cấp dân tộc, phải tự mình trở thành dân tộc.",
                "Phải giành lấy chính quyền.",
                "Xóa bỏ nguồn gốc sinh ra bất bình đẳng, áp bức dân tộc."
            ],
            "answer": 3,
            "explanation": "Xóa bỏ nguồn gốc sinh ra bất bình đẳng, áp bức dân tộc.",
            "keywords": "Q: nhân vật Xóa bỏ nguồn gốc sinh ra | A: Xóa bỏ nguồn gốc sinh ra bất · bình đẳng, áp bức dân tộc"
        },
        {
            "id": 246,
            "text": "Chọn đáp án đúng nhất. Lý do chính của việc Nguyễn Ái Quốc đến Pháp là gì?",
            "options": [
                "Muốn dược thấy tư tưởng nhân quyền và dân quyền được thực hiện như thế nào tại Pháp và tại Việt Nam.",
                "Vì mong muốn một nền giáo dục tốt hơn ở Pháp và không nhìn thấy được cơ hội tài chính ở Việt Nam vào thời kì đó.",
                "Để vận động nhân dân Pháp ủng hộ cách mạng Việt Nam.",
                "Vì nguồn gốc mọi đau khổ của nhân dân Việt Nam là ở tại “chính quốc”."
            ],
            "answer": 0,
            "explanation": "Muốn dược thấy tư tưởng nhân quyền và dân quyền được thực hiện như thế nào tại Pháp và tại Việt Nam.",
            "keywords": "Q: Lý do chính của việc Nguyễn Ái Quốc | A: Muốn dược thấy tư tưởng nhân quyền và · thực hiện như thế nào tại Pháp và"
        },
        {
            "id": 247,
            "text": "Theo Hồ Chí Minh, vai trò lãnh đạo của Đảng đối với Nhà nước được quy định bởi:",
            "options": [
                "Hiến pháp.",
                "Ý chí giai cấp công nhân.",
                "Mong muốn nhân dân.",
                "Điều lệ Đảng."
            ],
            "answer": 0,
            "explanation": "Hiến pháp.",
            "keywords": "Q: Theo Hồ Chí Minh, vai trò lãnh đạo | A: Hiến pháp"
        },
        {
            "id": 248,
            "text": "Điền vào chỗ trống đúng theo Hồ Chí Minh, “Nông dân giàu thì nước ta giàu, […] thịnh thì nước ta thịnh”.",
            "options": [
                "Công nghiệp.",
                "Du lịch.",
                "Nông nghiệp.",
                "Thương nghiệp."
            ],
            "answer": 2,
            "explanation": "Nông nghiệp.",
            "keywords": "Q: điền khẩu theo Bác | A: Nông nghiệp"
        },
        {
            "id": 249,
            "text": "\"Đảng viên đi trước, làng nước theo sau\", câu nói trên của Hồ Chí Minh được trích trong tác phẩm nào?",
            "options": [
                "Nâng cao đạo đức cách mạng, quét sạch chủ nghĩa cá nhân.",
                "Đạo đức cách mạng.",
                "Đường kách mệnh.",
                "Sửa đổi lối làm việc."
            ],
            "answer": 0,
            "explanation": "Nâng cao đạo đức cách mạng, quét sạch chủ nghĩa cá nhân.",
            "keywords": "Q: Đảng viên đi trước, làng nước theo - | A: Nâng cao đạo đức cách mạng, · quét sạch chủ nghĩa cá nhân"
        },
        {
            "id": 250,
            "text": "\"Cũng như ngọc càng mài càng sáng, vàng càng luyện càng trong\". Luận điểm này được Hồ Chí Minh viết vào thời gian nào?",
            "options": [
                "17/12/1958.",
                "17/12/1967.",
                "17/12/1959.",
                "17/12/1969."
            ],
            "answer": 0,
            "explanation": "17/12/1958.",
            "keywords": "Q: Luận điểm HCM viết 17/12/1958 | A: 17/12/1958"
        },
        {
            "id": 251,
            "text": "Theo Hồ Chí Minh, mỗi bước phát triển của kinh tế, chính trị, xã hội đều có:",
            "options": [
                "Sự soi đường của văn hoá.",
                "Sự khai sáng của văn hoá.",
                "Sự soi sáng của văn hoá.",
                "Sự đóng góp của văn hoá."
            ],
            "answer": 1,
            "explanation": "Sự khai sáng của văn hoá.",
            "keywords": "Q: Theo Hồ Chí Minh, mỗi bước phát triển | A: Sự khai sáng của văn hoá"
        },
        {
            "id": 252,
            "text": "Theo Hồ Chí Minh, để thực hiện đại đoàn kết thì đối với những đồng bào lạc lối lầm đường, ta phải:",
            "options": [
                "Có lòng khoan dung đối với họ.",
                "Kiên quyết loại ra khối đại đoàn kết.",
                "Giáo dục để họ biết sửa chữa sai lầm.",
                "Lấy tình thân ái mà cảm hoá họ."
            ],
            "answer": 3,
            "explanation": "Lấy tình thân ái mà cảm hoá họ.",
            "keywords": "Q: Theo Hồ Chí Minh, để thực hiện đại | A: Lấy tình thân ái mà cảm hoá họ"
        },
        {
            "id": 253,
            "text": "Chọn đáp án KHÔNG đúng. Trong quá trình lãnh đạo nhà nước, Hồ Chí Minh nhắc nhở cần phải đề phòng và khắc phục những tiêu cực:",
            "options": [
                "Kiêu ngạo, đặc quyền, đặc lợi.",
                "Bệnh chạy theo thành tích.",
                "Tư túng, chia rẽ, bè phái.",
                "Tham ô, lãng phí, quan liêu."
            ],
            "answer": 1,
            "explanation": "Bệnh chạy theo thành tích.",
            "keywords": "Q: KHÔNG đúng - Chọn đáp án KHÔNG đúng. | A: Bệnh chạy theo thành tích"
        },
        {
            "id": 254,
            "text": "Chọn đáp án KHÔNG đúng. Giải phóng dân tộc theo tư tưởng Hồ Chí Minh là:",
            "options": [
                "Đánh đổ ách áp bức, thống trị của đế quốc thực dân giành độc lập dân tộc.",
                "Lựa chọn con đường phát triển của dân tộc phù hợp với xu thế của thời đại.",
                "Đánh đổ địa chủ phong kiến đem lại ruộng đất cho nhân dân.",
                "Hình thành nhà nước dân tộc độc lập của dân, do dân, vì dân."
            ],
            "answer": 2,
            "explanation": "Đánh đổ địa chủ phong kiến đem lại ruộng đất cho nhân dân.",
            "keywords": "Q: KHÔNG đúng - Giải phóng dân tộc theo | A: Đánh đổ địa chủ phong kiến đem · lại ruộng đất cho nhân dân"
        },
        {
            "id": 255,
            "text": "Theo luật Việt Nam qui định, công dân có quyền ứng cử vào đại biểu Quốc hội khi:",
            "options": [
                "Đủ 18 tuổi.",
                "Đủ 21 tuổi.",
                "Đủ 19 tuổi.",
                "Đủ 20 tuổi."
            ],
            "answer": 1,
            "explanation": "Đủ 21 tuổi.",
            "keywords": "Q: Theo luật Việt Nam qui định, công dân | A: Đủ 21 tuổi"
        },
        {
            "id": 256,
            "text": "Mục tiêu của tư tưởng Hồ Chí Minh là gì?",
            "options": [
                "Giải phóng giai cấp.",
                "Giải phóng giai cấp, giải phóng con người.",
                "Giải phóng dân tộc thuộc địa.",
                "Giải phóng dân tộc, giải phóng giai cấp, giải phóng con người."
            ],
            "answer": 3,
            "explanation": "Giải phóng dân tộc, giải phóng giai cấp, giải phóng con người.",
            "keywords": "Q: Mục tiêu của tư tưởng Hồ Chí Minh | A: Giải phóng dân tộc · giải phóng giai cấp · giải phóng con người"
        },
        {
            "id": 257,
            "text": "Hồ Chí Minh đã tiếp thu giá trị tích cực nào của văn hóa phương Tây?",
            "options": [
                "Tư tưởng dân tộc độc lập, dân quyền tự do, dân sinh hạnh phúc.",
                "Triết lý nhân sinh, tu thân, tề gia.",
                "Tư tưởng vị tha, từ bi, bác ái.",
                "Giá trị về quyền sống, quyền tự do và quyền mưu cầu hạnh phúc."
            ],
            "answer": 3,
            "explanation": "Giá trị về quyền sống, quyền tự do và quyền mưu cầu hạnh phúc.",
            "keywords": "Q: Hồ Chí Minh đã tiếp thu giá trị | A: Giá trị về quyền sống, quyền tự · do và quyền mưu cầu hạnh phúc"
        },
        {
            "id": 258,
            "text": "Vấn đề dân tộc trong tư tưởng Hồ Chí Minh là sự kết hợp nhuần nhuyễn giữa:",
            "options": [
                "Vấn đề dân tộc và vấn đề giai cấp.",
                "Chủ nghĩa dân tộc và chủ nghía xã hội.",
                "Độc lập dân tộc với tự do, hạnh phúc.",
                "Chủ nghĩa yêu nước và chủ nghĩa quốc tế."
            ],
            "answer": 3,
            "explanation": "Chủ nghĩa yêu nước và chủ nghĩa quốc tế.",
            "keywords": "Q: Vấn đề dân tộc trong tư tưởng Hồ | A: Chủ nghĩa yêu nước · chủ nghĩa quốc tế"
        },
        {
            "id": 259,
            "text": "Chức năng nào của văn hóa giúp xã hội định hướng các chuẩn mực và làm động lực cho sự phát triển?",
            "options": [
                "Chức năng tổ chức.",
                "Chức năng giáo dục.",
                "Chức năng điều chỉnh xã hội.",
                "Chức năng giao tiếp."
            ],
            "answer": 2,
            "explanation": "Chức năng điều chỉnh xã hội.",
            "keywords": "Q: Chức năng nào của văn hóa giúp xã | A: Chức năng điều chỉnh xã hội"
        },
        {
            "id": 260,
            "text": "Chọn đáp án KHÔNG đúng. Sức mạnh của dân tộc Việt Nam là:",
            "options": [
                "Chủ nghĩa yêu nước.",
                "Đa dạng tộc người.",
                "Ý thức tự lực, tự cường.",
                "Tinh thần đoàn kết."
            ],
            "answer": 1,
            "explanation": "Đa dạng tộc người.",
            "keywords": "Q: KHÔNG đúng - Sức mạnh của dân tộc | A: Đa dạng tộc người"
        },
        {
            "id": 261,
            "text": "Cuốn “Đường kách mệnh” của Nguyễn Ái Quốc được tái xuất bản tại:",
            "options": [
                "Pháp.",
                "Trung Quốc.",
                "Việt Nam.",
                "Liên Xô."
            ],
            "answer": 1,
            "explanation": "Trung Quốc.",
            "keywords": "Q: Cuốn “Đường kách mệnh” của Nguyễn Ái Quốc | A: Trung Quốc"
        },
        {
            "id": 262,
            "text": "Chọn đáp án KHÔNG đúng. Ý nghĩa học tập môn học Tư tưởng Hồ Chí Minh:",
            "options": [
                "Góp phần nâng cao năng lực tư duy lý luận.",
                "Xây dựng bản lĩnh cách mạng, đấu tranh chống giặc ngoại xâm.",
                "Giáo dục và thực hành đạo đức cách mạng, củng cố niềm tin vào khoa học, bồi dưỡng lòng yêu nước.",
                "Xây dựng, rèn luyện phương pháp và phong cách công tác."
            ],
            "answer": 1,
            "explanation": "Xây dựng bản lĩnh cách mạng, đấu tranh chống giặc ngoại xâm.",
            "keywords": "Q: KHÔNG đúng - Ý nghĩa học tập môn | A: Xây dựng bản lĩnh cách mạng, · đấu tranh chống giặc ngoại xâm"
        },
        {
            "id": 263,
            "text": "Theo Hồ Chí Minh, biện pháp nào là quan trọng nhất trong xây dựng CNXH?",
            "options": [
                "Tranh thủ tối đa sự giúp đỡ, viện trợ quốc tế.",
                "Kết hợp xây dựng và bảo vệ đất nước.",
                "Huy động các nguồn lực sẵn có trong nhân dân.",
                "Kết hợp cải tạo xã hội cũ với xây dựng xã hội mới."
            ],
            "answer": 2,
            "explanation": "Huy động các nguồn lực sẵn có trong nhân dân.",
            "keywords": "Q: Theo Hồ Chí Minh, biện pháp nào là | A: Huy động các nguồn lực · sẵn có trong nhân dân"
        },
        {
            "id": 264,
            "text": "Người khởi xướng và lãnh đạo phong trào Đông kinh nghĩa thục (1907) là:",
            "options": [
                "Phan Chu Trinh.",
                "Phan Bội Châu.",
                "Lương Văn Can.",
                "Nguyễn Thái Học."
            ],
            "answer": 2,
            "explanation": "Lương Văn Can.",
            "keywords": "Q: Người khởi xướng và lãnh đạo phong trào | A: Lương Văn Can"
        },
        {
            "id": 265,
            "text": "Chọn đáp án đúng nhất. Theo Hồ Chí Minh, đạo đức là:",
            "options": [
                "Gốc của người cách mạng.",
                "Phẩm chất của Đảng viên.",
                "Gốc rễ của con người.",
                "Yêu cầu của người cách mạng."
            ],
            "answer": 0,
            "explanation": "Gốc của người cách mạng.",
            "keywords": "Q: Theo Hồ Chí Minh, đạo đức là: | A: Gốc của người cách mạng"
        },
        {
            "id": 266,
            "text": "Tư tưởng cốt lõi trong tư tưởng Hồ Chí Minh về cách mạng Việt Nam là gì?",
            "options": [
                "Giải phóng dân tộc, giải phóng giai cấp.",
                "Độc lập dân tộc gắn liền với chủ nghĩa xã hội.",
                "Giải phóng dân tộc, giải phóng con người.",
                "Kết hợp sức mạnh dân tộc với sức mạnh thời đại."
            ],
            "answer": 1,
            "explanation": "Độc lập dân tộc gắn liền với chủ nghĩa xã hội.",
            "keywords": "Q: Tư tưởng cốt lõi trong tư tưởng Hồ | A: Độc lập dân tộc gắn liền · với chủ nghĩa xã hội"
        },
        {
            "id": 267,
            "text": "Chọn đáp án đúng nhất. Truyền thống gia đình ông Nguyễn Sinh Sắc là gì?",
            "options": [
                "Gia đình cần cù, chăm chỉ, ham học hỏi, ham sáng tạo, có ý chí phấn đấu vươn lên làm quan.",
                "Gia đình nhà nho yêu nước, hiếu học, giàu truyền thống cách mạng và ý chí phấn đấu vươn lên rất cao.",
                "Gia đình nề nếp, tuân theo chuẩn mực dạo đức xã hội, ham học hỏi, có ý chí phấn đấu vươn lên rất cao.",
                "Gia đình cần cù, chăm chỉ, truyền thống làm nông nghiệp, có ý chí phấn đấu vươn lên làm giàu."
            ],
            "answer": 1,
            "explanation": "Gia đình nhà nho yêu nước, hiếu học, giàu truyền thống cách mạng và ý chí phấn đấu vươn lên rất cao.",
            "keywords": "Q: Truyền thống gia đình ông Nguyễn Sinh Sắc | A: Gia đình nhà nho yêu nước, hiếu học, · cách mạng và ý chí phấn đấu vươn"
        },
        {
            "id": 268,
            "text": "Hồ Chí Minh thành lập “Hội Liên hiệp các dân tộc bị áp bức” năm nào? Tại đâu?",
            "options": [
                "Năm 1925, tại Quảng Châu (Trung Quốc).",
                "Năm 1923, tại Mátxcơva (Liên Xô).",
                "Năm 1926, tại Xiêm (Thái Lan).",
                "Năm 1920, tại Paris (Pháp)."
            ],
            "answer": 1,
            "explanation": "Năm 1923, tại Mátxcơva (Liên Xô).",
            "keywords": "Q: thành lập Hội Liên hiệp các dân tộc | A: Năm 1923, tại Mátxcơva (Liên Xô)"
        },
        {
            "id": 269,
            "text": "Tinh thần quốc tế trong sáng trong tư tưởng đạo đức của Hồ Chí Minh đã tạo ra một kiểu quan hệ quốc tế mới, đó là:",
            "options": [
                "Đa phương hoá, đa dạng hoá các quan hệ hữu nghị, hợp tác với nhau cùng phát triển.",
                "Giải quyết tranh chấp, đối đầu bằng hội nghị hiệp thương song phương, đa phương.",
                "Chủ nghĩa yêu nước chân chính kết hợp nhuần nhuyễn với chủ nghĩa quốc tế vô sản.",
                "Đối thoại thay cho đối đầu, nhằm kiến tạo một nền văn hoá hoà bình cho nhân loại."
            ],
            "answer": 2,
            "explanation": "Chủ nghĩa yêu nước chân chính kết hợp nhuần nhuyễn với chủ nghĩa quốc tế vô sản.",
            "keywords": "Q: Tinh thần quốc tế trong sáng trong tư | A: Chủ nghĩa yêu nước chân chính kết hợp · nhuyễn với chủ nghĩa quốc tế vô sản"
        },
        {
            "id": 270,
            "text": "Chọn đáp án đúng nhất. Từ cuối năm 1911 đến 1917, khi quay lại tàu làm việc Hồ Chí Minh đã đi qua những đâu?",
            "options": [
                "Châu Á; Châu Phi; Châu Âu; Châu Mỹ.",
                "Châu Á; Châu Phi; Châu Âu.",
                "Châu Á; Châu Phi; Châu Mỹ.",
                "Châu Phi; Nam Mỹ; Hoa kỳ."
            ],
            "answer": 0,
            "explanation": "Châu Á; Châu Phi; Châu Âu; Châu Mỹ.",
            "keywords": "Q: Từ cuối năm 1911 đến 1917, khi quay | A: Châu Á · Châu Phi · Châu Âu · Châu Mỹ"
        },
        {
            "id": 271,
            "text": "Chọn đáp án đúng nhất. Theo Hồ Chí Minh, đại đoàn kết toàn dân tộc chỉ có sức mạnh khi được tập hợp, tổ chức thành:",
            "options": [
                "Mặt trận dân tộc thống nhất.",
                "Mặt trận nhân dân thống nhất.",
                "Mặt trận tổ quốc Việt Nam.",
                "Mặt trận dân chủ Đông Dương."
            ],
            "answer": 0,
            "explanation": "Mặt trận dân tộc thống nhất.",
            "keywords": "Q: Theo Hồ Chí Minh, đại đoàn kết toàn | A: Mặt trận dân tộc thống nhất"
        },
        {
            "id": 272,
            "text": "Nhận định sau đây của Chủ tịch Hồ Chí Minh trong tác phẩm nào: “Toàn Đảng, toàn dân ta đoàn kết phấn đấu, xây dựng một nước Việt Nam hòa bình, thống nhất, độc lập, dân chủ và giàu mạnh, và góp phần xứng đáng vào sự nghiệp cách mạng thế giới”?",
            "options": [
                "Di chúc (1965-1969).",
                "Ba mươi năm hoạt động của Đảng (1960).",
                "Đạo đức cách mạng (1958).",
                "Đường cách mệnh (1927)."
            ],
            "answer": 0,
            "explanation": "Di chúc (1965-1969).",
            "keywords": "Q: Nhận định sau đây của Chủ tịch Hồ | A: Di chúc (1965-1969)"
        },
        {
            "id": 273,
            "text": "Chọn đáp án KHÔNG đúng. Sức mạnh đoàn kết quốc tế trong tư tưởng Hồ Chí Minh, bao gồm:",
            "options": [
                "Liên minh chiến đấu giữa lao động ở thuộc địa với lao động ở chính quốc.",
                "Liên minh giữa nhân dân thế giới về mục tiêu phản đối chiến tranh phi nghĩa.",
                "Sức mạnh của giai cấp vô sản, cách mạng vô sản và Đảng Cộng sản.",
                "Sức mạnh của ba dòng thác cách mạng và tiến bộ khoa học công nghệ."
            ],
            "answer": 1,
            "explanation": "Liên minh giữa nhân dân thế giới về mục tiêu phản đối chiến tranh phi nghĩa.",
            "keywords": "Q: KHÔNG đúng - Sức mạnh đoàn kết quốc | A: Liên minh giữa nhân dân thế giới về · mục tiêu phản đối chiến tranh phi nghĩa"
        },
        {
            "id": 274,
            "text": "Chọn đáp án KHÔNG đúng. Theo Hồ Chí Minh, trong xây dựng đường lối chính trị, Đảng cần:",
            "options": [
                "Dựa trên cơ sở lý luận của chủ nghĩa Mác – Lênin.",
                "Là đội tiên phong dũng cảm, là bộ tham mưu sáng suốt.",
                "Vận dụng kinh nghiệm vào điều kiện cụ thể của đất nước.",
                "Phát huy tài năng của các nhà nghiên cứu lý luận giỏi."
            ],
            "answer": 3,
            "explanation": "Phát huy tài năng của các nhà nghiên cứu lý luận giỏi.",
            "keywords": "Q: KHÔNG đúng - Chọn đáp án KHÔNG đúng. | A: Phát huy tài năng của các · nhà nghiên cứu lý luận giỏi"
        },
        {
            "id": 275,
            "text": "Trong khối đại đoàn kết toàn dân tộc, dân là chỗ dựa vững chắc đồng thời là:",
            "options": [
                "Nhân tố quyết định sức mạnh khối đại đoàn kết.",
                "Nguồn sức mạnh vô địch của khối đại đoàn kết.",
                "Nhân tố quan trọng của khối đại đoàn kết.",
                "Cội nguồn sức mạnh của khối đại đoàn kết."
            ],
            "answer": 1,
            "explanation": "Nguồn sức mạnh vô địch của khối đại đoàn kết.",
            "keywords": "Q: Trong khối đại đoàn kết toàn dân tộc, | A: Nguồn sức mạnh vô địch · của khối đại đoàn kết"
        },
        {
            "id": 276,
            "text": "Nhận định nào sau đây nói lên mối quan hệ giữa pháp luật và đạo đức?",
            "options": [
                "Đạo đức là pháp luật tối đa, pháp luật là đạo đức tối thiểu.",
                "Pháp luật là đạo đức tối đa, đạo đức là pháp luật tối thiểu.",
                "Pháp luật được thực hiện bằng cưỡng chế, đạo đức được thực hiện bằng tự giác.",
                "Pháp luật và đạo đức tồn tại song song, đều có vai trò quan trọng."
            ],
            "answer": 3,
            "explanation": "Pháp luật và đạo đức tồn tại song song, đều có vai trò quan trọng.",
            "keywords": "Q: Nhận định nào sau đây nói lên mối | A: Pháp luật và đạo đức tồn tại song · song, đều có vai trò quan trọng"
        },
        {
            "id": 277,
            "text": "Sau khi lên tàu đi tìm đường cứu nước Hồ Chí Minh đến nước nào đầu tiên? Thời gian nào?",
            "options": [
                "Nước Pháp, ngày 05/06/1911.",
                "Nam phi, ngày 25/06/1911.",
                "Nước Pháp, ngày 06/07/1911.",
                "Châu Phi, ngày 06/07/1911."
            ],
            "answer": 2,
            "explanation": "Nước Pháp, ngày 06/07/1911.",
            "keywords": "Q: Sau khi lên tàu đi tìm đường cứu | A: Nước Pháp, ngày 06/07/1911"
        },
        {
            "id": 278,
            "text": "\"Tự do cho đồng bào tôi, độc lập cho tổ quốc tôi, đây là tất cả những điều tôi muốn; đây là tất cả những điều tôi hiểu\". Câu nói được trích trong tác phẩm nào của Hồ Chí Minh?",
            "options": [
                "Đời sống mới.",
                "Phát biểu với kiều bào ở Pháp.",
                "Tuyên ngôn độc lập.",
                "Những mẩu chuyện về đời hoạt động của Hồ Chủ tịch."
            ],
            "answer": 3,
            "explanation": "Những mẩu chuyện về đời hoạt động của Hồ Chủ tịch.",
            "keywords": "Q: Tự do cho đồng bào tôi, độc lập | A: Những mẩu chuyện về đời hoạt · động của Hồ Chủ tịch"
        },
        {
            "id": 279,
            "text": "Theo Hồ Chí Minh, Đảng Cộng sản Việt Nam là nhân tố quyết định hàng đầu thắng lợi cách mạng Việt Nam, là xác định:",
            "options": [
                "Vai trò lãnh đạo của Đảng.",
                "Nhiệm vụ lịch sử của Đảng.",
                "Vị thế cầm quyền của Đảng.",
                "Bản chất của Đảng cầm quyền."
            ],
            "answer": 0,
            "explanation": "Vai trò lãnh đạo của Đảng.",
            "keywords": "Q: Theo Hồ Chí Minh, Đảng Cộng sản Việt | A: Vai trò lãnh đạo của Đảng"
        },
        {
            "id": 280,
            "text": "Câu nói: “Người mà không liêm, không bằng súc vật”, là của ai?",
            "options": [
                "Hồ Chí Minh.",
                "Lão Tử.",
                "Mạnh tử.",
                "Khổng Tử."
            ],
            "answer": 0,
            "explanation": "Hồ Chí Minh.",
            "keywords": "Q: Câu nói: “Người mà không liêm, không bằng | A: Hồ Chí Minh"
        },
        {
            "id": 281,
            "text": "Câu nói: “Ai cũng tham lợi, thì nước sẽ nguy”, là của ai?",
            "options": [
                "Tất Đạt Đa.",
                "Lão Tử.",
                "Mạnh tử.",
                "Khổng Tử."
            ],
            "answer": 2,
            "explanation": "Mạnh tử.",
            "keywords": "Q: Câu nói: “Ai cũng tham lợi, thì nước | A: Mạnh tử"
        },
        {
            "id": 282,
            "text": "Điền vào chỗ trống đúng theo Hồ Chí Minh, “Người cách mạng phải có [...] thì mới gánh được nặng và đi được xa”.",
            "options": [
                "Trí tuệ và tài năng.",
                "Tài năng và đạo đức.",
                "Đạo đức cách mạng.",
                "Phương pháp cách mạng."
            ],
            "answer": 2,
            "explanation": "Đạo đức cách mạng.",
            "keywords": "Q: điền khẩu theo Bác | A: Đạo đức cách mạng"
        },
        {
            "id": 283,
            "text": "\"Thắng lợi tuy lớn nhưng mới là bắt đầu. Chúng ta không nên vì thắng mà kiêu, không nên chủ quan khinh địch. Chúng ta kiên quyết kháng chiến để tranh lại độc lập, thống nhất, dân chủ, hòa bình\". Đoạn trích trong thư khen ngợi của Hồ Chí Minh gửi cho bộ đội và đồng bào Tây Bắc sau nhiến thắng nào?",
            "options": [
                "Chiến thắng Hòa Bình.",
                "Chiến thắng Tây Bắc.",
                "Chiến thắng Điện Biên Phủ.",
                "Chiến thắng Biên giới."
            ],
            "answer": 2,
            "explanation": "Chiến thắng Điện Biên Phủ.",
            "keywords": "Q: Thắng lợi tuy lớn nhưng mới là bắt | A: Chiến thắng Điện Biên Phủ"
        },
        {
            "id": 284,
            "text": "Khẳng định: \"Nhà nước là một tổ chức quyền lực đặc biệt, nó là tổ chức bạo lực dùng để trấn áp một giai cấp nào đó\", là của ai?",
            "options": [
                "Ănghen, Lênin.",
                "Ănghen, Hồ Chí Minh.",
                "Lênin, Hồ Chí Minh.",
                "C. Mác, Ănghen."
            ],
            "answer": 0,
            "explanation": "Ănghen, Lênin.",
            "keywords": "Q: Khẳng định: \"Nhà nước là một tổ chức | A: Ănghen, Lênin"
        },
        {
            "id": 285,
            "text": "Cuốn Đường kách mệnh được xuất bản đầu tiên ở đâu? Thời gian nào?",
            "options": [
                "Quảng Châu – Trung Quốc, năm 1927.",
                "Bắc pó – Việt Nam, năm 1927.",
                "Hương Cảng – Trung Quốc năm 1927.",
                "Quảng Châu – Trung Quốc, năm 1925."
            ],
            "answer": 0,
            "explanation": "Quảng Châu – Trung Quốc, năm 1927.",
            "keywords": "Q: xuất bản Cuốn Đường kách mệnh được xuất | A: Quảng Châu · Trung Quốc, năm 1927"
        },
        {
            "id": 286,
            "text": "Hồ Chí Minh sáng lập “Hội Việt Nam cách mạng thanh niên” vào thời gian nào?",
            "options": [
                "Tháng 06/1925.",
                "Tháng 08/1929.",
                "Tháng 05/1926.",
                "Tháng 06/1927."
            ],
            "answer": 0,
            "explanation": "Tháng 06/1925.",
            "keywords": "Q: Hồ Chí Minh sáng lập “Hội Việt Nam | A: Tháng 06/1925"
        },
        {
            "id": 287,
            "text": "Pháp luật được hình thành trên cơ sở nào?",
            "options": [
                "Các quan hệ chính trị - đạo đức.",
                "Các quan điểm chính trị và kinh tế.",
                "Các quan hệ kinh tế - xã hội.",
                "Các quy tắc xử sự trong đời sống xã hội."
            ],
            "answer": 2,
            "explanation": "Các quan hệ kinh tế - xã hội.",
            "keywords": "Q: Pháp luật được hình thành trên cơ sở | A: Các quan hệ kinh tế · xã hội"
        },
        {
            "id": 288,
            "text": "Từ sau Cách mạng tháng Tám năm 1945, văn hóa được Hồ Chí Minh xác định là:",
            "options": [
                "Tổng hợp mọi phương thức sản xuất của con người.",
                "Các trường học, số người đi học, biết đọc, biết viết.",
                "Đời sống tinh thần của xã hội, thuộc về kiến trúc thượng tầng.",
                "Đời sống vật chất của xã hội, thuộc về cơ sở hạ tầng."
            ],
            "answer": 2,
            "explanation": "Đời sống tinh thần của xã hội, thuộc về kiến trúc thượng tầng.",
            "keywords": "Q: Từ sau Cách mạng tháng Tám năm 1945, | A: Đời sống tinh thần của xã hội, · thuộc về kiến trúc thượng tầng"
        },
        {
            "id": 289,
            "text": "Các quy tắc, chuẩn mực đạo đức luôn biến đổi theo:",
            "options": [
                "Sự vận động.",
                "Sự vận động và phát triển của con người.",
                "Sự phát triển của xã hội.",
                "Đời sống con người."
            ],
            "answer": 1,
            "explanation": "Sự vận động và phát triển của con người.",
            "keywords": "Q: Các quy tắc, chuẩn mực đạo đức luôn | A: Sự vận động · phát triển của con người"
        },
        {
            "id": 290,
            "text": "Lý do nào sau đây giúp cho tư tưởng Hồ Chí Minh về đoàn kết trở thành di sản văn hoá thế giới?",
            "options": [
                "Đoàn là một lực lượng vô địch của chúng ta để khắc phục khó khăn.",
                "Đoàn kết tạo ra sức mạnh, tạo ra lực lượng để xây dựng đất nước.",
                "Đoàn kết là nhu cầu, nguyện vọng sống của tất cả mọi người.",
                "Đoàn kết là sức mạnh, đoàn kết là then chốt của mọi thành công."
            ],
            "answer": 1,
            "explanation": "Đoàn kết tạo ra sức mạnh, tạo ra lực lượng để xây dựng đất nước.",
            "keywords": "Q: Lý do nào sau đây giúp cho tư | A: Đoàn kết tạo ra sức mạnh, tạo ra · lực lượng để xây dựng đất nước"
        },
        {
            "id": 291,
            "text": "Một nhà nước pháp quyền có hiệu lực pháp lý mạnh mẽ theo Hồ Chí Minh phải là:",
            "options": [
                "Một nhà nước được công nhận bằng hiến pháp và pháp luật của dân.",
                "Một nhà nước mà quyền lực thuộc về nhân dân, do dân và vì nhân dân.",
                "Một nhà nước không có tiêu cực, không có đặc quyền, đặc lợi, cá nhân.",
                "Một nhà nước thống nhất, có chủ quyền quốc gia trên vùng, lãnh thổ."
            ],
            "answer": 0,
            "explanation": "Một nhà nước được công nhận bằng hiến pháp và pháp luật của dân.",
            "keywords": "Q: nhân vật Một nhà nước được công nhận | A: Một nhà nước được công nhận bằng · hiến pháp và pháp luật của dân"
        },
        {
            "id": 292,
            "text": "Chọn đáp án KHÔNG đúng. Theo Hồ Chí Minh, chức năng cơ bản của văn hóa là:",
            "options": [
                "Bồi dưỡng tư tưởng đúng đắn và tình cảm cao đẹp của con người.",
                "Bồi dưỡng lý luận chính trị, rèn luyện tác phong công tác, tư duy tự chủ.",
                "Bồi dưỡng những phẩm chất tốt đẹp, hướng con người đến chân, thiện, mỹ.",
                "Mở rộng hiểu biết của con người, nâng cao dân trí, xoá mù chữ cho dân."
            ],
            "answer": 1,
            "explanation": "Bồi dưỡng lý luận chính trị, rèn luyện tác phong công tác, tư duy tự chủ.",
            "keywords": "Q: KHÔNG đúng - Theo Hồ Chí Minh, chức | A: Bồi dưỡng lý luận chính trị · rèn luyện tác phong công tác · tư duy tự chủ"
        },
        {
            "id": 293,
            "text": "Điền vào chỗ trống đúng theo Hồ Chí Minh, “Năm ngón tay cũng có […]. Nhưng đều hợp nhau nơi bàn tay”.",
            "options": [
                "Ngón ngắn, ngón dài.",
                "Ngắn, dài không đều.",
                "Ngón vắn, ngón dài.",
                "Dài, ngắn khác nhau."
            ],
            "answer": 2,
            "explanation": "Ngón vắn, ngón dài.",
            "keywords": "Q: điền khẩu theo Bác | A: Ngón vắn, ngón dài"
        },
        {
            "id": 294,
            "text": "Điền vào chỗ trống theo Hồ Chí Minh: “Cuối thế kỷ XIX chủ nghĩa đế quốc Pháp xâm lược Việt Nam. Bọn […] đê tiện và hèn nhát đầu hàng và câu kết với bọn đế quốc để tiếp tục nô dịch nhân dân Việt Nam nhiều hơn\".",
            "options": [
                "Vua quan và thực dân.",
                "Phong kiến và thực dân.",
                "Vua quan và phong kiến.",
                "Phong kiến và địa chủ."
            ],
            "answer": 2,
            "explanation": "Vua quan và phong kiến.",
            "keywords": "Q: điền khẩu theo Bác | A: Vua quan và phong kiến"
        },
        {
            "id": 295,
            "text": "Theo tư tưởng Hồ Chí Minh, ai là người chủ tương lai của nước nhà?",
            "options": [
                "Công nhân.",
                "Thanh niên.",
                "Thiếu niên.",
                "Nhi đồng."
            ],
            "answer": 1,
            "explanation": "Thanh niên.",
            "keywords": "Q: nhân vật Thanh niên | A: Thanh niên"
        },
        {
            "id": 296,
            "text": "Theo Hồ Chí Minh, Đảng Cộng sản Việt Nam lấy chủ nghĩa Mác – Lênin “làm cốt”, nghĩa là:",
            "options": [
                "Kiên định lấy chủ nghĩa Mác – Lênin làm nền tảng tư tưởng, kim chỉ nam cho hành động.",
                "Căn cứ hoàn toàn vào chủ nghĩa Mác – Lênin mới lãnh đạo cách mạng thắng lợi.",
                "Lấy chủ nghĩa Mác – Lênin làm chủ trương, đường lối, chính sách cho hành động.",
                "Dựa vào chủ nghĩa Mác – Lênin để xây dựng học thuyết, quan điểm của Đảng."
            ],
            "answer": 0,
            "explanation": "Kiên định lấy chủ nghĩa Mác – Lênin làm nền tảng tư tưởng, kim chỉ nam cho hành động.",
            "keywords": "Q: Theo Hồ Chí Minh, Đảng Cộng sản Việt | A: Kiên định lấy chủ nghĩa Mác – Lênin · tảng tư tưởng, kim chỉ nam cho hành"
        },
        {
            "id": 297,
            "text": "\"Toàn thể dân tộc Việt Nam quyết đem […] để giữ vững quyền tự do, độc lập ấy\". Điền vào chỗ trống đúng với tư tưởng HCM.",
            "options": [
                "Tất cả tinh thần và lực lượng.",
                "Lực lượng quần chúng được huy động.",
                "Toàn bộ sức lực.",
                "Tất cả tinh thần và lực lượng, tính mạng và của cải."
            ],
            "answer": 3,
            "explanation": "Tất cả tinh thần và lực lượng, tính mạng và của cải.",
            "keywords": "Q: Toàn thể dân tộc Việt Nam quyết đem | A: Tất cả tinh thần và lực · lượng, tính mạng và của cải"
        },
        {
            "id": 298,
            "text": "Chọn đáp án đúng nhất. Sức mạnh thời đại trong đoàn kết quốc tế là gì?",
            "options": [
                "Sức mạnh của phong trào cách mạng thế giới.",
                "Sức mạnh của cách mạng cải cách nền dân chủ thế giới.",
                "Sức mạnh của phong trào vì hoà bình, độc lập dân tộc.",
                "Sức mạnh của cách mạng khoa học công nghệ 4.0."
            ],
            "answer": 0,
            "explanation": "Sức mạnh của phong trào cách mạng thế giới.",
            "keywords": "Q: Sức mạnh thời đại trong đoàn kết quốc | A: Sức mạnh của phong trào · cách mạng thế giới"
        },
        {
            "id": 299,
            "text": "Chọn đáp án đúng nhất. Bản chất con người theo tư tưởng Hồ Chí Minh là gì?",
            "options": [
                "Tổng hợp các quan hệ xã hội từ rộng đến hẹp.",
                "Tổng hoà các mối quan hệ trong xã hội.",
                "Sản phẩm của sự tiến hóa tự nhiên.",
                "Sự thống nhất cả hai măt tự nhiên và xã hội."
            ],
            "answer": 0,
            "explanation": "Tổng hợp các quan hệ xã hội từ rộng đến hẹp.",
            "keywords": "Q: Bản chất con người theo tư tưởng Hồ | A: Tổng hợp các quan hệ xã · hội từ rộng đến hẹp"
        },
        {
            "id": 300,
            "text": "Chọn đáp án KHÔNG đúng. Theo Hồ Chí Minh, muốn tăng cường đoàn kết quốc tế, các đảng cộng sản trên thế giới phải:",
            "options": [
                "Kiên trì chống lại khuynh hướng sai lầm của chủ nghĩa cơ hội.",
                "Kiên trì chống lại khuynh hướng sai lầm của chủ nghĩa sôvanh.",
                "Kiên trì chống lại khuynh hướng sai lầm của chủ nghĩa xét lại.",
                "Kiên trì chống lại khuynh hướng sai lầm của chủ nghĩa vị kỷ dân tộc."
            ],
            "answer": 2,
            "explanation": "Kiên trì chống lại khuynh hướng sai lầm của chủ nghĩa xét lại.",
            "keywords": "Q: KHÔNG đúng - đoàn kết quốc tế | A: chống lại · chủ nghĩa xét lại"
        }
    ];
    global.QUIZ_BANKS = global.QUIZ_BANKS || {};
    global.QUIZ_BANKS["tthcm"] = bank;
})(typeof window !== "undefined" ? window : globalThis);
