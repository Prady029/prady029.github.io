"use client";

import { motion } from "framer-motion";
import { experience, certifications, education } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";

const tagPalette: Record<string, string> = {
  // Mondee
  "Medical GraphRAG": "bg-cyan-400/10 text-cyan-300 border-cyan-400/20",
  "Clinical NLP": "bg-rose-400/10 text-rose-300 border-rose-400/20",
  "LLM Fine-tuning": "bg-violet-400/10 text-violet-300 border-violet-400/20",
  "Voice AI": "bg-blue-400/10 text-blue-300 border-blue-400/20",
  "Medgemma-27b": "bg-teal-400/10 text-teal-300 border-teal-400/20",
  MCP: "bg-indigo-400/10 text-indigo-300 border-indigo-400/20",
  // ADP
  "AWS Neptune": "bg-orange-400/10 text-orange-300 border-orange-400/20",
  LangGraph: "bg-purple-400/10 text-purple-300 border-purple-400/20",
  "Process Mining": "bg-amber-400/10 text-amber-300 border-amber-400/20",
  "Agentic AI": "bg-pink-400/10 text-pink-300 border-pink-400/20",
  "Finance AI": "bg-green-400/10 text-green-300 border-green-400/20",
  YOLOv8: "bg-yellow-400/10 text-yellow-300 border-yellow-400/20",
  "Indic NLP": "bg-sky-400/10 text-sky-300 border-sky-400/20",
  // Claim Genius
  Detectron2: "bg-teal-400/10 text-teal-300 border-teal-400/20",
  FastAPI: "bg-green-400/10 text-green-300 border-green-400/20",
  "GradCAM++": "bg-yellow-400/10 text-yellow-300 border-yellow-400/20",
  GAN: "bg-indigo-400/10 text-indigo-300 border-indigo-400/20",
  "Instance Segmentation": "bg-blue-400/10 text-blue-300 border-blue-400/20",
  MLflow: "bg-orange-400/10 text-orange-300 border-orange-400/20",
  XGBoost: "bg-rose-400/10 text-rose-300 border-rose-400/20",
};
const defaultTag = "bg-white/[0.06] text-white/55 border-white/15";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative py-28 px-4 md:px-8 lg:px-16 z-10"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          label="Career"
          title="Work Experience"
          subtitle="5 years building production AI/ML at scale across GenAI, Medical AI, and Data Science."
          align="left"
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical track */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400 via-violet-500/60 to-transparent" />

          <div className="space-y-8">
            {experience.map((role, i) => (
              <motion.div
                key={role.company}
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative pl-16"
              >
                {/* Dot */}
                <div
                  className={`absolute left-5 top-7 -translate-x-1/2 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    role.type === "current"
                      ? "bg-cyan-400 border-cyan-300 shadow-[0_0_18px_rgba(6,182,212,0.6)]"
                      : "bg-space-950 border-violet-500/70"
                  }`}
                  style={role.type !== "current" ? { backgroundColor: "#030712" } : {}}
                />

                {/* Card */}
                <div className="backdrop-blur-md bg-white/[0.025] border border-white/[0.08] rounded-2xl p-6 hover:bg-white/[0.05] hover:border-white/[0.13] transition-all duration-300 group">
                  {/* Top-left accent stripe */}
                  <div
                    className={`absolute top-0 left-6 right-6 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      role.type === "current"
                        ? "bg-gradient-to-r from-cyan-400 to-violet-400"
                        : "bg-gradient-to-r from-violet-400 to-blue-400"
                    }`}
                  />

                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                    <div>
                      <h3
                        className="font-heading text-xl font-bold text-white"
                        style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
                      >
                        {role.title}
                      </h3>
                      <p className="text-cyan-400 font-semibold mt-0.5 text-[0.95rem]">
                        {role.company}
                      </p>
                      <p className="text-white/38 text-sm mt-0.5">{role.location}</p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-2 flex-shrink-0">
                      <span className="text-white/45 text-sm font-mono">
                        {role.period}
                      </span>
                      {role.type === "current" && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 bg-cyan-400/10 border border-cyan-400/30 px-2.5 py-1 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                          Current
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-2.5 mb-5">
                    {role.highlights.map((h, j) => (
                      <li key={j} className="flex gap-3 text-white/65 text-sm leading-relaxed">
                        <span className="text-cyan-400/80 mt-[3px] flex-shrink-0 text-xs">▸</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {role.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs font-medium px-2.5 py-1 rounded-lg border ${
                          tagPalette[tag] ?? defaultTag
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20"
        >
          <h3
            className="font-heading text-2xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
          >
            Certifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="backdrop-blur-sm bg-white/[0.025] border border-white/[0.07] rounded-xl p-4 hover:border-white/[0.14] hover:bg-white/[0.04] transition-all duration-300"
              >
                <span className="text-xl mb-3 block">{cert.emoji}</span>
                <p className="text-white text-sm font-semibold leading-snug mb-1">
                  {cert.title}
                </p>
                <p className="text-cyan-400/80 text-xs">{cert.issuer}</p>
                <p className="text-white/35 text-xs mt-1">{cert.date}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12"
        >
          <h3
            className="font-heading text-2xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
          >
            Education
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="backdrop-blur-sm bg-white/[0.025] border border-white/[0.07] rounded-xl p-4 hover:border-white/[0.14] hover:bg-white/[0.04] transition-all duration-300"
              >
                <span className="text-xl mb-3 block">{edu.emoji}</span>
                <p className="text-white text-sm font-semibold leading-snug mb-1">
                  {edu.degree}
                </p>
                <p className="text-violet-400/80 text-xs">{edu.institution}</p>
                <p className="text-white/35 text-xs mt-1">{edu.location}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
