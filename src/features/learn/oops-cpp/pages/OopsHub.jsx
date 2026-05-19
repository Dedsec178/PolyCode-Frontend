import React from "react";
import { useNavigate } from "react-router-dom";
import { CHAPTERS, TOTAL_XP, ALL_LESSONS } from "../data/oopsCurriculum";
import "./oops.css";

export default function OopsHub() {
  const navigate = useNavigate();
  const progress = JSON.parse(localStorage.getItem("oops_progress") || "{}");
  const completedCount = Object.keys(progress).length;
  const earnedXP = ALL_LESSONS.filter((l) => progress[l.id]).reduce(
    (s, l) => s + l.xp,
    0,
  );
  const pct = Math.round((completedCount / ALL_LESSONS.length) * 100) || 0;

  return (
    <div className="oops-hub">
      {/* Hero */}
      <div className="oops-hero">
        <div className="oops-hero-badge">C++ SPECIALIZATION</div>
        <h1 className="oops-hero-title">
          Object-Oriented
          <br />
          <span className="oops-hero-accent">Programming</span>
        </h1>
        <p className="oops-hero-sub">
          Learn OOP the right way — theory + interactive challenges,
          LeetCode-style.
        </p>

        {/* XP Bar */}
        <div className="oops-xp-bar-wrap">
          <div className="oops-xp-meta">
            <span>
              {completedCount}/{ALL_LESSONS.length} lessons · {earnedXP}/
              {TOTAL_XP} XP
            </span>
            <span>{pct}%</span>
          </div>
          <div className="oops-xp-track">
            <div className="oops-xp-fill" style={{ width: `${pct}%` }} />
          </div>
        </div>
      </div>

      {/* Chapter Grid */}
      <div className="oops-chapters">
        {CHAPTERS.map((ch, i) => {
          const chLessons = ch.lessons;
          const done = chLessons.filter((l) => progress[l.id]).length;
          const chPct = Math.round((done / chLessons.length) * 100) || 0;
          const firstUnfinished = chLessons.find((l) => !progress[l.id]);
          const allDone = done === chLessons.length;

          return (
            <div
              key={ch.id}
              className={`oops-chapter-card ${allDone ? "oops-chapter-done" : ""}`}
              style={{ "--ch-color": ch.color }}
            >
              <div className="oops-chapter-header">
                <span className="oops-chapter-icon">{ch.icon}</span>
                <div>
                  <div className="oops-chapter-num">Chapter {i + 1}</div>
                  <div className="oops-chapter-title">{ch.title}</div>
                </div>
                {allDone && <span className="oops-done-badge">✓ Done</span>}
              </div>

              <div className="oops-chapter-progress-track">
                <div
                  className="oops-chapter-progress-fill"
                  style={{ width: `${chPct}%` }}
                />
              </div>
              <div className="oops-chapter-meta">
                {done}/{chLessons.length} lessons · {chPct}%
              </div>

              <ul className="oops-lesson-list">
                {chLessons.map((l) => {
                  const isDone = !!progress[l.id];
                  return (
                    <li
                      key={l.id}
                      className={`oops-lesson-item ${isDone ? "done" : ""}`}
                      onClick={() => navigate(`/learn/oops-cpp/${l.id}`)}
                    >
                      <span className="oops-lesson-status">
                        {isDone ? "✓" : "○"}
                      </span>
                      <span className="oops-lesson-name">{l.title}</span>
                      <span className="oops-lesson-xp">+{l.xp} XP</span>
                    </li>
                  );
                })}
              </ul>

              <button
                className="oops-chapter-cta"
                onClick={() =>
                  navigate(
                    `/learn/oops-cpp/${firstUnfinished ? firstUnfinished.id : ch.lessons[0].id}`,
                  )
                }
              >
                {allDone
                  ? "Review Chapter →"
                  : done > 0
                    ? "Continue →"
                    : "Start →"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
