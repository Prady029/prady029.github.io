"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";

const colorMap: Record<
  string,
  { badge: string; glow: string; accent: string; bar: string }
> = {
  cyan: {
    badge: "bg-cyan-400/[0.08] text-cyan-300 border-cyan-400/20",
    glow: "hover:shadow-[0_8px_40px_rgba(6,182,212,0.10)]",
    accent: "text-cyan-400",
    bar: "from-cyan-400 to-cyan-600",
  },
  violet: {
    badge: "bg-violet-400/[0.08] text-violet-300 border-violet-400/20",
    glow: "hover:shadow-[0_8px_40px_rgba(139,92,246,0.10)]",
    accent: "text-violet-400",
    bar: "from-violet-400 to-violet-600",
  },
  blue: {
    badge: "bg-blue-400/[0.08] text-blue-300 border-blue-400/20",
    glow: "hover:shadow-[0_8px_40px_rgba(59,130,246,0.10)]",
    accent: "text-blue-400",
    bar: "from-blue-400 to-blue-600",
  },
  amber: {
    badge: "bg-amber-400/[0.08] text-amber-300 border-amber-400/20",
    glow: "hover:shadow-[0_8px_40px_rgba(245,158,11,0.10)]",
    accent: "text-amber-400",
    bar: "from-amber-400 to-amber-600",
  },
  green: {
    badge: "bg-green-400/[0.08] text-green-300 border-green-400/20",
    glow: "hover:shadow-[0_8px_40px_rgba(74,222,128,0.10)]",
    accent: "text-green-400",
    bar: "from-green-400 to-green-600",
  },
  sky: {
    badge: "bg-sky-400/[0.08] text-sky-300 border-sky-400/20",
    glow: "hover:shadow-[0_8px_40px_rgba(56,189,248,0.10)]",
    accent: "text-sky-400",
    bar: "from-sky-400 to-sky-600",
  },
};

function CategoryIcon({ color }: { color: string }) {
  const cls = "w-5 h-5 shrink-0";
  if (color === "violet") {
    return (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    );
  }
  if (color === "blue") {
    return (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <circle cx="6" cy="6" r="2.5" /><circle cx="18" cy="6" r="2.5" /><circle cx="12" cy="18" r="2.5" />
        <path strokeLinecap="round" d="M8.2 7.2L11 15.8M15.8 7.2L13 15.8M8.5 6h7" />
      </svg>
    );
  }
  if (color === "amber") {
    return (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z" />
        <circle cx="12" cy="12" r="2.5" />
      </svg>
    );
  }
  if (color === "green") {
    return (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    );
  }
  if (color === "sky") {
    return (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    );
  }
  return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>
  );
}

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 px-4 md:px-8 lg:px-16 z-10">
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
                className={`group relative backdrop-blur-md bg-white/[0.025] border border-white/[0.08] rounded-2xl p-6 hover:bg-white/[0.045] hover:border-white/[0.15] transition-all duration-300 ${c.glow}`}
              >
                <div
                  className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r ${c.bar} opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-full`}
                />

                <div className="flex items-center gap-2.5 mb-4">
                  <span className={c.accent}>
                    <CategoryIcon color={group.color} />
                  </span>
                  <h3
                    className="font-heading text-base font-bold text-white"
                    style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
                  >
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className={`text-xs font-medium px-2.5 py-1 rounded-lg border ${c.badge} transition-colors duration-150`}
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
