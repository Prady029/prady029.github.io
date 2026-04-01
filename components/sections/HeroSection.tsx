"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo, stats } from "@/data/portfolio";

const floatingBadges = [
  {
    label: "GraphRAG",
    icon: "🕸️",
    color: "bg-cyan-400/10 border-cyan-400/30 text-cyan-300",
    position: "top-6 right-8",
    delay: 0,
    amplitude: -14,
  },
  {
    label: "LLM Fine-tuning",
    icon: "🧠",
    color: "bg-violet-400/10 border-violet-400/30 text-violet-300",
    position: "bottom-12 right-2",
    delay: 1.2,
    amplitude: 12,
  },
  {
    label: "Medical AI",
    icon: "🏥",
    color: "bg-rose-400/10 border-rose-400/30 text-rose-300",
    position: "bottom-24 -left-4",
    delay: 2,
    amplitude: -10,
  },
  {
    label: "GenAI",
    icon: "✨",
    color: "bg-blue-400/10 border-blue-400/30 text-blue-300",
    position: "top-16 -left-2",
    delay: 0.6,
    amplitude: 10,
  },
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setRoleIndex((i) => (i + 1) % personalInfo.roles.length),
      3200,
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 px-4 md:px-8 lg:px-16 z-10"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* ── Left column: text ── */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="flex flex-col"
          >
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/[0.08] text-cyan-400 text-sm font-medium w-fit"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Open to Senior Roles
            </motion.div>

            {/* Name */}
            <h1
              className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-3"
              style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
            >
              <span className="text-white/80">Hi, I&apos;m</span>
              <br />
              <span className="inline-block text-gradient-fix bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                Pradyumna
              </span>
            </h1>

            {/* Animated role */}
            <div className="h-12 flex items-center mb-5 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={roleIndex}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.38 }}
                  className="font-heading text-xl sm:text-2xl font-semibold text-white/70"
                  style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
                >
                  {personalInfo.roles[roleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Bio */}
            <p className="text-white/55 text-base md:text-[1.05rem] leading-relaxed mb-9 max-w-xl">
              {personalInfo.summary}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 mb-12">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-violet-500 text-white hover:shadow-[0_0_35px_rgba(6,182,212,0.45)] transition-all duration-300 hover:scale-[1.03] text-sm"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl font-semibold border border-white/15 text-white/80 hover:text-white hover:bg-white/[0.06] hover:border-white/30 transition-all duration-300 text-sm"
              >
                Get In Touch
              </a>
              <a
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl font-semibold border border-violet-400/35 text-violet-400 hover:bg-violet-400/[0.08] hover:border-violet-400/55 transition-all duration-300 text-sm"
              >
                Resume ↗
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.45 }}
                  className="backdrop-blur-sm bg-white/[0.03] border border-white/[0.07] rounded-xl p-4 text-center hover:border-white/[0.12] transition-colors duration-300"
                >
                  <div
                    className="inline-block text-gradient-fix font-heading text-2xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent"
                    style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-white/45 text-[0.7rem] mt-1 leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Right column: avatar + floating badges ── */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.15 }}
            className="flex items-center justify-center relative h-80 lg:h-auto"
          >
            {/* Outer spinning ring */}
            <div className="absolute w-80 h-80 rounded-full border border-cyan-400/15 animate-spin-slow" />
            {/* Inner reverse ring */}
            <div className="absolute w-64 h-64 rounded-full border border-violet-400/12 animate-spin-reverse-slow" />

            {/* Glow backdrop */}
            <div
              className="absolute w-56 h-56 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)",
                filter: "blur(20px)",
              }}
            />

            {/* Avatar */}
            <div className="relative z-10 w-52 h-52 md:w-60 md:h-60 rounded-full overflow-hidden border-2 border-white/20 shadow-[0_0_60px_rgba(6,182,212,0.18)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={personalInfo.avatar}
                alt="Pradyumna Kumar Sahoo"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating badges */}
            {floatingBadges.map((badge) => (
              <motion.div
                key={badge.label}
                animate={{ y: [0, badge.amplitude, 0] }}
                transition={{
                  duration: 4 + badge.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: badge.delay,
                }}
                className={`absolute ${badge.position} backdrop-blur-md ${badge.color} border rounded-full px-3 py-1.5 text-xs font-semibold flex items-center gap-1.5 whitespace-nowrap z-20`}
              >
                <span>{badge.icon}</span>
                {badge.label}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="flex flex-col items-center mt-20 gap-2"
        >
          <span className="text-white/25 text-[0.65rem] tracking-[0.22em] uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
