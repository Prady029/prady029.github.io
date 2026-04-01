"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";

const colorMap: Record<
  string,
  { badge: string; glow: string; accent: string; bar: string }
> = {
  cyan: {
    badge: "bg-cyan-400/[0.09] text-cyan-300 border-cyan-400/20",
    glow: "hover:shadow-[0_8px_48px_rgba(6,182,212,0.12)]",
    accent: "text-cyan-400",
    bar: "from-cyan-400 to-cyan-600",
  },
  violet: {
    badge: "bg-violet-400/[0.09] text-violet-300 border-violet-400/20",
    glow: "hover:shadow-[0_8px_48px_rgba(139,92,246,0.12)]",
    accent: "text-violet-400",
    bar: "from-violet-400 to-violet-600",
  },
  blue: {
    badge: "bg-blue-400/[0.09] text-blue-300 border-blue-400/20",
    glow: "hover:shadow-[0_8px_48px_rgba(59,130,246,0.12)]",
    accent: "text-blue-400",
    bar: "from-blue-400 to-blue-600",
  },
  amber: {
    badge: "bg-amber-400/[0.09] text-amber-300 border-amber-400/20",
    glow: "hover:shadow-[0_8px_48px_rgba(245,158,11,0.12)]",
    accent: "text-amber-400",
    bar: "from-amber-400 to-amber-600",
  },
  green: {
    badge: "bg-green-400/[0.09] text-green-300 border-green-400/20",
    glow: "hover:shadow-[0_8px_48px_rgba(74,222,128,0.12)]",
    accent: "text-green-400",
    bar: "from-green-400 to-green-600",
  },
};

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-28 px-4 md:px-8 lg:px-16 z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Expertise"
          title="Skills & Technologies"
          subtitle="A battle-tested toolkit spanning GenAI, Knowledge Graphs, Computer Vision, and production MLOps — built over 5+ years."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
        >
          {skills.map((group) => {
            const c = colorMap[group.color] ?? colorMap.cyan;
            return (
              <motion.div
                key={group.category}
                variants={cardVariants}
                className={`group relative backdrop-blur-md bg-white/[0.025] border border-white/[0.08] rounded-2xl p-6 hover:bg-white/[0.05] hover:border-white/[0.14] transition-all duration-350 ${c.glow}`}
              >
                {/* Top-left accent line */}
                <div
                  className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r ${c.bar} opacity-0 group-hover:opacity-40 transition-opacity duration-350 rounded-full`}
                />

                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{group.icon}</span>
                  <h3
                    className={`font-heading text-[1.05rem] font-bold ${c.accent}`}
                    style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
                  >
                    {group.category}
                  </h3>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className={`text-xs font-medium px-2.5 py-1 rounded-lg border ${c.badge} hover:scale-105 transition-transform duration-150 cursor-default`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
