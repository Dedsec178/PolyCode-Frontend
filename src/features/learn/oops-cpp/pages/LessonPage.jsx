import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ALL_LESSONS, CHAPTERS } from "../data/oopsCurriculum";
import ConceptCard from "../components/ConceptCard";
import CodeChallenge from "../components/CodeChallenge";
import OopsSidebar from "../components/OopsSidebar";
import "./oops.css";

export default function LessonPage() {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const [tab, setTab] = useState("theory"); // "theory" | "challenge"
  const [progress, setProgress] = useState(() =>
    JSON.parse(localStorage.getItem("oops_progress") || "{}"),
  );

  const lesson = ALL_LESSONS.find((l) => l.id === lessonId);
  const lessonIdx = ALL_LESSONS.findIndex((l) => l.id === lessonId);
  const prev = ALL_LESSONS[lessonIdx - 1];
  const next = ALL_LESSONS[lessonIdx + 1];

  useEffect(() => {
    setTab("theory");
  }, [lessonId]);

  if (!lesson) {
    return (
      <div className="oops-not-found">
        <p>Lesson not found.</p>
        <button onClick={() => navigate("/learn/oops-cpp")}>
          ← Back to Hub
        </button>
      </div>
    );
  }

  const isCompleted = !!progress[lessonId];

  function handleChallengeComplete() {
    const newProgress = {
      ...progress,
      [lessonId]: { xp: lesson.xp, at: Date.now() },
    };
    setProgress(newProgress);
    localStorage.setItem("oops_progress", JSON.stringify(newProgress));
  }

  return (
    <div className="oops-lesson-page">
      {/* Sidebar */}
      <OopsSidebar currentLessonId={lessonId} progress={progress} />

      {/* Main */}
      <div className="oops-lesson-main">
        {/* Top bar */}
        <div className="oops-lesson-topbar">
          <button
            className="oops-back-btn"
            onClick={() => navigate("/learn/oops-cpp")}
          >
            ← OOP C++
          </button>
          <div className="oops-lesson-breadcrumb">
            <span style={{ color: `var(--ch-color, ${lesson.chapterColor})` }}>
              {lesson.chapterTitle}
            </span>
            <span className="oops-bc-sep">›</span>
            <span>{lesson.title}</span>
          </div>
          {isCompleted && (
            <span className="oops-completed-badge">✓ Completed</span>
          )}
        </div>

        {/* Tab switcher — FCC style */}
        <div className="oops-tabs">
          <button
            className={`oops-tab ${tab === "theory" ? "active" : ""}`}
            onClick={() => setTab("theory")}
          >
            📖 Theory
          </button>
          <button
            className={`oops-tab ${tab === "challenge" ? "active" : ""}`}
            onClick={() => setTab("challenge")}
          >
            ⚡ Challenge <span className="oops-tab-xp">+{lesson.xp} XP</span>
          </button>
        </div>

        {/* Content */}
        <div className="oops-lesson-content">
          {tab === "theory" ? (
            <div className="oops-theory-pane">
              <h2 className="oops-lesson-heading">{lesson.title}</h2>
              {lesson.theory.map((block, i) => (
                <ConceptCard
                  key={i}
                  block={block}
                  accentColor={lesson.chapterColor}
                />
              ))}
              <div className="oops-theory-footer">
                <button
                  className="oops-cta-btn"
                  onClick={() => setTab("challenge")}
                >
                  Ready? Take the Challenge →
                </button>
              </div>
            </div>
          ) : (
            <CodeChallenge
              challenge={lesson.challenge}
              accentColor={lesson.chapterColor}
              isCompleted={isCompleted}
              onComplete={handleChallengeComplete}
            />
          )}
        </div>

        {/* Prev / Next nav */}
        <div className="oops-lesson-nav">
          {prev ? (
            <button
              className="oops-nav-btn"
              onClick={() => navigate(`/learn/oops-cpp/${prev.id}`)}
            >
              ← {prev.title}
            </button>
          ) : (
            <div />
          )}
          {next ? (
            <button
              className="oops-nav-btn oops-nav-next"
              onClick={() => navigate(`/learn/oops-cpp/${next.id}`)}
            >
              {next.title} →
            </button>
          ) : (
            <button
              className="oops-nav-btn oops-nav-next"
              onClick={() => navigate("/learn/oops-cpp")}
            >
              Finish Module →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
