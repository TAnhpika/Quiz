# Quiz — Tài liệu Phân tích Nghiệp vụ

> Ứng dụng ôn tập trắc nghiệm đa môn — **Đường Lên Đỉnh**  
> Phiên bản 1.0 · Single-page App

---

# 1. TỔNG QUAN HỆ THỐNG

## 1.1 Mục tiêu & Phạm vi

Quiz là ứng dụng web ôn tập trắc nghiệm dành cho sinh viên, hỗ trợ nhiều môn học trong một giao diện thống nhất. Người dùng có thể học theo chặng, thi thử, đánh dấu câu khó và ôn lại theo lịch spaced repetition — toàn bộ tiến độ lưu trên trình duyệt và đồng bộ đám mây (Firebase) khi cấu hình.

| Nhóm tính năng              | Mô tả ngắn                                      |
| --------------------------- | ------------------------------------------------- |
| Chọn môn & ngân hàng câu hỏi | TTHCM, Triết học M-L, Software Testing PT1…      |
| Học theo nhóm (Campaign)    | Chia bank thành chặng 20 câu, theo dõi % lần làm |
| Thi thử (Exam)              | 50 câu ngẫu nhiên, chấm thang 10, có đếm thời gian |
| Ôn lại (Review)             | Luyện câu đã bookmark; đúng → chuyển sang Đã Ôn   |
| Ôn hôm nay (Spaced)         | Anki-lite: Again / Hard / Good / Easy             |
| Sổ tay (Handbook)           | Tra cứu, lọc, bookmark, xem giải mã               |
| Tiến độ & đám mây           | localStorage + Firebase Anonymous Auth (tùy chọn) |

## 1.2 Kiến trúc Vai trò (Actor)

Hệ thống không có đăng nhập tài khoản truyền thống. Một người dùng = một trình duyệt (+ một UID Firebase ẩn danh nếu bật sync).

| Actor        | Mô tả                         | Yêu cầu              |
| ------------ | ----------------------------- | -------------------- |
| Người học    | Sinh viên ôn tập trên web/app | Trình duyệt hiện đại |
| (Hệ thống)   | Firebase Anonymous            | Tùy chọn — đồng bộ   |

> Không có Admin panel, Moderator hay phân quyền Premium trong phiên bản hiện tại.

---

# 2. PHÂN TÍCH ACTOR CHI TIẾT

## 2.1 Người học

### Mục tiêu

- Ôn tập hiệu quả trước kỳ thi môn lý thuyết / trắc nghiệm.
- Theo dõi câu chưa thuộc, tiến độ từng chặng và lịch ôn lặp lại.
- Tra cứu giải thích nhanh qua Sổ tay.

### Quyền truy cập (tất cả tính năng)

| Tính năng                    | Được phép | Ghi chú                              |
| ---------------------------- | --------- | ------------------------------------ |
| Chọn môn học                 | ✅        | Mỗi môn có bank & tiến độ riêng      |
| Học theo nhóm                | ✅        | 20 câu/chặng                         |
| Thi thử                       | ✅        | 50 câu, 30 phút, điểm /10            |
| Ôn lại (bookmark)            | ✅        | Cần có câu đã đánh dấu               |
| Ôn hôm nay (SR)              | ✅        | Cần câu đến hạn trong reviewData     |
| Sổ tay                        | ✅        | Lọc Tất cả / Chưa thuộc / Đã Ôn / Chặng |
| Bookmark trong game          | ✅        | Sai (một số mode) tự bookmark        |
| Sao lưu / phục hồi bookmark   | ✅        | Export/import JSON                   |
| Đồng bộ Firebase             | ✅        | Khi cấu hình `firebaseConfig` hợp lệ |

---

# 3. PHÂN TÍCH FEATURE CHI TIẾT

## 3.1 Phân hệ Chọn môn

