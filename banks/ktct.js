/** Ngân hàng câu hỏi: Kinh tế chính trị (300 câu) — load on demand */
(function (global) {
    const bank = [
        {
            "id": 1,
            "text": "Trong chủ nghĩa tư bản ngày nay, các trùm tài chính thống trị nền kinh tế thông qua:",
            "options": [
                "“Chế độ tham dự”.",
                "“Chế độ uỷ nhiệm”.",
                "Kết hợp “chế độ tham dự” với “chế độ uỷ nhiệm”.",
                "Các tổ chức tài chính quốc tế."
            ],
            "answer": 2,
            "explanation": "Kết hợp “chế độ tham dự” với “chế độ uỷ nhiệm”.",
            "keywords": "Q: Trong chủ nghĩa tư bản ngày nay, các | A: Kết hợp “chế độ tham"
        },
        {
            "id": 2,
            "text": "Nền sản xuất công nghiệp khác nền sản xuất nông nghiệp ở đặc điểm chủ yếu nào?",
            "options": [
                "Đồng bộ hoá.",
                "Kế hoạch hóa.",
                "Tiêu chuẩn hoá.",
                "Tập trung hoá."
            ],
            "answer": 0,
            "explanation": "Đồng bộ hoá.",
            "keywords": "Q: Nền sản xuất công nghiệp khác nền sản | A: Đồng bộ hoá"
        },
        {
            "id": 3,
            "text": "Về kinh tế, xuất khẩu tư bản nhà nước thường hướng vào:",
            "options": [
                "Ngành có lợi nhuận cao.",
                "Ngành kết cấu hạ tầng.",
                "Ngành công nghệ mới.",
                "Ngành có vốn chu chuyển nhanh."
            ],
            "answer": 1,
            "explanation": "Ngành kết cấu hạ tầng.",
            "keywords": "Q: Về kinh tế, xuất khẩu tư bản nhà | A: Ngành kết cấu hạ tầng"
        },
        {
            "id": 4,
            "text": "Giá cả sản xuất được xác định theo công thức nào?",
            "options": [
                "Chi phí tư bản + lợi nhuận bình quân.",
                "Chi phí tư bản + lợi nhuận.",
                "Chi phí tư bản + giá trị thặng dư.",
                "Tư bản bất biến + tư bản khả biến."
            ],
            "answer": 0,
            "explanation": "Chi phí tư bản + lợi nhuận bình quân.",
            "keywords": "Q: Giá cả sản xuất được xác định theo | A: Chi phí tư bản + lợi nhuận bình quân"
        },
        {
            "id": 5,
            "text": "Chức năng nào của tiền tệ KHÔNG đòi hỏi bắt buộc phải là tiền vàng?",
            "options": [
                "Chức năng thước đo giá trị.",
                "Chức năng phương tiện cất trữ.",
                "Chức năng phương tiện lưu thông.",
                "Chức năng tiền tệ thế giới."
            ],
            "answer": 2,
            "explanation": "Chức năng phương tiện lưu thông.",
            "keywords": "Q: Chức năng nào của tiền tệ KHÔNG đòi | A: Chức năng phương tiện lưu thông"
        },
        {
            "id": 6,
            "text": "Nghiên cứu phương thức sản xuất TBCN, C. Mác bắt đầu từ:",
            "options": [
                "Sản xuất của cải vật chất.",
                "Lưu thông hàng hoá.",
                "Sản xuất giá trị thặng dư.",
                "Sản xuất hàng hoá giản đơn và hàng hoá."
            ],
            "answer": 3,
            "explanation": "Sản xuất hàng hoá giản đơn và hàng hoá.",
            "keywords": "Q: Nghiên cứu phương thức sản xuất TBCN, C. | A: Sản xuất hàng hoá giản đơn và hàng hoá"
        },
        {
            "id": 7,
            "text": "Toàn cầu hóa kinh tế, bên cạnh những mặt thuận lợi, còn có những mặt trái, đặc biệt là:",
            "options": [
                "Gia tăng nhanh chóng khoảng các giàu nghèo.",
                "Cạnh tranh quyết liệt giữa các quốc gia.",
                "Các nước phải phụ thuộc lẫn nhau.",
                "Nguy cơ thất nghiệp, mất việc làm ngày càng tăng."
            ],
            "answer": 0,
            "explanation": "Gia tăng nhanh chóng khoảng các giàu nghèo.",
            "keywords": "Q: Toàn cầu hóa kinh tế, bên cạnh những | A: Gia tăng nhanh chóng khoảng các giàu nghèo"
        },
        {
            "id": 8,
            "text": "Quá trình sản xuất là sự kết hợp của các yếu tố:",
            "options": [
                "Sức lao động với công cụ lao động.",
                "Sức lao động với đối tượng lao động và tư liệu lao động.",
                "Lao động với tư liệu lao động.",
                "Lao động với đối tượng lao động và tư liệu lao động."
            ],
            "answer": 1,
            "explanation": "Sức lao động với đối tượng lao động và tư liệu lao động.",
            "keywords": "Q: Quá trình sản xuất là sự kết hợp | A: Sức lao động với đối"
        },
        {
            "id": 9,
            "text": "Cạnh tranh giữa các ngành xảy ra khi có sự khác nhau về:",
            "options": [
                "Cung - cầu các loại hàng hoá.",
                "Lợi nhuận khác nhau.",
                "Giá trị thặng dư siêu ngạch.",
                "Tỷ suất lợi nhuận."
            ],
            "answer": 3,
            "explanation": "Tỷ suất lợi nhuận.",
            "keywords": "Q: Cạnh tranh giữa các ngành xảy ra khi | A: Tỷ suất lợi nhuận"
        },
        {
            "id": 10,
            "text": "Chọn đáp án đúng nhất. Quỹ phúc lợi xã hội được hình thành từ nguồn:",
            "options": [
                "Sự đóng góp của doanh nghiệp và cá nhân.",
                "Từ nhà nước, các cơ quan đoàn thể.",
                "Từ nhà nước cho đến tất cả các cơ quan, doanh nghiệp, cá nhân.",
                "Từ cá nhân và tổ chức nước ngoài."
            ],
            "answer": 2,
            "explanation": "Từ nhà nước cho đến tất cả các cơ quan, doanh nghiệp, cá nhân.",
            "keywords": "Q: Chọn đáp án đúng nhất. Quỹ phúc lợi | A: Từ nhà nước cho đến tất cả các cơ quan"
        },
        {
            "id": 11,
            "text": "Hàng hoá là:",
            "options": [
                "Sản phẩm của lao động để thoả mãn nhu cầu của con người.",
                "Sản phẩm ở trên thị trường.",
                "Sản phẩm được sản xuất ra để đem bán.",
                "Sản phẩm của lao động có thể thoả mãn nhu cầu nào đó của con người thông qua mua bán."
            ],
            "answer": 3,
            "explanation": "Sản phẩm của lao động có thể thoả mãn nhu cầu nào đó của con người thông qua mua bán.",
            "keywords": "Q: Hàng hoá là: | A: Sản phẩm của lao động"
        },
        {
            "id": 12,
            "text": "Trong nền kinh tế tri thức, vai trò to lớn nhất thuộc về yếu tố nào?",
            "options": [
                "Tài nguyên thiên nhiên.",
                "Khoa học và công nghệ.",
                "Thị trường tiêu thụ.",
                "Tài chính và ngân hàng."
            ],
            "answer": 1,
            "explanation": "Khoa học và công nghệ.",
            "keywords": "Q: Trong nền kinh tế tri thức, vai trò | A: Khoa học và công nghệ"
        },
        {
            "id": 13,
            "text": "Tiền tệ có mấy chức năng cơ bản?",
            "options": [
                "Ba chức năng.",
                "Bốn chức năng.",
                "Năm chức năng.",
                "Sáu chức năng."
            ],
            "answer": 2,
            "explanation": "Năm chức năng.",
            "keywords": "Q: Tiền tệ có mấy chức năng cơ bản? | A: Năm chức năng"
        },
        {
            "id": 14,
            "text": "Giá cả hàng hoá là:",
            "options": [
                "Sự biểu hiện bằng tiền của giá trị hàng hoá.",
                "Giá trị của hàng hoá.",
                "Quan hệ về lượng giữa hàng và tiền.",
                "Tổng của chi phí sản xuất và lợi nhuận."
            ],
            "answer": 0,
            "explanation": "Sự biểu hiện bằng tiền của giá trị hàng hoá.",
            "keywords": "Q: Giá cả hàng hoá là: | A: Sự biểu hiện bằng tiền của giá trị hàng hoá"
        },
        {
            "id": 15,
            "text": "Chọn đáp án KHÔNG đúng. Địa tô tương đối thu được trên ruộng đất:",
            "options": [
                "Ruộng tốt.",
                "Ruộng trung bình.",
                "Ruộng có vị trí thuận lợi.",
                "Ruộng xấu."
            ],
            "answer": 3,
            "explanation": "Ruộng xấu.",
            "keywords": "Q: Chọn đáp án KHÔNG đúng. Địa tô tương | A: Ruộng xấu"
        },
        {
            "id": 16,
            "text": "Yếu tố quyết định đến giá cả hàng hoá là gì?",
            "options": [
                "Quan hệ cung cầu về hàng hoá.",
                "Giá trị sử dụng của hàng hoá.",
                "Giá trị của hàng hoá.",
                "Mốt thời trang của hàng hoá."
            ],
            "answer": 2,
            "explanation": "Giá trị của hàng hoá.",
            "keywords": "Q: Yếu tố quyết định đến giá cả hàng | A: Giá trị của hàng hoá"
        },
        {
            "id": 17,
            "text": "Chọn đáp án đúng nhất. Hội nhập kinh tế quốc tế của một quốc gia là:",
            "options": [
                "Quá trình quốc gia đó thực hiện gắn kết nền kinh tế của mình với nền kinh tế thế giới dựa trên sự chia sẻ lợi ích đồng thời tuân thủ các chuẩn mực quốc tế chung.",
                "Quá trình quốc gia đó thực hiện gắn kết nền kinh tế của mình với nền kinh tế thế giới dựa trên cơ sở lợi ích của quốc gia đó đồng thời tuân thủ các chuẩn mực quốc tế chung.",
                "Quá trình quốc gia đó chuẩn bị các điều kiện để thực hiện gắn kết nền kinh tế của mình với nền kinh tế thế giới dựa trên cơ sở lợi ích của quốc gia đó đồng thời tuân thủ các chuẩn mực quốc tế chung.",
                "Quá trình quốc gia đó phải tranh thủ thời cơ, bằng mọi giá để tham dự vào các tổ chức thương mại lớn trên thế giới, hoặc phụ thuộc vào một nền kinh tế mạnh để dần đạt được lợi ích kinh tế."
            ],
            "answer": 1,
            "explanation": "Quá trình quốc gia đó thực hiện gắn kết nền kinh tế của mình với nền kinh tế thế giới dựa trên cơ sở lợi ích của quốc gia đó đồng thời tuân thủ các chuẩn mực quốc tế chung.",
            "keywords": "Q: Chọn đáp án đúng nhất. Hội nhập kinh | A: Quá trình quốc gia đó"
        },
        {
            "id": 18,
            "text": "Chọn đáp án đúng nhất. Lao động trừu tượng:",
            "options": [
                "Là phạm trù của mọi nền kinh tế hàng hoá.",
                "Là phạm trù riêng của chủ nghĩa tư bản.",
                "Là phạm trù riêng của kinh tế thị trường.",
                "Là phạm trù chung của mọi nền kinh tế."
            ],
            "answer": 0,
            "explanation": "Là phạm trù của mọi nền kinh tế hàng hoá.",
            "keywords": "Q: Chọn đáp án đúng nhất. Lao động trừu | A: Là phạm trù của mọi nền kinh tế hàng hoá"
        },
        {
            "id": 19,
            "text": "Yếu tố được xác định là thực thể của giá trị hàng hoá là gì?",
            "options": [
                "Lao động cụ thể.",
                "Lao động trừu tượng.",
                "Lao động giản đơn.",
                "Lao động phức tạp."
            ],
            "answer": 1,
            "explanation": "Lao động trừu tượng.",
            "keywords": "Q: Yếu tố được xác định là thực thể | A: Lao động trừu tượng"
        },
        {
            "id": 20,
            "text": "Tính chất hai mặt của lao động sản xuất hàng hoá là gì?",
            "options": [
                "Lao động tư nhân và lao động xã hội.",
                "Lao động giản đơn và lao động phức tạp.",
                "Lao động cụ thể và lao động trừu tượng.",
                "Lao động quá khứ và lao động sống."
            ],
            "answer": 2,
            "explanation": "Lao động cụ thể và lao động trừu tượng.",
            "keywords": "Q: Tính chất hai mặt của lao động sản | A: Lao động cụ thể và lao động trừu tượng"
        },
        {
            "id": 21,
            "text": "Chọn đáp án đúng nhất. Khái niệm lao động cụ thể:",
            "options": [
                "Là những việc làm cụ thể.",
                "Là lao động có mục đích cụ thể.",
                "Là lao động ở các ngành nghề cụ thể.",
                "Là lao động ở các ngành nghề cụ thể tạo ra sản phẩm cụ thể."
            ],
            "answer": 3,
            "explanation": "Là lao động ở các ngành nghề cụ thể tạo ra sản phẩm cụ thể.",
            "keywords": "Q: Chọn đáp án đúng nhất. Khái niệm lao | A: Là lao động ở các"
        },
        {
            "id": 22,
            "text": "Theo khái niệm, Thị trường là:",
            "options": [
                "Là nơi trao đổi, mua bán hàng hoá giữa các chủ thể.",
                "Là điều kiện môi trường cho sản xuất phát triển, là cầu nối giữa sản xuất và tiêu dùng.",
                "Kích thích sự sáng tạo của các chủ thể kinh tế, tạo điều kiện phân bổ hợp lý các nguồn lực kinh tế.",
                "Thị trường gắn kết các chủ thể kinh tế, nối kết thị trường trong và ngoài nước."
            ],
            "answer": 0,
            "explanation": "Là nơi trao đổi, mua bán hàng hoá giữa các chủ thể.",
            "keywords": "Q: Theo khái niệm, Thị trường là: | A: Là nơi trao đổi"
        },
        {
            "id": 23,
            "text": "Chọn đáp án đúng nhất. Khái niệm lao động trừu tượng:",
            "options": [
                "Là lao động không cụ thể của người sản xuất hàng hoá nói chung, không tính đến những hình thức cụ thể.",
                "Là sự hao phí sức lao động của người sản xuất hàng hoá nói chung không tính đến những hình thức cụ thể.",
                "Là lao động phức tạp người sản xuất hàng hoá nói chung, không tính đến những hình thức cụ thể.",
                "Là lao động có trình độ cao, mất nhiều công đào tạo, không tính đến những hình thức cụ thể."
            ],
            "answer": 1,
            "explanation": "Là sự hao phí sức lao động của người sản xuất hàng hoá nói chung không tính đến những hình thức cụ thể.",
            "keywords": "Q: Chọn đáp án đúng nhất. Khái niệm lao | A: Là sự hao phí sức"
        },
        {
            "id": 24,
            "text": "Chọn đáp án KHÔNG đúng về các cặp phạm trù tư bản:",
            "options": [
                "Chia tư bản thành tư bản bất biến và tư bản khả biến để tìm nguồn gốc giá trị thặng dư.",
                "Chia tư bản thành tư bản cố định và tư bản lưu động để biết phương thức chuyển giá trị của chúng sang sản phẩm.",
                "Tư bản cố định cũng là tư bản bất biến, tư bản lưu động cũng là tư bản khả biến.",
                "Chia tư bản thành tư bản cố định và tư bản lưu động để tránh hao mòn vô hình và hao mòn hữu hình."
            ],
            "answer": 2,
            "explanation": "Tư bản cố định cũng là tư bản bất biến, tư bản lưu động cũng là tư bản khả biến.",
            "keywords": "Q: Chọn đáp án KHÔNG đúng về các cặp | A: Tư bản cố định cũng là tư bản bất biến"
        },
        {
            "id": 25,
            "text": "Chọn đáp án đúng nhất:",
            "options": [
                "Lao động cụ thể được thực hiện trước lao động trừu tượng.",
                "Lao động trừu tượng chỉ có ở người có trình độ cao.",
                "Người có trình độ thấp chỉ có lao động cụ thể.",
                "Lao động cụ thể tạo ra giá trị sử dụng."
            ],
            "answer": 3,
            "explanation": "Lao động cụ thể tạo ra giá trị sử dụng.",
            "keywords": "Q: Chọn đáp án đúng nhất: | A: Lao động cụ thể tạo ra giá trị sử dụng"
        },
        {
            "id": 26,
            "text": "Tính chất của quan hệ phân phối do yếu tố nào quyết định?",
            "options": [
                "Lực lượng sản xuất.",
                "Quan hệ sản xuất.",
                "Kiến trúc thượng tầng.",
                "Hạ tầng kỹ thuật."
            ],
            "answer": 1,
            "explanation": "Quan hệ sản xuất.",
            "keywords": "Q: Tính chất của quan hệ phân phối do | A: Quan hệ sản xuất"
        },
        {
            "id": 27,
            "text": "Chọn đáp án đúng nhất về lao động:",
            "options": [
                "Lao động của mọi người sản xuất hàng hoá đều có lao động cụ thể và lao động trừu tượng.",
                "Lao động của người kỹ sư có trình độ cao thuần tuý là lao động trừu tượng.",
                "Lao động của người không qua đào tạo chỉ là lao động cụ thể.",
                "Lao động của người công nhân có trình độ thấp thuần tuý là lao động cụ thể."
            ],
            "answer": 0,
            "explanation": "Lao động của mọi người sản xuất hàng hoá đều có lao động cụ thể và lao động trừu tượng.",
            "keywords": "Q: Chọn đáp án đúng nhất về lao động: | A: Lao động của mọi người"
        },
        {
            "id": 28,
            "text": "Chọn đáp án đúng nhất. Mục đích của xuất khẩu tư bản là gì?",
            "options": [
                "Để giải quyết nguồn tư bản “thừa” trong nước.",
                "Thực hiện giá trị và chiếm các nguồn lợi khác của nước nhập khẩu tư bản.",
                "Chiếm đoạt giá trị thặng dư và các nguồn lợi ở nước nhập khẩu tư bản.",
                "Giúp đỡ các nước nhập khẩu tư bản phát triển."
            ],
            "answer": 2,
            "explanation": "Chiếm đoạt giá trị thặng dư và các nguồn lợi ở nước nhập khẩu tư bản.",
            "keywords": "Q: Chọn đáp án đúng nhất. Mục đích của | A: Chiếm đoạt giá trị thặng"
        },
        {
            "id": 29,
            "text": "Lượng giá trị xã hội của hàng hoá được quyết định bởi:",
            "options": [
                "Hao phí vật tư kỹ thuật.",
                "Hao phí lao động cần thiết của người sản xuất.",
                "Hao phí lao động xã hội cần thiết.",
                "Hao phí lao động sống của người sản xuất."
            ],
            "answer": 2,
            "explanation": "Hao phí lao động xã hội cần thiết.",
            "keywords": "Q: Lượng giá trị xã hội của hàng hoá | A: Hao phí lao động xã hội cần thiết"
        },
        {
            "id": 30,
            "text": "Lượng giá trị của đơn vị hàng hoá thay đổi:",
            "options": [
                "Tỷ lệ thuận với năng suất lao động, không phụ thuộc vào cường độ lao động.",
                "Tỷ lệ thuận với năng suất lao động và tỷ lệ nghịch với cường độ lao động.",
                "Tỷ lệ nghịch với cường độ lao động, không phụ thuộc vào năng suất lao động.",
                "Tỷ lệ nghịch với năng suất lao động, không phụ thuộc vào cường độ lao động."
            ],
            "answer": 3,
            "explanation": "Tỷ lệ nghịch với năng suất lao động, không phụ thuộc vào cường độ lao động.",
            "keywords": "Q: Lượng giá trị của đơn vị hàng hoá | A: Tỷ lệ nghịch với năng suất lao động"
        },
        {
            "id": 31,
            "text": "Nhân tố KHÔNG ảnh hưởng đến tỷ suất lợi nhuận:",
            "options": [
                "Tỷ suất giá trị thặng dư.",
                "Cạnh tranh.",
                "Tốc độ chu chuyển của tư bản.",
                "Cấu tạo hữu cơ của tư bản."
            ],
            "answer": 1,
            "explanation": "Cạnh tranh.",
            "keywords": "Q: Nhân tố KHÔNG ảnh hưởng đến tỷ suất | A: Cạnh tranh"
        },
        {
            "id": 32,
            "text": "Chọn đáp án KHÔNG đúng. Nhân tố ảnh hưởng đến lượng giá trị của đơn vị hàng hoá là:",
            "options": [
                "Năng suất lao động.",
                "Cường độ lao động.",
                "Các điều kiện tự nhiên.",
                "Trình độ quản lý sản xuất."
            ],
            "answer": 1,
            "explanation": "Cường độ lao động.",
            "keywords": "Q: Chọn đáp án KHÔNG đúng. Nhân tố ảnh | A: Cường độ lao động"
        },
        {
            "id": 33,
            "text": "Chọn đáp án đúng nhất. Tỷ suất lợi tức phụ thuộc vào:",
            "options": [
                "Tỷ suất lợi nhuận bình quân.",
                "Tỷ suất giá trị thặng dư.",
                "Tỷ suất lợi nhuận.",
                "Giá cả sản xuất chung."
            ],
            "answer": 0,
            "explanation": "Tỷ suất lợi nhuận bình quân.",
            "keywords": "Q: Chọn đáp án đúng nhất. Tỷ suất lợi | A: Tỷ suất lợi nhuận bình quân"
        },
        {
            "id": 34,
            "text": "Chọn đáp án KHÔNG đúng. Khi tăng năng suất lao động thì:",
            "options": [
                "Số lượng hàng hoá làm ra trong 1 đơn vị thời gian tăng.",
                "Tổng giá trị của hàng hoá không thay đổi.",
                "Giá trị một đơn vị hàng hoá giảm xuống.",
                "Giá trị một đơn vị hàng hóa tăng lên."
            ],
            "answer": 3,
            "explanation": "Giá trị một đơn vị hàng hóa tăng lên.",
            "keywords": "Q: Chọn đáp án KHÔNG đúng. Khi tăng năng | A: Giá trị một đơn vị hàng hóa tăng lên"
        },
        {
            "id": 35,
            "text": "Khi đồng thời tăng năng suất lao động và cường độ lao động lên 2 lần thì:",
            "options": [
                "Giá trị 1 hàng hoá giảm 2 lần, tổng số giá trị hàng hoá tăng 2 lần.",
                "Tổng số hàng hoá tăng lên 4 lần, tổng số giá trị hàng hoá tăng lên 4 lần.",
                "Tổng số giá trị hàng hoá tăng 2 lần, tổng số hàng hoá tăng 2 lần.",
                "Tổng số hàng hoá tăng lên 2 lần, giá trị 1 hàng hoá giảm 2 lần."
            ],
            "answer": 0,
            "explanation": "Giá trị 1 hàng hoá giảm 2 lần, tổng số giá trị hàng hoá tăng 2 lần.",
            "keywords": "Q: Khi đồng thời tăng năng suất lao động | A: Giá trị 1 hàng hoá giảm 2 lần"
        },
        {
            "id": 36,
            "text": "Về kinh tế, xuất khẩu tư bản nhà nước nhằm mục đích:",
            "options": [
                "Thu nhiều lợi nhuận.",
                "Tạo điều kiện cho các nước nhập khẩu tư bản phát triển.",
                "Tạo môi trường thuận lợi cho xuất khẩu tư bản tư nhân.",
                "Khống chế kinh tế các nước nhập khẩu tư bản."
            ],
            "answer": 2,
            "explanation": "Tạo môi trường thuận lợi cho xuất khẩu tư bản tư nhân.",
            "keywords": "Q: Về kinh tế, xuất khẩu tư bản nhà | A: Tạo môi trường thuận lợi"
        },
        {
            "id": 37,
            "text": "Khi chưa có quan hệ kinh tế quốc tế, tiền tệ có mấy chức năng?",
            "options": [
                "Hai chức năng.",
                "Ba chức năng.",
                "Năm chức năng.",
                "Bốn chức năng."
            ],
            "answer": 3,
            "explanation": "Bốn chức năng.",
            "keywords": "Q: Khi chưa có quan hệ kinh tế quốc | A: Bốn chức năng"
        },
        {
            "id": 38,
            "text": "Chọn đáp án KHÔNG đúng. Địa tô địa tô chênh lệch thu được trên ruộng đất:",
            "options": [
                "Tốt.",
                "Trung bình.",
                "Cằn cỗi.",
                "Có vị trí thuận lợi."
            ],
            "answer": 2,
            "explanation": "Cằn cỗi.",
            "keywords": "Q: Chọn đáp án KHÔNG đúng. Địa tô địa | A: Cằn cỗi"
        },
        {
            "id": 39,
            "text": "Bản chất của tiền tệ là gì?",
            "options": [
                "Hàng hoá đặc biệt đóng vai trò là vật ngang giá chung.",
                "Tiền do nhà nước phát hành, vàng, ngoại tệ.",
                "Phương tiện để trao đổi hàng hoá và để thanh toán.",
                "Thước đo giá trị của hàng hoá."
            ],
            "answer": 0,
            "explanation": "Hàng hoá đặc biệt đóng vai trò là vật ngang giá chung.",
            "keywords": "Q: Bản chất của tiền tệ là gì? | A: Hàng hoá đặc biệt đóng"
        },
        {
            "id": 40,
            "text": "Quy luật giá trị tồn tại trong:",
            "options": [
                "Nền sản xuất hàng hoá giản đơn.",
                "Nền sản xuất tư bản chủ nghĩa.",
                "Nền kinh tế hàng hoá.",
                "Nền sản xuất vật chất nói chung."
            ],
            "answer": 2,
            "explanation": "Nền kinh tế hàng hoá.",
            "keywords": "Q: Quy luật giá trị tồn tại trong: | A: Nền kinh tế hàng hoá"
        },
        {
            "id": 41,
            "text": "Cuộc cách mạng khoa học kỹ thuật giai đoạn thứ hai có thể gọi là “cuộc cách mạng khoa học công nghệ” vì:",
            "options": [
                "Phát hiện ra những nguồn năng lượng mới và công nghệ sinh học.",
                "Cách mạng công nghệ trở thành cốt lõi của cách mạng khoa học kỹ thuật.",
                "Gắn với sự ra đời của máy tính điện tử và thiết bị thông minh.",
                "Đã tìm ra nhiều vật liệu mới thay thế cho những vật liệu cũ."
            ],
            "answer": 1,
            "explanation": "Cách mạng công nghệ trở thành cốt lõi của cách mạng khoa học kỹ thuật.",
            "keywords": "Q: Cuộc cách mạng khoa học kỹ thuật giai | A: Cách mạng công nghệ trở"
        },
        {
            "id": 42,
            "text": "Chọn đáp án KHÔNG đúng. Quy luật giá trị có yêu cầu:",
            "options": [
                "Hao phí lao động cá biệt phải lớn hơn mức hao phí lao động xã hội cần thiết.",
                "Hao phí lao động cá biệt phải nhỏ hơn mức hao phí lao động xã hội cần thiết.",
                "Lưu thông hàng hoá dựa trên nguyên tắc ngang giá.",
                "Sản xuất và lưu thông hàng hoá phải dựa trên cơ sở hao phí lao động xã hội cần thiết."
            ],
            "answer": 0,
            "explanation": "Hao phí lao động cá biệt phải lớn hơn mức hao phí lao động xã hội cần thiết.",
            "keywords": "Q: Chọn đáp án KHÔNG đúng. Quy luật giá | A: Hao phí lao động cá"
        },
        {
            "id": 43,
            "text": "Lưu thông tiền tệ là gì?",
            "options": [
                "Là sự di chuyển các quỹ tiền tệ trong nền kinh tế.",
                "Là sự mua bán các quỹ tiền tệ.",
                "Là sự vận động của tiền lấy trao đổi hàng hoá làm tiền đề.",
                "Là sự đi vay, cho vay tiền tệ."
            ],
            "answer": 2,
            "explanation": "Là sự vận động của tiền lấy trao đổi hàng hoá làm tiền đề.",
            "keywords": "Q: Lưu thông tiền tệ là gì? | A: Là sự vận động của"
        },
        {
            "id": 44,
            "text": "Chọn cách diễn đạt đúng nhất về giá trị hàng hoá:",
            "options": [
                "Giá trị hàng hoá = giá trị cũ + giá trị sức lao động.",
                "Giá trị hàng hoá = giá trị tư liệu sản xuất + giá trị thặng dư.",
                "Giá trị hàng hoá = giá trị cả sản xuất + giá trị thặng dư.",
                "Giá trị hàng hoá = giá trị tư liệu sản xuất + giá trị mới."
            ],
            "answer": 3,
            "explanation": "Giá trị hàng hoá = giá trị tư liệu sản xuất + giá trị mới.",
            "keywords": "Q: Chọn cách diễn đạt đúng nhất về giá | A: Giá trị hàng hoá ="
        },
        {
            "id": 45,
            "text": "Chọn đáp án KHÔNG đúng. Nhân tố ảnh hưởng tới giá cả thị trường:",
            "options": [
                "Giá trị thị trường của hàng hoá.",
                "Cung cầu hàng hoá và sức mua của tiền.",
                "Cạnh tranh trên thị trường.",
                "Sức sản xuất của doanh nghiệp."
            ],
            "answer": 3,
            "explanation": "Sức sản xuất của doanh nghiệp.",
            "keywords": "Q: Chọn đáp án KHÔNG đúng. Nhân tố ảnh | A: Sức sản xuất của doanh nghiệp"
        },
        {
            "id": 46,
            "text": "Ý kiến nào là đúng nhất về cạnh tranh?",
            "options": [
                "Là cuộc đấu tranh giữa các chủ thể hành vi kinh tế.",
                "Là cuộc đấu tranh giữa những người sản xuất.",
                "Là cuộc đấu tranh giữa các tập đoàn kinh tế.",
                "Là cuộc đấu tranh giữa những người sản xuất với người tiêu dùng."
            ],
            "answer": 0,
            "explanation": "Là cuộc đấu tranh giữa các chủ thể hành vi kinh tế.",
            "keywords": "Q: Ý kiến nào là đúng nhất về cạnh | A: Là cuộc đấu tranh giữa"
        },
        {
            "id": 47,
            "text": "Chọn đáp án KHÔNG đúng. Cạnh tranh có vai trò:",
            "options": [
                "Phân bố các nguồn lực kinh tế một cách hiệu quả.",
                "Thủ tiêu các hình thức độc quyền.",
                "Đào thải các nhân tố yếu kém, lạc hậu, trì trệ.",
                "Kích thích tiến bộ khoa học - công nghệ."
            ],
            "answer": 1,
            "explanation": "Thủ tiêu các hình thức độc quyền.",
            "keywords": "Q: Chọn đáp án KHÔNG đúng. Cạnh tranh có | A: Thủ tiêu các hình thức độc quyền"
        },
        {
            "id": 48,
            "text": "Cạnh tranh trong nội bộ ngành dẫn đến sự hình thành:",
            "options": [
                "Giá trị thị trường.",
                "Tỷ suất lợi nhuận bình quân.",
                "Giá cả sản xuất.",
                "Lợi nhuận bình quân."
            ],
            "answer": 0,
            "explanation": "Giá trị thị trường.",
            "keywords": "Q: Cạnh tranh trong nội bộ ngành dẫn đến | A: Giá trị thị trường"
        },
        {
            "id": 49,
            "text": "Chọn đáp án KHÔNG đúng. Vai trò của cách mạng công nghiệp đối với sự phát triển của nhân loại:",
            "options": [
                "Thúc đẩy sự phát triển của lực lượng sản xuất.",
                "Thúc đẩy hoàn thiện quan hệ sản xuất.",
                "Thúc đẩy đổi mới phương thức sinh tồn.",
                "Thúc đẩy đổi mới phương thức sản xuất."
            ],
            "answer": 2,
            "explanation": "Thúc đẩy đổi mới phương thức sinh tồn.",
            "keywords": "Q: Chọn đáp án KHÔNG đúng. Vai trò của | A: Thúc đẩy đổi mới phương thức sinh tồn"
        },
        {
            "id": 50,
            "text": "Chọn đáp án đúng nhất. Mục đích của cạnh tranh là gì?",
            "options": [
                "Nhằm thu lợi nhuận nhiều nhất.",
                "Giành lợi ích tối đa cho mình.",
                "Giành các điều kiện sản xuất thuận lợi nhất.",
                "Nhằm mua, bán hàng hoá với giá cả có lợi nhất."
            ],
            "answer": 1,
            "explanation": "Giành lợi ích tối đa cho mình.",
            "keywords": "Q: Chọn đáp án đúng nhất. Mục đích của | A: Giành lợi ích tối đa cho mình"
        },
        {
            "id": 51,
            "text": "Khi cường độ lao động tăng lên thì:",
            "options": [
                "Số lượng lao động hao phí trong thời gian đó không thay đổi.",
                "Giá trị một đơn vị hàng hoá giảm đi.",
                "Số lượng giá trị sử dụng làm ra trong 1 đơn vị thời gian tăng lên.",
                "Giá trị một đơn vị hàng hóa tăng lên."
            ],
            "answer": 2,
            "explanation": "Số lượng giá trị sử dụng làm ra trong 1 đơn vị thời gian tăng lên.",
            "keywords": "Q: Khi cường độ lao động tăng lên thì: | A: Số lượng giá trị sử"
        },
        {
            "id": 52,
            "text": "Chọn đáp án đúng nhất. Chủ nghĩa tư bản ra đời khi:",
            "options": [
                "Sản xuất hàng hoá đã phát triển cao.",
                "Phân công lao động đã phát triển cao.",
                "Trong xã hội xuất hiện giai cấp bóc lột và bị bóc lột.",
                "Tư liệu sản xuất tập trung vào một số ít người còn đa số người bị mất hết tư liệu sản xuất."
            ],
            "answer": 3,
            "explanation": "Tư liệu sản xuất tập trung vào một số ít người còn đa số người bị mất hết tư liệu sản xuất.",
            "keywords": "Q: Chọn đáp án đúng nhất. Chủ nghĩa tư | A: Tư liệu sản xuất tập"
        },
        {
            "id": 53,
            "text": "Chọn đáp án đúng nhất. Tư bản được hiểu là:",
            "options": [
                "Tiền mang lại giá trị thặng dư.",
                "Công cụ sản xuất và nguyên vật liệu.",
                "Tiền có khả năng đẻ ra tiền.",
                "Tiền và máy móc thiết bị."
            ],
            "answer": 0,
            "explanation": "Tiền mang lại giá trị thặng dư.",
            "keywords": "Q: Chọn đáp án đúng nhất. Tư bản được | A: Tiền mang lại giá trị thặng dư"
        },
        {
            "id": 54,
            "text": "Chọn đáp án KHÔNG đúng về lao động và sức lao động:",
            "options": [
                "Sức lao động chỉ là khả năng, còn lao động là sức lao động đã được tiêu dùng.",
                "Sức lao động là lao động được trả tiền.",
                "Sức lao động có giá trị, còn lao động không có giá trị.",
                "Sức lao động là hàng hoá, còn lao động không là hàng hoá."
            ],
            "answer": 1,
            "explanation": "Sức lao động là lao động được trả tiền.",
            "keywords": "Q: Chọn đáp án KHÔNG đúng về lao động | A: Sức lao động là lao động được trả tiền"
        },
        {
            "id": 55,
            "text": "Chế độ tham dự của tư bản tài chính được thiết lập do:",
            "options": [
                "Quyết định của nhà nước.",
                "Số cổ phiếu khống chế nắm công ty mẹ, con, cháu.",
                "Yêu cầu của các tổ chức độc quyền công nghiệp.",
                "Yêu cầu tổ chức của các ngân hàng."
            ],
            "answer": 1,
            "explanation": "Số cổ phiếu khống chế nắm công ty mẹ, con, cháu.",
            "keywords": "Q: Chế độ tham dự của tư bản tài | A: Số cổ phiếu khống chế nắm công ty mẹ"
        },
        {
            "id": 56,
            "text": "Việc mua bán nô lệ và mua bán sức lao động:",
            "options": [
                "Giống nhau về bản chất, chỉ khác về hình thức.",
                "Có quan hệ với nhau.",
                "Giống nhau về hình thức, chỉ khác về bản chất.",
                "Hoàn toàn khác nhau."
            ],
            "answer": 3,
            "explanation": "Hoàn toàn khác nhau.",
            "keywords": "Q: Việc mua bán nô lệ và mua bán | A: Hoàn toàn khác nhau"
        },
        {
            "id": 57,
            "text": "Chọn đáp án đúng nhất. Khái niệm tư bản bất biến:",
            "options": [
                "Bộ phận tư bản mà giá trị của nó không thay đổi về lượng và được chuyển nguyên vẹn sang sản phẩm.",
                "Bộ phận tư bản mà giá trị của nó lớn lên trong quá trình sản xuất.",
                "Bộ phận tư bản mà giá trị của nó không thay đổi và được chuyển ngay sang sản phẩm sau một chu kỳ sản xuất.",
                "Bộ phận tư bản mà giá trị của nó chuyển dần vào sản phẩm qua khấu hao."
            ],
            "answer": 0,
            "explanation": "Bộ phận tư bản mà giá trị của nó không thay đổi về lượng và được chuyển nguyên vẹn sang sản phẩm.",
            "keywords": "Q: Chọn đáp án đúng nhất. Khái niệm tư | A: Bộ phận tư bản mà"
        },
        {
            "id": 58,
            "text": "Chọn đáp án KHÔNG đúng về mua bán sức lao động:",
            "options": [
                "Bán chịu.",
                "Mua đứt, bán đứt.",
                "Mua, bán có thời hạn.",
                "Giá cả < giá trị do sức lao động tạo ra."
            ],
            "answer": 1,
            "explanation": "Mua đứt, bán đứt.",
            "keywords": "Q: Chọn đáp án KHÔNG đúng về mua bán | A: Mua đứt, bán đứt"
        },
        {
            "id": 59,
            "text": "Đâu không phải là vai trò của thị trường?",
            "options": [
                "Là nơi trao đổi, mua bán hàng hoá giữa các chủ thể, thể hiện vai trò Nhà nước.",
                "Là điều kiện môi trường cho sản xuất phát triển, là cầu nối giữa sản xuất và tiêu dùng.",
                "Kích thích sự sáng tạo của các chủ thể kinh tế, tạo điều kiện phân bổ hợp lý các nguồn lực kinh tế.",
                "Thị trường gắn kết các chủ thể kinh tế, nối kết thị trường trong và ngoài nước."
            ],
            "answer": 0,
            "explanation": "Là nơi trao đổi, mua bán hàng hoá giữa các chủ thể, thể hiện vai trò Nhà nước.",
            "keywords": "Q: Đâu không phải là vai trò của thị | A: Là nơi trao đổi"
        },
        {
            "id": 60,
            "text": "Giá trị hàng hoá sức lao động KHÔNG gồm:",
            "options": [
                "Giá trị các tư liệu tiêu dùng để tái sản xuất sức lao động của công nhân và nuôi gia đình anh ta.",
                "Chi phí để thoả mãn nhu cầu văn hoá, tinh thần.",
                "Chi phí đào tạo người lao động.",
                "Giá trị các tư liệu sản xuất để tái sản xuất sản phẩm."
            ],
            "answer": 3,
            "explanation": "Giá trị các tư liệu sản xuất để tái sản xuất sản phẩm.",
            "keywords": "Q: Giá trị hàng hoá sức lao động KHÔNG | A: Giá trị các tư liệu"
        },
        {
            "id": 61,
            "text": "Tiền tệ biến thành tư bản khi nào?",
            "options": [
                "Sức lao động trở thành hàng hoá.",
                "Dùng tiền để buôn bán mua rẻ, bán đắt.",
                "Có lượng tiền tệ đủ lớn.",
                "Dùng tiền đầu tư vào sản xuất kinh doanh."
            ],
            "answer": 0,
            "explanation": "Sức lao động trở thành hàng hoá.",
            "keywords": "Q: Tiền tệ biến thành tư bản khi nào? | A: Sức lao động trở thành hàng hoá"
        },
        {
            "id": 62,
            "text": "Giá trị hàng hoá được tạo ra trong:",
            "options": [
                "Sản xuất, phân phối.",
                "Sản xuất, lưu thông.",
                "Trao đổi, mua bán.",
                "Phân phối, trao đổi."
            ],
            "answer": 1,
            "explanation": "Sản xuất, lưu thông.",
            "keywords": "Q: Giá trị hàng hoá được tạo ra trong: | A: Sản xuất, lưu thông"
        },
        {
            "id": 63,
            "text": "Khái niệm giá trị thặng dư là:",
            "options": [
                "Lợi nhuận thu được của người sản xuất kinh doanh.",
                "Giá trị của tư bản tự tăng lên.",
                "Phần giá trị mới dôi ra ngoài giá trị sức lao động do người công nhân làm thuê tạo ra.",
                "Hiệu số giữa giá trị hàng hoá với chi phí sản xuất tư bản chủ nghĩa."
            ],
            "answer": 2,
            "explanation": "Phần giá trị mới dôi ra ngoài giá trị sức lao động do người công nhân làm thuê tạo ra.",
            "keywords": "Q: Khái niệm giá trị thặng dư là: | A: Phần giá trị mới dôi"
        },
        {
            "id": 64,
            "text": "Chọn đáp án KHÔNG đúng. Quan hệ giá cả độc quyền với giá trị:",
            "options": [
                "Giá cả độc quyền cao > giá trị.",
                "Giá cả độc quyền thấp < giá trị.",
                "Giá cả độc quyền vẫn dựa trên cơ sở giá trị.",
                "Giá cả độc quyền thoát ly giá trị."
            ],
            "answer": 3,
            "explanation": "Giá cả độc quyền thoát ly giá trị.",
            "keywords": "Q: Chọn đáp án KHÔNG đúng. Quan hệ giá | A: Giá cả độc quyền thoát ly giá trị"
        },
        {
            "id": 65,
            "text": "Chọn đáp án đúng nhất:",
            "options": [
                "Ngày lao động bao gồm thời gian lao động cần thiết và thời gian lao động thặng dư.",
                "Ngày lao động có tổng thời gian làm việc cần thiết là 8 giờ.",
                "Tỷ suất lợi nhuận phản ánh trình độ bóc lột của tư bản đối với lao động làm thuê.",
                "Tỷ suất giá trị thặng dư phản ánh hiệu quả đầu tư của tư bản."
            ],
            "answer": 0,
            "explanation": "Ngày lao động bao gồm thời gian lao động cần thiết và thời gian lao động thặng dư.",
            "keywords": "Q: Chọn đáp án đúng nhất: | A: Ngày lao động bao gồm"
        },
        {
            "id": 66,
            "text": "Cạnh tranh trong nội bộ ngành KHÔNG dựa trên:",
            "options": [
                "Trình độ kỹ thuật, tay nghề công nhân.",
                "Trang thiết bị kỹ thuật, công nghệ.",
                "Lợi nhuận bình quân đạt được.",
                "Khả năng tổ chức quản lý."
            ],
            "answer": 2,
            "explanation": "Lợi nhuận bình quân đạt được.",
            "keywords": "Q: Cạnh tranh trong nội bộ ngành KHÔNG dựa | A: Lợi nhuận bình quân đạt được"
        },
        {
            "id": 67,
            "text": "Sự phân chia tư bản thành tư bản bất biến và tư bản khả biến là để biết:",
            "options": [
                "Đặc điểm chuyển giá trị của từng loại tư bản vào sản phẩm.",
                "Nguồn gốc sản sinh ra giá trị thặng dư.",
                "Vai trò của lao động quá khứ và lao động sống trong việc tạo ra giá trị sử dụng.",
                "Nguồn gốc của quá trình làm giàu của các nhà tư bản."
            ],
            "answer": 1,
            "explanation": "Nguồn gốc sản sinh ra giá trị thặng dư.",
            "keywords": "Q: Sự phân chia tư bản thành tư bản | A: Nguồn gốc sản sinh ra giá trị thặng dư"
        },
        {
            "id": 68,
            "text": "Chọn đáp án đúng nhất. Tư bản cố định có vai trò là:",
            "options": [
                "Nguồn gốc của giá trị thặng dư.",
                "Điều kiện để giảm giá trị hàng hoá.",
                "Điều kiện để tăng năng suất lao động và giảm lượng giá trị.",
                "Điều kiện để tăng năng suất lao động."
            ],
            "answer": 2,
            "explanation": "Điều kiện để tăng năng suất lao động và giảm lượng giá trị.",
            "keywords": "Q: Chọn đáp án đúng nhất. Tư bản cố | A: Điều kiện để tăng năng"
        },
        {
            "id": 69,
            "text": "Khái niệm tư bản cố định là:",
            "options": [
                "Tư bản cố định là tư bản bất biến.",
                "Bộ phận tư bản gồm nguyên vật liệu, phụ liệu, tiền thuê công nhân, giá trị của nó chuyển hết vào sản phẩm trong một chu kỳ sản xuất.",
                "Các tư liệu sản xuất chủ yếu như nhà xưởng, máy móc…, giá trị của nó chuyền nguyên vẹn vào sản phẩm trong một chu kỳ sản xuất.",
                "Các tư liệu sản xuất chủ yếu như nhà xưởng, máy móc…, giá trị của nó chuyền dần từng phần vào sản phẩm trong quá trình sản xuất."
            ],
            "answer": 3,
            "explanation": "Các tư liệu sản xuất chủ yếu như nhà xưởng, máy móc…, giá trị của nó chuyền dần từng phần vào sản phẩm trong quá trình sản xuất.",
            "keywords": "Q: Khái niệm tư bản cố định là: | A: Các tư liệu sản xuất chủ yếu như nhà xưởng"
        },
        {
            "id": 70,
            "text": "Khái niệm tư bản lưu động là:",
            "options": [
                "Bộ phận tư bản gồm giá trị sức lao động, nguyên vật liệu, nhiên liệu…, giá trị của nó chuyển hết vào sản phẩm trong một chu kỳ sản xuất.",
                "Tư bản lao động là giá trị sức lao động.",
                "Bộ phận tư bản có giá trị lớn, phải mất nhiều chu kỳ sản xuất để chuyển hết giá trị vào sản phẩm.",
                "Các tư liệu sản xuất chủ yếu như nhà xưởng, máy móc…, giá trị của nó chuyền nguyên vẹn vào sản phẩm trong một chu kỳ sản xuất."
            ],
            "answer": 0,
            "explanation": "Bộ phận tư bản gồm giá trị sức lao động, nguyên vật liệu, nhiên liệu…, giá trị của nó chuyển hết vào sản phẩm trong một chu kỳ sản xuất.",
            "keywords": "Q: Khái niệm tư bản lưu động là: | A: Bộ phận tư bản gồm giá trị sức lao động"
        },
        {
            "id": 71,
            "text": "Tư bản khả biến là:",
            "options": [
                "Tư bản luôn luôn biến đổi.",
                "Nguồn gốc của giá trị thặng dư.",
                "Lao động của công nhân làm thuê.",
                "Tổng số tiền lương trả cho tổng số công nhân."
            ],
            "answer": 1,
            "explanation": "Nguồn gốc của giá trị thặng dư.",
            "keywords": "Q: Tư bản khả biến là: | A: Nguồn gốc của giá trị thặng dư"
        },
        {
            "id": 72,
            "text": "Cơ cấu lợi ích trong thành phần kinh tế cá thể, tiểu chủ là gì?",
            "options": [
                "Lợi ích nhà nước, lợi ích tập thể, lợi ích cá nhân.",
                "Lợi ích cá nhân, lợi ích cá thể, lợi ích xã hội.",
                "Lợi ích tập thể, lợi ích xã hội, lợi ích cá nhân.",
                "Lợi ích doanh nghiệp, lợi ích xã hội, lợi ích cá nhân."
            ],
            "answer": 1,
            "explanation": "Lợi ích cá nhân, lợi ích cá thể, lợi ích xã hội.",
            "keywords": "Q: Cơ cấu lợi ích trong thành phần kinh | A: Lợi ích cá nhân"
        },
        {
            "id": 73,
            "text": "Chọn đáp án KHÔNG đúng:",
            "options": [
                "Tư bản bất biến là điều kiện cần để sản xuất giá trị thặng dư.",
                "Chạy theo giá trị thặng dư siêu ngạnh là mục đích làm giàu của các nhà tư bản.",
                "Tư bản khả biến là nguồn gốc sản sinh ra giá trị thặng dư.",
                "Tư bản bất biến và tư bản khả biến có vai trò ngang nhau trong quá trình tạo ra giá trị thặng dư."
            ],
            "answer": 3,
            "explanation": "Tư bản bất biến và tư bản khả biến có vai trò ngang nhau trong quá trình tạo ra giá trị thặng dư.",
            "keywords": "Q: Chọn đáp án KHÔNG đúng: | A: Tư bản bất biến và"
        },
        {
            "id": 74,
            "text": "Tiền công trong tư bản chủ nghĩa là:",
            "options": [
                "Giá trị sức lao động.",
                "Giá cả của lao động.",
                "Sự trả công cho lao động.",
                "Giá trị của lao động."
            ],
            "answer": 0,
            "explanation": "Giá trị sức lao động.",
            "keywords": "Q: Tiền công trong tư bản chủ nghĩa là: | A: Giá trị sức lao động"
        },
        {
            "id": 75,
            "text": "Để tăng khối lượng giá trị thặng dư thu được, nhà tư bản đã:",
            "options": [
                "Tăng năng suất lao động đồng thời tăng tiền lương cho công nhân.",
                "Kéo dài thời gian lao động của công nhân trong ngày khi thời gian lao động cần thiết không đổi.",
                "Tăng giá trị sức lao động khi ngày lao động không đổi.",
                "Kéo dài thời gian lao động của công nhân trong khi thời gian lao động cần thiết tăng lên."
            ],
            "answer": 1,
            "explanation": "Kéo dài thời gian lao động của công nhân trong ngày khi thời gian lao động cần thiết không đổi.",
            "keywords": "Q: Để tăng khối lượng giá trị thặng dư | A: Kéo dài thời gian lao"
        },
        {
            "id": 76,
            "text": "Mâu thuẫn cơ bản của sản xuất hàng hoá giản đơn là mâu thuẫn giữa:",
            "options": [
                "Giá trị với giá trị sử dụng.",
                "Lao động tư nhân với lao động xã hội.",
                "Lao động giản đơn với lao động phức tạp.",
                "Lao động cụ thể với lao động trừu tượng."
            ],
            "answer": 1,
            "explanation": "Lao động tư nhân với lao động xã hội.",
            "keywords": "Q: Mâu thuẫn cơ bản của sản xuất hàng | A: Lao động tư nhân với lao động xã hội"
        },
        {
            "id": 77,
            "text": "Điểm giống nhau giữa phương pháp sản xuất giá trị thặng dư tuyệt đối và phương pháp sản xuất giá trị thặng dư tương đối là gì?",
            "options": [
                "Đều làm cho công nhân tốn sức lao động nhiều hơn.",
                "Đều làm giảm giá trị sức lao động của công nhân.",
                "Đều làm tăng tỷ suất giá trị thặng dư.",
                "Đều làm tăng giá trị sức lao động của công nhân."
            ],
            "answer": 2,
            "explanation": "Đều làm tăng tỷ suất giá trị thặng dư.",
            "keywords": "Q: Điểm giống nhau giữa phương pháp sản xuất | A: Đều làm tăng tỷ suất giá trị thặng dư"
        },
        {
            "id": 78,
            "text": "Chọn đáp án đúng nhất. Phương pháp sản xuất giá trị thặng dư tương đối:",
            "options": [
                "Thời gian lao động cần thiết thay đổi.",
                "Giá trị sức lao động không đổi.",
                "Thời gian ngày lao động thay đổi.",
                "Thời gian lao động thặng dư không đổi."
            ],
            "answer": 0,
            "explanation": "Thời gian lao động cần thiết thay đổi.",
            "keywords": "Q: Chọn đáp án đúng nhất. Phương pháp sản | A: Thời gian lao động cần thiết thay đổi"
        },
        {
            "id": 79,
            "text": "Trong phương pháp sản xuất giá trị thặng dư tuyệt đối, giới hạn tối thiểu của ngày lao động là:",
            "options": [
                "Đủ bù đắp giá trị sức lao động của công nhân.",
                "Lớn hơn thời gian lao động cần thiết.",
                "Do nhà tư bản quy định.",
                "Bằng thời gian lao động cần thiết."
            ],
            "answer": 3,
            "explanation": "Bằng thời gian lao động cần thiết.",
            "keywords": "Q: Trong phương pháp sản xuất giá trị thặng | A: Bằng thời gian lao động cần thiết"
        },
        {
            "id": 80,
            "text": "Hạn chế của phương pháp sản xuất giá trị thặng dư tuyệt đối:",
            "options": [
                "Năng suất lao động thường xuyên thay đổi.",
                "Thoả mãn khát vọng giá trị thặng dư của nhà tư bản.",
                "Gặp phải sự phản kháng quyết liệt của công nhân.",
                "Cường độ lao động không thay đổi."
            ],
            "answer": 2,
            "explanation": "Gặp phải sự phản kháng quyết liệt của công nhân.",
            "keywords": "Q: Hạn chế của phương pháp sản xuất giá | A: Gặp phải sự phản kháng"
        },
        {
            "id": 81,
            "text": "Chọn đáp án đúng nhất. Trong phương pháp sản xuất giá trị thặng dư tuyệt đối:",
            "options": [
                "Độ dài của ngày lao động không thay đổi.",
                "Thời gian lao động cần thiết thay đổi.",
                "Giá trị thăng dư không thay đổi.",
                "Giá trị sức lao động không thay đổi."
            ],
            "answer": 3,
            "explanation": "Giá trị sức lao động không thay đổi.",
            "keywords": "Q: Chọn đáp án đúng nhất. Trong phương pháp | A: Giá trị sức lao động không thay đổi"
        },
        {
            "id": 82,
            "text": "Chọn đáp án KHÔNG đúng về giá trị thặng dư tương đối và giá trị thặng dư siêu ngạch:",
            "options": [
                "Giá trị thặng dư siêu ngạch luôn chuyển hoá thành giá trị thặng dư tương đối.",
                "Giá trị thặng dư tương đối dựa trên cơ sở tăng năng suất lao động xã hội.",
                "Giá trị thặng dư siêu ngạch dựa trên cơ sở tăng năng suất lao động cá biệt.",
                "Đều dựa trên cơ sở tăng năng suất lao động."
            ],
            "answer": 0,
            "explanation": "Giá trị thặng dư siêu ngạch luôn chuyển hoá thành giá trị thặng dư tương đối.",
            "keywords": "Q: Chọn đáp án KHÔNG đúng về giá trị | A: Giá trị thặng dư siêu"
        },
        {
            "id": 83,
            "text": "Chọn đáp án KHÔNG đúng. Đặc điểm của giá trị thặng dư siêu ngạch:",
            "options": [
                "Không cố định ở doanh nghiệp nào.",
                "Chỉ xuất hiện ở doanh nghiệp có năng suất cá biệt thấp hơn năng suất lao động xã hội.",
                "Là động lực trực tiếp, mạnh mẽ của các nhà tư bản.",
                "Chỉ có ở doanh nghiệp có năng suất cá biệt cao hơn năng suất lao động xã hội."
            ],
            "answer": 1,
            "explanation": "Chỉ xuất hiện ở doanh nghiệp có năng suất cá biệt thấp hơn năng suất lao động xã hội.",
            "keywords": "Q: Chọn đáp án KHÔNG đúng. Đặc điểm của | A: Chỉ xuất hiện ở doanh"
        },
        {
            "id": 84,
            "text": "Vai trò của máy móc trong quá trình tạo ra giá trị thặng dư là gì?",
            "options": [
                "Nguồn gốc của giá trị thặng dư.",
                "Tạo ra giá trị thặng dư.",
                "Tiền đề vật chất cho việc tạo ra giá trị thặng dư.",
                "Yếu tố quyết định để tạo ra giá trị thặng dư."
            ],
            "answer": 2,
            "explanation": "Tiền đề vật chất cho việc tạo ra giá trị thặng dư.",
            "keywords": "Q: Vai trò của máy móc trong quá trình | A: Tiền đề vật chất cho"
        },
        {
            "id": 85,
            "text": "Lưu thông hàng hoá dựa trên nguyên tắc ngang giá. Điều này được hiểu là:",
            "options": [
                "Giá cả của từng hàng hoá luôn luôn bằng giá trị của nó.",
                "Giá cả có thể tách rời giá trị và xoay quanh giá trị của nó.",
                "Giá trị hàng hóa luôn bằng giá cả được thỏa thuận.",
                "Giá cả mua vào bằng giá trị và bán ra bằng giá trị."
            ],
            "answer": 1,
            "explanation": "Giá cả có thể tách rời giá trị và xoay quanh giá trị của nó.",
            "keywords": "Q: Lưu thông hàng hoá dựa trên nguyên tắc | A: Giá cả có thể tách"
        },
        {
            "id": 86,
            "text": "Cơ sở chung của giá trị thặng dư tương đối và giá trị thặng dư siêu ngạch là:",
            "options": [
                "Tăng năng suất lao động cá biệt.",
                "Giảm giá trị thặng dư.",
                "Tăng năng suất lao động xã hội.",
                "Giảm giá trị sức lao động."
            ],
            "answer": 3,
            "explanation": "Giảm giá trị sức lao động.",
            "keywords": "Q: Cơ sở chung của giá trị thặng dư | A: Giảm giá trị sức lao động"
        },
        {
            "id": 87,
            "text": "Nguồn gốc của tích luỹ tư bản là gì?",
            "options": [
                "Tài sản kế thừa.",
                "Lợi nhuận.",
                "Của cải tiết kiệm của nhà tư bản.",
                "Doanh thu bán hàng."
            ],
            "answer": 1,
            "explanation": "Lợi nhuận.",
            "keywords": "Q: Nguồn gốc của tích luỹ tư bản là | A: Lợi nhuận"
        },
        {
            "id": 88,
            "text": "Chọn đáp án KHÔNG đúng. Các nhà tư bản thực hiện tích luỹ tư bản vì:",
            "options": [
                "Theo đuổi giá trị thặng dư.",
                "Do quy luật giá trị thặng dư chi phối.",
                "Nhanh chóng đạt được độc quyền mua bán sản phẩm.",
                "Do quy luật giá trị và quy luật cạnh tranh chi phối."
            ],
            "answer": 2,
            "explanation": "Nhanh chóng đạt được độc quyền mua bán sản phẩm.",
            "keywords": "Q: Chọn đáp án KHÔNG đúng. Các nhà tư | A: Nhanh chóng đạt được độc"
        },
        {
            "id": 89,
            "text": "Để có thể tăng quy mô tích luỹ, các nhà tư bản KHÔNG sử dụng biện pháp:",
            "options": [
                "Tăng m'.",
                "Giảm v.",
                "Tăng năng suất lao động.",
                "Giảm quy mô sản xuất."
            ],
            "answer": 3,
            "explanation": "Giảm quy mô sản xuất.",
            "keywords": "Q: Để có thể tăng quy mô tích luỹ, | A: Giảm quy mô sản xuất"
        },
        {
            "id": 90,
            "text": "Quy mô tích luỹ tư bản phụ thuộc vào:",
            "options": [
                "Tỷ lệ phân chia giá trị thặng dư thành 2 phần là thu nhập và tích luỹ.",
                "Khối lượng tài sản được thừa kế.",
                "Các tư bản sẵn có trong xã hội.",
                "Khả năng tiết kiệm chi phí sản xuất."
            ],
            "answer": 0,
            "explanation": "Tỷ lệ phân chia giá trị thặng dư thành 2 phần là thu nhập và tích luỹ.",
            "keywords": "Q: Quy mô tích luỹ tư bản phụ thuộc | A: Tỷ lệ phân chia giá"
        },
        {
            "id": 91,
            "text": "Mục tiêu hàng đầu của phát triển kinh tế thị trường ở nước ta:",
            "options": [
                "Để tăng trưởng kinh tế nhanh, đuổi kịp các nước trong khu vực và trên thế giới.",
                "Để đáp ứng xu thế xuất khẩu hàng hoá, chiếm lĩnh thị trường thế giới.",
                "Tranh thủ được sự ủng hộ của các nước có nền kinh tế phát triển.",
                "Giải phóng LLSX, huy động mọi nguồn lực cho công nghiệp hoá, hiện đại hoá, cải thiện đời sống nhân dân."
            ],
            "answer": 3,
            "explanation": "Giải phóng LLSX, huy động mọi nguồn lực cho công nghiệp hoá, hiện đại hoá, cải thiện đời sống nhân dân.",
            "keywords": "Q: Mục tiêu hàng đầu của phát triển kinh | A: Giải phóng LLSX"
        },
        {
            "id": 92,
            "text": "Chọn đáp án KHÔNG đúng. Tích tụ tư bản:",
            "options": [
                "Làm tăng quy mô tư bản cá biệt bằng cách tư bản hoá giá trị thặng dư.",
                "Là kết quả trực tiếp của tập trung tư bản.",
                "Làm cho tư bản xã hội tăng.",
                "Là kết quả trực tiếp của tích luỹ tư bản."
            ],
            "answer": 1,
            "explanation": "Là kết quả trực tiếp của tập trung tư bản.",
            "keywords": "Q: Chọn đáp án KHÔNG đúng. Tích tụ tư | A: Là kết quả trực tiếp của tập trung tư bản"
        },
        {
            "id": 93,
            "text": "Nguồn gốc trực tiếp của tập trung tư bản là:",
            "options": [
                "Tư bản có sẵn trong xã hội.",
                "Giá trị thặng dư.",
                "Tiền tiết kiệm trong dân cư.",
                "Tích lũy tư bản."
            ],
            "answer": 0,
            "explanation": "Tư bản có sẵn trong xã hội.",
            "keywords": "Q: Nguồn gốc trực tiếp của tập trung tư | A: Tư bản có sẵn trong xã hội"
        },
        {
            "id": 94,
            "text": "Yếu tố nào thuộc tư bản lưu động?",
            "options": [
                "Đất đai làm mặt bằng sản xuất.",
                "Tiền lương công nhân.",
                "Giá trị thặng dư.",
                "Máy móc, nhà xưởng."
            ],
            "answer": 1,
            "explanation": "Tiền lương công nhân.",
            "keywords": "Q: Yếu tố nào thuộc tư bản lưu động? | A: Tiền lương công nhân"
        },
        {
            "id": 95,
            "text": "Chọn đáp án KHÔNG đúng về lợi nhuận và giá trị thặng dư:",
            "options": [
                "Bản chất của lợi nhuận là giá trị thặng dư.",
                "Giá trị thặng dư được hình thành từ sản xuất còn lợi nhuận hình thành trên thị trường.",
                "Lợi nhuận phụ thuộc các quy luật kinh tế khách quan.",
                "Lợi nhuận và giá trị thặng dư luôn luôn bằng nhau."
            ],
            "answer": 3,
            "explanation": "Lợi nhuận và giá trị thặng dư luôn luôn bằng nhau.",
            "keywords": "Q: Chọn đáp án KHÔNG đúng về lợi nhuận | A: Lợi nhuận và giá trị"
        },
        {
            "id": 96,
            "text": "Phạm trù nào được coi là tín hiệu của cơ chế thị trường?",
            "options": [
                "Cung - cầu hàng hoá.",
                "Sức mua của tiền.",
                "Thông tin thị trường.",
                "Giá cả hàng hóa"
            ],
            "answer": 3,
            "explanation": "Giá cả hàng hóa",
            "keywords": "Q: Phạm trù nào được coi là tín hiệu | A: Giá cả hàng hóa"
        },
        {
            "id": 97,
            "text": "Chọn đáp án đúng nhất về lợi nhuận và giá trị thặng dư:",
            "options": [
                "Bản chất của lợi nhuận là giá trị thặng dư.",
                "Lợi nhuận và giá trị thặng dư luôn luôn bằng nhau.",
                "Lợi nhuận và giá trị thặng dư phụ thuộc vào quan hệ cung cầu.",
                "Lợi nhuận và giá trị thặng dư không phụ thuộc vào quan hệ cung cầu."
            ],
            "answer": 0,
            "explanation": "Bản chất của lợi nhuận là giá trị thặng dư.",
            "keywords": "Q: Chọn đáp án đúng nhất về lợi nhuận | A: Bản chất của lợi nhuận là giá trị thặng dư"
        },
        {
            "id": 98,
            "text": "Các tổ chức tài chính quốc tế nào sau đây ngày càng đóng vai trò quan trọng trong sự phát triển kinh tế toàn cầu?",
            "options": [
                "Ngân hàng châu Âu, Quỹ tiền tệ quốc tế.",
                "Ngân hàng châu Á, Ngâ hàng châu Âu.",
                "Ngân hàng châu Á, Ngân hàng Thế giới.",
                "Ngân hàng thế giới, Quỹ tiền tệ quốc tế."
            ],
            "answer": 3,
            "explanation": "Ngân hàng thế giới, Quỹ tiền tệ quốc tế.",
            "keywords": "Q: Các tổ chức tài chính quốc tế nào | A: Ngân hàng thế giới, Quỹ tiền tệ quốc tế"
        },
        {
            "id": 99,
            "text": "Chọn đáp án KHÔNG đúng về lợi nhuận:",
            "options": [
                "Lợi nhuận là do sản xuất và lưu thông tạo ra.",
                "Lợi nhuận là do lưu thông tạo ra.",
                "Lợi nhuận là hiệu số giữa tổng doanh thu trừ đi tổng chi phí.",
                "Lợi nhuận nhỏ hơn giá trị thặng dư kết tinh trong hàng hóa."
            ],
            "answer": 1,
            "explanation": "Lợi nhuận là do lưu thông tạo ra.",
            "keywords": "Q: Chọn đáp án KHÔNG đúng về lợi nhuận: | A: Lợi nhuận là do lưu thông tạo ra"
        },
        {
            "id": 100,
            "text": "Chọn đáp án đúng nhất:",
            "options": [
                "Tỷ suất giá trị thặng dư nói lên qui mô bóc lột.",
                "Tỷ suất lợi nhuận nói lên trình độ bóc lột của nhà tư bản.",
                "Tỷ suất lợi nhuận nhỏ hơn tỷ suất giá trị thặng dư.",
                "Tỷ suất lợi nhuận lớn hơn tỷ suất giá trị thặng dư."
            ],
            "answer": 2,
            "explanation": "Tỷ suất lợi nhuận nhỏ hơn tỷ suất giá trị thặng dư.",
            "keywords": "Q: Chọn đáp án đúng nhất: | A: Tỷ suất lợi nhuận nhỏ"
        },
        {
            "id": 101,
            "text": "Lợi nhuận có nguồn gốc từ:",
            "options": [
                "Lao động phức tạp.",
                "Lao động quá khứ.",
                "Lao động cụ thể.",
                "Lao động không được trả công."
            ],
            "answer": 3,
            "explanation": "Lao động không được trả công.",
            "keywords": "Q: Lợi nhuận có nguồn gốc từ: | A: Lao động không được trả công"
        },
        {
            "id": 102,
            "text": "Chọn đáp án đúng nhất. Khi hàng hoá bán đúng giá trị thì:",
            "options": [
                "p = m.",
                "p >m.",
                "p < m.",
                "p = 0."
            ],
            "answer": 0,
            "explanation": "p = m.",
            "keywords": "Q: Chọn đáp án đúng nhất. Khi hàng hoá | A: p = m"
        },
        {
            "id": 103,
            "text": "Chọn đáp án đúng nhất. Tỷ suất lợi nhuận phản ánh:",
            "options": [
                "Trình độ bóc lột của tư bản.",
                "Hiệu quả của tư bản đầu tư.",
                "Nghệ thuật quản lý của tư bản.",
                "Khả năng đầu tư của tư bản."
            ],
            "answer": 1,
            "explanation": "Hiệu quả của tư bản đầu tư.",
            "keywords": "Q: Chọn đáp án đúng nhất. Tỷ suất lợi | A: Hiệu quả của tư bản đầu tư"
        },
        {
            "id": 104,
            "text": "Nhân tố nào ảnh hưởng đến tỷ suất lợi nhuận?",
            "options": [
                "Khối lượng giá trị mới.",
                "Khả năng chu chuyển của tư bản.",
                "Cấu tạo hữu cơ của tư bản.",
                "Tỷ suất tư bản cho vay."
            ],
            "answer": 2,
            "explanation": "Cấu tạo hữu cơ của tư bản.",
            "keywords": "Q: Nhân tố nào ảnh hưởng đến tỷ suất | A: Cấu tạo hữu cơ của tư bản"
        },
        {
            "id": 105,
            "text": "Chọn đáp án KHÔNG đúng. Quy luật giá trị có tác dụng:",
            "options": [
                "Điều tiết sản xuất và lưu thông hàng hoá.",
                "Cải tiến kỹ thuật, tăng năng suất lao động.",
                "Phân hoá những người sản xuất.",
                "Tăng sức cạnh tranh cho quốc gia."
            ],
            "answer": 3,
            "explanation": "Tăng sức cạnh tranh cho quốc gia.",
            "keywords": "Q: Chọn đáp án KHÔNG đúng. Quy luật giá | A: Tăng sức cạnh tranh cho quốc gia"
        },
        {
            "id": 106,
            "text": "Nguyên nhân hình thành tỷ suất lợi nhuận bình quân là gì?",
            "options": [
                "Cạnh tranh.",
                "Do chạy theo giá trị thặng dư.",
                "Cạnh tranh trong nội bộ ngành.",
                "Cạnh tranh giữa các ngành."
            ],
            "answer": 3,
            "explanation": "Cạnh tranh giữa các ngành.",
            "keywords": "Q: Nguyên nhân hình thành tỷ suất lợi nhuận | A: Cạnh tranh giữa các ngành"
        },
        {
            "id": 107,
            "text": "Quy luật giá cả sản xuất là biểu hiện hoạt động của quy luật nào?",
            "options": [
                "Quy luật giá trị thặng dư.",
                "Quy luật giá trị.",
                "Quy luật cạnh tranh.",
                "Quy luật cung - cầu."
            ],
            "answer": 1,
            "explanation": "Quy luật giá trị.",
            "keywords": "Q: Quy luật giá cả sản xuất là biểu | A: Quy luật giá trị"
        },
        {
            "id": 108,
            "text": "Cơ chế kế hoạch tập trung bao cấp có đặc trưng chủ yếu gì?",
            "options": [
                "Cơ quan hành chính không can thiệp vào hoạt động sản xuất.",
                "Coi trọng quan hệ hàng hoá - tiền tệ.",
                "Nhà nước quản lý nền kinh tế bằng mệnh lệnh hành chính.",
                "Cơ quan hành chính không can thiệp vào hoạt động kinh doanh."
            ],
            "answer": 2,
            "explanation": "Nhà nước quản lý nền kinh tế bằng mệnh lệnh hành chính.",
            "keywords": "Q: Cơ chế kế hoạch tập trung bao cấp | A: Nhà nước quản lý nền"
        },
        {
            "id": 109,
            "text": "Chọn đáp án đúng nhất. Lợi tức là một phần của:",
            "options": [
                "Lợi nhuận.",
                "Lợi nhuận siêu ngạch.",
                "Lợi nhuận ngân hàng.",
                "Lợi nhuận bình quân."
            ],
            "answer": 3,
            "explanation": "Lợi nhuận bình quân.",
            "keywords": "Q: Chọn đáp án đúng nhất. Lợi tức là | A: Lợi nhuận bình quân"
        },
        {
            "id": 110,
            "text": "Phương pháp sản xuất giá trị thặng dư tuyệt đối là phương pháp:",
            "options": [
                "Tiết kiệm chi phí sản xuất, gia tăng doanh số bán hàng.",
                "Sử dụng kỹ thuật tiên tiến, cải tiến tổ chức quản lý.",
                "Giữ nguyên thời gian của ngày lao động, còn thời gian lao động cần thiết giảm xuống.",
                "Kéo dài thời gian của ngày lao động, còn thời gian lao động cần thiết không thay đổi."
            ],
            "answer": 3,
            "explanation": "Kéo dài thời gian của ngày lao động, còn thời gian lao động cần thiết không thay đổi.",
            "keywords": "Q: Phương pháp sản xuất giá trị thặng dư | A: Kéo dài thời gian của ngày lao động"
        },
        {
            "id": 111,
            "text": "Chọn đáp án KHÔNG đúng. Tỷ suất lợi tức phụ thuộc vào:",
            "options": [
                "Ý chí của người cho vay.",
                "Lợi nhuận bình quân.",
                "Tỷ suất lợi nhuận bình quân.",
                "Yêu cầu bức thiết của người vay."
            ],
            "answer": 1,
            "explanation": "Lợi nhuận bình quân.",
            "keywords": "Q: Chọn đáp án KHÔNG đúng. Tỷ suất lợi | A: Lợi nhuận bình quân"
        },
        {
            "id": 112,
            "text": "Chọn đáp án đúng nhất. Tỷ suất lợi tức thay đổi:",
            "options": [
                "Bằng tỷ suất lợi nhuận bình quân.",
                "Lớn hơn tỷ suất lợi nhuận bình quân.",
                "Lớn hơn không.",
                "Lớn hơn lợi nhuận bình quân."
            ],
            "answer": 2,
            "explanation": "Lớn hơn không.",
            "keywords": "Q: Chọn đáp án đúng nhất. Tỷ suất lợi | A: Lớn hơn không"
        },
        {
            "id": 113,
            "text": "Căn cứ nào để phân chia giá trị thặng dư giữa nhà sản xuất và nhà tư bản thương nghiệp?",
            "options": [
                "Khối lượng giá trị thặng dư.",
                "Tỷ suất giá trị thặng dư.",
                "Tỷ suất lợi nhuận.",
                "Tỷ suất lợi nhuận bình quân."
            ],
            "answer": 3,
            "explanation": "Tỷ suất lợi nhuận bình quân.",
            "keywords": "Q: Căn cứ nào để phân chia giá trị | A: Tỷ suất lợi nhuận bình quân"
        },
        {
            "id": 114,
            "text": "Địa tô tư bản chủ nghĩa là phần còn lại sau khi đã khấu trừ đi:",
            "options": [
                "Lợi nhuận bình quân.",
                "Lợi nhuận.",
                "Lợi nhuận siêu ngạch.",
                "Lợi nhuận độc quyền."
            ],
            "answer": 0,
            "explanation": "Lợi nhuận bình quân.",
            "keywords": "Q: Địa tô tư bản chủ nghĩa là phần | A: Lợi nhuận bình quân"
        },
        {
            "id": 115,
            "text": "Trong chủ nghĩa tư bản, giá cả nông phẩm được xác định theo giá cả của nông phẩm được sản xuất trên:",
            "options": [
                "Đất tốt.",
                "Đất xấu.",
                "Mức trung bình của các loại đất xấu.",
                "Đất trung bình."
            ],
            "answer": 1,
            "explanation": "Đất xấu.",
            "keywords": "Q: Trong chủ nghĩa tư bản, giá cả nông | A: Đất xấu"
        },
        {
            "id": 116,
            "text": "Chọn đáp án KHÔNG đúng. Điều kiện vàng trở thành hàng hoá đặc biệt:",
            "options": [
                "Dễ bảo quản.",
                "Giá trị cao.",
                "Thuần nhất, đồng chất.",
                "Dễ khai thác và sử dụng."
            ],
            "answer": 3,
            "explanation": "Dễ khai thác và sử dụng.",
            "keywords": "Q: Chọn đáp án KHÔNG đúng. Điều kiện vàng | A: Dễ khai thác và sử dụng"
        },
        {
            "id": 117,
            "text": "Điểm giống nhau giữa tích tụ tư bản và tập trung tư bản:",
            "options": [
                "Tăng quy mô tư bản xã hội.",
                "Phản ánh mối quan hệ trực tiếp giữa giai cấp tư sản và giai cấp công nhân.",
                "Phản ánh mối quan hệ gián tiếp giữa giai cấp tư sản và giai cấp công nhân.",
                "Tăng quy mô tư bản cá biệt."
            ],
            "answer": 3,
            "explanation": "Tăng quy mô tư bản cá biệt.",
            "keywords": "Q: Điểm giống nhau giữa tích tụ tư bản | A: Tăng quy mô tư bản cá biệt"
        },
        {
            "id": 118,
            "text": "Chọn đáp án đúng nhất. Địa tô chênh lệch II thu được trên:",
            "options": [
                "Ở ruộng đất có vị trí thuận lợi.",
                "Ruộng đất có độ màu mỡ tốt.",
                "Ruộng đất có độ màu mỡ trung bình.",
                "Ruộng đất đã thâm canh."
            ],
            "answer": 3,
            "explanation": "Ruộng đất đã thâm canh.",
            "keywords": "Q: Chọn đáp án đúng nhất. Địa tô chênh | A: Ruộng đất đã thâm canh"
        },
        {
            "id": 119,
            "text": "Nguyên nhân có địa tô chênh lệch II là do:",
            "options": [
                "Do đầu tư thêm mà có.",
                "Do vị trí thuận lợi của đất.",
                "Do độ màu mỡ tự nhiên của đất.",
                "Do gần nơi tiêu thụ."
            ],
            "answer": 0,
            "explanation": "Do đầu tư thêm mà có.",
            "keywords": "Q: Nguyên nhân có địa tô chênh lệch II | A: Do đầu tư thêm mà có"
        },
        {
            "id": 120,
            "text": "Nhân tố KHÔNG ảnh hưởng đến năng suất lao động là:",
            "options": [
                "Trình độ chuyên môn của người lao động.",
                "Mức độ phức tạp của lao động.",
                "Các điều kiện tự nhiên.",
                "Trình độ kỹ thuật và công nghệ sản xuất."
            ],
            "answer": 1,
            "explanation": "Mức độ phức tạp của lao động.",
            "keywords": "Q: Nhân tố KHÔNG ảnh hưởng đến năng suất | A: Mức độ phức tạp của lao động"
        },
        {
            "id": 121,
            "text": "Loại ruộng đất nào chỉ thu được địa tô tuyệt đối?",
            "options": [
                "Ruộng tốt.",
                "Ruộng xấu.",
                "Ruộng có vị trí thuận lợi.",
                "Ruộng trung bình."
            ],
            "answer": 1,
            "explanation": "Ruộng xấu.",
            "keywords": "Q: Loại ruộng đất nào chỉ thu được địa | A: Ruộng xấu"
        },
        {
            "id": 122,
            "text": "Chọn đáp án đúng nhất về tư bản cho vay trong chủ nghĩa tư bản:",
            "options": [
                "Lợi tức cho vay nhỏ hơn lãi suất ngân hàng.",
                "Người đi vay là người sở hữu tư bản.",
                "Người cho vay là người sử dụng tư bản.",
                "Người cho vay là người sở hữu tư bản."
            ],
            "answer": 3,
            "explanation": "Người cho vay là người sở hữu tư bản.",
            "keywords": "Q: Chọn đáp án đúng nhất về tư bản | A: Người cho vay là người sở hữu tư bản"
        },
        {
            "id": 123,
            "text": "Lợi nhuận bình quân của các ngành khác nhau phụ thuộc vào:",
            "options": [
                "Tư bản ứng trước.",
                "Tỷ suất giá trị thặng dư.",
                "Cấu tạo hữu cơ của tư bản.",
                "Tỷ suất lợi nhuận bình quân."
            ],
            "answer": 0,
            "explanation": "Tư bản ứng trước.",
            "keywords": "Q: Lợi nhuận bình quân của các ngành khác | A: Tư bản ứng trước"
        },
        {
            "id": 124,
            "text": "Chọn đáp án đúng nhất:",
            "options": [
                "Lợi tức nhỏ hơn lợi nhuận bình quân.",
                "Địa tô là một phần của lợi nhuận bình quân.",
                "Lợi nhuận là một phần của địa tô.",
                "Lợi nhuận thương nghiệp bằng lợi nhuận bình quân."
            ],
            "answer": 0,
            "explanation": "Lợi tức nhỏ hơn lợi nhuận bình quân.",
            "keywords": "Q: Chọn đáp án đúng nhất: | A: Lợi tức nhỏ hơn lợi nhuận bình quân"
        },
        {
            "id": 125,
            "text": "Chọn đáp án KHÔNG đúng:",
            "options": [
                "Mọi sản phẩm đều là hàng hoá.",
                "Mọi hàng hoá đều là sản phẩm.",
                "Mọi sản phẩm đều là kết quả của sản xuất.",
                "Không phải mọi sản phẩm đều là hàng hoá."
            ],
            "answer": 0,
            "explanation": "Mọi sản phẩm đều là hàng hoá.",
            "keywords": "Q: Chọn đáp án KHÔNG đúng: | A: Mọi sản phẩm đều là hàng hoá"
        },
        {
            "id": 126,
            "text": "Lợi nhuận bình quân phụ thuộc vào:",
            "options": [
                "Tỷ suất lợi nhuận bình quân.",
                "Tỷ suất lợi nhuận.",
                "Tỷ suất giá trị thặng dư.",
                "Tỷ suất lợi tức."
            ],
            "answer": 0,
            "explanation": "Tỷ suất lợi nhuận bình quân.",
            "keywords": "Q: Lợi nhuận bình quân phụ thuộc vào: | A: Tỷ suất lợi nhuận bình quân"
        },
        {
            "id": 127,
            "text": "Trong đầu tư nước ngoài, lĩnh vực nổi lên hàng đầu là các hoạt động nào?",
            "options": [
                "Bảo hiểm, giáo dục, y tế.",
                "Tài chính, ngân hàng, bảo hiểm.",
                "Du lịch, ngân hàng, y tế.",
                "Hành chính công, giáo dục, y tế."
            ],
            "answer": 1,
            "explanation": "Tài chính, ngân hàng, bảo hiểm.",
            "keywords": "Q: Trong đầu tư nước ngoài, lĩnh vực nổi | A: Tài chính, ngân hàng, bảo hiểm"
        },
        {
            "id": 128,
            "text": "Phương thức sản xuất tư bản chủ nghĩa gồm giai đoạn:",
            "options": [
                "Chủ nghĩa tư bản ngày nay và chủ nghĩa tư bản độc quyền.",
                "Chủ nghĩa tư bản hiện đại và chủ nghĩa tư bản tự do cạnh tranh.",
                "Chủ nghĩa tư bản tự do cạnh tranh và chủ nghĩa tư bản độc quyền.",
                "Chủ nghĩa tư bản hiện đại và chủ nghĩa tư bản độc quyền."
            ],
            "answer": 2,
            "explanation": "Chủ nghĩa tư bản tự do cạnh tranh và chủ nghĩa tư bản độc quyền.",
            "keywords": "Q: Phương thức sản xuất tư bản chủ nghĩa | A: Chủ nghĩa tư bản tự"
        },
        {
            "id": 129,
            "text": "Người đầu tiên đưa ra khái niệm “kinh tế - chính trị” là ai?",
            "options": [
                "Francois Quesney.",
                "Antoine Montchrestien.",
                "Tomas Mun.",
                "William Petty."
            ],
            "answer": 1,
            "explanation": "Antoine Montchrestien.",
            "keywords": "Q: Người đầu tiên đưa ra khái niệm “kinh | A: Antoine Montchrestien"
        },
        {
            "id": 130,
            "text": "Chủ nghĩa tư bản độc quyền xuất hiện vào thời gian nào?",
            "options": [
                "Cuối thế kỷ XVII đầu thế kỷ XVIII.",
                "Cuối thế kỷ XVIII đầu thế kỷ XIX.",
                "Sau chiến tranh thế giới thứ II.",
                "Cuối thế kỷ XIX đầu thế kỷ XX."
            ],
            "answer": 3,
            "explanation": "Cuối thế kỷ XIX đầu thế kỷ XX.",
            "keywords": "Q: Chủ nghĩa tư bản độc quyền xuất hiện | A: Cuối thế kỷ XIX đầu thế kỷ XX"
        },
        {
            "id": 131,
            "text": "Chủ nghĩa tư bản độc quyền là:",
            "options": [
                "Một giai đoạn phát triển của phương thức sản xuất - chủ nghĩa tư bản.",
                "Một phương thức sản xuất mới.",
                "Một hình thái kinh tế- xã hội.",
                "Một nấc thang phát triển của phương thức sản xuất."
            ],
            "answer": 0,
            "explanation": "Một giai đoạn phát triển của phương thức sản xuất - chủ nghĩa tư bản.",
            "keywords": "Q: Chủ nghĩa tư bản độc quyền là: | A: Một giai đoạn phát triển"
        },
        {
            "id": 132,
            "text": "“Tự do cạnh tranh đẻ ra tập trung sản xuất và sự tập trung sản xuất này khi phát triển đến mức độ nhất định, lại dẫn tới độc quyền”. Đây là kết luận của:",
            "options": [
                "C.Mác.",
                "V.I. Lênin.",
                "Ph. Ăng ghen.",
                "D. Ricardo."
            ],
            "answer": 1,
            "explanation": "V.I. Lênin.",
            "keywords": "Q: “Tự do cạnh tranh đẻ ra tập trung | A: V.I. Lênin"
        },
        {
            "id": 133,
            "text": "Sự hình thành các tổ chức độc quyền dựa trên cơ sở nào?",
            "options": [
                "Sản xuất nhỏ phân tán.",
                "Sự xuất hiện các thành tựu mới của khoa học.",
                "Tích tụ tập trung sản xuất và sự ra đời của các xí nghiệp quy mô lớn.",
                "Sự hoàn thiện quan hệ sản xuất tư bản chủ nghĩa."
            ],
            "answer": 2,
            "explanation": "Tích tụ tập trung sản xuất và sự ra đời của các xí nghiệp quy mô lớn.",
            "keywords": "Q: Sự hình thành các tổ chức độc quyền | A: Tích tụ tập trung sản"
        },
        {
            "id": 134,
            "text": "Chọn đáp án KHÔNG đúng:",
            "options": [
                "Tích luỹ cơ bản là sự tiết kiệm tư bản.",
                "Động cơ của tích lỹ tư bản cũng là giá trị thặng dư.",
                "Nguồn gốc của tích luỹ tư bản là giá trị thặng dư.",
                "Tích luỹ tư bản là biến một phần giá trị thặng dư thành tư bản."
            ],
            "answer": 0,
            "explanation": "Tích luỹ cơ bản là sự tiết kiệm tư bản.",
            "keywords": "Q: Chọn đáp án KHÔNG đúng: | A: Tích luỹ cơ bản là sự tiết kiệm tư bản"
        },
        {
            "id": 135,
            "text": "Sự ra đời của tư bản tài chính là kết quả của:",
            "options": [
                "Độc quyền ngân hàng.",
                "Sự phát triển của thị trường tài chính.",
                "Độc quyền công nghiệp.",
                "Quá trình xâm nhập liên kết độc quyền ngân hàng với độc quyền công nghiệp."
            ],
            "answer": 3,
            "explanation": "Quá trình xâm nhập liên kết độc quyền ngân hàng với độc quyền công nghiệp.",
            "keywords": "Q: Sự ra đời của tư bản tài chính | A: Quá trình xâm nhập liên"
        },
        {
            "id": 136,
            "text": "Vai trò mới của ngân hàng trong giai đoạn chủ nghĩa tư bản độc quyền là gì?",
            "options": [
                "Khống chế hoạt động của nền kinh tế tư bản chủ nghĩa.",
                "Đầu tư tư bản.",
                "Trung tâm tín dụng.",
                "Trung tâm thanh toán."
            ],
            "answer": 0,
            "explanation": "Khống chế hoạt động của nền kinh tế tư bản chủ nghĩa.",
            "keywords": "Q: Vai trò mới của ngân hàng trong giai | A: Khống chế hoạt động của"
        },
        {
            "id": 137,
            "text": "Chọn đáp án đúng nhất. Xuất khẩu hàng hoá là đặc điểm của:",
            "options": [
                "Sản xuất hàng hoá giản đơn.",
                "Chủ nghĩa tư bản.",
                "Chủ nghĩa tư bản tự do cạnh tranh.",
                "Chủ nghĩa tư bản độc quyền."
            ],
            "answer": 2,
            "explanation": "Chủ nghĩa tư bản tự do cạnh tranh.",
            "keywords": "Q: Chọn đáp án đúng nhất. Xuất khẩu hàng | A: Chủ nghĩa tư bản tự do cạnh tranh"
        },
        {
            "id": 138,
            "text": "Chọn đáp án đúng nhất. Xuất khẩu hàng hoá là:",
            "options": [
                "Đưa hàng hoá ra nước ngoài.",
                "Xuất khẩu giá trị ra nước ngoài.",
                "Đầu tư trực tiếp nước ngoài.",
                "Đưa hàng hoá ra bán ở nước ngoài để thực hiện giá trị."
            ],
            "answer": 3,
            "explanation": "Đưa hàng hoá ra bán ở nước ngoài để thực hiện giá trị.",
            "keywords": "Q: Chọn đáp án đúng nhất. Xuất khẩu hàng | A: Đưa hàng hoá ra bán"
        },
        {
            "id": 139,
            "text": "Xuất khẩu tư bản là:",
            "options": [
                "Đầu tư trực tiếp ra nước ngoài.",
                "Đầu tư gián tiếp.",
                "Mang hàng hoá ra bán ở nước ngoài để thực hiện giá trị.",
                "Xuất khẩu giá trị ra nước ngoài."
            ],
            "answer": 3,
            "explanation": "Xuất khẩu giá trị ra nước ngoài.",
            "keywords": "Q: Xuất khẩu tư bản là: | A: Xuất khẩu giá trị ra nước ngoài"
        },
        {
            "id": 140,
            "text": "Qui luật cung - cầu tác động với giá trị, giá cả như thế nào?",
            "options": [
                "Quyết định giá trị và giá cả hàng hoá.",
                "Chỉ quyết định đến giá cả và có ảnh hưởng đến giá trị.",
                "Không có ảnh hưởng đến giá trị và giá cả.",
                "Có ảnh hưởng tới giá cả thị trường."
            ],
            "answer": 3,
            "explanation": "Có ảnh hưởng tới giá cả thị trường.",
            "keywords": "Q: Qui luật cung - cầu tác động với | A: Có ảnh hưởng tới giá cả thị trường"
        },
        {
            "id": 141,
            "text": "Xuất khẩu tư bản là đặc điểm của:",
            "options": [
                "Các nước giàu có.",
                "Chủ nghĩa tư bản độc quyền.",
                "Chủ nghĩa tư bản.",
                "Chủ nghĩa tư bản tự do cạnh tranh."
            ],
            "answer": 1,
            "explanation": "Chủ nghĩa tư bản độc quyền.",
            "keywords": "Q: Xuất khẩu tư bản là đặc điểm của: | A: Chủ nghĩa tư bản độc quyền"
        },
        {
            "id": 142,
            "text": "Theo học thuyết của Mác, giá trị của hàng hoá được quyết định bởi:",
            "options": [
                "Sự khan hiếm của hàng hoá.",
                "Lao động trừu tượng của người sản xuất kết tinh trong hàng hoá.",
                "Công dụng của hàng hoá.",
                "Sự hao phí sức lao động của con người."
            ],
            "answer": 1,
            "explanation": "Lao động trừu tượng của người sản xuất kết tinh trong hàng hoá.",
            "keywords": "Q: Theo học thuyết của Mác, giá trị của | A: Lao động trừu tượng của"
        },
        {
            "id": 143,
            "text": "Xuất khẩu hàng hoá phát triển mạnh từ thời kỳ nào?",
            "options": [
                "Cuối thế kỷ XVII.",
                "Thế kỷ XVIII.",
                "Cuối thế kỷ XIX - đầu thế kỷ XX.",
                "Cuối thế kỷ XVIII - thế kỷ XIX."
            ],
            "answer": 3,
            "explanation": "Cuối thế kỷ XVIII - thế kỷ XIX.",
            "keywords": "Q: Xuất khẩu hàng hoá phát triển mạnh từ | A: Cuối thế kỷ XVIII - thế kỷ XIX"
        },
        {
            "id": 144,
            "text": "Chọn đáp án KHÔNG đúng. Xuất khẩu tư bản nhà nước nhằm mục đích:",
            "options": [
                "Văn hóa.",
                "Chính trị.",
                "Quân sự.",
                "Kinh tế."
            ],
            "answer": 0,
            "explanation": "Văn hóa.",
            "keywords": "Q: Chọn đáp án KHÔNG đúng. Xuất khẩu tư | A: Văn hóa"
        },
        {
            "id": 145,
            "text": "Chọn đáp án đúng nhất. Lao động cụ thể là nguồn gốc của:",
            "options": [
                "Của cải trong xã hội.",
                "Giá trị hàng hóa.",
                "Giá trị trao đổi.",
                "Giá trị sức lao động."
            ],
            "answer": 0,
            "explanation": "Của cải trong xã hội.",
            "keywords": "Q: Chọn đáp án đúng nhất. Lao động cụ | A: Của cải trong xã hội"
        },
        {
            "id": 146,
            "text": "Xuất khẩu tư bản tư nhân thường hướng vào ngành:",
            "options": [
                "Vốn chu chuyển nhanh.",
                "Lợi nhuận cao, vốn chu chuyển chậm.",
                "Kết cấu hạ tầng sản xuất, xã hội.",
                "Vốn chu chuyển nhanh, lợi nhuận cao."
            ],
            "answer": 3,
            "explanation": "Vốn chu chuyển nhanh, lợi nhuận cao.",
            "keywords": "Q: Xuất khẩu tư bản tư nhân thường hướng | A: Vốn chu chuyển nhanh, lợi nhuận cao"
        },
        {
            "id": 147,
            "text": "Các tổ chức độc quyền của các quốc gia cạnh tranh trên thị trường quốc tế dẫn đến:",
            "options": [
                "Thôn tính nhau.",
                "Cùng nhau phân chi thị trường thế giới.",
                "Thoả hiệp với nhau cùng khai thác nguồn lực.",
                "Hợp tác với nhau cùng phát triển."
            ],
            "answer": 0,
            "explanation": "Thôn tính nhau.",
            "keywords": "Q: Các tổ chức độc quyền của các quốc | A: Thôn tính nhau"
        },
        {
            "id": 148,
            "text": "Chọn đáp án KHÔNG đúng. Các cường quốc đế quốc xâm chiếm thuộc địa nhằm:",
            "options": [
                "Đảm bảo nguồn nguyên liệu.",
                "Xây dựng chế độ mới, tiến bộ.",
                "Thực hiện mục đích kinh tế, chính trị, quân sự.",
                "Khống chế thị trường."
            ],
            "answer": 1,
            "explanation": "Xây dựng chế độ mới, tiến bộ.",
            "keywords": "Q: Chọn đáp án KHÔNG đúng. Các cường quốc | A: Xây dựng chế độ mới, tiến bộ"
        },
        {
            "id": 149,
            "text": "Việc cạnh tranh giữa các tổ chức độc quyền trong cùng một ngành mang lại kết quả gì?",
            "options": [
                "Một sự thoả hiệp.",
                "Một bên phá sản.",
                "Một sự thoả hiệp hoặc một bên phá sản.",
                "Hai bên cùng phát triển."
            ],
            "answer": 2,
            "explanation": "Một sự thoả hiệp hoặc một bên phá sản.",
            "keywords": "Q: Việc cạnh tranh giữa các tổ chức độc | A: Một sự thoả hiệp hoặc một bên phá sản"
        },
        {
            "id": 150,
            "text": "Trong giai đoạn chủ nghĩa tư bản độc quyền:",
            "options": [
                "Quy luật giá trị không còn hoạt động.",
                "Quy luật giá trị lúc hoạt động, lúc không hoạt động.",
                "Quy luật giá trị hoạt động kém hiệu quả.",
                "Quy luật giá trị vẫn hoạt động."
            ],
            "answer": 3,
            "explanation": "Quy luật giá trị vẫn hoạt động.",
            "keywords": "Q: Trong giai đoạn chủ nghĩa tư bản độc | A: Quy luật giá trị vẫn hoạt động"
        },
        {
            "id": 151,
            "text": "Thuật ngữ “kinh tế - chính trị” được sử dụng lần đầu tiên vào thời gian nào?",
            "options": [
                "Năm 1615.",
                "Năm 1610.",
                "Năm 1618.",
                "Năm 1612."
            ],
            "answer": 0,
            "explanation": "Năm 1615.",
            "keywords": "Q: Thuật ngữ “kinh tế - chính trị” được | A: Năm 1615"
        },
        {
            "id": 152,
            "text": "Giá trị cá biệt của hàng hoá do:",
            "options": [
                "Hao phí lao động cá biệt của người sản xuất quyết định.",
                "Hao phí lao động giản đơn trung bình quyết định.",
                "Hao phí lao động của ngành quyết định.",
                "Hao phí lao động cá biệt của người sản xuất nhiều hàng hoá quyết định."
            ],
            "answer": 0,
            "explanation": "Hao phí lao động cá biệt của người sản xuất quyết định.",
            "keywords": "Q: Giá trị cá biệt của hàng hoá do: | A: Hao phí lao động cá"
        },
        {
            "id": 153,
            "text": "Trong giai đoạn chủ nghĩa tư bản độc quyền, quy luật giá trị thặng dư biểu hiện thành:",
            "options": [
                "Quy luật giá cả độc quyền.",
                "Quy luật lợi nhuận độc quyền cao.",
                "Quy luật lợi nhuận bình quân.",
                "Quy luật giá cả sản xuất."
            ],
            "answer": 1,
            "explanation": "Quy luật lợi nhuận độc quyền cao.",
            "keywords": "Q: Trong giai đoạn chủ nghĩa tư bản độc | A: Quy luật lợi nhuận độc quyền cao"
        },
        {
            "id": 154,
            "text": "Sức lao động trở thành hàng hoá một cách phổ biến trong:",
            "options": [
                "Nền sản xuất hàng hoá giản đơn.",
                "Xã hội chiếm hữu nô lệ.",
                "Nền sản xuất hàng hoá tư bản chủ nghĩa.",
                "Xã hội phong kiến địa chủ."
            ],
            "answer": 2,
            "explanation": "Nền sản xuất hàng hoá tư bản chủ nghĩa.",
            "keywords": "Q: Sức lao động trở thành hàng hoá một | A: Nền sản xuất hàng hoá tư bản chủ nghĩa"
        },
        {
            "id": 155,
            "text": "Nguyên nhân hình thành lợi nhuận độc quyền là gì?",
            "options": [
                "Do cạnh tranh nội bộ ngành.",
                "Do sự thèm khát giá trị thặng dư của các nhà tư bản.",
                "Do địa vị độc quyền đem lại.",
                "Do cạnh tranh không lành mạnh."
            ],
            "answer": 2,
            "explanation": "Do địa vị độc quyền đem lại.",
            "keywords": "Q: Nguyên nhân hình thành lợi nhuận độc quyền | A: Do địa vị độc quyền đem lại"
        },
        {
            "id": 156,
            "text": "Nguồn gốc của lợi nhuận độc quyền cao:",
            "options": [
                "Lao động không công của công nhân trong xí nghiệp độc quyền.",
                "Phần lao động không công của công nhân trong xí nghiệp ngoài độc quyền.",
                "Phần giá trị thặng dư của các xí nghiệp tư bản vừa, nhỏ.",
                "Khả năng điều tiết chi phí đầu vào của sản xuất."
            ],
            "answer": 0,
            "explanation": "Lao động không công của công nhân trong xí nghiệp độc quyền.",
            "keywords": "Q: Nguồn gốc của lợi nhuận độc quyền cao: | A: Lao động không công của"
        },
        {
            "id": 157,
            "text": "Nguyên nhân ra đời của chủ nghĩa tư bản độc quyền nhà nước là gì?",
            "options": [
                "Do mâu thuẫn trong lòng xã hội tư bản chủ nghĩa.",
                "Trình độ xã hội hoá cao của lực lượng sản xuất.",
                "Xu hướng phát triển tất yếu của phương thức sản xuất tư bản.",
                "Các tập đoàn muốn kiểm soát hoạt động của nhà nước."
            ],
            "answer": 1,
            "explanation": "Trình độ xã hội hoá cao của lực lượng sản xuất.",
            "keywords": "Q: Nguyên nhân ra đời của chủ nghĩa tư | A: Trình độ xã hội hoá"
        },
        {
            "id": 158,
            "text": "Nhà nước tư sản đảm nhận đầu tư vào ngành:",
            "options": [
                "Đầu tư lớn, thu hồi vốn nhanh, lợi nhuận ít.",
                "Đầu tư lớn, thu hồi vốn chậm, lợi nhuận cao.",
                "Đầu tư lớn, thu hồi vốn chậm, lợi nhuận ít.",
                "Đầu tư không lớn, thu hồi vốn nhanh, lợi nhuận cao."
            ],
            "answer": 2,
            "explanation": "Đầu tư lớn, thu hồi vốn chậm, lợi nhuận ít.",
            "keywords": "Q: Nhà nước tư sản đảm nhận đầu tư | A: Đầu tư lớn, thu hồi vốn chậm, lợi nhuận ít"
        },
        {
            "id": 159,
            "text": "Để nghiên cứu kinh tế - chính trị Mác-Lênin, phương pháp nào quan trọng nhất?",
            "options": [
                "Mô hình hoá.",
                "Điều tra thống kê.",
                "Trừu tượng hoá khoa học.",
                "Phân tích và tổng hợp."
            ],
            "answer": 2,
            "explanation": "Trừu tượng hoá khoa học.",
            "keywords": "Q: Để nghiên cứu kinh tế - chính trị | A: Trừu tượng hoá khoa học"
        },
        {
            "id": 160,
            "text": "Chọn đáp án đúng nhất. Trong thời kỳ chủ nghĩa tư bản độc quyền:",
            "options": [
                "Mâu thuẫn trên ngày càng sâu sắc hơn.",
                "Mâu thuẫn giữa giai cấp tư sản và vô sản không thay đổi.",
                "Mâu thuẫn trên có phần dịu đi.",
                "Đời sống của giai cấp công nhân và nhân dân lao động dần dần được cải thiện hơn."
            ],
            "answer": 0,
            "explanation": "Mâu thuẫn trên ngày càng sâu sắc hơn.",
            "keywords": "Q: Chọn đáp án đúng nhất. Trong thời kỳ | A: Mâu thuẫn trên ngày càng sâu sắc hơn"
        },
        {
            "id": 161,
            "text": "Đối tượng nghiên cứu của kinh tế - chính trị Mác-Lênin là:",
            "options": [
                "Quan hệ sản xuất trong mối quan hệ tác động qua lại với lực lượng sản xuất và kiến trúc thượng tầng.",
                "Sản xuất của cải vật chất trong nền kinh tế thị trường tự do cạnh tranh.",
                "Quan hệ xã hội giữa người với người trong mối quan hệ tác động qua lại với sản xuất xã hội.",
                "Quá trình sản xuất, phân phối, trao đổi, tiêu dùng."
            ],
            "answer": 0,
            "explanation": "Quan hệ sản xuất trong mối quan hệ tác động qua lại với lực lượng sản xuất và kiến trúc thượng tầng.",
            "keywords": "Q: Đối tượng nghiên cứu của kinh tế - | A: Quan hệ sản xuất trong"
        },
        {
            "id": 162,
            "text": "Bản chất của chủ nghĩa tư bản độc quyền nhà nước là gì?",
            "options": [
                "Nhà nước tư sản can thiệp vào kinh tế, chi phối độc quyền.",
                "Sự kết hợp tổ chức độc quyền tư nhân và nhà nước tư sản.",
                "Các tổ chức độc quyền phụ thuộc vào nhà nước.",
                "Sự thoả hiệp giữa nhà nước và tổ chức độc quyền."
            ],
            "answer": 1,
            "explanation": "Sự kết hợp tổ chức độc quyền tư nhân và nhà nước tư sản.",
            "keywords": "Q: Bản chất của chủ nghĩa tư bản độc | A: Sự kết hợp tổ chức"
        },
        {
            "id": 163,
            "text": "Hình thức xuất khẩu chủ yếu của chủ nghĩa tư bản ngày nay là gì?",
            "options": [
                "Đầu tư trực tiếp.",
                "Đầu tư gián tiếp.",
                "Đầu tư trực tiếp kết hợp đầu tư gián tiếp.",
                "Xuất khẩu tư bản kết hợp xuất khẩu hàng hoá."
            ],
            "answer": 3,
            "explanation": "Xuất khẩu tư bản kết hợp xuất khẩu hàng hoá.",
            "keywords": "Q: Hình thức xuất khẩu chủ yếu của chủ | A: Xuất khẩu tư bản kết hợp xuất khẩu hàng hoá"
        },
        {
            "id": 164,
            "text": "Chọn đáp án KHÔNG đúng. Sự hoạt động của quy luật giá trị được biểu hiện:",
            "options": [
                "Giá cả thị trường xoay xung quanh giá trị cá biệt.",
                "Giá cả thị trường xoay quanh giá cả độc quyền.",
                "Giá cả thị trường xoay quanh giá cả sản xuất.",
                "Giá cả thị trường xoay quanh giá trị xã hội của hàng hoá."
            ],
            "answer": 0,
            "explanation": "Giá cả thị trường xoay xung quanh giá trị cá biệt.",
            "keywords": "Q: Chọn đáp án KHÔNG đúng. Sự hoạt động | A: Giá cả thị trường xoay"
        },
        {
            "id": 165,
            "text": "Nhà kinh điển nghiên cứu sâu về CNTB độc quyền là ai?",
            "options": [
                "C. Mác.",
                "V.I.Lênin.",
                "D. Ricardo.",
                "Ph.Ăng ghen."
            ],
            "answer": 1,
            "explanation": "V.I.Lênin.",
            "keywords": "Q: Nhà kinh điển nghiên cứu sâu về CNTB | A: V.I.Lênin"
        },
        {
            "id": 166,
            "text": "Kinh tế - chính trị Mác-Lênin đã kế thừa và phát triển trực tiếp những thành tựu của:",
            "options": [
                "Chủ nghĩa trọng thương.",
                "Chủ nghĩa trọng nông.",
                "Kinh tế chính trị cổ điển Anh.",
                "Kinh tế - chính trị tầm thường."
            ],
            "answer": 2,
            "explanation": "Kinh tế chính trị cổ điển Anh.",
            "keywords": "Q: Kinh tế - chính trị Mác-Lênin đã kế | A: Kinh tế chính trị cổ điển Anh"
        },
        {
            "id": 167,
            "text": "Trong CNTB độc quyền, cạnh tranh không bị thủ tiêu vì:",
            "options": [
                "Các tổ chức độc quyền cạnh tranh với nhau.",
                "Tổ chức độc quyền cạnh tranh với các công ty ngoài độc quyền.",
                "Cạnh tranh là quy luật khách quan của kinh tế hàng hoá.",
                "Các xí nghiệp trong nội bộ tổ chức độc quyền cạnh tranh với nhau."
            ],
            "answer": 2,
            "explanation": "Cạnh tranh là quy luật khách quan của kinh tế hàng hoá.",
            "keywords": "Q: Trong CNTB độc quyền, cạnh tranh không bị | A: Cạnh tranh là quy luật"
        },
        {
            "id": 168,
            "text": "Chọn đáp án ĐÚNG:",
            "options": [
                "Độc quyền là con đẻ của cạnh tranh, đối lập với cạnh tranh và thủ tiêu cạnh tranh.",
                "Cạnh tranh sinh ra độc quyền, chúng không đối lập nhau.",
                "Độc quyền sinh ra cạnh tranh, chúng không đối lập nhau.",
                "Độc quyền là con đẻ của cạnh tranh, đối lập với cạnh tranh nhưng không thủ tiêu cạnh tranh."
            ],
            "answer": 3,
            "explanation": "Độc quyền là con đẻ của cạnh tranh, đối lập với cạnh tranh nhưng không thủ tiêu cạnh tranh.",
            "keywords": "Q: Chọn đáp án ĐÚNG: | A: Độc quyền là con đẻ của cạnh tranh"
        },
        {
            "id": 169,
            "text": "Trong cơ chế của chủ nghĩa tư bản độc quyền nhà nước thì:",
            "options": [
                "Nhà nước phụ thuộc vào tổ chức độc quyền.",
                "Tổ chức độc quyền phụ thuộc vào nhà nước.",
                "Nhà nước không phụ thuộc vào tổ chức độc quyền.",
                "Nhà nước chi phối tổ chức độc quyền."
            ],
            "answer": 0,
            "explanation": "Nhà nước phụ thuộc vào tổ chức độc quyền.",
            "keywords": "Q: Trong cơ chế của chủ nghĩa tư bản | A: Nhà nước phụ thuộc vào tổ chức độc quyền"
        },
        {
            "id": 170,
            "text": "Chọn đáp án KHÔNG đúng. Nguyên nhân hình thành các công ty xuyên quốc gia là:",
            "options": [
                "Cạnh tranh quốc tế.",
                "Do thị trường tiêu thụ trong nước đã đạt điểm bảo hoà.",
                "Do sự điều tiết của các nước tư bản chủ nghĩa.",
                "Lực lượng sản xuất phát triển cao, xuất hiện quá trình quốc tế hoá kinh tế."
            ],
            "answer": 1,
            "explanation": "Do thị trường tiêu thụ trong nước đã đạt điểm bảo hoà.",
            "keywords": "Q: Chọn đáp án KHÔNG đúng. Nguyên nhân hình | A: Do thị trường tiêu thụ"
        },
        {
            "id": 171,
            "text": "Chọn đáp án KHÔNG đúng. Đặc trưng chủ yếu của kinh tế thị trường:",
            "options": [
                "Các chủ thể kinh tế có tính độc lập, tự chủ cao, giá cả do thị trường quyết định.",
                "Nền kinh tế vận động theo các quy luật của kinh tế thị trường.",
                "Các tập đoàn kinh tế lớn điều tiết thị trường hàng hoá, dịch vụ.",
                "Có sự điều tiết của nhà nước."
            ],
            "answer": 2,
            "explanation": "Các tập đoàn kinh tế lớn điều tiết thị trường hàng hoá, dịch vụ.",
            "keywords": "Q: Chọn đáp án KHÔNG đúng. Đặc trưng chủ | A: Các tập đoàn kinh tế"
        },
        {
            "id": 172,
            "text": "Trong giai đoạn chủ nghĩa tư bản độc quyền quy luật giá trị có biểu hiện mới thành:",
            "options": [
                "Quy luật giá cả độc quyền.",
                "Quy luật giá cả sản xuất.",
                "Quy luật lợi nhuận độc quyền.",
                "Quy luật lợi nhuận bình quân."
            ],
            "answer": 0,
            "explanation": "Quy luật giá cả độc quyền.",
            "keywords": "Q: Trong giai đoạn chủ nghĩa tư bản độc | A: Quy luật giá cả độc quyền"
        },
        {
            "id": 173,
            "text": "Sự khác biệt cơ bản giữa kinh tế thị trường định hướng XHCN với kinh tế thị trường TBCN là gì?",
            "options": [
                "Vai trò chủ đạo của kinh tế nhà nước.",
                "Có sự điều tiết của nhà nước XHCN.",
                "Nền kinh tế nhiều thành phần.",
                "Có nhiều hình thức sở hữu TLSX."
            ],
            "answer": 1,
            "explanation": "Có sự điều tiết của nhà nước XHCN.",
            "keywords": "Q: Sự khác biệt cơ bản giữa kinh tế | A: Có sự điều tiết của nhà nước XHCN"
        },
        {
            "id": 174,
            "text": "Chọn đáp án đúng nhất. Nước ta hiện nay tồn tại nhiều hình thức phân phối thu nhập vì:",
            "options": [
                "Còn tồn tại nhiều thành phần kinh tế và hình thức tổ chức sản xuất kinh doanh.",
                "Còn tồn tại nhiều hình thức sở hữu tư liệu sản xuất.",
                "Do lực lượng sản xuất có nhiều trình độ khác nhau.",
                "Còn tồn tại nhiều kiểu quan hệ sản xuất khác nhau."
            ],
            "answer": 0,
            "explanation": "Còn tồn tại nhiều thành phần kinh tế và hình thức tổ chức sản xuất kinh doanh.",
            "keywords": "Q: Chọn đáp án đúng nhất. Nước ta hiện | A: Còn tồn tại nhiều thành"
        },
        {
            "id": 175,
            "text": "Nguyên tắc phân phối nào là chủ yếu nhất ở nước ta hiện nay?",
            "options": [
                "Phân phối theo vốn hay tài sản.",
                "Phân phối theo kết quả sản xuất kinh doanh.",
                "Phân phối theo lao động.",
                "Phân phối theo giá trị sức lao động."
            ],
            "answer": 2,
            "explanation": "Phân phối theo lao động.",
            "keywords": "Q: Nguyên tắc phân phối nào là chủ yếu | A: Phân phối theo lao động"
        },
        {
            "id": 176,
            "text": "Sự giống nhau giữa kinh tế thị trường TBCN và kinh tế thị trường định hướng XHCN là gì?",
            "options": [
                "Mục đích trực tiếp của nền kinh tế thị trường.",
                "Chế độ công hữu giữ vai trò khác nhau.",
                "Vị trí của nguyên tắc phân phối theo lao động.",
                "Chịu sự tác động của quy luật thị trường."
            ],
            "answer": 3,
            "explanation": "Chịu sự tác động của quy luật thị trường.",
            "keywords": "Q: Sự giống nhau giữa kinh tế thị trường | A: Chịu sự tác động của"
        },
        {
            "id": 177,
            "text": "Sự khác nhau chủ yếu về quản lý của nhà nước trong nền kinh tế thị trường định hướng XHCN và trong nền kinh tế thị trường TBCN là gì?",
            "options": [
                "Mục tiêu phát triển kinh tế - xã hội.",
                "Bản chất của nhà nước.",
                "Các công cụ quản lý vĩ mô.",
                "Vai trò điều tiết nền kinh tế."
            ],
            "answer": 0,
            "explanation": "Mục tiêu phát triển kinh tế - xã hội.",
            "keywords": "Q: Sự khác nhau chủ yếu về quản lý | A: Mục tiêu phát triển kinh tế - xã hội"
        },
        {
            "id": 178,
            "text": "Tỷ suất giá trị thặng dư (m') phản ánh:",
            "options": [
                "Hiệu quả đầu tư của các nhà tư bản.",
                "Trình độ sản xuất giá trị thặng dư của công nhân làm thuê.",
                "Chỉ cho nhà tư bản biết nơi đầu tư có lợi.",
                "Trình độ bóc lột của tư bản đối với công nhân làm thuê."
            ],
            "answer": 3,
            "explanation": "Trình độ bóc lột của tư bản đối với công nhân làm thuê.",
            "keywords": "Q: Tỷ suất giá trị thặng dư (m') phản | A: Trình độ bóc lột của"
        },
        {
            "id": 179,
            "text": "Chọn đáp án đúng nhất. Cơ chế thị trường là:",
            "options": [
                "Cơ chế điều tiết nền kinh tế tự phát.",
                "Cơ chế điều tiết nền kinh tế theo các quy luật của kinh tế thị trường.",
                "Cơ chế điều tiết nền kinh tế theo các quy luật kinh tế.",
                "Cơ chế thị trường do “bàn tay vô hình” chi phối."
            ],
            "answer": 1,
            "explanation": "Cơ chế điều tiết nền kinh tế theo các quy luật của kinh tế thị trường.",
            "keywords": "Q: Chọn đáp án đúng nhất. Cơ chế thị | A: Cơ chế điều tiết nền"
        },
        {
            "id": 180,
            "text": "Chọn đáp án KHÔNG đúng. Giá cả thị trường có chức năng:",
            "options": [
                "Đầu cơ, kiếm lợi.",
                "Thông tin.",
                "Phân bố các nguồn lực kinh tế.",
                "Thúc đẩy tiến bộ khoa học công nghệ."
            ],
            "answer": 0,
            "explanation": "Đầu cơ, kiếm lợi.",
            "keywords": "Q: Chọn đáp án KHÔNG đúng. Giá cả thị | A: Đầu cơ, kiếm lợi"
        },
        {
            "id": 181,
            "text": "Chọn đáp án KHÔNG đúng. Nhà nước ta có chức năng kinh tế:",
            "options": [
                "Đảm bảo ổn định kinh tế - xã hội; tạo lập khuôn khổ pháp luật cho hoạt động kinh tế.",
                "Thúc đẩy tăng trưởng kinh tế nhanh chóng nhằm theo kịp xu thế thời đại.",
                "Hạn chế, khắc phục mặt tiêu cực của cơ chế thị trường.",
                "Định hướng phát triển kinh tế và điều tiết các hoạt động kinh tế làm cho kinh tế tăng trưởng ổn định, hiệu quả."
            ],
            "answer": 1,
            "explanation": "Thúc đẩy tăng trưởng kinh tế nhanh chóng nhằm theo kịp xu thế thời đại.",
            "keywords": "Q: Chọn đáp án KHÔNG đúng. Nhà nước ta | A: Thúc đẩy tăng trưởng kinh"
        },
        {
            "id": 182,
            "text": "Chọn đáp án KHÔNG đúng. Nhà nước Việt Nam hiện nay sử dụng công cụ để điều tiết vĩ mô kinh tế thị trường:",
            "options": [
                "Hệ thống pháp luật.",
                "Lực lượng kinh tế của nhà nước.",
                "Kế hoạch hoá tập trung.",
                "Chính sách tài chính, tiền tệ."
            ],
            "answer": 2,
            "explanation": "Kế hoạch hoá tập trung.",
            "keywords": "Q: Chọn đáp án KHÔNG đúng. Nhà nước Việt | A: Kế hoạch hoá tập trung"
        },
        {
            "id": 183,
            "text": "Sự điều tiết vĩ mô của nhà nước là nhằm:",
            "options": [
                "Hạn chế tác động tích cực của cơ chế thị trường.",
                "Đảm bảo cho nền kinh tế hoạt động kém hiệu quả.",
                "Giúp cho doanh nghiệp tư nhân phát triển.",
                "Phát huy tác động tích cực của cơ chế thị trường."
            ],
            "answer": 3,
            "explanation": "Phát huy tác động tích cực của cơ chế thị trường.",
            "keywords": "Q: Sự điều tiết vĩ mô của nhà nước | A: Phát huy tác động tích"
        },
        {
            "id": 184,
            "text": "Trong nền kinh tế thị trường định hướng XHCN ở Việt Nam, nội dung quản lý kinh tế nhà nước là gì?",
            "options": [
                "Xây dựng mục tiêu, thực hiện kế hoạch, quyết định chiến lược.",
                "Tổ chức thực hiện kế hoạch.",
                "Xây dựng kế hoạch để thực hiện mục tiêu chiến lược.",
                "Quyết định chiến lược phát triển kinh tế, xã hội."
            ],
            "answer": 0,
            "explanation": "Xây dựng mục tiêu, thực hiện kế hoạch, quyết định chiến lược.",
            "keywords": "Q: Trong nền kinh tế thị trường định hướng | A: Xây dựng mục tiêu"
        },
        {
            "id": 185,
            "text": "Chọn đáp án KHÔNG đúng. Công cụ để nhà nước điều tiết hoạt động kinh tế đối ngoại là:",
            "options": [
                "Thuế xuất nhập khẩu.",
                "Thuế giá trị gia tăng.",
                "Tỷ giá hối đoái, hạn ngạch.",
                "Trợ cấp xuất khẩu."
            ],
            "answer": 1,
            "explanation": "Thuế giá trị gia tăng.",
            "keywords": "Q: Chọn đáp án KHÔNG đúng. Công cụ để | A: Thuế giá trị gia tăng"
        },
        {
            "id": 186,
            "text": "Động lực quan trọng nhất của sự phát triển kinh tế là gì?",
            "options": [
                "Lợi ích chính trị xã hội.",
                "Lợi ích văn hoá, tinh thần.",
                "Lợi ích kinh tế.",
                "Lợi ích ngoại giao."
            ],
            "answer": 2,
            "explanation": "Lợi ích kinh tế.",
            "keywords": "Q: Động lực quan trọng nhất của sự phát | A: Lợi ích kinh tế"
        },
        {
            "id": 187,
            "text": "Chọn đáp án đúng nhất. Nhân tố nào quyết định lợi ích kinh tế?",
            "options": [
                "Quan hệ tiêu dùng.",
                "Quan hệ trao đổi.",
                "Quan hệ phân phối.",
                "Quan hệ sở hữu."
            ],
            "answer": 3,
            "explanation": "Quan hệ sở hữu.",
            "keywords": "Q: Chọn đáp án đúng nhất. Nhân tố nào | A: Quan hệ sở hữu"
        },
        {
            "id": 188,
            "text": "Câu nói: “ở đâu không có lợi ích chung, ở đó không có sự thống nhất về mục đích” là của ai?",
            "options": [
                "Ph. Ăng ghen.",
                "C. Mác.",
                "V.I. Lênin.",
                "Hồ Chí Minh."
            ],
            "answer": 0,
            "explanation": "Ph. Ăng ghen.",
            "keywords": "Q: Câu nói: “ở đâu không có lợi ích | A: Ph. Ăng ghen"
        },
        {
            "id": 189,
            "text": "Hệ thống lợi ích kinh tế do yếu tố nào quyết định?",
            "options": [
                "Lực lượng sản xuất.",
                "Quan hệ sản xuất.",
                "Kiến trúc thượng tầng.",
                "Phương thức sản xuất."
            ],
            "answer": 1,
            "explanation": "Quan hệ sản xuất.",
            "keywords": "Q: Hệ thống lợi ích kinh tế do yếu | A: Quan hệ sản xuất"
        },
        {
            "id": 190,
            "text": "Chọn đáp án đúng nhất. Cơ cấu lợi ích nào thuộc thành phần kinh tế nhà nước?",
            "options": [
                "Lợi ích tập thể, lợi ích xã hội, lợi ích cá nhân.",
                "Lợi ích chủ doanh nghiệp, lợi ích cá nhân, lợi ích xã hội.",
                "Lợi ích nhà nước, lợi ích tập thể, lợi ích cá nhân.",
                "Lợi ích doanh nghiệp, lợi ích xã hội, lợi ích cá nhân."
            ],
            "answer": 2,
            "explanation": "Lợi ích nhà nước, lợi ích tập thể, lợi ích cá nhân.",
            "keywords": "Q: Chọn đáp án đúng nhất. Cơ cấu lợi | A: Lợi ích nhà nước"
        },
        {
            "id": 191,
            "text": "Lợi nhuận thương nghiệp có được là do bán hàng hoá với mức giá:",
            "options": [
                "Cao hơn giá trị hàng hóa đó.",
                "Bằng chi phí sản xuất tư bản chủ nghĩa.",
                "Bằng giá trị hàng hóa đó.",
                "Thấp hơn giá trị hàng hóa đó."
            ],
            "answer": 2,
            "explanation": "Bằng giá trị hàng hóa đó.",
            "keywords": "Q: Lợi nhuận thương nghiệp có được là do | A: Bằng giá trị hàng hóa đó"
        },
        {
            "id": 192,
            "text": "Cơ cấu lợi ích trong thành phần kinh tế tập thể là gì?",
            "options": [
                "Lợi ích chủ doanh nghiệp, lợi ích cá nhân, lợi ích xã hội.",
                "Lợi ích cá nhân, lợi ích xã hội, lợi ích tập thể.",
                "Lợi ích doanh nghiệp, lợi ích xã hội, lợi ích cá nhân.",
                "Lợi ích tập thể, lợi ích xã hội, lợi ích cá nhân."
            ],
            "answer": 3,
            "explanation": "Lợi ích tập thể, lợi ích xã hội, lợi ích cá nhân.",
            "keywords": "Q: Cơ cấu lợi ích trong thành phần kinh | A: Lợi ích tập thể"
        },
        {
            "id": 193,
            "text": "Công thức tính giá trị hàng hoá: C + v + m. Chọn đáp án đúng nhất:",
            "options": [
                "Lao động cụ thể bảo toàn và chuyển giá trị tư liệu sản xuất (C) sang sản phẩm.",
                "Lao động trừu tượng tạo ra giá trị mới (v+m).",
                "Lao động trừu tượng tạo nên toàn bộ giá trị (C + v + m).",
                "Lao động trừu tượng chuyển toàn bộ giá trị tư liệu sản xuất (C) sang sản phẩm."
            ],
            "answer": 2,
            "explanation": "Lao động trừu tượng tạo nên toàn bộ giá trị (C + v + m).",
            "keywords": "Q: Công thức tính giá trị hàng hoá: C | A: Lao động trừu tượng tạo"
        },
        {
            "id": 194,
            "text": "Cơ cấu lợi ích trong thành phần kinh tế tư bản tư nhân là gì?",
            "options": [
                "Lợi ích doanh nghiệp, lợi ích xã hội, lợi ích cá nhân.",
                "Lợi ích cá nhân, lợi ích xã hội, lợi ích tập thể.",
                "Lợi ích chủ doanh nghiệp, lợi ích cá nhân, lợi ích xã hội.",
                "Lợi ích nhà nước, lợi ích tập thể, lợi ích cá nhân."
            ],
            "answer": 2,
            "explanation": "Lợi ích chủ doanh nghiệp, lợi ích cá nhân, lợi ích xã hội.",
            "keywords": "Q: Cơ cấu lợi ích trong thành phần kinh | A: Lợi ích chủ doanh nghiệp"
        },
        {
            "id": 195,
            "text": "Cơ cấu lợi ích trong thành phần kinh tế có vốn đầu tư nước ngoài là gì?",
            "options": [
                "Lợi ích nhà nước, lợi ích tập thể, lợi ích cá nhân.",
                "Lợi ích tập thể, lợi ích xã hội, lợi ích cá nhân.",
                "Lợi ích doanh nghiệp, lợi ích xã hội, lợi ích cá nhân.",
                "Lợi ích chủ đầu tư nước ngoài, lợi ích nhà nước, lợi ích người lao động."
            ],
            "answer": 3,
            "explanation": "Lợi ích chủ đầu tư nước ngoài, lợi ích nhà nước, lợi ích người lao động.",
            "keywords": "Q: Cơ cấu lợi ích trong thành phần kinh | A: Lợi ích chủ đầu tư nước ngoài"
        },
        {
            "id": 196,
            "text": "Lao động trừu tượng là nguồn gốc của:",
            "options": [
                "Tính hữu ích của hàng hoá.",
                "Giá trị sử dụng.",
                "Giá trị hàng hoá.",
                "Giá trị mang đi trao đổi."
            ],
            "answer": 2,
            "explanation": "Giá trị hàng hoá.",
            "keywords": "Q: Lao động trừu tượng là nguồn gốc của: | A: Giá trị hàng hoá"
        },
        {
            "id": 197,
            "text": "Quan hệ nào có vai trò quyết định đến phân phối?",
            "options": [
                "Quan hệ sở hữu TLSX.",
                "Quan hệ tổ chức quản lý.",
                "Quan hệ xã hội, đạo đức.",
                "Quan hệ chính trị, xã hội."
            ],
            "answer": 0,
            "explanation": "Quan hệ sở hữu TLSX.",
            "keywords": "Q: Quan hệ nào có vai trò quyết định | A: Quan hệ sở hữu TLSX"
        },
        {
            "id": 198,
            "text": "Yếu tố nào quy định tính lịch sử của quan hệ phân phối?",
            "options": [
                "Phương thức sản xuất.",
                "Lực lượng sản xuất.",
                "Quan hệ sản xuất.",
                "Kiến trúc thượng tầng."
            ],
            "answer": 2,
            "explanation": "Quan hệ sản xuất.",
            "keywords": "Q: Yếu tố nào quy định tính lịch sử | A: Quan hệ sản xuất"
        },
        {
            "id": 199,
            "text": "Chọn đáp án KHÔNG đúng. Trong TKQĐ ở nước ta tồn tại nhiều nguyên tắc phân phối là vì:",
            "options": [
                "Có nhiều hình thức sở hữu TLSX.",
                "Có nhiều thành phần kinh tế.",
                "Có nhiều hình thức kinh doanh.",
                "Có nhiều doanh nghiệp."
            ],
            "answer": 3,
            "explanation": "Có nhiều doanh nghiệp.",
            "keywords": "Q: Chọn đáp án KHÔNG đúng. Trong TKQĐ ở | A: Có nhiều doanh nghiệp"
        },
        {
            "id": 200,
            "text": "Vì sao trong thành phần kinh tế dựa trên sở hữu công cộng phải thực hiện phân phối theo lao động?",
            "options": [
                "Vì mọi người bình đẳng đối với tư liệu sản xuất.",
                "Vì trình độ của lực lượng sản xuất phát triển cao.",
                "Vì không phân biệt các loại lao động.",
                "Vì không phân biệt các loại hình sở hữu."
            ],
            "answer": 0,
            "explanation": "Vì mọi người bình đẳng đối với tư liệu sản xuất.",
            "keywords": "Q: Vì sao trong thành phần kinh tế dựa | A: Vì mọi người bình đẳng"
        },
        {
            "id": 201,
            "text": "Sản xuất hàng hoá xuất hiện dựa trên:",
            "options": [
                "Phân công lao động cá biệt và chế độ tư hữu về tư liệu sản xuất.",
                "Phân công lao động chung và chế độ sở hữu khác nhau về tư liệu sản xuất.",
                "Phân công lao động xã hội và chế độ tư hữu về tư liệu sản xuất.",
                "Phân công lao động và sự tách biệt về kinh tế giữa những người sản xuất."
            ],
            "answer": 2,
            "explanation": "Phân công lao động xã hội và chế độ tư hữu về tư liệu sản xuất.",
            "keywords": "Q: Sản xuất hàng hoá xuất hiện dựa trên: | A: Phân công lao động xã"
        },
        {
            "id": 202,
            "text": "Chọn đáp án KHÔNG đúng. Chất lượng lao động biểu hiện ở:",
            "options": [
                "Cường độ lao động.",
                "Mức độ phức tạp lao động.",
                "Thời gian lao động.",
                "Năng suất lao động."
            ],
            "answer": 1,
            "explanation": "Mức độ phức tạp lao động.",
            "keywords": "Q: Chọn đáp án KHÔNG đúng. Chất lượng lao | A: Mức độ phức tạp lao động"
        },
        {
            "id": 203,
            "text": "Chọn đáp án KHÔNG đúng. Nguyên tắc bình đẳng trong quan hệ kinh tế đối ngoại:",
            "options": [
                "Là quan hệ giữa các quốc gia độc lập có chủ quyền.",
                "Có quyền như nhau trong tự do kinh doanh, tự chủ kinh tế.",
                "Không phân biệt nước giàu, nước nghèo.",
                "Là quan hệ giữa các quốc gia có nền kinh tế phát triển."
            ],
            "answer": 3,
            "explanation": "Là quan hệ giữa các quốc gia có nền kinh tế phát triển.",
            "keywords": "Q: Chọn đáp án KHÔNG đúng. Nguyên tắc bình | A: Là quan hệ giữa các"
        },
        {
            "id": 204,
            "text": "Yếu tố nào không thuộc ngân sách nhà nước?",
            "options": [
                "Doanh thu từ hoạt động kinh doanh của doanh nghiệp.",
                "Các khoản viện trợ và nhà nước vay để bù đắp bội chi.",
                "Các khoản thu từ kinh tế nhà nước.",
                "Các khoản thu từ thuế, phí, lệ phí."
            ],
            "answer": 0,
            "explanation": "Doanh thu từ hoạt động kinh doanh của doanh nghiệp.",
            "keywords": "Q: Yếu tố nào không thuộc ngân sách nhà | A: Doanh thu từ hoạt động"
        },
        {
            "id": 205,
            "text": "Tiêu chí nào đánh giá hiệu quả xây dựng quan hệ sản xuất mới ở nước ta?",
            "options": [
                "Lực lượng sản xuất phát triển, quan hệ sản xuất phát triển vững chắc.",
                "Lực lượng sản xuất phát triển, cải thiện đời sống, thực hiện công bằng xã hội.",
                "Lực lượng sản xuất phát triển, thực hiện công bằng xã hội.",
                "Thúc đẩy lực lượng sản xuất phát triển, cải thiện đời sống."
            ],
            "answer": 1,
            "explanation": "Lực lượng sản xuất phát triển, cải thiện đời sống, thực hiện công bằng xã hội.",
            "keywords": "Q: Tiêu chí nào đánh giá hiệu quả xây | A: Lực lượng sản xuất phát triển"
        },
        {
            "id": 206,
            "text": "Mô hình kinh tế khái quát trong TKQĐ ở nước ta là gì?",
            "options": [
                "Kinh tế thị trường có sự quản lý của nhà nước.",
                "Kinh tế nhiều thành phần theo định hướng XHCN.",
                "Kinh tế thị trường định hướng XHCN.",
                "Kinh tế nhiều thành phần có sự quản lý của nhà nước."
            ],
            "answer": 2,
            "explanation": "Kinh tế thị trường định hướng XHCN.",
            "keywords": "Q: Mô hình kinh tế khái quát trong TKQĐ | A: Kinh tế thị trường định hướng XHCN"
        },
        {
            "id": 207,
            "text": "Chọn đáp án đúng nhất. Chủ trương trong quan hệ quốc tế của Việt Nam là:",
            "options": [
                "Việt Nam sẵn sàng là bạn của các nước trong cộng đồng quốc tế.",
                "Việt Nam muốn là bạn, là đối tác của các nước trong cộng đồng quốc tế.",
                "Việt Nam sẵn sàng là bạn tin cậy của các nước trong cộng đồng quốc tế.",
                "Việt Nam sẵn sàng là bạn, là đối tác tin cậy của các nước trong cộng đồng quốc tế."
            ],
            "answer": 3,
            "explanation": "Việt Nam sẵn sàng là bạn, là đối tác tin cậy của các nước trong cộng đồng quốc tế.",
            "keywords": "Q: Chọn đáp án đúng nhất. Chủ trương trong | A: Việt Nam sẵn sàng là bạn"
        },
        {
            "id": 208,
            "text": "Mối quan hệ giữa nội lực và ngoại lực trong phát triển kinh tế là gì?",
            "options": [
                "Nội lực là chính, ngoại lực là rất quan trọng trong thời kỳ đầu.",
                "Nội lực và ngoại lực có vai trò đóng góp quan trọng như nhau.",
                "Ngoại lực trong thời kỳ đầu là chính để phá vỡ “cái vòng luẩn quẩn”.",
                "Nội lực là chính, không phụ thuộc vào ngoại lực bên ngoài."
            ],
            "answer": 0,
            "explanation": "Nội lực là chính, ngoại lực là rất quan trọng trong thời kỳ đầu.",
            "keywords": "Q: Mối quan hệ giữa nội lực và ngoại | A: Nội lực là chính"
        },
        {
            "id": 209,
            "text": "Phân công lao động xã hội và phân công lao động quốc tế là:",
            "options": [
                "Hai khái niệm giống nhau hoàn toàn.",
                "Hai khái niệm giống nhau về bản chất, khác nhau về phạm vi.",
                "Hai khái niệm khác nhau về nội dung.",
                "Hai khái niệm khác nhau hoàn toàn."
            ],
            "answer": 1,
            "explanation": "Hai khái niệm giống nhau về bản chất, khác nhau về phạm vi.",
            "keywords": "Q: Phân công lao động xã hội và phân | A: Hai khái niệm giống nhau về bản chất"
        },
        {
            "id": 210,
            "text": "Chọn đáp án KHÔNG đúng. Quá trình công nghiệp hoá, hiện đại hoá làm cho cơ cấu lao động chuyển dịch:",
            "options": [
                "Tỷ trọng lao động trí tuệ trong nền kinh tế tăng lên.",
                "Lao động ngành dịch vụ tăng nhanh hơn các ngành sản xuất vật chất.",
                "Lao động nông nghiệp giảm tuyệt đối, lao động công nghiệp tăng tương đối.",
                "Lao động nông nghiệp giảm tuyệt đối và tương đối, lao động công nghiệp tăng tuyệt đối và tương đối."
            ],
            "answer": 2,
            "explanation": "Lao động nông nghiệp giảm tuyệt đối, lao động công nghiệp tăng tương đối.",
            "keywords": "Q: Chọn đáp án KHÔNG đúng. Quá trình công | A: Lao động nông nghiệp giảm tuyệt đối"
        },
        {
            "id": 211,
            "text": "Cơ cấu lợi ích trong thành phần kinh tế tư bản nhà nước là gì?",
            "options": [
                "Lợi ích doanh nghiệp, lợi ích xã hội, lợi ích cá nhân.",
                "Lợi ích nhà nước, lợi ích tập thể, lợi ích cá nhân.",
                "Lợi ích cá nhân, lợi ích xã hội, lợi ích tập thể.",
                "Lợi ích chủ doanh nghiệp, lợi ích xã hội, lợi ích cá nhân."
            ],
            "answer": 1,
            "explanation": "Lợi ích nhà nước, lợi ích tập thể, lợi ích cá nhân.",
            "keywords": "Q: Cơ cấu lợi ích trong thành phần kinh | A: Lợi ích nhà nước"
        },
        {
            "id": 212,
            "text": "Khi nào nền kinh tế được gọi là nền kinh tế tri thức?",
            "options": [
                "Khi các doanh nghiệp sử dụng công nghệ chiếm 75%.",
                "Khi tri thức góp phần tạo ra khoảng 70% thu nhập bình quân.",
                "Khi tổng sản phẩm công nghệ chiếm 70% tổng số sản phẩm.",
                "Khi các ngành kinh tế tri thức chiếm 70% tổng số ngành kinh tế."
            ],
            "answer": 3,
            "explanation": "Khi các ngành kinh tế tri thức chiếm 70% tổng số ngành kinh tế.",
            "keywords": "Q: Khi nào nền kinh tế được gọi là | A: Khi các ngành kinh tế"
        },
        {
            "id": 213,
            "text": "Chọn đáp án đúng nhất. Đảm bảo ổn định về môi trường chính trị, kinh tế xã hội là:",
            "options": [
                "Để thu hút khách du lịch nước ngoài.",
                "Giải pháp chủ yếu nhằm mở rộng, nâng cao hiệu quả kinh tế đối ngoại.",
                "Để phát triển kinh tế có vốn đầu tư nước ngoài và kinh tế tư bản nhà nước.",
                "Điều kiện để thu hút vốn đầu tư nước ngoài."
            ],
            "answer": 1,
            "explanation": "Giải pháp chủ yếu nhằm mở rộng, nâng cao hiệu quả kinh tế đối ngoại.",
            "keywords": "Q: Chọn đáp án đúng nhất. Đảm bảo ổn | A: Giải pháp chủ yếu nhằm mở rộng"
        },
        {
            "id": 214,
            "text": "Nguồn gốc lớn nhất của cách mạng khoa học kỹ thuật ngày này là do:",
            "options": [
                "Sự vơi cạn của tài nguyên thiên nhiên.",
                "Đáp ứng nhu cầu vật chất và tinh thần ngày càng cao của con người.",
                "Giải quyết những đòi hỏi của sản xuất và đời sống.",
                "Giải quyết vấn đề bùng nổ dân số."
            ],
            "answer": 2,
            "explanation": "Giải quyết những đòi hỏi của sản xuất và đời sống.",
            "keywords": "Q: Nguồn gốc lớn nhất của cách mạng khoa | A: Giải quyết những đòi hỏi"
        },
        {
            "id": 215,
            "text": "Điều kiện tất yếu để sức lao động trở thành hàng hoá là gì?",
            "options": [
                "Người lao động tự nguyện đi làm thuê.",
                "Người lao động được tự do thân thể.",
                "Người lao động được tự do thân thể và bị tước hết tư liệu sản xuất.",
                "Người lao động hoàn toàn không có tư liệu sản xuất và của cải gì."
            ],
            "answer": 2,
            "explanation": "Người lao động được tự do thân thể và bị tước hết tư liệu sản xuất.",
            "keywords": "Q: Điều kiện tất yếu để sức lao động | A: Người lao động được tự"
        },
        {
            "id": 216,
            "text": "Đặc điểm khác nhau căn bản giữa cuộc cách mạng khoa học kỹ thuật ngày nay với cuộc cách mạng công nghiệp ở thế kỷ XVIII - XIX là gì?",
            "options": [
                "Mọi phát minh kỹ thuật bắt nguồn từ đòi hỏi cuộc sống.",
                "Mọi phát minh kỹ thuật bắt nguồn từ thực tiễn kinh nghiệm.",
                "Mọi phát minh kỹ thuật dựa trên ngành khoa học cơ bản.",
                "Mọi phát minh kỹ thuật dựa trên các nghiên cứu khoa học."
            ],
            "answer": 3,
            "explanation": "Mọi phát minh kỹ thuật dựa trên các nghiên cứu khoa học.",
            "keywords": "Q: Đặc điểm khác nhau căn bản giữa cuộc | A: Mọi phát minh kỹ thuật"
        },
        {
            "id": 217,
            "text": "Đặc điểm lớn nhất của cuộc cách mạng khoa học kỹ thuật ngày nay là:",
            "options": [
                "Khoa học trở thành lực lượng sản xuất trực tiếp.",
                "Đạt được nhiều thành tựu rực rỡ trên nhiều lĩnh vực.",
                "Đưa loài người bước vào nền văn minh hậu công nghiệp.",
                "Đưa loài người bước vào nền văn minh trí tuệ."
            ],
            "answer": 0,
            "explanation": "Khoa học trở thành lực lượng sản xuất trực tiếp.",
            "keywords": "Q: Đặc điểm lớn nhất của cuộc cách mạng | A: Khoa học trở thành lực"
        },
        {
            "id": 218,
            "text": "Nội dung cơ bản của cách mạng công nghiệp lần thứ nhất là gì?",
            "options": [
                "Chuyển từ lao động thủ công sang nền sản xuất cơ khí – điện.",
                "Chuyển từ lao động thủ công sang giai đoạn tự động hóa cục bộ trong sản xuất.",
                "Chuyển từ lao động thủ công sang lao động sử dụng máy móc.",
                "Cách mạng sinh học và vật liệu mới ra đời."
            ],
            "answer": 2,
            "explanation": "Chuyển từ lao động thủ công sang lao động sử dụng máy móc.",
            "keywords": "Q: Nội dung cơ bản của cách mạng công | A: Chuyển từ lao động thủ"
        },
        {
            "id": 219,
            "text": "Cuộc cách mạng công nghiệp lần thứ nhất diễn ra từ giữa thế kỷ XVII đến giữa thế kỷ XIX khởi phát từ nước nào?",
            "options": [
                "Germany.",
                "The United States of America.",
                "France.",
                "The United Kingdom."
            ],
            "answer": 3,
            "explanation": "The United Kingdom.",
            "keywords": "Q: Cuộc cách mạng công nghiệp lần thứ nhất | A: The United Kingdom"
        },
        {
            "id": 220,
            "text": "Chọn đáp án đúng nhất. Cách mạng công nghiệp lần thứ hai (2.0) diễn ra vào:",
            "options": [
                "Giữa thế kỷ XIX đến đầu thế kỷ XX.",
                "Cuối thế kỷ XIX đến đầu thế kỷ XX.",
                "Những năm đầu thập niên 30 của thế kỷ XIX.",
                "Đầu thế kỷ XIX đến đầu thế kỷ XX."
            ],
            "answer": 0,
            "explanation": "Giữa thế kỷ XIX đến đầu thế kỷ XX.",
            "keywords": "Q: Chọn đáp án đúng nhất. Cách mạng công | A: Giữa thế kỷ XIX đến đầu thế kỷ XX"
        },
        {
            "id": 221,
            "text": "Nội dung cơ bản của cách mạng công nghiệp lần thứ 2 (2.0) là gì?",
            "options": [
                "Chuyển từ lao động thủ công sang lao động sử dụng máy móc.",
                "Chuyển nền sản xuất cơ khí sang nền sản xuất điện – cơ khí.",
                "Chuyển từ lao động thủ công sang giai đoạn tự động hóa cục bộ trong sản xuất.",
                "Sử dụng công nghệ thông tin, tự động hóa sản xuất."
            ],
            "answer": 1,
            "explanation": "Chuyển nền sản xuất cơ khí sang nền sản xuất điện – cơ khí.",
            "keywords": "Q: Nội dung cơ bản của cách mạng công | A: Chuyển nền sản xuất cơ"
        },
        {
            "id": 222,
            "text": "Chọn đáp án đúng nhất. Cách mạng công nghiệp lần thứ ba (3.0) bắt đầu từ khoảng:",
            "options": [
                "Những năm đầu thập niên 50 thế kỷ XX đến cuối thế kỷ XX.",
                "Những năm đầu thập niên 70 thế kỷ XX đến cuối thế kỷ XX.",
                "Những năm đầu thập niên 60 thế kỷ XX đến cuối thế kỷ XX.",
                "Những năm cuối thập niên 50 thế kỷ XX đến cuối thế kỷ XX."
            ],
            "answer": 2,
            "explanation": "Những năm đầu thập niên 60 thế kỷ XX đến cuối thế kỷ XX.",
            "keywords": "Q: Chọn đáp án đúng nhất. Cách mạng công | A: Những năm đầu thập niên"
        },
        {
            "id": 223,
            "text": "Đặc trưng cơ bản của cách mạng công nghiệp lần thứ 3 (3.0) là gì?",
            "options": [
                "Chuyển nền sản xuất cơ khí sang nền sản xuất điện – cơ khí.",
                "Chuyển từ lao động thủ công sang lao động sử dụng máy móc.",
                "Chuyển từ lao động thủ công sang giai đoạn tự động hóa cục bộ trong sản xuất.",
                "Sử dụng công nghệ thông tin, tự động hóa sản xuất."
            ],
            "answer": 3,
            "explanation": "Sử dụng công nghệ thông tin, tự động hóa sản xuất.",
            "keywords": "Q: Đặc trưng cơ bản của cách mạng công | A: Sử dụng công nghệ thông tin"
        },
        {
            "id": 224,
            "text": "Cách mạng công nghiệp lần thứ 4 (4.0) được đề cập đến lần đầu tiên ở đâu? Vào thời gian nào?",
            "options": [
                "Đức, năm 2011.",
                "Pháp, năm 2011.",
                "Anh, năm 2013.",
                "Mỹ, năm 2013."
            ],
            "answer": 0,
            "explanation": "Đức, năm 2011.",
            "keywords": "Q: Cách mạng công nghiệp lần thứ 4 (4.0) | A: Đức, năm 2011"
        },
        {
            "id": 225,
            "text": "Chọn đáp án đúng nhất. Đặc điểm của quy luật kinh tế:",
            "options": [
                "Mang tính khách quan thông qua hoạt động sản xuất của con người.",
                "Khách quan và phát huy thông qua các hoạt động kinh tế.",
                "Mang tính chủ quan thông qua hoạt động kinh tế của con người.",
                "Phát huy tác dụng thông qua hoạt động kinh tế của con người."
            ],
            "answer": 1,
            "explanation": "Khách quan và phát huy thông qua các hoạt động kinh tế.",
            "keywords": "Q: Chọn đáp án đúng nhất. Đặc điểm của | A: Khách quan và phát huy"
        },
        {
            "id": 226,
            "text": "Đặc trưng của cuộc cách mạng công nghiệp lần thứ 4 (4.0) là gì?",
            "options": [
                "Sử dụng công nghệ thông tin và máy tính, để tự động hóa sản xuất.",
                "Liên kết giữa thế giới thực và ảo, để thực hiện công việc thông minh và hiệu quả nhất.",
                "Sử dụng năng lượng nước và hơi nước, để cơ khí hóa sản xuất.",
                "Sử dụng năng lượng điện và động cơ điện, để tạo ra dây chuyền sản xuất hàng loạt."
            ],
            "answer": 1,
            "explanation": "Liên kết giữa thế giới thực và ảo, để thực hiện công việc thông minh và hiệu quả nhất.",
            "keywords": "Q: Đặc trưng của cuộc cách mạng công nghiệp | A: Liên kết giữa thế giới thực và ảo"
        },
        {
            "id": 227,
            "text": "Chọn đáp án KHÔNG đúng về công nghiệp hóa, hiện đại hóa ở Việt Nam:",
            "options": [
                "Từng bước hoàn thiện quan hệ sản xuất phù hợp với trình độ phát triển của lực lượng sản xuất.",
                "Đẩy mạnh ứng dụng những thành tựu khoa học, công nghệ mới, hiện đại.",
                "Chuyển đổi cơ cấu kinh tế theo hướng hiện đại, hợp lý và hiệu quả.",
                "Không đòi hỏi phải phát triển các ngành công nghiệp nhẹ, công nghiệp hàng tiêu dùng."
            ],
            "answer": 3,
            "explanation": "Không đòi hỏi phải phát triển các ngành công nghiệp nhẹ, công nghiệp hàng tiêu dùng.",
            "keywords": "Q: Chọn đáp án KHÔNG đúng về công nghiệp | A: Không đòi hỏi phải phát"
        },
        {
            "id": 228,
            "text": "Chọn đáp án KHÔNG đúng về cách mạng công nghiệp:",
            "options": [
                "Cách mạng công nghiệp dẫn đến sự thay đổi căn bản về phân công lao động nhờ áp dụng những tính năng mới trong kỹ thuật – công nghệ vào đời sống xã hội.",
                "Cách mạng công nghiệp dẫn đến nâng cao năng suất lao động xã hội nhờ áp dụng những phát minh đột phá về kỹ thuật và công nghệ.",
                "Cách mạng công nghiệp là những bước phát triển nhảy vọt về trình độ của lực lượng lao động trên cơ sở những phát minh đột phá về kỹ thuật và công nghệ.",
                "Cách mạng công nghiệp là những bước phát triển nhảy vọt về trình độ của tư liệu lao động trên cơ sở những phát minh đột phá về kỹ thuật và công nghệ."
            ],
            "answer": 0,
            "explanation": "Cách mạng công nghiệp dẫn đến sự thay đổi căn bản về phân công lao động nhờ áp dụng những tính năng mới trong kỹ thuật – công nghệ vào đời sống xã hội.",
            "keywords": "Q: Chọn đáp án KHÔNG đúng về cách mạng | A: Cách mạng công nghiệp dẫn"
        },
        {
            "id": 229,
            "text": "Chọn đáp án đúng nhất về công nghiệp hóa, hiện đại hóa:",
            "options": [
                "Công nghiệp hóa, hiện đại hóa không phải là quy luật phổ biến của sự phát triển lực lượng sản xuất mà mọi quốc gia đều phải trải qua.",
                "Công nghiệp hóa, hiện đại hóa là quá trình chuyển đổi căn bản, toàn diện từ sử dụng sức lao động thủ công là chính sang sử dụng một cách phổ biến sức lao động với công nghệ tiên tiến trên tất cả các lĩnh vực của đời sống.",
                "Công nghiệp hóa, hiện đại hóa ít tạo ra sự phát triển đột biến trong các lĩnh vực hoạt động của con người.",
                "Quá trình chuyển đổi căn bản nền sản xuất xã hội từ dựa trên lao động thủ công là chính sang kết hợp lao động với máy móc, công nghệ hiện đại nhằm tạo ra năng suất lao động xã hội cao."
            ],
            "answer": 1,
            "explanation": "Công nghiệp hóa, hiện đại hóa là quá trình chuyển đổi căn bản, toàn diện từ sử dụng sức lao động thủ công là chính sang sử dụng một cách phổ biến sức lao động với công nghệ tiên tiến trên tất cả các lĩnh vực của đời sống.",
            "keywords": "Q: Chọn đáp án đúng nhất về công nghiệp | A: Công nghiệp hóa"
        },
        {
            "id": 230,
            "text": "Đâu là động lực quan trọng nhất của công nghiệp hoá, hiện đại hoá?",
            "options": [
                "Hiệu quả kinh tế - xã hội.",
                "Khoa học - công nghệ.",
                "Con người.",
                "Mở rộng quan hệ kinh tế quốc tế."
            ],
            "answer": 2,
            "explanation": "Con người.",
            "keywords": "Q: Đâu là động lực quan trọng nhất của | A: Con người"
        },
        {
            "id": 231,
            "text": "Đâu là tiêu chuẩn cơ bản để xác định phương án phát triển, lựa chọn dự án đầu tư và công nghệ trong quá trình công nghiệp hoá, hiện đại hoá?",
            "options": [
                "Nâng cao đời sống nhân dân.",
                "Kết hợp kinh tế với an ninh, quốc phòng.",
                "Tăng năng suất lao động.",
                "Hiệu quả kinh tế - xã hội."
            ],
            "answer": 3,
            "explanation": "Hiệu quả kinh tế - xã hội.",
            "keywords": "Q: Đâu là tiêu chuẩn cơ bản để xác | A: Hiệu quả kinh tế - xã hội"
        },
        {
            "id": 232,
            "text": "Khi lạm phát phi mã xảy ra, hình thức sử dụng tiền có lợi nhất là gì?",
            "options": [
                "Xây dựng nhà ở.",
                "Mua hàng hoá hoặc vàng cất giữ.",
                "Đầu tư vào sản xuất kinh doanh.",
                "Gửi tiết kiệm ngân hàng."
            ],
            "answer": 1,
            "explanation": "Mua hàng hoá hoặc vàng cất giữ.",
            "keywords": "Q: Khi lạm phát phi mã xảy ra, hình | A: Mua hàng hoá hoặc vàng cất giữ"
        },
        {
            "id": 233,
            "text": "Chọn đáp án đúng nhất. Khái niệm nền kinh tế tri thức là:",
            "options": [
                "Nền kinh tế trong đó sự sản sinh ra, phổ cập và sử dụng tri thức giữ vai trò quyết định nhất đối với sự phát triển kinh tế, tạo ra của cải, nâng cao chất lượng cuộc sống.",
                "Nền kinh tế phát triển các ngành công nghệ cao như công nghệ thông tin, công nghệ sinh học… không bao gồm những ngành kinh tế truyền thống.",
                "Nền kinh tế mà giáo dục đóng vai trò quyết định nhất đối với sự phát triển kinh tế, tạo ra của cải, nâng cao chất lượng cuộc sống.",
                "Nền kinh tế chú trọng xây dựng đội ngũ lao động tri thức, tranh thủ sức sản xuất để tạo tiền đề cho sự phát triển của kinh tế."
            ],
            "answer": 0,
            "explanation": "Nền kinh tế trong đó sự sản sinh ra, phổ cập và sử dụng tri thức giữ vai trò quyết định nhất đối với sự phát triển kinh tế, tạo ra của cải, nâng cao chất lượng cuộc sống.",
            "keywords": "Q: Chọn đáp án đúng nhất. Khái niệm nền | A: Nền kinh tế trong đó sự sản sinh ra"
        },
        {
            "id": 234,
            "text": "Chọn đáp án đúng nhất. Tác động tiêu cực của quá trình toàn cầu hóa là gì?",
            "options": [
                "Tăng trưởng kinh tế toàn cầu.",
                "Tăng cường sự hợp tác quốc tế.",
                "Gia tăng khoảng cách giàu nghèo.",
                "Thúc đẩy sản xuất phát triển."
            ],
            "answer": 2,
            "explanation": "Gia tăng khoảng cách giàu nghèo.",
            "keywords": "Q: Chọn đáp án đúng nhất. Tác động tiêu | A: Gia tăng khoảng cách giàu nghèo"
        },
        {
            "id": 235,
            "text": "Tác động tích cực của quá trình toàn cầu hóa là gì?",
            "options": [
                "Thúc đẩy sản xuất phát triển.",
                "Thúc đẩy kinh tế chậm phát triển.",
                "Gia tăng khoảng cách giàu nghèo.",
                "Thúc đẩy tự do hóa thương mại."
            ],
            "answer": 3,
            "explanation": "Thúc đẩy tự do hóa thương mại.",
            "keywords": "Q: Tác động tích cực của quá trình toàn | A: Thúc đẩy tự do hóa thương mại"
        },
        {
            "id": 236,
            "text": "Tiêu cực của quá trình khu vực hóa đòi hỏi các quốc gia phải làm gì?",
            "options": [
                "Tự chủ về kinh tế, quyền lực.",
                "Thúc đẩy kinh tế chậm phát triển.",
                "Tự do hóa thương mại toàn cầu.",
                "Góp phần bảo vệ lợi ích kinh tế."
            ],
            "answer": 0,
            "explanation": "Tự chủ về kinh tế, quyền lực.",
            "keywords": "Q: Tiêu cực của quá trình khu vực hóa | A: Tự chủ về kinh tế, quyền lực"
        },
        {
            "id": 237,
            "text": "Chọn đáp án KHÔNG đúng. Địa tô chênh lệch I thu được trên:",
            "options": [
                "Ruộng đất có độ màu mỡ trung bình.",
                "Ruộng đất tốt.",
                "Ruộng đất được trồng xen kẽ.",
                "Ruộng đất ở vị trí thuận lợi."
            ],
            "answer": 2,
            "explanation": "Ruộng đất được trồng xen kẽ.",
            "keywords": "Q: Chọn đáp án KHÔNG đúng. Địa tô chênh | A: Ruộng đất được trồng xen kẽ"
        },
        {
            "id": 238,
            "text": "Đầu tư nước ngoài trên thế giới hiện nay tập trung chủ yếu vào lĩnh vực nào?",
            "options": [
                "Ngân hàng.",
                "Dịch vụ.",
                "Nông nghiệp.",
                "Công nghiệp."
            ],
            "answer": 1,
            "explanation": "Dịch vụ.",
            "keywords": "Q: Đầu tư nước ngoài trên thế giới hiện | A: Dịch vụ"
        },
        {
            "id": 239,
            "text": "Tổ chức nào hiện nay chi phối tới 95% hoạt động thương mại thế giới?",
            "options": [
                "Liên minh châu Âu.",
                "Hiệp hội các quốc gia Đông Nam Á.",
                "Tổ chức thương mại thế giới.",
                "Hiệp ước tự do thương mại Nam Mĩ."
            ],
            "answer": 2,
            "explanation": "Tổ chức thương mại thế giới.",
            "keywords": "Q: Tổ chức nào hiện nay chi phối tới | A: Tổ chức thương mại thế giới"
        },
        {
            "id": 240,
            "text": "Trình độ xã hội hoá lực lượng sản xuất phát triển cao đặt ra nhiệm vụ cho nhà nước là gì?",
            "options": [
                "Nhà nước chỉ nên can thiệp vào kinh tế đối ngoại.",
                "Nhà nước chỉ nên đóng vai trò “người gác cổng”.",
                "Nhà nước không nên can thiệp vào kinh tế.",
                "Nhà nước can thiệp vào kinh tế với vai trò quản lý chung."
            ],
            "answer": 3,
            "explanation": "Nhà nước can thiệp vào kinh tế với vai trò quản lý chung.",
            "keywords": "Q: Trình độ xã hội hoá lực lượng sản | A: Nhà nước can thiệp vào"
        },
        {
            "id": 241,
            "text": "Vai trò to lớn của Tổ chức thương mại thế giới là gì?",
            "options": [
                "Củng cố thị trường chung Nam Mĩ.",
                "Tăng cường liên kết giữa các khối kinh tế.",
                "Giải quyết xung đột giữa các nước.",
                "Thúc đẩy tự do hóa thương mại."
            ],
            "answer": 3,
            "explanation": "Thúc đẩy tự do hóa thương mại.",
            "keywords": "Q: Vai trò to lớn của Tổ chức thương | A: Thúc đẩy tự do hóa thương mại"
        },
        {
            "id": 242,
            "text": "Chọn đáp án đúng nhất. Chi phí sản xuất tư bản chủ nghĩa là:",
            "options": [
                "Tổng số tiền nhà tư bản ứng ra.",
                "Số tiền nhà tư bản mua máy móc, nguyên vật liệu.",
                "Chi phí tư bản bất biến và khả biến thực sự tính vào sản phẩm trong 1 chu kỳ sản xuất.",
                "Chi phí về tư liệu sản xuất và sức lao động."
            ],
            "answer": 2,
            "explanation": "Chi phí tư bản bất biến và khả biến thực sự tính vào sản phẩm trong 1 chu kỳ sản xuất.",
            "keywords": "Q: Chọn đáp án đúng nhất. Chi phí sản | A: Chi phí tư bản bất"
        },
        {
            "id": 243,
            "text": "Biểu hiện của thị trường tài chính quốc tế được mở rộng là gì?",
            "options": [
                "Triệt tiêu các ngân hàng nhỏ.",
                "Sự kết nối giữa các ngân hàng lớn với nhau.",
                "Nhiều ngân hàng được nối với nhau qua mạng viễn thông điện tử.",
                "Sự sáp nhập cuả các ngân hàng lại với nhau."
            ],
            "answer": 2,
            "explanation": "Nhiều ngân hàng được nối với nhau qua mạng viễn thông điện tử.",
            "keywords": "Q: Biểu hiện của thị trường tài chính quốc | A: Nhiều ngân hàng được nối"
        },
        {
            "id": 244,
            "text": "Chọn đáp án đúng nhất. Toàn cầu hóa và khu vực hóa là xu hướng tất yếu, dẫn đến:",
            "options": [
                "Sự phụ thuộc lẫn nhau giữa các nền kinh tế.",
                "Sự liên kết giữa các nước phát triển với nhau.",
                "Các nước đang phát triển gặp nhiều khó khăn.",
                "Ít phụ thuộc lẫn nhau hơn giữa các nền kinh tế."
            ],
            "answer": 0,
            "explanation": "Sự phụ thuộc lẫn nhau giữa các nền kinh tế.",
            "keywords": "Q: Chọn đáp án đúng nhất. Toàn cầu hóa | A: Sự phụ thuộc lẫn nhau giữa các nền kinh tế"
        },
        {
            "id": 245,
            "text": "Yếu tố nào là đặc điểm của kinh tế tri thức?",
            "options": [
                "Công nghệ chủ yếu thúc đẩy sản xuất phát triển: cơ giới hóa và chuyên môn hóa.",
                "Các quá trình sản xuất chủ yếu: thao tác, điều khiển, kiểm soát.",
                "Trong cơ cấu xã hội, công nhân là chủ yếu.",
                "Trong cơ cấu kinh tế, công nghiệp và dịch vụ là chủ yếu."
            ],
            "answer": 1,
            "explanation": "Các quá trình sản xuất chủ yếu: thao tác, điều khiển, kiểm soát.",
            "keywords": "Q: Yếu tố nào là đặc điểm của kinh | A: Các quá trình sản xuất chủ yếu: thao tác"
        },
        {
            "id": 246,
            "text": "Trong nền kinh tế tri thức, hoạt động chủ yếu nhất là gì?",
            "options": [
                "Phát triển mạnh những ngành có trình độ kĩ thuật và công nghệ cao.",
                "Ưu tiên phát triển công nghệ thông tin, truyền thông da phương tiện.",
                "Tạo ra tri thức, quảng bá và sử dụng tri thức.",
                "Tạo ra các công nghệ mới để nâng cao năng suất lao động."
            ],
            "answer": 2,
            "explanation": "Tạo ra tri thức, quảng bá và sử dụng tri thức.",
            "keywords": "Q: Trong nền kinh tế tri thức, hoạt động | A: Tạo ra tri thức, quảng bá và sử dụng tri thức"
        },
        {
            "id": 247,
            "text": "Để biết được trình độ phát triển kinh tế tri thức của một quốc gia, yếu tố hàng đầu phải xem xét là gì?",
            "options": [
                "Tỉ lệ lao động trong các ngành sản xuất.",
                "Tỉ trọng của khu vực III trong GDP.",
                "GDP bình quân theo đầu người.",
                "Tỉ trọng của kinh tế tri thức trong GDP."
            ],
            "answer": 3,
            "explanation": "Tỉ trọng của kinh tế tri thức trong GDP.",
            "keywords": "Q: Để biết được trình độ phát triển kinh | A: Tỉ trọng của kinh tế tri thức trong GDP"
        },
        {
            "id": 248,
            "text": "Chọn đáp án KHÔNG đúng:",
            "options": [
                "Giá trị là cơ sở của giá cả, là yếu tố quyết định giá cả.",
                "Giá trị phụ thuộc cung - cầu hàng hóa.",
                "Giá cả thị trường chịu ảnh hưởng của cung - cầu.",
                "Giá cả là hình thức biểu hiện bằng tiền của giá trị."
            ],
            "answer": 1,
            "explanation": "Giá trị phụ thuộc cung - cầu hàng hóa.",
            "keywords": "Q: Chọn đáp án KHÔNG đúng: | A: Giá trị phụ thuộc cung - cầu hàng hóa"
        },
        {
            "id": 249,
            "text": "Chọn đáp án ĐÚNG nhất. Công nghiệp hóa là:",
            "options": [
                "Quá trình đưa máy móc vào lĩnh vực nông nghiệp nhằm tạo ra năng suất lao động cao và tăng sản lượng nông nghiệp một cách vượt bậc.",
                "Quá trình chuyển đổi căn bản, toàn diện nền sản xuất xã hội từ dựa trên lao động thủ công là chính sang kết hợp lao động với máy móc, công nghệ hiện đại nhằm tạo ra năng suất lao động xã hội cao.",
                "Quá trình chuyển đổi nền sản xuất xã hội từ dựa trên lao động thủ công là chính sang nền sản xuất xã hội dựa chủ yếu trên lao động bằng máy móc nhằm tạo ra năng suất lao động xã hội cao.",
                "Quá trình chuyển đổi nền sản xuất từ dựa trên lao động thủ công là chính sang nền sản xuất dựa chủ yếu trên công nghệ nhằm tạo ra năng suất lao động xã hội cao."
            ],
            "answer": 1,
            "explanation": "Quá trình chuyển đổi căn bản, toàn diện nền sản xuất xã hội từ dựa trên lao động thủ công là chính sang kết hợp lao động với máy móc, công nghệ hiện đại nhằm tạo ra năng suất lao động xã hội cao.",
            "keywords": "Q: Chọn đáp án ĐÚNG nhất. Công nghiệp hóa | A: Quá trình chuyển đổi căn bản"
        },
        {
            "id": 250,
            "text": "Người đầu tiên đặt nền móng cho kinh tế chính trị cổ điển Anh là ai?",
            "options": [
                "William Petty",
                "David Ricardo",
                "Adam Smith",
                "Antoine Montchrestien."
            ],
            "answer": 0,
            "explanation": "William Petty",
            "keywords": "Q: Người đầu tiên đặt nền móng cho kinh | A: William Petty"
        },
        {
            "id": 251,
            "text": "Hàng hoá có:",
            "options": [
                "Hai thuộc tính (giá trị sử dụng; giá trị trao đổi).",
                "Hai thuộc tính (giá trị sử dụng; giá trị).",
                "Hai thuộc tính (giá trị trao đổi; giá trị).",
                "Ba thuộc tính (giá trị sử dụng; giá trị trao đổi; giá trị)."
            ],
            "answer": 1,
            "explanation": "Hai thuộc tính (giá trị sử dụng; giá trị).",
            "keywords": "Q: Hàng hoá có: | A: Hai thuộc tính (giá trị sử dụng; giá trị)"
        },
        {
            "id": 252,
            "text": "Chọn đáp án KHÔNG đúng. Điều kiện vật phẩm trở thành hàng hoá là:",
            "options": [
                "Có kết tinh sức lao động.",
                "Thoã mãn nhu cầu con người.",
                "Có một loại hình thái cụ thể.",
                "Có trao đổi; mua, bán."
            ],
            "answer": 2,
            "explanation": "Có một loại hình thái cụ thể.",
            "keywords": "Q: Chọn đáp án KHÔNG đúng. Điều kiện vật | A: Có một loại hình thái cụ thể"
        },
        {
            "id": 253,
            "text": "Tập trung tư bản:",
            "options": [
                "Là sự tư bản hóa giá trị thặng dư.",
                "Kết quả trực tiếp của tích lũy tư bản.",
                "Không làm cho tư bản xã hội tăng.",
                "Làm cho tư bản cá biệt tăng nhanh."
            ],
            "answer": 2,
            "explanation": "Không làm cho tư bản xã hội tăng.",
            "keywords": "Q: Tập trung tư bản: | A: Không làm cho tư bản xã hội tăng"
        },
        {
            "id": 254,
            "text": "Lịch sử hình thành Tiền tệ trải qua mấy hình thái của giá trị?",
            "options": [
                "Bốn hình thái.",
                "Ba hình thái.",
                "Hai hình thái.",
                "Năm hình thái."
            ],
            "answer": 0,
            "explanation": "Bốn hình thái.",
            "keywords": "Q: Lịch sử hình thành Tiền tệ trải qua | A: Bốn hình thái"
        },
        {
            "id": 255,
            "text": "Theo học thuyết của Mác, lượng giá trị xã hội của hàng hoá được quyết định bởi:",
            "options": [
                "Hao phí vật tư kỹ thuật.",
                "Hao phí lao động cần thiết của người sản xuất hàng hoá.",
                "Hao phí lao động xã hội cần thiết.",
                "Hao phí lao động sống của người sản xuất hàng hoá."
            ],
            "answer": 2,
            "explanation": "Hao phí lao động xã hội cần thiết.",
            "keywords": "Q: Theo học thuyết của Mác, lượng giá trị | A: Hao phí lao động xã hội cần thiết"
        },
        {
            "id": 256,
            "text": "Quyền sử dụng đất, thương hiệu, bản quyền,… là hàng hoá đặc biệt, tính đặc biệt thể hiện ở:",
            "options": [
                "Có giá trị sỡ hữu.",
                "Có trao đổi, mua bán.",
                "Không do hao phí lao động trực tiếp tạo ra.",
                "Chỉ được phép sử dụng, không được mua bán."
            ],
            "answer": 2,
            "explanation": "Không do hao phí lao động trực tiếp tạo ra.",
            "keywords": "Q: Quyền sử dụng đất, thương hiệu, bản quyền,… | A: Không do hao phí lao động trực tiếp tạo ra"
        },
        {
            "id": 257,
            "text": "Học thuyết kinh tế nào của C.Mác được coi là hòn đá tảng?",
            "options": [
                "Học thuyết giá trị lao động.",
                "Học thuyết tích luỹ tư sản.",
                "Học thuyết tái sản xuất tư bản xã hội.",
                "Học thuyết giá trị thặng dư."
            ],
            "answer": 3,
            "explanation": "Học thuyết giá trị thặng dư.",
            "keywords": "Q: Học thuyết kinh tế nào của C.Mác được | A: Học thuyết giá trị thặng dư"
        },
        {
            "id": 258,
            "text": "Tăng NSLĐ, yếu tố nào sau đây không thay đổi?",
            "options": [
                "Giá trị hàng hoá.",
                "Giá trị trao đổi.",
                "Tổng số giá trị sử dụng.",
                "Tổng doanh số 1 lô hàng."
            ],
            "answer": 3,
            "explanation": "Tổng doanh số 1 lô hàng.",
            "keywords": "Q: Tăng NSLĐ, yếu tố nào sau đây không | A: Tổng doanh số 1 lô hàng"
        },
        {
            "id": 259,
            "text": "Hoạt động nào của con người được coi là cơ bản nhất và là cơ sở của đời sống xã hội?",
            "options": [
                "Hoạt động sản xuất của cải vật chất.",
                "Hoạt động nghệ thuật, thể thao.",
                "Hoạt động chính trị.",
                "Hoạt động khoa học."
            ],
            "answer": 0,
            "explanation": "Hoạt động sản xuất của cải vật chất.",
            "keywords": "Q: Hoạt động nào của con người được coi | A: Hoạt động sản xuất của cải vật chất"
        },
        {
            "id": 260,
            "text": "Theo khái niệm, Kinh tế thị trường là:",
            "options": [
                "Nơi các chủ thể trao đổi, mua bán hàng hoá với nhau và chịu sự chi phối bởi các quy luật khách quan.",
                "Là nền kinh tế hàng hoá phát triển cao, ở đó mọi quan hệ sản xuất chịu sự điều tiết của các quy luật khách quan.",
                "Là nền kinh tế hàng hoá phát triển cao, ở đó mọi quan hệ sản xuất chịu sự điều tiết của các quy luật chủ quan.",
                "Là nơi sản sinh tín hiệu cho các doanh nghiệp kinh doanh và sản xuất H cung ứng nhu cầu cho người tiêu dùng."
            ],
            "answer": 1,
            "explanation": "Là nền kinh tế hàng hoá phát triển cao, ở đó mọi quan hệ sản xuất chịu sự điều tiết của các quy luật khách quan.",
            "keywords": "Q: Theo khái niệm, Kinh tế thị trường là: | A: Là nền kinh tế hàng hoá phát triển cao"
        },
        {
            "id": 261,
            "text": "Phân công lao động xã hội thể hiện:",
            "options": [
                "Sự phát triển của lực lượng sản xuất.",
                "Sự phát triển của quan hệ sản xuất.",
                "Sự phát triển của lực lượng sản xuất và quan hệ sản xuất.",
                "Sự phát triển của lực lượng sản xuất phù hợp với sự phát triển của quan hệ sản xuất."
            ],
            "answer": 0,
            "explanation": "Sự phát triển của lực lượng sản xuất.",
            "keywords": "Q: Phân công lao động xã hội thể hiện: | A: Sự phát triển của lực lượng sản xuất"
        },
        {
            "id": 262,
            "text": "Người kế thừa đầu tiên KTCT tư sản cổ điển của trường phái trọng nông và trọng thương là ai?",
            "options": [
                "David Ricardo.",
                "Adam Smith.",
                "Antoine Montchrestien.",
                "Karl Marx."
            ],
            "answer": 1,
            "explanation": "Adam Smith.",
            "keywords": "Q: Người kế thừa đầu tiên KTCT tư sản | A: Adam Smith"
        },
        {
            "id": 263,
            "text": "Luận điểm: \"dân số tăng theo cấp số nhân, của cải tăng theo cấp số cộng\", là của ai?",
            "options": [
                "Adam Smith.",
                "John Maynard Keynes.",
                "Thomas Malthus.",
                "David Ricardo."
            ],
            "answer": 2,
            "explanation": "Thomas Malthus.",
            "keywords": "Q: Luận điểm: \"dân số tăng theo cấp số | A: Thomas Malthus"
        },
        {
            "id": 264,
            "text": "Đại diện cho trường phái kinh tế chính trị tầm thường là ai?",
            "options": [
                "John Maynard Keynes.",
                "Thomas Malthus.",
                "Alfred Marshall.",
                "John Stuart Mill."
            ],
            "answer": 2,
            "explanation": "Alfred Marshall.",
            "keywords": "Q: Đại diện cho trường phái kinh tế chính | A: Alfred Marshall"
        },
        {
            "id": 265,
            "text": "Ai là người được coi là nhà kinh tế chính trị thời kỳ công trường thủ công?",
            "options": [
                "Adam Smith.",
                "David Ricardo.",
                "William Petty.",
                "Thomas Malthus."
            ],
            "answer": 2,
            "explanation": "William Petty.",
            "keywords": "Q: Ai là người được coi là nhà kinh | A: William Petty"
        },
        {
            "id": 266,
            "text": "Trong thời đại ngày nay, lực lượng sản xuất bao gồm các yếu tố nào?",
            "options": [
                "Người lao động; khoa học và công nghệ.",
                "Con người; tư liệu sản xuất; công cụ lao động.",
                "Con người; khoa học công nghệ; tư liệu sản xuất.",
                "Người lao động; tư liệu sản xuất; khoa học công nghệ."
            ],
            "answer": 3,
            "explanation": "Người lao động; tư liệu sản xuất; khoa học công nghệ.",
            "keywords": "Q: Trong thời đại ngày nay, lực lượng sản | A: Người lao động; tư liệu"
        },
        {
            "id": 267,
            "text": "Lực lượng sản xuất hàng đầu của xã hội hiện đại là:",
            "options": [
                "Đội ngũ công nhân và nông dân tập thể.",
                "Đội ngũ tri thức.",
                "Người lao động.",
                "Máy móc và thiết bị hiện đại."
            ],
            "answer": 1,
            "explanation": "Đội ngũ tri thức.",
            "keywords": "Q: Lực lượng sản xuất hàng đầu của xã | A: Đội ngũ tri thức"
        },
        {
            "id": 268,
            "text": "Nội dung nào không phải là đặc trưng của cách mạng khoa học - kỹ thuật?",
            "options": [
                "Phổ biến nền sản xuất cơ khí trong các quy trình lao động cơ bản.",
                "Khoa học trở thành lực lượng sản xuất vật chất trực tiếp.",
                "Thời gian để phát minh mới ra đời thay thế phát minh cũ ngày càng rút ngắn, phạm vi ảnh hưởng ngày càng rộng hơn.",
                "Vai trò hàng đầu của yếu tố con người trong hệ thống lực lượng sản xuất dựa trên các ngành công nghệ cao."
            ],
            "answer": 0,
            "explanation": "Phổ biến nền sản xuất cơ khí trong các quy trình lao động cơ bản.",
            "keywords": "Q: Nội dung nào không phải là đặc trưng | A: Phổ biến nền sản xuất"
        },
        {
            "id": 269,
            "text": "Nhiệm vụ của kinh tế chính trị Mác - Lênin?",
            "options": [
                "Tìm ra các quy luật kinh tế nhằm đạt được hiệu quả mong muốn.",
                "Tìm ra các quy luật kinh tế và sự tác động của chúng nhằm ứng dụng một cách có hiệu quả trong thực tiễn.",
                "Tìm ra bản chất của lực lượng sản xuất.",
                "Tìm ra bản chất của quan hệ sản xuất."
            ],
            "answer": 1,
            "explanation": "Tìm ra các quy luật kinh tế và sự tác động của chúng nhằm ứng dụng một cách có hiệu quả trong thực tiễn.",
            "keywords": "Q: Nhiệm vụ của kinh tế chính trị Mác | A: Tìm ra các quy luật"
        },
        {
            "id": 270,
            "text": "Thế nào là phương thức sản xuất xã hội?",
            "options": [
                "Sự kết hợp biện chứng giữa TLSX với QHSX.",
                "Sự kết hợp biện chứng giữa LLSX với QHSX.",
                "Sự kết hợp giữa LLSX với người lao động.",
                "Sự kết hợp giữa lực lượng lao động với QHSX."
            ],
            "answer": 1,
            "explanation": "Sự kết hợp biện chứng giữa LLSX với QHSX.",
            "keywords": "Q: Thế nào là phương thức sản xuất xã | A: Sự kết hợp biện chứng giữa LLSX với QHSX"
        },
        {
            "id": 271,
            "text": "Quy luật kinh tế được hiểu như thế nào?",
            "options": [
                "Những hiện tượng và quá trình kinh tế lặp đi, lặp lại trên thị trường.",
                "Quá trình sản xuất được lặp đi, lặp lại và đổi mới không ngừng.",
                "Những mối liên hệ bản chất, bền vững và lặp lại của các hiện tượng và quá trình kinh tế",
                "Những hoạt động kinh tế của con người diễn ra lặp đi, lặp lại."
            ],
            "answer": 2,
            "explanation": "Những mối liên hệ bản chất, bền vững và lặp lại của các hiện tượng và quá trình kinh tế",
            "keywords": "Q: Quy luật kinh tế được hiểu như thế | A: Những mối liên hệ bản chất"
        },
        {
            "id": 272,
            "text": "Phương tiện thông tin nào không phải là sản phẩm của thời đại cách mạng khoa học - kỹ thuật?",
            "options": [
                "Truyền thông bằng điện thoại, điện tín.",
                "Liên lạc vô tuyến, điện tử và vi điện tử.",
                "Hạ tầng cơ sở thông tin quốc gia, khu vực và toàn cầu.",
                "Mạng internet."
            ],
            "answer": 0,
            "explanation": "Truyền thông bằng điện thoại, điện tín.",
            "keywords": "Q: Phương tiện thông tin nào không phải là | A: Truyền thông bằng điện thoại, điện tín"
        },
        {
            "id": 273,
            "text": "Quá trình làm tăng quy mô của nền kinh tế dựa vào đổi mới chất lượng công nghệ sản xuất được gọi là tái sản xuất:",
            "options": [
                "Mở rộng.",
                "Mở rộng theo chiều rộng.",
                "Mở rộng theo chiều sâu.",
                "Giản đơn."
            ],
            "answer": 2,
            "explanation": "Mở rộng theo chiều sâu.",
            "keywords": "Q: Quá trình làm tăng quy mô của nền | A: Mở rộng theo chiều sâu"
        },
        {
            "id": 274,
            "text": "Thước đo hợp lý nhất cho biết mức sống của mỗi người dân một nước là:",
            "options": [
                "GDP thực tế bình quân đầu người.",
                "GNP thực tế bình quân đầu người.",
                "GNP danh nghĩa bình quân đầu người.",
                "GDP danh nghĩa bình quân đầu người."
            ],
            "answer": 0,
            "explanation": "GDP thực tế bình quân đầu người.",
            "keywords": "Q: Thước đo hợp lý nhất cho biết mức | A: GDP thực tế bình quân đầu người"
        },
        {
            "id": 275,
            "text": "Quặng sắt là một ví dụ về:",
            "options": [
                "Nguồn lực công nghệ.",
                "Tư bản hiện vật.",
                "Tài nguyên thiên nhiên có thể tái tạo được.",
                "Tài nguyên thiên nhiên không thể tái tạo được."
            ],
            "answer": 3,
            "explanation": "Tài nguyên thiên nhiên không thể tái tạo được.",
            "keywords": "Q: Quặng sắt là một ví dụ về: | A: Tài nguyên thiên nhiên không thể tái tạo được"
        },
        {
            "id": 276,
            "text": "Yếu tố nào sau đây không được xác định là bộ phận biểu hiện của giá trị hàng hóa?",
            "options": [
                "Tiền mua nguyên vật liệu để sản xuất.",
                "Tiền thuế nộp nhà nước.",
                "Lợi nhuận của doanh nghiệp sau bán hàng.",
                "Tiền công trả cho người lao động."
            ],
            "answer": 1,
            "explanation": "Tiền thuế nộp nhà nước.",
            "keywords": "Q: Yếu tố nào sau đây không được xác | A: Tiền thuế nộp nhà nước"
        },
        {
            "id": 277,
            "text": "Nhà tư bản kinh doanh nông nghiệp trên ruộng đất xấu và gần thị trường phải nộp địa tô gì?",
            "options": [
                "Địa tô tuyệt đối và địa tô chênh lệch.",
                "Địa tô chênh lệch I và địa tô chênh lệch II.",
                "Địa tô tuyệt đối và địa tô chênh lệch I.",
                "Địa tô tuyệt đối và địa tô chênh lệch II."
            ],
            "answer": 2,
            "explanation": "Địa tô tuyệt đối và địa tô chênh lệch I.",
            "keywords": "Q: Nhà tư bản kinh doanh nông nghiệp trên | A: Địa tô tuyệt đối và địa tô chênh lệch I"
        },
        {
            "id": 278,
            "text": "Ý nghĩa của việc nghiên cứu lý luận địa tô tư bản chủ nghĩa:",
            "options": [
                "Vạch ra mối liên hệ giữa tư bản và lao động.",
                "Vạch rõ phương thức bóc lột của nhà tư bản trong lĩnh vực nông nghiệp.",
                "Giải thích bản chất của nền nông nghiệp và các phương thức kinh doanh nông nhiệp trong chế độ tư bản chủ nghĩa.",
                "Giải thích bản chất của QHSX tư bản chủ nghĩa trong nông nghiệp."
            ],
            "answer": 2,
            "explanation": "Giải thích bản chất của nền nông nghiệp và các phương thức kinh doanh nông nhiệp trong chế độ tư bản chủ nghĩa.",
            "keywords": "Q: Ý nghĩa của việc nghiên cứu lý luận | A: Giải thích bản chất của"
        },
        {
            "id": 279,
            "text": "Sự thay thế phương thức sản xuất TBCN và sự ra đời của phương thức sản xuất CSCN là khách quan. Điều đó bắt nguồn từ yêu cầu của:",
            "options": [
                "Quy luật QHSX phải phù hợp với tính chất và trình độ phát triển của LLSX.",
                "Quy luật giá trị thặng dư trong CNTB độc quyền.",
                "Quy luật cơ sở kinh tế phải phù hợp với tính chất và trình độ phát triển của kiến trúc thượng tầng.",
                "Mâu thuẫn kinh tế cơ bản giữa giai cấp công nhân và giai cấp tư bản trong CNTB."
            ],
            "answer": 0,
            "explanation": "Quy luật QHSX phải phù hợp với tính chất và trình độ phát triển của LLSX.",
            "keywords": "Q: Sự thay thế phương thức sản xuất TBCN | A: Quy luật QHSX phải phù"
        },
        {
            "id": 280,
            "text": "Mục đích cuối cùng của chủ sản xuất hàng hóa là gì?",
            "options": [
                "Lợi nhuận tối đa.",
                "Đáp ứng tốt nhu cầu người tiêu dùng.",
                "Phát triển kinh tế.",
                "Lợi nhuận ròng tối đa."
            ],
            "answer": 0,
            "explanation": "Lợi nhuận tối đa.",
            "keywords": "Q: Mục đích cuối cùng của chủ sản xuất | A: Lợi nhuận tối đa"
        },
        {
            "id": 281,
            "text": "Phương pháp chung trong nghiên cứu khoa học Kinh tế chính trị Mác - Lênin là gì?",
            "options": [
                "Phương pháp duy vật lịch sử.",
                "Phương pháp trừu tượng hóa.",
                "Phương pháp duy vật biện chứng.",
                "Phương pháp biện chứng."
            ],
            "answer": 2,
            "explanation": "Phương pháp duy vật biện chứng.",
            "keywords": "Q: Phương pháp chung trong nghiên cứu khoa học | A: Phương pháp duy vật biện chứng"
        },
        {
            "id": 282,
            "text": "Phương pháp trừu tượng hóa do nhà khoa học nào đề ra?",
            "options": [
                "Adam Smith.",
                "David Ricardo.",
                "Karl Marx.",
                "William Petty."
            ],
            "answer": 2,
            "explanation": "Karl Marx.",
            "keywords": "Q: Phương pháp trừu tượng hóa do nhà khoa | A: Karl Marx"
        },
        {
            "id": 283,
            "text": "Thời gian lao động xã hội cần thiết để sản xuất hàng hóa là:",
            "options": [
                "Thời gian trung bình xã hội để sản xuất hàng hóa.",
                "Thời gian cần thiết để sản xuất ra 1 hàng hóa trong điều kiện trung bình của xã hội.",
                "Thời gian lao động trung bình của từng người sản xuất xã hội.",
                "Thời gian lao động hao phí trung bình của mỗi chủ thể trong việc sản xuất ra 1 hàng hóa."
            ],
            "answer": 1,
            "explanation": "Thời gian cần thiết để sản xuất ra 1 hàng hóa trong điều kiện trung bình của xã hội.",
            "keywords": "Q: Thời gian lao động xã hội cần thiết | A: Thời gian cần thiết để"
        },
        {
            "id": 284,
            "text": "Nguyên nhân có địa tô chênh lệch là do:",
            "options": [
                "Cấu tạo hữu cơ của tư bản nông nghiệp thấp hơn công nghiệp.",
                "Độc quyền tư hữu ruộng đất trong sản xuất nông nghiệp.",
                "Điều kiện tự nhiên thuận lợi ban tặng.",
                "Độc quyền kinh doanh ruộng đất trong sản xuất nông nghiệp."
            ],
            "answer": 2,
            "explanation": "Điều kiện tự nhiên thuận lợi ban tặng.",
            "keywords": "Q: Nguyên nhân có địa tô chênh lệch là | A: Điều kiện tự nhiên thuận lợi ban tặng"
        },
        {
            "id": 285,
            "text": "Thời gian lao động cá biệt là:",
            "options": [
                "Thời gian trung bình xã hội để sản xuất hàng hóa.",
                "Hao phí lao động của mỗi chủ thể sản xuất hàng hóa.",
                "Hao phí lao động được xã hội thừa nhận.",
                "Thời gian lao động của từng người sản xuất."
            ],
            "answer": 1,
            "explanation": "Hao phí lao động của mỗi chủ thể sản xuất hàng hóa.",
            "keywords": "Q: Thời gian lao động cá biệt là: | A: Hao phí lao động của"
        },
        {
            "id": 286,
            "text": "Cơ sở căn bản của giá cả thị trường là gì?",
            "options": [
                "Cung - Cầu.",
                "Thị hiếu, mốt thời trang.",
                "Giá trị.",
                "Giá trị sử dụng."
            ],
            "answer": 2,
            "explanation": "Giá trị.",
            "keywords": "Q: Cơ sở căn bản của giá cả thị | A: Giá trị"
        },
        {
            "id": 287,
            "text": "Cơ sở kinh tế của CNTB là gì?",
            "options": [
                "Chế độ chiếm hữu tư nhân TBCN về TLSX.",
                "Chế độ người bóc lột người.",
                "Chế độ thống trị của giai cấp TBCN.",
                "Chế độ tư hữu TLSX."
            ],
            "answer": 0,
            "explanation": "Chế độ chiếm hữu tư nhân TBCN về TLSX.",
            "keywords": "Q: Cơ sở kinh tế của CNTB là gì? | A: Chế độ chiếm hữu tư nhân TBCN về TLSX"
        },
        {
            "id": 288,
            "text": "Ý nghĩa quan trọng nhất của nghiên cứu hàng hóa sức lao động là:",
            "options": [
                "Tìm ra giải pháp tăng năng suất lao động.",
                "Tìm ra chìa khóa giải quyết mâu thuẫn công thức chung của tư bản.",
                "Để khẳng định đó là một loại hàng hóa đặc biệt.",
                "Tìm ra giá trị của nó để tính tiền lương cho người lao động."
            ],
            "answer": 1,
            "explanation": "Tìm ra chìa khóa giải quyết mâu thuẫn công thức chung của tư bản.",
            "keywords": "Q: Ý nghĩa quan trọng nhất của nghiên cứu | A: Tìm ra chìa khóa giải"
        },
        {
            "id": 289,
            "text": "Nhà tư bản trả tiền công đúng giá trị sức lao động cho công nhân có còn bóc lột không?",
            "options": [
                "Không.",
                "Không xác định.",
                "Còn.",
                "Vừa có vừa không."
            ],
            "answer": 2,
            "explanation": "Còn.",
            "keywords": "Q: Nhà tư bản trả tiền công đúng giá | A: Còn"
        },
        {
            "id": 290,
            "text": "Ngày lao động được hiểu như thế nào?",
            "options": [
                "Độ dài của thời gian lao động cần thiết.",
                "Độ dài của thời gian lao động thặng dư.",
                "Thời gian mà công nhân làm việc cho nhà tư bản trong một ngày.",
                "Độ dài của ngày tự nhiên lao động."
            ],
            "answer": 2,
            "explanation": "Thời gian mà công nhân làm việc cho nhà tư bản trong một ngày.",
            "keywords": "Q: Ngày lao động được hiểu như thế nào? | A: Thời gian mà công nhân"
        },
        {
            "id": 291,
            "text": "Công thức nào đúng khi xác định cấu thành lượng giá trị hàng hóa trong điều kiện có thuê mướn lao động?",
            "options": [
                "8000C + 2000v + 2000m.",
                "Giá trị cũ tái hiện + giá trị mới.",
                "8000k + 2000m.",
                "Lao động được vật hóa + giá trị mới."
            ],
            "answer": 0,
            "explanation": "8000C + 2000v + 2000m.",
            "keywords": "Q: Công thức nào đúng khi xác định cấu | A: 8000C + 2000v + 2000m"
        },
        {
            "id": 292,
            "text": "Điều gì là không thể trong quá trình sản xuất ra giá trị thặng dư?",
            "options": [
                "Bằng lao động cụ thể, công nhân chuyển giá trị lao động quá khứ vào sản phẩm mới là 10$.",
                "Bằng lao động cụ thể, công nhân tạo ra giá trị mới là 10$.",
                "Giá trị thặng dư = giá trị mới - chi phí tư bản khả biến.",
                "Baằng lao động trừu tượng, công nhân tạo ra giá trị mới là 10$."
            ],
            "answer": 1,
            "explanation": "Bằng lao động cụ thể, công nhân tạo ra giá trị mới là 10$.",
            "keywords": "Q: Điều gì là không thể trong quá trình | A: Bằng lao động cụ thể"
        },
        {
            "id": 293,
            "text": "Chọn đáp án không đúng. Thời gian lao động thặng dư là:",
            "options": [
                "Thời gian vượt quá điểm thời gian lao động xã hội cần thiết.",
                "Mục đích của toàn bộ quá trình sản xuất của nhà tư bản.",
                "Một phần của thời gian trong ngày.",
                "Thời gian công nhân làm việc cho nhà tư bản."
            ],
            "answer": 3,
            "explanation": "Thời gian công nhân làm việc cho nhà tư bản.",
            "keywords": "Q: Chọn đáp án không đúng. Thời gian lao | A: Thời gian công nhân làm việc cho nhà tư bản"
        },
        {
            "id": 294,
            "text": "Cấu thành tư bản không bao gồm:",
            "options": [
                "Tư bản tiền tệ, tư bản sản xuất và tư bản lưu thông.",
                "Tư bản cố định và tư bản lưu động.",
                "Tư bản bất biến và tư bản khả biến.",
                "Tư bản sử dụng và tư bản tiêu dùng."
            ],
            "answer": 3,
            "explanation": "Tư bản sử dụng và tư bản tiêu dùng.",
            "keywords": "Q: Cấu thành tư bản không bao gồm: | A: Tư bản sử dụng và tư bản tiêu dùng"
        },
        {
            "id": 295,
            "text": "Chọn đáp án không đúng. Biện pháp để tăng tốc độ chu chuyển của tư bản là:",
            "options": [
                "Rút ngắn thời gian sản xuất và thời gian lưu thông.",
                "Rút ngắn thời gian chu chuyển chung và thời gian chu chuyển thực tế của tư bản.",
                "Khấu hao nhanh tư bản cố định và tài sản cố định.",
                "Rút ngắn thời gian chu chuyển chung và tăng thời gian chu chuyển thực tế của tư bản."
            ],
            "answer": 3,
            "explanation": "Rút ngắn thời gian chu chuyển chung và tăng thời gian chu chuyển thực tế của tư bản.",
            "keywords": "Q: Chọn đáp án không đúng. Biện pháp để | A: Rút ngắn thời gian chu"
        },
        {
            "id": 296,
            "text": "Thực chất của quan hệ trao đổi hàng hóa là gì?",
            "options": [
                "Trao đổi 2 giá trị sử dụng khác nhau với 2 lượng giá trị bằng nhau.",
                "Quan hệ giữa người mua và người bán hàng hóa.",
                "Trao đổi 2 lượng hàng hóa bằng nhau với 2 lượng giá trị bằng nhau.",
                "Trao đổi 2 lượng hàng hóa khác nhau."
            ],
            "answer": 0,
            "explanation": "Trao đổi 2 giá trị sử dụng khác nhau với 2 lượng giá trị bằng nhau.",
            "keywords": "Q: Thực chất của quan hệ trao đổi hàng | A: Trao đổi 2 giá trị"
        },
        {
            "id": 297,
            "text": "Nền tảng của nền kinh tế quốc dân theo định hướng XHCN là:",
            "options": [
                "Kinh tế nhà nước.",
                "Kinh tế quốc doanh và kinh tế hợp tác xã.",
                "Kinh tế nhà nước và kinh tế tập thể.",
                "Kinh tế nhà nước, kinh tế tập thể và kinh tế có vốn đầu tư nước ngoài."
            ],
            "answer": 2,
            "explanation": "Kinh tế nhà nước và kinh tế tập thể.",
            "keywords": "Q: Nền tảng của nền kinh tế quốc dân | A: Kinh tế nhà nước và kinh tế tập thể"
        },
        {
            "id": 298,
            "text": "Nguồn vốn nước ngoài nào sau đây mà quốc gia có nghĩa vụ phải trả nợ?",
            "options": [
                "FDI và ODA.",
                "FDI (Đầu tư trực tiếp nước ngoài).",
                "ODA (Viện trợ phát triển theo chương trình).",
                "Vốn liên doanh của nước ngoài."
            ],
            "answer": 2,
            "explanation": "ODA (Viện trợ phát triển theo chương trình).",
            "keywords": "Q: Nguồn vốn nước ngoài nào sau đây mà | A: ODA (Viện trợ phát triển theo chương trình)"
        },
        {
            "id": 299,
            "text": "Phân phối theo lao động là:",
            "options": [
                "Lao động ngang nhau, trả công bằng nhau.",
                "Phân phối theo số lượng lao động và chất lượng lao động đã cống hiến cho xã hội.",
                "Phân phối theo sức lao động.",
                "Trả công lao động theo năng suất lao động."
            ],
            "answer": 1,
            "explanation": "Phân phối theo số lượng lao động và chất lượng lao động đã cống hiến cho xã hội.",
            "keywords": "Q: Phân phối theo lao động là: | A: Phân phối theo số lượng"
        },
        {
            "id": 300,
            "text": "Sự phát triển đại công nghiệp cơ khí ở Anh bắt đầu từ:",
            "options": [
                "Các ngành công nghiệp nặng.",
                "Các ngành công nghiệp chế tạo máy.",
                "Các ngành công nghiệp nhẹ.",
                "Các ngành sản xuất máy động lực."
            ],
            "answer": 2,
            "explanation": "Các ngành công nghiệp nhẹ.",
            "keywords": "Q: Sự phát triển đại công nghiệp cơ khí | A: Các ngành công nghiệp nhẹ"
        }
    ];
    global.QUIZ_BANKS = global.QUIZ_BANKS || {};
    global.QUIZ_BANKS["ktct"] = bank;
})(typeof window !== "undefined" ? window : globalThis);
