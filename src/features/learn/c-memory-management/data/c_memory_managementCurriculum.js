// PolyCode — C Memory Management interactive course
// 5 chapters · 15 lessons · C challenges
// YouTube links: edit c_memory_managementVideoLinks.js

import { applyLessonVideoLinks } from "../../shared/applyLessonVideoLinks";
import { C_MEMORY_MANAGEMENT_VIDEO_LINKS } from "./c_memory_managementVideoLinks";

const ACCENT = "#8e44ad";

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

export const C_MEMORY_MANAGEMENT_CHAPTERS = [
  {
    id: "ch-0",
    title: "Memory Layout",
    icon: "🗺️",
    color: ACCENT,
    lessons: [
      {
        id: "c_memory_management-0-0",
        title: "Stack vs Heap",
        xp: 10,
        chapterTitle: "Memory Layout",
        theory: [
          text("The two memory regions every C programmer must know. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: The two memory regions every C programmer must know.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from Stack vs Heap!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from Stack vs Heap!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      },
      {
        id: "c_memory_management-0-1",
        title: "Code, Data, BSS Segments",
        xp: 10,
        chapterTitle: "Memory Layout",
        theory: [
          text("Where global and static variables live. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Where global and static variables live.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from Code, Data, BSS Segments!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from Code, Data, BSS Segments!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      },
      {
        id: "c_memory_management-0-2",
        title: "Memory Addresses",
        xp: 10,
        chapterTitle: "Memory Layout",
        theory: [
          text("Reading addresses with %p. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Reading addresses with %p.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from Memory Addresses!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from Memory Addresses!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      }
    ],
  },
  {
    id: "ch-1",
    title: "Dynamic Allocation",
    icon: "💾",
    color: ACCENT,
    lessons: [
      {
        id: "c_memory_management-1-0",
        title: "malloc — allocate memory",
        xp: 15,
        chapterTitle: "Dynamic Allocation",
        theory: [
          text("Request heap memory and get a pointer back. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Request heap memory and get a pointer back.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from malloc — allocate memory!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from malloc — allocate memory!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      },
      {
        id: "c_memory_management-1-1",
        title: "free — release memory",
        xp: 15,
        chapterTitle: "Dynamic Allocation",
        theory: [
          text("Returning memory to the OS. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Returning memory to the OS.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from free — release memory!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from free — release memory!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      },
      {
        id: "c_memory_management-1-2",
        title: "NULL check after malloc",
        xp: 15,
        chapterTitle: "Dynamic Allocation",
        theory: [
          text("Always check if allocation succeeded. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Always check if allocation succeeded.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from NULL check after malloc!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from NULL check after malloc!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      }
    ],
  },
  {
    id: "ch-2",
    title: "calloc & realloc",
    icon: "🔄",
    color: ACCENT,
    lessons: [
      {
        id: "c_memory_management-2-0",
        title: "calloc — zero-initialised",
        xp: 15,
        chapterTitle: "calloc & realloc",
        theory: [
          text("Allocate and zero-fill in one step. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Allocate and zero-fill in one step.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from calloc — zero-initialised!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from calloc — zero-initialised!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      },
      {
        id: "c_memory_management-2-1",
        title: "realloc — resize memory",
        xp: 20,
        chapterTitle: "calloc & realloc",
        theory: [
          text("Growing or shrinking a heap block. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Growing or shrinking a heap block.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from realloc — resize memory!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from realloc — resize memory!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      },
      {
        id: "c_memory_management-2-2",
        title: "Combining malloc & realloc",
        xp: 20,
        chapterTitle: "calloc & realloc",
        theory: [
          text("Dynamic array growth pattern. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Dynamic array growth pattern.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from Combining malloc & realloc!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from Combining malloc & realloc!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      }
    ],
  },
  {
    id: "ch-3",
    title: "Memory Safety",
    icon: "🛡️",
    color: ACCENT,
    lessons: [
      {
        id: "c_memory_management-3-0",
        title: "Memory Leaks",
        xp: 15,
        chapterTitle: "Memory Safety",
        theory: [
          text("What they are and how to detect them. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: What they are and how to detect them.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from Memory Leaks!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from Memory Leaks!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      },
      {
        id: "c_memory_management-3-1",
        title: "Dangling Pointers",
        xp: 15,
        chapterTitle: "Memory Safety",
        theory: [
          text("Using memory after free — undefined behaviour. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Using memory after free — undefined behaviour.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from Dangling Pointers!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from Dangling Pointers!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      },
      {
        id: "c_memory_management-3-2",
        title: "Buffer Overflows",
        xp: 20,
        chapterTitle: "Memory Safety",
        theory: [
          text("Writing past array bounds and consequences. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Writing past array bounds and consequences.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from Buffer Overflows!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from Buffer Overflows!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      }
    ],
  },
  {
    id: "ch-4",
    title: "Practical Patterns",
    icon: "⚙️",
    color: ACCENT,
    lessons: [
      {
        id: "c_memory_management-4-0",
        title: "Dynamic Array",
        xp: 20,
        chapterTitle: "Practical Patterns",
        theory: [
          text("Build a resizable array from scratch. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Build a resizable array from scratch.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from Dynamic Array!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from Dynamic Array!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      },
      {
        id: "c_memory_management-4-1",
        title: "Safe Free Pattern",
        xp: 15,
        chapterTitle: "Practical Patterns",
        theory: [
          text("Set pointer to NULL after free. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Set pointer to NULL after free.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from Safe Free Pattern!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from Safe Free Pattern!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      },
      {
        id: "c_memory_management-4-2",
        title: "Capstone: Dynamic String Builder",
        xp: 30,
        chapterTitle: "Practical Patterns",
        theory: [
          text("Allocate and grow a string on the heap. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Allocate and grow a string on the heap.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from Capstone: Dynamic String Builder!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from Capstone: Dynamic String Builder!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      }
    ],
  }
];

export const C_MEMORY_MANAGEMENT_LESSONS = C_MEMORY_MANAGEMENT_CHAPTERS.flatMap((ch) =>
  ch.lessons.map((l) => ({ ...l, chapterTitle: l.chapterTitle || ch.title }))
);

export const C_MEMORY_MANAGEMENT_TOTAL_XP = 245;

applyLessonVideoLinks(C_MEMORY_MANAGEMENT_LESSONS, C_MEMORY_MANAGEMENT_VIDEO_LINKS);
