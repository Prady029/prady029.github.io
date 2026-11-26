import { experience, certifications, education } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-16 sm:py-20"
    >
      <SectionHeading
        index="01"
        headingId="experience-heading"
        title="Experience"
        subtitle="5+ years shipping clinical and enterprise AI/ML systems from research prototypes to production."
      />

      <div className="divide-y divide-[var(--border)]">
        {experience.map((role) => (
          <article
            key={role.company}
            className="py-8 first:pt-0 last:pb-0 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8"
          >
            {/* Left metadata column */}
            <div className="md:col-span-4 space-y-1">
              <div className="flex items-center gap-2">
                <time className="font-mono text-xs text-[var(--text-muted)] tabular-nums">
                  {role.period}
                </time>
                {role.current && (
                  <span className="font-mono text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-[var(--accent-soft)] text-[var(--accent)] border border-[var(--accent-border)]">
                    Current
                  </span>
                )}
              </div>
              <h3 className="text-base font-semibold text-[var(--text)] pt-1">
                {role.company}
              </h3>
              <p className="text-xs text-[var(--text-muted)]">{role.location}</p>
            </div>

            {/* Right role & impact column */}
            <div className="md:col-span-8">
              <h4 className="text-[15px] font-medium text-[var(--accent)] mb-3">
                {role.title}
              </h4>

              <ul className="space-y-2.5 mb-4">
                {role.highlights.map((item, j) => (
                  <li
                    key={j}
                    className="flex gap-3 text-sm text-[var(--text-secondary)] leading-relaxed"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[7px] w-1 h-1 rounded-full bg-[var(--border-strong)] shrink-0"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5">
                {role.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[11px] px-2 py-0.5 rounded bg-[var(--surface-subtle)] border border-[var(--border)] text-[var(--text-muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Education & Certifications */}
      <div className="mt-16 pt-12 border-t border-[var(--border)] grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
        {/* Education */}
        <div className="md:col-span-5">
          <h3 className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)] mb-5">
            Education
          </h3>
          <div className="space-y-5">
            {education.map((edu) => (
              <div key={edu.degree}>
                <p className="text-sm font-medium text-[var(--text)] leading-snug">
                  {edu.degree}
                </p>
                <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                  {edu.institution}
                </p>
                <p className="font-mono text-[11px] text-[var(--text-muted)] mt-1 tabular-nums">
                  {edu.location} · <time>{edu.period}</time>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="md:col-span-7">
          <h3 className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)] mb-5">
            Selected Certifications
          </h3>
          <ul className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {certifications.map((cert) => (
              <li key={cert.title}>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group py-2.5 flex items-baseline justify-between gap-4 hover:text-[var(--accent)] transition-colors"
                >
                  <div className="min-w-0">
                    <span className="text-sm text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                      {cert.title}
                    </span>
                    <span className="text-xs text-[var(--text-muted)] ml-2">
                      — {cert.issuer}
                    </span>
                  </div>
                  <time className="font-mono text-[11px] text-[var(--text-muted)] shrink-0 tabular-nums">
                    {cert.date} <span aria-hidden="true">↗</span>
                  </time>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
