"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { useTheme } from "@/components/ThemeProvider";

const navLinks = [
  { label: "Overview", href: "#hero" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Writing", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

function ThemeIcon({ theme }: { theme: "dark" | "light" }) {
  if (theme === "dark") {
    return (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <circle cx="12" cy="12" r="4" />
        <path strokeLinecap="round" d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41" />
      </svg>
    );
  }
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4"
      >
        <div
          className={`flex items-center gap-1 rounded-full px-3 py-1.5 transition-all duration-300 ${
            scrolled
              ? "backdrop-blur-2xl dark:bg-[#080d1a]/80 bg-white/85 border dark:border-white/[0.14] border-slate-900/[0.10] shadow-[0_8px_32px_rgba(0,0,0,0.22)]"
              : "backdrop-blur-xl dark:bg-white/[0.04] bg-white/65 border dark:border-white/[0.08] border-slate-900/[0.08]"
          }`}
        >
          <a
            href="#hero"
            className="font-heading font-bold dark:text-white text-slate-900 mr-3 text-base px-2.5 py-1 hover:text-cyan-400 transition-colors duration-200 tracking-tight"
          >
            PK<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 rounded-full text-sm dark:text-white/70 text-slate-600 hover:dark:text-white hover:text-slate-900 dark:hover:bg-white/[0.08] hover:bg-slate-900/[0.05] transition-all duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            aria-label="Toggle theme"
            onClick={toggle}
            className="hidden md:flex items-center justify-center ml-1.5 w-8 h-8 rounded-full dark:text-white/75 text-slate-600 hover:dark:text-white hover:text-slate-900 dark:hover:bg-white/[0.08] hover:bg-slate-900/[0.06] transition-all duration-200"
          >
            <ThemeIcon theme={theme} />
          </button>

          <a
            href={personalInfo.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex ml-2 items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-cyan-500 to-violet-500 text-white hover:shadow-[0_0_24px_rgba(6,182,212,0.35)] transition-all duration-200"
          >
            Resume
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7m0 0H9m8 0v8" />
            </svg>
          </a>

          <button
            aria-label="Toggle theme"
            onClick={toggle}
            className="md:hidden flex items-center justify-center w-8 h-8 rounded-full dark:text-white/75 text-slate-600"
          >
            <ThemeIcon theme={theme} />
          </button>

          <button
            aria-label="Toggle menu"
            className="md:hidden flex items-center justify-center w-8 h-8 rounded-full dark:text-white/75 text-slate-600"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="fixed top-20 left-4 right-4 z-40 rounded-2xl backdrop-blur-2xl dark:bg-[#080d1a]/90 bg-white/95 border dark:border-white/[0.12] border-slate-900/[0.10] shadow-[0_12px_40px_rgba(0,0,0,0.22)] p-3 flex flex-col gap-1 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl dark:text-white/80 text-slate-700 hover:dark:text-white hover:text-slate-900 dark:hover:bg-white/[0.08] hover:bg-slate-900/[0.05] transition-all duration-150 font-medium text-sm"
              >
                {link.label}
              </a>
            ))}
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 text-center px-4 py-2.5 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-violet-500 text-white text-sm"
            >
              Resume ↗
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
