// PolyCode — DSA in C++ curriculum (detailed)

const ACCENT = "#a78b7fa";

function text(content, codeBlock = null) {
  if (codeBlock) return { type: "text", content, code: { lang: "cpp", ...codeBlock } };
  return { type: "text", content };
}

function quiz(question, options, answer, explanation) {
  return { type: "quiz", question, options, answer, explanation };
}

function callout(variant, content) {
  return { type: "callout", variant, content };
}

function diagram(title, nodes) {
  return { type: "diagram", title, nodes };
}

export const DSA_CPP_CHAPTERS = [
  // Complexity
  {
    id: "complexity",
    title: "Complexity & Problem Solving",
    icon: "📈",
    color: ACCENT,
    lessons: [
      {
        id: "dsa-0",
        title: "Big-O, Time & Space",
        xp: 12,
        chapterTitle: "Complexity & Problem Solving",
        theory: [
          text("Big-O describes an algorithm's runtime growth relative to input size. Focus on worst-case unless stated otherwise. Common classes: O(1), O(log n), O(n), O(n log n), O(n^2), O(2^n)."),
          text("Space complexity measures extra memory used (not counting input). Trade-offs often exist between time and space."),
          diagram("Common growth rates", [
            { id: "o1", label: "O(1)", color: "#a78b7fa", items: ["Constant"] },
            { id: "on", label: "O(n)", color: "#f59e0b", items: ["Linear"] },
            { id: "onlogn", label: "O(n log n)", color: "#22c55e", items: ["Divide & conquer sorts"] },
          ]),
          quiz("Which runtime is typical for merge sort?", ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"], 1, "Merge sort splits and merges — O(n log n)."),
          text("Amortized analysis: some operations are cheap most of the time and occasionally expensive (e.g., dynamic array push which resizes). Amortized cost averages across operations."),
          text("Example: binary search runs in O(log n). Typical implementation:" , { label: "Binary search (C++)", content: `int bs(const vector<int>& a, int x) {
  int l = 0;
  int r = (int)a.size() - 1;
  while (l <= r) {
    int m = l + (r - l) / 2;
    if (a[m] == x) return m;
    if (a[m] < x) l = m + 1;
    else r = m - 1;
  }
  return -1;
}` }),
          text("How to pick algorithm: read constraints, estimate feasible complexity, and match patterns (sort, hash, two-pointer, dp, greedy)."),
          callout("info", "Good to know: interviews usually focus on worst-case runtime. Best-case is useful, but worst-case shows whether the solution scales."),
        ],
        challenge: {
          title: "Estimate Complexity",
          description: "For each snippet, choose the correct Big-O from options (answers in comments).",
          starterCode: `// 1) for(i=0;i<n;i++) for(j=0;j<n;j++) -> ?\\n// 2) while(n>1) n/=2 -> ?\\n// Write answers as comments: // 1) O(n^2)`,
          solutionCode: `// 1) O(n^2)\\n// 2) O(log n)`,
          tests: [
            { id: 1, label: "Answered snippet 1", keywords: [{ pattern: "O\\(n\\^2\\)" }], hint: "Double loop => O(n^2)" },
            { id: 2, label: "Answered snippet 2", keywords: [{ pattern: "O\\(log n\\)" }], hint: "Divide by two => O(log n)" },
          ],
        },
      },
      {
        id: "dsa-0b",
        title: "Problem Solving Patterns",
        xp: 10,
        chapterTitle: "Complexity & Problem Solving",
        theory: [
          text("Recognize patterns: two-pointers, sliding window, divide & conquer, dynamic programming, greedy, graph traversal, and hashing."),
          text("Start by analyzing constraints: n up to 10^5 suggests O(n log n) or O(n); n up to 20 allows exponential/bitmask DP."),
          text("Pattern selection checklist: can you sort the data? Is there overlapping subproblem structure? Is a sliding window possible? Could hashing reduce complexity?"),
          text("Example: For 'find pair with sum == target' — if sorted, use two-pointers; if not, use a hash map for O(n)."),
          callout("tip", "When input sizes are large, prefer O(n) or O(n log n) patterns. Avoid nested loops for arrays above 10^4 when possible."),
        ],
        challenge: {
          title: "Choose a pattern",
          description: "Given a short problem statement, pick the best pattern (answer in comment).",
          starterCode: `// Problem: Given sorted array and target, find pair. // Best pattern:`,
          solutionCode: `// Two pointers`,
          tests: [
            { id: 1, label: "Picked pattern: two-pointers", keywords: [{ pattern: "Two pointers" }, { pattern: "two pointers" }] },
          ],
        },
      },
    ],
  },
  {
    id: "arrays",
    title: "Arrays & Two-Pointers",
    icon: "🧩",
    color: ACCENT,
    lessons: [
      {
        id: "dsa-1",
        title: "Array fundamentals",
        xp: 15,
        chapterTitle: "Arrays & Two-Pointers",
        theory: [
          text("Arrays provide indexed access to contiguous elements. Access by index is O(1). In C++ use `std::vector` for dynamic arrays; prefer `reserve()` when size is known to avoid reallocations."),
          text("Common operations: traversal, searching, insertion/deletion at end (O(1) amortized), and no O(1) insert at arbitrary index without shifting."),
          text("Memory layout: contiguous memory enables cache-friendly loops; avoid copying large vectors by value — pass by `const &`."),
          text("Example: summing elements", { label: "Sum example (C++)", content: `int sum(const vector<int>& a) {
  long long s = 0;
  for (int x : a) s += x;
  return (int)s;
}` }),
          text("Tip: use `reserve()` to preallocate capacity when pushing many items:", { label: "Reserve example", content: `vector<int> v;
v.reserve(n);
for (int i = 0; i < n; ++i) v.emplace_back(i);` }),
          callout("tip", "Good to know: `std::vector` is usually faster than linked lists for most problems because of contiguous memory and cache locality."),
        ],
        challenge: { title: "Sum of array", description: "Return sum of integers in array.", starterCode: 
          `#include <vector> \\nusing namespace std;\\nint sum(const vector<int>& a)//{ TODO }`, solutionCode: `int sum(const vector<int>& a){ int s=0; for(int x:a) s+=x; return s; }`, tests: [ { id:1, label: "Uses loop to sum", keywords: [{ pattern: "for\\s*\\(" }, { pattern: "s\\+=" }] } ] },
      },
      {
        id: "dsa-1b",
        title: "Two-pointers & Sliding window",
        xp: 18,
        chapterTitle: "Arrays & Two-Pointers",
        theory: [
          text("Two-pointer: use two indices (often left/right) to scan arrays with O(n) time for sorted or special cases. Sliding window: maintain a range [l,r) and update incrementally for subarray sums/conditions."),
          text("Pattern: when array is sorted or when you need pair/sum problems, two-pointer avoids O(n^2) nested loops."),
          text("Sliding window example: longest subarray with sum <= k — expand right, shrink left."),
          text("Sliding window snippet:", { label: "Sliding window (C++)", content: `int maxLenAtMostK(const vector<int>& a, int K) {
  int l = 0;
  long long sum = 0;
  int best = 0;
  for (int r = 0; r < (int)a.size(); ++r) {
    sum += a[r];
    while (l <= r && sum > K) sum -= a[l++];
    best = max(best, r - l + 1);
  }
  return best;
}` }),
          text("Example: two-sum on sorted array", { label: "Two-pointer snippet (C++)", content: `vector<int> twoSumSorted(const vector<int>& a, int target) {
  int l = 0, r = (int)a.size() - 1;
  while (l < r) {
    int s = a[l] + a[r];
    if (s == target) return {l, r};
    if (s < target) l++;
    else r--;
  }
  return {};
}` }),
          callout("tip", "Sorted arrays are ideal for two-pointer scanning: they often turn nested loops into a single linear pass."),
        ],
        challenge: { title: "Two-sum (sorted)", description: "Find pair summing to target using two pointers.", starterCode: `#include <vector>\\nusing namespace std;\\nvector<int> twoSumSorted(const vector<int>& a, int target){ // TODO }`, solutionCode: `vector<int> twoSumSorted(const vector<int>& a, int target){ int l=0,r=a.size()-1; while(l<r){ int s=a[l]+a[r]; if(s==target) return {l,r}; if(s<target) l++; else r--; } return {}; }`, tests: [ { id:1, label: "Uses two-pointer approach", keywords: ["l=0", "r=a.size()-1", { pattern: "return\\s*\\{\\s*l\\s*,\\s*r\\s*\\}" }] } ] },
      },
    ],
  },

  {
    id: "lists",
    title: "Linked Lists",
    icon: "🔗",
    color: ACCENT,
    lessons: [
      {
        id: "dsa-2",
        title: "Singly & Doubly Lists",
        xp: 15,
        chapterTitle: "Linked Lists",
        theory: [
          text("Linked lists store nodes with pointers to next (and optional prev). They support O(1) insertion/removal at head given node pointer, but random access is O(n)."),
          text("Common operations: traversal, insertion, deletion, reversal, merge, detect cycle (Floyd's tortoise & hare)."),
          text("Memory footprint: each node has pointer overhead; prefer arrays/vectors when random access required."),
          text("Example: reverse list (iterative)", { label: "Reverse snippet", content: `Node* reverseList(Node* head) {
  Node* prev = nullptr;
  while (head) {
    Node* nxt = head->next;
    head->next = prev;
    prev = head;
    head = nxt;
  }
  return prev;
}` }),
          callout("warning", "Watch out for null pointers and single-node lists. Always test empty, single, and multi-node cases when manipulating links."),
        ],
        challenge: { title: "Reverse singly linked list", description: "Reverse a singly linked list in-place and return new head.", starterCode: `// Define Node and implement reverseList(Node* head)`, solutionCode: `Node* reverseList(Node* head){ Node* prev=nullptr; while(head){ Node* nxt=head->next; head->next=prev; prev=head; head=nxt; } return prev; }`, tests: [ { id:1, label: "Uses iterative reverse", keywords: [{ pattern: "prev\\s*=\\s*nullptr" }, { pattern: "head->next\\s*=\\s*prev" }] } ] },
      },
      {
        id: "dsa-2b",
        title: "Lists: pointers & pitfalls",
        xp: 12,
        chapterTitle: "Linked Lists",
        theory: [
          text("Edge cases: empty list, single node, cycles. Be careful with ownership and memory management in C++ (use smart pointers or clear delete semantics)."),
          text("Merging two sorted lists can be done in O(n) by pointer manipulation without extra allocations.") ,
          callout("tip", "Cycle detection is a classic linked list edge case. Use Floyd's algorithm and test with a list that loops back to the head."),
        ],
        challenge: { title: "Detect cycle", description: "Return true if linked list has a cycle.", starterCode: "// implement hasCycle", solutionCode: `bool hasCycle(Node* head){ Node*n=head,*f=head; while(f&&f->next){ n=n->next; f=f->next->next; if(n==f) return true; } return false; }`, tests: [ { id:1, label: "Uses Floyd cycle detection", keywords: ["f->next->next", "n==f"] } ] },
      },
    ],
  },

  {
    id: "stacks-queues",
    title: "Stacks & Queues",
    icon: "📚",
    color: ACCENT,
    lessons: [
      {
        id: "dsa-3",
        title: "Stack applications",
        xp: 12,
        chapterTitle: "Stacks & Queues",
        theory: [
          text("Stacks implement LIFO. Common uses: parsing, DFS, evaluating RPN, backtracking, monotonic stack for nearest greater/smaller."),
          text("Monotonic stacks are used to find next greater/smaller elements in O(n) by maintaining a stack of indices with monotonic values."),
          text("Queues implement FIFO, used for BFS, sliding window, and rate limiting. In C++ use `std::queue` or `std::deque` depending on needed operations."),
          text("Example: validate parentheses using stack.", { label: "Parentheses example", content: `bool isValid(string s) {
  stack<char> st;
  for (char c : s) {
    if (c == '(') st.push(')');
    else if (st.empty() || st.top() != c) return false;
    else st.pop();
  }
  return st.empty();
}` }),
          callout("tip", "A stack is ideal for nested structure checks. Use it for parentheses, syntax, and undo operations."),
        ],
        challenge: { title: "Valid parentheses", description: "Return true if brackets are balanced.", starterCode: `#include <string>\\nusing namespace std;\\nbool isValid(string s){ // TODO }`, solutionCode: `bool isValid(string s){ stack<char> st; for(char c:s){ if(c=='(') st.push(')'); else if(st.empty()||st.top()!=c) return false; else st.pop(); } return st.empty(); }`, tests: [ { id:1, label: "Uses stack", keywords: ["stack<char>", "st.push("] } ] },
      },
    ],
  },

  {
    id: "trees",
    title: "Trees & BSTs",
    icon: "🌳",
    color: ACCENT,
    lessons: [
      {
        id: "dsa-4",
        title: "Binary Trees & Traversals",
        xp: 18,
        chapterTitle: "Trees & BSTs",
        theory: [
          text("Trees are hierarchical structures. Binary trees have up to two children per node. Traversals: preorder (root,left,right), inorder (left,root,right), postorder (left,right,root). BFS (level-order) uses a queue; DFS uses recursion or stack."),
          text("Applications: expression trees, parsing, hierarchical data. Common operations: insert, delete, search, height, balance."),
          callout("info", "Good to know: recursion is natural for tree traversals, but iterative stack-based traversals are useful when recursion depth is a concern."),
        ],
        challenge: { title: "Inorder traversal", description: "Return inorder list.", starterCode: "// implement inorder", solutionCode: "// recursive/iterative", tests: [ { id:1, label: "Uses recursion or stack", keywords: ["inorder", "stack<"] } ] },
      },
      {
        id: "dsa-5",
        title: "Binary Search Trees",
        xp: 18,
        chapterTitle: "Trees & BSTs",
        theory: [
          text("BSTs maintain left < node < right ordering, enabling O(h) operations where h is tree height. Balanced BSTs (AVL, Red-Black) keep h = O(log n)."),
          text("Inserting, searching, deleting with careful pointer updates; consider successor/replacement node on delete."),
          callout("tip", "Good to know: an unbalanced BST can degrade to linked-list performance. For interviews, mention height and balance when discussing efficiency."),
        ],
        challenge: { title: "Validate BST", description: "Check if tree is valid BST.", starterCode: "// implement is Valid BST", solutionCode: "// range check", tests: [ { id:1, label: "Range-check pattern", keywords: ["min", "max", "isValidBST"] } ] },
      },
    ],
  },

  {
    id: "graphs",
    title: "Graphs",
    icon: "🕸️",
    color: ACCENT,
    lessons: [
      {
        id: "dsa-6",
        title: "Graph representations & Traversals",
        xp: 18,
        chapterTitle: "Graphs",
        theory: [
          text("Graphs: nodes (vertices) and edges. Representations: adjacency list (preferred for sparse graphs), adjacency matrix (dense)."),
          text("BFS finds shortest path in unweighted graphs using a queue and distance array. DFS explores deeply, useful for topological sort and connectivity checks."),
          text("Directed vs undirected graphs; weighted edges require Dijkstra or Bellman-Ford for shortest paths."),
          callout("info", "Good to know: adjacency lists are usually the best choice unless the graph is dense. They keep memory and runtime lower for sparse graphs."),
        ],
        challenge: { title: "BFS shortest path (unweighted)", description: "Find shortest path in unweighted graph.", starterCode: "// implement bfs", solutionCode: "// queue BFS", tests: [ { id:1, label: "Uses queue BFS", keywords: ["queue<", "push(", "distance["] } ] },
      },
    ],
  },

  {
    id: "hashing",
    title: "Hashing & Sets",
    icon: "🔑",
    color: ACCENT,
    lessons: [
      {
        id: "dsa-7",
        title: "Hash maps & collisions",
        xp: 12,
        chapterTitle: "Hashing & Sets",
        theory: [
          text("Hash maps provide average O(1) access. In C++ use `unordered_map` and `unordered_set`. Collisions handled by chaining or open addressing; understand load factor and rehashing."),
          text("Use hashing for frequency counting, deduplication, and as a building block for two-sum and sliding window problems."),
          callout("tip", "Helpful tip: when hash tables feel slow, check if the keys are expensive to hash or if you need a smaller custom hash for performance."),
        ],
        challenge: { title: "Two-sum (hash)", description: "Return pair that sums to target using hash map.", starterCode: "// implement twoSum using unordered_map", solutionCode: `vector<int> twoSum(const vector<int>& a, int target){ unordered_map<int,int> m; for(int i=0;i<a.size();++i){ int need=target-a[i]; if(m.count(need)) return {m[need],i}; m[a[i]]=i; } return {}; }`, tests: [ { id:1, label: "Uses unordered_map", keywords: ["unordered_map<", "m.count("] } ] },
      },
    ],
  },

  {
    id: "sorting",
    title: "Sorting & Searching",
    icon: "🔃",
    color: ACCENT,
    lessons: [
      {
        id: "dsa-8",
        title: "Comparison sorts",
        xp: 15,
        chapterTitle: "Sorting & Searching",
        theory: [
          text("Comparison-based sorts: QuickSort (average O(n log n)), MergeSort (O(n log n) stable), HeapSort (O(n log n)). Counting/Radix sorts are O(n) for limited key ranges."),
          text("Binary search requires a sorted array and runs in O(log n); be careful with index mid computations to avoid overflow."),
          callout("info", "Good to know: binary search is not only for search; it is also useful for finding boundaries and optimizing monotonic functions."),
        ],
        challenge: { title: "Binary search", description: "Implement binary search returning index or -1.", starterCode: "// implement binary search", solutionCode: `int bs(const vector<int>&a,int x){ int l=0,r=a.size()-1; while(l<=r){ int m=l+(r-l)/2; if(a[m]==x) return m; if(a[m]<x) l=m+1; else r=m-1; } return -1; }`, tests: [ { id:1, label: "Uses binary pattern", keywords: ["l+(r-l)/2", "while(l<=r)"] } ] },
      },
    ],
  },
  {
    id: "dp-greedy",
    title: "Greedy & Dynamic Programming",
    icon: "🧠",
    color: ACCENT,
    lessons: [
      {
        id: "dsa-9",
        title: "Greedy patterns",
        xp: 15,
        chapterTitle: "Greedy & DP",
        theory: [
          text("Greedy chooses local optimum at each step; works when local choices lead to global optimum (e.g., interval scheduling, coin change with canonical systems)."),
          callout("tip", "Helpful tip: greed works when you can prove a local choice stays safe for the full problem. Always validate with a small counterexample first."),
        ],
        challenge: { title: "Activity selection (greedy)", description: "Select maximum non-overlapping intervals.", starterCode: "// implement activity selection", solutionCode: "// sort by end-time and pick greedily", tests: [ { id:1, label: "Sort by end time", keywords: ["sort(", "end_time", "endTime"] } ] },
      },
      {
        id: "dsa-10",
        title: "Intro to Dynamic Programming",
        xp: 20,
        chapterTitle: "Greedy & DP",
        theory: [
          text("DP transforms exponential recursion into polynomial time via memoization or tabulation. Identify overlapping subproblems and optimal substructure."),
          text("Common patterns: knapsack, LIS, Fibonacci, DP on sequences and intervals."),
          callout("info", "Good to know: when in doubt, try recursive memoization first. It often shows the state shape before you build an efficient table-based DP."),
        ],
        challenge: { title: "0/1 Knapsack (small)", description: "Simple knapsack with small n and capacity; implement DP table.", starterCode: "// implement knapsack DP", solutionCode: "// DP two-dimensional table", tests: [ { id:1, label: "Uses DP table", keywords: ["vector<vector<", "dp[" ] } ] },
      },
    ],
  },
];

export const DSA_CPP_LESSONS = DSA_CPP_CHAPTERS.flatMap((c) =>
  c.lessons.map((l) => ({ ...l, chapterId: c.id, chapterTitle: c.title })),
);

export const DSA_CPP_TOTAL_XP = DSA_CPP_LESSONS.reduce((s, l) => s + (l.xp || 0), 0);

export default DSA_CPP_CHAPTERS;
