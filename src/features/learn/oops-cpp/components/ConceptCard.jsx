import React, { useState } from "react";

// Minimal markdown bold + inline code renderer
function InlineText({ text }) {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
  return (
    <>
      {parts.map((p, i) => {
        if (p.startsWith("**") && p.endsWith("**"))
          return <strong key={i}>{p.slice(2, -2)}</strong>;
        if (p.startsWith("`") && p.endsWith("`"))
          return (
            <code key={i} className="oops-inline-code">
              {p.slice(1, -1)}
            </code>
          );
        return p;
      })}
    </>
  );
}

export default function ConceptCard({ block, accentColor }) {
  const [copied, setCopied] = useState(false);

  function copyCode(text) {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }

  // ── Text block ──────────────────────────────────────────
  if (block.type === "text") {
    return (
      <p className="oops-concept-text">
        <InlineText text={block.content} />
      </p>
    );
  }

  // ── Callout block ────────────────────────────────────────
  if (block.type === "callout") {
    const icons = { info: "💡", tip: "✨", warning: "⚠️" };
    const colors = { info: "#00d4ff", tip: "#b8ff00", warning: "#f59e0b" };
    return (
      <div
        className={`oops-callout oops-callout-${block.variant}`}
        style={{ "--callout-color": colors[block.variant] || accentColor }}
      >
        <span className="oops-callout-icon">
          {icons[block.variant] || "💡"}
        </span>
        <span>
          <InlineText text={block.content} />
        </span>
      </div>
    );
  }

  // ── Code block ───────────────────────────────────────────
  if (block.type === "code") {
    return (
      <div className="oops-code-block">
        {block.label && (
          <div className="oops-code-label">
            <span className="oops-code-lang">
              {block.lang?.toUpperCase() || "C++"}
            </span>
            <span className="oops-code-file">{block.label}</span>
            <button
              className="oops-copy-btn"
              onClick={() => copyCode(block.content)}
            >
              {copied ? "✓ Copied" : "Copy"}
            </button>
          </div>
        )}
        <pre className="oops-pre">
          <code>{block.content}</code>
        </pre>
      </div>
    );
  }

  // ── Table block ──────────────────────────────────────────
  if (block.type === "table") {
    return (
      <div className="oops-table-wrap">
        <table className="oops-table">
          <thead>
            <tr>
              {block.headers.map((h, i) => (
                <th key={i}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, ri) => (
              <tr key={ri}>
                {row.map((cell, ci) => (
                  <td key={ci}>
                    <InlineText text={cell} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return null;
}
