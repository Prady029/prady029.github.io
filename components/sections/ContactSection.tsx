"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";

const socials = [
  {
    icon: "GH",
    label: "GitHub",
    url: personalInfo.github,
    colorClass:
      "hover:text-white hover:border-white/30 hover:bg-white/[0.06]",
  },
  {
    icon: "IN",
    label: "LinkedIn",
    url: personalInfo.linkedin,
    colorClass:
      "hover:text-blue-400 hover:border-blue-400/30 hover:bg-blue-400/[0.05]",
  },
  {
    icon: "MD",
    label: "Medium",
    url: personalInfo.medium,
    colorClass:
      "hover:text-white hover:border-white/30 hover:bg-white/[0.06]",
  },
  {
    icon: "X",
    label: "Twitter",
    url: personalInfo.twitter,
    colorClass:
      "hover:text-sky-400 hover:border-sky-400/30 hover:bg-sky-400/[0.05]",
  },
  {
    icon: "TG",
    label: "Telegram",
    url: personalInfo.telegram,
    colorClass:
      "hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-cyan-400/[0.05]",
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-28 px-4 md:px-8 lg:px-16 z-10"
    >
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          label="Contact"
          title="If you want me to add value to what you are building, let's talk."
          subtitle="Available for senior AI roles, consulting engagements, and research-led product collaborations."
        />

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="relative bg-slate-900/70 border border-slate-200/10 rounded-2xl p-8 md:p-12 text-center mb-8 overflow-hidden"
        >
          {/* Background glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(6,182,212,0.08) 0%, transparent 60%)",
            }}
          />

          {/* Top accent line */}
          <div className="absolute top-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent rounded-full" />

          {/* Avatar */}
          <div className="relative w-20 h-20 rounded-full mx-auto mb-6 overflow-hidden border-2 border-white/20 shadow-[0_0_30px_rgba(6,182,212,0.15)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={personalInfo.avatar}
              alt="Pradyumna Kumar Sahoo"
              className="w-full h-full object-cover"
            />
          </div>

          <h3
            className="font-heading text-2xl font-bold text-white mb-1"
            style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
          >
            Pradyumna Kumar Sahoo
          </h3>
          <p className="text-cyan-400 font-semibold text-sm mb-1">
            Senior Data Scientist
          </p>
          <p className="text-white/40 text-sm mb-2">📍 Hyderabad, India</p>
          <p className="text-white/40 text-sm mb-8">{personalInfo.email}</p>

          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-md font-medium bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors duration-200"
          >
            Send me an email
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-4 py-2.5 rounded-md border border-slate-200/15 text-slate-300 text-sm font-medium bg-slate-900/70 transition-all duration-250 ${social.colorClass}`}
            >
              <span className="inline-flex min-w-6 justify-center rounded border border-slate-200/20 px-1.5 py-0.5 text-[10px] font-semibold tracking-wide">
                {social.icon}
              </span>
              <span>{social.label}</span>
            </a>
          ))}
          <a
            href={personalInfo.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-md border border-cyan-400/35 text-cyan-300 text-sm font-medium bg-cyan-400/5 hover:bg-cyan-400/10 transition-all duration-250"
          >
            <span className="inline-flex min-w-6 justify-center rounded border border-cyan-400/30 px-1.5 py-0.5 text-[10px] font-semibold tracking-wide">PDF</span>
            <span>Resume</span>
          </a>
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-white/22 text-xs"
        >
          Built with Next.js · Tailwind CSS · Framer Motion &mdash; © 2026
          Pradyumna Kumar Sahoo
        </motion.p>
      </div>
    </section>
  );
}
