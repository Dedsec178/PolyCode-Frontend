// PolyCode — C# File Handling Interactive Course
// 3 chapters · 6 lessons · Browser sandbox validation
// Follows the exact same content shape as csharp-oop/data/csharpOopCurriculum.js

const ACCENT = "#179c24"; // Distinct .NET Green branding color

function quiz(question, options, answer, explanation) {
  return { type: "quiz", question, options, answer, explanation };
}

function callout(variant, content) {
  return { type: "callout", variant, content };
}

function text(content, codeBlock = null) {
  if (codeBlock) {
    return {
      type: "text",
      content,
      code: { lang: "csharp", ...codeBlock },
    };
  }
  return { type: "text", content };
}

const RAW_CSHARP_FILE_HANDLING_CHAPTERS = [
  {
    id: "reading-writing-files",
    title: "Reading & Writing Files",
    icon: "📄",
    color: ACCENT,
    lessons: [
      {
        id: "cs-file-0",
        title: "Writing Text Files",
        xp: 13,
        theory: [
          text(
            "The `System.IO` namespace's `File` class provides simple static methods for reading and writing files without manually managing streams.",
            {
              label: "Writing a text file",
              content: `using System.IO;

File.WriteAllText("notes.txt", "Hello, PolyCode!");

// Append instead of overwrite
File.AppendAllText("notes.txt", "\\nSecond line.");`,
            },
          ),
          text(
            "`WriteAllText` **overwrites** the file each time it's called. Use `AppendAllText` if you want to add to the end without erasing what's already there.",
          ),
          callout(
            "warn",
            "`WriteAllText` will happily overwrite an existing file with no warning — always double check the path before writing.",
          ),
          quiz(
            "What's the difference between File.WriteAllText and File.AppendAllText?",
            [
              "There is no difference",
              "WriteAllText overwrites the file; AppendAllText adds to the end",
              "AppendAllText only works with numbers",
              "WriteAllText is faster but less safe",
            ],
            1,
            "WriteAllText replaces the file's entire contents. AppendAllText adds new content to the end, keeping what was already there.",
          ),
        ],
        challenge: {
          title: "Write a Log Entry",
          description:
            "Use `File.WriteAllText` to write the string `\"Log started\"` to a file named `\"log.txt\"`. Then use `File.AppendAllText` to add `\"\\nUser logged in\"`.",
          starterCode: `using System;
using System.IO;

class Program {
    static void Main() {
        // Write "Log started" to log.txt


        // Append "\\nUser logged in"

    }
}`,
          solutionCode: `using System;
using System.IO;

class Program {
    static void Main() {
        File.WriteAllText("log.txt", "Log started");
        File.AppendAllText("log.txt", "\\nUser logged in");
    }
}`,
          tests: [
            {
              id: 1,
              label: "Uses File.WriteAllText",
              keywords: [{ pattern: "File\\.WriteAllText" }],
            },
            {
              id: 2,
              label: "Uses File.AppendAllText",
              keywords: [{ pattern: "File\\.AppendAllText" }],
            },
            {
              id: 3,
              label: "Writes to log.txt",
              keywords: [{ pattern: "\"log\\.txt\"" }],
            },
          ],
        },
      },
      {
        id: "cs-file-1",
        title: "Reading Text Files",
        xp: 13,
        theory: [
          text(
            "`File.ReadAllText` reads an entire file into a single string. `File.ReadAllLines` reads it into a `string[]`, one entry per line — often more useful for processing.",
            {
              label: "Reading a file",
              content: `using System.IO;

string content = File.ReadAllText("notes.txt");
Console.WriteLine(content);

string[] lines = File.ReadAllLines("notes.txt");
foreach (string line in lines) {
    Console.WriteLine(line);
}`,
            },
          ),
          callout(
            "tip",
            "Reading a file that doesn't exist throws a `FileNotFoundException`. Check `File.Exists(path)` first if the file might be missing.",
          ),
          quiz(
            "Which method reads a file into a string[] with one entry per line?",
            [
              "File.ReadAllText",
              "File.ReadAllLines",
              "File.ReadLine",
              "File.OpenText",
            ],
            1,
            "`File.ReadAllLines` splits the file content by line breaks and returns a `string[]`.",
          ),
        ],
        challenge: {
          title: "Count Lines in a File",
          description:
            "Use `File.ReadAllLines(\"notes.txt\")` to read the file into a `string[]` named `lines`, then print `lines.Length`.",
          starterCode: `using System;
using System.IO;

class Program {
    static void Main() {
        // Read notes.txt into "lines" and print its length

    }
}`,
          solutionCode: `using System;
using System.IO;

class Program {
    static void Main() {
        string[] lines = File.ReadAllLines("notes.txt");
        Console.WriteLine(lines.Length);
    }
}`,
          tests: [
            {
              id: 1,
              label: "Uses File.ReadAllLines",
              keywords: [{ pattern: "File\\.ReadAllLines" }],
            },
            {
              id: 2,
              label: "Stores result in a string array",
              keywords: [{ pattern: "string\\[\\]\\s+lines" }],
            },
            {
              id: 3,
              label: "Prints lines.Length",
              keywords: [{ pattern: "lines\\.Length" }],
            },
          ],
        },
      },
    ],
  },
  {
    id: "checking-managing-files",
    title: "Checking & Managing Files",
    icon: "🗂️",
    color: ACCENT,
    lessons: [
      {
        id: "cs-file-2",
        title: "File.Exists, Delete, and Copy",
        xp: 14,
        theory: [
          text(
            "Before reading or writing, it's good practice to check whether a file exists using `File.Exists(path)`, which returns a `bool` and never throws.",
            {
              label: "Checking, deleting, copying",
              content: `using System.IO;

if (File.Exists("notes.txt")) {
    Console.WriteLine("File found!");
}

File.Copy("notes.txt", "notes_backup.txt", overwrite: true);
File.Delete("old_log.txt");`,
            },
          ),
          callout(
            "warn",
            "`File.Delete` does not throw if the file is missing — it simply does nothing. Always confirm important deletes with `File.Exists` first if you need to know whether anything was actually removed.",
          ),
          quiz(
            "What does File.Exists(path) return if the path doesn't point to a real file?",
            [
              "Throws a FileNotFoundException",
              "false",
              "null",
              "Creates the file automatically",
            ],
            1,
            "File.Exists safely returns false for a missing path — it never throws, which is why it's the standard way to guard file operations.",
          ),
        ],
        challenge: {
          title: "Safe Backup",
          description:
            "Check if `\"data.txt\"` exists with `File.Exists`. If it does, copy it to `\"data_backup.txt\"` using `File.Copy` with `overwrite: true`.",
          starterCode: `using System;
using System.IO;

class Program {
    static void Main() {
        // If data.txt exists, copy it to data_backup.txt

    }
}`,
          solutionCode: `using System;
using System.IO;

class Program {
    static void Main() {
        if (File.Exists("data.txt")) {
            File.Copy("data.txt", "data_backup.txt", overwrite: true);
        }
    }
}`,
          tests: [
            {
              id: 1,
              label: "Uses File.Exists",
              keywords: [{ pattern: "File\\.Exists" }],
            },
            {
              id: 2,
              label: "Uses File.Copy",
              keywords: [{ pattern: "File\\.Copy" }],
            },
            {
              id: 3,
              label: "Copies to data_backup.txt",
              keywords: [{ pattern: "\"data_backup\\.txt\"" }],
            },
          ],
        },
      },
      {
        id: "cs-file-3",
        title: "Working with Directories",
        xp: 13,
        theory: [
          text(
            "The `Directory` class mirrors `File` but works on folders — creating them, checking existence, and listing their contents.",
            {
              label: "Directory operations",
              content: `using System.IO;

if (!Directory.Exists("logs")) {
    Directory.CreateDirectory("logs");
}

string[] files = Directory.GetFiles("logs");
Console.WriteLine(files.Length);`,
            },
          ),
          callout(
            "tip",
            "`Directory.CreateDirectory` is safe to call even if the directory already exists — it just does nothing in that case, unlike some other languages' APIs.",
          ),
          quiz(
            "What happens if you call Directory.CreateDirectory on a folder that already exists?",
            [
              "It throws an exception",
              "It silently succeeds with no error",
              "It deletes and recreates the folder",
              "It renames the existing folder",
            ],
            1,
            "Directory.CreateDirectory is idempotent — calling it on an existing directory is a safe no-op.",
          ),
        ],
        challenge: {
          title: "Ensure Logs Folder Exists",
          description:
            "Check if a directory named `\"logs\"` exists using `Directory.Exists`. If it doesn't, create it with `Directory.CreateDirectory`.",
          starterCode: `using System;
using System.IO;

class Program {
    static void Main() {
        // Ensure the "logs" directory exists

    }
}`,
          solutionCode: `using System;
using System.IO;

class Program {
    static void Main() {
        if (!Directory.Exists("logs")) {
            Directory.CreateDirectory("logs");
        }
    }
}`,
          tests: [
            {
              id: 1,
              label: "Uses Directory.Exists",
              keywords: [{ pattern: "Directory\\.Exists" }],
            },
            {
              id: 2,
              label: "Uses Directory.CreateDirectory",
              keywords: [{ pattern: "Directory\\.CreateDirectory" }],
            },
            {
              id: 3,
              label: "Targets the logs folder",
              keywords: [{ pattern: "\"logs\"" }],
            },
          ],
        },
      },
    ],
  },
  {
    id: "streams-exceptions",
    title: "Streams & Exception Safety",
    icon: "🛡️",
    color: ACCENT,
    lessons: [
      {
        id: "cs-file-4",
        title: "StreamWriter and StreamReader",
        xp: 14,
        theory: [
          text(
            "For large files or line-by-line processing, `StreamWriter` and `StreamReader` are more efficient than loading everything into memory at once. Wrap them in a `using` block so they're closed automatically.",
            {
              label: "Streaming reads and writes",
              content: `using System.IO;

using (StreamWriter writer = new StreamWriter("big.txt")) {
    writer.WriteLine("Line one");
    writer.WriteLine("Line two");
}

using (StreamReader reader = new StreamReader("big.txt")) {
    string line;
    while ((line = reader.ReadLine()) != null) {
        Console.WriteLine(line);
    }
}`,
            },
          ),
          callout(
            "tip",
            "A `using` block automatically calls `Dispose()` on the stream when the block ends — even if an exception is thrown — which releases the file handle. Always wrap streams this way.",
          ),
          quiz(
            "Why wrap a StreamWriter in a using block?",
            [
              "It's required by the compiler",
              "It automatically closes and releases the file when done, even on error",
              "It makes the code run faster",
              "It's only needed for reading, not writing",
            ],
            1,
            "The using block guarantees Dispose() runs, closing the file handle — critical for avoiding locked or corrupted files, especially if an exception occurs mid-write.",
          ),
        ],
        challenge: {
          title: "Stream-Write Three Lines",
          description:
            "Use a `using (StreamWriter writer = new StreamWriter(\"out.txt\"))` block to write three lines: `\"one\"`, `\"two\"`, `\"three\"`, each with `writer.WriteLine`.",
          starterCode: `using System;
using System.IO;

class Program {
    static void Main() {
        // Use a StreamWriter in a using block to write three lines

    }
}`,
          solutionCode: `using System;
using System.IO;

class Program {
    static void Main() {
        using (StreamWriter writer = new StreamWriter("out.txt")) {
            writer.WriteLine("one");
            writer.WriteLine("two");
            writer.WriteLine("three");
        }
    }
}`,
          tests: [
            {
              id: 1,
              label: "Uses a using block with StreamWriter",
              keywords: [{ pattern: "using\\s*\\(StreamWriter" }],
            },
            {
              id: 2,
              label: "Calls WriteLine at least once",
              keywords: [{ pattern: "writer\\.WriteLine" }],
            },
            {
              id: 3,
              label: "Writes to out.txt",
              keywords: [{ pattern: "\"out\\.txt\"" }],
            },
          ],
        },
      },
      {
        id: "cs-file-5",
        title: "Handling File Errors with try/catch",
        xp: 13,
        theory: [
          text(
            "File operations can fail for reasons outside your control — missing files, permissions, a locked file. Wrap risky file code in `try`/`catch` to handle these gracefully instead of crashing.",
            {
              label: "Safe file reading",
              content: `using System;
using System.IO;

try {
    string content = File.ReadAllText("config.txt");
    Console.WriteLine(content);
} catch (FileNotFoundException) {
    Console.WriteLine("Config file is missing — using defaults.");
} catch (UnauthorizedAccessException) {
    Console.WriteLine("No permission to read this file.");
}`,
            },
          ),
          callout(
            "tip",
            "Catch the **most specific** exception type first (like `FileNotFoundException`), and fall back to a general `catch (Exception ex)` only if you need a catch-all.",
          ),
          quiz(
            "Why catch specific exception types like FileNotFoundException instead of just Exception?",
            [
              "It's not possible to catch specific types in C#",
              "Specific catches let you respond differently to different failure causes",
              "General Exception catches run faster",
              "It has no practical difference",
            ],
            1,
            "Catching specific exception types lets your program react appropriately — e.g. use default settings for a missing file vs. prompting for permissions on access errors.",
          ),
        ],
        challenge: {
          title: "Safe Config Read",
          description:
            "Wrap `File.ReadAllText(\"config.txt\")` in a `try`/`catch` block. In the `catch (FileNotFoundException)` block, print `\"Config file is missing\"`.",
          starterCode: `using System;
using System.IO;

class Program {
    static void Main() {
        // Try reading config.txt; catch FileNotFoundException

    }
}`,
          solutionCode: `using System;
using System.IO;

class Program {
    static void Main() {
        try {
            string content = File.ReadAllText("config.txt");
            Console.WriteLine(content);
        } catch (FileNotFoundException) {
            Console.WriteLine("Config file is missing");
        }
    }
}`,
          tests: [
            {
              id: 1,
              label: "Uses a try block",
              keywords: [{ pattern: "try\\s*\\{" }],
            },
            {
              id: 2,
              label: "Catches FileNotFoundException",
              keywords: [{ pattern: "catch\\s*\\(FileNotFoundException\\)" }],
            },
            {
              id: 3,
              label: "Reads config.txt",
              keywords: [{ pattern: "\"config\\.txt\"" }],
            },
          ],
        },
      },
    ],
  },
];

export const CSHARP_FILE_HANDLING_CHAPTERS = RAW_CSHARP_FILE_HANDLING_CHAPTERS;

export const CSHARP_FILE_HANDLING_LESSONS = CSHARP_FILE_HANDLING_CHAPTERS.flatMap(
  (ch) =>
    ch.lessons.map((l) => ({
      ...l,
      chapterId: ch.id,
      chapterTitle: ch.title,
      chapterColor: ch.color,
    })),
);

export const CSHARP_FILE_HANDLING_TOTAL_XP = CSHARP_FILE_HANDLING_LESSONS.reduce(
  (s, l) => s + l.xp,
  0,
);
