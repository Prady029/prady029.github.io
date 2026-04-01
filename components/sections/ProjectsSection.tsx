"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";

const languageColors: Record<string, string> = {
  Python: "bg-blue-400/12 text-blue-300 border-blue-400/22",
  "Jupyter Notebook": "bg-orange-400/12 text-orange-300 border-orange-400/22",
  MATLAB: "bg-red-400/12 text-red-300 border-red-400/22",
  JavaScript: "bg-yellow-400/12 text-yellow-300 border-yellow-400/22",
  TypeScript: "bg-cyan-400/12 text-cyan-300 border-cyan-400/22",
};

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.48 } },
};

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative py-28 px-4 md:px-8 lg:px-16 z-10"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Open Source"
          title="Featured Projects"
          subtitle="Research and personal projects spanning multi-label learning, medical AI, quantum computing, and recommender systems."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
        >
          {projects.map((project) => (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group relative backdrop-blur-md bg-white/[0.025] border border-white/[0.08] rounded-2xl p-6 flex flex-col hover:bg-white/[0.05] hover:border-white/[0.14] hover:shadow-[0_12px_50px_rgba(6,182,212,0.07)] transition-all duration-300"
            >
              {/* Top accent */}
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-cyan-400 to-violet-400 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-300" />

              {/* Folder icon + star */}
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{project.emoji}</span>
                <div className="flex items-center gap-1 text-white/38 text-xs">
                  <span>⭐</span>
                  <span>{project.stars}</span>
                  <span className="ml-2 text-white/25 group-hover:text-white/60 transition-colors duration-200">
                    ↗
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3
                className="font-heading font-bold text-white text-[0.95rem] mb-2 group-hover:text-cyan-300 transition-colors duration-250 leading-snug"
                style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
              >
                {project.name}
              </h3>

              {/* Description */}
              <p className="text-white/52 text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-md border bg-white/[0.03] border-white/[0.09] text-white/45"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Language */}
              <span
                className={`text-xs font-medium px-2.5 py-1 rounded-lg border w-fit ${
                  languageColors[project.language] ??
                  "bg-white/[0.05] text-white/50 border-white/10"
                }`}
              >
                {project.language}
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* View all on GitHub */}
        <div className="flex justify-center mt-12">
          <a
            href="https://github.com/Prady029"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/12 text-white/65 hover:text-white hover:bg-white/[0.05] hover:border-white/22 transition-all duration-300 text-sm font-medium"
          >
            View All Repositories on GitHub
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
