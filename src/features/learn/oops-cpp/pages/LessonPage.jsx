import React, { useRef, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ALL_LESSONS } from "../data/oopsCurriculum";
import ConceptCard from "../components/ConceptCard";
import CodeChallenge from "../components/CodeChallenge";
import OopsSidebar from "../components/OopsSidebar";
import useOopsProgress from "../hooks/useOopsProgress";

function plainLessonText(text = "") {
  return text.replace(/\*\*/g, "").replace(/`/g, "");
}

export default function LessonPage() {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const [tab, setTab] = useState("theory"); // "theory" | "challenge"
  const {
    user,
    syncState,
    completedMap: progress,
    savedCodeMap,
    notesMap,
    bookmarks,
    completeLesson,
    rememberLesson,
    saveCode,
    saveNote,
    toggleBookmark,
    addTime,
  } = useOopsProgress();
  const [noteDraft, setNoteDraft] = useState("");
  const codeSaveTimer = useRef(null);

  const lesson = ALL_LESSONS.find((l) => l.id === lessonId);
  const lessonIdx = ALL_LESSONS.findIndex((l) => l.id === lessonId);
  const prev = ALL_LESSONS[lessonIdx - 1];
  const next = ALL_LESSONS[lessonIdx + 1];
  const firstTextBlock = lesson?.theory.find((block) => block.type === "text");
  const firstCodeBlock = lesson?.theory.find((block) => block.type === "code");
  const firstCallout = lesson?.theory.find((block) => block.type === "callout");
  const practicePrompts = lesson?.challenge?.tests?.slice(0, 3) || [];
  const briefStepItems = [
    `Identify the problem ${lesson?.title || "this topic"} solves.`,
    "Read the smallest code example before the full explanation.",
    "Change one line in the challenge and run the tests to see the effect.",
  ];

  useEffect(() => {
    setTab("theory");
  }, [lessonId]);

  useEffect(() => {
    if (lessonId) rememberLesson(lessonId);
  }, [lessonId, rememberLesson]);

  useEffect(() => {
    setNoteDraft(notesMap[lessonId] || "");
  }, [lessonId, notesMap]);

  useEffect(() => {
    if (!lessonId) return undefined;
    const id = setInterval(() => addTime(1), 60000);
    return () => clearInterval(id);
  }, [addTime, lessonId]);

  useEffect(
    () => () => {
      window.clearTimeout(codeSaveTimer.current);
    },
    [],
  );

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
  const isBookmarked = bookmarks.includes(lessonId);

  async function handleChallengeComplete() {
    await completeLesson(lesson);
  }

  function handleSaveNote() {
    saveNote(lessonId, noteDraft);
  }

  function handleCodeChange(code) {
    window.clearTimeout(codeSaveTimer.current);
    codeSaveTimer.current = window.setTimeout(() => {
      saveCode(lessonId, code).catch(() => {});
    }, 700);
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
          <button
            type="button"
            className={`oops-bookmark-btn ${isBookmarked ? "active" : ""}`}
            onClick={() => toggleBookmark(lessonId)}
            title={isBookmarked ? "Remove bookmark" : "Bookmark lesson"}
          >
            {isBookmarked ? "★" : "☆"}
          </button>
        </div>

        <div className="oops-lesson-status-strip">
          <span>{user ? `Signed in as ${user.username}` : "Guest mode"}</span>
          <span>
            {syncState === "synced"
              ? "Progress saved to MongoDB"
              : syncState === "syncing"
                ? "Syncing progress..."
                : user
                  ? "Progress sync pending"
                  : "Progress saved locally"}
          </span>
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
              <div className="oops-learning-brief">
                <div className="oops-brief-card">
                  <span className="oops-interactive-label">Start Here</span>
                  <h3>Simple explanation</h3>
                  <p>
                    {plainLessonText(firstTextBlock?.content) ||
                      `This lesson introduces ${lesson.title} in practical C++ terms.`}
                  </p>
                </div>
                <div className="oops-brief-card">
                  <span className="oops-interactive-label">Analogy</span>
                  <h3>Real-life mental model</h3>
                  <p>
                    {plainLessonText(firstCallout?.content) ||
                      `Think of ${lesson.title} as a design decision you make before writing the class, like choosing the right tool before building.`}
                  </p>
                </div>
                <div className="oops-brief-card">
                  <span className="oops-interactive-label">Syntax</span>
                  <h3>What to look for</h3>
                  <p>
                    {firstCodeBlock
                      ? `Study the "${firstCodeBlock.label}" example, then trace which data belongs to the object and which functions form the public interface.`
                      : "Read the code slowly: identify the class name, private state, public methods, and the line where the object is used."}
                  </p>
                </div>
                <div className="oops-brief-card">
                  <span className="oops-interactive-label">Steps</span>
                  <h3>How to learn it</h3>
                  <ol>
                    {briefStepItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ol>
                </div>
                <div className="oops-brief-card">
                  <span className="oops-interactive-label">Mistakes</span>
                  <h3>Common traps</h3>
                  <ul>
                    <li>Making every field public instead of designing an interface.</li>
                    <li>Copying code without checking object lifetime and ownership.</li>
                    <li>Skipping the challenge before testing the concept in code.</li>
                  </ul>
                </div>
                <div className="oops-brief-card oops-brief-wide">
                  <span className="oops-interactive-label">Practice</span>
                  <h3>Before the challenge, answer these</h3>
                  <ul>
                    {practicePrompts.map((item) => (
                      <li key={item.id}>{item.label}</li>
                    ))}
                  </ul>
                </div>
                <div className="oops-brief-card oops-brief-wide">
                  <span className="oops-interactive-label">Mini Quiz</span>
                  <h3>Check yourself</h3>
                  <ul>
                    <li>What data should belong inside the object?</li>
                    <li>Which function is the safest public interface for that data?</li>
                    <li>What would break if this design grew to ten objects?</li>
                  </ul>
                </div>
              </div>
              {lesson.theory.map((block, i) => (
                <ConceptCard
                  key={i}
                  block={block}
                  accentColor={lesson.chapterColor}
                />
              ))}
              <div className="oops-notes-panel">
                <div>
                  <span className="oops-interactive-label">Lesson Notes</span>
                  <h3>Capture your mental model</h3>
                </div>
                <textarea
                  value={noteDraft}
                  onChange={(e) => setNoteDraft(e.target.value)}
                  placeholder="Write a short note, gotcha, or example you want to remember..."
                />
                <button type="button" onClick={handleSaveNote}>
                  Save Note
                </button>
              </div>
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
              initialCode={savedCodeMap[lessonId]}
              onCodeChange={handleCodeChange}
            />
          )}
        </div>

        {/* Prev / Next nav */}
        <div className="oops-lesson-nav">
          {prev ? (
            <button
              className="oops-nav-btn"
              onClick={() => navigate(`/learn/oops-cpp/lesson/${prev.id}`)}
            >
              ← {prev.title}
            </button>
          ) : (
            <div />
          )}
          {next ? (
            <button
              className="oops-nav-btn oops-nav-next"
              onClick={() => navigate(`/learn/oops-cpp/lesson/${next.id}`)}
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
