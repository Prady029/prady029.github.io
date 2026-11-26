import { projects } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ProjectsSection() {
  const featured = projects.filter((p) => p.featured !== false);
  const archived = projects.filter((p) => p.featured === false);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-8 sm:py-10"
    >
      <SectionHeading
        headingId="projects-heading"
        title="Selected Work & Research"
        subtitle="Open-source implementations, thesis research in imbalanced multi-label learning, and interactive builds."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {featured.map((project) => (
          <article
            key={project.name}
            className="group flex flex-col justify-between p-5 rounded-xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--border-strong)] transition-colors"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <span className="font-mono text-[11px] text-[var(--text-muted)]">
                  {project.language}
                </span>
                <div className="flex items-center gap-2">
                  {project.badge && (
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[var(--accent-soft)] text-[var(--accent)] border border-[var(--accent-border)]">
                      {project.badge}
                    </span>
                  )}
                  {project.stars > 0 && (
                    <span className="font-mono text-[11px] text-[var(--text-muted)] tabular-nums">
                      ★ {project.stars}
                    </span>
                  )}
                </div>
              </div>

              <h3 className="text-base font-semibold text-[var(--text)] mb-2 leading-snug">
                <a
                  href={project.liveUrl ?? project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--accent)] transition-colors"
                >
                  {project.name}
                </a>
              </h3>

              <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                {project.description}
              </p>
            </div>

            <div className="flex items-center justify-between gap-3 pt-3 border-t border-[var(--border)]">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[11px] text-[var(--text-muted)]"
                  >
                    #{tag.toLowerCase().replace(/\s+/g, "-")}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 shrink-0 font-mono text-xs">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--accent)] hover:underline underline-offset-4"
                  >
                    Live ↗
                  </a>
                )}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors"
                >
                  Repo ↗
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Native HTML disclosure keeps earlier academic repositories in static DOM for crawlers */}
      <div className="mt-8 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        {archived.length > 0 && (
          <details className="group flex-1">
            <summary className="cursor-pointer list-none font-mono text-xs text-[var(--text-muted)] hover:text-[var(--text)] transition-colors underline decoration-[var(--border-strong)] underline-offset-4 select-none">
              Earlier academic repositories ({archived.length})
            </summary>
            <ul className="mt-4 divide-y divide-[var(--border)] border-y border-[var(--border)]">
              {archived.map((project) => (
                <li key={project.name} className="py-3 flex items-baseline justify-between gap-4">
                  <div className="min-w-0">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-[var(--text)] hover:text-[var(--accent)] transition-colors"
                    >
                      {project.name}
                    </a>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5">
                      {project.description}
                    </p>
                  </div>
                  <span className="font-mono text-[11px] text-[var(--text-muted)] shrink-0">
                    {project.language} ↗
                  </span>
                </li>
              ))}
            </ul>
          </details>
        )}

        <a
          href="https://github.com/Prady029?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs text-[var(--accent)] hover:underline underline-offset-4 shrink-0"
        >
          View all repositories on GitHub ↗
        </a>
      </div>
    </section>
  );
}
