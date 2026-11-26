import { experience } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-8 sm:py-10"
    >
      <SectionHeading
        headingId="experience-heading"
        title="Experience"
        subtitle="5+ years shipping clinical and enterprise AI/ML systems from research prototypes to production."
      />

      <div className="divide-y divide-[var(--border)]">
        {experience.map((role) => (
          <article
            key={role.company}
            className="py-6 first:pt-0 last:pb-0 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8"
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
                {role.highlights.map((item) => (
                  <li
                    key={item.label}
                    className="flex gap-3 text-sm text-[var(--text-secondary)] leading-relaxed"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[7px] w-1 h-1 rounded-full bg-[var(--border-strong)] shrink-0"
                    />
                    <span>
                      <strong className="font-medium text-[var(--text)]">
                        {item.label}:
                      </strong>{" "}
                      {item.text}
                    </span>
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
    </section>
  );
}
