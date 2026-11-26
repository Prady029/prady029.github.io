import { skills } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-8 sm:py-10"
    >
      <SectionHeading
        index="02"
        headingId="skills-heading"
        title="Technical Stack"
        subtitle="Core frameworks, serving runtimes, knowledge graph tooling, and MLOps infrastructure used in production."
      />

      <dl className="divide-y divide-[var(--border)] border-b border-[var(--border)]">
        {skills.map((group) => (
          <div
            key={group.category}
            className="py-4 sm:py-5 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 items-baseline"
          >
            <dt className="md:col-span-4 font-mono text-xs uppercase tracking-wider text-[var(--text-muted)]">
              {group.category}
            </dt>
            <dd className="md:col-span-8 flex flex-wrap gap-x-2 gap-y-1.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-xs sm:text-[13px] px-2.5 py-1 rounded-md bg-[var(--surface)] border border-[var(--border)] text-[var(--text-secondary)]"
                >
                  {item}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
