"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/10"
      >
        <div
          className={`mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 md:px-8 transition-all duration-300 ${
            scrolled
              ? "bg-slate-950/90 backdrop-blur-lg"
              : "bg-slate-950/70 backdrop-blur-sm"
          }`}
        >
          <a
            href="#top"
            className="font-heading font-semibold text-white text-base tracking-tight hover:text-cyan-300 transition-colors duration-200"
          >
            {personalInfo.name}
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-md text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href={personalInfo.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1 rounded-md border border-cyan-400/35 px-3 py-2 text-sm font-medium text-cyan-300 hover:bg-cyan-400/10 transition-colors duration-200"
          >
            Resume ↗
          </a>

          <button
            aria-label="Toggle menu"
            className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="text-lg leading-none">{menuOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 border-b border-slate-200/10 bg-slate-950/95 backdrop-blur-lg p-4 flex flex-col gap-1 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-2.5 rounded-md text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200 font-medium text-sm"
              >
                {link.label}
              </a>
            ))}
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-center px-4 py-2.5 rounded-md border border-cyan-400/35 text-cyan-300 font-medium text-sm hover:bg-cyan-400/10"
            >
              Resume ↗
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