| Use Case    | Luồng chính                                                                 | Dữ liệu              |
| ----------- | --------------------------------------------------------------------------- | -------------------- |
| Mở app      | `showSubjectSelection()` → hiển thị thẻ môn + số câu                        | `SUBJECTS`, `QUESTION_BANKS` |
| Chọn môn    | `selectSubject(id)` → load state → vào Home                                 | `quiz_current_subject` |
| Đổi môn     | Nút **Đổi môn** → lưu state môn hiện tại → quay màn chọn môn                | Per-subject localStorage |

### Môn học hiện có

| subjectId | Tên môn                  | Số câu (ước tính) |
| --------- | ------------------------ | ----------------- |
| `tthcm`   | Tư tưởng Hồ Chí Minh     | 300               |
| `thml`    | Triết học Mác - Lênin    | 361               |
| `swt_pt1` | Software Testing PT1     | 166               |

---

## 3.2 Phân hệ Trang chủ (Home)

| Nút / Khu vực      | Chế độ game   | Mô tả                                      |
| ------------------ | ------------- | ------------------------------------------ |
| Học Theo Nhóm      | `campaign`    | Modal chọn chặng, hiển thị % lần làm gần nhất |
| Thi Thử            | `exam`        | 50 câu random, timer 30 phút               |
| Ôn Lại             | `review`      | Câu trong `markedQuestions`                |
| Hub (góc phải)     | —             | Modal Tiến độ & Spaced Repetition          |

---

## 3.3 Phân hệ Học theo nhóm (Campaign)

| Feature           | Quy tắc nghiệp vụ                                                                 |
| ----------------- | --------------------------------------------------------------------------------- |
| Chia chặng        | `GROUP_SIZE = 20` câu/chặng                                                       |
| Làm bài           | Trả lời từng câu; đúng/sai hiện giải mã                                          |
| % chặng           | **Kết quả lần làm gần nhất** — `(correct / total) × 100`, lưu `groupLastResult` |
| Timer             | `số_câu × 45` giây                                                                |
| Trợ giúp          | 50/50, đóng băng thời gian 10s, gợi ý (mỗi loại 1 lần/phiên)                    |
| Kết quả           | Hiển thị `85% (17/20)`; nút **Làm lại** / **Về trang chủ**                        |

> % chặng **không** tích lũy vĩnh viễn từ lần làm đúng trước. Làm lại sai → % giảm theo lần đó.

---

## 3.4 Phân hệ Thi thử (Exam)

| Feature      | Giá trị / quy tắc                                      |
| ------------ | ------------------------------------------------------ |
| Số câu       | 50 câu ngẫu nhiên từ toàn bank                         |
| Thời gian    | 1800 giây (30 phút)                                    |
| Chấm điểm    | Thang **10**: `(số_câu_đúng / 50) × 10`                |
| Hiển thị     | Realtime trên header; màn kết quả dạng `8.0/10`        |
| Trợ giúp     | Có (50/50, freeze, hint)                                 |
| Sai          | Tự bookmark nếu chưa có                                |

---

## 3.5 Phân hệ Ôn lại & Đã ôn

Hai danh sách tách biệt:

| Danh sách    | Nguồn dữ liệu        | Cách vào danh sách                          |
| ------------ | -------------------- | ------------------------------------------- |
| 📌 Chưa thuộc | `markedQuestions[]`  | Bookmark thủ công; auto-mark khi trả lời sai (exam/campaign) |
| ✅ Đã Ôn     | `reviewedQuestions[]`| Trả lời **đúng** trong chế độ **Ôn Lại**, rồi Tiếp/Hoàn thành |

| Use Case              | Luồng                                                                 |
| --------------------- | --------------------------------------------------------------------- |
| Bắt đầu Ôn Lại        | Home → Ôn Lại (cần ≥1 bookmark)                                       |
| Trả lời đúng          | `reviewLastCorrect = true` → Tiếp → `markQuestionAsReviewed()`        |
| Trả lời sai           | Câu vẫn trong danh sách Ôn Lại                                        |
| Xem Đã Ôn             | Hub → Đã Ôn → Sổ tay (filter `reviewed`)                              |
| Bỏ Đã Ôn              | Bookmark lại câu → xóa khỏi `reviewedQuestions`                       |

