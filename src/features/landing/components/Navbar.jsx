import React, { useEffect } from "react";
import { ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { href: "#modules", label: "Features" },
  { href: "#courses", label: "Courses" },
  { href: "#get-started", label: "Languages" },
  { href: "/hub", label: "Docs" },
];

export default function Navbar() {
  useEffect(() => {
    const nav = document.querySelector(".landing-navbar");
    const onScroll = () => {
      nav?.classList.toggle("landing-navbar--scrolled", window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = href;
    }
  };

  return (
    <header className="landing-navbar">
      <div className="landing-container">
        <div className="landing-navbar-inner">
          {/* Brand */}
          <a href="#top" className="landing-brand">
            <div className="landing-brand-mark">
              <img
                src="/images/polycode-logo.png"
                alt="PolyCode Logo"
                className="landing-logo"
              />
            </div>
            <div className="landing-brand-text">
              <span className="landing-logo-text">PolyCode</span>
              <span className="landing-logo-sub">AI Learning Platform</span>
            </div>
          </a>

          {/* Nav links */}
          <nav className="landing-nav-links">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                className="landing-nav-link"
                onClick={() => handleNav(link.href)}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <a href="#get-started" className="landing-btn-primary">
            Start Learning
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </header>
  );
}
