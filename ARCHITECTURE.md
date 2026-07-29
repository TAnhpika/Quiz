# Quizzy × Memozy — Frontend Architecture

> **Quizzy**: ôn tập trắc nghiệm **Đường Lên Đỉnh**  
> **Memozy**: học từ vựng IELTS (flashcard + spaced repetition + TTS)  
> Stack: Vanilla JS · HTML · Tailwind CDN · Font Awesome 6.7 · Firebase (optional)

---

## 1. Tech Stack

| Vai trò       | Công nghệ                                              |
| ------------- | ------------------------------------------------------ |
| UI            | HTML5 + Tailwind CSS (CDN)                             |
| Logic         | Vanilla JS — `index.html` (Quizzy) + `memozy-app.js`   |
| Font          | Google Fonts — Nunito                                  |
| Icons         | Font Awesome 6.7.2 (CDN)                               |
| State local   | `localStorage` (per subject / per Memozy account)      |
| Audio         | Web Speech API (`speechSynthesis`, en-GB)              |
| Cloud sync    | Firebase Auth (Anonymous) + Firestore (tùy cấu hình)   |
| Deploy        | Vercel / static hosting                                |
| Build         | Không có — zero build step                             |

---

## 2. Cấu trúc dự án

```
Quizzy/
├── index.html              # Hub + Quizzy UI/logic + Memozy screens (HTML)
├── memozy-app.js           # Memozy navigation, study, SRS, TTS
├── banks/                  # Ngân hàng Quizzy — load on demand
│   ├── swr.js
│   └── swr_extra.js
├── banks/memozy/           # Ngân hàng từ vựng IELTS
│   ├── catalog.js          # Cây Skill → Group → Leaf
│   ├── reading.js
│   ├── listening.js
│   ├── writing.js
│   └── speaking.js
├── README.md
├── ARCHITECTURE.md
└── PhanTichNghiepVu.md
```

### Cấu trúc logic bên trong `index.html`

```
index.html
├── <body> #app
│   ├── screen-app-hub           # Chọn Quizzy / Memozy
│   ├── screen-memozy-account    # Tuấn Anh / Linh / Both
│   ├── screen-memozy-skills     # 4 skills + Ôn hôm nay
│   ├── screen-memozy-browse     # Part / dạng (cây catalog)
│   ├── screen-memozy-study      # Flashcard lật thẻ + grade + audio
│   ├── screen-memozy-result
│   ├── screen-subject           # Chọn môn → chọn đề (Quizzy)
│   ├── screen-home
│   ├── modal-group / modal-review-hub
│   ├── screen-game / screen-result / screen-handbook
│
└── <script> … Quizzy modules …
<script src="memozy-app.js">     # window.Memozy API
```

---

## 2b. Memozy — luồng & dữ liệu

```mermaid
flowchart TD
  Hub[screen-app-hub] -->|Quizzy| Subject[screen-subject]
  Hub -->|Memozy| Account[screen-memozy-account]
  Account --> Skills[screen-memozy-skills]
  Skills --> Browse[screen-memozy-browse]
  Browse --> Study[screen-memozy-study]
  Skills -->|On Hom Nay| Study
  Study --> Result[screen-memozy-result]
```

### Vocab card

```js
{
  id: "sp-ht-01",
  term, meaning, example, paraphrase, phonetic,
  skill: "speaking",
  path: ["part1", "hometown"],  // khớp catalog leaf
  owner: "tuananh" | "linh" | "both",
  tags: ["idiom"]
}
```

Filter: `owner === account || owner === "both" || account === "both"`.

### localStorage (Memozy)

| Key | Mô tả |
| --- | ----- |
| `memozy_account` | `tuananh` / `linh` / `both` |
| `memozy_{account}_review_data` | SRS entries theo card `id` (string) |
| `memozy_{account}_review_meta` | `{ streak, lastReviewDay }` |

SRS grades: Again 1d / Hard 3d / Good 7d / Easy 14d (cùng thuật toán Anki-lite như Quizzy).

