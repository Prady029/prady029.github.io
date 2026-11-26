"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";

const languageColors: Record<string, string> = {
  Python: "bg-blue-400/10 text-blue-300 border-blue-400/20",
  "Jupyter Notebook": "bg-orange-400/10 text-orange-300 border-orange-400/20",
  MATLAB: "bg-red-400/10 text-red-300 border-red-400/20",
  JavaScript: "bg-amber-400/10 text-amber-300 border-amber-400/20",
  TypeScript: "bg-cyan-400/10 text-cyan-300 border-cyan-400/20",
};

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.42 } },
};

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative py-24 px-4 md:px-8 lg:px-16 z-10"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Open Source"
          title="Featured Projects"
          subtitle="Interactive web apps, multi-label learning research, and GenAI engineering projects."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
        >
          {projects.map((project) => (
            <motion.article
              key={project.name}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 320, damping: 24 }}
              className="group relative backdrop-blur-md bg-white/[0.025] border border-white/[0.08] rounded-2xl p-6 flex flex-col hover:bg-white/[0.045] hover:border-white/[0.16] hover:shadow-[0_12px_45px_rgba(6,182,212,0.08)] transition-all duration-300"
            >
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-cyan-400 to-violet-400 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300" />

              <div className="flex items-start justify-between gap-2 mb-4">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-white/[0.05] border border-white/[0.09] text-cyan-400">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                </span>

                <div className="flex items-center gap-2">
                  {project.badge && (
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/25">
                      {project.badge}
                    </span>
                  )}
                  {project.stars > 0 && (
                    <span className="inline-flex items-center gap-1 text-white/45 text-xs font-mono">
                      <svg className="w-3.5 h-3.5 text-amber-400/80" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {project.stars}
                    </span>
                  )}
                </div>
              </div>

              <h3
                className="font-heading font-bold text-white text-base mb-2 group-hover:text-cyan-300 transition-colors duration-200 leading-snug"
                style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
              >
                <a
                  href={project.liveUrl ?? project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {project.name}
                </a>
              </h3>

              <p className="text-white/55 text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-md border bg-white/[0.03] border-white/[0.09] text-white/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between gap-2 pt-3 border-t border-white/[0.07]">
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-lg border w-fit ${
                    languageColors[project.language] ??
                    "bg-white/[0.05] text-white/60 border-white/10"
                  }`}
                >
                  {project.language}
                </span>

                <div className="flex items-center gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-lg bg-cyan-400/15 text-cyan-300 border border-cyan-400/30 hover:bg-cyan-400/25 transition-colors"
                    >
                      Live App ↗
                    </a>
                  )}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-white/55 hover:text-white transition-colors"
                  >
                    Repo ↗
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="flex justify-center mt-10">
          <a
            href="https://github.com/Prady029"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/12 text-white/75 hover:text-white hover:bg-white/[0.05] hover:border-white/25 transition-all duration-200 text-sm font-medium"
          >
            View All Repositories on GitHub
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