---

## 3.6 Phân hệ Spaced Repetition (Ôn Hôm Nay)

| Feature        | Mô tả                                                           |
| -------------- | --------------------------------------------------------------- |
| Thuật toán     | Anki-lite (Again 1d, Hard 3d, Good 7d, Easy 14d)                |
| Câu đến hạn    | `dueDate <= hôm nay` trong `reviewData`                         |
| Chấm mức nhớ   | Sau khi xem đáp án → 4 nút Again / Hard / Good / Easy           |
| Streak         | `reviewMeta.streak` — tăng khi ôn liên tiếp qua ngày             |
| Dashboard      | Tổng câu, Đã học, Mastery %, Đến hạn, Streak, Accuracy          |

> **Đã học** (dashboard) ≠ **Đã Ôn** (reviewedQuestions). Đã học đếm từ `reviewData` (SR); Đã Ôn từ chế độ Ôn Lại.

---

## 3.7 Phân hệ Sổ tay (Handbook)

| Filter dropdown        | Logic lọc                                      |
| ---------------------- | ---------------------------------------------- |
| Tất cả câu hỏi         | Toàn bộ `questionBank`                         |
| 📌 Câu Chưa Thuộc      | `markedQuestions.includes(q.id)`               |
| ✅ Đã Ôn               | `reviewedQuestions.includes(q.id)`             |
| Chặng N                | Slice theo `GROUP_SIZE`                        |
| Tìm kiếm               | Lọc theo từ khóa trong `q.text`                |

Mỗi thẻ hiển thị: badge trạng thái, bookmark, đề bài, 4 đáp án (đáp án đúng in đậm xanh), giải mã.

---

## 3.8 Phân hệ Lưu trữ & Đồng bộ

### localStorage (theo môn)

| Key suffix           | Nội dung                                      |
| -------------------- | --------------------------------------------- |
| `marked`             | `number[]` — id câu bookmark                  |
| `reviewed`           | `number[]` — id câu Đã Ôn                     |
| `group_mastery`      | `{ [id]: true }` — legacy, không dùng cho %   |
| `group_last_result`  | `{ "0": { correct, total, percent } }`        |
| `review_data`        | `{ [id]: ReviewEntry }` — SR scheduling       |
| `review_meta`        | `{ streak, lastReviewDay }`                   |

Key đầy đủ: `quiz_{subjectId}_{suffix}` · Môn đang chọn: `quiz_current_subject`

### Firebase (tùy chọn)

| Collection / Doc              | Dữ liệu                              |
| ----------------------------- | ------------------------------------ |
| `users/{uid}`                 | `subjects`, `currentSubject`, …      |
| `users/{uid}/reviewData/{id}` | Từng entry SR per câu                |

Auth: **Anonymous** — không cần email/mật khẩu.

### Sao lưu thủ công

- **Export:** tải JSON danh sách `markedQuestions`
- **Import:** khôi phục bookmark từ file JSON

---

## 3.9 Phân hệ Gameplay & UX

| Feature              | Mô tả                                              |
| -------------------- | -------------------------------------------------- |
| Phím 1–4 / Numpad    | Chọn đáp án A–D                                    |
| Space / `-`          | Tiếp câu / Hoàn thành                              |
| Bookmark in-game     | Nút bookmark trên màn game                         |
| Toast                | Thông báo ngắn (success / error)                   |
| Responsive           | Layout dọc mobile, ngang PC; font/button lớn hơn trên mobile |
| Làm lại              | Từ màn kết quả — chạy lại cùng mode & chặng        |

---

# 4. LUỒNG NGHIỆP VỤ CHÍNH

## 4.1 Luồng học chặng lần đầu

```
Chọn môn → Home → Học Theo Nhóm → Chọn Chặng 1
  → Trả lời 20 câu → Hoàn thành
  → Lưu groupLastResult (vd: 85% 17/20)
  → Modal chặng cập nhật % ngay
```

## 4.2 Luồng Ôn Lại → Đã Ôn