### API `window.Memozy`

`showAppHub`, `enterQuizzy`, `enterMemozy`, `selectAccount`, `openSkill`, `startLeaf`, `startDueReview`, `flipCard`, `handleGrade`, `speakCurrent`, …

---

## 3. Mô hình dữ liệu câu hỏi (Quizzy)

```js
{
  id: number,
  text: string,
  options: string[4],
  answer: 0 | 1 | 2 | 3,   // index đáp án đúng
  explanation: string,     // nguồn gốc / fallback
  keywords: string,        // mẹo nhớ, phân biệt distractor (hiển thị trên UI)
}
```

### Ngân hàng theo môn (`banks/{subjectId}.js`)

| File           | Môn / đề   | Số câu |
| -------------- | ---------- | ------ |
| `swr.js`       | SWR        | 203    |
| `swr_extra.js` | SWR Extra  | 97     |

Thêm môn mới: khai báo trong `SUBJECTS` + tạo `banks/{id}.js` + `questionCount` trong SUBJECTS.

Load: `bankLoader.load(subjectId)` khi user chọn môn — script inject `banks/{id}.js`, đăng ký `window.QUIZ_BANKS[id]`.

---

## 4. Luồng dữ liệu (Data Flow)

### 4.1 State trong memory (global)

```js
currentSubjectId      // môn đang chọn
questionBank          // ref → bankLoader cache (môn đang chọn)
markedQuestions       // id[] bookmark
reviewedQuestions     // id[] đã ôn (mode review)
groupLastResult       // { "0": { correct, total, percent } }
campaignRun           // { groupIndex, correctIds: Set } — phiên campaign
currentMode           // "campaign" | "exam" | "review" | "spaced"
currentQuestions      // subset câu đang chơi
reviewData            // { [questionId]: ReviewEntry }
reviewMeta            // { streak, lastReviewDay }
```

### 4.2 Persist local

```
User action (bookmark, finish chặng, SR grade, …)
  → saveMarked() / saveReviewed() / saveGroupLastResult() / reviewStorage.saveLocal()
    → localStorage.setItem(`quiz_${subjectId}_${suffix}`, JSON)
      → (optional) window.saveUserData(getAppDataForCloud())
        → Firestore users/{uid}
```

### 4.3 Khởi động app

```
window.onload
  → Memozy.showAppHub()          # chọn Quizzy / Memozy
  → (Quizzy) showSubjectSelection()
  → (Memozy) enterMemozy → account → skills → browse → study
```

Chọn môn (`COURSES`) → chọn đề (`SUBJECTS`) → `selectSubject(id)` → load state → `screen-home`.

---

## 5. Màn hình & Navigation

Không dùng router — điều hướng bằng `hideAllScreens()` / `Memozy.hideMemozyScreens()` + toggle class `hidden` trên từng `#screen-*`.

| Screen / Modal       | ID                  | Mở từ                          |
| -------------------- | ------------------- | ------------------------------ |
| App Hub              | `screen-app-hub`    | `onload`, nút Hub              |
| Memozy Account       | `screen-memozy-account` | Hub → Memozy              |
| Memozy Skills        | `screen-memozy-skills`  | Sau chọn account            |
| Memozy Browse        | `screen-memozy-browse`  | Chọn skill                  |
| Memozy Study         | `screen-memozy-study`   | Leaf / Ôn hôm nay           |
| Chọn môn / đề        | `screen-subject`    | Hub → Quizzy (môn rồi bank)    |
| Trang chủ            | `screen-home`       | Sau chọn môn, sau result/home  |
| Chơi game            | `screen-game`       | `startGame(mode)`              |
| Kết quả              | `screen-result`     | `finishGame()`                 |
| Sổ tay               | `screen-handbook`   | Hub, openHandbook              |
| Chọn chặng           | `modal-group`       | Học Theo Nhóm                  |
| Hub tiến độ          | `modal-review-hub`  | Nút chart góc phải Home        |

