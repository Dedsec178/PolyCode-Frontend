// PolyCode — C Functions interactive course
// 5 chapters · 15 lessons · C challenges
// YouTube links: edit c_functionsVideoLinks.js

import { applyLessonVideoLinks } from "../../shared/applyLessonVideoLinks";
import { C_FUNCTIONS_VIDEO_LINKS } from "./c_functionsVideoLinks";

const ACCENT = "#e67e22";

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

export const C_FUNCTIONS_CHAPTERS = [
  {
    id: "ch-0",
    title: "Function Basics",
    icon: "🔧",
    color: ACCENT,
    lessons: [
      {
        id: "c_functions-0-0",
        title: "Declaring & Calling Functions",
        xp: 10,
        chapterTitle: "Function Basics",
        theory: [
          text("Syntax for defining and invoking functions. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Syntax for defining and invoking functions.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from Declaring & Calling Functions!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from Declaring & Calling Functions!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      },
      {
        id: "c_functions-0-1",
        title: "Return Types & void",
        xp: 10,
        chapterTitle: "Function Basics",
        theory: [
          text("What functions give back — or don't. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: What functions give back — or don't.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from Return Types & void!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from Return Types & void!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      },
      {
        id: "c_functions-0-2",
        title: "Function Prototypes",
        xp: 10,
        chapterTitle: "Function Basics",
        theory: [
          text("Forward declarations and header organisation. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Forward declarations and header organisation.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from Function Prototypes!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from Function Prototypes!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      }
    ],
  },
  {
    id: "ch-1",
    title: "Parameters & Arguments",
    icon: "📤",
    color: ACCENT,
    lessons: [
      {
        id: "c_functions-1-0",
        title: "Pass by Value",
        xp: 15,
        chapterTitle: "Parameters & Arguments",
        theory: [
          text("Why C copies arguments and what that means. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Why C copies arguments and what that means.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from Pass by Value!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from Pass by Value!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      },
      {
        id: "c_functions-1-1",
        title: "Multiple Parameters",
        xp: 15,
        chapterTitle: "Parameters & Arguments",
        theory: [
          text("Functions that take several inputs. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Functions that take several inputs.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from Multiple Parameters!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from Multiple Parameters!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      },
      {
        id: "c_functions-1-2",
        title: "Default-like Patterns",
        xp: 15,
        chapterTitle: "Parameters & Arguments",
        theory: [
          text("Simulating default arguments in C. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Simulating default arguments in C.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from Default-like Patterns!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from Default-like Patterns!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      }
    ],
  },
  {
    id: "ch-2",
    title: "Recursion",
    icon: "🔁",
    color: ACCENT,
    lessons: [
      {
        id: "c_functions-2-0",
        title: "What is Recursion?",
        xp: 15,
        chapterTitle: "Recursion",
        theory: [
          text("Base case, recursive case, call stack. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Base case, recursive case, call stack.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from What is Recursion?!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from What is Recursion?!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      },
      {
        id: "c_functions-2-1",
        title: "Factorial & Fibonacci",
        xp: 20,
        chapterTitle: "Recursion",
        theory: [
          text("Classic recursive problems step by step. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Classic recursive problems step by step.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from Factorial & Fibonacci!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from Factorial & Fibonacci!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      },
      {
        id: "c_functions-2-2",
        title: "Tail Recursion",
        xp: 20,
        chapterTitle: "Recursion",
        theory: [
          text("Optimising recursive calls. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Optimising recursive calls.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from Tail Recursion!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from Tail Recursion!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      }
    ],
  },
  {
    id: "ch-3",
    title: "Scope & Storage",
    icon: "📦",
    color: ACCENT,
    lessons: [
      {
        id: "c_functions-3-0",
        title: "Local vs Global Variables",
        xp: 15,
        chapterTitle: "Scope & Storage",
        theory: [
          text("Where variables live and how long they last. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Where variables live and how long they last.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from Local vs Global Variables!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from Local vs Global Variables!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      },
      {
        id: "c_functions-3-1",
        title: "static Variables",
        xp: 15,
        chapterTitle: "Scope & Storage",
        theory: [
          text("Persisting values between calls. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Persisting values between calls.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from static Variables!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from static Variables!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      },
      {
        id: "c_functions-3-2",
        title: "extern Keyword",
        xp: 15,
        chapterTitle: "Scope & Storage",
        theory: [
          text("Sharing variables across files. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Sharing variables across files.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from extern Keyword!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from extern Keyword!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      }
    ],
  },
  {
    id: "ch-4",
    title: "Function Pointers",
    icon: "👉",
    color: ACCENT,
    lessons: [
      {
        id: "c_functions-4-0",
        title: "Pointers to Functions",
        xp: 20,
        chapterTitle: "Function Pointers",
        theory: [
          text("Storing and calling a function via pointer. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Storing and calling a function via pointer.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from Pointers to Functions!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from Pointers to Functions!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      },
      {
        id: "c_functions-4-1",
        title: "Callbacks Pattern",
        xp: 20,
        chapterTitle: "Function Pointers",
        theory: [
          text("Passing behaviour as an argument. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Passing behaviour as an argument.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from Callbacks Pattern!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from Callbacks Pattern!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      },
      {
        id: "c_functions-4-2",
        title: "Capstone: Command Dispatcher",
        xp: 30,
        chapterTitle: "Function Pointers",
        theory: [
          text("Build a menu-driven app using function pointers. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Build a menu-driven app using function pointers.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from Capstone: Command Dispatcher!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from Capstone: Command Dispatcher!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      }
    ],
  }
];

export const C_FUNCTIONS_LESSONS = C_FUNCTIONS_CHAPTERS.flatMap((ch) =>
  ch.lessons.map((l) => ({ ...l, chapterTitle: l.chapterTitle || ch.title }))
);

export const C_FUNCTIONS_TOTAL_XP = 245;

applyLessonVideoLinks(C_FUNCTIONS_LESSONS, C_FUNCTIONS_VIDEO_LINKS);
