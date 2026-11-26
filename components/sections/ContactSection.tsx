"use client";

import { useState } from "react";
import { personalInfo } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";

const links = [
  { label: "GitHub", url: personalInfo.github, me: true },
  { label: "LinkedIn", url: personalInfo.linkedin, me: true },
  { label: "Medium", url: personalInfo.medium, me: true },
  { label: "X / Twitter", url: personalInfo.twitter, me: true },
  { label: "Telegram", url: personalInfo.telegram, me: true },
  { label: "Resume (PDF)", url: personalInfo.resume, me: false },
];

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${personalInfo.email}`;
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="pt-8 pb-12 sm:pt-10 sm:pb-14"
    >
      <SectionHeading
        index="05"
        headingId="contact-heading"
        title="Contact"
        subtitle="Open to Senior Applied Data Scientist roles, GenAI architecture, and research collaborations."
      />

      <address className="not-italic p-6 sm:p-8 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <p className="font-mono text-xs text-[var(--text-muted)] mb-1">
            Direct email
          </p>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-base sm:text-lg font-medium text-[var(--text)] hover:text-[var(--accent)] transition-colors"
          >
            {personalInfo.email}
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            type="button"
            onClick={copyEmail}
            className="px-3.5 py-2 rounded-md text-xs font-mono border border-[var(--border-strong)] text-[var(--text-secondary)] hover:text-[var(--text)] hover:border-[var(--accent)] transition-colors"
          >
            {copied ? "Copied ✓" : "Copy email"}
          </button>
          <a
            href={`mailto:${personalInfo.email}`}
            className="px-4 py-2 rounded-md text-xs font-mono font-medium bg-[var(--text)] text-[var(--bg)] hover:opacity-90 transition-opacity"
          >
            Send email ↗
          </a>
        </div>
      </address>

      <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-[var(--text-muted)]">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel={link.me ? "noopener noreferrer me" : "noopener noreferrer"}
            className="hover:text-[var(--accent)] transition-colors"
          >
            {link.label} ↗
          </a>
        ))}
      </div>

      <footer className="mt-10 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-[11px] text-[var(--text-muted)]">
        <span>
          © 2026 {personalInfo.name} · {personalInfo.location}
        </span>
        <div className="flex items-center gap-4">
          <a href="/llms.txt" className="hover:text-[var(--accent)] transition-colors">
            llms.txt
          </a>
          <a href="/sitemap.xml" className="hover:text-[var(--accent)] transition-colors">
            sitemap.xml
          </a>
        </div>
      </footer>
    </section>
  );
}
