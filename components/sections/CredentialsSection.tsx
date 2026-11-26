import { certifications, education } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";

export default function CredentialsSection() {
  return (
    <section
      id="credentials"
      aria-labelledby="credentials-heading"
      className="py-8 sm:py-10"
    >
      <SectionHeading
        headingId="credentials-heading"
        title="Education & Certifications"
        subtitle="Academic foundation in Big Data Analytics and verified credentials in Knowledge Graphs, Voice AI, and LLMs."
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Education */}
        <div className="md:col-span-5">
          <h3 className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)] mb-4">
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
          <h3 className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)] mb-4">
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
