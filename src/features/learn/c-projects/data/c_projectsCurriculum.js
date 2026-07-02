// PolyCode — C Projects interactive course
// 5 chapters · 15 lessons · C challenges
// YouTube links: edit c_projectsVideoLinks.js

import { applyLessonVideoLinks } from "../../shared/applyLessonVideoLinks";
import { C_PROJECTS_VIDEO_LINKS } from "./c_projectsVideoLinks";

const ACCENT = "#f39c12";

function quiz(question, options, answer, explanation) {
  return { type: "quiz", question, options, answer, explanation };
}

function callout(variant, content) {
  return { type: "callout", variant, content };
}

function text(content, codeBlock = null) {
  if (codeBlock) {
    return { type: "text", content, code: { lang: "c", ...codeBlock } };
  }
  return { type: "text", content };
}

export const C_PROJECTS_CHAPTERS = [
  {
    id: "ch-0",
    title: "Project Setup",
    icon: "🛠️",
    color: ACCENT,
    lessons: [
      {
        id: "c_projects-0-0",
        title: "C Project Structure",
        xp: 10,
        chapterTitle: "Project Setup",
        theory: [
          text("Organising .c and .h files properly. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Organising .c and .h files properly.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from C Project Structure!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from C Project Structure!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      },
      {
        id: "c_projects-0-1",
        title: "Makefiles Basics",
        xp: 15,
        chapterTitle: "Project Setup",
        theory: [
          text("Automate builds with make. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Automate builds with make.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from Makefiles Basics!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from Makefiles Basics!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      },
      {
        id: "c_projects-0-2",
        title: "Header Guards",
        xp: 10,
        chapterTitle: "Project Setup",
        theory: [
          text("Prevent double inclusion with #ifndef. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Prevent double inclusion with #ifndef.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from Header Guards!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from Header Guards!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      }
    ],
  },
  {
    id: "ch-1",
    title: "Mini Calculator",
    icon: "🧮",
    color: ACCENT,
    lessons: [
      {
        id: "c_projects-1-0",
        title: "Requirements & Design",
        xp: 10,
        chapterTitle: "Mini Calculator",
        theory: [
          text("Plan before you code. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Plan before you code.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from Requirements & Design!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from Requirements & Design!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      },
      {
        id: "c_projects-1-1",
        title: "Parsing User Input",
        xp: 20,
        chapterTitle: "Mini Calculator",
        theory: [
          text("Read expression strings safely. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Read expression strings safely.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from Parsing User Input!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from Parsing User Input!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      },
      {
        id: "c_projects-1-2",
        title: "Implementing Operations",
        xp: 20,
        chapterTitle: "Mini Calculator",
        theory: [
          text("Add, subtract, multiply, divide with error handling. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Add, subtract, multiply, divide with error handling.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from Implementing Operations!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from Implementing Operations!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      }
    ],
  },
  {
    id: "ch-2",
    title: "Student Records System",
    icon: "🎓",
    color: ACCENT,
    lessons: [
      {
        id: "c_projects-2-0",
        title: "Struct Design for Students",
        xp: 15,
        chapterTitle: "Student Records System",
        theory: [
          text("Fields: name, ID, grade, GPA. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Fields: name, ID, grade, GPA.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from Struct Design for Students!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from Struct Design for Students!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      },
      {
        id: "c_projects-2-1",
        title: "Add, Remove, Update Records",
        xp: 25,
        chapterTitle: "Student Records System",
        theory: [
          text("CRUD operations in memory. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: CRUD operations in memory.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from Add, Remove, Update Records!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from Add, Remove, Update Records!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      },
      {
        id: "c_projects-2-2",
        title: "Save & Load from File",
        xp: 25,
        chapterTitle: "Student Records System",
        theory: [
          text("Persist records with binary file I/O. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Persist records with binary file I/O.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from Save & Load from File!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from Save & Load from File!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      }
    ],
  },
  {
    id: "ch-3",
    title: "File-Based To-Do App",
    icon: "✅",
    color: ACCENT,
    lessons: [
      {
        id: "c_projects-3-0",
        title: "Task Struct & List",
        xp: 15,
        chapterTitle: "File-Based To-Do App",
        theory: [
          text("Represent tasks as a linked list. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Represent tasks as a linked list.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from Task Struct & List!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from Task Struct & List!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      },
      {
        id: "c_projects-3-1",
        title: "Add & Complete Tasks",
        xp: 20,
        chapterTitle: "File-Based To-Do App",
        theory: [
          text("Mark done, remove from list. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Mark done, remove from list.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from Add & Complete Tasks!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from Add & Complete Tasks!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      },
      {
        id: "c_projects-3-2",
        title: "Persist Tasks to File",
        xp: 25,
        chapterTitle: "File-Based To-Do App",
        theory: [
          text("Read/write tasks on startup and exit. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Read/write tasks on startup and exit.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from Persist Tasks to File!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from Persist Tasks to File!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      }
    ],
  },
  {
    id: "ch-4",
    title: "Capstone Project",
    icon: "🏆",
    color: ACCENT,
    lessons: [
      {
        id: "c_projects-4-0",
        title: "Capstone Spec: Library Manager",
        xp: 10,
        chapterTitle: "Capstone Project",
        theory: [
          text("Manage books: add, search, borrow, return. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Manage books: add, search, borrow, return.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from Capstone Spec: Library Manager!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from Capstone Spec: Library Manager!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      },
      {
        id: "c_projects-4-1",
        title: "Implementation: Core Logic",
        xp: 40,
        chapterTitle: "Capstone Project",
        theory: [
          text("Build all features step by step. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Build all features step by step.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from Implementation: Core Logic!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from Implementation: Core Logic!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      },
      {
        id: "c_projects-4-2",
        title: "Polish & Edge Cases",
        xp: 30,
        chapterTitle: "Capstone Project",
        theory: [
          text("Input validation, error messages, clean exit. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Input validation, error messages, clean exit.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from Polish & Edge Cases!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from Polish & Edge Cases!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      }
    ],
  }
];

export const C_PROJECTS_LESSONS = C_PROJECTS_CHAPTERS.flatMap((ch) =>
  ch.lessons.map((l) => ({ ...l, chapterTitle: l.chapterTitle || ch.title }))
);

export const C_PROJECTS_TOTAL_XP = 290;

applyLessonVideoLinks(C_PROJECTS_LESSONS, C_PROJECTS_VIDEO_LINKS);
