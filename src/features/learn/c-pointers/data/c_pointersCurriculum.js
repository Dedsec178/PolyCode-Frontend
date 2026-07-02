// PolyCode — C Pointers interactive course
// 5 chapters · 15 lessons · C challenges
// YouTube links: edit c_pointersVideoLinks.js

import { applyLessonVideoLinks } from "../../shared/applyLessonVideoLinks";
import { C_POINTERS_VIDEO_LINKS } from "./c_pointersVideoLinks";

const ACCENT = "#e74c3c";

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

export const C_POINTERS_CHAPTERS = [
  {
    id: "ch-0",
    title: "Pointer Basics",
    icon: "📍",
    color: ACCENT,
    lessons: [
      {
        id: "c_pointers-0-0",
        title: "What is a Pointer?",
        xp: 10,
        chapterTitle: "Pointer Basics",
        theory: [
          text("Memory addresses and the & operator. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Memory addresses and the & operator.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from What is a Pointer?!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from What is a Pointer?!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      },
      {
        id: "c_pointers-0-1",
        title: "Dereferencing with *",
        xp: 10,
        chapterTitle: "Pointer Basics",
        theory: [
          text("Reading and writing via a pointer. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Reading and writing via a pointer.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from Dereferencing with *!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from Dereferencing with *!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      },
      {
        id: "c_pointers-0-2",
        title: "NULL Pointer",
        xp: 10,
        chapterTitle: "Pointer Basics",
        theory: [
          text("The safe 'no address' value. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: The safe 'no address' value.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from NULL Pointer!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from NULL Pointer!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      }
    ],
  },
  {
    id: "ch-1",
    title: "Pointer Arithmetic",
    icon: "➕",
    color: ACCENT,
    lessons: [
      {
        id: "c_pointers-1-0",
        title: "Incrementing Pointers",
        xp: 15,
        chapterTitle: "Pointer Arithmetic",
        theory: [
          text("How ++ptr moves by type size. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: How ++ptr moves by type size.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from Incrementing Pointers!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from Incrementing Pointers!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      },
      {
        id: "c_pointers-1-1",
        title: "Pointer Subtraction",
        xp: 15,
        chapterTitle: "Pointer Arithmetic",
        theory: [
          text("Distance between two pointers. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Distance between two pointers.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from Pointer Subtraction!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from Pointer Subtraction!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      },
      {
        id: "c_pointers-1-2",
        title: "Comparing Pointers",
        xp: 15,
        chapterTitle: "Pointer Arithmetic",
        theory: [
          text("When pointer comparison is valid. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: When pointer comparison is valid.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from Comparing Pointers!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from Comparing Pointers!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      }
    ],
  },
  {
    id: "ch-2",
    title: "Pointers & Arrays",
    icon: "📚",
    color: ACCENT,
    lessons: [
      {
        id: "c_pointers-2-0",
        title: "Array Name as Pointer",
        xp: 15,
        chapterTitle: "Pointers & Arrays",
        theory: [
          text("Why arr == &arr[0]. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Why arr == &arr[0].",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from Array Name as Pointer!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from Array Name as Pointer!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      },
      {
        id: "c_pointers-2-1",
        title: "Iterating with Pointers",
        xp: 15,
        chapterTitle: "Pointers & Arrays",
        theory: [
          text("Traverse an array using pointer arithmetic. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Traverse an array using pointer arithmetic.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from Iterating with Pointers!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from Iterating with Pointers!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      },
      {
        id: "c_pointers-2-2",
        title: "2D Arrays & Pointers",
        xp: 20,
        chapterTitle: "Pointers & Arrays",
        theory: [
          text("Row-major layout and double indexing. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Row-major layout and double indexing.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from 2D Arrays & Pointers!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from 2D Arrays & Pointers!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      }
    ],
  },
  {
    id: "ch-3",
    title: "Pointers & Strings",
    icon: "🔤",
    color: ACCENT,
    lessons: [
      {
        id: "c_pointers-3-0",
        title: "char* vs char[]",
        xp: 15,
        chapterTitle: "Pointers & Strings",
        theory: [
          text("String literals vs mutable character arrays. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: String literals vs mutable character arrays.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from char* vs char[]!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from char* vs char[]!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      },
      {
        id: "c_pointers-3-1",
        title: "String Functions & Pointers",
        xp: 15,
        chapterTitle: "Pointers & Strings",
        theory: [
          text("strcpy, strlen, strcat under the hood. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: strcpy, strlen, strcat under the hood.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from String Functions & Pointers!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from String Functions & Pointers!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      },
      {
        id: "c_pointers-3-2",
        title: "Array of Strings",
        xp: 15,
        chapterTitle: "Pointers & Strings",
        theory: [
          text("char* argv[] pattern explained. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: char* argv[] pattern explained.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from Array of Strings!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from Array of Strings!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      }
    ],
  },
  {
    id: "ch-4",
    title: "Advanced Pointers",
    icon: "⚡",
    color: ACCENT,
    lessons: [
      {
        id: "c_pointers-4-0",
        title: "Double Pointers (**)",
        xp: 20,
        chapterTitle: "Advanced Pointers",
        theory: [
          text("Pointer to a pointer — when and why. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Pointer to a pointer — when and why.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from Double Pointers (**)!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from Double Pointers (**)!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      },
      {
        id: "c_pointers-4-1",
        title: "Pointers to Structs",
        xp: 20,
        chapterTitle: "Advanced Pointers",
        theory: [
          text("The -> operator and struct navigation. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: The -> operator and struct navigation.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from Pointers to Structs!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from Pointers to Structs!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      },
      {
        id: "c_pointers-4-2",
        title: "Capstone: Linked List Node",
        xp: 30,
        chapterTitle: "Advanced Pointers",
        theory: [
          text("Build a basic node using structs and pointers. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Build a basic node using structs and pointers.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from Capstone: Linked List Node!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from Capstone: Linked List Node!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      }
    ],
  }
];

export const C_POINTERS_LESSONS = C_POINTERS_CHAPTERS.flatMap((ch) =>
  ch.lessons.map((l) => ({ ...l, chapterTitle: l.chapterTitle || ch.title }))
);

export const C_POINTERS_TOTAL_XP = 240;

applyLessonVideoLinks(C_POINTERS_LESSONS, C_POINTERS_VIDEO_LINKS);
