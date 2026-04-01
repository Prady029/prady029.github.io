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
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4"
      >
        <div
          className={`flex items-center gap-1 rounded-full px-3 py-2 transition-all duration-500 ${
            scrolled
              ? "backdrop-blur-2xl bg-white/[0.06] border border-white/[0.14] shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
              : "backdrop-blur-md bg-white/[0.03] border border-white/[0.07]"
          }`}
        >
          {/* Logo */}
          <a
            href="#hero"
            className="font-heading font-bold text-white mr-4 text-lg px-2 py-1 hover:text-cyan-400 transition-colors duration-200"
          >
            PK<span className="text-cyan-400">.</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 rounded-full text-sm text-white/65 hover:text-white hover:bg-white/[0.08] transition-all duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Resume CTA */}
          <a
            href={personalInfo.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex ml-3 items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold bg-gradient-to-r from-cyan-500 to-violet-500 text-white hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all duration-300 hover:scale-105"
          >
            Resume ↗
          </a>

          {/* Mobile hamburger */}
          <button
            aria-label="Toggle menu"
            className="md:hidden ml-2 p-2 text-white/70 hover:text-white transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="text-lg leading-none">{menuOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </motion.nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.96 }}
            transition={{ duration: 0.22 }}
            className="fixed top-20 left-4 right-4 z-40 rounded-2xl backdrop-blur-2xl bg-white/[0.07] border border-white/[0.12] shadow-[0_8px_40px_rgba(0,0,0,0.6)] p-4 flex flex-col gap-1 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-white/80 hover:text-white hover:bg-white/[0.08] transition-all duration-200 font-medium text-sm"
              >
                {link.label}
              </a>
            ))}
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-center px-4 py-2.5 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-violet-500 text-white text-sm"
            >
              Resume ↗
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
