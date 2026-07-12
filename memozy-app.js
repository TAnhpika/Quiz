/**
 * Memozy — IELTS vocabulary flashcards + spaced repetition
 * Depends on: reviewDateUtils (from index.html), MEMOZY_CATALOG, MEMOZY_BANKS
 */
(function () {
    "use strict";

    const MEMOZY_SKILLS = ["reading", "listening", "writing", "speaking"];
    const ACCOUNTS = {
        tuananh: {
            id: "tuananh",
            label: "Tuấn Anh",
            icon: "fa-user",
            accent: "teal",
            iconClass: "teal",
            labelClass: "text-teal-700",
        },
        linh: {
            id: "linh",
            label: "Linh",
            icon: "fa-user",
            accent: "pink",
            iconClass: "pink",
            labelClass: "text-pink-600",
        },
        both: {
            id: "both",
            label: "Both",
            icon: "fa-users",
            hint: "Hiện vocab của cả 2",
            accent: "dual",
            iconClass: "dual",
            labelClass: "text-indigo-600",
        },
    };

    let memozyAccount = localStorage.getItem("memozy_account") || null;
    let memozySkill = null;
    let memozyLeaf = null; // { skill, groupId, leaf }
    let memozyReviewData = {};
    let memozyReviewMeta = { streak: 0, lastReviewDay: null };
    let memozyQueue = [];
    let memozyFlipped = false;
    let memozyMode = null; // "leaf" | "due"
    let memozyStudyTitle = "";
    let memozyAutoplay = localStorage.getItem("memozy_autoplay") === "1";
    let memozyAutoHard = localStorage.getItem("memozy_auto_hard") === "1";
    let memozyInitialCount = 0;
    let memozyAnswered = false;
    let memozyAwaitContinue = false;
    let memozyContinueGrade = "good";
    let memozyCurrentOptions = [];
    let memozyAnswerIndex = 0;

    const colorMap = {
        emerald: { bg: "bg-emerald-50", icon: "text-emerald-600", text: "text-emerald-700" },
        sky: { bg: "bg-sky-50", icon: "text-sky-600", text: "text-sky-700" },
        violet: { bg: "bg-cyan-50", icon: "text-cyan-700", text: "text-cyan-800" },
        orange: { bg: "bg-orange-50", icon: "text-orange-600", text: "text-orange-700" },
    };

    function storageKey(suffix) {
        return `memozy_${memozyAccount || "guest"}_${suffix}`;
    }

    function loadReview() {
        if (!memozyAccount) {
            memozyReviewData = {};
            memozyReviewMeta = { streak: 0, lastReviewDay: null };
            return;
        }
        try {
            memozyReviewData = JSON.parse(localStorage.getItem(storageKey("review_data")) || "{}");
            memozyReviewMeta = JSON.parse(localStorage.getItem(storageKey("review_meta")) || '{"streak":0,"lastReviewDay":null}');
        } catch {
            memozyReviewData = {};
            memozyReviewMeta = { streak: 0, lastReviewDay: null };
        }
    }

    function saveReview() {
        if (!memozyAccount) return;
        localStorage.setItem(storageKey("review_data"), JSON.stringify(memozyReviewData));
        localStorage.setItem(storageKey("review_meta"), JSON.stringify(memozyReviewMeta));
    }

    function todayKey() {
        return typeof reviewDateUtils !== "undefined"
            ? reviewDateUtils.todayKey()
            : new Date().toISOString().slice(0, 10);
    }

    function addDaysToKey(dateKey, days) {
        if (typeof reviewDateUtils !== "undefined") return reviewDateUtils.addDaysToKey(dateKey, days);
        const [y, m, d] = dateKey.split("-").map(Number);
        const dt = new Date(y, m - 1, d + days, 12, 0, 0, 0);
        const mm = String(dt.getMonth() + 1).padStart(2, "0");
        const dd = String(dt.getDate()).padStart(2, "0");
        return `${dt.getFullYear()}-${mm}-${dd}`;
    }

    function createDefaultEntry(cardId) {
        return {
            questionId: cardId,
            repetition: 0,
            interval: 1,
            easeFactor: 2.5,
            dueDate: todayKey(),
            lastReview: null,
            totalReview: 0,
            correctCount: 0,
        };
    }

    function updateStreak(now = new Date()) {
        const today = todayKey(now);
        if (memozyReviewMeta.lastReviewDay === today) return;
        if (memozyReviewMeta.lastReviewDay === addDaysToKey(today, -1)) {
            memozyReviewMeta.streak = (memozyReviewMeta.streak || 0) + 1;
        } else {
            memozyReviewMeta.streak = 1;
        }
        memozyReviewMeta.lastReviewDay = today;
    }

    function updateReviewSchedule(cardId, grade) {
        const now = new Date();
        const today = todayKey(now);
        let entry = memozyReviewData[cardId] || createDefaultEntry(cardId);

        switch (grade) {
            case "again":
                entry.repetition = 0;
                entry.interval = 1;
                break;
            case "hard":
                entry.repetition += 1;
                entry.interval = 3;
                break;
            case "good":
                entry.repetition += 1;
                entry.interval = 7;
                entry.correctCount += 1;
                break;
            case "easy":
                entry.repetition += 1;
                entry.interval = 14;
                entry.correctCount += 1;
                break;
        }

        entry.dueDate = addDaysToKey(today, entry.interval);
        entry.lastReview = now.toISOString();
        entry.totalReview += 1;
        entry.questionId = cardId;
        memozyReviewData[cardId] = entry;
        updateStreak(now);
        saveReview();
        return entry;
    }

    function ensureInDeck(cardId) {
        if (!memozyReviewData[cardId]) {
            const entry = createDefaultEntry(cardId);
            entry.interval = 0;
            memozyReviewData[cardId] = entry;
            saveReview();
        }
    }

    function isDue(cardId) {
        const e = memozyReviewData[cardId];
        if (!e) return true; // new cards are learnable / count as due for first study
        return e.dueDate <= todayKey();
    }

    function isTrackedDue(cardId) {
        const e = memozyReviewData[cardId];
        if (!e) return false;
        return e.dueDate <= todayKey();
    }

    // ---- Bank loader ----
    const bankLoader = {
        _promises: {},
        catalogLoaded: false,
        loadCatalog() {
            if (window.MEMOZY_CATALOG) {
                this.catalogLoaded = true;
                return Promise.resolve(window.MEMOZY_CATALOG);
            }
            if (this._promises.catalog) return this._promises.catalog;
            this._promises.catalog = new Promise((resolve, reject) => {
                const s = document.createElement("script");
                s.src = "banks/memozy/catalog.js";
                s.onload = () => {
                    this.catalogLoaded = true;
                    resolve(window.MEMOZY_CATALOG);
                };
                s.onerror = () => reject(new Error("Failed to load Memozy catalog"));
                document.head.appendChild(s);
            });
            return this._promises.catalog;
        },
        loadSkill(skill) {
            if (window.MEMOZY_BANKS?.[skill]) return Promise.resolve(window.MEMOZY_BANKS[skill]);
            if (this._promises[skill]) return this._promises[skill];
            this._promises[skill] = new Promise((resolve, reject) => {
                const s = document.createElement("script");
                s.src = `banks/memozy/${skill}.js`;
                s.onload = () => {
                    const bank = window.MEMOZY_BANKS?.[skill];
                    if (!Array.isArray(bank)) {
                        delete this._promises[skill];
                        reject(new Error(`Bank not registered: ${skill}`));
                        return;
                    }
                    resolve(bank);
                };
                s.onerror = () => {
                    delete this._promises[skill];
                    reject(new Error(`Failed to load banks/memozy/${skill}.js`));
                };
                document.head.appendChild(s);
            });
            return this._promises[skill];
        },
        async loadAllSkills() {
            await this.loadCatalog();
            await Promise.all(MEMOZY_SKILLS.map((sk) => this.loadSkill(sk)));
        },
    };

    function matchesOwner(card) {
        if (!memozyAccount || memozyAccount === "both") return true;
        return card.owner === memozyAccount;
    }

    function pathKey(path) {
        return (path || []).join("/");
    }

    function filterCards(skill, leafPath) {
        const bank = window.MEMOZY_BANKS?.[skill] || [];
        const key = pathKey(leafPath);
        return bank.filter((c) => matchesOwner(c) && pathKey(c.path) === key);
    }

    function allAccountCards() {
        const out = [];
        for (const sk of MEMOZY_SKILLS) {
            const bank = window.MEMOZY_BANKS?.[sk] || [];
            for (const c of bank) if (matchesOwner(c)) out.push(c);
        }
        return out;
    }

    function countDueForCards(cards) {
        return cards.filter((c) => isTrackedDue(c.id) || !memozyReviewData[c.id]).length;
    }

    function countTrackedDue(cards) {
        return cards.filter((c) => isTrackedDue(c.id)).length;
    }

    // ---- Navigation ----
    function hideMemozyScreens() {
        ["screen-app-hub", "screen-memozy-account", "screen-memozy-skills", "screen-memozy-browse", "screen-memozy-study", "screen-memozy-result"].forEach(
            (id) => document.getElementById(id)?.classList.add("hidden"),
        );
        document.body.classList.remove("memozy-active", "hub-active");
    }

    function showAppHub() {
        // Hide Quizzy screens without recursing into Memozy hide
        ["screen-subject", "screen-home", "screen-game", "screen-result", "screen-handbook", "modal-group", "modal-review-hub"].forEach((id) =>
            document.getElementById(id)?.classList.add("hidden"),
        );
        document.getElementById("btn-review-hub")?.classList.add("hidden");
        hideMemozyScreens();
        document.getElementById("screen-app-hub")?.classList.remove("hidden");
        document.body.classList.add("hub-active");
        document.body.classList.remove("subject-active", "home-active", "game-active", "result-active", "memozy-active");
        document.title = "Quizzy × Memozy";
    }

    function enterQuizzy() {
        hideMemozyScreens();
        if (typeof showSubjectSelection === "function") showSubjectSelection();
    }

    function enterMemozy() {
        ["screen-subject", "screen-home", "screen-game", "screen-result", "screen-handbook", "modal-group", "modal-review-hub"].forEach((id) =>
            document.getElementById(id)?.classList.add("hidden"),
        );
        document.getElementById("btn-review-hub")?.classList.add("hidden");
        hideMemozyScreens();
        document.getElementById("screen-memozy-account")?.classList.remove("hidden");
        document.body.classList.add("memozy-active");
        document.body.classList.remove("hub-active", "subject-active", "home-active", "game-active");
        document.title = "Memozy — IELTS Vocab";
        renderAccountCards();
    }

    function selectAccount(accountId) {
        memozyAccount = accountId;
        localStorage.setItem("memozy_account", accountId);
        loadReview();
        showSkills();
    }

    async function showSkills() {
        hideMemozyScreens();
        document.body.classList.add("memozy-active");
        try {
            await bankLoader.loadAllSkills();
        } catch (e) {
            console.error(e);
            if (typeof showToast === "function") showToast("Không tải được ngân hàng Memozy", "error");
            return;
        }
        document.getElementById("screen-memozy-skills")?.classList.remove("hidden");
        const acc = ACCOUNTS[memozyAccount];
        const el = document.getElementById("memozy-skills-account");
        if (el) {
            el.textContent = acc?.label || memozyAccount;
            el.className = acc?.labelClass || "text-teal-600";
        }
        renderSkillCards();
        updateDueBadge();
    }

    function renderAccountCards() {
        const wrap = document.getElementById("memozy-account-cards");
        if (!wrap) return;
        wrap.innerHTML = Object.values(ACCOUNTS)
            .map(
                (a) => `
            <button type="button" onclick="Memozy.selectAccount('${a.id}')"
                class="mz-account-row accent-${a.accent} ${memozyAccount === a.id ? "is-active" : ""}">
                <div class="mz-acc-icon ${a.iconClass}">
                    <i class="fa-solid ${a.icon}"></i>
                </div>
                <div>
                    <div class="font-black text-lg ${a.labelClass}">${a.label}</div>
                    ${a.hint ? `<div class="text-xs text-slate-500 mt-0.5">${a.hint}</div>` : `<div class="text-xs text-slate-400 mt-0.5">Chỉ bộ từ riêng</div>`}
                </div>
            </button>`,
            )
            .join("");
    }

    function renderSkillCards() {
        const wrap = document.getElementById("memozy-skill-cards");
        if (!wrap || !window.MEMOZY_CATALOG) return;
        wrap.innerHTML = MEMOZY_SKILLS.map((sk) => {
            const cat = window.MEMOZY_CATALOG[sk];
            const c = colorMap[cat.color] || colorMap.emerald;
            const cards = (window.MEMOZY_BANKS[sk] || []).filter(matchesOwner);
            const due = countTrackedDue(cards);
            return `
            <button type="button" onclick="Memozy.openSkill('${sk}')" class="mz-skill-tile">
                <div class="flex items-start justify-between gap-2 mb-3">
                    <div class="w-12 h-12 rounded-2xl ${c.bg} ${c.icon} flex items-center justify-center">
                        <i class="fa-solid ${cat.icon} text-xl"></i>
                    </div>
                    ${due > 0 ? `<span class="text-[10px] font-black bg-orange-500 text-white px-2 py-0.5 rounded-full">${due} due</span>` : ""}
                </div>
                <h3 class="font-black text-slate-800 text-lg mb-1">${cat.name}</h3>
                <p class="text-xs text-slate-500 leading-snug line-clamp-2">${cat.goal}</p>
                <p class="text-[11px] font-bold ${c.text} mt-3">${cards.length} thẻ</p>
            </button>`;
        }).join("");
    }

    function updateDueBadge() {
        const cards = allAccountCards();
        const due = countTrackedDue(cards);
        const badge = document.getElementById("memozy-due-badge");
        const btn = document.getElementById("btn-memozy-due");
        if (badge) {
            if (due > 0) {
                badge.textContent = due;
                badge.classList.remove("hidden");
            } else {
                badge.classList.add("hidden");
            }
        }
        if (btn) {
            if (due > 0) {
                btn.classList.remove("opacity-50", "cursor-not-allowed");
                btn.disabled = false;
            } else {
                btn.classList.add("opacity-50", "cursor-not-allowed");
                btn.disabled = true;
            }
        }
    }

    async function openSkill(skillId) {
        memozySkill = skillId;
        await bankLoader.loadSkill(skillId);
        hideMemozyScreens();
        document.body.classList.add("memozy-active");
        document.getElementById("screen-memozy-browse")?.classList.remove("hidden");
        const cat = window.MEMOZY_CATALOG[skillId];
        document.getElementById("memozy-browse-title").textContent = cat.name;
        document.getElementById("memozy-browse-goal").textContent = cat.goal;
        renderBrowse();
    }

    function renderBrowse() {
        const wrap = document.getElementById("memozy-browse-tree");
        const cat = window.MEMOZY_CATALOG[memozySkill];
        if (!wrap || !cat) return;

        wrap.innerHTML = cat.groups
            .map((g) => {
                const leavesHtml = g.leaves
                    .map((leaf) => {
                        const cards = filterCards(memozySkill, leaf.path);
                        const due = countTrackedDue(cards);
                        const newCount = cards.filter((c) => !memozyReviewData[c.id]).length;
                        return `
                    <button type="button" onclick='Memozy.startLeaf(${JSON.stringify(memozySkill)}, ${JSON.stringify(g.id)}, ${JSON.stringify(leaf)})'
                        class="mz-leaf-row">
                        <div class="min-w-0">
                            <div class="font-bold text-slate-800 truncate">${leaf.name}</div>
                            <div class="text-[11px] text-slate-400 mt-0.5">${cards.length} thẻ${newCount ? ` · ${newCount} mới` : ""}</div>
                        </div>
                        <div class="flex items-center gap-2 shrink-0">
                            ${due > 0 ? `<span class="text-[10px] font-black bg-orange-500 text-white px-1.5 py-0.5 rounded-full">${due}</span>` : ""}
                            <i class="fa-solid fa-chevron-right text-teal-300 text-xs"></i>
                        </div>
                    </button>`;
                    })
                    .join("");
                return `
                <div class="mb-6">
                    <h4 class="text-[11px] font-black uppercase tracking-[0.14em] text-teal-700/70 mb-2.5 px-1">${g.name}</h4>
                    <div class="space-y-2">${leavesHtml}</div>
                </div>`;
            })
            .join("");
    }

    // ---- Study ----
    function syncAutoplayButton() {
        const btn = document.getElementById("btn-memozy-autoplay");
        if (!btn) return;
        btn.setAttribute("aria-pressed", memozyAutoplay ? "true" : "false");
        btn.title = "Auto play audio";
        btn.innerHTML = `<i class="fa-solid fa-bolt" aria-hidden="true"></i><span class="hidden sm:inline">Auto</span>`;
        if (memozyAutoplay) {
            btn.className =
                "h-10 px-2.5 shrink-0 rounded-full flex items-center gap-1.5 text-xs font-bold shadow-sm border transition-colors bg-teal-600 text-white border-teal-600 hover:bg-teal-700";
        } else {
            btn.className =
                "h-10 px-2.5 shrink-0 rounded-full flex items-center gap-1.5 text-xs font-bold shadow-sm border transition-colors bg-white/90 text-slate-500 border-slate-200 hover:bg-slate-50";
        }
    }

    function toggleAutoplay() {
        memozyAutoplay = !memozyAutoplay;
        localStorage.setItem("memozy_autoplay", memozyAutoplay ? "1" : "0");
        syncAutoplayButton();
        if (memozyAutoplay) {
            const c = currentCard();
            if (c && !memozyFlipped) speakTerm(c.term);
        } else if (window.speechSynthesis) {
            try {
                window.speechSynthesis.cancel();
            } catch {
                /* silent */
            }
        }
    }

    function syncAutoHardButton() {
        const btn = document.getElementById("btn-memozy-auto-hard");
        if (!btn) return;
        btn.setAttribute("aria-pressed", memozyAutoHard ? "true" : "false");
        btn.title = "Lặp lại từ sai sau ~4 từ";
        btn.innerHTML = `<i class="fa-solid fa-rotate" aria-hidden="true"></i><span class="hidden sm:inline">Repeat</span>`;
        if (memozyAutoHard) {
            btn.className =
                "h-10 px-2.5 shrink-0 rounded-full flex items-center gap-1.5 text-xs font-bold shadow-sm border transition-colors bg-amber-500 text-white border-amber-500 hover:bg-amber-600";
        } else {
            btn.className =
                "h-10 px-2.5 shrink-0 rounded-full flex items-center gap-1.5 text-xs font-bold shadow-sm border transition-colors bg-white/90 text-slate-500 border-slate-200 hover:bg-slate-50";
        }
    }

    function toggleAutoHard() {
        memozyAutoHard = !memozyAutoHard;
        localStorage.setItem("memozy_auto_hard", memozyAutoHard ? "1" : "0");
        syncAutoHardButton();
    }

    function speakTerm(text) {
        if (!text || !window.speechSynthesis) return;
        try {
            window.speechSynthesis.cancel();
            const u = new SpeechSynthesisUtterance(text);
            u.lang = "en-GB";
            u.rate = 0.95;
            window.speechSynthesis.speak(u);
        } catch {
            /* silent */
        }
    }

    function startLeaf(skillId, groupId, leaf) {
        memozySkill = skillId;
        memozyLeaf = { skill: skillId, groupId, leaf };
        const cards = filterCards(skillId, leaf.path);
        if (!cards.length) {
            if (typeof showToast === "function") showToast("Không có thẻ nào cho account này", "error");
            return;
        }
        cards.forEach((c) => ensureInDeck(c.id));
        memozyMode = "leaf";
        memozyStudyTitle = leaf.name;
        memozyQueue = cards.slice();
        memozyInitialCount = cards.length;
        beginStudy();
    }

    function startDueReview() {
        const cards = allAccountCards().filter((c) => isTrackedDue(c.id));
        if (!cards.length) {
            if (typeof showToast === "function") showToast("Không có thẻ đến hạn hôm nay");
            return;
        }
        memozyMode = "due";
        memozyLeaf = null;
        memozyStudyTitle = "Ôn hôm nay";
        memozyQueue = cards.slice();
        memozyInitialCount = cards.length;
        beginStudy();
    }

    function beginStudy() {
        memozyFlipped = false;
        memozyAnswered = false;
        hideMemozyScreens();
        document.body.classList.add("memozy-active");
        document.getElementById("screen-memozy-study")?.classList.remove("hidden");
        document.getElementById("memozy-grade-bar")?.classList.add("hidden");
        document.getElementById("memozy-continue-bar")?.classList.add("hidden");
        syncAutoplayButton();
        syncAutoHardButton();
        loadCard();
    }

    function currentCard() {
        return memozyQueue[0] || null;
    }

    function updateProgressBar() {
        const fill = document.getElementById("memozy-progress-fill");
        if (!fill || !memozyInitialCount) {
            if (fill) fill.style.width = "0%";
            return;
        }
        const done = Math.max(0, memozyInitialCount - memozyQueue.length);
        const pct = Math.min(100, Math.round((done / memozyInitialCount) * 100));
        fill.style.width = `${pct}%`;
    }

    function optionText(c) {
        if (!c?.paraphrase) return null;
        return String(c.paraphrase).split("/")[0].trim();
    }

    function shuffleInPlace(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    function collectDistractors(card, correctText) {
        const seen = new Set([correctText.toLowerCase()]);
        const out = [];

        function tryAdd(c) {
            if (!c || c.id === card.id) return;
            const t = optionText(c);
            if (!t || seen.has(t.toLowerCase())) return;
            seen.add(t.toLowerCase());
            out.push(t);
        }

        const sameLeaf = (window.MEMOZY_BANKS?.[card.skill] || []).filter(
            (c) => matchesOwner(c) && pathKey(c.path) === pathKey(card.path),
        );
        shuffleInPlace(sameLeaf.slice()).forEach(tryAdd);

        if (out.length < 3) {
            const sameSkill = (window.MEMOZY_BANKS?.[card.skill] || []).filter(matchesOwner);
            shuffleInPlace(sameSkill.slice()).forEach(tryAdd);
        }

        if (out.length < 3) {
            shuffleInPlace(allAccountCards().slice()).forEach(tryAdd);
        }

        const fillers = ["unrelated idea", "opposite meaning", "irrelevant phrase", "unconnected concept"];
        let fi = 0;
        while (out.length < 3) {
            const f = fillers[fi % fillers.length] + (fi >= fillers.length ? ` ${fi}` : "");
            fi++;
            if (!seen.has(f.toLowerCase())) {
                seen.add(f.toLowerCase());
                out.push(f);
            }
        }
        return out.slice(0, 3);
    }

    function buildOptions(card) {
        const correct = optionText(card);
        if (!correct) {
            console.warn("Memozy: missing paraphrase for", card?.id, card?.term);
            return { options: ["(missing paraphrase)", "unrelated idea", "opposite meaning", "irrelevant phrase"], answerIndex: 0 };
        }
        const distractors = collectDistractors(card, correct);
        const options = shuffleInPlace([correct, ...distractors]);
        return { options, answerIndex: options.indexOf(correct) };
    }

    function renderOptions(revealed = false) {
        const wrap = document.getElementById("memozy-options");
        if (!wrap) return;
        wrap.innerHTML = "";
        memozyCurrentOptions.forEach((opt, idx) => {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "mz-opt-btn";
            btn.dataset.idx = String(idx);
            if (revealed) {
                btn.disabled = true;
                if (idx === memozyAnswerIndex) btn.classList.add("correct");
            } else {
                btn.onclick = () => selectAnswer(idx, btn);
            }
            btn.innerHTML = `<span class="mz-opt-letter">${String.fromCharCode(65 + idx)}</span><span class="min-w-0 line-clamp-3">${opt}</span>`;
            wrap.appendChild(btn);
        });
    }

    function showRevealPanel(card, mode = "grade") {
        const meaningEl = document.getElementById("memozy-meaning");
        const exampleEl = document.getElementById("memozy-example");
        const paraEl = document.getElementById("memozy-paraphrase");
        const tagsEl = document.getElementById("memozy-card-tags");
        const revealEl = document.getElementById("memozy-reveal");
        const gradeEl = document.getElementById("memozy-grade-bar");
        const continueEl = document.getElementById("memozy-continue-bar");
        if (!meaningEl || !revealEl) return;

        meaningEl.textContent = card.meaning;
        if (exampleEl) {
            exampleEl.textContent = card.example || "";
            exampleEl.classList.toggle("hidden", !card.example);
        }
        if (paraEl) {
            if (card.paraphrase) {
                paraEl.textContent = "≈ " + card.paraphrase;
                paraEl.classList.remove("hidden");
            } else {
                paraEl.classList.add("hidden");
            }
        }
        if (tagsEl) tagsEl.textContent = (card.tags || []).join(" · ");
        revealEl.classList.remove("hidden");
        document.getElementById("memozy-space-hint")?.classList.add("hidden");

        if (mode === "continue") {
            memozyAwaitContinue = true;
            gradeEl?.classList.add("hidden");
            continueEl?.classList.remove("hidden");
        } else {
            memozyAwaitContinue = false;
            continueEl?.classList.add("hidden");
            gradeEl?.classList.remove("hidden");
        }
    }

    function loadCard() {
        const card = currentCard();
        if (!card) {
            finishStudy();
            return;
        }
        memozyFlipped = false;
        memozyAnswered = false;
        memozyAwaitContinue = false;
        memozyContinueGrade = "good";
        const total = memozyQueue.length;
        const titleEl = document.getElementById("memozy-study-title");
        const progressEl = document.getElementById("memozy-study-progress");
        const termEl = document.getElementById("memozy-term");
        const phoneticEl = document.getElementById("memozy-phonetic");
        if (titleEl) titleEl.textContent = memozyStudyTitle;
        if (progressEl) progressEl.textContent = `Còn ${total} thẻ`;
        updateProgressBar();

        document.getElementById("memozy-grade-bar")?.classList.add("hidden");
        document.getElementById("memozy-continue-bar")?.classList.add("hidden");
        document.getElementById("memozy-reveal")?.classList.add("hidden");
        document.getElementById("memozy-space-hint")?.classList.remove("hidden");

        if (termEl) termEl.textContent = card.term;
        if (phoneticEl) {
            phoneticEl.textContent = card.phonetic || "";
            phoneticEl.classList.toggle("hidden", !card.phonetic);
        }

        const built = buildOptions(card);
        memozyCurrentOptions = built.options;
        memozyAnswerIndex = built.answerIndex;
        renderOptions(false);

        if (memozyAutoplay) {
            setTimeout(() => speakTerm(card.term), 120);
        }
    }

    function selectAnswer(selectedIndex, btnElement) {
        if (memozyFlipped || memozyAnswered || !currentCard()) return;
        memozyAnswered = true;
        memozyFlipped = true;
        const card = currentCard();
        const btns = document.querySelectorAll("#memozy-options .mz-opt-btn");
        btns.forEach((b) => (b.disabled = true));

        if (selectedIndex === memozyAnswerIndex) {
            btnElement.classList.add("correct");
            memozyContinueGrade = "good";
            showRevealPanel(card, "continue");
        } else {
            btnElement.classList.add("wrong");
            btns.forEach((b) => {
                if (parseInt(b.dataset.idx, 10) === memozyAnswerIndex) b.classList.add("correct");
            });
            if (memozyAutoHard) {
                memozyContinueGrade = "hard";
                showRevealPanel(card, "continue");
            } else {
                showRevealPanel(card, "grade");
            }
        }
    }

    function peekAnswer() {
        if (memozyFlipped || !currentCard()) return;
        memozyFlipped = true;
        memozyAnswered = true;
        renderOptions(true);
        if (memozyAutoHard) {
            memozyContinueGrade = "hard";
            showRevealPanel(currentCard(), "continue");
        } else {
            showRevealPanel(currentCard(), "grade");
        }
    }

    /** Tiếp tục: grade theo memozyContinueGrade (good khi đúng / hard khi Auto Khó) */
    function continueCard() {
        if (!memozyAwaitContinue || !currentCard()) return;
        const grade = memozyContinueGrade || "good";
        memozyAwaitContinue = false;
        document.getElementById("memozy-continue-bar")?.classList.add("hidden");
        advanceWithGrade(grade);
    }

    function advanceWithGrade(grade) {
        if (!currentCard()) return;
        const card = memozyQueue.shift();
        updateReviewSchedule(card.id, grade);
        if (grade === "again") {
            const insertAt = Math.min(3, memozyQueue.length);
            memozyQueue.splice(insertAt, 0, card);
        } else if (grade === "hard") {
            const insertAt = Math.min(4, memozyQueue.length);
            memozyQueue.splice(insertAt, 0, card);
        }
        if (!memozyQueue.length) finishStudy();
        else loadCard();
    }

    function handleGrade(grade) {
        if (!memozyFlipped || memozyAwaitContinue || !currentCard()) return;
        advanceWithGrade(grade);
    }

    function finishStudy() {
        hideMemozyScreens();
        document.body.classList.add("memozy-active");
        document.getElementById("screen-memozy-result")?.classList.remove("hidden");
        document.getElementById("memozy-result-title").textContent =
            memozyMode === "due" ? "Xong ôn hôm nay!" : `Hoàn thành · ${memozyStudyTitle}`;
        const dueLeft = countTrackedDue(allAccountCards());
        document.getElementById("memozy-result-detail").textContent =
            dueLeft > 0 ? `Còn ${dueLeft} thẻ đến hạn` : "Không còn thẻ đến hạn";
        updateDueBadge();
    }

    function exitStudyToBrowse() {
        if (memozyMode === "due" || !memozySkill) showSkills();
        else openSkill(memozySkill);
    }

    function backFromBrowse() {
        showSkills();
    }

    function backFromSkills() {
        enterMemozy();
    }

    function backFromAccount() {
        showAppHub();
    }

    // Keyboard: 1-4 options before reveal; Space peek; 1-4 grades after reveal
    function onKeydown(e) {
        const study = document.getElementById("screen-memozy-study");
        if (!study || study.classList.contains("hidden")) return;

        if (e.code === "Space" || e.key === " ") {
            e.preventDefault();
            if (memozyAwaitContinue) continueCard();
            else if (!memozyFlipped) peekAnswer();
            return;
        }

        const digitMap = {
            Digit1: 0,
            Digit2: 1,
            Digit3: 2,
            Digit4: 3,
            Numpad1: 0,
            Numpad2: 1,
            Numpad3: 2,
            Numpad4: 3,
        };
        const gradeMap = {
            Digit1: "again",
            Digit2: "hard",
            Digit3: "good",
            Digit4: "easy",
            Numpad1: "again",
            Numpad2: "hard",
            Numpad3: "good",
            Numpad4: "easy",
        };

        if (digitMap[e.code] != null) {
            e.preventDefault();
            if (!memozyFlipped) {
                const btn = document.querySelector(`#memozy-options .mz-opt-btn[data-idx="${digitMap[e.code]}"]`);
                if (btn && !btn.disabled) selectAnswer(digitMap[e.code], btn);
            } else if (!memozyAwaitContinue) {
                handleGrade(gradeMap[e.code]);
            }
        }
    }

    document.addEventListener("keydown", onKeydown);

    // Public API
    window.Memozy = {
        showAppHub,
        enterQuizzy,
        enterMemozy,
        selectAccount,
        showSkills,
        openSkill,
        startLeaf,
        startDueReview,
        selectAnswer,
        peekAnswer,
        continueCard,
        flipCard: peekAnswer,
        handleGrade,
        speakTerm,
        speakCurrent() {
            const c = currentCard();
            if (c) speakTerm(c.term);
        },
        toggleAutoplay,
        toggleAutoHard,
        exitStudyToBrowse,
        backFromBrowse,
        backFromSkills,
        backFromAccount,
        hideMemozyScreens,
        isMemozyScreenVisible() {
            return ["screen-app-hub", "screen-memozy-account", "screen-memozy-skills", "screen-memozy-browse", "screen-memozy-study", "screen-memozy-result"].some(
                (id) => {
                    const el = document.getElementById(id);
                    return el && !el.classList.contains("hidden");
                },
            );
        },
    };
})();
