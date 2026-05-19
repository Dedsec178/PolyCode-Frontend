import React, { useState } from "react";

export default function CodeChallenge({
  challenge,
  accentColor,
  isCompleted,
  onComplete,
}) {
  const [code, setCode] = useState(challenge.starterCode);
  const [results, setResults] = useState(null); // null | { passed, tests }
  const [showSolution, setShowSolution] = useState(false);
  const [running, setRunning] = useState(false);

  // Simulated test runner — checks code string heuristically
  // In production: hook into your backend compiler (BrowserExecutor / Piston API)
  function runTests() {
    setRunning(true);
    setResults(null);

    setTimeout(() => {
      const testResults = challenge.tests.map((test) => {
        // Heuristic checks based on solution keywords
        const solutionKeywords = extractKeywords(
          challenge.solutionCode,
          test.id,
        );
        const passed = solutionKeywords.every((kw) => code.includes(kw));
        return { ...test, passed };
      });

      const allPassed = testResults.every((t) => t.passed);
      setResults({ passed: allPassed, tests: testResults });
      if (allPassed && !isCompleted) onComplete();
      setRunning(false);
    }, 800);
  }

  function extractKeywords(sol, testId) {
    // Per-test keyword extraction from solution code
    // Maps test index → structural signals to look for in user code
    const lines = sol.split("\n").filter(Boolean);
    switch (testId) {
      case 1:
        return [
          lines
            .find((l) => l.includes("class"))
            ?.trim()
            .split(" ")[1]
            ?.replace("{", "") || "class",
        ].filter(Boolean);
      case 2:
        return [
          lines
            .find((l) => l.includes("(") && !l.includes("//"))
            ?.match(/\w+\s*\(/)?.[0]
            .trim() || "",
        ].filter(Boolean);
      case 3:
        return [
          lines.find((l) => l.includes("cout"))?.includes("cout") ? "cout" : "",
        ].filter(Boolean);
      case 4:
        return ["cout"].filter(Boolean);
      default:
        return [];
    }
  }

  function resetCode() {
    setCode(challenge.starterCode);
    setResults(null);
    setShowSolution(false);
  }

  return (
    <div className="oops-challenge">
      {/* Problem statement */}
      <div className="oops-problem-panel">
        <div className="oops-problem-header">
          <h3 className="oops-problem-title">{challenge.title}</h3>
          {isCompleted && (
            <span
              className="oops-problem-solved"
              style={{ color: accentColor }}
            >
              ✓ Solved
            </span>
          )}
        </div>
        <p className="oops-problem-desc">{challenge.description}</p>

        {/* Test cases */}
        <div className="oops-test-cases">
          <div className="oops-test-cases-label">Acceptance Tests</div>
          {(results ? results.tests : challenge.tests).map((t) => (
            <div
              key={t.id}
              className={`oops-test-row ${
                results ? (t.passed ? "oops-test-pass" : "oops-test-fail") : ""
              }`}
            >
              <span className="oops-test-icon">
                {results ? (t.passed ? "✓" : "✗") : "○"}
              </span>
              <span className="oops-test-label">{t.label}</span>
              {results && !t.passed && t.hint && (
                <span className="oops-test-hint">Hint: {t.hint}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Editor panel */}
      <div className="oops-editor-panel">
        <div className="oops-editor-topbar">
          <span className="oops-editor-lang">C++ · main.cpp</span>
          <div className="oops-editor-actions">
            <button
              className="oops-editor-action"
              onClick={resetCode}
              title="Reset"
            >
              ↺ Reset
            </button>
            <button
              className="oops-editor-action"
              onClick={() => setShowSolution(!showSolution)}
            >
              {showSolution ? "Hide Solution" : "💡 Solution"}
            </button>
          </div>
        </div>

        <textarea
          className="oops-editor"
          value={showSolution ? challenge.solutionCode : code}
          onChange={(e) => {
            if (!showSolution) setCode(e.target.value);
          }}
          readOnly={showSolution}
          spellCheck={false}
          autoComplete="off"
          autoCorrect="off"
        />

        {/* Run bar */}
        <div className="oops-run-bar">
          {results && (
            <div
              className={`oops-verdict ${results.passed ? "oops-verdict-pass" : "oops-verdict-fail"}`}
            >
              {results.passed
                ? `✓ All tests passed!`
                : `${results.tests.filter((t) => t.passed).length}/${results.tests.length} tests passed`}
            </div>
          )}
          <button
            className="oops-run-btn"
            style={{ "--accent": accentColor }}
            onClick={runTests}
            disabled={running || showSolution}
          >
            {running ? (
              <span className="oops-run-spinner">⟳ Running…</span>
            ) : (
              "▶ Run & Submit"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
