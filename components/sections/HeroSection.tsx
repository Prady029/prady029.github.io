import { personalInfo, highlights } from "@/data/portfolio";

export default function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="pt-14 pb-20 sm:pt-20 sm:pb-24"
    >
      {/* Eyebrow */}
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-7 font-mono text-xs text-[var(--text-muted)]">
        <span className="inline-flex items-center gap-2 text-[var(--accent)] font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" aria-hidden="true" />
          {personalInfo.role}
        </span>
        <span aria-hidden="true">·</span>
        <span>{personalInfo.location}</span>
        <span aria-hidden="true">·</span>
        <span>Open to Senior AI/ML Roles</span>
      </div>

      {/* Name + Portrait */}
      <div className="flex flex-col-reverse sm:flex-row sm:items-start justify-between gap-8 mb-8">
        <div className="max-w-2xl">
          <h1
            id="hero-heading"
            className="font-editorial text-4xl sm:text-5xl md:text-[3.35rem] font-medium tracking-[-0.02em] leading-[1.08] text-[var(--text)] mb-5"
          >
            {personalInfo.name}
          </h1>
          <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed font-normal mb-5">
            {personalInfo.headline}
          </p>
          <p className="text-[15px] text-[var(--text-muted)] leading-relaxed max-w-xl">
            {personalInfo.summary}
          </p>
        </div>

        <div className="shrink-0">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-[var(--border-strong)] bg-[var(--surface-subtle)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={personalInfo.avatar}
              alt={`${personalInfo.name} — ${personalInfo.role}`}
              width={112}
              height={112}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Actions & Links */}
      <div className="flex flex-wrap items-center gap-3 mb-14">
        <a
          href={`mailto:${personalInfo.email}`}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium bg-[var(--text)] text-[var(--bg)] hover:opacity-90 transition-opacity"
        >
          Get in touch
        </a>
        <a
          href={personalInfo.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-medium border border-[var(--border-strong)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
        >
          Resume (PDF)
          <span aria-hidden="true" className="font-mono text-xs">↗</span>
        </a>

        <div className="flex items-center gap-4 sm:ml-3 font-mono text-xs text-[var(--text-muted)]">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer me"
            className="hover:text-[var(--text)] transition-colors underline decoration-[var(--border-strong)] underline-offset-4 hover:decoration-[var(--accent)]"
          >
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer me"
            className="hover:text-[var(--text)] transition-colors underline decoration-[var(--border-strong)] underline-offset-4 hover:decoration-[var(--accent)]"
          >
            LinkedIn
          </a>
          <a
            href={personalInfo.medium}
            target="_blank"
            rel="noopener noreferrer me"
            className="hover:text-[var(--text)] transition-colors underline decoration-[var(--border-strong)] underline-offset-4 hover:decoration-[var(--accent)]"
          >
            Medium
          </a>
        </div>
      </div>

      {/* Minimalist Metric Strip */}
      <dl className="grid grid-cols-1 sm:grid-cols-3 border-y border-[var(--border)] divide-y sm:divide-y-0 sm:divide-x divide-[var(--border)]">
        {highlights.map((item) => (
          <div key={item.value} className="py-4 sm:py-5 sm:px-5 first:sm:pl-0 last:sm:pr-0">
            <dt className="font-mono text-xl sm:text-2xl font-medium text-[var(--text)] tabular-nums">
              {item.value}
            </dt>
            <dd className="mt-1 text-xs sm:text-[13px] text-[var(--text-muted)] leading-snug">
              {item.label}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
