/** Ngân hàng câu hỏi: Triết học Mác - Lênin (361 câu) — load on demand */
(function (global) {
    const bank = [
        {
            "id": 1,
            "text": "Khi cho rằng “ý niệm” hay “hình thức phi vật chất” là bản nguyên hình thành nên thế giới, Platon là nhà triết học thuộc trường phái triết học nào sau đây?",
            "options": [
                "Chủ nghĩa duy vật biện chứng",
                "Chủ nghĩa duy tâm khách quan",
                "Chủ nghĩa duy tâm chủ quan",
                "Chủ nghĩa duy vật siêu hình"
            ],
            "answer": 1,
            "explanation": "Chủ nghĩa duy tâm khách quan",
            "keywords": "Q: Platon - bản nguyên thế giới | A: Chủ nghĩa duy tâm khách quan"
        },
        {
            "id": 2,
            "text": "Mác ví hình thái ý thức nào là “thuốc phiện của nhân dân”?",
            "options": [
                "Chính trị",
                "Đạo đức",
                "Tôn giáo",
                "Khoa học"
            ],
            "answer": 2,
            "explanation": "Tôn giáo",
            "keywords": "Q: Mác - thuốc phiện của nhân dân | A: Tôn giáo"
        },
        {
            "id": 3,
            "text": "Luận điểm của Hêraclít: \"Không ai có thể tắm hai lần trên cùng một dòng sông\" thể hiện tư tưởng gì?",
            "options": [
                "Biện chứng",
                "Siêu hình",
                "Duy vật",
                "Duy tâm"
            ],
            "answer": 0,
            "explanation": "Biện chứng",
            "keywords": "Q: Hêraclít - dòng sông | A: Biện chứng"
        },
        {
            "id": 4,
            "text": "Theo Hegel khởi nguyên của thế giới là gì?",
            "options": [
                "Ý niệm tuyệt đối",
                "Nguyên tử",
                "Không khí",
                "Vật chất không xác định"
            ],
            "answer": 0,
            "explanation": "Ý niệm tuyệt đối",
            "keywords": "Q: Hegel - khởi nguyên thế giới | A: Ý niệm tuyệt đối"
        },
        {
            "id": 5,
            "text": "“Tất cả cái gì đang vận động, đều vận động nhờ một cái khác nào đó”. Nhận định này gắn liền với hệ thống triết học nào? (Chọn phương án SAI)",
            "options": [
                "Triết học duy vật",
                "Triết học duy tâm",
                "Triết học duy tâm khách quan",
                "Triết học duy tâm chủ quan"
            ],
            "answer": 0,
            "explanation": "Triết học duy vật",
            "keywords": "Q: SAI - vận động nhờ cái khác | A: Triết học duy vật"
        },
        {
            "id": 6,
            "text": "Theo chủ nghĩa Mác-Lênin, chủ nghĩa duy vật đã trải qua mấy hình thức phát triển?",
            "options": [
                "Hai hình thức",
                "Ba hình thức",
                "Bốn hình thức",
                "Năm hình thức"
            ],
            "answer": 1,
            "explanation": "Ba hình thức",
            "keywords": "Q: duy vật - mấy hình thức phát triển | A: Ba hình thức"
        },
        {
            "id": 7,
            "text": "Theo Ăngghen, hình thức vận động nào nói lên sự tương tác của các phân tử, các hạt cơ bản?",
            "options": [
                "Lý học",
                "Xã hội",
                "Hóa học",
                "Sinh học"
            ],
            "answer": 0,
            "explanation": "Lý học",
            "keywords": "Q: Ăngghen - hình thức vận động | A: Lý học"
        },
        {
            "id": 8,
            "text": "Chọn đáp án đúng nhất với quan điểm của triết học Mác - Lênin:",
            "options": [
                "Ý thức có nguồn gốc từ mọi dạng vật chất giống như gan tiết ra mật",
                "Ý thức của con người là hiện tượng bẩm sinh",
                "Ý thức con người trực tiếp hình thành từ lao động sản xuất vật chất của xã hội",
                "Ý thức con người trực tiếp hình thành từ cuộc sống xã hội của con người"
            ],
            "answer": 2,
            "explanation": "Ý thức con người trực tiếp hình thành từ lao động sản xuất vật chất của xã hội",
            "keywords": "Q: ý thức hình thành từ lao động | A: lao động sản xuất vật chất · xã hội"
        },
        {
            "id": 9,
            "text": "Theo triết học Mác: Con người có khả năng nhận thức được thế giới không?",
            "options": [
                "Có",
                "Không",
                "Có khi có, có khi không",
                "Có nhận thức được, nhưng do thượng đế mách bảo"
            ],
            "answer": 0,
            "explanation": "Có",
            "keywords": "Q: Mác - khả năng nhận thức thế giới | A: Có"
        },
        {
            "id": 10,
            "text": "Tồn tại khách quan được hiểu là:",
            "options": [
                "Tồn tại độc lập với ý thức của con người",
                "Tồn tại phụ thuộc vào ý thức của con người",
                "Tồn tại của thế giới khác ngoài thế giới vật chất",
                "Tồn tại mà con người không nhận thức được"
            ],
            "answer": 0,
            "explanation": "Tồn tại độc lập với ý thức của con người",
            "keywords": "Q: tồn tại khách quan | A: Tồn tại độc lập · ý thức của con người"
        },
        {
            "id": 11,
            "text": "Chân lý là gì?",
            "options": [
                "Tri thức do con người tạo ra",
                "Tri thức phù hợp với hiện thực khách quan",
                "Tri thức đã được kiểm tra về lý thuyết",
                "Tri thức do khoa học chứng minh"
            ],
            "answer": 1,
            "explanation": "Tri thức phù hợp với hiện thực khách quan",
            "keywords": "Q: chân lý là gì | A: Tri thức phù hợp với hiện thực khách quan"
        },
        {
            "id": 12,
            "text": "Theo Mác - Lênin, không gian tồn tại của vật chất có mấy chiều?",
            "options": [
                "1 chiều",
                "2 chiều",
                "3 chiều",
                "Đa chiều"
            ],
            "answer": 2,
            "explanation": "3 chiều",
            "keywords": "Q: không gian tồn tại vật chất | A: 3 chiều"
        },
        {
            "id": 13,
            "text": "Chọn đáp án đúng nhất về bản chất ý thức:",
            "options": [
                "Ý thức là thuộc tính của mọi dạng vật chất",
                "Ý thức là sự phản ánh nguyên si hiện thực khách quan",
                "Ý thức là sự phản ánh năng động, sáng tạo hiện thực khách quan",
                "Ý thức là sự phản ánh thụ động hiện thực khách quan"
            ],
            "answer": 2,
            "explanation": "Ý thức là sự phản ánh năng động, sáng tạo hiện thực khách quan",
            "keywords": "Q: bản chất ý thức | A: phản ánh năng động · sáng tạo hiện thực khách quan"
        },
        {
            "id": 14,
            "text": "Điền vào chỗ trống: Mặt đối lập của mâu thuẫn là những khuynh hướng, tính chất, đặc điểm mà chúng phát triển theo những chiều hướng […].",
            "options": [
                "Khác nhau",
                "Trái ngược nhau",
                "Xung đột nhau",
                "Như nhau"
            ],
            "answer": 1,
            "explanation": "Trái ngược nhau",
            "keywords": "Q: mặt đối lập của mâu thuẫn | A: Trái ngược nhau"
        },
        {
            "id": 15,
            "text": "Lựa chọn câu đúng nhất về Mối liên hệ phổ biến:",
            "options": [
                "Chỉ có mối liên hệ trong tự nhiên và xã hội, không có trong tư duy",
                "Mối liên hệ chỉ diễn ra giữa các sự vật, không có trong bản thân sự vật",
                "Mối liên hệ diễn ra cả giữa các sự vật và ngay trong bản thân sự vật",
                "Mối liên hệ chỉ do ý chí con người tạo ra"
            ],
            "answer": 2,
            "explanation": "Mối liên hệ diễn ra cả giữa các sự vật và ngay trong bản thân sự vật",
            "keywords": "Q: mối liên hệ phổ biến | A: giữa các sự vật · trong bản thân sự vật"
        },
        {
            "id": 16,
            "text": "Quy luật nào vạch ra khuynh hướng của sự vận động, phát triển?",
            "options": [
                "Quy luật thống nhất và đấu tranh của các mặt đối lập",
                "Quy luật chuyển hóa từ sự thay đổi về lượng dẫn đến sự thay đổi về chất và ngược lại",
                "Quy luật phủ định của phủ định",
                "Quy luật về sự phù hợp của quan hệ sản xuất với tính chất và trình độ của lực lượng sản xuất"
            ],
            "answer": 2,
            "explanation": "Quy luật phủ định của phủ định",
            "keywords": "Q: Quy luật nào vạch ra khuynh hướng của | A: Quy luật phủ định của phủ định"
        },
        {
            "id": 17,
            "text": "Nhận định nào đúng về sự thống nhất và đấu tranh giữa các mặt đối lập?",
            "options": [
                "Đấu tranh và thống nhất đều là tương đối",
                "Đấu tranh và thống nhất đều là tuyệt đối",
                "Đấu tranh là tuyệt đối, thống nhất là tương đối",
                "Đấu tranh là tương đối, thống nhất là tuyệt đối"
            ],
            "answer": 2,
            "explanation": "Đấu tranh là tuyệt đối, thống nhất là tương đối",
            "keywords": "Q: Nhận định nào đúng về sự thống nhất | A: Đấu tranh là tuyệt đối · thống nhất là tương đối"
        },
        {
            "id": 18,
            "text": "Hình thức nào của tư duy trừu tượng là hình thức liên kết các phán đoán?",
            "options": [
                "Khái niệm",
                "Biểu tượng",
                "Cảm giác",
                "Suy lý (Suy luận)"
            ],
            "answer": 3,
            "explanation": "Suy lý (Suy luận)",
            "keywords": "Q: Hình thức nào của tư duy trừu tượng | A: Suy lý (Suy luận)"
        },
        {
            "id": 19,
            "text": "Phạm trù nào dùng để chỉ tính quy định vốn có của sự vật, về quy mô, trình độ phát triển của sự vật, biểu thị số lượng các thuộc tính, các yếu tố cấu thành sự vật?",
            "options": [
                "Chất",
                "Lượng",
                "Vận động",
                "Độ"
            ],
            "answer": 1,
            "explanation": "Lượng",
            "keywords": "Q: Phạm trù nào dùng để chỉ tính quy | A: Lượng"
        },
        {
            "id": 20,
            "text": "Theo Ăngghen, hình thức vận động nào nói lên sự thay thế các phương thức sản xuất?",
            "options": [
                "Lý học",
                "Xã hội",
                "Hóa học",
                "Sinh học"
            ],
            "answer": 1,
            "explanation": "Xã hội",
            "keywords": "Q: Ăngghen - hình thức vận động | A: Xã hội"
        },
        {
            "id": 21,
            "text": "Các thiết chế như: Nhà nước, Đảng, Tổ chức chính trị là các yếu tố thuộc phạm trù nào?",
            "options": [
                "Cơ sở hạ tầng",
                "Quan hệ sản xuất",
                "Kiến trúc thượng tầng",
                "Lực lượng sản xuất"
            ],
            "answer": 2,
            "explanation": "Kiến trúc thượng tầng",
            "keywords": "Q: Các thiết chế như: Nhà nước, Đảng, Tổ | A: Kiến trúc thượng tầng"
        },
        {
            "id": 22,
            "text": "Trong các mặt của Quan hệ sản xuất, mặt nào quan trọng nhất?",
            "options": [
                "Sở hữu đối với tư liệu sản xuất",
                "Tổ chức quản lý",
                "Phân phối sản phẩm",
                "Sở hữu đối với tư liệu tiêu dùng"
            ],
            "answer": 0,
            "explanation": "Sở hữu đối với tư liệu sản xuất",
            "keywords": "Q: Trong các mặt của Quan hệ sản xuất, | A: Sở hữu đối với tư liệu sản xuất"
        },
        {
            "id": 23,
            "text": "Lịch sử xã hội loài người đã, đang trải qua mấy hình thái kinh tế - xã hội?",
            "options": [
                "2 hình thái kinh tế - xã hội",
                "3 hình thái kinh tế - xã hội",
                "4 hình thái kinh tế - xã hội",
                "5 hình thái kinh tế - xã hội"
            ],
            "answer": 3,
            "explanation": "5 hình thái kinh tế - xã hội",
            "keywords": "Q: Lịch sử xã hội loài người đã, đang | A: 5 hình thái kinh tế - xã hội"
        },
        {
            "id": 24,
            "text": "Chọn đáp án KHÔNG đúng về phương thức sản xuất:",
            "options": [
                "Phương thức sản xuất là thể thống nhất giữa lực lượng sản xuất và quan hệ sản xuất",
                "Phương thức sản xuất là phương pháp và cách thức tiến hành sản xuất của cải vật chất trong một giai đoạn phát triển nhất định của lịch sử",
                "Trong một phương thức sản xuất thì lực lượng sản xuất giữ vai trò quyết định tính chất và trình độ của quan hệ sản xuất",
                "Trong một phương thức sản xuất thì quan hệ sản xuất giữ vai trò quyết định tính chất và trình độ của lực lượng sản xuất"
            ],
            "answer": 3,
            "explanation": "Trong một phương thức sản xuất thì quan hệ sản xuất giữ vai trò quyết định tính chất và trình độ của lực lượng sản xuất",
            "keywords": "Q: KHÔNG đúng - phương thức sản xuất | A: quan hệ sản xuất · quyết định tính chất · lực lượng sản xuất"
        },
        {
            "id": 25,
            "text": "Vai trò của tồn tại xã hội trong quan hệ biện chứng với ý thức xã hội là gì?",
            "options": [
                "Ý thức xã hội là sự phản ánh tồn tại xã hội, phụ thuộc vào tồn tại xã hội",
                "Tồn tại xã hội quyết định sự biến đổi ý thức xã hội",
                "Tồn tại xã hội có vai trò quyết định gián tiếp đối với các hình thái ý thức xã hội",
                "Ý thức xã hội hoàn toàn phụ thuộc một cách thụ động vào tồn tại xã hội"
            ],
            "answer": 1,
            "explanation": "Tồn tại xã hội quyết định sự biến đổi ý thức xã hội",
            "keywords": "Q: Vai trò của tồn tại xã hội trong | A: Tồn tại xã hội quyết định sự · biến đổi ý thức xã hội"
        },
        {
            "id": 26,
            "text": "Hiện nay còn tư tưởng “trọng nam khinh nữ” thể hiện tính chất gì của ý thức xã hội?",
            "options": [
                "Tính bảo thủ (Lạc hậu)",
                "Tính vượt trước",
                "Tính kế thừa",
                "Tính độc lập"
            ],
            "answer": 0,
            "explanation": "Tính bảo thủ (Lạc hậu)",
            "keywords": "Q: Hiện nay còn tư tưởng “trọng nam khinh | A: Tính bảo thủ (Lạc hậu)"
        },
        {
            "id": 27,
            "text": "Lựa chọn câu đúng nhất theo quan điểm của Chủ nghĩa duy vật biện chứng.",
            "options": [
                "Chỉ có mối liên hệ trong lĩnh vực tự nhiên và xã hội chứ không có trong lĩnh vực tư duy",
                "Mối liên hệ chỉ diễn ra giữa các sự vật hiện tượng với nhau còn trong bản thân sự vật hiện tượng không có sự liên hệ",
                "Mối liên hệ của sự vật hiện tượng không chỉ diễn ra giữa các sự vật hiện tượng mà còn diễn ra ngay trong sự vật hiện tượng",
                "Mối liên hệ của sự vật hiện tượng chỉ do ý chí con người tạo ra còn bản thân sự vật hiện tượng không có sự liên hệ"
            ],
            "answer": 2,
            "explanation": "Mối liên hệ của sự vật hiện tượng không chỉ diễn ra giữa các sự vật hiện tượng mà còn diễn ra ngay trong sự vật hiện tượng",
            "keywords": "Q: theo quan điểm của Chủ nghĩa duy vật | A: Mối liên hệ của sự vật hiện tượng · sự vật hiện tượng mà còn diễn ra"
        },
        {
            "id": 28,
            "text": "Theo triết học Mác - Lênin, tính độc lập tương đối của ý thức xã hội:",
            "options": [
                "Tồn tại xã hội thay đổi nhưng có một số bộ phận của ý thức xã hội chưa thay đổi ngay cùng với tồn tại xã hội",
                "Những tư tưởng khoa học tiên tiến có thể vượt trước tồn tại xã hội nên nó có thể thoát ly tồn tại xã hội",
                "Các hình thái ý thức xã hội trong sự phát triển không thể tác động qua lại lẫn nhau",
                "Trong xã hội có giai cấp, tính chất kế thừa của ý thức xã hội không gắn liền với tính giai cấp của nó"
            ],
            "answer": 0,
            "explanation": "Tồn tại xã hội thay đổi nhưng có một số bộ phận của ý thức xã hội chưa thay đổi ngay cùng với tồn tại xã hội",
            "keywords": "Q: Lênin - tính độc lập tương đối của | A: Tồn tại xã hội thay đổi nhưng có · thức xã hội chưa thay đổi ngay cùng"
        },
        {
            "id": 29,
            "text": "Lịch sử xã hội loài người đã từng xuất hiện loại cấu trúc xã hội nào?",
            "options": [
                "Cấu trúc xã hội phi giai cấp",
                "Cấu trúc xã hội có giai cấp",
                "Cấu trúc xã hội phi giai cấp và có giai cấp",
                "Cấu trúc xã hội nữa thuộc địa, nữa phong kiến"
            ],
            "answer": 2,
            "explanation": "Cấu trúc xã hội phi giai cấp và có giai cấp",
            "keywords": "Q: Lịch sử xã hội loài người đã từng | A: Cấu trúc xã hội phi giai · cấp và có giai cấp"
        },
        {
            "id": 30,
            "text": "Chọn đáp án KHÔNG đúng. Điều kiện, tiền đề đưa đến sự hình thành chủ nghĩa Mác-Lênin?",
            "options": [
                "Điều kiện kinh tế - xã hội",
                "Tiền đề lý luận",
                "Tiền đề khoa học tự nhiên",
                "Tiền đề về tư tưởng"
            ],
            "answer": 3,
            "explanation": "Tiền đề về tư tưởng",
            "keywords": "Q: KHÔNG đúng - Điều kiện, tiền đề đưa | A: Tiền đề về tư tưởng"
        },
        {
            "id": 31,
            "text": "Theo triết học của Mác - Lênin, đặc điểm tâm lý xã hội:",
            "options": [
                "Tâm lý xã hội là sự phản ánh gián tiếp có tính tự phát thường ghi lại những mặt bề ngoài tồn tại xã hội",
                "Tâm lý xã hội là sự phản ánh mang tính kinh nghiệm, yếu tố trí tuệ đan xen yếu tố tình cảm",
                "Tâm lý xã hội mang tính phong phú và phức tạp, nhưng không tuân theo các quy luật tâm lý",
                "Tâm lý xã hội không có vai trò quan trọng trong ý thức xã hội"
            ],
            "answer": 1,
            "explanation": "Tâm lý xã hội là sự phản ánh mang tính kinh nghiệm, yếu tố trí tuệ đan xen yếu tố tình cảm",
            "keywords": "Q: Lênin - Theo triết học của Mác - | A: Tâm lý xã hội là sự phản ánh · nghiệm, yếu tố trí tuệ đan xen yếu"
        },
        {
            "id": 32,
            "text": "Vai trò của đấu tranh giai cấp trong lịch sử nhân loại là gì?",
            "options": [
                "Là động lực cơ bản của sự phát triển xã hội",
                "Là một động lực quan trọng của sự phát triển xã hội trong các xã hội có giai cấp",
                "Thay thế các hình thái kinh tế xã hội từ thấp đến cao",
                "Lật đổ ách thống trị của giai cấp thống trị"
            ],
            "answer": 1,
            "explanation": "Là một động lực quan trọng của sự phát triển xã hội trong các xã hội có giai cấp",
            "keywords": "Q: Vai trò của đấu tranh giai cấp trong | A: Là một động lực quan trọng của sự · xã hội trong các xã hội có giai"
        },
        {
            "id": 33,
            "text": "Hình thái ý thức nào là sự phản ánh “lộn ngược” tồn tại xã hội, phản ánh sai lầm, xuyên tạc hiện thực, dẫn con người đến long tin ảo tưởng vào các lực lượng siêu nhiên?",
            "options": [
                "Chính trị",
                "Tôn giáo",
                "Pháp quyền",
                "Khoa học"
            ],
            "answer": 1,
            "explanation": "Tôn giáo",
            "keywords": "Q: Hình thái ý thức nào là sự phản | A: Tôn giáo"
        },
        {
            "id": 34,
            "text": "Chọn đáp án đúng nhất với quan điểm của triết học Mác - Lênin:",
            "options": [
                "Ý thức có nguồn gốc từ mọi dạng vật chất giống như gan tiết ra mật",
                "Ý thức của con người là hiện tượng bẩm sinh",
                "Ý thức con người trực tiếp hình thành từ lao động sản xuất vật chất của xã hội",
                "Ý thức con người trực tiếp hình thành từ cuộc sống xã hội của con người"
            ],
            "answer": 2,
            "explanation": "Ý thức con người trực tiếp hình thành từ lao động sản xuất vật chất của xã hội",
            "keywords": "Q: Lênin - Chọn đáp án đúng nhất với | A: Ý thức con người trực tiếp hình thành · lao động sản xuất vật chất của xã"
        },
        {
            "id": 35,
            "text": "Thêm cụm từ thích hợp vào chỗ trống: Nguyên nhân là phạm trù dùng để chỉ […] giữa các mặt trong một sự vật, hoặc giữa các sự vật với nhau gây ra [...]",
            "options": [
                "Sự liên hệ lẫn nhau/ Một biến đổi nhất định nào đó",
                "Sự thống nhất/ Một sự vật mới",
                "Sự liên hệ lẫn nhau/ Một sự vật mới",
                "Sự tác động lẫn nhau/ Một biến đổi nhất định nào đó"
            ],
            "answer": 3,
            "explanation": "Sự tác động lẫn nhau/ Một biến đổi nhất định nào đó",
            "keywords": "Q: Thêm cụm từ thích hợp vào chỗ trống: | A: Sự tác động lẫn nhau/ Một · biến đổi nhất định nào đó"
        },
        {
            "id": 36,
            "text": "Lựa chọn đáp án đúng. Quan hệ giữa cá nhân và tập thể được xây dựng trên cơ sở nào?",
            "options": [
                "Sở thích",
                "Lợi ích",
                "Nghề nghiệp",
                "Thói quen"
            ],
            "answer": 1,
            "explanation": "Lợi ích",
            "keywords": "Q: Lựa chọn đáp án đúng. Quan hệ giữa | A: Lợi ích"
        },
        {
            "id": 37,
            "text": "Nhận định nào đúng khi bàn về sự thống nhất và đấu tranh giữa các mặt đối lập?",
            "options": [
                "Đấu tranh và thống nhất đều là tương đối",
                "Đấu tranh và thống nhất đều là tuyệt đối",
                "Đấu tranh là tuyệt đối, thống nhất là tương đối",
                "Đấu tranh là tương đối, thống nhất là tuyệt đối"
            ],
            "answer": 2,
            "explanation": "Đấu tranh là tuyệt đối, thống nhất là tương đối",
            "keywords": "Q: Nhận định nào đúng khi bàn về sự | A: Đấu tranh là tuyệt đối · thống nhất là tương đối"
        },
        {
            "id": 38,
            "text": "[…] tồn tại khách quan, độc lập với ý thức của con người. Điền vào dấu […].",
            "options": [
                "Tất nhiên và ngẫu nhiên",
                "Chỉ mỗi tất nhiên",
                "Chỉ mỗi ngẫu nhiên",
                "Tất nhiên và ngẫu nhiên đều không"
            ],
            "answer": 0,
            "explanation": "Tất nhiên và ngẫu nhiên",
            "keywords": "Q: […] tồn tại khách quan, độc lập với | A: Tất nhiên và ngẫu nhiên"
        },
        {
            "id": 39,
            "text": "Nhà triết học nào cho rằng : con người sinh ra vốn là bản tính thiện \"Nhân chi sơ, tính bản thiện\"?",
            "options": [
                "Khổng Tử",
                "Tuân tử",
                "Mạnh Tử",
                "Lão Tử"
            ],
            "answer": 2,
            "explanation": "Mạnh Tử",
            "keywords": "Q: Nhà triết học nào cho rằng : con | A: Mạnh Tử"
        },
        {
            "id": 40,
            "text": "Hình thái ý thức nào phản ánh toàn bộ các tư tưởng, quan điểm của một giai cấp, là sự phản ánh mặt pháp lý trong đời sống xã hội?",
            "options": [
                "Chính trị",
                "Đạo đức",
                "Pháp quyền",
                "Khoa học"
            ],
            "answer": 2,
            "explanation": "Pháp quyền",
            "keywords": "Q: Hình thái ý thức nào phản ánh toàn | A: Pháp quyền"
        },
        {
            "id": 41,
            "text": "Trong mối quan hệ giữa lực lượng sản xuất và quan hệ sản xuất, yếu tố nào là nội dung, yếu tố nào là hình thức?",
            "options": [
                "Lực lượng sản xuất là nội dung, quan hệ sản xuất là hình thức",
                "Quan hệ sản xuất là nội dung, lực lượng sản xuất là hình thức",
                "Lực lượng sản xuất và quan hệ sản xuất đều là nội dung",
                "Lực lượng sản xuất và quan hệ sản xuất đều là hình thức"
            ],
            "answer": 0,
            "explanation": "Lực lượng sản xuất và quan hệ sản xuất đều là nội dung",
            "keywords": "Q: Trong mối quan hệ giữa lực lượng sản | A: Lực lượng sản xuất là nội dung, · quan hệ sản xuất là hình thức"
        },
        {
            "id": 42,
            "text": "Trong khi thừa nhận tính thứ nhất của vật chất, chủ nghĩa duy vật chất phác thời cổ đại có hạn chế gì?",
            "options": [
                "Đồng nhất vật chất với nguyên tử",
                "Đồng nhất vật chất với các vật thể cảm tính",
                "Đồng nhất vật chất với một hoặc một số vật thể cảm tính",
                "Đồng nhất vật chất với ngũ hành"
            ],
            "answer": 2,
            "explanation": "Đồng nhất vật chất với một hoặc một số vật thể cảm tính",
            "keywords": "Q: Trong khi thừa nhận tính thứ nhất của | A: Đồng nhất vật chất với một hoặc · một số vật thể cảm tính"
        },
        {
            "id": 43,
            "text": "Để phân biệt được quan điểm của phái khả tri luận và bất khả tri luận cần phải dựa vào yếu tố nào?",
            "options": [
                "Việc giải quyết vấn đề cơ bản của triết học",
                "Việc giải quyết mặt bản thể luận trong vấn đề cơ bản của triết học",
                "Việc giải quyết mặt nhận thức luận trong vấn đề cơ bản của triết học",
                "Việc giải quyết vấn đề thế giới quan và nhân sinh quan của triết học"
            ],
            "answer": 2,
            "explanation": "Việc giải quyết mặt nhận thức luận trong vấn đề cơ bản của triết học",
            "keywords": "Q: Để phân biệt được quan điểm của phái | A: Việc giải quyết mặt nhận thức luận trong · vấn đề cơ bản của triết học"
        },
        {
            "id": 44,
            "text": "Theo chủ nghĩa duy vật biện chứng, bản chất của nhận thức là:",
            "options": [
                "Tùy vào năng lực bẩm sinh",
                "Là sự nỗ lực của từng cá nhân",
                "Chỉ dựa vào hoạt động thực tiễn của con người",
                "Dựa vào sự phong phú của hiện thực khách quan"
            ],
            "answer": 2,
            "explanation": "Chỉ dựa vào hoạt động thực tiễn của con người",
            "keywords": "Q: Theo chủ nghĩa duy vật biện chứng, bản | A: Chỉ dựa vào hoạt động · thực tiễn của con người"
        },
        {
            "id": 45,
            "text": "Theo cách phân chia các hình thức vận động của F. Engels, hình thức nào là cao nhất và phức tạp nhất?",
            "options": [
                "Vận động sinh học",
                "Vận động xã hội",
                "Vận động cơ học",
                "Vận động hóa học"
            ],
            "answer": 1,
            "explanation": "Vận động xã hội",
            "keywords": "Q: Ăngghen - hình thức vận động | A: Vận động xã hội"
        },
        {
            "id": 46,
            "text": "Quan điểm, tư tưởng của xã hội là chủ yếu thuộc phạm trù nào?",
            "options": [
                "Kiến trúc thượng tầng",
                "Quan hệ sản xuất",
                "Cơ sở hạ tầng",
                "Tồn tại xã hội"
            ],
            "answer": 0,
            "explanation": "Kiến trúc thượng tầng",
            "keywords": "Q: Quan điểm, tư tưởng của xã hội là | A: Kiến trúc thượng tầng"
        },
        {
            "id": 47,
            "text": "Theo quan điểm của chủ nghĩa Mác -Lênin, nhà nước có mấy đặc trưng?",
            "options": [
                "Hai",
                "Ba",
                "Bốn",
                "Năm"
            ],
            "answer": 1,
            "explanation": "Ba",
            "keywords": "Q: Lênin - Theo quan điểm của chủ nghĩa | A: Ba"
        },
        {
            "id": 48,
            "text": "Ph.Ăngghen: \"[…] là điều kiện cơ bản đầu tiên của toàn bộ đời sống loài người\". Điền vào chỗ trống.",
            "options": [
                "Lao động",
                "Vật chất",
                "Tự nhiên",
                "Sản xuất"
            ],
            "answer": 0,
            "explanation": "Lao động",
            "keywords": "Q: […] là điều kiện cơ bản đầu tiên | A: Lao động"
        },
        {
            "id": 49,
            "text": "Vấn đề cơ bản của triết học là gì?",
            "options": [
                "Mối quan hệ giũa bản thể luận và nhận thức luận",
                "Mối quan hệ giữa vật chất và ý thức",
                "Mối quan hệ giữa tự nhiên và con người",
                "Mối quan hệ giữa tự nhiên và xã hội"
            ],
            "answer": 1,
            "explanation": "Mối quan hệ giữa vật chất và ý thức",
            "keywords": "Q: Vấn đề cơ bản của triết học là | A: Mối quan hệ giữa vật chất · ý thức"
        },
        {
            "id": 50,
            "text": "Mâu thuẫn làm cho sự vật, hiện tượng biến đổi không ngừng gọi là mâu thuẫn:",
            "options": [
                "Mâu thuẫn chủ yếu",
                "Mâu thuẫn cơ bản",
                "Mâu thuẫn bên trong",
                "Mâu thuẫn bên ngoài"
            ],
            "answer": 1,
            "explanation": "Mâu thuẫn cơ bản",
            "keywords": "Q: Mâu thuẫn làm cho sự vật, hiện tượng | A: Mâu thuẫn cơ bản"
        },
        {
            "id": 51,
            "text": "Định nghĩa đúng nhất theo quan điểm của triết học Mác - Lênin:",
            "options": [
                "Xã hội là môi trường hoạt động lao động sản xuất của con người",
                "Xã hội là một bộ phận đặc thù của tự nhiên mà là sản phẩm của sự phát triển của tự nhiên",
                "Xã hội là hình thái vận động cao nhất của thế giới vật chất",
                "Xã hội là một cộng đồng người đang hoạt động người đang hoạt động sản xuất"
            ],
            "answer": 1,
            "explanation": "Xã hội là một bộ phận đặc thù của tự nhiên mà là sản phẩm của sự phát triển của tự nhiên",
            "keywords": "Q: Lênin - Định nghĩa đúng nhất theo quan | A: Xã hội là một bộ phận đặc thù · mà là sản phẩm của sự phát triển"
        },
        {
            "id": 52,
            "text": "Theo ai? Con người chỉ có được hạnh phúc thực sự khi có được sự thư nhàn.",
            "options": [
                "Xocrat",
                "Epiquy",
                "Platôn",
                "Aristot"
            ],
            "answer": 3,
            "explanation": "Aristot",
            "keywords": "Q: Theo ai | A: Aristot"
        },
        {
            "id": 53,
            "text": "Mối liên hệ của các sự vật hiện tượng là gì?",
            "options": [
                "Là sự tác động lẫn nhau, chi phối chuyển hóa lẫn nhau một cách khách quan, phổ biến, nhiều vẻ giữa các mặt, quá trình của sự vật, hiện tượng hoặc giữa các sự vật, hiện tượng.",
                "Là sự thừa nhận rằng giữa các mặt của sự vật, hiện tượng và giữa các sự vật với nhau trong thực tế khách quan không có mối liên hệ nào cả.",
                "Sự tác động lẫn nhau, có tính khách quan, phổ biến, nhiều vẻ, không thể chuyển hóa cho nhau.",
                "Sự tác động lẫn nhau, có tính chủ quan, phổ biến, nhiều vẻ, có thể chuyển hóa cho nhau."
            ],
            "answer": 0,
            "explanation": "Là sự tác động lẫn nhau, chi phối chuyển hóa lẫn nhau một cách khách quan, phổ biến, nhiều vẻ giữa các mặt, quá trình của sự vật, hiện tượng hoặc giữa các sự vật, hiện tượng.",
            "keywords": "Q: Mối liên hệ của các sự vật hiện | A: Là sự tác động lẫn nhau, chi phối · vẻ giữa các mặt, quá trình của sự"
        },
        {
            "id": 54,
            "text": "Phạm trù nào thể hiện mối quan hệ giữa con người và tự nhiên trong quá trình sản xuất?",
            "options": [
                "Phương thức sản xuất",
                "Quan hệ sản xuất",
                "Lực lượng sản xuất",
                "Tư liệu sản xuất"
            ],
            "answer": 2,
            "explanation": "Lực lượng sản xuất",
            "keywords": "Q: Phạm trù nào thể hiện mối quan hệ | A: Lực lượng sản xuất"
        },
        {
            "id": 55,
            "text": "Chọn đáp án KHÔNG đúng về lực lượng sản xuất:",
            "options": [
                "Lực lượng sản xuất sản xuất thể hiện mối quan hệ giữa người và người trong quá trình sản xuất.",
                "Lực lượng sản xuất thể hiện mối quan hệ giữa người và tự nhiên trong quá trình sản xuất.",
                "Lực lượng sản xuất có vai trò quyết định trong mối quan hệ biện chứng với quan hệ sản xuất.",
                "Lực lượng sản xuất bao gồm người lao động và tư liệu sản xuất."
            ],
            "answer": 0,
            "explanation": "Lực lượng sản xuất sản xuất thể hiện mối quan hệ giữa người và người trong quá trình sản xuất.",
            "keywords": "Q: KHÔNG đúng - lực lượng sản xuất | A: mối quan hệ giữa người và người · quá trình sản xuất"
        },
        {
            "id": 56,
            "text": "Theo quan điểm của chủ nghĩa duy vật biện chứng. Vận động là:",
            "options": [
                "Vận động là kết quả do \"Cú hích ban đầu của Thượng đế\" tạo ra.",
                "Vận động là phương thức tồn tại của vật chất, là thuộc tính cố hữu của vật chất.",
                "Vận động là chỉ sự thay đổi vị trí của sự vật trong thời gian.",
                "Vận động là chỉ sự thay đổi vị trí của sự vật trong không gian."
            ],
            "answer": 1,
            "explanation": "Vận động là phương thức tồn tại của vật chất, là thuộc tính cố hữu của vật chất.",
            "keywords": "Q: Theo quan điểm của chủ nghĩa duy vật | A: Vận động là phương thức tồn tại của · chất, là thuộc tính cố hữu của vật"
        },
        {
            "id": 57,
            "text": "Chọn đáp KHÔNG đúng theo triết học Mác-Lênin:",
            "options": [
                "Ngôn ngữ là hệ thống tín hiệu vật chất mang nội dung ý thức.",
                "Ngôn ngữ là cái vỏ vật chất của tư duy mang nội dung ý thức.",
                "Ngôn ngữ là cái vỏ vật chất của tư duy.",
                "Ngôn ngữ là hiện tượng tinh thần."
            ],
            "answer": 3,
            "explanation": "Ngôn ngữ là hiện tượng tinh thần.",
            "keywords": "Q: KHÔNG đúng - : | A: Ngôn ngữ · hiện tượng tinh thần"
        },
        {
            "id": 58,
            "text": "Hình thức nào không phải là cơ bản của thực tiễn?",
            "options": [
                "Hoạt động sản xuất vật chất",
                "Hoạt động biểu diễn nghệ thuật",
                "Hoạt động chính trị - xã hội",
                "Hoạt động thực nghiệm khoa học"
            ],
            "answer": 1,
            "explanation": "Hoạt động biểu diễn nghệ thuật",
            "keywords": "Q: KHÔNG đúng - Hình thức nào không phải | A: Hoạt động biểu diễn nghệ thuật"
        },
        {
            "id": 59,
            "text": "Theo triết học Mác - Lênin, bộ phận nào là hạt nhân quan trọng và là phương thức tồn tại của ý thức?",
            "options": [
                "Tự ý thức",
                "Tri thức",
                "Tiềm thức",
                "Vô thức"
            ],
            "answer": 1,
            "explanation": "Tri thức",
            "keywords": "Q: Lênin - bộ phận nào là hạt nhân | A: Tri thức"
        },
        {
            "id": 60,
            "text": "Chọn đáp án đúng nhất theo quan điểm của chủ nghĩa Mác-Lênin:",
            "options": [
                "Động vật bậc cao cũng có ý thức như con người.",
                "Ý thức chỉ có ở con người.",
                "Người máy cũng có ý thức như con người.",
                "Ý thức không chỉ có ở con người."
            ],
            "answer": 1,
            "explanation": "Ý thức chỉ có ở con người.",
            "keywords": "Q: Lênin - theo quan điểm của chủ nghĩa | A: Ý thức chỉ có ở con người"
        },
        {
            "id": 61,
            "text": "Tư liệu sản xuất đặc trưng trong phương thức sản xuất phong kiến là:",
            "options": [
                "Hầm mỏ",
                "Đất đai",
                "Máy móc cơ khí",
                "Xí nghiệp, nhà xưởng"
            ],
            "answer": 1,
            "explanation": "Đất đai",
            "keywords": "Q: Tư liệu sản xuất đặc trưng trong phương | A: Đất đai"
        },
        {
            "id": 62,
            "text": "Mặt tự nhiên của phương thức sản xuất là gì?",
            "options": [
                "Quan hệ sản xuất",
                "Cơ sở hạ tầng",
                "Kiến trúc thượng tầng",
                "Lực lượng sản xuất"
            ],
            "answer": 3,
            "explanation": "Lực lượng sản xuất",
            "keywords": "Q: Mặt tự nhiên của phương thức sản xuất | A: Lực lượng sản xuất"
        },
        {
            "id": 63,
            "text": "Phương thức sản xuất là thể thống nhất của các nhân tố nào?",
            "options": [
                "Quan hệ sản xuất và Kiến trúc thượng tầng",
                "Lực lượng sản xuất và Quan hệ sản xuất",
                "Cơ sở hạ tầng và Kiến trúc thượng tầng",
                "Lực lượng sản xuất và Cơ sở hạ tầng"
            ],
            "answer": 1,
            "explanation": "Lực lượng sản xuất và Quan hệ sản xuất",
            "keywords": "Q: Phương thức sản xuất là thể thống nhất | A: Lực lượng sản xuất · Quan hệ sản xuất"
        },
        {
            "id": 64,
            "text": "Triết học Mác - Lênin cho rằng: thực tiễn là toàn bộ […] có mục đích, mang tính lịch sử - xã hội của con người nhằm cải tạo thế giới khách quan. Điền vào chỗ trống.",
            "options": [
                "Hoạt động vật chất và tinh thần",
                "Hoạt động tinh thần",
                "Hoạt động vật chất",
                "Hoạt động"
            ],
            "answer": 2,
            "explanation": "Hoạt động vật chất",
            "keywords": "Q: Triết học Mác - Lênin cho rằng: thực | A: Hoạt động vật chất"
        },
        {
            "id": 65,
            "text": "Phạm trù nào nói lên thể thống nhất giữa lực lượng sản xuất và quan hệ sản xuất?",
            "options": [
                "Phương thức sản xuất",
                "Quan hệ sản xuất",
                "Lực lượng sản xuất",
                "Tư liệu sản xuất"
            ],
            "answer": 0,
            "explanation": "Phương thức sản xuất",
            "keywords": "Q: Phạm trù nào nói lên thể thống nhất | A: Phương thức sản xuất"
        },
        {
            "id": 66,
            "text": "Chọn đáp án KHÔNG đúng về quan hệ sản xuất:",
            "options": [
                "Quan hệ sản xuất thể hiện mối quan hệ giữa người và người trong quá trình sản xuất.",
                "Quan hệ sản xuất bao gồm quan hệ sở hữu tư liệu sản xuất và quan hệ tổ chức quản lý sản xuất.",
                "Quan hệ sản xuất bao gồm quan hệ sở hữu tư liệu sản xuất, quan hệ tổ chức quản lý sản xuất và quan hệ phân phối sản phẩm.",
                "Quan hệ sản xuất phù hợp với tính chất và trình độ của lực lượng sản xuất sẽ thúc đẩy sản xuất phát triển."
            ],
            "answer": 1,
            "explanation": "Quan hệ sản xuất bao gồm quan hệ sở hữu tư liệu sản xuất và quan hệ tổ chức quản lý sản xuất.",
            "keywords": "Q: KHÔNG đúng - về quan hệ sản xuất: | A: Quan hệ sản xuất bao gồm quan hệ · sản xuất và quan hệ tổ chức quản"
        },
        {
            "id": 67,
            "text": "Yếu tố nào của dân số tác động chủ yếu tới sự phát triển của xã hội trong thời đại ngày nay?",
            "options": [
                "Chất lượng dân cư",
                "Số lượng dân cư",
                "Số lượng dân cư và sự gia tăng dân số hợp lý",
                "Số lượng dân cư và mật độ dân số hợp lý"
            ],
            "answer": 0,
            "explanation": "Chất lượng dân cư",
            "keywords": "Q: Yếu tố nào của dân số tác động | A: Chất lượng dân cư"
        },
        {
            "id": 68,
            "text": "Trong quan hệ sản xuất, quan hệ nào giữ vai trò quyết định?",
            "options": [
                "Quan hệ sở hữu tư liệu sản xuất",
                "Quan hệ tổ chức, quản lý quá trình sản xuất",
                "Quan hệ phân phối sản phẩm",
                "Quan hệ sở hữu tư nhân về tư liệu sản xuất"
            ],
            "answer": 0,
            "explanation": "Quan hệ sở hữu tư liệu sản xuất",
            "keywords": "Q: Trong quan hệ sản xuất, quan hệ nào | A: Quan hệ sở hữu tư liệu sản xuất"
        },
        {
            "id": 69,
            "text": "Chọn câu trả lời đúng. Theo quan điểm của chủ nghĩa Mác - Lênin, chất của sự vật là:",
            "options": [
                "Cấu trúc sự vật",
                "Các thuộc tính sự vật",
                "Tổng số các thuộc tính của sự vật",
                "Sự thống nhất hữu cơ của các thuộc tính cấu thành nó"
            ],
            "answer": 1,
            "explanation": "Cấu trúc sự vật",
            "keywords": "Q: Lênin - Chọn câu trả lời đúng. Theo | A: Các thuộc tính sự vật"
        },
        {
            "id": 70,
            "text": "Phạm trù nào thể hiện mối quan hệ giữa người với người trong quá trình sản xuất?",
            "options": [
                "Phương thức sản xuất",
                "Quan hệ sản xuất",
                "Lực lượng sản xuất",
                "Tư liệu sản xuất"
            ],
            "answer": 1,
            "explanation": "Quan hệ sản xuất",
            "keywords": "Q: Phạm trù nào thể hiện mối quan hệ | A: Quan hệ sản xuất"
        },
        {
            "id": 71,
            "text": "Quy luật xã hội nào giữ vai trò quyết định đối với sự vận động, phát triển của xã hội?",
            "options": [
                "Quy luật về sự phù hợp của quan hệ sản xuất với trình độ phát triển của lực lượng sản xuất",
                "Quy luật tồn tại xã hội quyết định ý thức xã hội",
                "Quy luật cơ sở hạ tầng quyết định kiến trúc thượng tầng",
                "Quy luật đấu tranh giai cấp"
            ],
            "answer": 0,
            "explanation": "Quy luật về sự phù hợp của quan hệ sản xuất với trình độ phát triển của lực lượng sản xuất",
            "keywords": "Q: Quy luật xã hội nào giữ vai trò | A: Quy luật về sự phù hợp của quan · với trình độ phát triển của lực lượng"
        },
        {
            "id": 72,
            "text": "Chọn đáp án đúng nhất theo triết học Mác - Lênin, thực tiễn là:",
            "options": [
                "Toàn bộ hoạt động vật chất có mục đích, mang tính lịch sử - xã hội của con người nhằm cải tạo thế giới khách quan.",
                "Toàn bộ hoạt động tinh thần có mục đích, mang tính lịch sử - xã hội của con người nhằm cải tạo thế giới khách quan.",
                "Toàn bộ hoạt động vật chất và tinh thần có mục đích, mang tính lịch sử - xã hội của con người nhằm cải tạo thế giới khách quan.",
                "Toàn bộ hoạt động vật chất, mang tính lịch sử - xã hội của con người nhằm cải tạo thế giới khách quan."
            ],
            "answer": 0,
            "explanation": "Toàn bộ hoạt động vật chất có mục đích, mang tính lịch sử - xã hội của con người nhằm cải tạo thế giới khách quan.",
            "keywords": "Q: Lênin - thực tiễn là: | A: Toàn bộ hoạt động vật chất có mục · - xã hội của con người nhằm cải"
        },
        {
            "id": 73,
            "text": "Điền vào chỗ trống. \"Sự phân đôi của cái thống nhất và sự nhận thức các bộ phận mâu thuẫn của nó. Đó là thực chất của […]\".",
            "options": [
                "Phép siêu hình",
                "Phép biện chứng",
                "Nhận thức luận duy vật",
                "Nhận thức luận biện chứng"
            ],
            "answer": 1,
            "explanation": "Phép biện chứng",
            "keywords": "Q: Sự phân đôi của cái thống nhất và | A: Phép biện chứng"
        },
        {
            "id": 74,
            "text": "Tiêu chuẩn khách quan để phân biệt các chế độ xã hội trong lịch sử?",
            "options": [
                "Quan hệ sản xuất đặc trưng",
                "Chính trị tư tưởng",
                "Lực lượng sản xuất",
                "Phương thức sản xuất"
            ],
            "answer": 0,
            "explanation": "Quan hệ sản xuất đặc trưng",
            "keywords": "Q: Tiêu chuẩn khách quan để phân biệt các | A: Quan hệ sản xuất đặc trưng"
        },
        {
            "id": 75,
            "text": "V.I.Lênin: “Nhận thức là sự tiến gần mãi mãi và vô tận của […] đến khách thể”. Điền vào chỗ trống.",
            "options": [
                "Chủ thể",
                "Ý thức",
                "Tư duy",
                "Con người"
            ],
            "answer": 0,
            "explanation": "Chủ thể",
            "keywords": "Q: V.I.Lênin: “Nhận thức là sự tiến gần mãi | A: Chủ thể"
        },
        {
            "id": 76,
            "text": "Quy luật nào vạch ra nguồn gốc, động lực của sự vận động và phát triển?",
            "options": [
                "Quy luật phủ định của phủ định",
                "Quy luật chuyển hóa từ sự thay đổi về lượng dẫn đến sự thay đổi về chất và ngược lại",
                "Quy luật về mối liên hệ biện chứng giữa cơ sở hạ tầng và kiến trúc thượng tầng",
                "Quy luật thống nhất và đấu tranh của các mặt đối lập"
            ],
            "answer": 3,
            "explanation": "Quy luật thống nhất và đấu tranh của các mặt đối lập",
            "keywords": "Q: Quy luật nào vạch ra nguồn gốc, động | A: Quy luật thống nhất và đấu · tranh của các mặt đối lập"
        },
        {
            "id": 77,
            "text": "Chọn đáp án đúng nhất theo quan điểm của Chủ nghĩa duy vật biện chứng:",
            "options": [
                "Mối liên hệ chỉ diễn ra giữa các sự vật hiện tượng với nhau còn trong bản thân sự vật hiện tượng không có sự liên hệ.",
                "Mối liên hệ của sự vật hiện tượng chỉ do ý chí con người tạo ra còn bản thân sự vật hiện tượng không có sự liên hệ.",
                "Mối liên hệ của sự vật hiện tượng không chỉ diễn ra giữa các sự vật hiện tượng mà còn diễn ra ngay trong sự vật hiện tượng.",
                "Mối liên hệ chỉ diễn ra giữa các sự vật hiện tượng với con người, khách quan ngoài ý chí con người."
            ],
            "answer": 2,
            "explanation": "Mối liên hệ của sự vật hiện tượng không chỉ diễn ra giữa các sự vật hiện tượng mà còn diễn ra ngay trong sự vật hiện tượng.",
            "keywords": "Q: theo quan điểm của Chủ nghĩa duy vật | A: Mối liên hệ của sự vật hiện tượng · sự vật hiện tượng mà còn diễn ra"
        },
        {
            "id": 78,
            "text": "Chọn đáp án đúng nhất theo quan điểm của chủ nghĩa duy vật biện chứng (vận động và đứng im):",
            "options": [
                "Vận động và đứng im chỉ tương đối, tạm thời.",
                "Vận động và đứng im phải được quan niệm là tuyệt đối.",
                "Vận động là tuyệt đối, đứng im là tương đối, tạm thời.",
                "Vận động và đứng im phải được quan niệm là tương đối."
            ],
            "answer": 2,
            "explanation": "Vận động là tuyệt đối, đứng im là tương đối, tạm thời.",
            "keywords": "Q: theo quan điểm của chủ nghĩa duy vật | A: Vận động là tuyệt đối · đứng im là tương đối · tạm thời"
        },
        {
            "id": 79,
            "text": "Chọn đáp án đúng nhất. Phủ định biện chứng là:",
            "options": [
                "Phủ định làm cho sự vật vận động thụt lùi, đi xuống, tan rã.",
                "Sự thay thế cái cũ bằng cái mới.",
                "Sự phủ định có kế thừa và tạo điều kiện cho phát triển.",
                "Phủ định làm cho sự vật vận động tiến lên, phát triển."
            ],
            "answer": 2,
            "explanation": "Sự phủ định có kế thừa và tạo điều kiện cho phát triển.",
            "keywords": "Q: Phủ định biện chứng là: | A: Sự phủ định có kế thừa và · tạo điều kiện cho phát triển"
        },
        {
            "id": 80,
            "text": "Chọn đáp KHÔNG đúng theo quan điểm của triết học Mác - Lênin:",
            "options": [
                "Nguồn gốc trực tiếp quan trọng nhất quyết định sự ra đời và phát triển của ý thức là lao động, là thực tiễn xã hội.",
                "Ý thức phản ánh hiện thực khách quan vào bộ óc con người thông qua lao động, ngôn ngữ và các quan hệ xã hội.",
                "Ý thức là sản phẩm xã hội, một hiện tượng xã hội.",
                "Ý thức thuần túy là hiện tượng cá nhân."
            ],
            "answer": 3,
            "explanation": "Ý thức thuần túy là hiện tượng cá nhân.",
            "keywords": "Q: KHÔNG đúng - theo quan điểm của triết | A: Ý thức thuần túy · hiện tượng cá nhân"
        },
        {
            "id": 81,
            "text": "Theo chủ nghĩa duy vật biện chứng, bản chất của nhận thức là:",
            "options": [
                "Tùy vào năng lực bẩm sinh.",
                "Là sự nỗ lực của từng cá nhân.",
                "Chỉ dựa vào hoạt động thực tiễn của con người.",
                "Dựa vào sự phong phú của hiện thực khách quan."
            ],
            "answer": 2,
            "explanation": "Chỉ dựa vào hoạt động thực tiễn của con người.",
            "keywords": "Q: Theo chủ nghĩa duy vật biện chứng, bản | A: Chỉ dựa vào hoạt động · thực tiễn của con người"
        },
        {
            "id": 82,
            "text": "Theo quan điểm của chủ nghĩa Mác - Lênin, phát triển của sự vật là:",
            "options": [
                "Phát triển của sự vật không có tính kế thừa.",
                "Phát triển của sự vật có tính kế thừa nguyên xi, máy móc về mặt hình thức.",
                "Phát triển của sự vật là sự kế thừa có chọn lọc, có phê phán, cải tạo và phát triển.",
                "Phát triển của sự vật mang tính chủ quan."
            ],
            "answer": 2,
            "explanation": "Phát triển của sự vật là sự kế thừa có chọn lọc, có phê phán, cải tạo và phát triển.",
            "keywords": "Q: Lênin - Theo quan điểm của chủ nghĩa | A: Phát triển của sự vật là sự kế · chọn lọc, có phê phán, cải tạo và"
        },
        {
            "id": 83,
            "text": "Quy luật nào vạch ra cách thức của sự vận động, phát triển?",
            "options": [
                "Quy luật thống nhất và đấu tranh của các mặt đối lập",
                "Quy luật chuyển hóa từ sự thay đổi về lượng dẫn đến sự thay đổi về chất và ngược lại",
                "Quy luật phủ định của phủ định",
                "Quy luật về sự phù hợp của quan hệ sản xuất với tính chất và trình độ của lực lượng sản xuất"
            ],
            "answer": 1,
            "explanation": "Quy luật chuyển hóa từ sự thay đổi về lượng dẫn đến sự thay đổi về chất và ngược lại",
            "keywords": "Q: Quy luật nào vạch ra cách thức của | A: Quy luật chuyển hóa từ sự thay đổi · dẫn đến sự thay đổi về chất và"
        },
        {
            "id": 84,
            "text": "Chọn đáp án đúng theo triết học Mác - Lênin về sự phát triển:",
            "options": [
                "Là mọi sự vận động nói chung.",
                "Là mọi sự phủ định nói chung.",
                "Là sự phủ định biện chứng.",
                "Là sự phủ định siêu hình."
            ],
            "answer": 2,
            "explanation": "Là sự phủ định biện chứng.",
            "keywords": "Q: Lênin - về sự phát triển: | A: Là sự phủ định biện chứng"
        },
        {
            "id": 85,
            "text": "Chọn đáp KHÔNG đúng theo triết học Mác - Lênin (về lao động và nhận thức):",
            "options": [
                "Ý thức với tư cách là một hoạt động phản ánh, sáng tạo không thể có được ở bên ngoài con người lao động, làm biến đổi thế giới xung quanh.",
                "Lao động là điều kiện đầu tiên và chủ yếu để con người tồn tại.",
                "Lao động không xuất hiện ở trạng thái đơn nhất, ngay từ đầu nó đã mang tính tập thể xã hội.",
                "Con người có thể phản ánh đúng đắn thế giới khách quan không cần thông qua lao động."
            ],
            "answer": 3,
            "explanation": "Con người có thể phản ánh đúng đắn thế giới khách quan không cần thông qua lao động.",
            "keywords": "Q: KHÔNG đúng - theo triết học Mác - | A: Con người có thể phản ánh đúng đắn · giới khách quan không cần thông qua lao"
        },
        {
            "id": 86,
            "text": "Phạm trù cơ bản và nền tảng của chủ nghĩa duy vật là:",
            "options": [
                "Vật chất",
                "Ý thức",
                "Vật chất và ý thức",
                "Tri thức"
            ],
            "answer": 0,
            "explanation": "Vật chất",
            "keywords": "Q: Phạm trù cơ bản và nền tảng của | A: Vật chất"
        },
        {
            "id": 87,
            "text": "Chọn đáp án đúng nhất theo quan điểm của Chủ nghĩa duy vật biện chứng (phát triển):",
            "options": [
                "Phát triển là sự thay đổi thuần túy về mặt số lượng hay khối lượng của sự vật hiện tượng.",
                "Phát triển là sự thay đổi về vị trí của sự vật hiện tượng trong không gian, thời gian.",
                "Phát triển không chỉ là sự thay đổi về số lượng và khối lượng mà nó còn là sự thay đổi về chất của sự vật hiện tượng",
                "Phát triển là sự thay đổi lớn lên về mặt số lượng và chất lượng của sự vật hiện tượng."
            ],
            "answer": 2,
            "explanation": "Phát triển không chỉ là sự thay đổi về số lượng và khối lượng mà nó còn là sự thay đổi về chất của sự vật hiện tượng",
            "keywords": "Q: theo quan điểm của Chủ nghĩa duy vật | A: Phát triển không chỉ là sự thay đổi · mà nó còn là sự thay đổi về"
        },
        {
            "id": 88,
            "text": "Chọn đáp án đúng nhất theo quan điểm của triết học Mác - Lênin (kế thừa trong phát triển):",
            "options": [
                "Phát triển của sự vật có tính kế thừa nhưng trên cơ sở có phê phán, lọc bỏ, cải tạo và phát triển.",
                "Phát triển của sự vật không có tính kế thừa.",
                "Phát triển của sự vật có tính kế thừa nhưng đó là sự kế thừa nguyên xi cái cũ hoặc lắp ghép từ cái cũ sang cái mới một cách máy móc về mặt hình thức.",
                "Phát triển của sự vật có tính kế thừa và phát triển."
            ],
            "answer": 0,
            "explanation": "Phát triển của sự vật có tính kế thừa nhưng trên cơ sở có phê phán, lọc bỏ, cải tạo và phát triển.",
            "keywords": "Q: Lênin - Phát triển của sự vậ | A: Phát triển của sự vật có tính kế · sở có phê phán, lọc bỏ, cải tạo"
        },
        {
            "id": 89,
            "text": "Theo chủ nghĩa duy vật biện chứng thì nguồn gốc tự nhiên của ý thức là:",
            "options": [
                "Bộ óc người và các giống loài trong giới tự nhiên.",
                "Thế giới bên trong loài người và bên ngoài tự nhiên.",
                "Bộ óc người cùng với thế giới bên ngoài tác động lên bộ óc người.",
                "Trí tuệ con người cùng với thế giới tự nhiên bên ngoài."
            ],
            "answer": 2,
            "explanation": "Bộ óc người cùng với thế giới bên ngoài tác động lên bộ óc người.",
            "keywords": "Q: Theo chủ nghĩa duy vật biện chứng thì | A: Bộ óc người cùng với thế giới bên · ngoài tác động lên bộ óc người"
        },
        {
            "id": 90,
            "text": "Mặt xã hội của phương thức sản xuất là gì?",
            "options": [
                "Cơ sở hạ tầng",
                "Quan hệ sản xuất",
                "Kiến trúc thượng tầng",
                "Lực lượng sản xuất"
            ],
            "answer": 1,
            "explanation": "Quan hệ sản xuất",
            "keywords": "Q: Mặt xã hội của phương thức sản xuất | A: Quan hệ sản xuất"
        },
        {
            "id": 91,
            "text": "Phạm trù nào dùng để chỉ tính quy định vốn có của các sự vật, là sự thống nhất hữu cơ của những thuộc tính?",
            "options": [
                "Chất",
                "Lượng",
                "Độ",
                "Vận động"
            ],
            "answer": 0,
            "explanation": "Chất",
            "keywords": "Q: Phạm trù nào dùng để chỉ tính quy | A: Chất"
        },
        {
            "id": 92,
            "text": "Các thiết chế như: Nhà nước, Đảng, Tổ chức chính trị là các yếu tố thuộc phạm trù nào?",
            "options": [
                "Cơ sở hạ tầng",
                "Quan hệ sản xuất",
                "Kiến trúc thượng tầng",
                "Lực lượng sản xuất"
            ],
            "answer": 2,
            "explanation": "Kiến trúc thượng tầng",
            "keywords": "Q: Các thiết chế như: Nhà nước, Đảng, Tổ | A: Kiến trúc thượng tầng"
        },
        {
            "id": 93,
            "text": "Chất của sự vật là gì?",
            "options": [
                "Cấu trúc của sự vật",
                "Tổng số các thuộc tính",
                "Sự thống nhất hữu cơ các thuộc tính",
                "Các thuộc tính sự vật"
            ],
            "answer": 2,
            "explanation": "Sự thống nhất hữu cơ các thuộc tính",
            "keywords": "Q: Chất của sự vật là gì | A: Sự thống nhất hữu cơ các thuộc tính"
        },
        {
            "id": 94,
            "text": "Chọn đáp án KHÔNG đúng (về quan hệ sản xuất):",
            "options": [
                "Trong quan hệ sản xuất thì quan hệ sở hữu tư liệu sản xuất quyết định các quan hệ khác.",
                "Trong quan hệ sản xuất thì quan hệ tổ chức quản lý sản xuất quyết định các quan hệ khác.",
                "Quan hệ sản xuất bao gồm quan hệ sở hữu tư liệu sản xuất, quan hệ tổ chức quản lý sản xuất và quan hệ phân phối sản phẩm.",
                "Quan hệ sản xuất phù hợp với tính chất và trình độ của lực lượng sản xuất sẽ thúc đẩy sản xuất phát triển."
            ],
            "answer": 1,
            "explanation": "Trong quan hệ sản xuất thì quan hệ tổ chức quản lý sản xuất quyết định các quan hệ khác.",
            "keywords": "Q: KHÔNG đúng - (về quan hệ sản xuất): | A: Trong quan hệ sản xuất thì quan hệ · quản lý sản xuất quyết định các quan"
        },
        {
            "id": 95,
            "text": "Theo triết học Mác - Lênin, lao động là yếu tố đầu tiên, cơ bản, quan trọng nhất tạo nên sự thống nhất hữu cơ giữa xã hội và tự nhiên vì:",
            "options": [
                "Lao động làm cho con người ngày càng hoàn thiện hơn.",
                "Lao động là đặc trưng cơ bản đầu tiên phân biệt hoạt động của con người với động vật.",
                "Lao động tạo ra của cải vật chất cho xã hội, mà xã hội là một bộ phận đặc thù của tự nhiên.",
                "Lao động là quá trình diễn ra giữa con người và tự nhiên, con người là trung gian điều tiết, kiểm tra sự trao đổi chất với tự nhiên"
            ],
            "answer": 3,
            "explanation": "Lao động là quá trình diễn ra giữa con người và tự nhiên, con người là trung gian điều tiết, kiểm tra sự trao đổi chất với tự nhiên",
            "keywords": "Q: Lênin - lao động là yếu tố đầu | A: Lao động là quá trình diễn ra giữa · là trung gian điều tiết, kiểm tra sự"
        },
        {
            "id": 96,
            "text": "Chọn đáp án đúng nhất theo quan điểm của chủ nghĩa duy vật biện chứng (tính thống nhất của thế giới):",
            "options": [
                "Thế giới thống nhất ở tính vật chất của nó.",
                "Thế giới thống nhất ở sự tồn tại của nó.",
                "Thế giới thống nhất ở ý niệm tuyệt đối hay ở ý thức con người.",
                "Thế giới thống nhất ở ý thức con người."
            ],
            "answer": 0,
            "explanation": "Thế giới thống nhất ở tính vật chất của nó.",
            "keywords": "Q: theo quan điểm của chủ nghĩa duy vật | A: Thế giới thống nhất ở · tính vật chất của nó"
        },
        {
            "id": 97,
            "text": "Cấu trúc của lực lượng sản xuất bao gồm:",
            "options": [
                "Người lao động và tư liệu sản xuất",
                "Người lao động và công cụ lao động",
                "Người lao động và đối tượng lao động",
                "Tư liệu sản xuất và đối tượng lao động"
            ],
            "answer": 0,
            "explanation": "Người lao động và tư liệu sản xuất",
            "keywords": "Q: Cấu trúc của lực lượng sản xuất bao | A: Người lao động · tư liệu sản xuất"
        },
        {
            "id": 98,
            "text": "Chọn đáp án KHÔNG đúng về phương thức sản xuất:",
            "options": [
                "Phương thức sản xuất là thể thống nhất giữa lực lượng sản xuất và quan hệ sản xuất.",
                "Phương thức sản xuất là phương pháp và cách thức tiến hành sản xuất của cải vật chất trong một giai đoạn phát triển nhất định của lịch sử.",
                "Trong một phương thức sản xuất thì lực lượng sản xuất giữ vai trò quyết định tính chất và trình độ của quan hệ sản xuất.",
                "Trong một phương thức sản xuất thì quan hệ sản xuất giữ vai trò quyết định tính chất và trình độ của lực lượng sản xuất."
            ],
            "answer": 3,
            "explanation": "Trong một phương thức sản xuất thì quan hệ sản xuất giữ vai trò quyết định tính chất và trình độ của lực lượng sản xuất.",
            "keywords": "Q: KHÔNG đúng - về phương thức sản xuất: | A: Trong một phương thức sản xuất thì quan · trò quyết định tính chất và trình độ"
        },
        {
            "id": 99,
            "text": "Chọn đáp KHÔNG đúng theo chủ nghĩa Mác - Lênin, phủ định biện chứng:",
            "options": [
                "Phủ định có tính kế thừa.",
                "Phủ định chấm dứt sự phát triển.",
                "Phủ định đồng thời cũng là khẳng định.",
                "Phủ định có tính khách quan phổ biến."
            ],
            "answer": 1,
            "explanation": "Phủ định chấm dứt sự phát triển.",
            "keywords": "Q: KHÔNG đúng - theo chủ nghĩa Mác - | A: Phủ định chấm dứt sự phát triển"
        },
        {
            "id": 100,
            "text": "Trong lý luận về mâu thuẫn, gọi quá trình đồng hóa và quá trình dị hóa trong sinh học là gì?",
            "options": [
                "Những thuộc tính.",
                "Những sự vật.",
                "Hai yếu tố.",
                "Hai mặt đối lập."
            ],
            "answer": 3,
            "explanation": "Hai mặt đối lập.",
            "keywords": "Q: đồng hóa và dị hóa sinh học | A: Hai mặt đối lập"
        },
        {
            "id": 101,
            "text": "Đâu là quan điểm của triết học Marx - Lenin?",
            "options": [
                "Cái chung là cái toàn bộ, cái riêng là cái bộ phận.",
                "Chỉ có cái riêng mới có thể chuyển hóa thành cái chung.",
                "Chỉ có cái riêng có tính khách quan còn cái chung mang tính chủ quan do con người tạo ra.",
                "Cái riêng là cái toàn bộ, phong phú hơn cái chung, cái chung là cái bộ phận nhưng sâu sắc, bản chất hơn cái riêng."
            ],
            "answer": 3,
            "explanation": "Cái riêng là cái toàn bộ, phong phú hơn cái chung, cái chung là cái bộ phận nhưng sâu sắc, bản chất hơn cái riêng.",
            "keywords": "Q: Lênin - Đâu là quan điểm của triết | A: Cái riêng là cái toàn bộ, phong phú · là cái bộ phận nhưng sâu sắc, bản"
        },
        {
            "id": 102,
            "text": "Đâu không phải là câu trả lời của Chủ nghĩa duy vật biện chứng về tính thống nhất vật chất của thế giới?",
            "options": [
                "Chỉ có một thế giới duy nhất là thế giới vật chất.",
                "Thế giới vật chất bao gồm những bộ phận riêng biệt nhau.",
                "Thế giới vật chất tồn tại khách quan, vĩnh viễn, vô hạn, vô tận, không do ai sinh ra và không mất đi.",
                "Mọi bộ phận của thế giới vật chất đều liên hệ chuyển hóa lẫn nhau."
            ],
            "answer": 1,
            "explanation": "Thế giới vật chất bao gồm những bộ phận riêng biệt nhau.",
            "keywords": "Q: KHÔNG đúng - Đâu không phải là câu | A: Thế giới vật chất bao gồm · những bộ phận riêng biệt nhau"
        },
        {
            "id": 103,
            "text": "Trong một quốc gia đa dân tộc thì vấn đề gì cần giải quyết được coi là có ý nghĩa cơ bản nhất để thực hiện quyền bình đẳng giữa các dân tộc?",
            "options": [
                "Ban hành hệ thống hiến pháp và pháp luật về quyền bình đẳng giữa các dân tộc.",
                "Chống tư tưởng phân biệt chủng tộc, kì thị chia rẽ dân tộc.",
                "Nâng cao trình độ dân trí, văn hóa cho đồng bào.",
                "Xóa bỏ dần sự chênh lệch về mọi mặt giữa các dân tộc do lịch sử để lại."
            ],
            "answer": 3,
            "explanation": "Xóa bỏ dần sự chênh lệch về mọi mặt giữa các dân tộc do lịch sử để lại.",
            "keywords": "Q: Trong một quốc gia đa dân tộc thì | A: Xóa bỏ dần sự chênh lệch về mọi · giữa các dân tộc do lịch sử để"
        },
        {
            "id": 104,
            "text": "Nhà triết học nào để ra thuyết: “ Tam tòng, Tứ đức “ cho người con gái?",
            "options": [
                "Khổng Tử.",
                "Tuân tử.",
                "Hàn Mặc Tử.",
                "Lão Tử."
            ],
            "answer": 0,
            "explanation": "Khổng Tử.",
            "keywords": "Q: Nhà triết học nào để ra thuyết: “ | A: Khổng Tử"
        },
        {
            "id": 105,
            "text": "Đêmôcrít nhà triết học cổ Hy Lạp quan niệm vật chất là gì?",
            "options": [
                "Nước.",
                "Lửa.",
                "Không khí.",
                "Nguyên tử."
            ],
            "answer": 3,
            "explanation": "Nguyên tử.",
            "keywords": "Q: Democrit - Đêmôcrít nhà triết học cổ Hy | A: Nguyên tử"
        },
        {
            "id": 106,
            "text": "Phạm trù cơ bản và nền tảng của chủ nghĩa duy vật là:",
            "options": [
                "Vật chất.",
                "Ý thức.",
                "Vật chất và ý thức.",
                "Tri thức."
            ],
            "answer": 0,
            "explanation": "Vật chất.",
            "keywords": "Q: Phạm trù cơ bản và nền tảng của | A: Vật chất"
        },
        {
            "id": 107,
            "text": "Theo Ăngghen, hình thức vận động nào nói lên sự thay thế các phương thức sản xuất trong quá trình phát triển của xã hội loài người?",
            "options": [
                "Lý học.",
                "Xã hội.",
                "Hóa học.",
                "Sinh học."
            ],
            "answer": 1,
            "explanation": "Xã hội.",
            "keywords": "Q: Ăngghen - hình thức vận động | A: Xã hội"
        },
        {
            "id": 108,
            "text": "Theo Mác - Lênin, thời gian tồn tại của vật chất có mấy chiều?",
            "options": [
                "1 chiều.",
                "2 chiều.",
                "3 chiều.",
                "Đa chiều."
            ],
            "answer": 0,
            "explanation": "1 chiều.",
            "keywords": "Q: Lênin - thời gian tồn tại của vật | A: 1 chiều"
        },
        {
            "id": 109,
            "text": "Ai là tác giả câu nói: \"Con người không ai có thể tắm hai lần trên một dòng sông\"?",
            "options": [
                "Talet.",
                "Heraclite.",
                "Democrite.",
                "Pitago."
            ],
            "answer": 1,
            "explanation": "Heraclite.",
            "keywords": "Q: Ai là tác giả câu nói: \"Con người | A: Heraclite"
        },
        {
            "id": 110,
            "text": "Chọn đáp án đúng nhất. Triết học khác với các khoa học khác ở:",
            "options": [
                "Tính đặc thù của hệ thống tri thức khoa học và phương pháp nghiên cứu.",
                "Tính đặc thù của hệ thống kiến thức nhân loại và phương pháp logic.",
                "Tính đặc trưng của hệ thống phân tích và phương pháp logic.",
                "Tính đặc trưng của công cụ lý tính và phương pháp nghiên cứu."
            ],
            "answer": 0,
            "explanation": "Tính đặc thù của hệ thống tri thức khoa học và phương pháp nghiên cứu.",
            "keywords": "Q: Triết học khác với các khoa học khác | A: Tính đặc thù của hệ thống tri thức · khoa học và phương pháp nghiên cứu"
        },
        {
            "id": 111,
            "text": "Phạm trù triết học nào dùng để chỉ những sự vật hiện tượng tồn tại một chỉnh thể mang tính độc lập tương đối so với hệ thống khác có hạn trong không gian và thời gian?",
            "options": [
                "Nội dung.",
                "Hình thức.",
                "Cái chung.",
                "Cái riêng."
            ],
            "answer": 3,
            "explanation": "Cái riêng.",
            "keywords": "Q: Phạm trù triết học nào dùng để chỉ | A: Cái riêng"
        },
        {
            "id": 112,
            "text": "Trường phái triết học phủ nhận tính thứ nhất của vật chất là?",
            "options": [
                "Chủ nghĩa hoài nghi.",
                "Chủ nghĩa duy vật biện chứng.",
                "Chủ nghĩa duy tâm.",
                "Chủ nghĩa duy vật siêu hình thế kỷ XVII - XVIII."
            ],
            "answer": 2,
            "explanation": "Chủ nghĩa duy tâm.",
            "keywords": "Q: Trường phái triết học phủ nhận tính thứ | A: Chủ nghĩa duy tâm"
        },
        {
            "id": 113,
            "text": "Ph.Ăngghen: “Khi xã hội có nhu cầu về kỹ thuật thì nó thúc đẩy khoa học phát triển hơn mười […]”. Điền vào chỗ trống.",
            "options": [
                "Nhà phát minh.",
                "Viện nghiên cứu.",
                "Tiến sĩ khoa học.",
                "Trường đại học."
            ],
            "answer": 3,
            "explanation": "Trường đại học.",
            "keywords": "Q: Ph.Ăngghen: “Khi xã hội có nhu cầu về | A: Trường đại học"
        },
        {
            "id": 114,
            "text": "Cơ sở lý luận của quan điểm toàn diện là gì?",
            "options": [
                "Phép biện chứng.",
                "Nguyên lý về mối liên hệ phổ biến.",
                "Nguyên lý về sự phát triển.",
                "Phép siêu hình."
            ],
            "answer": 1,
            "explanation": "Nguyên lý về mối liên hệ phổ biến.",
            "keywords": "Q: Cơ sở lý luận của quan điểm toàn | A: Nguyên lý về mối liên hệ phổ biến"
        },
        {
            "id": 115,
            "text": "Yếu tố nào không thuộc Lực lượng sản xuất:",
            "options": [
                "Trình độ thành thạo của người lao động.",
                "Kinh nghiệm.",
                "Năng lực tổ chức, quản lý người lao động.",
                "Vị trí của người lao động trong doanh nghiệp."
            ],
            "answer": 3,
            "explanation": "Vị trí của người lao động trong doanh nghiệp.",
            "keywords": "Q: Yếu tố nào không thuộc Lực lượng sản | A: Vị trí của người lao · động trong doanh nghiệp"
        },
        {
            "id": 116,
            "text": "Trường phái triết học nào cho không thể có vật chất không vận động và không thể có vận động ngoài vật chất?",
            "options": [
                "Chủ nghĩa duy vật siêu hình.",
                "Chủ nghĩa hoài nghi.",
                "Chủ nghĩa duy vật biện chứng.",
                "Chủ nghĩa duy vật tự phát thời kỳ cổ đại."
            ],
            "answer": 2,
            "explanation": "Chủ nghĩa duy vật biện chứng.",
            "keywords": "Q: Trường phái triết học nào cho không thể | A: Chủ nghĩa duy vật biện chứng"
        },
        {
            "id": 117,
            "text": "Chọn đáp án đúng nhất. Trong triết học, mâu thuẫn có nghĩa là:",
            "options": [
                "Những khuynh hướng trái ngược nhau.",
                "Sự thống nhất giữa các mặt đối lập.",
                "Sự thống nhất và đấu tranh giữa các mặt đối lập.",
                "Sự đấu tranh giữa các mặt đối lập."
            ],
            "answer": 2,
            "explanation": "Sự thống nhất và đấu tranh giữa các mặt đối lập.",
            "keywords": "Q: Trong triết học, mâu thuẫn có nghĩa là: | A: Sự thống nhất và đấu tranh · giữa các mặt đối lập"
        },
        {
            "id": 118,
            "text": "Chọn đáp án đúng nhất theo triết học Mác - Lênin:",
            "options": [
                "Một nội dung luôn gắn với hình thức nhất định.",
                "Một nội dung có thể có nhiều hình thức.",
                "Một nội dung quyết định số hình thức được thể hiện.",
                "Một hình thức luôn gắn với nội dung nhất định."
            ],
            "answer": 1,
            "explanation": "Một nội dung có thể có nhiều hình thức.",
            "keywords": "Q: Lênin - Một nội dung có thể | A: Một nội dung có thể · có nhiều hình thức"
        },
        {
            "id": 119,
            "text": "Chọn đáp án KHÔNG đúng. Đối tượng của triết học Mác là:",
            "options": [
                "Các quy luật chung nhất về thế giới.",
                "Quan hệ giữa tư duy và tồn tại.",
                "Vai trò của con người trong từng giai đoạn lịch sử đối với thế giới.",
                "Hệ thống quan điểm triết học trong lịch sử."
            ],
            "answer": 3,
            "explanation": "Hệ thống quan điểm triết học trong lịch sử.",
            "keywords": "Q: KHÔNG đúng - Đối tượng của triết học | A: Hệ thống quan điểm triết · học trong lịch sử"
        },
        {
            "id": 120,
            "text": "Con người phát triển và hoàn thiện mình chủ yếu dựa trên yếu tố nào?",
            "options": [
                "Phát triển kinh tế.",
                "Đấu tranh giai cấp.",
                "Lao động sản xuất.",
                "Phát triển xã hội."
            ],
            "answer": 2,
            "explanation": "Lao động sản xuất.",
            "keywords": "Q: Con người phát triển và hoàn thiện mình | A: Lao động sản xuất"
        },
        {
            "id": 121,
            "text": "Qui luật nào vạch ra nguồn gốc, động lực của sự vận động và phát triển?",
            "options": [
                "Quy luật phủ định của phủ định.",
                "Quy luật chuyển hóa từ sự thay đổi về lượng dẫn đến sự thay đổi về chất và ngược lại.",
                "Quy luật về mối liên hệ biện chứng giữa cơ sở hạ tầng và kiến trúc thượng tầng.",
                "Quy luật thống nhất và đấu tranh của các mặt đối lập."
            ],
            "answer": 3,
            "explanation": "Quy luật thống nhất và đấu tranh của các mặt đối lập.",
            "keywords": "Q: Qui luật nào vạch ra nguồn gốc, động | A: Quy luật thống nhất và đấu · tranh của các mặt đối lập"
        },
        {
            "id": 122,
            "text": "Sự biến đổi của quan hệ sản xuất do yếu tố nào quyết định nhất?",
            "options": [
                "Sự phong phú của đối tượng lao động.",
                "Do công cụ hiện đại.",
                "Trình độ của người lao động.",
                "Trình độ của lực lượng sản xuất."
            ],
            "answer": 3,
            "explanation": "Trình độ của lực lượng sản xuất.",
            "keywords": "Q: Sự biến đổi của quan hệ sản xuất | A: Trình độ của lực lượng sản xuất"
        },
        {
            "id": 123,
            "text": "Chọn đáp án đúng nhất theo quan điểm của Chủ nghĩa duy vật biện chứng:",
            "options": [
                "Vận động, không gian, thời gian là sản phẩm do ý chí con người tạo ra.",
                "Vận động, không gian, thời gian không có tính vật chất.",
                "Vận động, không gian, thời gian là hình thức tồn tại của vật chất.",
                "Vận động, không gian, thời gian là sản phẩm do đấng tối cao tạo ra."
            ],
            "answer": 2,
            "explanation": "Vận động, không gian, thời gian là hình thức tồn tại của vật chất.",
            "keywords": "Q: Chọn đáp án đúng nhất theo quan điểm | A: Vận động, không gian, thời gian là · hình thức tồn tại của vật chất"
        },
        {
            "id": 124,
            "text": "Triết học ra đời vào thời gian nào?",
            "options": [
                "Thiên niên kỷ II trước Công Nguyên.",
                "Thế kỷ VIII – thế kỷ VI trước Công Nguyên.",
                "Thế kỷ II sau Công Nguyên.",
                "Thế kỷ III sau Công Nguyên."
            ],
            "answer": 1,
            "explanation": "Thế kỷ VIII – thế kỷ VI trước Công Nguyên.",
            "keywords": "Q: Triết học ra đời vào thời gian nào | A: Thế kỷ VIII – thế · kỷ VI trước Công Nguyên"
        },
        {
            "id": 125,
            "text": "Ưu điểm nổi bật trong quan niệm về vật chất của các nhà triết học duy vật cổ đại là:",
            "options": [
                "Đồng nhất vật chất với vật thể.",
                "Đồng nhất vật chất với nguyên tử.",
                "Lấy bản thân giới tự nhiên để giải thích về giới tự nhiên.",
                "Đồng nhất vật chất với ngũ hành."
            ],
            "answer": 2,
            "explanation": "Lấy bản thân giới tự nhiên để giải thích về giới tự nhiên.",
            "keywords": "Q: Ưu điểm nổi bật trong quan niệm về | A: Lấy bản thân giới tự nhiên để · giải thích về giới tự nhiên"
        },
        {
            "id": 126,
            "text": "Hình thức nào không phải cơ bản là của thực tiễn?",
            "options": [
                "Hoạt động sản xuất vật chất.",
                "Hoạt động biểu diễn nghệ thuật.",
                "Hoạt động chính trị - xã hội.",
                "Hoạt động thực nghiệm khoa học."
            ],
            "answer": 1,
            "explanation": "Hoạt động biểu diễn nghệ thuật.",
            "keywords": "Q: KHÔNG đúng - Hình thức nào không phải | A: Hoạt động biểu diễn nghệ thuật"
        },
        {
            "id": 127,
            "text": "Thomson phát hiện ra điện tử năm nào?",
            "options": [
                "Năm 1987.",
                "Năm 1879.",
                "Năm 1978.",
                "Năm 1897."
            ],
            "answer": 3,
            "explanation": "Năm 1897.",
            "keywords": "Q: Thomson phát hiện ra điện tử năm nào | A: Năm 1897"
        },
        {
            "id": 128,
            "text": "Câu: \"Chẳng chua cũng thể là chanh, chẳng ngọt cũng thể cam sành chín cây\" thể hiện phạm trù nào?",
            "options": [
                "Chất.",
                "Lượng.",
                "Độ.",
                "Bước nhảy."
            ],
            "answer": 0,
            "explanation": "Chất.",
            "keywords": "Q: Câu: \"Chẳng chua cũng thể là chanh, chẳng | A: Chất"
        },
        {
            "id": 129,
            "text": "Rơnghen phát hiện ra tia X năm nào?",
            "options": [
                "Năm 1894.",
                "Năm 1895.",
                "Năm 1985.",
                "Năm 1598."
            ],
            "answer": 1,
            "explanation": "Năm 1895.",
            "keywords": "Q: Rơnghen phát hiện ra tia X năm nào | A: Năm 1895"
        },
        {
            "id": 130,
            "text": "V.I.Lênin: \"Cuộc đấu tranh của quần chúng bị tước hết quyền, bị áp bức và lao động chống bọn có đặc quyền, đặc lợi, bọn áp bức và ăn bám, cuộc đấu tranh của những người công nhân\" là:",
            "options": [
                "Đấu tranh kinh tế.",
                "Đấu tranh chính trị.",
                "Đấu tranh dân tộc.",
                "Đấu tranh giai cấp."
            ],
            "answer": 3,
            "explanation": "Đấu tranh giai cấp.",
            "keywords": "Q: Lênin - Cuộc đấu tranh của quần chún | A: Đấu tranh giai cấp"
        },
        {
            "id": 131,
            "text": "Theo chủ nghĩa Mác -Lênin, cơ sở hạ tầng của một xã hội nhất định gồm mấy quan hệ sản xuất?",
            "options": [
                "Một.",
                "Hai.",
                "Ba.",
                "Bốn."
            ],
            "answer": 2,
            "explanation": "Ba.",
            "keywords": "Q: Lênin - Theo chủ nghĩa Mác -, cơ | A: Ba"
        },
        {
            "id": 132,
            "text": "Điền vào chỗ trống. Thế giới quan là toàn bộ những […,...] của con người về thế giới, về bản thân con người, về cuộc sống và […] của con người trong thế giới đó.",
            "options": [
                "Quan điểm, tư tưởng - vị trí.",
                "Quan điểm, tư tưởng - vai trò.",
                "Quan điểm, quan niệm - vị trí.",
                "Quan điểm, quan niệm - vai trò."
            ],
            "answer": 2,
            "explanation": "Quan điểm, quan niệm - vị trí.",
            "keywords": "Q: Điền vào chỗ trống. Thế giới quan là | A: Quan điểm · quan niệm - vị trí"
        },
        {
            "id": 133,
            "text": "Theo quan điểm của chủ nghĩa duy vật biện chứng, nguồn gốc xã hội của ý thức là:",
            "options": [
                "Lao động và ngôn ngữ.",
                "Lao động và chữ viết.",
                "Ngôn ngữ và chữ viết.",
                "Tự nhiên và tồn tại."
            ],
            "answer": 0,
            "explanation": "Lao động và ngôn ngữ.",
            "keywords": "Q: Theo quan điểm của chủ nghĩa duy vật | A: Lao động và ngôn ngữ"
        },
        {
            "id": 134,
            "text": "Phủ định biện chứng thể hiện câu tục ngữ nào sau đây?",
            "options": [
                "Tre già măng mọc.",
                "Có mới nới cũ.",
                "Nước chảy đá mòn.",
                "Có sức khoẻ là có tất cả."
            ],
            "answer": 0,
            "explanation": "Tre già măng mọc.",
            "keywords": "Q: Phủ định biện chứng thể hiện câu tục | A: Tre già măng mọc"
        },
        {
            "id": 135,
            "text": "Vị vua Phật tử nào dời kinh đô từ Hoa Lư ra Thăng Long?",
            "options": [
                "Lê Đại Hành.",
                "Lý Công Uẩn.",
                "Trần Nhân Tông.",
                "Trần Thánh Tông."
            ],
            "answer": 1,
            "explanation": "Lý Công Uẩn.",
            "keywords": "Q: Vị vua Phật tử nào dời kinh đô | A: Lý Công Uẩn"
        },
        {
            "id": 136,
            "text": "Mâu thuẫn đối kháng giữa các giai cấp là do:",
            "options": [
                "Sự khác nhau về tư tưởng, lối sống.",
                "Sự đối lập về lợi ích cơ bản – lợi ích kinh tế.",
                "Sự khác nhau giữa giàu và nghèo.",
                "Sự khác nhau về mức thu nhập."
            ],
            "answer": 1,
            "explanation": "Sự đối lập về lợi ích cơ bản – lợi ích kinh tế.",
            "keywords": "Q: Mâu thuẫn đối kháng giữa các giai cấp | A: Sự đối lập về lợi ích cơ · bản – lợi ích kinh tế"
        },
        {
            "id": 137,
            "text": "Chọn đáp án KHÔNG đúng. Vai trò quyết định của sản xuất vật chất đối với sự tồn tại và phát triển xã hội:",
            "options": [
                "Sản xuất vật chất là cơ sở cho sự sinh tồn xã hội.",
                "Sản xuất vật chất là cơ sở hình thành nên tất cả các hình thức quan hệ xã hội.",
                "Sản xuất vật chất là cơ sở cho sự tiến bộ xã hội.",
                "Sản xuất vật chất là điều kiện cần cho sự sinh tồn xã hội."
            ],
            "answer": 3,
            "explanation": "Sản xuất vật chất là điều kiện cần cho sự sinh tồn xã hội.",
            "keywords": "Q: KHÔNG đúng - Vai trò quyết định của | A: Sản xuất vật chất là điều kiện · cần cho sự sinh tồn xã hội"
        },
        {
            "id": 138,
            "text": "Khái niệm nào chỉ một cộng đồng người ổn định được hình thành trong lịch sử trong một lãnh thổ nhất định, có chung mối liên hệ về kinh tế, ngôn ngữ và một nền văn hóa?",
            "options": [
                "Bộ lạc.",
                "Dân tộc.",
                "Quốc gia.",
                "Bộ tộc."
            ],
            "answer": 1,
            "explanation": "Dân tộc.",
            "keywords": "Q: Khái niệm nào chỉ một cộng đồng người | A: Dân tộc"
        },
        {
            "id": 139,
            "text": "Chọn đáp án đúng, những hình thức nhận thức: khái niệm, phán đoán, suy luận thuộc giai đoạn nhận thức nào?",
            "options": [
                "Nhận thức cảm tính.",
                "Nhận thức lý tính.",
                "Trực quan sinh động.",
                "Nhận thức kinh nghiệm."
            ],
            "answer": 1,
            "explanation": "Nhận thức lý tính.",
            "keywords": "Q: những hình thức nhận thức: khái niệm, phán | A: Nhận thức lý tính"
        },
        {
            "id": 140,
            "text": "Phạm trù nào nói lên tổ hợp thái độ, thuộc tính riêng trong quan hệ hành động của từng người với giới tự nhiên, với xã hội và bản thân?",
            "options": [
                "Cá thể.",
                "Thực thể.",
                "Nhân cách.",
                "Tư cách."
            ],
            "answer": 2,
            "explanation": "Nhân cách.",
            "keywords": "Q: Phạm trù nào nói lên tổ hợp thái | A: Nhân cách"
        },
        {
            "id": 141,
            "text": "Lựa chọn câu đúng theo quan điểm của chủ nghĩa duy vật biện chứng.",
            "options": [
                "Nguồn gốc của vận động là do thượng đế quyết định.",
                "Nguồn gốc của vận động là ở trong bản thân sự vật, hiện tượng; do sự tác động của các mặt, các yếu tố trong sự vật, hiện tượng gây ra.",
                "Nguồn gốc của vận động là ở bên ngoài sự vật, hiện tượng.",
                "Nguồn gốc của vận động là ở trong bản thân sự vật, hiện tượng, do có sự chuyển hóa giữa các mặt, các yếu tố trong sự vật đó."
            ],
            "answer": 1,
            "explanation": "Nguồn gốc của vận động là ở trong bản thân sự vật, hiện tượng; do sự tác động của các mặt, các yếu tố trong sự vật, hiện tượng gây ra.",
            "keywords": "Q: nguồn gốc vận động - duy vật biện chứng | A: trong bản thân sự vật · tác động của các mặt, các yếu tố"
        },
        {
            "id": 142,
            "text": "Theo Ăngghen, một trong những phương thức tồn tại cơ bản của vật chất là:",
            "options": [
                "Phát triển.",
                "Chuyển hóa từ dạng này sang dạy khác.",
                "Phủ định.",
                "Vận động."
            ],
            "answer": 3,
            "explanation": "Vận động.",
            "keywords": "Q: Ăngghen - Theo , một trong những phương | A: Vận động"
        },
        {
            "id": 143,
            "text": "Chủ nghĩa Mác-Lênin do ai sáng lập?",
            "options": [
                "C.Mác và Ăngghen.",
                "C.Mác và V.I. Lênin.",
                "Ăngghen và V.I. Lênin.",
                "Mác, Ăngghen và V.I. Lênin."
            ],
            "answer": 0,
            "explanation": "C.Mác và Ăngghen.",
            "keywords": "Q: Lênin - Chủ nghĩa Mác- do ai sáng | A: C.Mác và Ăngghen"
        },
        {
            "id": 144,
            "text": "Phạm trù triết học dùng để chỉ những gì chưa có, nhưng sẽ có, sẽ tới khi có điều kiện tương ứng thích hợp được gọi là gì?",
            "options": [
                "Khả Năng.",
                "Nguyên nhân.",
                "Tất nhiên.",
                "Hiện thực."
            ],
            "answer": 0,
            "explanation": "Khả Năng.",
            "keywords": "Q: Phạm trù triết học dùng để chỉ những | A: Khả Năng"
        },
        {
            "id": 145,
            "text": "Về mặt bản chất, nguyên lý về mối liên hệ phổ biến một khi được cụ thể hóa sẽ được biểu hiện bằng:",
            "options": [
                "Quy luật Cơ sở hạ tầng quyết định Kiến trúc thượng tầng.",
                "Quy luật quan hệ sản xuất phù hợp với trình độ của lực lượng sản xuất.",
                "Ba quy luật của phép biện chứng duy vật.",
                "Sáu cặp phạm trù cơ bản của phép biện chứng duy vật."
            ],
            "answer": 3,
            "explanation": "Sáu cặp phạm trù cơ bản của phép biện chứng duy vật.",
            "keywords": "Q: Về mặt bản chất, nguyên lý về mối | A: Sáu cặp phạm trù cơ bản · của phép biện chứng duy vật"
        },
        {
            "id": 146,
            "text": "Chọn đáp án đúng nhất, hình thức đầu tiên của quá trình nhận thức là:",
            "options": [
                "Cảm giác.",
                "Khái niệm.",
                "Tri giác.",
                "Biểu tượng."
            ],
            "answer": 0,
            "explanation": "Cảm giác.",
            "keywords": "Q: nhất, hình thức đầu tiên của quá trình | A: Cảm giác"
        },
        {
            "id": 147,
            "text": "V.I.Lênin viết: “Những […] cũ đã bị phá vỡ vì […] mới của chúng”. Điền vào dấu […].",
            "options": [
                "Hình thức/ nội dung.",
                "Nội dung/ hình thức.",
                "Hiện tượng/ bản chất.",
                "Ngẫu nhiên/ tất nhiên."
            ],
            "answer": 0,
            "explanation": "Hình thức/ nội dung.",
            "keywords": "Q: V.I.Lênin viết: “Những […] cũ đã bị phá | A: Hình thức/ nội dung"
        },
        {
            "id": 148,
            "text": "Theo Ăngghen, nghĩa chung nhất của vận động là gì?",
            "options": [
                "Sự dịch chuyển của vật thể trong không gian.",
                "Sự biến đổi nói chung.",
                "Mọi sự thay đổi và mọi quá trình diễn ra trong vũ trụ.",
                "Sự dịch chuyển của thời gian và không gian."
            ],
            "answer": 2,
            "explanation": "Mọi sự thay đổi và mọi quá trình diễn ra trong vũ trụ.",
            "keywords": "Q: Ăngghen - Theo , nghĩa chung nhất của | A: Mọi sự thay đổi và mọi quá · trình diễn ra trong vũ trụ"
        },
        {
            "id": 149,
            "text": "Chọn câu trả lời đúng nhất. Cơ sở hạ tầng là:",
            "options": [
                "Toàn bộ đất đai, máy móc, phương tiện để sản xuất.",
                "Toàn bộ những quan hệ sản xuất hợp thành một cơ cấu kinh tế của một xã hội nhất định.",
                "Toàn bộ những thành phần kinh tế của một xã hội.",
                "Là cơ cấu công – nông nghiệp của một nền kinh tế xã hội."
            ],
            "answer": 1,
            "explanation": "Toàn bộ những quan hệ sản xuất hợp thành một cơ cấu kinh tế của một xã hội nhất định.",
            "keywords": "Q: Chọn câu trả lời đúng nhất. Cơ sở | A: Toàn bộ những quan hệ sản xuất hợp · cơ cấu kinh tế của một xã hội"
        },
        {
            "id": 150,
            "text": "Tổng hợp tất cả những mặt, những mối liên hệ tất nhiên, tương đối ổn định bên trong sự vật, quy định sự vận động và phát triển của sự vật gọi là gì?",
            "options": [
                "Bản chất.",
                "Hiện tượng.",
                "Nội dung.",
                "Hình thức."
            ],
            "answer": 0,
            "explanation": "Bản chất.",
            "keywords": "Q: Tổng hợp tất cả những mặt, những mối | A: Bản chất"
        },
        {
            "id": 151,
            "text": "Chọn đáp án đúng nhất theo quan điểm của chủ nghĩa duy vật biện chứng:",
            "options": [
                "Vận động và đứng im chỉ tương đối, tạm thời.",
                "Vận động và đứng im phải được quan niệm là tuyệt đối.",
                "Vận động là tuyệt đối, đứng im là tương đối tạm thời.",
                "Vận động và đứng im phải được quan niệm là tương đối."
            ],
            "answer": 2,
            "explanation": "Vận động là tuyệt đối, đứng im là tương đối tạm thời.",
            "keywords": "Q: nhất theo quan điểm của chủ nghĩa duy | A: Vận động là tuyệt đối, đứng · im là tương đối tạm thời"
        },
        {
            "id": 152,
            "text": "Câu thành ngữ \"Cá không ăn muối cá ươn, con cãi cha mẹ trăm đường con hư\" thể hiện cấp độ nào của nhận thức?",
            "options": [
                "Nhận thức kinh nghiệm.",
                "Nhận thức lý luận.",
                "Nhận thức thông thường.",
                "Nhận thức khoa học."
            ],
            "answer": 2,
            "explanation": "Nhận thức thông thường.",
            "keywords": "Q: Câu thành ngữ \"Cá không ăn muối cá | A: Nhận thức thông thường"
        },
        {
            "id": 153,
            "text": "Hình thức nhận thức: Cảm giác, tri giác, biểu tượng thuộc giai đoạn nhận thức nào?",
            "options": [
                "Nhận thức cảm tính.",
                "Nhận thức lý tính.",
                "Nhận thức thông thường.",
                "Nhận thức khoa học."
            ],
            "answer": 0,
            "explanation": "Nhận thức cảm tính.",
            "keywords": "Q: Hình thức nhận thức: Cảm giác, tri giác, | A: Nhận thức cảm tính"
        },
        {
            "id": 154,
            "text": "Theo Ăngghen, hình thức vận động đặc trưng của con người và xã hội loài người là hình thức nào?",
            "options": [
                "Vận động sinh học.",
                "Vận động cơ học.",
                "Vận động xã hội.",
                "Vận động lý học."
            ],
            "answer": 2,
            "explanation": "Vận động xã hội.",
            "keywords": "Q: Ăngghen - hình thức vận động | A: Vận động xã hội"
        },
        {
            "id": 155,
            "text": "Dấu hiệu để phân biệt khả năng với hiện thực là gì?",
            "options": [
                "Sự có mặt và không có mặt trên thực tế.",
                "Sự nhận biết được hay không nhận biết được.",
                "Sự xác định hay không xác định.",
                "Sự nhận biết hay không nhận biết."
            ],
            "answer": 0,
            "explanation": "Sự có mặt và không có mặt trên thực tế.",
            "keywords": "Q: Dấu hiệu để phân biệt khả năng với | A: Sự có mặt · không có mặt trên thực tế"
        },
        {
            "id": 156,
            "text": "Trong quan hệ sản xuất, quan hệ nào giữ vai trò quyết định:",
            "options": [
                "Quan hệ sở hữu tư liệu sản xuất.",
                "Quan hệ tổ chức, quản lý quá trình sản xuất.",
                "Quan hệ phân phối sản phẩm.",
                "Quan hệ sở hữu tư nhân về tư liệu sản xuất."
            ],
            "answer": 0,
            "explanation": "Quan hệ sở hữu tư liệu sản xuất.",
            "keywords": "Q: Trong quan hệ sản xuất, quan hệ nào | A: Quan hệ sở hữu tư liệu sản xuất"
        },
        {
            "id": 157,
            "text": "Chọn đáp án đúng theo triết học Mác - Lênin về sự phát triển:",
            "options": [
                "Là mọi sự vận động nói chung.",
                "Là mọi sự phủ định nói chung.",
                "Là sự phủ định biện chứng.",
                "Là sự phủ định siêu hình."
            ],
            "answer": 2,
            "explanation": "Là sự phủ định biện chứng.",
            "keywords": "Q: Lênin - về sự phát triển: | A: Là sự phủ định biện chứng"
        },
        {
            "id": 158,
            "text": "Về mặt bản chất, nguyên lý về sự phát triển một khi được cụ thể hóa sẽ được biểu hiện bằng:",
            "options": [
                "Quy luật Cơ sở hạ tầng quyết định Kiến trúc thượng tầng.",
                "Quy luật quan hệ sản xuất phù hợp với trình độ của lực lượng sản xuất.",
                "Ba quy luật của phép biện chứng duy vật.",
                "Sáu cặp phạm trù cơ bản của phép biện chứng duy vật."
            ],
            "answer": 2,
            "explanation": "Ba quy luật của phép biện chứng duy vật.",
            "keywords": "Q: Về mặt bản chất, nguyên lý về sự | A: Ba quy luật của phép · biện chứng duy vật"
        },
        {
            "id": 159,
            "text": "Theo triết học của Mác - Lênin, đặc điểm hệ tư tưởng:",
            "options": [
                "Hệ tư tưởng là hệ thống những quan điểm, hệ thống hóa, khái quát hóa thành lý luận, thành các học thuyết chính trị xã hội phản ánh lợi ích của một giai cấp nhất định.",
                "Tất cả hệ tư tưởng đều là hệ tư tưởng khoa học.",
                "Trong xã hội có giai cấp thì chỉ có hệ tư tưởng biểu hiện tính giai cấp của ý thức xã hội.",
                "Hệ tư tưởng không ảnh hưởng đến sự phát triển của khoa học. Hệ tư tưởng ra đời trực tiếp từ tâm lý xã hội, là sự cô đọng của tâm lý xã hội."
            ],
            "answer": 0,
            "explanation": "Hệ tư tưởng là hệ thống những quan điểm, hệ thống hóa, khái quát hóa thành lý luận, thành các học thuyết chính trị xã hội phản ánh lợi ích của một giai cấp nhất định.",
            "keywords": "Q: Lênin - Theo triết học của Mác - | A: Hệ tư tưởng là hệ thống những quan · thành các học thuyết chính trị xã hội"
        },
        {
            "id": 160,
            "text": "Chọn đáp án đúng nhất. Theo Lênin, con đường biện chứng của sự nhận thức chân lý là một:",
            "options": [
                "Sự phản ánh.",
                "Quá trình.",
                "Giai đoạn.",
                "Hình thức của tư duy."
            ],
            "answer": 1,
            "explanation": "Quá trình.",
            "keywords": "Q: Lênin - Theo , con đường biện chứng | A: Quá trình"
        },
        {
            "id": 161,
            "text": "Mác: “Trong tính hiện thực của nó, bản chất con người là tổng hòa […]”. Điền vào chỗ trống.",
            "options": [
                "Những quan hệ sản xuất.",
                "Những quan hệ xã hội.",
                "Những quan hệ giao tiếp.",
                "Những quan hệ giai cấp."
            ],
            "answer": 1,
            "explanation": "Những quan hệ xã hội.",
            "keywords": "Q: Mác: “Trong tính hiện thực của nó, bản | A: Những quan hệ xã hội"
        },
        {
            "id": 162,
            "text": "Chọn đáp án KHÔNG đúng:",
            "options": [
                "Quy luật tự nhiên diễn ra tự phát thông qua sự tác động của các lực lượng tự nhiên.",
                "Phát triển là khuynh hướng chung của sự vận động của sự vật và hiện tượng.",
                "Quy luật tự nhiên diễn ra tự phát qua sự tác động của các lực lượng siêu nhiên.",
                "Quy luật xã hội hình thành và tác động thông qua hoạt động của con người nhưng không phụ thuộc vào ý thức của con người."
            ],
            "answer": 2,
            "explanation": "Quy luật tự nhiên diễn ra tự phát qua sự tác động của các lực lượng siêu nhiên.",
            "keywords": "Q: KHÔNG đúng - Chọn đáp án KHÔNG đúng: | A: Quy luật tự nhiên diễn ra tự phát · sự tác động của các lực lượng siêu"
        },
        {
            "id": 163,
            "text": "Chọn đáp án KHÔNG đúng. Các nhà triết học duy vật cho rằng:",
            "options": [
                "Vật chất có trước ý thức.",
                "Vật chất quyết định ý thức.",
                "Bản chất của thế giới là vật chất.",
                "Quy luật xã hội hình thành và tác động thông qua hoạt động của con người nhưng không phụ thuộc vào ý thức của con người."
            ],
            "answer": 3,
            "explanation": "Quy luật xã hội hình thành và tác động thông qua hoạt động của con người nhưng không phụ thuộc vào ý thức của con người.",
            "keywords": "Q: KHÔNG đúng - Các nhà triết học duy | A: Quy luật xã hội hình thành và tác · của con người nhưng không phụ thuộc vào"
        },
        {
            "id": 164,
            "text": "Nhà nước đầu tiên trong lịch sử là kiểu nhà nước nào?",
            "options": [
                "Nhà nước phong kiến.",
                "Nhà nước tư sản.",
                "Nhà nước vô sản.",
                "Nhà nước chủ nô."
            ],
            "answer": 3,
            "explanation": "Nhà nước chủ nô.",
            "keywords": "Q: Nhà nước đầu tiên trong lịch sử là | A: Nhà nước chủ nô"
        },
        {
            "id": 165,
            "text": "Ưu điểm lớn nhất của triết học cổ điển Đức là gì?",
            "options": [
                "Khắc phục triệt để quan điểm siêu hình của chủ nghĩa duy vật cũ.",
                "Phát triển tư tưởng biện chứng đạt trình độ một hệ thống lý luận.",
                "Phê phán quan điểm tôn giáo về thế giới.",
                "Quy luật xã hội hình thành và tác động thông qua hoạt động của con người nhưng không phụ thuộc vào ý thức của con người."
            ],
            "answer": 1,
            "explanation": "Phát triển tư tưởng biện chứng đạt trình độ một hệ thống lý luận.",
            "keywords": "Q: Ưu điểm lớn nhất của triết học cổ | A: Phát triển tư tưởng biện chứng đạt · trình độ một hệ thống lý luận"
        },
        {
            "id": 166,
            "text": "Chọn cụm từ điền vào chỗ trống: “Cái chung là phạm trù triết học dùng để chỉ […], được lặp lại trong nhiều sự vật hay quá trình riêng lẻ”.",
            "options": [
                "Một sự vật, một quá trình.",
                "Những mặt, những sự vật.",
                "Những mặt, những thuộc tính.",
                "Quy luật xã hội hình thành và tác động thông qua hoạt động của con người nhưng không phụ thuộc vào ý thức của con người."
            ],
            "answer": 2,
            "explanation": "Những mặt, những thuộc tính.",
            "keywords": "Q: Chọn cụm từ điền vào chỗ trống: “Cái | A: Những mặt, những thuộc tính"
        },
        {
            "id": 167,
            "text": "Hình thức nào là hình thức đầu tiên của giai đoạn trực quan sinh động?",
            "options": [
                "Khái niệm.",
                "Biểu tượng.",
                "Cảm giác.",
                "Quy luật xã hội hình thành và tác động thông qua hoạt động của con người nhưng không phụ thuộc vào ý thức của con người."
            ],
            "answer": 2,
            "explanation": "Cảm giác.",
            "keywords": "Q: Hình thức nào là hình thức đầu tiên | A: Cảm giác"
        },
        {
            "id": 168,
            "text": "“Ngũ Thường” là gì?",
            "options": [
                "Nhân chi sơ bản tính ác.",
                "Nhân chi sơ bản tính thiện.",
                "Nhân, nghĩa, lễ ,trí ,tín.",
                "Quy luật xã hội hình thành và tác động thông qua hoạt động của con người nhưng không phụ thuộc vào ý thức của con người."
            ],
            "answer": 2,
            "explanation": "Nhân, nghĩa, lễ ,trí ,tín.",
            "keywords": "Q: “Ngũ Thường” là gì | A: Nhân, nghĩa, lễ ,trí ,tín"
        },
        {
            "id": 169,
            "text": "Điền vào chỗ trống. \"Sự phân đôi của cái thống nhất và sự nhận thức các bộ phận mâu thuẫn của nó. Đó là thực chất của […]\".",
            "options": [
                "Phép siêu hình.",
                "Phép biện chứng.",
                "Nhận thức luận duy vật.",
                "Quy luật xã hội hình thành và tác động thông qua hoạt động của con người nhưng không phụ thuộc vào ý thức của con người."
            ],
            "answer": 1,
            "explanation": "Phép biện chứng.",
            "keywords": "Q: Sự phân đôi của cái thống nhất và | A: Phép biện chứng"
        },
        {
            "id": 170,
            "text": "Khoa học tự nhiên bắt đầu có sự phát triển vào thời kỳ nào?",
            "options": [
                "Thời kỳ Phục Hưng.",
                "Thời kỳ trung cổ.",
                "Thời kỳ cổ đại.",
                "Quy luật xã hội hình thành và tác động thông qua hoạt động của con người nhưng không phụ thuộc vào ý thức của con người."
            ],
            "answer": 0,
            "explanation": "Thời kỳ Phục Hưng.",
            "keywords": "Q: Khoa học tự nhiên bắt đầu có sự | A: Thời kỳ Phục Hưng"
        },
        {
            "id": 171,
            "text": "Chọn đáp án đúng nhất. Chân lý là:",
            "options": [
                "Tri thức đúng.",
                "Tri thức phù hợp với thực tế.",
                "Tri thức phù hợp với hiện thực.",
                "Tri thức do khoa học chứng minh."
            ],
            "answer": 2,
            "explanation": "Tri thức phù hợp với hiện thực.",
            "keywords": "Q: Chọn đáp án đúng nhất. Chân lý là: | A: Tri thức phù hợp với hiện thực"
        },
        {
            "id": 172,
            "text": "Sự biến đổi có tính chất cách mạng nhất của kiến trúc thượng tầng là do:",
            "options": [
                "Thay đổi chính quyền nhà nước.",
                "Thay đổi của lực lượng sản xuất.",
                "Thay đổi của quan hệ sản xuất thống trị.",
                "Sự thống trị của cơ sở hạ tầng."
            ],
            "answer": 3,
            "explanation": "Sự thống trị của cơ sở hạ tầng.",
            "keywords": "Q: Sự biến đổi có tính chất cách mạng | A: Sự thống trị của cơ sở hạ tầng"
        },
        {
            "id": 173,
            "text": "Để phân biệt các nhà triết học duy vật hay duy tâm, phải dựa vào yếu tố nào?",
            "options": [
                "Việc giải quyết vấn đề cơ bản của triết học.",
                "Việc giải quyết mặt bản thể luận trong vấn đề cơ bản của triết học.",
                "Việc giải quyết mặt nhận thức luận trong vấn đề cơ bản của triết học.",
                "Việc giải quyết vấn đề thế giới quan và nhân sinh quan của triết học."
            ],
            "answer": 1,
            "explanation": "Việc giải quyết mặt bản thể luận trong vấn đề cơ bản của triết học.",
            "keywords": "Q: Để phân biệt các nhà triết học duy | A: Việc giải quyết mặt bản thể luận trong · vấn đề cơ bản của triết học"
        },
        {
            "id": 174,
            "text": "Phạm trù nào nói lên mối liên hệ bản chất, tất nhiên, phổ biến và lặp đi lặp lại giữa các sự vật hiện tượng?",
            "options": [
                "Qui luật.",
                "Vận động.",
                "Phát triển.",
                "Mặt đối lập."
            ],
            "answer": 0,
            "explanation": "Qui luật.",
            "keywords": "Q: Phạm trù nào nói lên mối liên hệ | A: Qui luật"
        },
        {
            "id": 175,
            "text": "Béccơren phát hiện ra hiện tượng phóng xạ của nguyên tố Urani năm nào?",
            "options": [
                "Năm 1894.",
                "Năm 1698.",
                "Năm 1896.",
                "Năm 1986."
            ],
            "answer": 2,
            "explanation": "Năm 1896.",
            "keywords": "Q: Béccơren phát hiện ra hiện tượng phóng xạ | A: Năm 1896"
        },
        {
            "id": 176,
            "text": "Thuộc tính cơ bản phổ biến nhất của mọi dạng vật chất là gì?",
            "options": [
                "Phản ánh.",
                "Tồn tại khách quan.",
                "Vận động.",
                "Không có thuộc tính nào."
            ],
            "answer": 1,
            "explanation": "Tồn tại khách quan.",
            "keywords": "Q: Thuộc tính cơ bản phổ biến nhất của | A: Tồn tại khách quan"
        },
        {
            "id": 177,
            "text": "Nguồn gốc lý luận trực tiếp của triết học Marx là gì?",
            "options": [
                "Chủ nghĩa xã hội không tưởng Pháp và Anh.",
                "Chủ nghĩa duy vật Khai sáng Pháp.",
                "Kinh tế chính trị cổ điển Anh.",
                "Triết học cổ điển Đức."
            ],
            "answer": 3,
            "explanation": "Triết học cổ điển Đức.",
            "keywords": "Q: Nguồn gốc lý luận trực tiếp của triết | A: Triết học cổ điển Đức"
        },
        {
            "id": 178,
            "text": "Trong chủ nghĩa tư bản, […] quan hệ giữa giai cấp tư sản và giai cấp công nhân là quan hệ bóc lột. Điền đúng vào […].",
            "options": [
                "Hình thức.",
                "Nội dung.",
                "Bản chất.",
                "Hiện tượng."
            ],
            "answer": 2,
            "explanation": "Bản chất.",
            "keywords": "Q: Trong chủ nghĩa tư bản, […] quan hệ | A: Bản chất"
        },
        {
            "id": 179,
            "text": "Hình thức nào của tư duy trừu tượng là hình thức liên kết các khái niệm?",
            "options": [
                "Cảm giác.",
                "Khái niệm.",
                "Biểu tượng.",
                "Phán đoán."
            ],
            "answer": 3,
            "explanation": "Phán đoán.",
            "keywords": "Q: Hình thức nào của tư duy trừu tượng | A: Phán đoán"
        },
        {
            "id": 180,
            "text": "Quan hệ sở hữu đặc trưng trong những xã hội có cấu trúc phi giai cấp là:",
            "options": [
                "Quan hệ sở hữu tư nhân.",
                "Quan hệ sở hữu cá thể.",
                "Quan hệ sở hữu tập thể.",
                "Quan hệ sở hữu nhà nước."
            ],
            "answer": 2,
            "explanation": "Quan hệ sở hữu tập thể.",
            "keywords": "Q: Quan hệ sở hữu đặc trưng trong những | A: Quan hệ sở hữu tập thể"
        },
        {
            "id": 181,
            "text": "Theo quan điểm duy vật biện chứng \"đứng im\" là:",
            "options": [
                "Tuyệt đối.",
                "Vận động trong tương đối.",
                "Vận động trong tuyệt đối.",
                "Tương đối."
            ],
            "answer": 3,
            "explanation": "Tương đối.",
            "keywords": "Q: Theo quan điểm duy vật biện chứng \"đứng | A: Tương đối"
        },
        {
            "id": 182,
            "text": "Theo quan niệm triết học duy vật biện chứng, không gian là gì?",
            "options": [
                "Mô thức của trực quan cảm tính.",
                "Khái niệm của tư duy lý tính.",
                "Thuộc tính của vật chất.",
                "Mọi dạng vật chất."
            ],
            "answer": 2,
            "explanation": "Thuộc tính của vật chất.",
            "keywords": "Q: Theo quan niệm triết học duy vật biện | A: Thuộc tính của vật chất"
        },
        {
            "id": 183,
            "text": "Chọn đáp án đúng nhất theo quan điểm của Chủ nghĩa duy vật biện chứng:",
            "options": [
                "Mối liên hệ chỉ diễn ra giữa các sự vật hiện tượng với nhau còn trong bản thân sự vật hiện tượng không có sự liên hệ.",
                "Mối liên hệ của sự vật hiện tượng không chỉ diễn ra giữa các sự vật hiện tượng mà còn diễn ra ngay trong sự vật hiện tượng.",
                "Mối liên hệ của sự vật hiện tượng chỉ do ý chí con người tạo ra còn bản thân sự vật hiện tượng không có sự liên hệ.",
                "Mối liên hệ chỉ diễn ra giữa các sự vật hiện tượng với con người, khác quan ngoài ý chí con người."
            ],
            "answer": 1,
            "explanation": "Mối liên hệ của sự vật hiện tượng không chỉ diễn ra giữa các sự vật hiện tượng mà còn diễn ra ngay trong sự vật hiện tượng.",
            "keywords": "Q: Chọn đáp án đúng nhất theo quan điểm | A: Mối liên hệ của sự vật hiện tượng · sự vật hiện tượng mà còn diễn ra"
        },
        {
            "id": 184,
            "text": "Chọn câu trả lời đúng nhất. Chức năng của triết học Mác - Lênin là gì?",
            "options": [
                "Chức năng làm cầu nối cho các khoa học.",
                "Chức năng làm sáng tỏ cấu trúc ngôn ngữ.",
                "Chức năng khoa học của các khoa học.",
                "Chức năng thế giới quan và phương pháp luận."
            ],
            "answer": 3,
            "explanation": "Chức năng thế giới quan và phương pháp luận.",
            "keywords": "Q: Lênin - Chọn câu trả lời đúng nhất. | A: Chức năng thế giới quan · phương pháp luận"
        },
        {
            "id": 185,
            "text": "Tri thức của con người ngày càng hoàn thiện là vì:",
            "options": [
                "Thế giới đang vận động bộc lộ càng nhiều tính quy định.",
                "Nhờ sự nỗ lực hoạt động thực tiễn của con người.",
                "Nhờ hệ thống tri thức trước đó (chân lý) làm tiền đề.",
                "Do khả năng tổng hợp của trí tuệ của con người trong thời đại mới."
            ],
            "answer": 1,
            "explanation": "Nhờ sự nỗ lực hoạt động thực tiễn của con người.",
            "keywords": "Q: Tri thức của con người ngày càng hoàn | A: Nhờ sự nỗ lực hoạt động · thực tiễn của con người"
        },
        {
            "id": 186,
            "text": "Hiện nay, ở nước ta còn tồn tại tư tưởng “trọng nam khinh nữ”, điều đó thể hiện tính chất gì của ý thức xã hội?",
            "options": [
                "Tính bảo thủ.",
                "Tính vượt trước.",
                "Tính kế thừa.",
                "Tính độc lập."
            ],
            "answer": 0,
            "explanation": "Tính bảo thủ.",
            "keywords": "Q: Hiện nay, ở nước ta còn tồn tại | A: Tính bảo thủ"
        },
        {
            "id": 187,
            "text": "Theo triết học Mác - Lênin, phép biện chứng duy vật có mấy qui luật?",
            "options": [
                "Hai qui luật.",
                "Ba qui luật.",
                "Bốn qui luật.",
                "Năm qui luật."
            ],
            "answer": 1,
            "explanation": "Ba qui luật.",
            "keywords": "Q: Lênin - phép biện chứng duy vật có | A: Ba qui luật"
        },
        {
            "id": 188,
            "text": "Chọn đáp án đúng nhất theo quan điểm của Chủ nghĩa duy vật biện chứng:",
            "options": [
                "Phát triển là sự thay đổi thuần túy về mặt số lượng hay khối lượng của sự vật hiện tượng.",
                "Phát triển là sự thay đổi về vị trí của sự vật hiện tượng trong không gian, thời gian.",
                "Phát triển không chỉ là sự thay đổi về số lượng và khối lượng mà nó còn là sự thay đổi về chất của sự vật hiện tượng.",
                "Phát triển là sự thay đổi lớn lên về mặt số lượng và chất lượng của sự vật hiện tượng."
            ],
            "answer": 2,
            "explanation": "Phát triển không chỉ là sự thay đổi về số lượng và khối lượng mà nó còn là sự thay đổi về chất của sự vật hiện tượng.",
            "keywords": "Q: Chọn đáp án đúng nhất theo quan điểm | A: Phát triển không chỉ là sự thay đổi · mà nó còn là sự thay đổi về"
        },
        {
            "id": 189,
            "text": "Chọn đáp án đúng nhất. Lực lượng sản xuất là:",
            "options": [
                "Các hình thức tổ chức kinh tế.",
                "Phương thức quản lý.",
                "Hệ thống phân phối.",
                "Mối quan hệ con người với tự nhiên trong sản xuất."
            ],
            "answer": 3,
            "explanation": "Mối quan hệ con người với tự nhiên trong sản xuất.",
            "keywords": "Q: Lực lượng sản xuất là: | A: Mối quan hệ con người với · tự nhiên trong sản xuất"
        },
        {
            "id": 190,
            "text": "Chọn đáp án đúng nhất. Mác: Vấn đề tìm hiểu xem tư duy của con người có thể đạt đến chân lý khách quan hay không, hoàn toàn không phải là vấn đề lý luận mà là vấn đề:",
            "options": [
                "Thực tế.",
                "Hiện thực.",
                "Thực tiễn.",
                "Khoa học."
            ],
            "answer": 2,
            "explanation": "Thực tiễn.",
            "keywords": "Q: KHÔNG đúng - Chọn đáp án đúng nhất. | A: Thực tiễn"
        },
        {
            "id": 191,
            "text": "Qui luật nào chỉ ra khuynh hướng đi lên theo hình thức xoáy ốc?",
            "options": [
                "Qui luật lượng chất.",
                "Qui luật phủ định của phủ định.",
                "Qui luật mâu thuẫn.",
                "Qui luật nội dung hình thức."
            ],
            "answer": 1,
            "explanation": "Qui luật phủ định của phủ định.",
            "keywords": "Q: Qui luật nào chỉ ra khuynh hướng đi | A: Qui luật phủ định của phủ định"
        },
        {
            "id": 192,
            "text": "Cơ sở lý luận của quan điểm phát triển là gì?",
            "options": [
                "Phép biện chứng.",
                "Nguyên lý về mối liên hệ phổ biến.",
                "Nguyên lý về sự phát triển.",
                "Phép siêu hình."
            ],
            "answer": 2,
            "explanation": "Nguyên lý về sự phát triển.",
            "keywords": "Q: Cơ sở lý luận của quan điểm phát | A: Nguyên lý về sự phát triển"
        },
        {
            "id": 193,
            "text": "Theo triết học Mác - Lênin, vật chất là:",
            "options": [
                "Toàn bộ thế giới quanh ta.",
                "Toàn bộ thế giới khách quan.",
                "Là sự khái quát trong quá trình nhận thức của con người.",
                "Là hình phản ánh đối lập với thế giới vật chất."
            ],
            "answer": 1,
            "explanation": "Toàn bộ thế giới khách quan.",
            "keywords": "Q: Lênin - vật chất là: | A: Toàn bộ thế giới khách quan"
        },
        {
            "id": 194,
            "text": "Kiểu nhà nước nào được V.I.Lênin gọi là nhà nước “nửa nhà nước”?",
            "options": [
                "Nhà nước chủ nô.",
                "Nhà nước phong kiến.",
                "Nhà nước tư sản.",
                "Nhà nước xã hội chủ nghĩa."
            ],
            "answer": 3,
            "explanation": "Nhà nước xã hội chủ nghĩa.",
            "keywords": "Q: Lênin - Kiểu nhà nước nào được V.I. | A: Nhà nước xã hội chủ nghĩa"
        },
        {
            "id": 195,
            "text": "Chủ nghĩa Mác-Lênin được hình thành trên cơ sở nào?",
            "options": [
                "Phong trào cách mạng của thế kỷ 19.",
                "Kế thừa các tư tưởng triết học trước đó.",
                "Tổng kết thực tiễn và kế thừa những giá trị tư tưởng của nhân loại.",
                "Kế thừa những giá trị tư tưởng của nhân loại."
            ],
            "answer": 2,
            "explanation": "Tổng kết thực tiễn và kế thừa những giá trị tư tưởng của nhân loại.",
            "keywords": "Q: Lênin - Chủ nghĩa Mác- được hình thành | A: Tổng kết thực tiễn và kế thừa những · giá trị tư tưởng của nhân loại"
        },
        {
            "id": 196,
            "text": "Kaufman đã chứng minh được khối lượng của nguyên tử không phải là bất biến mà thay đổi theo vận tốc vận động của nguyên tử vào năm nào?",
            "options": [
                "Năm 1901.",
                "Năm 1902.",
                "Năm 1903.",
                "Năm 1910."
            ],
            "answer": 0,
            "explanation": "Năm 1901.",
            "keywords": "Q: KHÔNG đúng - Kaufman đã chứng minh được | A: Năm 1901"
        },
        {
            "id": 197,
            "text": "Theo chủ nghĩa duy vật biện chứng luận điểm nào sau đây là sai?",
            "options": [
                "Cùng một sự vật trong những điều kiện nhất định tồn tại nhiều khả năng.",
                "Hiện thực thay đổi khả năng cũng thay đổi.",
                "Cùng một sự vật trong những điều kiện nhất định tồn tại 1 khả năng.",
                "Khả năng thay đổi dẫn đến hiện thực có thể thay đổi."
            ],
            "answer": 2,
            "explanation": "Cùng một sự vật trong những điều kiện nhất định tồn tại 1 khả năng.",
            "keywords": "Q: Theo chủ nghĩa duy vật biện chứng luận | A: Cùng một sự vật trong những điều kiện · nhất định tồn tại 1 khả năng"
        },
        {
            "id": 198,
            "text": "Theo quan điểm triết học Mác - Lênin. Vấn đề cơ bản của triết học có:",
            "options": [
                "Hai mặt.",
                "Bốn mặt.",
                "Sáu mặt.",
                "Nhiều mặt."
            ],
            "answer": 0,
            "explanation": "Hai mặt.",
            "keywords": "Q: Lênin - Theo quan điểm triết học Mác | A: Hai mặt"
        },
        {
            "id": 199,
            "text": "Sự thống nhất giữa lượng và chất được thể hiện trong phạm trù nào?",
            "options": [
                "Độ.",
                "Bước nhảy.",
                "Điểm nút.",
                "Bình cảnh."
            ],
            "answer": 0,
            "explanation": "Độ.",
            "keywords": "Q: Sự thống nhất giữa lượng và chất được | A: Độ"
        },
        {
            "id": 200,
            "text": "Khuynh hướng của sự phát triển diễn ra đi theo con đường nào?",
            "options": [
                "Đường thẳng tắp.",
                "Đường tam giác.",
                "Đường xoáy ốc.",
                "Vòng tròn khép kín."
            ],
            "answer": 2,
            "explanation": "Đường xoáy ốc.",
            "keywords": "Q: Khuynh hướng của sự phát triển diễn ra | A: Đường xoáy ốc"
        },
        {
            "id": 201,
            "text": "Theo Ăngghen, vật chất có mấy hình thức vận động cơ bản?",
            "options": [
                "Hai hình thức.",
                "Ba hình thức.",
                "Bốn hình thức.",
                "Năm hình thức."
            ],
            "answer": 3,
            "explanation": "Năm hình thức.",
            "keywords": "Q: Ăngghen - hình thức vận động | A: Năm hình thức"
        },
        {
            "id": 202,
            "text": "Yếu tố nào không thuộc Quan hệ sản xuất?",
            "options": [
                "Quan hệ giữa người đối với việc góp vốn vào công ty.",
                "Quan hệ giữa người tổ chức và quản lý của công ty.",
                "Quan hệ giữa người phân phối tiền lương và phúc lợi.",
                "Quan hệ giữa người và tự nhiên."
            ],
            "answer": 3,
            "explanation": "Quan hệ giữa người và tự nhiên.",
            "keywords": "Q: Yếu tố nào không thuộc Quan hệ sản | A: Quan hệ giữa người · tự nhiên"
        },
        {
            "id": 203,
            "text": "Vai trò của tồn tại xã hội trong quan hệ biện chứng với ý thức xã hội là gì?",
            "options": [
                "Ý thức xã hội là sự phản ánh tồn tại xã hội, phụ thuộc vào tồn tại xã hội.",
                "Tồn tại xã hội quyết định sự biến đổi ý thức xã hội.",
                "Tồn tại xã hội có vai trò quyết định gián tiếp đối với các hình thái ý thức xã hội.",
                "Ý thức xã hội hoàn toàn phụ thuộc một cách thụ động vào tồn tại xã hội."
            ],
            "answer": 1,
            "explanation": "Tồn tại xã hội quyết định sự biến đổi ý thức xã hội.",
            "keywords": "Q: Vai trò của tồn tại xã hội trong | A: Tồn tại xã hội quyết định sự · biến đổi ý thức xã hội"
        },
        {
            "id": 204,
            "text": "Những cuộc cách mạng thời kỳ cận đại ở Tây Âu do mâu thuẫn giữa lực lượng sản xuất với quan hệ sản xuất nào?",
            "options": [
                "Quan hệ sản xuất phong kiến.",
                "Quan hệ sản xuất tư bản chủ nghĩa.",
                "Quan hệ sản xuất chiếm hữu nô lệ.",
                "Quan hệ sản xuất cộng sản nguyên thuỷ."
            ],
            "answer": 0,
            "explanation": "Quan hệ sản xuất phong kiến.",
            "keywords": "Q: Những cuộc cách mạng thời kỳ cận đại | A: Quan hệ sản xuất phong kiến"
        },
        {
            "id": 205,
            "text": "Chọn đáp KHÔNG đúng theo chủ nghĩa Mác - Lênin, phủ định biện chứng:",
            "options": [
                "Phủ định có tính kế thừa.",
                "Phủ định chấm dứt sự phát triển.",
                "Phủ định đồng thời cũng là khẳng định.",
                "Phủ định có tính khách quan phổ biến."
            ],
            "answer": 1,
            "explanation": "Phủ định chấm dứt sự phát triển.",
            "keywords": "Q: KHÔNG đúng - Chọn đáp KHÔNG đúng theo | A: Phủ định chấm dứt sự phát triển"
        },
        {
            "id": 206,
            "text": "Chọn câu trả lời đúng nhất. Mặt thứ nhất của vấn đề cơ bản của triết học là:",
            "options": [
                "Giữa vật chất và ý thức, cái nào có trước, cái nào có sau, cái nào quyết định cái nào.",
                "Con người có khả năng nhận thức thế giới hay không.",
                "Vấn đề quan hệ giữa vật chất và ý thức.",
                "Vấn đề quan hệ giữa tư duy và tồn tại."
            ],
            "answer": 0,
            "explanation": "Giữa vật chất và ý thức, cái nào có trước, cái nào có sau, cái nào quyết định cái nào.",
            "keywords": "Q: Chọn câu trả lời đúng nhất. Mặt thứ | A: Giữa vật chất và ý thức · cái nào có trước · cái nào có sau · cái nào quyết định cái nào"
        },
        {
            "id": 207,
            "text": "Yêu cầu của quan điểm toàn diện là gì? Xác định câu trả lời đầy đủ nhất.",
            "options": [
                "Bản thân sự vật không có liên hệ với thế giới xung quanh, do vậy, nhận thức sự vật không cần thiết phải xem nó trong các mối quan hệ.",
                "Phải xem xét một số mối liên hệ của sự vật hiện tượng.",
                "Phải xem xét tất cả các mặt, các mối liên hệ và các khâu trung gian của sự vật hiện tượng, đồng thời phải nắm được và đánh giá đúng vị trí, vai trò của từng mặt, từng mối liên hệ trong quá trình cấu thành nên sự vật.",
                "Trong các mối liên hệ đó phải nắm được mối liên hệ cơ bản, không cơ bản, mối liên hệ chủ yếu, thứ yếu để thúc đẩy sự vật hiện tượng phát triển."
            ],
            "answer": 2,
            "explanation": "Phải xem xét tất cả các mặt, các mối liên hệ và các khâu trung gian của sự vật hiện tượng, đồng thời phải nắm được và đánh giá đúng vị trí, vai trò của từng mặt, từng mối liên hệ trong quá trình cấu thành nên sự vật.",
            "keywords": "Q: Yêu cầu của quan điểm toàn diện là | A: Phải xem xét tất cả các mặt, các · được và đánh giá đúng vị trí, vai"
        },
        {
            "id": 208,
            "text": "Chọn đáp án KHÔNG đúng về thực tiễn:",
            "options": [
                "Thực tiễn là nguồn gốc của nhận thức vì qua thực tiễn bộc lộ thuộc tính bản chất của đối tượng.",
                "Thực tiễn là động lực của nhận thức nó đòi hỏi tư duy con người phải giải đáp những vấn đề đặt ra.",
                "Thực tiễn là hoạt động vật chất và tinh thần của con người.",
                "Thực tiễn là tiêu chuẩn của chân lý."
            ],
            "answer": 2,
            "explanation": "Thực tiễn là hoạt động vật chất và tinh thần của con người.",
            "keywords": "Q: KHÔNG đúng - Chọn đáp án KHÔNG đúng | A: Thực tiễn là hoạt động vật chất · và tinh thần của con người"
        },
        {
            "id": 209,
            "text": "Trong Bút ký triết học: V.I.Lênin có ví mối quan hệ giữa \"[…] và [ …]” với sự vận động của một con sông- bọt ở bên trên và luồng nước sâu ở dưới. Điền đúng vào […].",
            "options": [
                "Nội dung và hình thức.",
                "Khả Năng và hiện thực.",
                "Hiện tượng và bản chất.",
                "Tất yếu và ngầu nhiên."
            ],
            "answer": 2,
            "explanation": "Hiện tượng và bản chất.",
            "keywords": "Q: Lênin - Trong Bút ký triết học: V.I. | A: Hiện tượng và bản chất"
        },
        {
            "id": 210,
            "text": "Theo quan điểm triết học Mác - Lênin. Phương pháp luận là:",
            "options": [
                "Con đường, cách thức giải quyết vấn đề.",
                "Lý luận về phương pháp.",
                "Hệ thống các quan điểm về phương pháp.",
                "Phương pháp lý luận."
            ],
            "answer": 1,
            "explanation": "Lý luận về phương pháp.",
            "keywords": "Q: Lênin - Theo quan điểm triết học Mác | A: Lý luận về phương pháp"
        },
        {
            "id": 211,
            "text": "Trong các câu sau, hãy chọn câu đúng:",
            "options": [
                "Vật chất và ý thức tồn tại độc lập, chúng không nằm trong quan hệ sản sinh, cũng không nằm trong quan hệ quyết định nhau. Quan điểm này suy cho cùng cũng thuộc về chủ nghĩa duy vật.",
                "Vật chất có trước, ý thức có sau, vật chất quyết định ý thức là quan điểm của chủ nghĩa duy tâm.",
                "Ý thức có trước, vật chất có sau, ý thức quyết định vật chất là quan điểm của chủ nghĩa duy vật.",
                "Vật chất và ý thức tồn tại độc lập, chúng không nằm trong quan hệ sản sinh, cũng không nằm trong quan hệ quyết định nhau. Quan điểm này suy cho cùng cũng thuộc về chủ nghĩa duy tâm."
            ],
            "answer": 3,
            "explanation": "Vật chất và ý thức tồn tại độc lập, chúng không nằm trong quan hệ sản sinh, cũng không nằm trong quan hệ quyết định nhau. Quan điểm này suy cho cùng cũng thuộc về chủ nghĩa duy tâm.",
            "keywords": "Q: Trong các câu sau, hãy chọn câu đúng: | A: Vật chất và ý thức tồn tại độc · trong quan hệ quyết định nhau. Quan điểm"
        },
        {
            "id": 212,
            "text": "Định nghĩa đúng nhất theo quan điểm triết học Mác-Lênin:",
            "options": [
                "Tự nhiên là môi trường con người đang sống.",
                "Tự nhiên là toàn bộ thế giới vật chất vô cùng, vô tận.",
                "Tự nhiên là nguồn gốc của xã hội.",
                "Tự nhiên là môi trường tồn tại và phát triển của xã hội."
            ],
            "answer": 2,
            "explanation": "Tự nhiên là nguồn gốc của xã hội.",
            "keywords": "Q: Lênin - Định nghĩa đúng nhất theo quan | A: Tự nhiên · nguồn gốc của xã hội"
        },
        {
            "id": 213,
            "text": "Trong các cụm từ dưới đây, cụm từ nào được xem là \"hình thức\" của Truyện Kiều?",
            "options": [
                "Tác phẩm của Nguyễn Du.",
                "Tác phẩm có bìa màu xanh.",
                "Tác phẩm thơ lục bát.",
                "Tác phẩm ra đời vào thế kỉ XVIII."
            ],
            "answer": 2,
            "explanation": "Tác phẩm thơ lục bát.",
            "keywords": "Q: Trong các cụm từ dưới đây, cụm từ | A: Tác phẩm thơ lục bát"
        },
        {
            "id": 214,
            "text": "Theo quan điểm của triết học Mác - Lênin, nhân tố quyết định sự tồn tại của xã hội là:",
            "options": [
                "Sản xuất tinh thần.",
                "Sản xuất ra bản thân con người.",
                "Sản xuất vật chất.",
                "Tái sản xuất vật chất."
            ],
            "answer": 2,
            "explanation": "Sản xuất vật chất.",
            "keywords": "Q: Lênin - nhân tố quyết định sự tồn | A: Sản xuất vật chất"
        },
        {
            "id": 215,
            "text": "Chọn đáp KHÔNG đúng. Quan điểm của triết học Mác - Lênin về phương pháp biện chứng:",
            "options": [
                "Nhận thức đối tượng ở các mối liên hệ với nhau, ảnh hưởng nhau, ràng buộc nhau.",
                "Nhận thức đối tượng trong trạng thái vận động biến đổi, nằm trong khuynh hướng chung là phát triển.",
                "Nhận thức đối tượng trong sự tác động qua lại, qui định nhau, ràng buộc nhau.",
                "Coi nguyên nhân của sự biến đổi nằm ngoài đối tượng."
            ],
            "answer": 3,
            "explanation": "Coi nguyên nhân của sự biến đổi nằm ngoài đối tượng.",
            "keywords": "Q: KHÔNG đúng - Quan điểm của triết học | A: Coi nguyên nhân của sự biến · đổi nằm ngoài đối tượng"
        },
        {
            "id": 216,
            "text": "Chọn đáp án KHÔNG đúng. Chủ nghĩa Mác - Lênin quan niệm về con người:",
            "options": [
                "Là thực thể tự nhiên.",
                "Là chủ thể cải tạo hoàn cảnh.",
                "Là thực thể xã hội.",
                "Là chủ thể của giới tự nhiên."
            ],
            "answer": 3,
            "explanation": "Là chủ thể của giới tự nhiên.",
            "keywords": "Q: KHÔNG đúng - Chọn đáp án KHÔNG đúng. | A: Là chủ thể của giới tự nhiên"
        },
        {
            "id": 217,
            "text": "Điều kiện tiền đề nào quyết định sự ra đời của chủ nghĩa Mác-Lênin?",
            "options": [
                "Điều kiện kinh tế - xã hội.",
                "Tiền đề lý luận.",
                "Tiền đề khoa học tự nhiên.",
                "Tiền đề về tư tưởng, tinh thần xã hội."
            ],
            "answer": 0,
            "explanation": "Điều kiện kinh tế - xã hội.",
            "keywords": "Q: Lênin - Điều kiện tiền đề nào quyết | A: Điều kiện kinh tế - xã hội"
        },
        {
            "id": 218,
            "text": "Theo triết học Mác - Lênin: Trong các hình thức của sản xuất xã hội, hình thức nào là nền tảng?",
            "options": [
                "Sản xuất vật chất.",
                "Sản xuất ra bản thân con người.",
                "Sản xuất tinh thần.",
                "Sản xuất ra máy móc thiết bị."
            ],
            "answer": 0,
            "explanation": "Sản xuất vật chất.",
            "keywords": "Q: Lênin - : Trong các hình thức của | A: Sản xuất vật chất"
        },
        {
            "id": 219,
            "text": "Câu tục ngữ \"Chuồn chuồn bay thấp thì mưa, bay cao thì nắng, bay vừa thì râm\" thể hiện cấp độ nào của nhận thức?",
            "options": [
                "Nhận thức kinh nghiệm.",
                "Nhận thức lý luận.",
                "Nhận thức thông thường.",
                "Nhận thức khoa học."
            ],
            "answer": 0,
            "explanation": "Nhận thức kinh nghiệm.",
            "keywords": "Q: Câu tục ngữ \"Chuồn chuồn bay thấp thì | A: Nhận thức kinh nghiệm"
        },
        {
            "id": 220,
            "text": "Trong các yếu tố của Tư liệu sản xuất thì yếu tố nào quan trọng nhất:",
            "options": [
                "Đối tượng lao động.",
                "Công cụ lao động.",
                "Phương tiện lao động.",
                "Phương thức lao động."
            ],
            "answer": 1,
            "explanation": "Công cụ lao động.",
            "keywords": "Q: Trong các yếu tố của Tư liệu sản | A: Công cụ lao động"
        },
        {
            "id": 221,
            "text": "Theo Ăngghen, hình thức vận động nào nói lên quá trình hóa hợp và phân giải?",
            "options": [
                "Lý học.",
                "Xã hội.",
                "Hóa học.",
                "Cơ học."
            ],
            "answer": 2,
            "explanation": "Hóa học.",
            "keywords": "Q: Ăngghen - hình thức vận động | A: Hóa học"
        },
        {
            "id": 222,
            "text": "Về mặt bản chất, nguyên lý về mối liên hệ phổ biến một khi được cụ thể hóa sẽ được biểu hiện bằng:",
            "options": [
                "Quy luật Cơ sở hạ tầng quyết định Kiến trúc thượng tầng.",
                "Quy luật quan hệ sản xuất phù hợp với trình độ của lực lượng sản xuất.",
                "Ba quy luật của phép biện chứng duy vật.",
                "Sáu cặp phạm trù cơ bản của phép biện chứng duy vật."
            ],
            "answer": 3,
            "explanation": "Sáu cặp phạm trù cơ bản của phép biện chứng duy vật.",
            "keywords": "Q: Về mặt bản chất, nguyên lý về mối | A: Sáu cặp phạm trù cơ bản · của phép biện chứng duy vật"
        },
        {
            "id": 223,
            "text": "Theo Mác - Lênin, phát triển là:",
            "options": [
                "Khuynh hướng chung của sự vận động của sự vật và hiện tượng.",
                "Sự thay đổi về lượng trong quá trình vận động của vật chất.",
                "Sự thay đổi về chất trong quá trình vận động của vật chất.",
                "Vận động, quá trình thay đổi trạng thái của vật chất."
            ],
            "answer": 0,
            "explanation": "Khuynh hướng chung của sự vận động của sự vật và hiện tượng.",
            "keywords": "Q: Lênin - phát triển là: | A: Khuynh hướng chung của sự vận động · của sự vật và hiện tượng"
        },
        {
            "id": 224,
            "text": "Theo Ăngghen, tồn tại là:",
            "options": [
                "Vật chất.",
                "Tư duy.",
                "Tồn tại xã hội.",
                "Tồn tại khách quan."
            ],
            "answer": 0,
            "explanation": "Vật chất.",
            "keywords": "Q: Ăngghen - Theo , tồn tại là: | A: Vật chất"
        },
        {
            "id": 225,
            "text": "Chủ nghĩa Mác-Lênin được hình thành trong thời gian nào?",
            "options": [
                "Những năm 40 của thế kỷ XVII.",
                "Những năm 40 của thế kỷ XVIII.",
                "Những năm 40 của thế kỷ XIX.",
                "Những năm 40 của thế kỷ XX."
            ],
            "answer": 2,
            "explanation": "Những năm 40 của thế kỷ XIX.",
            "keywords": "Q: Lênin - Chủ nghĩa Mác- được hình thành | A: Những năm 40 của thế kỷ XIX"
        },
        {
            "id": 226,
            "text": "Nội dung nào dưới đây không đúng về mâu thuẫn trong Triết học?",
            "options": [
                "Bất kì mặt đối lập nào cũng tạo ra mâu thuẫn.",
                "Mẫu thuẫn chỉ được giải quyết bằng sự đấu tranh giữa các mặt đối lập.",
                "Các mặt đối lập của mâu thuẫn vừa thống nhất với nhau vừa đấu tranh với nhau.",
                "Mâu thuẫn là một chỉnh thể, trong đó có 2 mặt đối lập."
            ],
            "answer": 0,
            "explanation": "Bất kì mặt đối lập nào cũng tạo ra mâu thuẫn.",
            "keywords": "Q: Nội dung nào dưới đây không đúng về | A: Bất kì mặt đối lập nào · cũng tạo ra mâu thuẫn"
        },
        {
            "id": 227,
            "text": "Sắp xếp theo trình tự xuất hiện từ sớm đến muộn các hình thức thế giới quan sau:",
            "options": [
                "Tôn giáo - Thần thoại - Triết học.",
                "Triết học - Tôn giáo - Thần thoại.",
                "Thần thoại - Triết học - Tôn giáo.",
                "Thần thoại - Tôn giáo - Triết học."
            ],
            "answer": 3,
            "explanation": "Thần thoại - Tôn giáo - Triết học.",
            "keywords": "Q: Sắp xếp theo trình tự xuất hiện từ | A: Thần thoại - Tôn giáo - Triết học"
        },
        {
            "id": 228,
            "text": "Chọn đáp án đúng nhất. Quần chúng nhân dân và lãnh tụ tồn tại như thế nào?",
            "options": [
                "Độc lập.",
                "Trong mối quan hệ biện chứng.",
                "Vừa có tính độc lập tương đối vừa có mối quan hệ biện chứng.",
                "Vừa độc lập, vừa phụ thuộc."
            ],
            "answer": 1,
            "explanation": "Trong mối quan hệ biện chứng.",
            "keywords": "Q: Quần chúng nhân dân và lãnh tụ tồn | A: Trong mối quan hệ biện chứng"
        },
        {
            "id": 229,
            "text": "Theo Ăngghen, hình thức vận động nào nói lên sự thay đổi vị trí của vật thể trong không gian?",
            "options": [
                "Lý học.",
                "Xã hội.",
                "Hóa học.",
                "Cơ học."
            ],
            "answer": 3,
            "explanation": "Cơ học.",
            "keywords": "Q: Ăngghen - hình thức vận động | A: Cơ học"
        },
        {
            "id": 230,
            "text": "Chọn đáp án KHÔNG đúng. Cấu trúc nhân cách gồm:",
            "options": [
                "Thế giới quan của cá nhân.",
                "Tâm hồn.",
                "Năng lực và phẩm chất xã hội.",
                "Ý thức xã hội."
            ],
            "answer": 3,
            "explanation": "Ý thức xã hội.",
            "keywords": "Q: KHÔNG đúng - Chọn đáp án KHÔNG đúng. | A: Ý thức xã hội"
        },
        {
            "id": 231,
            "text": "Theo chủ nghĩa Mác - Lênin: “con người là một […] sinh học – xã hội”. Điền vào chỗ trống.",
            "options": [
                "Cá thể.",
                "Thực thể.",
                "Tập hợp hai mặt.",
                "Sinh vật."
            ],
            "answer": 1,
            "explanation": "Thực thể.",
            "keywords": "Q: Theo chủ nghĩa Mác - Lênin: “con người | A: Thực thể"
        },
        {
            "id": 232,
            "text": "Theo triết học Mác - Lênin, phép biện chứng duy vật có mấy cặp phạm trù?",
            "options": [
                "Hai cặp phạm trù.",
                "Ba cặp phạm trù.",
                "Năm cặp phạm trù.",
                "Sáu cặp phạm trù."
            ],
            "answer": 3,
            "explanation": "Sáu cặp phạm trù.",
            "keywords": "Q: Lênin - phép biện chứng duy vật có | A: Sáu cặp phạm trù"
        },
        {
            "id": 233,
            "text": "Theo quan điểm của chủ nghĩa duy vật biện chứng, luận điểm nào sau đây là đúng?",
            "options": [
                "Nguyên nhân không sinh ra kết quả.",
                "Nguyên nhân và kết quả không cùng một kết cấu vật chất.",
                "Không thể coi nguyên nhân và kết quả nằm ở hai sự vật khác nhau.",
                "Có thể coi nguyên nhân và kết quả nằm ở hai sự vật khác nhau."
            ],
            "answer": 2,
            "explanation": "Không thể coi nguyên nhân và kết quả nằm ở hai sự vật khác nhau.",
            "keywords": "Q: Theo quan điểm của chủ nghĩa duy vật | A: Không thể coi nguyên nhân và kết quả · nằm ở hai sự vật khác nhau"
        },
        {
            "id": 234,
            "text": "“Cái ác và sự thiếu tri thức là đồng nhất”. Quan điểm này là của ai?",
            "options": [
                "Xocrat.",
                "Epiquy.",
                "Platôn.",
                "Aristot."
            ],
            "answer": 0,
            "explanation": "Xocrat.",
            "keywords": "Q: “Cái ác và sự thiếu tri thức là | A: Xocrat"
        },
        {
            "id": 235,
            "text": "Phạm trù nào chỉ sự phân kỳ lịch sử xã hội, phân biệt những nấc thang phát triển của xã hội loài người?",
            "options": [
                "Phương thức sản xuất.",
                "Thời đại.",
                "Hình thái kinh tế xã hội.",
                "Quan hệ sản xuất."
            ],
            "answer": 2,
            "explanation": "Hình thái kinh tế xã hội.",
            "keywords": "Q: Phạm trù nào chỉ sự phân kỳ lịch | A: Hình thái kinh tế xã hội"
        },
        {
            "id": 236,
            "text": "Khi sự vật, hiện tượng tác động trực tiếp đến con người sẽ gây nên hình thức nhận thức nào?",
            "options": [
                "Cảm giác.",
                "Khái niệm.",
                "Suy luận.",
                "Phán đoán."
            ],
            "answer": 0,
            "explanation": "Cảm giác.",
            "keywords": "Q: Khi sự vật, hiện tượng tác động trực | A: Cảm giác"
        },
        {
            "id": 237,
            "text": "Theo quan điểm của CNDVBC, ý thức có khả năng tác động trở lại vật chất thông qua?",
            "options": [
                "Bộ não của con người.",
                "Hoạt động thực tiễn.",
                "Lao động.",
                "Tình cảm."
            ],
            "answer": 1,
            "explanation": "Hoạt động thực tiễn.",
            "keywords": "Q: Theo quan điểm của CNDVBC, ý thức có | A: Hoạt động thực tiễn"
        },
        {
            "id": 238,
            "text": "Theo triết học Mác - Lênin, bản chất của nhận thức là:",
            "options": [
                "Sự phản ánh thế giới khách quan vào đầu óc của con người.",
                "Sự phản ánh chủ động, tích cực, sáng tạo của chủ thể trước khách thể.",
                "Sự tiến gần của tư duy đến khách thể.",
                "Sự tiến gần của tư duy đến chủ thể."
            ],
            "answer": 1,
            "explanation": "Sự phản ánh chủ động, tích cực, sáng tạo của chủ thể trước khách thể.",
            "keywords": "Q: Lênin - bản chất của nhận thức là: | A: Sự phản ánh chủ động · tích cực · sáng tạo của chủ thể trước khách thể"
        },
        {
            "id": 239,
            "text": "Triết học ra đời sớm nhất ở đâu?",
            "options": [
                "Ấn Độ, Châu Phi, Nga.",
                "Ấn Độ, Trung Quốc, Hy Lạp.",
                "Ai Cập, ấn Độ, Trung Quốc.",
                "Anh, Ấn Độ, Trung Quốc."
            ],
            "answer": 1,
            "explanation": "Ấn Độ, Trung Quốc, Hy Lạp.",
            "keywords": "Q: Triết học ra đời sớm nhất ở đâu | A: Ấn Độ, Trung Quốc, Hy Lạp"
        },
        {
            "id": 240,
            "text": "Đặc trưng cơ bản của quy luật xã hội là gì?",
            "options": [
                "Diễn ra tự phát qua sự tác động của các lực lượng tự nhiên.",
                "Diễn ra tự giác qua sự tác động của các lực lượng tự nhiên.",
                "Diễn ra tự phát qua sự tác động của các lực lượng siêu nhiên.",
                "Hình thành và tác động thông qua hoạt động của con người nhưng không phụ thuộc vào ý thức của con người."
            ],
            "answer": 3,
            "explanation": "Hình thành và tác động thông qua hoạt động của con người nhưng không phụ thuộc vào ý thức của con người.",
            "keywords": "Q: Đặc trưng cơ bản của quy luật xã | A: Hình thành và tác động thông qua hoạt · người nhưng không phụ thuộc vào ý thức"
        },
        {
            "id": 241,
            "text": "Heraclite quan niệm vật chất là gì?",
            "options": [
                "Lửa.",
                "Nước.",
                "Nguyên tử.",
                "Không khí."
            ],
            "answer": 0,
            "explanation": "Lửa.",
            "keywords": "Q: Hêraclít - Heraclite quan niệm vật chất là | A: Lửa"
        },
        {
            "id": 242,
            "text": "Triết học ra đời từ đâu?",
            "options": [
                "Từ thực tiễn, do nhu cầu của thực tiễn.",
                "Từ sự suy tư của con người về bản thân mình.",
                "Từ sự sáng tạo của nhà tư tưởng.",
                "Từ sự vận động của ý muốn chủ quan của con người."
            ],
            "answer": 0,
            "explanation": "Từ thực tiễn, do nhu cầu của thực tiễn.",
            "keywords": "Q: Triết học ra đời từ đâu | A: Từ thực tiễn · do nhu cầu của thực tiễn"
        },
        {
            "id": 243,
            "text": "Chọn đáp KHÔNG đúng. Điều kiện KT-XH của sự ra đời triết học Mác là:",
            "options": [
                "Sự củng cố và phát triển phương thức sản xuất TBCN trong điều kiện cách mạng công nghiệp.",
                "Sự xuất hiện của giai cấp vô sản trên vũ đài lịch sử với tính cách là một lực lượng chính xã hội trị độc lập.",
                "Nhu cầu lý luận của thực tiễn cách mạng.",
                "Giai cấp Vô sản đi theo giai cấp Tư sản trong cuộc đấu tranh lật đổ chế độ Phong Kiến."
            ],
            "answer": 3,
            "explanation": "Giai cấp Vô sản đi theo giai cấp Tư sản trong cuộc đấu tranh lật đổ chế độ Phong Kiến.",
            "keywords": "Q: KHÔNG đúng - Điều kiện KT-XH của sự | A: Giai cấp Vô sản đi theo giai cấp · trong cuộc đấu tranh lật đổ chế độ"
        },
        {
            "id": 244,
            "text": "V.I Lenin cho rằng: Nhận thức đi từ […] đến […], từ bản chất ít sâu sắc đến bản chất sâu sắc hơn. Chọn cụm từ đúng vào chỗ trống.",
            "options": [
                "Hình thức/ Nội dung.",
                "Nội dung/ Hình thức.",
                "Bản chất/ Hiện tượng.",
                "Hiện tượng/ Bản chất."
            ],
            "answer": 3,
            "explanation": "Hiện tượng/ Bản chất.",
            "keywords": "Q: Lênin - V.I Lenin cho rằng: Nhận thức | A: Hiện tượng/ Bản chất"
        },
        {
            "id": 245,
            "text": "Chọn đáp KHÔNG đúng theo triết học Mác - Lênin:",
            "options": [
                "Ý thức với tư cách là một hoạt động phản ánh, sáng tạo không thể có được ở bên ngoài con người lao động, làm biến đổi thế giới xung quanh.",
                "Lao động là điều kiện đầu tiên và chủ yếu để con người tồn tại.",
                "Lao động không xuất hiện ở trạng thái đơn nhất, ngay từ đầu nó đã mang tính tập thể xã hội.",
                "Con người có thể phản ánh đúng đắn thế giới khách quan không cần thông qua lao động."
            ],
            "answer": 3,
            "explanation": "Con người có thể phản ánh đúng đắn thế giới khách quan không cần thông qua lao động.",
            "keywords": "Q: KHÔNG đúng - Chọn đáp KHÔNG đúng theo | A: Con người có thể phản ánh đúng đắn · giới khách quan không cần thông qua lao"
        },
        {
            "id": 246,
            "text": "Triết học nghiên cứu thế giới như thế nào?",
            "options": [
                "Như một đối tượng vật chất cụ thể.",
                "Như một hệ đối tượng vật chất nhất định.",
                "Như một chỉnh thể rời rạc.",
                "Như một chỉnh thể thống nhất."
            ],
            "answer": 3,
            "explanation": "Như một chỉnh thể thống nhất.",
            "keywords": "Q: Triết học nghiên cứu thế giới như thế | A: Như một chỉnh thể thống nhất"
        },
        {
            "id": 247,
            "text": "Theo quan điểm Mác - Lênin, muốn thay đổi một chế độ xã hội phải:",
            "options": [
                "Thay đổi lực lượng sản xuất.",
                "Tạo ra nhiều của cải.",
                "Thay đổi quan hệ sản xuất.",
                "Thay đổi lực lượng sản xuất và quan hệ sản xuất."
            ],
            "answer": 2,
            "explanation": "Thay đổi quan hệ sản xuất.",
            "keywords": "Q: Lênin - Theo quan điểm Mác - , | A: Thay đổi quan hệ sản xuất"
        },
        {
            "id": 248,
            "text": "Theo quan điểm của triết học Mác - Lênin, sản xuất vật chất là:",
            "options": [
                "Quá trình con người cải tạo thế giới tự nhiên.",
                "Quá trình con người tạo ra của cải cho đời sống xã hội.",
                "Quá trình con người sử dụng công cụ lao động tác động vào tự nhiên, cải biến các dạng vật chất của tự nhiên để tạo ra của cải vật chất nhằm thỏa mãn nhu cầu tồn tại và phát triển của con người.",
                "Quá trình con người sử dụng công cụ lao động tác động vào tự nhiên, cải biến các dạng vật chất nhằm thỏa mãn như cầu của con người."
            ],
            "answer": 2,
            "explanation": "Quá trình con người sử dụng công cụ lao động tác động vào tự nhiên, cải biến các dạng vật chất của tự nhiên để tạo ra của cải vật chất nhằm thỏa mãn nhu cầu tồn tại và phát triển của con người.",
            "keywords": "Q: Lênin - sản xuất vật chất là: | A: Quá trình con người sử dụng công cụ · tự nhiên để tạo ra của cải vật"
        },
        {
            "id": 249,
            "text": "Tiêu chuẩn của chân lý theo triết học Mác-Lênin là gì?",
            "options": [
                "Thực tiễn.",
                "Khoa học.",
                "Nhận thức.",
                "Hiện thực khách quan."
            ],
            "answer": 0,
            "explanation": "Thực tiễn.",
            "keywords": "Q: Lênin - Tiêu chuẩn của chân lý theo | A: Thực tiễn"
        },
        {
            "id": 250,
            "text": "Quan điểm triết học cho rằng thượng đế và tự nhiên chỉ là một, gọi là quan điểm có tính chất gì?",
            "options": [
                "Có tính duy vật biện chứng.",
                "Có tính duy tâm, siêu hình.",
                "Có tính chất phiếm thần luận.",
                "Có tính chất truyền thuyết."
            ],
            "answer": 2,
            "explanation": "Có tính chất phiếm thần luận.",
            "keywords": "Q: Quan điểm triết học cho rằng thượng đế | A: Có tính chất phiếm thần luận"
        },
        {
            "id": 251,
            "text": "Kant: \"Vẻ đẹp không nằm ở đôi má hồng ở người thiếu nữ mà ở trong đôi mắt của kẻ suy tình\" thể hiện quan điểm của trường phái triết học nào?",
            "options": [
                "Duy vật.",
                "Duy tâm.",
                "Khả tri luận.",
                "Bất khả tri luận."
            ],
            "answer": 1,
            "explanation": "Duy tâm.",
            "keywords": "Q: Kant - Vẻ đẹp không nằm ở đôi | A: Duy tâm"
        },
        {
            "id": 252,
            "text": "Theo quan điểm Mác-Lênin, sản xuất xã hội gồm các loại sản xuất sau:",
            "options": [
                "Sản xuất vật chất, sản xuất tinh thần, sản xuất ra con người.",
                "Sản xuất, tái sản xuất, sản xuất vật chất.",
                "Sản xuất tinh thần, sản xuất kinh tế, sản xuất văn hóa.",
                "Sản xuất văn hóa, sản xuất tinh thần, tái sản xuất."
            ],
            "answer": 0,
            "explanation": "Sản xuất vật chất, sản xuất tinh thần, sản xuất ra con người.",
            "keywords": "Q: Lênin - Theo quan điểm Mác-, sản xuất | A: Sản xuất vật chất · sản xuất tinh thần · sản xuất ra con người"
        },
        {
            "id": 253,
            "text": "Hình thái ý thức nào phản ánh thế giới một cách chân thực nhằm giải phóng con người thoát khỏi ngu muội, đưa con người làm chủ tự nhiên, xã hội và bản thân?",
            "options": [
                "Chính trị.",
                "Đạo đức.",
                "Pháp quyền.",
                "Khoa học."
            ],
            "answer": 3,
            "explanation": "Khoa học.",
            "keywords": "Q: Hình thái ý thức nào phản ánh thế | A: Khoa học"
        },
        {
            "id": 254,
            "text": "Theo Ăngghen, hình thức vận động nào nói lên sự trao đổi chất giữa cơ thể sống với môi trường?",
            "options": [
                "Lý học.",
                "Sinh học.",
                "Hóa học.",
                "Cơ học."
            ],
            "answer": 1,
            "explanation": "Sinh học.",
            "keywords": "Q: Ăngghen - hình thức vận động | A: Sinh học"
        },
        {
            "id": 255,
            "text": "Thế giới quan thần thoại khác với thế giới quan tôn giáo ở:",
            "options": [
                "Hệ thống lý thuyết được xây dựng và bảo vệ.",
                "Nhận thức con người còn hạn chế.",
                "Đối tượng là các vị thần và chúa.",
                "Hệ thống lý luận giải thích về sức mạnh của những hiện tượng trong tự nhiên."
            ],
            "answer": 0,
            "explanation": "Hệ thống lý thuyết được xây dựng và bảo vệ.",
            "keywords": "Q: Thế giới quan thần thoại khác với thế | A: Hệ thống lý thuyết được xây dựng · bảo vệ"
        },
        {
            "id": 256,
            "text": "Trong các yếu tố của Lực lượng sản xuất, yếu tố nào quan trọng nhất:",
            "options": [
                "Con người.",
                "Tư liệu sản xuất.",
                "Công cụ lao động.",
                "Phương tiện lao động."
            ],
            "answer": 0,
            "explanation": "Con người.",
            "keywords": "Q: Trong các yếu tố của Lực lượng sản | A: Con người"
        },
        {
            "id": 257,
            "text": "Theo quan điểm triết học Mác - Lênin, vấn đề cơ bản của triết học:",
            "options": [
                "Là vật chất và ý thức.",
                "Là giữa vật chất và ý thức cái nào có trước, cái nào có sau và cái nào quyết định.",
                "Là mối quan hệ giữa tư duy và tồn tại.",
                "Là mối quan hệ giữa tư duy và tinh thần."
            ],
            "answer": 2,
            "explanation": "Là mối quan hệ giữa tư duy và tồn tại.",
            "keywords": "Q: Lênin - Theo quan điểm triết học Mác | A: Là mối quan hệ giữa tư duy · tồn tại"
        },
        {
            "id": 258,
            "text": "Quan hệ sở hữu đặc trưng trong những xã hội có cấu trúc có giai cấp là:",
            "options": [
                "Quan hệ sở hữu tư nhân.",
                "Quan hệ sở hữu xã hội.",
                "Quan hệ sở hữu tập thể.",
                "Quan hệ sở hữu nhà nước."
            ],
            "answer": 0,
            "explanation": "Quan hệ sở hữu tư nhân.",
            "keywords": "Q: Quan hệ sở hữu đặc trưng trong những | A: Quan hệ sở hữu tư nhân"
        },
        {
            "id": 259,
            "text": "Trong xã hội có phân biệt và đối kháng giai cấp, quy luật nào giữ vai trò là động lực thúc đẩy sự phát triển của xã hội?",
            "options": [
                "Quy luật đấu tranh giai cấp.",
                "Quy luật cơ sở hạ tầng quyết định kiến trúc thượng tầng.",
                "Quy luật tồn tại xã hội quyết định ý thức xã hội.",
                "Quy luật mâu thuẫn."
            ],
            "answer": 0,
            "explanation": "Quy luật đấu tranh giai cấp.",
            "keywords": "Q: Trong xã hội có phân biệt và đối | A: Quy luật đấu tranh giai cấp"
        },
        {
            "id": 260,
            "text": "Điền vào chỗ trống. Triết học cổ điển Đức ảnh hưởng sâu sắc đến sự hình thành […] của chủ nghĩa Mác-Lênin.",
            "options": [
                "Thế giới quan.",
                "Thế giới quan và phương pháp luận.",
                "Phương pháp luận.",
                "Nhân sinh quan và phương pháp luận."
            ],
            "answer": 1,
            "explanation": "Thế giới quan và phương pháp luận.",
            "keywords": "Q: Điền vào chỗ trống. Triết học cổ điển | A: Thế giới quan · phương pháp luận"
        },
        {
            "id": 261,
            "text": "Theo triết học Mác - Lênin, ý thức là:",
            "options": [
                "Hình ảnh của thế giới khách quan.",
                "Hình ảnh phản ánh sự vận động và phát triển của thế giới khách quan.",
                "Là một phần chức năng của bộ óc con người.",
                "Là hình ảnh phản ánh sáng tạo hiện thực khách quan."
            ],
            "answer": 3,
            "explanation": "Là hình ảnh phản ánh sáng tạo hiện thực khách quan.",
            "keywords": "Q: Lênin - ý thức là: | A: Là hình ảnh phản ánh sáng · tạo hiện thực khách quan"
        },
        {
            "id": 262,
            "text": "Hình thái ý thức nào phản ánh đời sống chính trị của xã hội?",
            "options": [
                "Đạo đức.",
                "Tôn giáo.",
                "Khoa học.",
                "Chính trị."
            ],
            "answer": 3,
            "explanation": "Chính trị.",
            "keywords": "Q: Hình thái ý thức nào phản ánh đời | A: Chính trị"
        },
        {
            "id": 263,
            "text": "Hồ Chí Minh có viết: “nhận xét cán bộ không nên chỉ xét ngoài mặt, chỉ xét một lúc, một việc, mà phải xét kỹ cả toàn bộ công việc của cán bộ”. Quan điểm nào của phép biện chứng duy vật được vận dụng trong luận điểm trên?",
            "options": [
                "Quan điểm toàn diện.",
                "Quan điểm phiến diện.",
                "Quan điểm phát triển.",
                "Quan điểm lịch sử - cụ thể."
            ],
            "answer": 0,
            "explanation": "Quan điểm toàn diện.",
            "keywords": "Q: Hồ Chí Minh có viết: “nhận xét cán | A: Quan điểm toàn diện"
        },
        {
            "id": 264,
            "text": "Hình thức nào sau đây biểu hiện hoạt động thực tiễn của con người?",
            "options": [
                "Sản xuất vật chất.",
                "Nghiên cứu khoa học.",
                "Sáng tác âm nhạc.",
                "Sáng tạo văn hoá."
            ],
            "answer": 0,
            "explanation": "Sản xuất vật chất.",
            "keywords": "Q: Hình thức nào sau đây biểu hiện hoạt | A: Sản xuất vật chất"
        },
        {
            "id": 265,
            "text": "Theo chủ nghĩa Mác-Lênin, chủ nghĩa duy vật đã trải qua mấy hình thức phát triển:",
            "options": [
                "Hai hình thức.",
                "Ba hình thức.",
                "Bốn hình thức.",
                "Năm hình thức."
            ],
            "answer": 1,
            "explanation": "Ba hình thức.",
            "keywords": "Q: duy vật - mấy hình thức phát triển | A: Ba hình thức"
        },
        {
            "id": 266,
            "text": "Nội dung cơ bản và trực tiếp để xây dựng gia đình ở Việt Nam hiện nay là gì?",
            "options": [
                "Phát triển kinh tế xã hội.",
                "Nâng cao trình độ dân trí cho nhân dân lao động.",
                "Xây dựng gia đình no ấm, bình đẳng tiến bộ và hạnh phúc.",
                "Giải phóng người phụ nữ."
            ],
            "answer": 2,
            "explanation": "Xây dựng gia đình no ấm, bình đẳng tiến bộ và hạnh phúc.",
            "keywords": "Q: Nội dung cơ bản và trực tiếp để | A: Xây dựng gia đình no ấm, bình · đẳng tiến bộ và hạnh phúc"
        },
        {
            "id": 267,
            "text": "Theo quan điểm của chủ nghĩa duy vật biện chứng. Vận động là:",
            "options": [
                "Vận động là kết quả do \"Cú hít ban đầu củaThượng đế\" tạo ra.",
                "Vận động là phương thức tồn tại của vật chất, là thuộc tính cố hữu của vật chất.",
                "Vận động là chỉ sự thay đổi vị trí của sự vật trong thời gian.",
                "Vận động là chỉ sự thay đổi vị trí của sự vật trong không gian."
            ],
            "answer": 1,
            "explanation": "Vận động là phương thức tồn tại của vật chất, là thuộc tính cố hữu của vật chất.",
            "keywords": "Q: Theo quan điểm của chủ nghĩa duy vật | A: Vận động là phương thức tồn tại của · chất, là thuộc tính cố hữu của vật"
        },
        {
            "id": 268,
            "text": "Lênin khẳng định: chủ nghĩa Mác dựa vào […] chứ không phải dựa vào […] để vạch ra đường lối chính trị của mình. Điền đúng vào […].",
            "options": [
                "Khả năng/ Hiện thực.",
                "Hiện thưc/ Ngẫu nhiên.",
                "Tất yếu/ Tất nhiên.",
                "Hiện thực/ Khả năng."
            ],
            "answer": 3,
            "explanation": "Hiện thực/ Khả năng.",
            "keywords": "Q: Lênin - khẳng định: chủ nghĩa Mác dựa | A: Hiện thực/ Khả năng"
        },
        {
            "id": 269,
            "text": "Câu: \"Chạy trời không khỏi nắng\", \"chạy mưa không khỏi trời\" thể hiện quan điểm của trường phái triết học nào?",
            "options": [
                "Duy vật.",
                "Duy tâm.",
                "Bất khả tri luận.",
                "Khả tri luận."
            ],
            "answer": 0,
            "explanation": "Duy vật.",
            "keywords": "Q: Câu: \"Chạy trời không khỏi nắng\", \"chạy mưa | A: Duy vật"
        },
        {
            "id": 270,
            "text": "Theo quan điểm duy vật biện chứng, thế giới thống nhất ở tính:",
            "options": [
                "Vận động.",
                "Vật chất.",
                "Tinh thần.",
                "Phản ánh."
            ],
            "answer": 1,
            "explanation": "Vật chất.",
            "keywords": "Q: Theo quan điểm duy vật biện chứng, thế | A: Vật chất"
        },
        {
            "id": 271,
            "text": "Các thế lực thù định sử dụng chiến lược “diễn biến hòa bình” chống phá sự nghiệp xây dựng Tổ quốc xã hội chủ nghĩa của nhân dân ta trên phương diện nào?",
            "options": [
                "Kinh tế, chính trị, xã hội, tư tưởng, đạo đức.",
                "Văn hóa, tư tưởng, kinh tế, chính trị.",
                "Kinh tế, chính trị, văn hóa, đạo đức, lối sống.",
                "Kinh tế, chính trị, văn hóa, xã hội, tư tưởng, đạo đức, lối sống."
            ],
            "answer": 3,
            "explanation": "Kinh tế, chính trị, văn hóa, xã hội, tư tưởng, đạo đức, lối sống.",
            "keywords": "Q: Các thế lực thù định sử dụng chiến | A: Kinh tế, chính trị, văn hóa, xã · hội, tư tưởng, đạo đức, lối sống"
        },
        {
            "id": 272,
            "text": "V.I Lênin cho rằng: “tính […] không thể tách rời tính phổ biến”. Điền vào dấu […].",
            "options": [
                "Nhân quả.",
                "Hiện thực.",
                "Ngẫu nhiên.",
                "Tất nhiên."
            ],
            "answer": 3,
            "explanation": "Tất nhiên.",
            "keywords": "Q: V.I Lênin cho rằng: “tính […] không thể | A: Tất nhiên"
        },
        {
            "id": 273,
            "text": "Chọn đáp án đúng nhất theo quan điểm của chủ nghĩa duy vật biện chứng.",
            "options": [
                "Thế giới thống nhất ở tính vật chất của nó.",
                "Thế giới thống nhất ở sự tồn tại của nó.",
                "Thế giới thống nhất ở ý niệm tuyệt đối hay ở ý thức con người.",
                "Thế giới thống nhất ở ý thức con người."
            ],
            "answer": 0,
            "explanation": "Thế giới thống nhất ở tính vật chất của nó.",
            "keywords": "Q: Chọn đáp án đúng nhất theo quan điểm | A: Thế giới thống nhất ở · tính vật chất của nó"
        },
        {
            "id": 274,
            "text": "Quá trình vận động của bản thân sự vật, nội dung và hình thức của nó, từ chỗ thống nhất lại trở thành mâu thuẫn, xung đột bởi vì ở sự vật […]. Điền vào dấu […].",
            "options": [
                "Hình thức biến đổi chậm hơn nội dung.",
                "Nội dung và hình thức luôn biến đổi.",
                "Nội dung biến đổi chậm hơn hình thức.",
                "Nội dung bất biến còn hình thức biến đổi."
            ],
            "answer": 0,
            "explanation": "Hình thức biến đổi chậm hơn nội dung.",
            "keywords": "Q: Quá trình vận động của bản thân sự | A: Hình thức biến đổi chậm hơn nội dung"
        },
        {
            "id": 275,
            "text": "Ông cho rằng vũ trụ không phải do Chúa trời hay một lực lượng siêu nhiên thần bí nào tạo ra. Nó “mãi mãi đã, đang và sẽ là ngọn lửa vĩnh viễn đang không ngừng bùng cháy và tàn lụi”. Ông là ai?",
            "options": [
                "Heraclite.",
                "Democrite.",
                "Thales.",
                "Platon."
            ],
            "answer": 0,
            "explanation": "Heraclite.",
            "keywords": "Q: Ông cho rằng vũ trụ không phải do | A: Heraclite"
        },
        {
            "id": 276,
            "text": "Chọn đáp án đúng nhất theo quan điểm của triết học Mác - Lênin:",
            "options": [
                "Phát triển của sự vật có tính kế thừa nhưng trên cơ sở có phê phán, lọc bỏ, cải tạo và phát triển.",
                "Phát triển của sự vật không có tính kế thừa.",
                "Phát triển của sự vật có tính kế thừa nhưng đó là sự kế thừa nguyên xi cái cũ hoặc lắp ghép từ cái cũ sang cái mới một cách máy móc về mặt hình thức.",
                "Phát triển của sự vật có tính kế thừa và phát triển."
            ],
            "answer": 0,
            "explanation": "Phát triển của sự vật có tính kế thừa nhưng trên cơ sở có phê phán, lọc bỏ, cải tạo và phát triển.",
            "keywords": "Q: Lênin - Chọn đáp án đúng nhất theo | A: Phát triển của sự vật có tính kế · sở có phê phán, lọc bỏ, cải tạo"
        },
        {
            "id": 277,
            "text": "Nguồn gốc ra đời của triết học là:",
            "options": [
                "Kinh tế, xã hội.",
                "Chính trị, xã hội.",
                "Nhận thức, thực tiễn.",
                "Nhận thức, xã hội."
            ],
            "answer": 3,
            "explanation": "Nhận thức, xã hội.",
            "keywords": "Q: Nguồn gốc ra đời của triết học là: | A: Nhận thức, xã hội"
        },
        {
            "id": 278,
            "text": "Khẳng định nào sau đây là đúng?",
            "options": [
                "Phép biện chứng của Hegel là phép biện chứng duy vật.",
                "Phép biện chứng của Hegel là phép biện chứng duy tâm khách quan.",
                "Phép biện chứng của Hegel là phép biện chứng tự phát.",
                "Phép biện chứng của Hegel là phép biện chứng tiên nghiệm chủ quan."
            ],
            "answer": 1,
            "explanation": "Phép biện chứng của Hegel là phép biện chứng duy tâm khách quan.",
            "keywords": "Q: Khẳng định nào sau đây là đúng | A: Phép biện chứng của Hegel là phép · biện chứng duy tâm khách quan"
        },
        {
            "id": 279,
            "text": "Talet quan niệm vật chất là gì?",
            "options": [
                "Lửa.",
                "Nước.",
                "Nguyên tử.",
                "Không khí."
            ],
            "answer": 1,
            "explanation": "Nước.",
            "keywords": "Q: Talet quan niệm vật chất là gì | A: Nước"
        },
        {
            "id": 280,
            "text": "Triết học là gì? Theo quan điểm của các nhà kinh điển Mác - Lênin.",
            "options": [
                "Triết học là tri thức về thế giới tự nhiên.",
                "Triết học là tri thức về tự nhiên và xã hội.",
                "Triết học là tri thức lý luận của con người về thế giới.",
                "Triết học là hệ thống tri thức lý luận chung nhất của con người về thế giới và vị trí của con người trong thế giới."
            ],
            "answer": 3,
            "explanation": "Triết học là hệ thống tri thức lý luận chung nhất của con người về thế giới và vị trí của con người trong thế giới.",
            "keywords": "Q: triết học là gì - Mác Lênin | A: tri thức lý luận chung nhất · thế giới · vị trí của con người"
        },
        {
            "id": 281,
            "text": "Bản chất con người được quyết định bởi:",
            "options": [
                "Các mối quan hệ xã hội.",
                "Nỗ lực của mỗi cá nhân.",
                "Hoàn cảnh xã hội.",
                "Giáo dục của gia đình và nhà trường."
            ],
            "answer": 3,
            "explanation": "Giáo dục của gia đình và nhà trường.",
            "keywords": "Q: Bản chất con người được quyết định bởi: | A: Giáo dục của gia đình · nhà trường"
        },
        {
            "id": 282,
            "text": "Định nghĩa Vật chất của Lênin có mấy giá trị khoa học?",
            "options": [
                "Hai.",
                "Ba.",
                "Bốn.",
                "Năm."
            ],
            "answer": 3,
            "explanation": "Năm.",
            "keywords": "Q: Lênin - Định nghĩa Vật chất của có | A: Năm"
        },
        {
            "id": 283,
            "text": "Theo Chủ nghĩa Mác -Lênin, cơ sở trực tiếp hình thành và phân chia giai cấp trong xã hội là:",
            "options": [
                "Chiến tranh giữa các bộ lạc.",
                "Sản xuất ngày càng phát triển.",
                "Của cải trong xã hội ngày càng nhiều.",
                "Chiếm đoạt tư liệu sản xuất của công thành của riêng."
            ],
            "answer": 3,
            "explanation": "Chiếm đoạt tư liệu sản xuất của công thành của riêng.",
            "keywords": "Q: Lênin - Theo Chủ nghĩa Mác -, cơ | A: Chiếm đoạt tư liệu sản xuất · của công thành của riêng"
        },
        {
            "id": 284,
            "text": "Chọn đáp án đúng nhất:",
            "options": [
                "Ý thức là thuộc tính của mọi dạng vật chất.",
                "Ý thức là sự phản ánh nguyên si hiện thực khách quan.",
                "Ý thức là sự phản ánh năng động, sáng tạo hiện thực khách quan.",
                "Ý thức là sự phản ánh thụ động hiện thực khách quan."
            ],
            "answer": 2,
            "explanation": "Ý thức là sự phản ánh năng động, sáng tạo hiện thực khách quan.",
            "keywords": "Q: Chọn đáp án đúng nhất: | A: Ý thức là sự phản ánh năng · động, sáng tạo hiện thực khách quan"
        },
        {
            "id": 285,
            "text": "Phép biện chứng duy vật được xác lập trên nền tảng nào?",
            "options": [
                "Thế giới quan duy vật.",
                "Thế giới quan duy tâm.",
                "Thế giới quan duy vật khoa học.",
                "Thế giới quan duy tâm chủ quan."
            ],
            "answer": 2,
            "explanation": "Thế giới quan duy vật khoa học.",
            "keywords": "Q: Phép biện chứng duy vật được xác lập | A: Thế giới quan duy vật khoa học"
        },
        {
            "id": 286,
            "text": "Quan hệ giữa khoa học tự nhiên với thần học ở thời kỳ Phục Hưng như thế nào?",
            "options": [
                "Khoa học tự nhiên hoàn toàn phụ thuộc vào thần học và tôn giáo.",
                "Khoa học tự nhiên hoàn toàn độc lập với thần học và tôn giáo.",
                "Khoa học tự nhiên dần dần độc lập với thần học và tôn giáo.",
                "Khoa học tự nhiên vừa độc lập, vừa phụ thuộc với thần học và tôn giáo."
            ],
            "answer": 2,
            "explanation": "Khoa học tự nhiên dần dần độc lập với thần học và tôn giáo.",
            "keywords": "Q: Quan hệ giữa khoa học tự nhiên với | A: Khoa học tự nhiên dần dần độc · lập với thần học và tôn giáo"
        },
        {
            "id": 287,
            "text": "Chủ nghĩa duy tâm tìm nguồn gốc của sự thống nhất của thế giới ở cái gì?",
            "options": [
                "Ở sự vận động và chuyển hóa lẫn nhau của thế giới.",
                "Ở chính bản thân nó.",
                "Ở tính vật chất của thế giới.",
                "Ở ý niệm tuyệt đối hoặc ở ý thức của con người."
            ],
            "answer": 3,
            "explanation": "Ở ý niệm tuyệt đối hoặc ở ý thức của con người.",
            "keywords": "Q: Chủ nghĩa duy tâm tìm nguồn gốc của | A: Ở ý niệm tuyệt đối hoặc · ở ý thức của con người"
        },
        {
            "id": 288,
            "text": "Nhà triết học nào cho rằng: con người bản tính đầu tiên của con người là ác \"Nhân chi sơ, tính bản ác\"?",
            "options": [
                "Mao Trạch Đông.",
                "Đổng Trọng Thư.",
                "Tuân tử.",
                "Khổng Tử."
            ],
            "answer": 2,
            "explanation": "Tuân tử.",
            "keywords": "Q: Nhà triết học nào cho rằng: con người | A: Tuân tử"
        },
        {
            "id": 289,
            "text": "Những thành tựu khoa học tự nhiên nào là tiền đề của sự ra đời của chủ nghĩa Mác-Lênin?",
            "options": [
                "Thuyết tiến hóa, Định luật vạn vật hấp dẫn, Thuyết tế bào.",
                "Thuyết tiến hóa, Quy luật bảo toàn và chuyển hóa năng lượng, Thuyết tế bào.",
                "Thuyết tiến hóa, Thuyết nguyên tử, Thuyết tế bào.",
                "Quy luật bảo toàn và chuyển hóa năng lượng, Định luật vạn vật hấp dẫn."
            ],
            "answer": 1,
            "explanation": "Thuyết tiến hóa, Quy luật bảo toàn và chuyển hóa năng lượng, Thuyết tế bào.",
            "keywords": "Q: Lênin - Những thành tựu khoa học tự | A: Thuyết tiến hóa, Quy luật bảo toàn và · chuyển hóa năng lượng, Thuyết tế bào"
        },
        {
            "id": 290,
            "text": "“Tất cả cái gì đang vận động, đều vận động nhờ một cái khác nào đó”. Nhận định này gắn liện với hệ thồng triết học nào? Chọn phương án Sai.",
            "options": [
                "Triết học duy vật.",
                "Triết học duy tâm.",
                "Triết học duy tâm khách quan.",
                "Triết học duy tâm chủ quan."
            ],
            "answer": 0,
            "explanation": "Triết học duy vật.",
            "keywords": "Q: SAI - “Tất cả cái gì đang vận | A: Triết học duy vật"
        },
        {
            "id": 291,
            "text": "Trong triết học cổ đại Ấn Độ, nhân sinh quan Phật giáo thể hiện tập trung  trong thuyết \"\"tứ đế\"\". Phương án đúng nhất.",
            "options": [
                "Khổ đế, Tập đế, Nhân đế, Đạo đế.",
                "Khổ đế, Tập đế, Nhân đế, Diệt đế.",
                "Khổ đế, Tập đế, Đạo đế, Niết bàn.",
                "Khổ đế, Tập đế, Diệt đế, Đạo đế."
            ],
            "answer": 3,
            "explanation": "Khổ đế, Tập đế, Diệt đế, Đạo đế.",
            "keywords": "Q: Trong triết học cổ đại Ấn Độ, nhân | A: Khổ đế · Tập đế · Diệt đế · Đạo đế"
        },
        {
            "id": 292,
            "text": "Cái ngẫu nhiên xảy ra do nguyên nhân nào quy định?",
            "options": [
                "Nguyên nhân bên trong.",
                "Nguyên nhân bên ngoài.",
                "Nguyên nhân bên trong và bên ngoài.",
                "Nguyên nhân cơ bản."
            ],
            "answer": 1,
            "explanation": "Nguyên nhân bên ngoài.",
            "keywords": "Q: Cái ngẫu nhiên xảy ra do nguyên nhân | A: Nguyên nhân bên ngoài"
        },
        {
            "id": 293,
            "text": "Quá trình sản xuất là quá trình kết hợp:",
            "options": [
                "Tư liệu sản xuất và sức lao động.",
                "Người với người.",
                "Người với tự nhiên.",
                "Máy móc với tư liệu sản xuất."
            ],
            "answer": 0,
            "explanation": "Tư liệu sản xuất và sức lao động.",
            "keywords": "Q: Quá trình sản xuất là quá trình kết | A: Tư liệu sản xuất · sức lao động"
        },
        {
            "id": 294,
            "text": "Đồng nhất vật chất với một vật thể hữu hình cảm tính đang tồn tại trong thế giới bên ngoài là quan điểm của  trường phái triết học nào?",
            "options": [
                "Chủ nghĩa duy vật chất phác.",
                "Chủ nghĩa duy vật siêu hình thế kỷ XVII - XVIII.",
                "Chủ nghĩa duy tâm.",
                "Chủ nghĩa duy vật biện chứng."
            ],
            "answer": 0,
            "explanation": "Chủ nghĩa duy vật chất phác.",
            "keywords": "Q: Đồng nhất vật chất với một vật thể | A: Chủ nghĩa duy vật chất phác"
        },
        {
            "id": 295,
            "text": "Triết học Mác - Lênin cho rằng: thực tiễn là toàn bộ […] có mục đích, mang tính lịch sử xã hội của con người nhằm cải tạo thế giới khách quan. Điền vào chỗ trống.",
            "options": [
                "Hoạt động vật chất và tinh thần.",
                "Hoạt động tinh thần.",
                "Hoạt động vật chất.",
                "Hoạt động."
            ],
            "answer": 2,
            "explanation": "Hoạt động vật chất.",
            "keywords": "Q: Triết học Mác - Lênin cho rằng: thực | A: Hoạt động vật chất"
        },
        {
            "id": 296,
            "text": "Vai trò của thực tiễn đối với nhận thức:",
            "options": [
                "Thực tiễn là cơ sở, nguồn gốc của nhận thức.",
                "Thực tiễn là kết quả của nhận thức.",
                "Thực tiễn do ý thức của con người tạo ra.",
                "Thực tiễn là kết quả của ý thức."
            ],
            "answer": 0,
            "explanation": "Thực tiễn là cơ sở, nguồn gốc của nhận thức.",
            "keywords": "Q: Vai trò của thực tiễn đối với nhận | A: Thực tiễn là cơ sở · nguồn gốc của nhận thức"
        },
        {
            "id": 297,
            "text": "Ai coi việc đạt tới thiện là mục đích tối cao?",
            "options": [
                "Xocrat.",
                "Epiquy.",
                "Platôn.",
                "Aristot."
            ],
            "answer": 3,
            "explanation": "Aristot.",
            "keywords": "Q: Ai coi việc đạt tới thiện là mục | A: Aristot"
        },
        {
            "id": 298,
            "text": "Đối tượng lao động là:",
            "options": [
                "Công cụ lao động.",
                "Cơ sở hạ tầng.",
                "Khoa học, công nghệ.",
                "Những cái trong tự nhiên và nguyên liệu."
            ],
            "answer": 3,
            "explanation": "Những cái trong tự nhiên và nguyên liệu.",
            "keywords": "Q: Đối tượng lao động là: | A: Những cái trong tự nhiên · nguyên liệu"
        },
        {
            "id": 299,
            "text": "Theo triết học Mác - Lênin, phép biện chứng duy vật có mấy nguyên lý?",
            "options": [
                "Hai nguyên lý.",
                "Ba nguyên lý.",
                "Bốn nguyên lý.",
                "Sáu nguyên lý."
            ],
            "answer": 0,
            "explanation": "Hai nguyên lý.",
            "keywords": "Q: Lênin - phép biện chứng duy vật có | A: Hai nguyên lý"
        },
        {
            "id": 300,
            "text": "Quan niệm cho rằng vật chất có trước ý thức, vật chất quyết định ý thức là quan điểm của các nhà triết học nào?",
            "options": [
                "Duy tâm.",
                "Khả tri luận.",
                "Bất khả tri luận.",
                "Duy vật."
            ],
            "answer": 3,
            "explanation": "Duy vật.",
            "keywords": "Q: Quan niệm cho rằng vật chất có trước | A: Duy vật"
        },
        {
            "id": 301,
            "text": "Chọn đáp KHÔNG đúng theo triết học Mác - Lênin:",
            "options": [
                "Ngôn ngữ là hệ thống tín hiệu vật chất mang nội dung ý thức.",
                "Ngôn ngữ là cái vỏ vật chất của tư duy mang nội dung ý thức.",
                "Ngôn ngữ là cái vỏ vật chất của tư duy.",
                "Ngôn ngữ là hiện tượng tinh thần."
            ],
            "answer": 3,
            "explanation": "Ngôn ngữ là hiện tượng tinh thần.",
            "keywords": "Q: KHÔNG đúng - Chọn đáp KHÔNG đúng theo | A: Ngôn ngữ · hiện tượng tinh thần"
        },
        {
            "id": 302,
            "text": "Theo triết học Mác - Lênin, Nhà nước thực hiện chức năng gì?",
            "options": [
                "Đối nội.",
                "Đối ngoại.",
                "Vừa đối nội vừa đối ngoại.",
                "Bạo lực, giám sát pháp luật."
            ],
            "answer": 2,
            "explanation": "Vừa đối nội vừa đối ngoại.",
            "keywords": "Q: Lênin - Nhà nước thực hiện chức năng | A: Vừa đối nội vừa đối ngoại"
        },
        {
            "id": 303,
            "text": "Đặc trưng của phép biện chứng chất phác thời cổ đại là gì?",
            "options": [
                "Tính chất duy tâm.",
                "Tính chất duy vật, chưa triệt để.",
                "Tính chất tự phát, mộc mạc, ngây thơ.",
                "Tính chất khoa học."
            ],
            "answer": 2,
            "explanation": "Tính chất tự phát, mộc mạc, ngây thơ.",
            "keywords": "Q: Đặc trưng của phép biện chứng chất phác | A: Tính chất tự phát · mộc mạc · ngây thơ"
        },
        {
            "id": 304,
            "text": "Triết học ra đời trong điều kiện nào?",
            "options": [
                "Xã hội phân chia thành giai cấp.",
                "Xuất hiện tầng lớp lao động trí óc.",
                "Tư duy của con người đạt trình độ tư duy khái quát cao và xuất hiện tầng lớp lao động trí óc có khả năng hệ thống tri thức của con người.",
                "Tư duy của con người đạt trình độ tư duy cao và xuất hiện tầng lớp lao động trí óc."
            ],
            "answer": 2,
            "explanation": "Tư duy của con người đạt trình độ tư duy khái quát cao và xuất hiện tầng lớp lao động trí óc có khả năng hệ thống tri thức của con người.",
            "keywords": "Q: Triết học ra đời trong điều kiện nào | A: Tư duy của con người đạt trình độ · tầng lớp lao động trí óc có khả"
        },
        {
            "id": 305,
            "text": "Chọn đáp án KHÔNG đúng. Các nhà triết học duy tâm cho rằng:",
            "options": [
                "Ý thức có trước vật chất.",
                "Ý thức quyết định vật chất.",
                "Bản chất của thế giới là ý thức.",
                "Ý thức tồn tại trong con người."
            ],
            "answer": 3,
            "explanation": "Ý thức tồn tại trong con người.",
            "keywords": "Q: KHÔNG đúng - Các nhà triết học duy | A: Ý thức tồn tại trong con người"
        },
        {
            "id": 306,
            "text": "Điền vào dấu […]. Trong qua trình phát triển khách quan của sự vật , ở những điều kiện nhất định […] có thể chyển hóa thành cái chung và ngược lại.",
            "options": [
                "Nội dung.",
                "Cái riêng.",
                "Bản chất.",
                "Cái đơn nhất."
            ],
            "answer": 3,
            "explanation": "Cái đơn nhất.",
            "keywords": "Q: Điền vào dấu […]. Trong qua trình phát | A: Cái đơn nhất"
        },
        {
            "id": 307,
            "text": "Hình thức đầu tiên của đấu tranh giai cấp của giai cấp công nhân khi chưa giành được chính quyền:",
            "options": [
                "Đấu tranh chính trị.",
                "Đấu tranh kinh tế.",
                "Đấu tranh vũ trang.",
                "Đấu tranh tư tưởng."
            ],
            "answer": 1,
            "explanation": "Đấu tranh kinh tế.",
            "keywords": "Q: Hình thức đầu tiên của đấu tranh giai | A: Đấu tranh kinh tế"
        },
        {
            "id": 308,
            "text": "Dân tộc có mấy đặc trưng chủ yếu?",
            "options": [
                "Hai.",
                "Ba.",
                "Bốn.",
                "Năm."
            ],
            "answer": 3,
            "explanation": "Năm.",
            "keywords": "Q: Dân tộc có mấy đặc trưng chủ yếu | A: Năm"
        },
        {
            "id": 309,
            "text": "Môn học nào sau đây không thuộc chủ nghĩa Mác-Lênin?",
            "options": [
                "Triết học Mác - Lênin.",
                "Chủ nghĩa xã hội khoa học.",
                "Lịch sử Đảng cộng sản Việt Nam.",
                "Kinh tế chính trị."
            ],
            "answer": 2,
            "explanation": "Lịch sử Đảng cộng sản Việt Nam.",
            "keywords": "Q: Lênin - Môn học nào sau đây không | A: Lịch sử Đảng cộng sản Việt Nam"
        },
        {
            "id": 310,
            "text": "Quan điểm nào cho rằng: Vật chất có trước, ý thức có sau, vật chất quyết định ý thức?",
            "options": [
                "Chủ nghĩa duy tâm.",
                "Bất khả tri.",
                "Nhị nguyên luận.",
                "Chủ nghĩa duy vật."
            ],
            "answer": 3,
            "explanation": "Chủ nghĩa duy vật.",
            "keywords": "Q: Quan điểm nào cho rằng: Vật chất có | A: Chủ nghĩa duy vật"
        },
        {
            "id": 311,
            "text": "Câu: \"Có thực mới vực được đạo\" thể hiện quan điểm của trường phái triết học nào?",
            "options": [
                "Duy vật.",
                "Duy tâm.",
                "Khả tri luận.",
                "Bất khả tri luận."
            ],
            "answer": 0,
            "explanation": "Duy vật.",
            "keywords": "Q: Câu: \"Có thực mới vực được đạo\" thể | A: Duy vật"
        },
        {
            "id": 312,
            "text": "Chủ nghĩa duy vật có bao nhiêu hình thức cơ bản?",
            "options": [
                "Hai hình thức.",
                "Ba hình thức.",
                "Bốn hình thức.",
                "Năm hình thức."
            ],
            "answer": 1,
            "explanation": "Ba hình thức.",
            "keywords": "Q: Chủ nghĩa duy vật có bao nhiêu hình | A: Ba hình thức"
        },
        {
            "id": 313,
            "text": "Đặc trưng nổi bật trong quan hệ giữa các dân tộc ở nước ta?",
            "options": [
                "Là sự phân bố đan xen nhau, không một dân tộc nào có lãnh thổ riêng.",
                "Là sự đoàn kết dân tộc, hòa hợp dân tộc trong một cộng đồng thống nhất.",
                "Là có sự chênh lệch về trình độ phát triển KTXH giữa các dân tộc.",
                "Là các dân tộc có bản sắc văn hóa riêng, đa dạng, phong phú."
            ],
            "answer": 1,
            "explanation": "Là sự đoàn kết dân tộc, hòa hợp dân tộc trong một cộng đồng thống nhất.",
            "keywords": "Q: Đặc trưng nổi bật trong quan hệ giữa | A: Là sự đoàn kết dân tộc, hòa hợp · dân tộc trong một cộng đồng thống nhất"
        },
        {
            "id": 314,
            "text": "Chọn đáp án đúng nhất. Theo triết học Mác:",
            "options": [
                "Mọi sự thay đổi về lượng đều làm cho sự vật thay đổi về chất.",
                "Không phải mọi sự thay đổi về lượng đều làm cho sự vật thay đổi về chất.",
                "Mọi sự thay đổi về lượng đều không làm cho sự vật thay đổi về chất.",
                "Mọi sự thay đổi về chất đều không làm cho sự vật thay đổi về lượng."
            ],
            "answer": 1,
            "explanation": "Không phải mọi sự thay đổi về lượng đều làm cho sự vật thay đổi về chất.",
            "keywords": "Q: Mác - Không phải mọi sự th | A: Không phải mọi sự thay đổi về lượng · làm cho sự vật thay đổi về chất"
        },
        {
            "id": 315,
            "text": "Cụm từ nào được V.I.Lênin sử dụng nhiều lần khi đưa ra định nghĩa về vật chất?",
            "options": [
                "Ý thức.",
                "Cảm giác.",
                "Nhận thức.",
                "Tư tưởng."
            ],
            "answer": 1,
            "explanation": "Cảm giác.",
            "keywords": "Q: Lênin - Cụm từ nào được V.I. sử | A: Cảm giác"
        },
        {
            "id": 316,
            "text": "Cùng một[…]có thể có nhiều[…]khác nhau, tùy theo sự thay đổi của điều kiện và hoàn cảnh. Điền đúng vào […].",
            "options": [
                "Nội Dung/ Hình thức.",
                "Bản Chất/ Hiện Tượng.",
                "Nguyên Nhân/ Kết Quả.",
                "Tất nhiên/ Ngẫu nhiên."
            ],
            "answer": 1,
            "explanation": "Bản Chất/ Hiện Tượng.",
            "keywords": "Q: Cùng một[…]có thể có nhiều[…]khác nhau, tùy theo | A: Bản Chất/ Hiện Tượng"
        },
        {
            "id": 317,
            "text": "Chọn đáp án đúng nhất theo quan điểm của triết học Mác - Lênin:",
            "options": [
                "Thành quả của những khoa học cụ thể là những tư liệu để triết học rút ra những kết luận của mình.",
                "Những kết luận của triết học đưa lại thế giới quan và phương pháp luận đúng đắn cho sự phát triển của các khoa học.",
                "Triết học là khoa học của mọi khoa học.",
                "Thành quả của những khoa học xã hội là những tư liệu để triết học rút ra những bài học kinh nghiệm."
            ],
            "answer": 1,
            "explanation": "Những kết luận của triết học đưa lại thế giới quan và phương pháp luận đúng đắn cho sự phát triển của các khoa học.",
            "keywords": "Q: Lênin - nhất theo quan điểm của triết | A: Những kết luận của triết học đưa lại · pháp luận đúng đắn cho sự phát triển"
        },
        {
            "id": 318,
            "text": "Phạm trù nào dùng để chỉ tính quy định vốn có của các sự vật, là sự thống nhất hữu cơ của những thuộc tính?",
            "options": [
                "Chất.",
                "Lượng.",
                "Độ.",
                "Vận động."
            ],
            "answer": 0,
            "explanation": "Chất.",
            "keywords": "Q: Phạm trù nào dùng để chỉ tính quy | A: Chất"
        },
        {
            "id": 319,
            "text": "Theo Chủ nghĩa Mác -Lênin, giai cấp là những tập đoàn khác nhau về:",
            "options": [
                "Khác nhau về nghề nghiệp.",
                "Sở hữu đối với tư liệu sản xuất.",
                "Tài sản.",
                "Địa vị công ty."
            ],
            "answer": 1,
            "explanation": "Sở hữu đối với tư liệu sản xuất.",
            "keywords": "Q: Lênin - Theo Chủ nghĩa Mác -, giai | A: Sở hữu đối với tư liệu sản xuất"
        },
        {
            "id": 320,
            "text": "Chọn đáp án đúng nhất theo thứ tự từ thấp đến cao của các hình thức vận động:",
            "options": [
                "Vận động cơ học, vận động hóa học, vận động vật lý, vận động sinh học, vận động xã hội.",
                "Vận động vật lý, vận động hóa học, vận động cơ học, vận động xã hội, vận động sinh học.",
                "Vận động cơ học, vận động vật lý, vận động hóa học, vận động sinh học, vận động xã hội.",
                "Vận động cơ học, vận động sinh học, vận động vật lý, vận động hóa học, vận động xã hội."
            ],
            "answer": 2,
            "explanation": "Vận động cơ học, vận động vật lý, vận động hóa học, vận động sinh học, vận động xã hội.",
            "keywords": "Q: Chọn đáp án đúng nhất theo thứ tự | A: Vận động cơ học, vận động vật lý, · hóa học, vận động sinh học, vận động"
        },
        {
            "id": 321,
            "text": "Chọn đáp án đúng nhất theo triết học Mác - Lênin:",
            "options": [
                "Lịch sử được quyết định bởi mệnh trời.",
                "Lịch sử được quyết định bởi quần chúng nhân dân.",
                "Lịch sử được quyết định bởi cá nhân anh hùng hào kiệt.",
                "Lịch sử không do ai quyết định vì nó diễn ra theo qui luật tự nhiên."
            ],
            "answer": 1,
            "explanation": "Lịch sử được quyết định bởi quần chúng nhân dân.",
            "keywords": "Q: Lênin - Lịch sử được quyết đ | A: Lịch sử được quyết định · bởi quần chúng nhân dân"
        },
        {
            "id": 322,
            "text": "Chọn đáp án đúng nhất theo quan điểm triết học Mác - Lênin.",
            "options": [
                "Động vật bậc cao cũng có ý thức như con người.",
                "Ý thức chỉ có ở con người.",
                "Người máy cũng có ý thức như con người.",
                "Con người giống như cỗ máy."
            ],
            "answer": 1,
            "explanation": "Ý thức chỉ có ở con người.",
            "keywords": "Q: Lênin - Chọn đáp án đúng nhất theo | A: Ý thức chỉ có ở con người"
        },
        {
            "id": 323,
            "text": "Theo triết học Mác - Lênin, lao động là yếu tố đầu tiên, cơ bản, quan trọng nhất tạo nên sự thống nhất hữu cơ giữa xã hội và tự nhiên là vì:",
            "options": [
                "Lao động làm cho con người ngày càng hoàn thiện hơn.",
                "Lao động là đặc trưng cơ bản đầu tiên phân biệt hoạt động của con người với động vật.",
                "Lao động tạo ra của cải vật chất cho xã hội, mà xã hội là một bộ phận đặc thù của tự nhiên.",
                "Lao động là quá trình diễn ra giữa con người và tự nhiên, con người là trung gian điều tiết, kiểm tra sự trao đổi chất với tự nhiên."
            ],
            "answer": 3,
            "explanation": "Lao động là quá trình diễn ra giữa con người và tự nhiên, con người là trung gian điều tiết, kiểm tra sự trao đổi chất với tự nhiên.",
            "keywords": "Q: Lênin - lao động là yếu tố đầu | A: Lao động là quá trình diễn ra giữa · là trung gian điều tiết, kiểm tra sự"
        },
        {
            "id": 324,
            "text": "Chọn đáp án KHÔNG đúng. Lực lượng sản xuất quyết định Quan hệ sản xuất trên:",
            "options": [
                "Hình thức quan hệ sản xuất.",
                "Sự biến đổi.",
                "Trình độ quan hệ sản xuất.",
                "Chất lượng sản phẩm."
            ],
            "answer": 3,
            "explanation": "Chất lượng sản phẩm.",
            "keywords": "Q: KHÔNG đúng - Lực lượng sản xuất quyết | A: Chất lượng sản phẩm"
        },
        {
            "id": 325,
            "text": "Quan hệ sản xuất tác động thúc đẩy sự phát triển Lực lượng sản xuất khi:",
            "options": [
                "Quan hệ sản xuất phù hợp Lực lượng sản xuất.",
                "Quan hệ sản xuất lạc hậu hơn so với Lực lượng sản xuất.",
                "Quan hệ sản xuất tiến bộ hơn so với Lực lượng sản xuất.",
                "Khi đó là quan hệ sản xuất ưu việt."
            ],
            "answer": 0,
            "explanation": "Quan hệ sản xuất phù hợp Lực lượng sản xuất.",
            "keywords": "Q: Quan hệ sản xuất tác động thúc đẩy | A: Quan hệ sản xuất phù · hợp Lực lượng sản xuất"
        },
        {
            "id": 326,
            "text": "Theo Mác - Lênin, ý thức ra đời dựa trên mấy nguồn gốc?",
            "options": [
                "4 (Tự nhiên, xã hội, con người, lao động).",
                "3 (Tự nhiên, xã hội, con người).",
                "2 (Con người, xã hội).",
                "2 (Tự nhiên, xã hội)."
            ],
            "answer": 3,
            "explanation": "2 (Tự nhiên, xã hội).",
            "keywords": "Q: Lênin - ý thức ra đời dựa trên | A: 2 (Tự nhiên, xã hội)"
        },
        {
            "id": 327,
            "text": "Trong các yếu tố cấu thành tồn tại xã hội thì yếu tố nào quan trọng nhất?",
            "options": [
                "Phương thức sản xuất vật chất.",
                "Điều kiện tự nhiên.",
                "Dân số và mật độ dân số.",
                "Vị trí địa lý."
            ],
            "answer": 0,
            "explanation": "Phương thức sản xuất vật chất.",
            "keywords": "Q: Trong các yếu tố cấu thành tồn tại | A: Phương thức sản xuất vật chất"
        },
        {
            "id": 328,
            "text": "Mác: \"Phương pháp biện chứng của tôi không chỉ khác phương pháp của Hegel mà còn đối lập hẳn phương pháp ấy\". Đó là:",
            "options": [
                "Phương pháp biện chứng tự phát.",
                "Phương pháp biện chứng duy vật.",
                "Phương pháp biện chứng duy tâm.",
                "Phương pháp siêu hình."
            ],
            "answer": 1,
            "explanation": "Phương pháp biện chứng duy vật.",
            "keywords": "Q: Hegel - Phương pháp biện chứng của t | A: Phương pháp biện chứng duy vật"
        },
        {
            "id": 329,
            "text": "Chọn đáp án KHÔNG đúng về tư liệu sản xuất:",
            "options": [
                "Những cái có sẵn trong tự nhiên.",
                "Nguyên liệu.",
                "Công cụ lao động và các yếu tố vật chất khác.",
                "Cơ chế vận hành nhà xưởng."
            ],
            "answer": 3,
            "explanation": "Cơ chế vận hành nhà xưởng.",
            "keywords": "Q: KHÔNG đúng - về tư liệu sản xuất: | A: Cơ chế vận hành nhà xưởng"
        },
        {
            "id": 330,
            "text": "Theo triết học Mác; Ý thức là sự phản ánh:",
            "options": [
                "Sao chép, máy móc.",
                "Thụ động.",
                "Năng động, sáng tạo.",
                "Tâm lý."
            ],
            "answer": 2,
            "explanation": "Năng động, sáng tạo.",
            "keywords": "Q: Mác - ; Ý thức là sự phản | A: Năng động, sáng tạo"
        },
        {
            "id": 331,
            "text": "Chọn câu trả lời đúng nhất. Mặt thứ hai của vấn đề cơ bản của triết học là:",
            "options": [
                "Giữa vật chất và ý thức, cái nào có trước, cái nào có sau, cái nào quyết định cái nào.",
                "Con người có khả năng nhận thức thế giới hay không.",
                "Vấn đề quan hệ giữa tư duy và tồn tại.",
                "Vấn đề quan hệ giữa vật chất và ý thức."
            ],
            "answer": 1,
            "explanation": "Con người có khả năng nhận thức thế giới hay không.",
            "keywords": "Q: Chọn câu trả lời đúng nhất. Mặt thứ | A: Con người có khả năng nhận · thức thế giới hay không"
        },
        {
            "id": 332,
            "text": "Quan điểm triết học tự nhiên có tính chất phiếm thần luận là đặc trưng của triết học thời kỳ nào?",
            "options": [
                "Thời kỳ cổ đại.",
                "Thời kỳ Phục Hưng.",
                "Thời kỳ trung cổ.",
                "Thời kỳ cận đại."
            ],
            "answer": 1,
            "explanation": "Thời kỳ Phục Hưng.",
            "keywords": "Q: Quan điểm triết học tự nhiên có tính | A: Thời kỳ Phục Hưng"
        },
        {
            "id": 333,
            "text": "Chọn đáp án KHÔNG đúng. Theo triết học Mác - Lênin về quần chúng nhân dân:",
            "options": [
                "Những người lao động sản xuất ra của cải vật chất.",
                "Những người chống lại giai cấp thống trị.",
                "Những giai cấp tầng lớp thúc đẩy tiến bộ xã hội.",
                "Tất cả dân cư trong xã hội."
            ],
            "answer": 3,
            "explanation": "Tất cả dân cư trong xã hội.",
            "keywords": "Q: KHÔNG đúng - Chọn đáp án KHÔNG đúng. | A: Tất cả dân cư trong xã hội"
        },
        {
            "id": 334,
            "text": "Phạm trù nào chỉ sự sắp xếp, mối quan hệ và cơ chế vận hành của các bộ phận, các yếu tố trong một hình thái kinh tế xã hội nhất định?",
            "options": [
                "Cấu trúc xã hội.",
                "Cấu trúc giai cấp.",
                "Cơ sở hạ tầng.",
                "Kiến trúc thượng tầng."
            ],
            "answer": 0,
            "explanation": "Cấu trúc xã hội.",
            "keywords": "Q: Phạm trù nào chỉ sự sắp xếp, mối | A: Cấu trúc xã hội"
        },
        {
            "id": 335,
            "text": "Chọn đáp KHÔNG đúng theo quan điểm của triết học Mác - Lênin:",
            "options": [
                "Nguồn gốc trực tiếp quan trọng nhất quyết định sự ra đời và phát triển của ý thức là lao động, là thực tiễn xã hội.",
                "Ý thức phản ánh hiện thực khách quan vào bộ óc con người thông qua lao động, ngôn ngữ và các quan hệ xã hội.",
                "Ý thức là sản phẩm xã hội, một hiện tượng xã hội.",
                "Ý thức thuần túy là hiện tượng cá nhân."
            ],
            "answer": 3,
            "explanation": "Ý thức thuần túy là hiện tượng cá nhân.",
            "keywords": "Q: KHÔNG đúng - Chọn đáp KHÔNG đúng theo | A: Ý thức thuần túy · hiện tượng cá nhân"
        },
        {
            "id": 336,
            "text": "Qua phát biểu \"Nếu bản chất và hiện tượng luôn có sự thống nhất với nhau, thì mọi khoa học trở nên thừa\". Mác muốn khẳng định điều gì?",
            "options": [
                "Bản chất và hiện tượng có mâu thuẫn.",
                "Bản chất và hiện tượng có sự thống nhất.",
                "Hiện tượng đôi khi xuyên tạc bản chất.",
                "Bản chất là cái chi phối sự vật."
            ],
            "answer": 3,
            "explanation": "Bản chất là cái chi phối sự vật.",
            "keywords": "Q: Mác - Nếu bản chất và hiện tượng | A: Bản chất · cái chi phối sự vật"
        },
        {
            "id": 337,
            "text": "Nguồn gốc của sự hình thành và phân chia giai cấp trong xã hội là do:",
            "options": [
                "Sắc tộc.",
                "Tài năng.",
                "Tôn giáo.",
                "Kinh tế."
            ],
            "answer": 3,
            "explanation": "Kinh tế.",
            "keywords": "Q: Nguồn gốc của sự hình thành và phân | A: Kinh tế"
        },
        {
            "id": 338,
            "text": "Chọn đáp án đúng nhất. Phủ định biện chứng là:",
            "options": [
                "Sự thay thế cái cũ bằng cái mới.",
                "Phủ định làm cho sự vật vận động thụt lùi, đi xuống, tan rã.",
                "Sự phủ định có kế thừa và tạo điều kiện cho phát triển.",
                "Phủ định làm cho sự vật vận động tiến lên, phát triển."
            ],
            "answer": 2,
            "explanation": "Sự phủ định có kế thừa và tạo điều kiện cho phát triển.",
            "keywords": "Q: Phủ định biện chứng là: | A: Sự phủ định có kế thừa và · tạo điều kiện cho phát triển"
        },
        {
            "id": 339,
            "text": "Vấn đề cơ bản của triết học được giải quyết trên những mặt nào?",
            "options": [
                "Bản thể luận - Nhận thức luận.",
                "Duy vật - Duy tâm.",
                "Khả tri luận - Bất khả tri luận.",
                "Vật chất - Ý thức."
            ],
            "answer": 0,
            "explanation": "Bản thể luận - Nhận thức luận.",
            "keywords": "Q: Vấn đề cơ bản của triết học được | A: Bản thể luận - Nhận thức luận"
        },
        {
            "id": 340,
            "text": "Theo Chủ nghĩa Mác -Lênin, cách mạng xã hội tạo nên thay đổi cơ bản nhất là:",
            "options": [
                "Thay đổi chính quyền nhà nước.",
                "Thay đổi chế độ chính trị.",
                "Thay đổi bộ mặt văn hóa xã hội.",
                "Thay đổi đạo đức xã hội."
            ],
            "answer": 0,
            "explanation": "Thay đổi chính quyền nhà nước.",
            "keywords": "Q: Lênin - Theo Chủ nghĩa Mác -, cách | A: Thay đổi chính quyền nhà nước"
        },
        {
            "id": 341,
            "text": "Nhận định nào là đúng khi xem xét mối quan hệ giữa cái chung, cái riêng , cái đơn nhất?",
            "options": [
                "Cái riêng phong phú hơn cái chung.",
                "Cái chung phong phú hơn cái riêng.",
                "Cái riêng nghèo nàn hơn cái đơn nhất.",
                "Cái riêng sâu sắc hơn cái chung."
            ],
            "answer": 2,
            "explanation": "Cái riêng nghèo nàn hơn cái đơn nhất.",
            "keywords": "Q: Nhận định nào là đúng khi xem xét | A: Cái riêng nghèo nàn hơn cái đơn nhất"
        },
        {
            "id": 342,
            "text": "Chọn câu trả lời đúng: Theo Ph.Ăng ghen, tồn tại là:",
            "options": [
                "Vật chất.",
                "Tư duy.",
                "Tồn tại xã hội.",
                "Tồn tại khách quan."
            ],
            "answer": 0,
            "explanation": "Vật chất.",
            "keywords": "Q: Chọn câu trả lời đúng: Theo Ph.Ăng ghen, | A: Vật chất"
        },
        {
            "id": 343,
            "text": "Trong các hình thức cơ bản của hoạt động thực tiễn, hình thức nào là quan trọng nhất:",
            "options": [
                "Sản xuất vật chất.",
                "Chính trị xã hội.",
                "Thực nghiệm khoa học.",
                "Thực nghiệm xã hội."
            ],
            "answer": 0,
            "explanation": "Sản xuất vật chất.",
            "keywords": "Q: Trong các hình thức cơ bản của hoạt | A: Sản xuất vật chất"
        },
        {
            "id": 344,
            "text": "Chọn đáp án đúng nhất theo trình tự phát triển của chủ nghĩa duy vật:",
            "options": [
                "Chủ nghĩa duy duy vật biện chứng, chủ nghĩa duy vật chất phác, chủ nghĩa duy vật siêu hình.",
                "Chủ nghĩa duy vật siêu hình, chủ nghĩa duy vật chất phác, chủ nghĩa duy vật biện chứng.",
                "Chủ nghĩa duy vật siêu hình, chủ nghĩa duy vật biện chứng, chủ nghĩa duy vật chất phác.",
                "Chủ nghĩa duy vật chất phác, chủ nghĩa duy vật siêu hình, chủ nghĩa duy vật biện chứng."
            ],
            "answer": 3,
            "explanation": "Chủ nghĩa duy vật chất phác, chủ nghĩa duy vật siêu hình, chủ nghĩa duy vật biện chứng.",
            "keywords": "Q: trình tự phát triển duy vật | A: Chủ nghĩa duy vật chất phác · Chủ nghĩa duy vật siêu hình · Chủ nghĩa duy vật biện chứng"
        },
        {
            "id": 345,
            "text": "Nước ta có bao nhiêu dân tộc cùng nhau chung sống?",
            "options": [
                "49 dân tộc.",
                "52 dân tộc.",
                "54 dân tộc.",
                "55 dân tộc."
            ],
            "answer": 2,
            "explanation": "54 dân tộc.",
            "keywords": "Q: Nước ta có bao nhiêu dân tộc cùng | A: 54 dân tộc"
        },
        {
            "id": 346,
            "text": "Điền cụm từ thích hợp vào chỗ trống của câu sau để được định nghĩa khái niệm hiện thực: \"Hiện thực là phạm trù triết học chỉ cái […]\".",
            "options": [
                "Sẽ có sẽ tồn tại.",
                "Chưa có, chưa tồn tại.",
                "Mối liên hệ giữa các sự vật.",
                "Đã có, đang tồn tại."
            ],
            "answer": 3,
            "explanation": "Đã có, đang tồn tại.",
            "keywords": "Q: Điền cụm từ thích hợp vào chỗ trống | A: Đã có, đang tồn tại"
        },
        {
            "id": 347,
            "text": "Con người XHCN là con người nào từ xã hội nào?",
            "options": [
                "Từ xã hội tư bản.",
                "Cả trong xã hội tư bản và xã hội XHCN.",
                "Trong xã hội XHCN.",
                "Từ xã hội cũ để lại và sinh ra trong xã hội mới."
            ],
            "answer": 1,
            "explanation": "Cả trong xã hội tư bản và xã hội XHCN.",
            "keywords": "Q: Con người XHCN là con người nào từ | A: Cả trong xã hội tư bản · xã hội XHCN"
        },
        {
            "id": 348,
            "text": "Chọn đáp án KHÔNG đúng:",
            "options": [
                "Trong quan hệ sản xuất thì quan hệ sở hữu tư liệu sản xuất quyết định các quan hệ khác.",
                "Trong quan hệ sản xuất thì quan hệ tổ chức quản lý sản xuất quyết định các quan hệ khác.",
                "Quan hệ sản xuất bao gồm quan hệ sở hữu tư liệu sản xuất, quan hệ tổ chức quản lý sản xuất và quan hệ phân phối sản phẩm.",
                "Quan hệ sản xuất phù hợp với tính chất và trình độ của lực lượng sản xuất sẽ thúc sản xuất phát triển."
            ],
            "answer": 1,
            "explanation": "Trong quan hệ sản xuất thì quan hệ tổ chức quản lý sản xuất quyết định các quan hệ khác.",
            "keywords": "Q: KHÔNG đúng - : | A: Trong quan hệ sản xuất thì quan hệ · quản lý sản xuất quyết định các quan"
        },
        {
            "id": 349,
            "text": "Chọn cụm từ đúng điền vào chỗ trống: “Phép siêu hình đẩy lùi được […] nhưng chính nó lại bị phép biện chứng hiện đại phủ định”.",
            "options": [
                "Phép biện chứng duy tâm.",
                "Phép biện chứng cổ đại.",
                "Chủ nghĩa duy tâm.",
                "Chủ nghĩa duy vật."
            ],
            "answer": 1,
            "explanation": "Phép biện chứng cổ đại.",
            "keywords": "Q: Chọn cụm từ đúng điền vào chỗ trống: | A: Phép biện chứng cổ đại"
        },
        {
            "id": 350,
            "text": "Theo Mác - Lênin, Tự nhiên là môi trường tồn tại và phát triển của xã hội vì:",
            "options": [
                "Tự nhiên là nguồn gốc của sự xuất hiện xã hội.",
                "Tự nhiên cung cấp những điều kiện cần thiết cho sự tồn tại của con người.",
                "Xã hội là một bộ phận đặc thù của tự nhiên.",
                "Tự nhiên cung cấp những điều kiện cần thiết cho sự sống của con người và hoạt động sản xuất xã hội."
            ],
            "answer": 3,
            "explanation": "Tự nhiên cung cấp những điều kiện cần thiết cho sự sống của con người và hoạt động sản xuất xã hội.",
            "keywords": "Q: Lênin - Tự nhiên là môi trường tồn | A: Tự nhiên cung cấp những điều kiện cần · sống của con người và hoạt động sản"
        },
        {
            "id": 351,
            "text": "Hai mặt đối lập liên hệ gắn bó với nhau, làm tiền đề tồn tại cho nhau, Triết học gọi đó là:",
            "options": [
                "Sự khác nhau giữa các mặt đối lập.",
                "Sự phân biệt giữa các mặt đối lập.",
                "Sự đấu tranh giữa các mặt đối lập.",
                "Sự thống nhất giữa các mặt đối lập."
            ],
            "answer": 3,
            "explanation": "Sự thống nhất giữa các mặt đối lập.",
            "keywords": "Q: Hai mặt đối lập liên hệ gắn bó | A: Sự thống nhất giữa các mặt đối lập"
        },
        {
            "id": 352,
            "text": "Đặc trưng nào của tính dân tộc là quan trọng nhất?",
            "options": [
                "Chung một hình thái kinh tế xã hội.",
                "Chung sống trên một lãnh thổ.",
                "Chung một ngôn ngữ.",
                "Chung một nền văn hóa."
            ],
            "answer": 0,
            "explanation": "Chung một hình thái kinh tế xã hội.",
            "keywords": "Q: Đặc trưng nào của tính dân tộc là | A: Chung một hình thái kinh tế xã hội"
        },
        {
            "id": 353,
            "text": "Trong quá trình nhận thức và hoạt động thực tiễn, chúng ta cần:",
            "options": [
                "Phủ nhận, gạt bỏ cái ngẫu nhiên.",
                "Phủ nhận, gạt bỏ cái tất nhiên.",
                "Căn cứ vào cả cái tất nhiên và ngẫu nhiên.",
                "Cơ bản là phải căn cứ vào cái tất nhiên nhưng đồng thời phải tính tới cái ngẫu nhiên."
            ],
            "answer": 3,
            "explanation": "Cơ bản là phải căn cứ vào cái tất nhiên nhưng đồng thời phải tính tới cái ngẫu nhiên.",
            "keywords": "Q: Trong quá trình nhận thức và hoạt động | A: Cơ bản là phải căn cứ vào cái · nhưng đồng thời phải tính tới cái ngẫu"
        },
        {
            "id": 354,
            "text": "Hình thái kinh tế - xã hội đầu tiên của xã hội loài người là:",
            "options": [
                "Chiếm hữu nô lệ.",
                "Cộng sản nguyên thủy.",
                "Phong kiến.",
                "Chủ nghĩa tư bản."
            ],
            "answer": 1,
            "explanation": "Cộng sản nguyên thủy.",
            "keywords": "Q: Hình thái kinh tế - xã hội đầu | A: Cộng sản nguyên thủy"
        },
        {
            "id": 355,
            "text": "Theo triết học Mác - Lênin, bản chất của nhà nước là:",
            "options": [
                "Lực lượng điều hòa sự xung đột giai cấp.",
                "Lực lượng bảo vệ quyền lợi cho mọi giai cấp, tầng lớp xã hội.",
                "Bộ máy của giai cấp này dùng để trấn áp giai cấp khác.",
                "Bộ máy quản lý những hoạt động chung vì sự phát triển xã hội."
            ],
            "answer": 2,
            "explanation": "Bộ máy của giai cấp này dùng để trấn áp giai cấp khác.",
            "keywords": "Q: Lênin - bản chất của nhà nước là: | A: Bộ máy của giai cấp này dùng · để trấn áp giai cấp khác"
        },
        {
            "id": 356,
            "text": "Theo chủ nghĩa duy vật biện chứng luận điểm nào là sai?",
            "options": [
                "Khả năng và hiện thực đều tồn tại khách quan.",
                "Khả năng và hiện thực không tách rời nhau.",
                "Chỉ có hiện thực tồn tại khách quan, khả năng chỉ là cảm giác con người.",
                "Khả năng và hiện thực tác động qua lại lẫn nhau."
            ],
            "answer": 2,
            "explanation": "Chỉ có hiện thực tồn tại khách quan, khả năng chỉ là cảm giác con người.",
            "keywords": "Q: Theo chủ nghĩa duy vật biện chứng luận | A: Chỉ có hiện thực tồn tại khách quan, · khả năng chỉ là cảm giác con người"
        },
        {
            "id": 357,
            "text": "Vật chất và ý thức là hai nguyên thể đầu tiên cùng song song tồn tại\" là quan điểm của trường phái triết học nào?",
            "options": [
                "Duy vật biện chứng.",
                "Duy vật siêu hình.",
                "Duy tâm khách quan.",
                "Nhị nguyên."
            ],
            "answer": 3,
            "explanation": "Nhị nguyên.",
            "keywords": "Q: Vật chất và ý thức là hai nguyên | A: Nhị nguyên"
        },
        {
            "id": 358,
            "text": "Phép biện chứng duy vật gồm nguyên lý nào?",
            "options": [
                "Nguyên lý về mối liên hệ phổ biến.",
                "Nguyên lý về tính hệ thống cấu trúc.",
                "Nguyên lý về mối liên hệ phổ biến và nguyên lý về sự phát triển.",
                "Nguyên lý về sự vận động và sự phát triển."
            ],
            "answer": 2,
            "explanation": "Nguyên lý về mối liên hệ phổ biến và nguyên lý về sự phát triển.",
            "keywords": "Q: Phép biện chứng duy vật gồm nguyên lý | A: Nguyên lý về mối liên hệ phổ biến · và nguyên lý về sự phát triển"
        },
        {
            "id": 359,
            "text": "Quan hệ sản xuất tác động kìm hãm sự phát triển Lực lượng sản xuất khi:",
            "options": [
                "Quan hệ sản xuất phù hợp Lực lượng sản xuất.",
                "Quan hệ sản xuất lạc hậu hơn so với Lực lượng sản xuất.",
                "Quan hệ sản xuất tiến bộ hơn so với Lực lượng sản xuất.",
                "Quan hệ sản xuất lạc hậu hoặc tiến bộ hơn so với Lực lượng sản xuất."
            ],
            "answer": 1,
            "explanation": "Quan hệ sản xuất lạc hậu hơn so với Lực lượng sản xuất.",
            "keywords": "Q: Quan hệ sản xuất tác động kìm hãm | A: Quan hệ sản xuất lạc hậu hơn · so với Lực lượng sản xuất"
        },
        {
            "id": 360,
            "text": "Vật chất được Lênin định nghĩa với tư cách:",
            "options": [
                "Phạm trù triết học.",
                "Vật thể cảm tính.",
                "Thực tại khách quan.",
                "Thực thể khách quan."
            ],
            "answer": 0,
            "explanation": "Phạm trù triết học.",
            "keywords": "Q: Lênin - Vật chất được định nghĩa với | A: Phạm trù triết học"
        },
        {
            "id": 361,
            "text": "Cơ sở để phân chia các trào lưu triết học thành triết học nhất nguyên và triết học nhị nguyên là gì?",
            "options": [
                "Cách giải quyết vấn đề cơ bản của triết học.",
                "Cách giải quyết mặt thứ nhất của vấn đề cơ bản của triết học.",
                "Cách giải quyết mặt thứ hai của vấn đề cơ bản của triết học.",
                "Cách giải quyết vấn đề của triết học."
            ],
            "answer": 0,
            "explanation": "Cách giải quyết vấn đề cơ bản của triết học.",
            "keywords": "Q: Cơ sở để phân chia các trào lưu | A: Cách giải quyết vấn đề · cơ bản của triết học"
        }
    ];
    global.QUIZ_BANKS = global.QUIZ_BANKS || {};
    global.QUIZ_BANKS["thml"] = bank;
})(typeof window !== "undefined" ? window : globalThis);
