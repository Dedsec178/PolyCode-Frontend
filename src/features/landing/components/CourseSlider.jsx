import React, { useRef, useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Boxes,
  Layers3,
  Grid3x3,
  Table2,
  Play,
  Brain,
  FileText,
} from "lucide-react";

/* ─── Course data ───────────────────────────────────────────────
   Add new courses here — they appear in the slider automatically.
   Pull from courseCatalog.js values so it's one source of truth.
──────────────────────────────────────────────────────────────── */
const COURSES = [
  {
    title: "OOPs C++",
    tag: "C++ · Interactive",
    icon: Boxes,
    description:
      "Classes, constructors, inheritance, polymorphism, design principles, and real coding challenges.",
    href: "/learn/oops-cpp",
    accent: "#ffe566",
    level: "Intermediate",
  },
  {
    title: "Pointers C++",
    tag: "C++ · Memory",
    icon: Layers3,
    description:
      "Addresses, dereferencing, nullptr, arrays, smart pointers, callbacks, and safety.",
    href: "/learn/pointers-cpp",
    accent: "#00d4ff",
    level: "Intermediate",
  },
  {
    title: "NumPy · Python",
    tag: "Python · Data",
    icon: Grid3x3,
    description:
      "ndarray basics, shape, dtype, vector math, and hands-on Python challenges with NumPy.",
    href: "/learn/numpy-py",
    accent: "#4dabdc",
    level: "Beginner",
  },
  {
    title: "Pandas · Python",
    tag: "Python · Data",
    icon: Table2,
    description:
      "Series, DataFrames, filtering, cleaning, groupby, merges, and CSV workflows.",
    href: "/learn/pandas-py",
    accent: "#059669",
    level: "Beginner",
  },
  {
    title: "Daily Challenge",
    tag: "All Levels · Routine",
    icon: Brain,
    description:
      "A fresh coding problem every day. Build consistency, sharpen problem-solving skills.",
    href: "/daily-challenge",
    accent: "#a78bfa",
    level: "All Levels",
  },
  {
    title: "Playground",
    tag: "All Languages · Hands-on",
    icon: Play,
    description:
      "Experiment freely — write, run, and test code in the browser with zero setup.",
    href: "/playground",
    accent: "#fb923c",
    level: "All Levels",
  },
  {
    title: "Documentation",
    tag: "Reference · Guides",
    icon: FileText,
    description:
      "Curated guides, syntax notes, examples, and reference material for every language.",
    href: "/hub",
    accent: "#38bdf8",
    level: "All Levels",
  },
];

const CARD_WIDTH = 300; // px — keep in sync with CSS
const GAP = 20;
const AUTO_SCROLL_INTERVAL = 3500; // ms

export default function CoursesSlider() {
  const trackRef = useRef(null);
  const autoRef = useRef(null);
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = COURSES.length;

  /* ── scroll helpers ── */
  const scrollTo = useCallback(
    (index) => {
      if (!trackRef.current) return;
      const clamped = Math.max(0, Math.min(index, total - 1));
      trackRef.current.scrollTo({
        left: clamped * (CARD_WIDTH + GAP),
        behavior: "smooth",
      });
      setActiveIndex(clamped);
    },
    [total],
  );

  const prev = () => scrollTo(activeIndex === 0 ? total - 1 : activeIndex - 1);
  const next = useCallback(
    () => scrollTo(activeIndex === total - 1 ? 0 : activeIndex + 1),
    [activeIndex, scrollTo, total],
  );

  /* ── auto-scroll ── */
  useEffect(() => {
    if (isPaused) return;
    autoRef.current = setInterval(next, AUTO_SCROLL_INTERVAL);
    return () => clearInterval(autoRef.current);
  }, [next, isPaused]);

  /* ── sync dot indicator on manual scroll ── */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const index = Math.round(track.scrollLeft / (CARD_WIDTH + GAP));
      setActiveIndex(index);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="courses"
      className="cs-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="landing-container">
        {/* Header */}
        <div className="cs-header">
          <div>
            <p className="landing-sec-label">Courses &amp; Resources</p>
            <h2 className="cs-title">Pick Something. Start Today.</h2>
          </div>
          <div className="cs-controls">
            <button className="cs-btn" aria-label="Previous" onClick={prev}>
              <ChevronLeft size={18} />
            </button>
            <button className="cs-btn" aria-label="Next" onClick={next}>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Track */}
        <div className="cs-track" ref={trackRef}>
          {COURSES.map((course, i) => {
            const Icon = course.icon;
            const isActive = i === activeIndex;
            return (
              <article
                key={course.title}
                className={`cs-card${isActive ? " cs-card--active" : ""}`}
                style={{ "--accent": course.accent }}
                onClick={() => navigate(course.href)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && navigate(course.href)}
                aria-label={`Open ${course.title}`}
              >
                <div className="cs-card-top">
                  <div className="cs-icon">
                    <Icon size={20} aria-hidden />
                  </div>
                  <span className="cs-level">{course.level}</span>
                </div>
                <span className="cs-tag">{course.tag}</span>
                <h3 className="cs-card-title">{course.title}</h3>
                <p className="cs-card-desc">{course.description}</p>
                <div className="cs-card-footer">
                  <span className="cs-cta">Start now →</span>
                </div>
                <div className="cs-card-glow" aria-hidden />
              </article>
            );
          })}
        </div>

        {/* Dot indicators */}
        <div className="cs-dots" role="tablist" aria-label="Course slides">
          {COURSES.map((course, i) => (
            <button
              key={course.title}
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={`Go to ${course.title}`}
              className={`cs-dot${i === activeIndex ? " cs-dot--active" : ""}`}
              onClick={() => scrollTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