### Body class flags

| Class            | Ý nghĩa                          |
| ---------------- | -------------------------------- |
| `subject-active` | Màn chọn môn                     |
| `home-active`    | Màn home                         |
| `game-active`    | Đang chơi                        |

---

## 6. Chế độ chơi (Game Modes)

```js
startGame(mode, groupIndex = 0)
```

| mode       | UI title        | Câu hỏi                          | Timer              | Đặc biệt                    |
| ---------- | --------------- | -------------------------------- | ------------------ | --------------------------- |
| `campaign` | Chặng N         | slice 20 câu theo `groupIndex`   | n × 45s            | `campaignRun.correctIds`    |
| `exam`     | Thi Thử         | 50 random                        | 1800s              | Score /10                   |
| `review`   | Ôn Lại          | filter `markedQuestions`         | n × 45s            | Đúng → Đã Ôn                |
| `spaced`   | 🔥 Ôn Hôm Nay   | filter `getDueQuestions()`       | ❌                 | Grade bar Again/Hard/Good/Easy |

### Vòng đời một câu (game)

```
loadQuestion()
  → user selectAnswer(index)
    → disable buttons, highlight correct/wrong
    → (campaign) update campaignRun Set
    → (exam) update score
    → showAnswerPanel (trừ exam đúng)
  → nextQuestion() / finishGame()
```

Phím tắt: `handleGameKeydown` — `1-4` chọn đáp án; `Space`/`-` tiếp/hoàn thành.

---

## 7. Module chi tiết

### 7.1 `subjectManager`

| Method                    | Vai trò                                      |
| ------------------------- | -------------------------------------------- |
| `storageKey(sid, suffix)` | `quiz_{sid}_{suffix}`                        |
| `selectSubject(id)`       | Switch môn, load state, render UI            |
| `loadSubjectState`        | Parse localStorage → globals                 |
| `persistCurrentSubjectState` | Ghi marked/reviewed/group/…             |
| `getSubjectPayload`       | Snapshot cho Firebase                        |
| `applySubjectPayload`     | Merge từ cloud                               |
| `renderSubjectCards`      | UI chọn môn                                  |
| `migrateLegacyData`       | Key localStorage cũ → format mới             |

### 7.2 `reviewStorage` + `reviewEngine`

**ReviewEntry:**

```js
{
  questionId, repetition, interval, easeFactor,
  dueDate,      // "YYYY-MM-DD"
  lastReview,   // ISO datetime
  totalReview, correctCount
}
```

**Grades:**

| Grade  | interval | repetition |
| ------ | -------- | ---------- |
| again  | 1 ngày   | reset 0    |
| hard   | 3 ngày   | +1         |
| good   | 7 ngày   | +1         |
| easy   | 14 ngày  | +1         |

`getDueQuestions()` → ids có `dueDate <= today`.

### 7.3 Tiến độ chặng (Campaign %)

```js
getGroupCompletionPercent(i) → groupLastResult[i]?.percent ?? 0
```

Lưu khi `finishGame()` + `currentMode === "campaign"`:

```js
groupLastResult[groupIndex] = { correct, total, percent }
```

---

## 8. Firebase Integration

Chỉ khởi tạo khi `firebaseConfig.apiKey !== "YOUR_API_KEY"`.

```
firebase.initializeApp(config)
  → signInAnonymously()
    → load users/{uid} + reviewData subcollection
      → applyCloudData / applyCloudReviewData
```

### API surface (window)

| Function                 | Mô tả                           |
| ------------------------ | ------------------------------- |
| `getAppDataForCloud()`   | Export toàn bộ subjects state   |
| `applyCloudData(data)`   | Import user doc                 |
| `applyCloudReviewData`   | Merge SR entries                |
| `saveUserData(data)`     | Ghi `users/{uid}`               |
| `saveReviewDataDoc`      | Ghi 1 entry SR                  |
| `saveReviewDataBatch`    | Ghi batch SR                    |
| `loadReviewDataCollection` | Đọc subcollection             |

