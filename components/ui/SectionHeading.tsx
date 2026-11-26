interface SectionHeadingProps {
  index: string;
  title: string;
  subtitle?: string;
  headingId?: string;
}

export default function SectionHeading({
  index,
  title,
  subtitle,
  headingId,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 pb-5 border-b border-[var(--border)]">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-xs text-[var(--accent)] tabular-nums">
          {index}
        </span>
        <h2
          id={headingId}
          className="font-editorial text-2xl sm:text-3xl font-medium tracking-tight text-[var(--text)]"
        >
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="mt-2 text-sm sm:text-[15px] text-[var(--text-muted)] max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
