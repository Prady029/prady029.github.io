"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { personalInfo } from "@/data/portfolio";
import { useTheme } from "@/components/ThemeProvider";

const navLinks = [
  { label: "Experience", href: "/#experience" },
  { label: "Stack", href: "/#skills" },
  { label: "Work", href: "/#projects" },
  { label: "Writing", href: "/#blog" },
  { label: "Credentials", href: "/#credentials" },
  { label: "Contact", href: "/#contact" },
];

function ThemeIcon({ theme }: { theme: "dark" | "light" }) {
  if (theme === "dark") {
    return (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <circle cx="12" cy="12" r="4" />
        <path
          strokeLinecap="round"
          d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41"
        />
      </svg>
    );
  }
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
      />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-200 ${
        scrolled
          ? "bg-[var(--bg)]/85 backdrop-blur-md border-b border-[var(--border)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-editorial mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="text-sm font-medium tracking-tight text-[var(--text)] hover:text-[var(--accent)] transition-colors"
        >
          Pradyumna K. Sahoo
        </Link>

        <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={personalInfo.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-mono font-medium border border-[var(--border-strong)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
          >
            Resume
            <span aria-hidden="true">↗</span>
          </a>

          <button
            type="button"
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            onClick={toggle}
            className="inline-flex items-center justify-center w-8 h-8 rounded-md border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)] hover:border-[var(--border-strong)] transition-colors"
          >
            <ThemeIcon theme={theme} />
          </button>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-8 h-8 rounded-md border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-b border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur-md">
          <div className="max-w-editorial mx-auto px-5 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text)]"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-2 pt-2 border-t border-[var(--border)] text-sm font-mono font-medium text-[var(--accent)]"
            >
              Resume ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
