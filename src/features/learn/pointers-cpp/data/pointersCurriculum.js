// PolyCode — Pointers in C++ Curriculum
// Focus: beginner-friendly mental models, visual steps, and safe modern C++.

export const POINTER_CHAPTERS = [
  {
    id: "foundations",
    title: "Pointer Foundations",
    icon: "⌖",
    color: "#00d4ff",
    lessons: [
      {
        id: "ptr-intro-1",
        title: "Addresses, Pointers, and Dereferencing",
        xp: 10,
        theory: [
          {
            type: "text",
            content:
              "A **pointer** is a variable that stores a memory address. The address tells C++ *where* a value lives, and dereferencing with `*` lets you read or change the value at that address.",
          },
          {
            type: "callout",
            variant: "info",
            content:
              "Think of a pointer like a house address. The address is not the house, but it tells you where to go. `*ptr` means: go to that address and use the value stored there.",
          },
          {
            type: "diagram",
            title: "Value vs Address",
            nodes: [
              {
                id: "value",
                label: "int age = 21",
                color: "#b8ff00",
                items: ["Stores the actual number", "`age` is the value box"],
              },
              {
                id: "address",
                label: "&age",
                color: "#00d4ff",
                items: ["Gets the box address", "Used to initialize a pointer"],
              },
              {
                id: "pointer",
                label: "int* p = &age",
                color: "#f59e0b",
                items: ["Stores the address", "`*p` reads or changes age"],
              },
            ],
          },
          {
            type: "code",
            lang: "cpp",
            label: "Pointer basics",
            content: `#include <iostream>
using namespace std;

int main() {
    int age = 21;
    int* p = &age;

    cout << age << endl;   // value
    cout << *p << endl;    // value through pointer

    *p = 22;               // change age through pointer
    cout << age << endl;
    return 0;
}`,
          },
          {
            type: "quiz",
            question: "What does `*p` mean when `p` is a pointer?",
            options: [
              "The address stored in p",
              "The value at the address stored in p",
              "The size of p",
              "A new variable named p",
            ],
            answer: 1,
            explanation:
              "`*p` dereferences the pointer, so C++ goes to the stored address and uses the value there.",
          },
        ],
        challenge: {
          title: "Update Through a Pointer",
          description:
            "Create an `int score = 40`, create `int* scorePtr = &score`, update the score to `55` through the pointer, then print `score`.",
          starterCode: `#include <iostream>
using namespace std;

int main() {
    int score = 40;
    // TODO: create scorePtr, update score through it, then print score
    return 0;
}`,
          solutionCode: `#include <iostream>
using namespace std;

int main() {
    int score = 40;
    int* scorePtr = &score;
    *scorePtr = 55;
    cout << score << endl;
    return 0;
}`,
          tests: [
            { id: 1, label: "score variable exists", keywords: ["score"] },
            { id: 2, label: "Pointer stores &score", keywords: ["&score"] },
            { id: 3, label: "Dereference assignment is used", keywords: ["*scorePtr", "55"] },
            { id: 4, label: "Output prints score", keywords: ["cout", "score"] },
          ],
        },
      },
      {
        id: "ptr-intro-2",
        title: "Null Pointers and Safety Checks",
        xp: 10,
        theory: [
          {
            type: "text",
            content:
              "A **null pointer** points to nothing. In modern C++, use `nullptr` when a pointer has no valid target yet.",
          },
          {
            type: "callout",
            variant: "warning",
            content:
              "Never dereference a pointer until you know it points to a valid object. Dereferencing `nullptr` is undefined behavior.",
          },
          {
            type: "stepthrough",
            title: "Safe pointer check",
            steps: [
              {
                label: "Start null",
                code: "int* p = nullptr;",
                desc: "`p` intentionally points nowhere. This is safer than leaving it uninitialized.",
              },
              {
                label: "Check first",
                code: "if (p != nullptr) { cout << *p; }",
                desc: "Only dereference when the pointer has a real address.",
              },
              {
                label: "Attach later",
                code: "int value = 9;\np = &value;",
                desc: "After assignment, `p` can safely be dereferenced.",
              },
            ],
          },
          {
            type: "code",
            lang: "cpp",
            label: "nullptr guard",
            content: `int value = 7;
int* p = nullptr;

if (p == nullptr) {
    p = &value;
}

cout << *p << endl;`,
          },
          {
            type: "quiz",
            question: "Why is `nullptr` better than an uninitialized pointer?",
            options: [
              "It automatically creates memory",
              "It clearly means the pointer has no target",
              "It stores every address",
              "It makes dereferencing optional",
            ],
            answer: 1,
            explanation:
              "`nullptr` is an explicit no-target value. You can check it before dereferencing.",
          },
        ],
        challenge: {
          title: "Guard Before Dereference",
          description:
            "Create `int level = 3` and `int* p = nullptr`. If `p` is null, point it to `level`. Then print `*p`.",
          starterCode: `#include <iostream>
using namespace std;

int main() {
    int level = 3;
    int* p = nullptr;
    // TODO: attach p to level if it is null, then print *p
    return 0;
}`,
          solutionCode: `#include <iostream>
using namespace std;

int main() {
    int level = 3;
    int* p = nullptr;
    if (p == nullptr) {
        p = &level;
    }
    cout << *p << endl;
    return 0;
}`,
          tests: [
            { id: 1, label: "p starts as nullptr", keywords: ["nullptr"] },
            { id: 2, label: "Code checks p before use", keywords: ["if", "p"] },
            {
              id: 3,
              label: "p points to level",
              keywords: [{ pattern: "(^|[^*\\w])p\\s*=\\s*&\\s*level" }],
            },
            { id: 4, label: "Dereferenced output is printed", keywords: ["cout", "*p"] },
          ],
        },
      },
    ],
  },
  {
    id: "movement",
    title: "Pointer Movement",
    icon: "⇄",
    color: "#b8ff00",
    lessons: [
      {
        id: "ptr-move-1",
        title: "Pointers and Arrays",
        xp: 15,
        theory: [
          {
            type: "text",
            content:
              "Arrays and pointers are closely related. An array name can decay into a pointer to its first element, so pointer arithmetic can walk through contiguous elements.",
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "`arr + 1` does not move one byte. It moves by one element, so for `int` it moves by `sizeof(int)` bytes.",
          },
          {
            type: "diagram",
            title: "Array memory walk",
            nodes: [
              {
                id: "first",
                label: "arr",
                color: "#00d4ff",
                items: ["Address of arr[0]", "`*arr` reads first element"],
              },
              {
                id: "next",
                label: "arr + 1",
                color: "#b8ff00",
                items: ["Address of arr[1]", "`*(arr + 1)` reads second"],
              },
              {
                id: "index",
                label: "p[i]",
                color: "#f59e0b",
                items: ["Same idea as `*(p + i)`", "Readable for loops"],
              },
            ],
          },
          {
            type: "code",
            lang: "cpp",
            label: "Walking an array",
            content: `int nums[] = {10, 20, 30};
int* p = nums;

cout << *p << endl;       // 10
cout << *(p + 1) << endl; // 20
cout << p[2] << endl;     // 30`,
          },
          {
            type: "quiz",
            question: "What does `*(p + 2)` read when `p` points to `arr[0]`?",
            options: ["arr[0]", "arr[1]", "arr[2]", "The array size"],
            answer: 2,
            explanation:
              "Pointer arithmetic moves by elements. `p + 2` reaches the third element, then `*` reads it.",
          },
        ],
        challenge: {
          title: "Print an Array With a Pointer",
          description:
            "Create `int nums[] = {4, 8, 12}` and `int* p = nums`. Print the second value using pointer arithmetic.",
          starterCode: `#include <iostream>
using namespace std;

int main() {
    int nums[] = {4, 8, 12};
    int* p = nums;
    // TODO: print the second value using pointer arithmetic
    return 0;
}`,
          solutionCode: `#include <iostream>
using namespace std;

int main() {
    int nums[] = {4, 8, 12};
    int* p = nums;
    cout << *(p + 1) << endl;
    return 0;
}`,
          tests: [
            { id: 1, label: "Array contains 4, 8, 12", keywords: ["4", "8", "12"] },
            { id: 2, label: "Pointer is assigned to nums", keywords: ["int* p", "nums"] },
            { id: 3, label: "Pointer arithmetic is used", keywords: ["p + 1"] },
            { id: 4, label: "Result is printed", keywords: ["cout"] },
          ],
        },
      },
      {
        id: "ptr-move-2",
        title: "Pointers vs References",
        xp: 15,
        theory: [
          {
            type: "text",
            content:
              "A **reference** is another name for an existing object. A **pointer** stores an address and can be reseated to another object or be null.",
          },
          {
            type: "table",
            headers: ["Feature", "Pointer", "Reference"],
            rows: [
              ["Can be null", "Yes: `nullptr`", "No"],
              ["Can point elsewhere later", "Yes", "No"],
              ["Access syntax", "`*p` or `p->x`", "Use like normal variable"],
              ["Best use", "Optional or reseatable target", "Required alias"],
            ],
          },
          {
            type: "code",
            lang: "cpp",
            label: "Reference and pointer side by side",
            content: `int a = 10;
int b = 20;

int& ref = a; // always aliases a
int* ptr = &a;

ptr = &b;     // pointer can move to b
*ptr = 25;    // changes b`,
          },
          {
            type: "quiz",
            question: "Which one can be changed to target another variable later?",
            options: ["Reference", "Pointer", "Both always", "Neither"],
            answer: 1,
            explanation:
              "A pointer can be assigned another address. A reference stays bound to its original object.",
          },
        ],
        challenge: {
          title: "Reseat a Pointer",
          description:
            "Create `a = 5`, `b = 9`, and `int* p = &a`. Then point `p` to `b`, change `b` through `p` to `12`, and print `b`.",
          starterCode: `#include <iostream>
using namespace std;

int main() {
    int a = 5;
    int b = 9;
    int* p = &a;
    // TODO: reseat p to b, change b through p, print b
    return 0;
}`,
          solutionCode: `#include <iostream>
using namespace std;

int main() {
    int a = 5;
    int b = 9;
    int* p = &a;
    p = &b;
    *p = 12;
    cout << b << endl;
    return 0;
}`,
          tests: [
            { id: 1, label: "Pointer starts at a", keywords: ["&a"] },
            { id: 2, label: "Pointer is reseated to b", keywords: ["&b"] },
            { id: 3, label: "Dereference changes value to 12", keywords: ["*p", "12"] },
            { id: 4, label: "b is printed", keywords: ["cout", "b"] },
          ],
        },
      },
    ],
  },
  {
    id: "ownership",
    title: "Ownership and Lifetime",
    icon: "◇",
    color: "#f59e0b",
    lessons: [
      {
        id: "ptr-own-1",
        title: "Dynamic Memory: new and delete",
        xp: 20,
        theory: [
          {
            type: "text",
            content:
              "`new` creates an object on the heap and returns a pointer. `delete` releases that object. Every successful `new` should have a matching `delete`, unless ownership is moved to a smart pointer.",
          },
          {
            type: "callout",
            variant: "warning",
            content:
              "Raw `new` and `delete` are important to understand, but modern C++ usually prefers smart pointers for ownership.",
          },
          {
            type: "stepthrough",
            title: "Manual heap lifetime",
            steps: [
              {
                label: "Allocate",
                code: "int* p = new int(42);",
                desc: "`p` stores the heap address of a new int initialized to 42.",
              },
              {
                label: "Use",
                code: "cout << *p << endl;",
                desc: "Dereference the pointer to read the heap value.",
              },
              {
                label: "Release",
                code: "delete p;\np = nullptr;",
                desc: "Free the heap object, then clear the pointer so it cannot dangle.",
              },
            ],
          },
          {
            type: "code",
            lang: "cpp",
            label: "Manual memory",
            content: `int* score = new int(100);
cout << *score << endl;
delete score;
score = nullptr;`,
          },
          {
            type: "quiz",
            question: "What problem happens if you forget `delete` after `new`?",
            options: ["Stack overflow", "Memory leak", "Syntax error", "Reference binding"],
            answer: 1,
            explanation:
              "The heap allocation stays reserved and can no longer be reclaimed by your code: that is a memory leak.",
          },
        ],
        challenge: {
          title: "Allocate and Release",
          description:
            "Allocate an `int` with value `64` using `new`, print it through the pointer, delete it, then set the pointer to `nullptr`.",
          starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: allocate, print, delete, and null out the pointer
    return 0;
}`,
          solutionCode: `#include <iostream>
using namespace std;

int main() {
    int* value = new int(64);
    cout << *value << endl;
    delete value;
    value = nullptr;
    return 0;
}`,
          tests: [
            { id: 1, label: "new allocates an int", keywords: ["new int"] },
            {
              id: 2,
              label: "Pointer is dereferenced for output",
              keywords: ["cout", { pattern: "<<\\s*\\*\\s*[A-Za-z_]\\w*" }],
            },
            { id: 3, label: "delete releases memory", keywords: ["delete"] },
            { id: 4, label: "Pointer is reset to nullptr", keywords: ["nullptr"] },
          ],
        },
      },
      {
        id: "ptr-own-2",
        title: "Smart Pointers: unique_ptr and shared_ptr",
        xp: 20,
        theory: [
          {
            type: "text",
            content:
              "A **smart pointer** owns a heap object and automatically releases it. `unique_ptr` means one owner. `shared_ptr` means multiple owners with reference counting.",
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "Prefer `make_unique<T>()` and `make_shared<T>()` because they are cleaner and safer than writing raw `new` yourself.",
          },
          {
            type: "diagram",
            title: "Ownership styles",
            nodes: [
              {
                id: "unique",
                label: "unique_ptr",
                color: "#b8ff00",
                items: ["Exactly one owner", "Move-only", "Great default for ownership"],
              },
              {
                id: "shared",
                label: "shared_ptr",
                color: "#00d4ff",
                items: ["Multiple owners", "Reference counted", "Use when sharing is real"],
              },
              {
                id: "raw",
                label: "raw pointer",
                color: "#ff6b6b",
                items: ["No ownership by itself", "Can dangle", "Use carefully"],
              },
            ],
          },
          {
            type: "code",
            lang: "cpp",
            label: "Modern ownership",
            content: `#include <memory>

auto score = make_unique<int>(99);
cout << *score << endl;

auto shared = make_shared<int>(7);
auto copy = shared;`,
          },
          {
            type: "quiz",
            question: "Which smart pointer should be your default for exclusive ownership?",
            options: ["shared_ptr", "unique_ptr", "raw pointer", "nullptr"],
            answer: 1,
            explanation:
              "`unique_ptr` clearly states there is exactly one owner, which keeps lifetime simple.",
          },
        ],
        challenge: {
          title: "Use unique_ptr",
          description:
            "Include `<memory>`, create a `unique_ptr<int>` with value `77` using `make_unique`, then print the value.",
          starterCode: `#include <iostream>
#include <memory>
using namespace std;

int main() {
    // TODO: create a unique_ptr<int> and print its value
    return 0;
}`,
          solutionCode: `#include <iostream>
#include <memory>
using namespace std;

int main() {
    auto value = make_unique<int>(77);
    cout << *value << endl;
    return 0;
}`,
          tests: [
            { id: 1, label: "memory header is included", keywords: ["#include <memory>"] },
            { id: 2, label: "make_unique creates the int", keywords: ["make_unique<int>", "77"] },
            { id: 3, label: "Pointer-like dereference is used", keywords: ["*value"] },
            { id: 4, label: "Value is printed", keywords: ["cout"] },
          ],
        },
      },
    ],
  },
  {
    id: "advanced",
    title: "Advanced Pointer Patterns",
    icon: "λ",
    color: "#a855f7",
    lessons: [
      {
        id: "ptr-adv-1",
        title: "Function Pointers and Callbacks",
        xp: 25,
        theory: [
          {
            type: "text",
            content:
              "A **function pointer** stores the address of a function. You can pass behavior into another function by passing a pointer to the function to call.",
          },
          {
            type: "callout",
            variant: "info",
            content:
              "Modern C++ often uses lambdas and `std::function`, but function pointers are the foundation of callbacks and low-level APIs.",
          },
          {
            type: "code",
            lang: "cpp",
            label: "Function pointer",
            content: `int square(int x) {
    return x * x;
}

int apply(int value, int (*fn)(int)) {
    return fn(value);
}

cout << apply(5, square) << endl;`,
          },
          {
            type: "quiz",
            question: "What does `int (*fn)(int)` describe?",
            options: [
              "A pointer to an int",
              "A function pointer taking int and returning int",
              "A reference to an array",
              "A smart pointer",
            ],
            answer: 1,
            explanation:
              "The parentheses around `*fn` indicate that `fn` is a pointer to a function.",
          },
        ],
        challenge: {
          title: "Apply a Function Pointer",
          description:
            "Write `triple(int x)` returning `x * 3`. Write `apply(int value, int (*fn)(int))` that returns `fn(value)`. Print `apply(4, triple)`.",
          starterCode: `#include <iostream>
using namespace std;

// TODO: triple and apply

int main() {
    // TODO: print apply(4, triple)
    return 0;
}`,
          solutionCode: `#include <iostream>
using namespace std;

int triple(int x) {
    return x * 3;
}

int apply(int value, int (*fn)(int)) {
    return fn(value);
}

int main() {
    cout << apply(4, triple) << endl;
    return 0;
}`,
          tests: [
            { id: 1, label: "triple function exists", keywords: ["triple"] },
            { id: 2, label: "Function pointer parameter exists", keywords: ["(*fn)(int)"] },
            { id: 3, label: "fn(value) is called", keywords: ["fn(value)"] },
            { id: 4, label: "apply result is printed", keywords: ["cout", "apply"] },
          ],
        },
      },
      {
        id: "ptr-adv-2",
        title: "Pointer Safety Checklist",
        xp: 25,
        theory: [
          {
            type: "text",
            content:
              "Pointer bugs usually come from lifetime mistakes: dangling pointers, double deletes, leaks, null dereferences, and unclear ownership.",
          },
          {
            type: "table",
            headers: ["Risk", "Safer habit"],
            rows: [
              ["Uninitialized pointer", "Start with `nullptr`"],
              ["Null dereference", "Check before `*p`"],
              ["Leaked memory", "Prefer smart pointers"],
              ["Dangling pointer", "Reset after delete or avoid raw owning pointers"],
              ["Unclear ownership", "Use `unique_ptr` or references"],
            ],
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "Best modern rule: use raw pointers for non-owning optional access, references for required access, and smart pointers for ownership.",
          },
          {
            type: "code",
            lang: "cpp",
            label: "Safe helper",
            content: `void printValue(const int* p) {
    if (p == nullptr) {
        cout << "missing" << endl;
        return;
    }
    cout << *p << endl;
}`,
          },
          {
            type: "quiz",
            question: "Which option best communicates ownership in modern C++?",
            options: ["Raw pointer", "unique_ptr", "Magic number", "const int"],
            answer: 1,
            explanation:
              "`unique_ptr` is explicit: it owns the object and releases it automatically.",
          },
        ],
        challenge: {
          title: "Write a Safe Printer",
          description:
            "Create `printValue(const int* p)`. If `p` is null, print `missing`; otherwise print `*p`. In main, call it with the address of `int n = 18`.",
          starterCode: `#include <iostream>
using namespace std;

// TODO: write printValue

int main() {
    int n = 18;
    // TODO: call printValue with n's address
    return 0;
}`,
          solutionCode: `#include <iostream>
using namespace std;

void printValue(const int* p) {
    if (p == nullptr) {
        cout << "missing" << endl;
        return;
    }
    cout << *p << endl;
}

int main() {
    int n = 18;
    printValue(&n);
    return 0;
}`,
          tests: [
            { id: 1, label: "Function accepts const int pointer", keywords: ["const int*"] },
            { id: 2, label: "nullptr is checked", keywords: ["nullptr"] },
            { id: 3, label: "Pointer is dereferenced safely", keywords: ["*p"] },
            { id: 4, label: "Address of n is passed", keywords: ["&n"] },
          ],
        },
      },
    ],
  },
];

export const POINTER_LESSONS = POINTER_CHAPTERS.flatMap((chapter) =>
  chapter.lessons.map((lesson) => ({
    ...lesson,
    chapterId: chapter.id,
    chapterTitle: chapter.title,
    chapterColor: chapter.color,
  })),
);

export const POINTER_TOTAL_XP = POINTER_LESSONS.reduce(
  (sum, lesson) => sum + lesson.xp,
  0,
);
