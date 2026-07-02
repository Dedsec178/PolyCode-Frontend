// PolyCode — C File Handling interactive course
// 5 chapters · 15 lessons · C challenges
// YouTube links: edit c_file_handlingVideoLinks.js

import { applyLessonVideoLinks } from "../../shared/applyLessonVideoLinks";
import { C_FILE_HANDLING_VIDEO_LINKS } from "./c_file_handlingVideoLinks";

const ACCENT = "#27ae60";

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

export const C_FILE_HANDLING_CHAPTERS = [
  {
    id: "ch-0",
    title: "File Basics",
    icon: "📁",
    color: ACCENT,
    lessons: [
      {
        id: "c_file_handling-0-0",
        title: "What is a File in C?",
        xp: 10,
        chapterTitle: "File Basics",
        theory: [
          text("FILE* pointer and the file abstraction. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: FILE* pointer and the file abstraction.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from What is a File in C?!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from What is a File in C?!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      },
      {
        id: "c_file_handling-0-1",
        title: "fopen & fclose",
        xp: 10,
        chapterTitle: "File Basics",
        theory: [
          text("Opening modes: r, w, a, rb, wb. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Opening modes: r, w, a, rb, wb.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from fopen & fclose!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from fopen & fclose!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      },
      {
        id: "c_file_handling-0-2",
        title: "Error Handling with Files",
        xp: 10,
        chapterTitle: "File Basics",
        theory: [
          text("Checking fopen return value and errno. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Checking fopen return value and errno.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from Error Handling with Files!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from Error Handling with Files!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      }
    ],
  },
  {
    id: "ch-1",
    title: "Reading Files",
    icon: "📖",
    color: ACCENT,
    lessons: [
      {
        id: "c_file_handling-1-0",
        title: "fgetc & fgets",
        xp: 15,
        chapterTitle: "Reading Files",
        theory: [
          text("Character-by-character and line-by-line reading. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Character-by-character and line-by-line reading.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from fgetc & fgets!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from fgetc & fgets!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      },
      {
        id: "c_file_handling-1-1",
        title: "fscanf",
        xp: 15,
        chapterTitle: "Reading Files",
        theory: [
          text("Formatted reading from a file. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Formatted reading from a file.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from fscanf!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from fscanf!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      },
      {
        id: "c_file_handling-1-2",
        title: "fread — binary reads",
        xp: 15,
        chapterTitle: "Reading Files",
        theory: [
          text("Reading raw bytes into a buffer. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Reading raw bytes into a buffer.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from fread — binary reads!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from fread — binary reads!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      }
    ],
  },
  {
    id: "ch-2",
    title: "Writing Files",
    icon: "✏️",
    color: ACCENT,
    lessons: [
      {
        id: "c_file_handling-2-0",
        title: "fputc & fputs",
        xp: 15,
        chapterTitle: "Writing Files",
        theory: [
          text("Writing characters and strings. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Writing characters and strings.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from fputc & fputs!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from fputc & fputs!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      },
      {
        id: "c_file_handling-2-1",
        title: "fprintf",
        xp: 15,
        chapterTitle: "Writing Files",
        theory: [
          text("Formatted output to a file. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Formatted output to a file.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from fprintf!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from fprintf!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      },
      {
        id: "c_file_handling-2-2",
        title: "fwrite — binary writes",
        xp: 15,
        chapterTitle: "Writing Files",
        theory: [
          text("Writing raw bytes from memory. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Writing raw bytes from memory.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from fwrite — binary writes!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from fwrite — binary writes!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      }
    ],
  },
  {
    id: "ch-3",
    title: "File Navigation",
    icon: "🧭",
    color: ACCENT,
    lessons: [
      {
        id: "c_file_handling-3-0",
        title: "fseek & ftell",
        xp: 20,
        chapterTitle: "File Navigation",
        theory: [
          text("Moving the file position indicator. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Moving the file position indicator.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from fseek & ftell!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from fseek & ftell!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      },
      {
        id: "c_file_handling-3-1",
        title: "rewind",
        xp: 10,
        chapterTitle: "File Navigation",
        theory: [
          text("Reset to the beginning. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Reset to the beginning.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from rewind!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from rewind!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      },
      {
        id: "c_file_handling-3-2",
        title: "feof & ferror",
        xp: 15,
        chapterTitle: "File Navigation",
        theory: [
          text("Detecting end-of-file and errors. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Detecting end-of-file and errors.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from feof & ferror!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from feof & ferror!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      }
    ],
  },
  {
    id: "ch-4",
    title: "Practical Projects",
    icon: "🗂️",
    color: ACCENT,
    lessons: [
      {
        id: "c_file_handling-4-0",
        title: "Reading a CSV in C",
        xp: 20,
        chapterTitle: "Practical Projects",
        theory: [
          text("Parse a comma-separated file line by line. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Parse a comma-separated file line by line.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from Reading a CSV in C!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from Reading a CSV in C!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      },
      {
        id: "c_file_handling-4-1",
        title: "Binary File Store",
        xp: 25,
        chapterTitle: "Practical Projects",
        theory: [
          text("Save and load a struct to/from binary file. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: Save and load a struct to/from binary file.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from Binary File Store!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from Binary File Store!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      },
      {
        id: "c_file_handling-4-2",
        title: "Capstone: Note Saver App",
        xp: 30,
        chapterTitle: "Practical Projects",
        theory: [
          text("CLI tool that reads and writes plain-text notes. This lesson covers the essential concepts with clear examples and a hands-on C challenge."),
          callout("info", "C is a compiled language — every program you write here runs real C code through the compiler."),
          quiz(
            "What is the correct way to declare an integer variable in C?",
            ["integer x = 5;", "int x = 5;", "var x = 5;", "number x = 5;"],
            1,
            "In C, the integer type keyword is `int`. Declarations follow the pattern: type name = value;"
          ),
        ],
        challenge: {
          instructions: "Write a C program that demonstrates: CLI tool that reads and writes plain-text notes.",
          starterCode: `#include <stdio.h>\n\nint main() {\n    // Your code here\n    printf("Hello from Capstone: Note Saver App!\\n");\n    return 0;\n}`,
          solution: `#include <stdio.h>\n\nint main() {\n    printf("Hello from Capstone: Note Saver App!\\n");\n    return 0;\n}`,
          tests: [{ id: "t1", label: "Program runs without error", hint: "Make sure main() returns 0." }],
        },
      }
    ],
  }
];

export const C_FILE_HANDLING_LESSONS = C_FILE_HANDLING_CHAPTERS.flatMap((ch) =>
  ch.lessons.map((l) => ({ ...l, chapterTitle: l.chapterTitle || ch.title }))
);

export const C_FILE_HANDLING_TOTAL_XP = 240;

applyLessonVideoLinks(C_FILE_HANDLING_LESSONS, C_FILE_HANDLING_VIDEO_LINKS);
