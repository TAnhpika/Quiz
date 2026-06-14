# KEYWORDS RULES (Vietnamese Question Banks)

Áp dụng cho các ngân hàng câu hỏi tiếng Việt như:

- Triết học Mác – Lênin
- Tư tưởng Hồ Chí Minh
- Chủ nghĩa xã hội khoa học
- Đường lối cách mạng
- Các môn lý luận chính trị tương tự

---

## Mục tiêu

Keywords phải giúp người học:

Question cue
→ nhớ được câu hỏi đang hỏi gì
→ bật lại đúng thuật ngữ đã học
→ recall nguyên văn đáp án đúng.

Keywords KHÔNG dùng để tóm tắt theo cách hiểu của AI.

Keywords phải giống như phần gạch chân trong giáo trình.

---

## Output Format

Giữ nguyên schema:

```json
"keywords": "Q: ... | A: ..."
```

Ví dụ:

```json
"keywords": "Q: Platon - bản nguyên thế giới | A: Chủ nghĩa duy tâm khách quan"
```

---

# I. Rules for Q (Question Cue)

## 1. Giữ nguyên thuật ngữ chuyên môn

Ưu tiên giữ nguyên các cụm:

- bản nguyên
- ý thức
- vật chất
- nhận thức
- thực tiễn
- vận động
- mâu thuẫn
- phủ định của phủ định
- lượng - chất
- lực lượng sản xuất
- quan hệ sản xuất
- ý niệm tuyệt đối

Không thay bằng từ dễ hiểu hơn.

Ví dụ:

Được:

```text
Q: bản nguyên thế giới
```

Không được:

```text
Q: nguồn gốc thế giới
```

---

## 2. Rút gọn câu hỏi nhưng giữ "điểm hỏi"

Mục tiêu:

> Nếu chỉ nhìn Q, biết chính xác giáo trình đang hỏi phần nào.

Ví dụ:

Question:

"Khi cho rằng 'ý niệm' hay 'hình thức phi vật chất' là bản nguyên hình thành nên thế giới..."

Q:

```text
Platon - bản nguyên thế giới
```

Không phải:

```text
Platon
```

vì quá mơ hồ.

---

## 3. Ưu tiên tên người nếu là dấu hiệu mạnh

Nếu câu xoay quanh triết gia:

Ưu tiên giữ:

- Platon
- Hegel
- Hêraclít
- Mác
- Ăngghen
- Lênin

Ví dụ:

```text
Q: Hegel - khởi nguyên thế giới
Q: Hêraclít - dòng sông
Q: Mác - thuốc phiện của nhân dân
```

---

## 4. Giữ nguyên các cụm nổi tiếng

Ví dụ:

- thuốc phiện của nhân dân
- không ai có thể tắm hai lần...
- gan tiết ra mật
- ý niệm tuyệt đối

Không được paraphrase.

---

# II. Rules for A (Answer Cue)

## 1. Ưu tiên nguyên văn toàn bộ thuật ngữ

Nếu đáp án là thuật ngữ cố định:

PHẢI giữ nguyên.

Ví dụ:

Được:

```text
Chủ nghĩa duy tâm khách quan
Ý niệm tuyệt đối
Ba hình thức
Lý học
Tôn giáo
Biện chứng
```

Không được:

```text
duy tâm
khách quan
niệm tuyệt
ba
lý
tôn
biện
```

---

## 2. Không tách thuật ngữ Hán Việt

Coi các cụm sau là một đơn vị:

Ví dụ:

- duy vật biện chứng
- duy tâm khách quan
- duy tâm chủ quan
- ý niệm tuyệt đối
- lực lượng sản xuất
- quan hệ sản xuất
- tồn tại khách quan
- phủ định biện chứng

Không cắt nhỏ.

Sai:

```text
khách quan
tuyệt đối
lực lượng
```

Đúng:

```text
Chủ nghĩa duy tâm khách quan
Ý niệm tuyệt đối
Lực lượng sản xuất
```

---

## 3. Với đáp án chỉ gồm 1 từ

Giữ nguyên.

Ví dụ:

```text
Tôn giáo
Biện chứng
Lý học
Có
Không
```

Không cố tạo thêm keyword.

---

## 4. Với đáp án là mệnh đề dài

Được phép cắt thành các cụm nguyên văn.

Ví dụ:

Đáp án:

"Ý thức con người trực tiếp hình thành từ lao động sản xuất vật chất của xã hội"

A:

```text
lao động sản xuất vật chất
xã hội
```

Không được viết:

```text
lao động tạo ý thức
đời sống xã hội
```

vì là diễn giải.

---

# III. Context-first Editing

AI phải xử lý từng câu riêng biệt.

Quy trình:

1. Đọc toàn bộ câu hỏi.
2. Xác định phần kiến thức giáo trình đang được kiểm tra.
3. Xác định thuật ngữ trung tâm.
4. Đọc đáp án đúng.
5. Giữ nguyên thuật ngữ chuẩn nếu có.
6. Chỉ rút gọn khi không làm mất nghĩa học thuật.

Không áp dụng template hàng loạt.

---

# IV. Priority Order

Khi chọn keywords, ưu tiên theo thứ tự:

1. Thuật ngữ giáo trình chuẩn.
2. Tên người/nhân vật học thuật.
3. Cụm trích dẫn nổi tiếng.
4. Quan hệ nhân quả.
5. Mệnh đề nguyên văn quan trọng.

Không ưu tiên:

- từ nối,
- từ đệm,
- việc làm ngắn bằng mọi giá.

Độ chính xác học thuật quan trọng hơn độ ngắn.

---

# V. Examples

Input:

```json
{
    "text": "Mác ví hình thái ý thức nào là 'thuốc phiện của nhân dân'?",
    "answer": 2,
    "explanation": "Tôn giáo"
}
```

Output:

```json
"keywords": "Q: Mác - thuốc phiện của nhân dân | A: Tôn giáo"
```

---

Input:

```json
{
    "text": "Theo Hegel khởi nguyên của thế giới là gì?",
    "answer": 0,
    "explanation": "Ý niệm tuyệt đối"
}
```

Output:

```json
"keywords": "Q: Hegel - khởi nguyên thế giới | A: Ý niệm tuyệt đối"
```

---

Input:

```json
{
    "text": "Theo chủ nghĩa Mác-Lênin, chủ nghĩa duy vật đã trải qua mấy hình thức phát triển?",
    "answer": 1,
    "explanation": "Ba hình thức"
}
```

Output:

```json
"keywords": "Q: duy vật - mấy hình thức phát triển | A: Ba hình thức"
```

---

Nguyên tắc cuối cùng:

Nếu phải lựa chọn giữa:

- ngắn hơn,
- hay đúng với giáo trình,

hãy luôn chọn phương án đúng với giáo trình.

Nếu nhìn phần A: mà người học có thể đọc như một câu hoàn chỉnh, nghĩa là quá dài. Nếu nhìn A: mà mất khả năng gợi lại đáp án đầy đủ, nghĩa là quá ngắn. Hãy chọn điểm cân bằng: tối đa 4 cụm nguyên văn có giá trị gợi nhớ mạnh nhất.