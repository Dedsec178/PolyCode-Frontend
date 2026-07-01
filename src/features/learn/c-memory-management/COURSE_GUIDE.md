# C Memory Management — Course Guide

## What is this course?

**C Memory Management** teaches C programming from the ground up with real-compiled C challenges.

**Live URL:** `/learn/c-memory-management`

---

## Chapters

- **Memory Layout** (3 lessons)
- **Dynamic Allocation** (3 lessons)
- **calloc & realloc** (3 lessons)
- **Memory Safety** (3 lessons)
- **Practical Patterns** (3 lessons)

---

## Folder structure

```
c-memory-management/
├── COURSE_GUIDE.md
├── data/
│   ├── c_memory_managementCurriculum.js      ← lessons, theory, quizzes, challenges
│   └── c_memory_managementVideoLinks.js      ← YouTube URLs (keyed by lesson id)
├── components/
│   └── CMemoryManagementCodeChallenge.jsx ← C editor + run/submit
├── hooks/
│   └── useCMemoryManagementProgress.js  ← localStorage progress
└── pages/
    ├── CMemoryManagementHub.jsx            ← Course home page
    └── CMemoryManagementLessonPage.jsx         ← Single lesson page
```

---

## Routes (register in App.js)

```jsx
<Route path="/learn/c-memory-management" element={<CMemoryManagementHub />} />
<Route path="/learn/c-memory-management/lesson/:lessonId" element={<CMemoryManagementLessonPage />} />
```

## courseCatalog.js changes needed

Add `"c"` key entries to `languageCourses`, `learnNavByLanguage`, `courseStackGroups`, and `inferLanguageFromLearnPath`. See the generated `courseCatalog_C_additions.js` file.

---

## Quick tips

1. Lesson ids follow the pattern `c_memory_management-<chapter>-<lesson>` (e.g. `c_memory_management-0-0`)  
2. Add YouTube video URLs to `c_memory_managementVideoLinks.js` keyed by lesson id  
3. The C compiler endpoint is `/challenges/run-c` — same pattern as `/challenges/run-cpp`
