interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  headingId?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  headingId,
}: SectionHeadingProps) {
  return (
    <div className="mb-6 pb-3.5 border-b border-[var(--border)]">
      <h2
        id={headingId}
        className="font-editorial text-2xl sm:text-3xl font-medium tracking-tight text-[var(--text)]"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-sm sm:text-[15px] text-[var(--text-muted)] max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
