# C Fundamentals — Course Guide

## What is this course?

**C Fundamentals** teaches C programming from the ground up with real-compiled C challenges.

**Live URL:** `/learn/c-fundamentals`

---

## Chapters

- **Welcome to C** (3 lessons)
- **Variables & Data Types** (3 lessons)
- **Operators & Expressions** (3 lessons)
- **Control Flow** (5 lessons)
- **Input & Output** (3 lessons)

---

## Folder structure

```
c-fundamentals/
├── COURSE_GUIDE.md
├── data/
│   ├── c_fundamentalsCurriculum.js      ← lessons, theory, quizzes, challenges
│   └── c_fundamentalsVideoLinks.js      ← YouTube URLs (keyed by lesson id)
├── components/
│   └── CFundamentalsCodeChallenge.jsx ← C editor + run/submit
├── hooks/
│   └── useCFundamentalsProgress.js  ← localStorage progress
└── pages/
    ├── CFundamentalsHub.jsx            ← Course home page
    └── CFundamentalsLessonPage.jsx         ← Single lesson page
```

---

## Routes (register in App.js)

```jsx
<Route path="/learn/c-fundamentals" element={<CFundamentalsHub />} />
<Route path="/learn/c-fundamentals/lesson/:lessonId" element={<CFundamentalsLessonPage />} />
```

## courseCatalog.js changes needed

Add `"c"` key entries to `languageCourses`, `learnNavByLanguage`, `courseStackGroups`, and `inferLanguageFromLearnPath`. See the generated `courseCatalog_C_additions.js` file.

---

## Quick tips

1. Lesson ids follow the pattern `c_fundamentals-<chapter>-<lesson>` (e.g. `c_fundamentals-0-0`)  
2. Add YouTube video URLs to `c_fundamentalsVideoLinks.js` keyed by lesson id  
3. The C compiler endpoint is `/challenges/run-c` — same pattern as `/challenges/run-cpp`
