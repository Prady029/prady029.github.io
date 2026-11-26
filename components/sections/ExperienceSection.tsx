"use client";

import { motion } from "framer-motion";
import { experience, certifications, education } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative py-24 px-4 md:px-8 lg:px-16 z-10"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          label="Career"
          title="Work Experience"
          subtitle="5+ years building production AI/ML at scale across GenAI, Medical AI, and Enterprise Finance."
          align="left"
        />

        <div className="relative">
          <div className="absolute left-4 sm:left-5 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/70 via-violet-500/40 to-transparent" />

          <div className="space-y-7">
            {experience.map((role, i) => (
              <motion.div
                key={role.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="relative pl-12 sm:pl-16"
              >
                <div
                  className={`absolute left-4 sm:left-5 top-7 -translate-x-1/2 w-4 h-4 rounded-full border-2 ${
                    role.type === "current"
                      ? "bg-cyan-400 border-cyan-200 shadow-[0_0_16px_rgba(6,182,212,0.55)]"
                      : "bg-[#030712] border-violet-400/70"
                  }`}
                />

                <div className="backdrop-blur-md bg-white/[0.025] border border-white/[0.08] rounded-2xl p-6 hover:bg-white/[0.045] hover:border-white/[0.15] transition-all duration-300 group relative">
                  <div
                    className={`absolute top-0 left-6 right-6 h-px rounded-full opacity-0 group-hover:opacity-70 transition-opacity duration-300 ${
                      role.type === "current"
                        ? "bg-gradient-to-r from-cyan-400 to-violet-400"
                        : "bg-gradient-to-r from-violet-400 to-sky-400"
                    }`}
                  />

                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2.5 mb-4">
                    <div>
                      <h3
                        className="font-heading text-lg sm:text-xl font-bold text-white"
                        style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
                      >
                        {role.title}
                      </h3>
                      <p className="text-cyan-400 font-semibold mt-0.5 text-sm sm:text-[0.95rem]">
                        {role.company}
                      </p>
                      <p className="text-white/45 text-xs sm:text-sm mt-0.5">{role.location}</p>
                    </div>
                    <div className="flex flex-row sm:flex-col items-center sm:items-end gap-2 flex-shrink-0">
                      <span className="text-white/50 text-xs sm:text-sm font-mono">
                        {role.period}
                      </span>
                      {role.type === "current" && (
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-cyan-400 bg-cyan-400/10 border border-cyan-400/25 px-2.5 py-0.5 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                          Current
                        </span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-2.5 mb-5">
                    {role.highlights.map((h, j) => (
                      <li key={j} className="flex gap-3 text-white/65 text-sm leading-relaxed">
                        <span className="text-cyan-400/80 mt-[3px] flex-shrink-0 text-xs">▸</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {role.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs font-medium px-2.5 py-1 rounded-lg border ${
                          role.type === "current"
                            ? "bg-cyan-400/[0.07] text-cyan-300 border-cyan-400/20"
                            : "bg-white/[0.04] text-white/65 border-white/[0.10]"
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="mt-16"
        >
          <h3
            className="font-heading text-2xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
          >
            Certifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert) => {
              const inner = (
                <>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-cyan-400/[0.08] border border-cyan-400/20 text-cyan-400">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </span>
                    {cert.url && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3.5 h-3.5 text-white/35 group-hover:text-cyan-400 transition-colors shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7m0 0H9m8 0v8" />
                      </svg>
                    )}
                  </div>
                  <p className="text-white text-sm font-semibold leading-snug mb-1.5">
                    {cert.title}
                  </p>
                  <p className="text-cyan-400/85 text-xs">{cert.issuer}</p>
                  <p className="text-white/40 text-xs mt-1 font-mono">{cert.date}</p>
                </>
              );

              return cert.url ? (
                <a
                  key={cert.title}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group backdrop-blur-sm bg-white/[0.025] border border-white/[0.08] rounded-xl p-4 hover:border-cyan-400/35 hover:bg-white/[0.045] transition-all duration-200 block"
                >
                  {inner}
                </a>
              ) : (
                <div
                  key={cert.title}
                  className="backdrop-blur-sm bg-white/[0.025] border border-white/[0.08] rounded-xl p-4"
                >
                  {inner}
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.45, delay: 0.2 }}
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
                className="backdrop-blur-sm bg-white/[0.025] border border-white/[0.08] rounded-xl p-5 hover:border-white/[0.15] hover:bg-white/[0.04] transition-all duration-200"
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-violet-400/[0.08] border border-violet-400/20 text-violet-400 mb-3">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </span>
                <p className="text-white text-sm font-semibold leading-snug mb-1">
                  {edu.degree}
                </p>
                <p className="text-violet-400/85 text-xs">{edu.institution}</p>
                <p className="text-white/40 text-xs mt-1">{edu.location} · {edu.period}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