---

## 9. CSS Convention

- **Tailwind utility classes** trên HTML cho layout nhanh
- **Custom `<style>` block** cho:
  - Game screen (fixed answer panel height, mobile typography)
  - Home responsive (vertical mobile / horizontal desktop)
  - Modal, result, handbook breakpoints
- **Không CSS Modules** — class Tailwind + vài id selector (`#screen-game`, …)
- Font: `Nunito` — title dùng `bg-clip-text` gradient; cần `line-height: 1.4` + padding cho dấu tiếng Việt

---

## 10. Icon Convention (Font Awesome 6)

CDN: `cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css`

```html
<i class="fa-solid fa-graduation-cap text-2xl"></i>
```

Icon môn khai báo trong `SUBJECTS[].icon` (vd: `fa-vial-circle-check` — cần FA ≥ 6.1).

---

## 11. localStorage Key Reference

| Key                         | Scope   | Type        |
| --------------------------- | ------- | ----------- |
| `quiz_current_subject`      | Global  | string      |
| `quiz_{sid}_marked`         | Subject | `number[]`  |
| `quiz_{sid}_reviewed`       | Subject | `number[]`  |
| `quiz_{sid}_group_mastery`  | Subject | `object`    |
| `quiz_{sid}_group_last_result` | Subject | `object` |
| `quiz_{sid}_review_data`    | Subject | `object`    |
| `quiz_{sid}_review_meta`    | Subject | `{streak,lastReviewDay}` |

---

## 12. Sơ đồ luồng tổng quan

```mermaid
flowchart TD
    A[onload] --> Hub[screen-app-hub]
    Hub -->|Quizzy| B[screen-subject]
    Hub -->|Memozy| M1[memozy-account]
    M1 --> M2[memozy-skills]
    M2 --> M3[memozy-browse]
    M3 --> M4[memozy-study]
    M2 -->|On Hom Nay| M4
    B -->|chọn môn rồi đề| B2[renderBankCards]
    B2 -->|selectSubject| C[screen-home]
    C -->|Học Theo Nhóm| D[modal-group]
    D -->|startGame campaign| E[screen-game]
    C -->|Thi Thử| E
    C -->|Ôn Lại| E
    C -->|Hub → Ôn Hôm Nay| E
    E -->|finishGame| F[screen-result]
    F -->|retryGame| E
    F -->|showHome| C
    C -->|Hub → Sổ tay| G[screen-handbook]
    C -->|Đổi môn| B
    B -->|Hub| Hub
```

---

## 13. Hạn chế kiến trúc & hướng mở rộng

| Hiện trạng              | Hướng cải thiện                          |
| ----------------------- | ---------------------------------------- |
| Monolith 1 file         | Tách `banks/*.json`, `js/modules/*.js`   |
| Không type check        | TypeScript + Vite nếu team lớn           |
| Bank embed trong HTML   | Build script merge JSON → bundle         |
| Firebase optional       | Env vars trên Vercel cho config          |
| Không test tự động      | Unit test cho reviewEngine, parse bank   |

---

## 14. Scope hiện tại

- ✅ Hub chọn Quizzy / Memozy
- ✅ Memozy: account filter, 4 skills, browse taxonomy, flip flashcard, SRS, TTS
- ✅ Đa môn, chọn môn, tiến độ tách biệt (Quizzy)
- ✅ Campaign / Exam / Review / Spaced / Flashcard MCQ (Quizzy)
- ✅ Bookmark, Sổ tay, export/import
- ✅ SR dashboard + streak
- ✅ Firebase sync (khi config) — Quizzy
- ✅ Responsive mobile + keyboard shortcuts
- ⏸ Tài khoản user thật
- ⏸ Backend API / admin quản lý câu hỏi & vocab
- ⏸ PWA offline
- ⏸ Đồng bộ cloud cho Memozy review data
