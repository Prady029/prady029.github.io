"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo, stats } from "@/data/portfolio";

const capabilityPillars = [
  "Architect medical-grade AI systems",
  "Turn research into product direction",
  "Ship decision-ready analytics",
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
      id="about"
      className="relative min-h-screen flex items-center pt-28 pb-16 px-4 md:px-8 lg:px-16 z-10"
    >
      <div id="top" className="absolute -top-28" />
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="flex flex-col"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="mb-6 inline-flex items-center gap-2 rounded-md border border-slate-200/15 bg-slate-800/50 px-3 py-1.5 text-sm text-slate-200 w-fit"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Open to senior AI and data science roles
            </motion.div>

            <h1
              className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white"
              style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
            >
              Turning complex AI research into decisions teams can move on.
            </h1>

            <div className="h-10 flex items-center mt-5 mb-4 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={roleIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="font-heading text-lg sm:text-xl font-semibold text-cyan-300"
                  style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
                >
                  {personalInfo.roles[roleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            <p className="text-slate-300/90 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
              {personalInfo.summary}
            </p>

            <div className="grid gap-3 mb-10">
              {capabilityPillars.map((pillar) => (
                <div
                  key={pillar}
                  className="flex items-start gap-3 text-slate-200"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                  <span>{pillar}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mb-12">
              <a
                href="#projects"
                className="px-6 py-3 rounded-md font-medium bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors duration-200"
              >
                View recent work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-md font-medium border border-slate-200/20 text-slate-200 hover:bg-white/5 transition-colors duration-200"
              >
                Let&apos;s connect
              </a>
              <a
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-md font-medium border border-cyan-400/40 text-cyan-300 hover:bg-cyan-400/10 transition-colors duration-200"
              >
                Resume ↗
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 + i * 0.08, duration: 0.4 }}
                  className="bg-slate-900/70 border border-slate-200/10 rounded-lg p-4 text-left"
                >
                  <div className="font-heading text-2xl font-bold text-cyan-300">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-xs mt-1 leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            <div className="rounded-2xl border border-slate-200/10 bg-slate-900/70 p-8">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-400 mb-3">
                Strategy, analytics, and market intelligence
              </p>
              <h2 className="font-heading text-2xl text-white mb-4">
                I help teams move from uncertainty to decision-ready execution.
              </h2>
              <p className="text-slate-300 leading-relaxed">
                I work across medical AI, GenAI, and applied data science to build systems that reduce ambiguity, improve trust, and speed up product decisions.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/10 bg-slate-900/70 p-6 flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border border-slate-200/20">
              <img
                src={personalInfo.avatar}
                alt="Pradyumna Kumar Sahoo"
                className="w-full h-full object-cover"
              />
              </div>
              <div>
                <p className="text-white font-medium">{personalInfo.name}</p>
                <p className="text-slate-400 text-sm">{personalInfo.location}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
