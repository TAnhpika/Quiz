You are updating the `keywords` field for a multiple-choice question bank used in a Flashcard + Spaced Repetition app.

## Goal

The purpose of `keywords` is NOT to summarize the question.

The purpose is to create a retrieval pathway:

Question cue → Recall → Answer cue → Full answer.

The keywords should feel like highlights made by a diligent student while reviewing for an exam.

Do NOT generate formulaic keywords. Use human judgment for each question.

---

## Output Format

Keep the existing schema unchanged.

Do NOT create new fields such as:

```json
"questionKeywords": "...",
"answerKeywords": "..."
```

Only update:

```json
"keywords": "Q: ... | A: ..."
```

Example:

```json
"keywords": "Q: high-level test planning | A: overall scope · objectives of testing"
```

---

## Rules for Q (Question Cue)

Purpose:

> Capture what the question is actually asking.

Requirements:

* Use the format:

```text
Q: ...
```

* Prefer wording taken directly from the original question.
* Keep the original phrasing whenever possible.
* Avoid unnecessary paraphrasing.
* Only paraphrase if:

  * the original wording is too long,
  * the wording is awkward,
  * a simpler expression improves understanding.
* If paraphrasing is used, choose the simplest and most intuitive wording.
* Length guideline: 2–6 meaningful words.
* Focus on the intent of the question, not isolated keywords.
* Avoid vague expressions such as:

  * important thing
  * main concept
  * testing topic
  * general idea

Question cues should allow a learner to recognize the knowledge area immediately.

---

## Rules for A (Answer Cue)

Purpose:

> Trigger recall of the correct answer using the original wording.

Requirements:

* Use the format:

```text
A: ...
```

* Extract ONLY from:

  * the correct answer, or
  * the explanation if it is identical or expands the same wording.
* NEVER paraphrase.
* NEVER introduce new vocabulary.
* Preserve the original wording exactly.
* Preserve the original meaning.
* Prefer the most meaningful fragments rather than the full sentence.
* Keep the original order of appearance.
* Remove filler words when they are not essential for recall.

Examples of removable fillers:

```text
the
a
an
is
are
of
it
that
```

if removing them does not distort the wording.

Recommended length:

* 2–4 fragments,
* each fragment 1–5 words.

Fragments should be separated by:

```text
 ·
```

---

## Human Judgment Requirement

Do NOT use templates such as:

* first 3 words of the question,
* first 3 words of the answer,
* first verb + first noun.

For EACH question:

1. Read the entire question.
2. Determine what the question is truly asking.
3. Read the entire correct answer.
4. Identify the exact wording most worth remembering.
5. Rewrite the keywords manually using contextual judgment.

Different questions may require different keyword structures.

The output should resemble how a top student would highlight key ideas while studying.

---

## Self-Check Before Finalizing

For Q:

* Does it reflect the real intent of the question?
* Does it preserve the original wording as much as possible?
* If paraphrased, is it simpler and easier to understand?

For A:

* Are all fragments taken verbatim from the correct answer/explanation?
* Was any new wording introduced? (If yes, revise.)
* Are the fragments sufficient to trigger recall of the complete answer?

If the result feels machine-generated or formulaic, revise it using better contextual judgment.

---

## Example

Input:

```json
{
    "text": "What is a key component of high-level test planning?",
    "options": [
        "Defining the overall scope and objectives of testing",
        "Debugging software code",
        "Writing detailed test cases",
        "Executing unit tests"
    ],
    "answer": 0,
    "explanation": "Defining the overall scope and objectives of testing"
}
```

Output:

```json
"keywords": "Q: high-level test planning | A: overall scope · objectives of testing"
```

Another example:

Input:

```json
{
    "text": "What role does creativity play in software testing?",
    "answer": 1,
    "explanation": "It helps uncover defects not apparent through scripted test cases."
}
```

Output:

```json
"keywords": "Q: creativity role | A: uncover defects · not apparent · through scripted test cases"
```
