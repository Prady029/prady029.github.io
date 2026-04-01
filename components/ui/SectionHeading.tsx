"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45 }}
      className={`flex flex-col mb-14 ${isCenter ? "items-center text-center" : "items-start text-left"}`}
    >
      <span className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 mb-3">
        {label}
      </span>
      <h2
        className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 mb-4 leading-tight"
        style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-slate-300/90 text-lg leading-relaxed ${isCenter ? "max-w-2xl" : "max-w-xl"}`}
        >
          {subtitle}
        </p>
      )}
      <div className="mt-5 h-px w-16 bg-slate-500/60 rounded-full" />
    </motion.div>
  );
}
