// PolyCode — C# LINQ Interactive Course
// 3 chapters · 7 lessons · Browser sandbox validation
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

const RAW_CSHARP_LINQ_CHAPTERS = [
  {
    id: "linq-basics",
    title: "LINQ Basics",
    icon: "🔍",
    color: ACCENT,
    lessons: [
      {
        id: "cs-linq-0",
        title: "What is LINQ?",
        xp: 12,
        theory: [
          text(
            "**LINQ** (Language Integrated Query) lets you query collections — arrays, lists, dictionaries — using a consistent, readable syntax, instead of writing manual loops.",
            {
              label: "A loop vs. LINQ",
              content: `using System.Linq;
using System.Collections.Generic;

List<int> nums = new List<int> { 1, 2, 3, 4, 5, 6 };

// Manual loop
List<int> evens1 = new List<int>();
foreach (int n in nums) {
    if (n % 2 == 0) evens1.Add(n);
}

// LINQ
var evens2 = nums.Where(n => n % 2 == 0).ToList();`,
            },
          ),
          text(
            "LINQ methods live in `System.Linq` and are called directly on any `IEnumerable<T>` — which includes arrays, `List<T>`, and `Dictionary<T>` values.",
          ),
          callout(
            "tip",
            "Always add `using System.Linq;` at the top of a file before using LINQ methods like `Where`, `Select`, or `OrderBy`.",
          ),
          quiz(
            "What does LINQ stand for?",
            [
              "Linear Iteration Query",
              "Language Integrated Query",
              "List Interface Query",
              "Logical In-memory Query",
            ],
            1,
            "LINQ = Language Integrated Query — it brings query syntax directly into C#.",
          ),
        ],
        challenge: {
          title: "Filter Evens with LINQ",
          description:
            "Given `List<int> nums = { 1, 2, 3, 4, 5, 6 }`, use `Where` to filter even numbers into a new list called `evens`, then print its count.",
          starterCode: `using System;
using System.Linq;
using System.Collections.Generic;

class Program {
    static void Main() {
        List<int> nums = new List<int> { 1, 2, 3, 4, 5, 6 };
        // Use Where() to filter evens, store in "evens"


        // Print evens.Count

    }
}`,
          solutionCode: `using System;
using System.Linq;
using System.Collections.Generic;

class Program {
    static void Main() {
        List<int> nums = new List<int> { 1, 2, 3, 4, 5, 6 };
        var evens = nums.Where(n => n % 2 == 0).ToList();
        Console.WriteLine(evens.Count);
    }
}`,
          tests: [
            {
              id: 1,
              label: "Uses Where()",
              keywords: [{ pattern: "\\.Where\\(" }],
            },
            {
              id: 2,
              label: "Checks n % 2 == 0",
              keywords: [{ pattern: "%\\s*2\\s*==\\s*0" }],
            },
            {
              id: 3,
              label: "Prints evens.Count",
              keywords: [{ pattern: "evens\\.Count" }],
            },
          ],
        },
      },
      {
        id: "cs-linq-1",
        title: "Select — Projecting Data",
        xp: 13,
        theory: [
          text(
            "`Select` transforms every element in a collection into something new — it **projects** each item, similar to `.map()` in other languages.",
            {
              label: "Transforming with Select",
              content: `List<int> nums = new List<int> { 1, 2, 3 };
var squares = nums.Select(n => n * n).ToList();
// squares: [1, 4, 9]

List<string> names = new List<string> { "ana", "bo" };
var upper = names.Select(n => n.ToUpper()).ToList();
// upper: ["ANA", "BO"]`,
            },
          ),
          callout(
            "tip",
            "`Where` filters (keeps some elements), `Select` transforms (changes every element). They're often chained together: `nums.Where(...).Select(...)`.",
          ),
          quiz(
            "Which LINQ method transforms each element into a new shape?",
            ["Where", "Select", "First", "Count"],
            1,
            "`Select` projects each input element to a new output value — it always returns the same number of elements as the input.",
          ),
        ],
        challenge: {
          title: "Double the Prices",
          description:
            "Given `List<double> prices = { 10, 20, 30 }`, use `Select` to create a new list `doubled` where every price is multiplied by 2, then print the first element.",
          starterCode: `using System;
using System.Linq;
using System.Collections.Generic;

class Program {
    static void Main() {
        List<double> prices = new List<double> { 10, 20, 30 };
        // Use Select() to double each price


        // Print doubled[0]

    }
}`,
          solutionCode: `using System;
using System.Linq;
using System.Collections.Generic;

class Program {
    static void Main() {
        List<double> prices = new List<double> { 10, 20, 30 };
        var doubled = prices.Select(p => p * 2).ToList();
        Console.WriteLine(doubled[0]);
    }
}`,
          tests: [
            {
              id: 1,
              label: "Uses Select()",
              keywords: [{ pattern: "\\.Select\\(" }],
            },
            {
              id: 2,
              label: "Multiplies by 2",
              keywords: [{ pattern: "\\*\\s*2" }],
            },
            {
              id: 3,
              label: "Prints doubled[0]",
              keywords: [{ pattern: "doubled\\[0\\]" }],
            },
          ],
        },
      },
    ],
  },
  {
    id: "linq-aggregation-ordering",
    title: "Aggregation & Ordering",
    icon: "📊",
    color: ACCENT,
    lessons: [
      {
        id: "cs-linq-2",
        title: "OrderBy and OrderByDescending",
        xp: 13,
        theory: [
          text(
            "`OrderBy` sorts a collection in ascending order by a chosen key; `OrderByDescending` sorts descending. Neither changes the original collection.",
            {
              label: "Sorting with LINQ",
              content: `List<int> nums = new List<int> { 5, 1, 4, 2 };
var asc = nums.OrderBy(n => n).ToList();       // [1,2,4,5]
var desc = nums.OrderByDescending(n => n).ToList(); // [5,4,2,1]`,
            },
          ),
          text(
            "You can order by any property, not just the value itself — useful for sorting objects.",
            {
              label: "Ordering objects by a property",
              content: `List<Player> players = GetPlayers();
var byScore = players.OrderByDescending(p => p.Score).ToList();`,
            },
          ),
          quiz(
            "Does OrderBy() modify the original list in place?",
            [
              "Yes, it sorts the original list",
              "No, it returns a new sorted sequence",
              "Only for List<T>, not arrays",
              "Only with ToList() appended",
            ],
            1,
            "LINQ methods are non-destructive — `OrderBy` always returns a new sequence, leaving the source collection untouched.",
          ),
        ],
        challenge: {
          title: "Sort Scores Descending",
          description:
            "Given `List<int> scores = { 42, 17, 99, 8 }`, use `OrderByDescending` to sort them and print the first (highest) value.",
          starterCode: `using System;
using System.Linq;
using System.Collections.Generic;

class Program {
    static void Main() {
        List<int> scores = new List<int> { 42, 17, 99, 8 };
        // Sort descending into "sorted"


        // Print sorted[0]

    }
}`,
          solutionCode: `using System;
using System.Linq;
using System.Collections.Generic;

class Program {
    static void Main() {
        List<int> scores = new List<int> { 42, 17, 99, 8 };
        var sorted = scores.OrderByDescending(s => s).ToList();
        Console.WriteLine(sorted[0]);
    }
}`,
          tests: [
            {
              id: 1,
              label: "Uses OrderByDescending()",
              keywords: [{ pattern: "OrderByDescending\\(" }],
            },
            {
              id: 2,
              label: "Converts to list",
              keywords: [{ pattern: "\\.ToList\\(\\)" }],
            },
            {
              id: 3,
              label: "Prints sorted[0]",
              keywords: [{ pattern: "sorted\\[0\\]" }],
            },
          ],
        },
      },
      {
        id: "cs-linq-3",
        title: "Aggregation: Count, Sum, Max, Min, Average",
        xp: 14,
        theory: [
          text(
            "LINQ provides one-line aggregation methods that collapse a collection into a single value.",
            {
              label: "Common aggregations",
              content: `List<int> nums = new List<int> { 4, 8, 15, 16, 23, 42 };

Console.WriteLine(nums.Count());   // 6
Console.WriteLine(nums.Sum());     // 108
Console.WriteLine(nums.Max());     // 42
Console.WriteLine(nums.Min());     // 4
Console.WriteLine(nums.Average()); // 18.0`,
            },
          ),
          callout(
            "warn",
            "Calling `.Average()`, `.Max()`, or `.Min()` on an **empty** collection throws an exception. Check `.Any()` first if the collection might be empty.",
          ),
          quiz(
            "What does nums.Average() return for List<int> { 2, 4, 6 }?",
            ["4", "3", "12", "2"],
            0,
            "(2 + 4 + 6) / 3 = 12 / 3 = 4.",
          ),
        ],
        challenge: {
          title: "Report Card Stats",
          description:
            "Given `List<int> grades = { 88, 92, 79, 95, 60 }`, print the `Sum()`, then the `Max()`, then the `Average()` — one per line.",
          starterCode: `using System;
using System.Linq;
using System.Collections.Generic;

class Program {
    static void Main() {
        List<int> grades = new List<int> { 88, 92, 79, 95, 60 };
        // Print Sum(), Max(), Average()

    }
}`,
          solutionCode: `using System;
using System.Linq;
using System.Collections.Generic;

class Program {
    static void Main() {
        List<int> grades = new List<int> { 88, 92, 79, 95, 60 };
        Console.WriteLine(grades.Sum());
        Console.WriteLine(grades.Max());
        Console.WriteLine(grades.Average());
    }
}`,
          tests: [
            {
              id: 1,
              label: "Prints Sum()",
              keywords: [{ pattern: "grades\\.Sum\\(\\)" }],
            },
            {
              id: 2,
              label: "Prints Max()",
              keywords: [{ pattern: "grades\\.Max\\(\\)" }],
            },
            {
              id: 3,
              label: "Prints Average()",
              keywords: [{ pattern: "grades\\.Average\\(\\)" }],
            },
          ],
        },
      },
    ],
  },
  {
    id: "linq-advanced",
    title: "Advanced Queries",
    icon: "🧩",
    color: ACCENT,
    lessons: [
      {
        id: "cs-linq-4",
        title: "First, FirstOrDefault, and Any",
        xp: 14,
        theory: [
          text(
            "`First()` returns the first matching element or throws if none exist. `FirstOrDefault()` returns the first match, or the type's default (`0`, `null`, etc.) if none exist — much safer.",
            {
              label: "First vs FirstOrDefault",
              content: `List<int> nums = new List<int> { 3, 7, 12, 18 };

int firstEven = nums.FirstOrDefault(n => n % 2 == 0); // 12
int firstOver100 = nums.FirstOrDefault(n => n > 100);  // 0 (default)

bool hasEven = nums.Any(n => n % 2 == 0); // true`,
            },
          ),
          callout(
            "tip",
            "Prefer `FirstOrDefault` over `First` unless you're certain a match exists — it avoids an `InvalidOperationException` on no matches.",
          ),
          quiz(
            "What does FirstOrDefault() return when no element matches the condition?",
            [
              "Throws an exception",
              "null always, regardless of type",
              "The type's default value (e.g. 0 for int, null for objects)",
              "The last element instead",
            ],
            2,
            "FirstOrDefault falls back to `default(T)` — `0` for numeric types, `null` for reference types.",
          ),
        ],
        challenge: {
          title: "Find the First Negative",
          description:
            "Given `List<int> nums = { 5, 3, -2, 8, -9 }`, use `FirstOrDefault` to find the first negative number and print it.",
          starterCode: `using System;
using System.Linq;
using System.Collections.Generic;

class Program {
    static void Main() {
        List<int> nums = new List<int> { 5, 3, -2, 8, -9 };
        // Find and print the first negative number

    }
}`,
          solutionCode: `using System;
using System.Linq;
using System.Collections.Generic;

class Program {
    static void Main() {
        List<int> nums = new List<int> { 5, 3, -2, 8, -9 };
        int firstNegative = nums.FirstOrDefault(n => n < 0);
        Console.WriteLine(firstNegative);
    }
}`,
          tests: [
            {
              id: 1,
              label: "Uses FirstOrDefault()",
              keywords: [{ pattern: "FirstOrDefault\\(" }],
            },
            {
              id: 2,
              label: "Checks n < 0",
              keywords: [{ pattern: "n\\s*<\\s*0" }],
            },
            {
              id: 3,
              label: "Prints the result",
              keywords: [{ pattern: "Console\\.WriteLine\\(firstNegative\\)" }],
            },
          ],
        },
      },
      {
        id: "cs-linq-5",
        title: "GroupBy",
        xp: 15,
        theory: [
          text(
            "`GroupBy` buckets elements by a shared key, producing groups you can iterate — similar to a `GROUP BY` in SQL.",
            {
              label: "Grouping data",
              content: `List<string> words = new List<string> { "cat", "car", "dog", "door" };

var groups = words.GroupBy(w => w[0]);

foreach (var g in groups) {
    Console.WriteLine(g.Key + ": " + g.Count());
}
// c: 2
// d: 2`,
            },
          ),
          callout(
            "tip",
            "Each group behaves like a mini-collection with a `.Key` property — you can `.Select()`, `.Count()`, or `foreach` over its contents.",
          ),
          quiz(
            "What property gives you the grouping value on each IGrouping result from GroupBy?",
            [".Value", ".Group", ".Key", ".Id"],
            2,
            "Each group returned by GroupBy is an IGrouping<TKey, TElement> — `.Key` holds the shared grouping value.",
          ),
        ],
        challenge: {
          title: "Group by First Letter",
          description:
            "Given `List<string> words = { \"cat\", \"car\", \"dog\" }`, group them by their first letter with `GroupBy`, then print how many groups there are using `.Count()` on the grouped result.",
          starterCode: `using System;
using System.Linq;
using System.Collections.Generic;

class Program {
    static void Main() {
        List<string> words = new List<string> { "cat", "car", "dog" };
        // Group by first letter, print the number of groups

    }
}`,
          solutionCode: `using System;
using System.Linq;
using System.Collections.Generic;

class Program {
    static void Main() {
        List<string> words = new List<string> { "cat", "car", "dog" };
        var groups = words.GroupBy(w => w[0]);
        Console.WriteLine(groups.Count());
    }
}`,
          tests: [
            {
              id: 1,
              label: "Uses GroupBy()",
              keywords: [{ pattern: "GroupBy\\(" }],
            },
            {
              id: 2,
              label: "Groups by first character",
              keywords: [{ pattern: "w\\[0\\]" }],
            },
            {
              id: 3,
              label: "Prints group count",
              keywords: [{ pattern: "groups\\.Count\\(\\)" }],
            },
          ],
        },
      },
      {
        id: "cs-linq-6",
        title: "Chaining LINQ Queries",
        xp: 15,
        theory: [
          text(
            "LINQ's real power comes from **chaining** methods together into a readable pipeline — filter, then transform, then order, then aggregate.",
            {
              label: "A full LINQ pipeline",
              content: `List<int> nums = new List<int> { 4, 8, 15, 16, 23, 42 };

var result = nums
    .Where(n => n % 2 == 0)      // keep evens
    .Select(n => n * 10)         // scale up
    .OrderByDescending(n => n)   // sort descending
    .ToList();

// result: [420, 160, 80, 40]`,
            },
          ),
          callout(
            "tip",
            "Read a LINQ chain top-to-bottom as a pipeline: each `.` step takes the previous result and transforms it further.",
          ),
          quiz(
            "In a chain like nums.Where(...).Select(...).OrderBy(...), what determines the final order of operations?",
            [
              "C# always runs OrderBy first internally",
              "The order the methods are written in the chain",
              "Alphabetical order of method names",
              "It's random",
            ],
            1,
            "LINQ chains execute in the order they're written — each method operates on the output of the one before it.",
          ),
        ],
        challenge: {
          title: "Top Even Score, Scaled",
          description:
            "Given `List<int> scores = { 12, 7, 18, 25, 4, 30 }`, chain `Where` (even only), `Select` (multiply by 10), and `OrderByDescending` to build `result`. Print `result[0]`.",
          starterCode: `using System;
using System.Linq;
using System.Collections.Generic;

class Program {
    static void Main() {
        List<int> scores = new List<int> { 12, 7, 18, 25, 4, 30 };
        // Chain Where -> Select -> OrderByDescending into "result"


        // Print result[0]

    }
}`,
          solutionCode: `using System;
using System.Linq;
using System.Collections.Generic;

class Program {
    static void Main() {
        List<int> scores = new List<int> { 12, 7, 18, 25, 4, 30 };
        var result = scores
            .Where(n => n % 2 == 0)
            .Select(n => n * 10)
            .OrderByDescending(n => n)
            .ToList();
        Console.WriteLine(result[0]);
    }
}`,
          tests: [
            {
              id: 1,
              label: "Uses Where()",
              keywords: [{ pattern: "\\.Where\\(" }],
            },
            {
              id: 2,
              label: "Uses Select()",
              keywords: [{ pattern: "\\.Select\\(" }],
            },
            {
              id: 3,
              label: "Uses OrderByDescending()",
              keywords: [{ pattern: "OrderByDescending\\(" }],
            },
          ],
        },
      },
    ],
  },
];

export const CSHARP_LINQ_CHAPTERS = RAW_CSHARP_LINQ_CHAPTERS;

export const CSHARP_LINQ_LESSONS = CSHARP_LINQ_CHAPTERS.flatMap((ch) =>
  ch.lessons.map((l) => ({
    ...l,
    chapterId: ch.id,
    chapterTitle: ch.title,
    chapterColor: ch.color,
  })),
);

export const CSHARP_LINQ_TOTAL_XP = CSHARP_LINQ_LESSONS.reduce(
  (s, l) => s + l.xp,
  0,
);
