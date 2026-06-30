/** Per-lesson objectives and scenarios merged into Pandas curriculum at build time. */

export const LESSON_ENHANCEMENTS = {
  "pandas-0": {
    objectives: [
      "Import `pandas` as `pd`",
      "Create a simple `DataFrame` with named columns",
      "Explain when Pandas is the right tool for tabular data",
    ],
    scenario:
      "You export a spreadsheet of student scores and need a labeled table you can filter and summarize — that starts with a DataFrame.",
  },
};

export function applyLessonEnhancements(lesson) {
  const meta = LESSON_ENHANCEMENTS[lesson.id];
  const objectives = meta?.objectives || [
    `Understand the main idea in "${lesson.title}"`,
    "Apply the Pandas patterns from this lesson in code",
    "Connect this skill to real spreadsheet or CSV work",
  ];

  const prefix = [{ type: "objectives", items: objectives }];
  if (meta?.scenario) {
    prefix.push({ type: "scenario", content: meta.scenario });
  }
  if (meta?.prepend?.length) {
    prefix.push(...meta.prepend);
  }

  return {
    ...lesson,
    theory: [...prefix, ...lesson.theory, ...(meta?.append || [])],
  };
}

export function applyChapterEnhancements(chapters) {
  return chapters.map((chapter) => ({
    ...chapter,
    lessons: chapter.lessons.map(applyLessonEnhancements),
  }));
}
