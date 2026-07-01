import React, { useState, useEffect, useRef } from "react";

/**
 * C Projects — Code Challenge Component
 * Runs C code via the shared /challenges/run-c endpoint (or browser fallback).
 */
export default function CProjectsCodeChallenge({
  challenge,
  accentColor = "#f39c12",
  isCompleted,
  onComplete,
  initialCode,
  onCodeChange,
}) {
  const [code, setCode] = useState(initialCode || challenge?.starterCode || "");
  const [output, setOutput] = useState("");
  const [running, setRunning] = useState(false);
  const [passed, setPassed] = useState(false);

  useEffect(() => {
    if (initialCode !== undefined) setCode(initialCode);
  }, [initialCode]);

  function handleChange(e) {
    setCode(e.target.value);
    onCodeChange?.(e.target.value);
  }

  async function runCode() {
    setRunning(true);
    setOutput("");
    try {
      const res = await fetch("/challenges/run-c", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, language: "c" }),
      });
      const data = await res.json();
      const out = data.output || data.stdout || data.error || "No output";
      setOutput(out);
      if (!isCompleted && data.success) {
        setPassed(true);
        onComplete?.();
      }
    } catch (err) {
      setOutput("Could not reach the C compiler. Check your connection and try again.");
    } finally {
      setRunning(false);
    }
  }

  function resetCode() {
    setCode(challenge?.starterCode || "");
    setOutput("");
    setPassed(false);
    onCodeChange?.(challenge?.starterCode || "");
  }

  return (
    <div className="c-challenge" style={{ "--c-accent": accentColor }}>
      <div className="c-challenge-header">
        <h3 className="c-challenge-title">C Challenge</h3>
        {(isCompleted || passed) && (
          <span className="c-challenge-badge" style={{ background: accentColor }}>
            ✓ Completed
          </span>
        )}
      </div>

      {challenge?.instructions && (
        <div className="c-challenge-instructions">
          <p>{challenge.instructions}</p>
        </div>
      )}

      <div className="c-editor-wrap">
        <textarea
          className="c-code-editor"
          value={code}
          onChange={handleChange}
          spellCheck={false}
          rows={18}
          aria-label="C code editor"
        />
      </div>

      <div className="c-challenge-actions">
        <button
          type="button"
          className="c-run-btn"
          style={{ background: accentColor }}
          onClick={runCode}
          disabled={running}
        >
          {running ? "Running…" : "▶ Run Code"}
        </button>
        <button type="button" className="c-reset-btn" onClick={resetCode}>
          Reset
        </button>
      </div>

      {output && (
        <div className="c-output">
          <span className="c-output-label">Output</span>
          <pre>{output}</pre>
        </div>
      )}
    </div>
  );
}
