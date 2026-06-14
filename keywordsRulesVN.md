# KEYWORDS RULES (Vietnamese Question Banks) – Bản cô đọng

## Mục tiêu

Keywords dùng để tạo đường gợi nhớ:

> **Q → nhận ra câu hỏi → bật đúng kiến thức → A → nhớ lại đáp án gốc**

Keywords **không phải bản tóm tắt của AI**, mà giống phần **gạch chân trong giáo trình**.

**Format:**

```json
"keywords": "Q: ... | A: ..."
```

---

## Q (Question Cue)

Mục tiêu:

> Ngắn gọn, đủ ý chính, dễ phân biệt với các câu khác.

### Quy tắc

- Ưu tiên giữ nguyên **thuật ngữ giáo trình** và **cụm nổi tiếng**.
- Giữ **tên người** nếu là dấu hiệu nhận diện mạnh (Platon, Hegel, Mác...).
- Loại bỏ từ hỏi và phần dẫn nhập dài.
- Độ dài khuyến nghị: **2–7 từ**.
- Không quá chung chung.

### Tự kiểm tra

Nếu chỉ nhìn `Q:` sau vài tuần, người học có nhận ra đúng câu hỏi trong bank không?

Nếu không, bổ sung thêm dấu hiệu phân biệt.

Ví dụ:

```text
✓ Q: Hegel - khởi nguyên thế giới
✓ Q: Mác - thuốc phiện của nhân dân
✗ Q: Hegel
✗ Q: Mác
```

---

## A (Answer Cue)

Mục tiêu:

> Dùng các "mảnh gợi nhớ" để khôi phục lại đáp án gốc.

### Quy tắc

- Chỉ lấy từ **đáp án đúng/explanation**.
- **Không paraphrase.**
- Giữ nguyên **thuật ngữ cố định**.
- Không tách cụm Hán Việt hoặc khái niệm học thuật.

Ví dụ:

```text
✓ Chủ nghĩa duy tâm khách quan
✓ Ý niệm tuyệt đối
✗ khách quan
✗ niệm tuyệt
```

- Đáp án ngắn (1 từ/cụm): giữ nguyên.

```text
Tôn giáo
Biện chứng
Có
Không
```

- Đáp án dài:
    - Chia thành **1–4 retrieval chunks**.
    - Mỗi chunk là **đơn vị nghĩa hoàn chỉnh**.
    - Không tạo danh sách từ rời rạc.

### Retrieval Test

Nếu che đáp án đầy đủ và chỉ nhìn `A:`:

> Người học có thể nhớ lại đáp án gần nguyên văn không?

Nếu không, viết lại.

---

## Context-first

Xử lý từng câu riêng biệt:

1. Đọc toàn bộ câu hỏi.
2. Xác định kiến thức đang kiểm tra.
3. Xác định thuật ngữ trung tâm.
4. Đọc đáp án đúng.
5. Giữ nguyên thuật ngữ chuẩn.
6. Chỉ rút gọn khi không làm mất nghĩa hoặc giảm khả năng recall.

**Không áp dụng template hàng loạt.**

---

## Thứ tự ưu tiên

1. Thuật ngữ giáo trình chuẩn.
2. Tên người/nhân vật học thuật.
3. Cụm trích dẫn nổi tiếng.
4. Quan hệ/hành động cốt lõi.
5. Mệnh đề nguyên văn giúp recall.

---

## Nguyên tắc cuối cùng

> **Q tốt = ngắn nhất nhưng vẫn nhận ra đúng câu hỏi.**

> **A tốt = ngắn nhất nhưng vẫn nhớ lại được đáp án gốc.**

Khi phải lựa chọn giữa:

- ngắn hơn,
- hay đúng giáo trình và dễ recall,

**luôn ưu tiên phương án giúp recall chính xác.**
