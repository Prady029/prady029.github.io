"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo, stats } from "@/data/portfolio";

const heroBadges = [
  { label: "GraphRAG", dot: "bg-cyan-400", pos: "top-6 right-4 sm:right-6", delay: 0, amp: -8 },
  { label: "LLM Fine-Tuning", dot: "bg-violet-400", pos: "bottom-10 right-0 sm:right-2", delay: 1.1, amp: 8 },
  { label: "Medical AI", dot: "bg-emerald-400", pos: "bottom-20 left-0", delay: 1.8, amp: -7 },
  { label: "Voice & Vision", dot: "bg-sky-400", pos: "top-14 left-0 sm:left-2", delay: 0.6, amp: 7 },
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
      className="relative min-h-screen flex items-center pt-28 pb-16 px-4 md:px-8 lg:px-16 z-10"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col"
          >
            <div className="mb-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-400/25 bg-cyan-400/[0.07] text-cyan-400 text-xs font-semibold tracking-wide w-fit">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Open to Senior AI/ML Roles
            </div>

            <h1
              className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.08] tracking-tight mb-4"
              style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
            >
              <span className="text-white/75 block text-2xl sm:text-3xl font-medium mb-1">
                Hi, I&apos;m
              </span>
              <span className="text-gradient-fix bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-400 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>

            <div className="h-10 flex items-center mb-5 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={roleIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="font-heading text-lg sm:text-xl font-semibold text-white/70"
                  style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
                >
                  {personalInfo.roles[roleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            <p className="text-white/60 text-base md:text-[1.03rem] leading-relaxed mb-8 max-w-xl">
              {personalInfo.summary}
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-violet-500 text-white hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-200 hover:-translate-y-0.5 text-sm md:text-base"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl font-semibold border border-white/15 text-white/85 hover:text-white hover:bg-white/[0.06] hover:border-white/30 transition-all duration-200 text-sm md:text-base"
              >
                Get In Touch
              </a>
              <a
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl font-semibold border border-violet-400/30 text-violet-400 hover:bg-violet-400/[0.08] hover:border-violet-400/50 transition-all duration-200 text-sm md:text-base inline-flex items-center gap-1.5"
              >
                Resume
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7m0 0H9m8 0v8" />
                </svg>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-3 max-w-lg">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                  className="backdrop-blur-md bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-center hover:border-white/[0.15] transition-colors"
                >
                  <div
                    className="inline-block text-gradient-fix font-heading text-2xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent"
                    style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-white/50 text-xs mt-1 leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
            className="flex items-center justify-center relative h-80 sm:h-96 max-w-md mx-auto w-full"
          >
            <div className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full border border-cyan-400/15 animate-spin-slow" />
            <div className="absolute w-60 h-60 sm:w-64 sm:h-64 rounded-full border border-violet-400/15 animate-spin-reverse-slow" />

            <div
              className="absolute w-56 h-56 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(6,182,212,0.14) 0%, transparent 70%)",
                filter: "blur(24px)",
              }}
            />

            <div className="relative z-10 w-52 h-52 sm:w-60 sm:h-60 rounded-full overflow-hidden border border-white/20 shadow-[0_0_50px_rgba(6,182,212,0.16)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={personalInfo.avatar}
                alt="Pradyumna Kumar Sahoo"
                className="w-full h-full object-cover"
              />
            </div>

            {heroBadges.map((badge) => (
              <motion.div
                key={badge.label}
                animate={{ y: [0, badge.amp, 0] }}
                transition={{
                  duration: 4.5 + badge.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: badge.delay,
                }}
                className={`absolute ${badge.pos} backdrop-blur-xl bg-white/[0.06] border border-white/[0.14] text-white/90 rounded-full px-3 py-1.5 text-xs font-medium flex items-center gap-2 whitespace-nowrap z-20 shadow-lg`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${badge.dot}`} />
                {badge.label}
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="hidden sm:flex flex-col items-center mt-16 gap-2"
        >
          <span className="text-white/30 text-[0.65rem] tracking-[0.22em] uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-7 bg-gradient-to-b from-white/30 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