```
Bookmark câu khó (game / sổ tay)
  → Home → Ôn Lại → Trả lời đúng → Tiếp
  → markQuestionAsReviewed: bỏ bookmark, thêm reviewedQuestions
  → Hub / Sổ tay filter "Đã Ôn" hiển thị câu đó
```

## 4.3 Luồng Spaced Repetition

```
Bookmark câu → migrateBookmarksToReviewData (dueDate = hôm nay)
  → Hub → Ôn Hôm Nay → Làm câu đến hạn
  → Xem đáp án → Chọn Again/Hard/Good/Easy
  → Cập nhật dueDate, streak, sync cloud
```

---

# 5. ĐÁNH GIÁ RỦI RO & HẠN CHẾ

## 5.1 Rủi ro Nghiệp vụ

| Rủi ro                              | Mức độ | Ghi chú                                              |
| ----------------------------------- | ------ | ---------------------------------------------------- |
| Mất tiến độ khi xóa cache trình duyệt | Cao    | Cần Firebase hoặc export JSON thường xuyên           |
| Nhầm "Đã học" vs "Đã Ôn"            | Trung bình | UI dashboard vs Sổ tay dùng nguồn khác nhau       |
| Bank câu hỏi hardcode trong HTML    | Trung bình | File ~10k dòng; khó bảo trì khi thêm môn mới      |

## 5.2 Rủi ro Kỹ thuật

| Rủi ro                         | Mô tả / đề xuất                                      |
| ------------------------------ | ---------------------------------------------------- |
| Single file monolith           | Tách bank JSON riêng hoặc build step khi scale        |
| Firebase config placeholder    | `YOUR_API_KEY` — sync không hoạt động cho đến khi cấu hình |
| Không có backend API           | Toàn bộ logic client-side; không chống gian lận điểm |
| Merge cloud conflict           | `mergeEntryPair` — ưu tiên bản có `lastReview` mới hơn |

---

# 6. ROADMAP GỢI Ý

| Mức độ | Hạng mục                         | Mô tả                                      |
| ------ | -------------------------------- | ------------------------------------------ |
| 🔴 P0  | Tách ngân hàng câu hỏi ra JSON   | Giảm kích thước `index.html`, dễ cập nhật  |
| 🔴 P0  | Cấu hình Firebase production     | Bật sync thật trên Vercel                  |
| 🟡 P1  | Thêm môn / import bank từ file   | Admin-less: upload JSON bank               |
| 🟡 P1  | Thống kê lịch sử thi thử         | Lưu điểm các lần exam                      |
| 🟢 P2  | Tài khoản đăng nhập              | Thay Anonymous Auth nếu cần đa thiết bị    |
| 🟢 P2  | PWA offline                      | Service worker cache bank + app shell      |

---

# 7. PHỤ LỤC — BẢNG TỔNG HỢP FEATURE

| Feature                    | Campaign | Exam | Ôn Lại | Ôn Hôm Nay |
| -------------------------- | -------- | ---- | ------ | ---------- |
| Timer                      | ✅       | ✅   | ✅     | ❌         |
| Chấm điểm /10              | ❌       | ✅   | ❌     | ❌         |
| % chặng                    | ✅       | ❌   | ❌     | ❌         |
| Bookmark khi sai           | ✅*      | ✅   | ❌     | ❌         |
| Hiện giải mã sau trả lời   | ✅       | ❌** | ✅     | ✅         |
| Trợ giúp 50/50/freeze/hint | ✅       | ✅   | ✅     | ❌         |
| Chuyển sang Đã Ôn          | ❌       | ❌   | ✅     | ❌         |
| Cập nhật lịch SR           | ❌       | ❌   | ✅***  | ✅         |

\* Trừ mode review và spaced  
\*\* Exam: không hiện panel giải mã khi đúng (chỉ khi sai)  
\*\*\* Ôn Lại gọi `updateReviewSchedule(..., "good")` khi mark reviewed

---

_— Hết tài liệu — Phiên bản 1.0_
