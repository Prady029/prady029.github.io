import Link from "next/link";
import { blogs } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";

export default function BlogSection() {
  return (
    <section
      id="blog"
      aria-labelledby="blog-heading"
      className="py-8 sm:py-10"
    >
      <SectionHeading
        index="04"
        headingId="blog-heading"
        title="Writing"
        subtitle="Articles, technical notes, and reflections hosted on this site."
      />

      <ul className="divide-y divide-[var(--border)] border-b border-[var(--border)]">
        {blogs.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}/`}
              className="group py-5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-8"
            >
              <div className="max-w-2xl">
                <h3 className="text-base font-medium text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                  {post.title}
                </h3>
                <p className="mt-1 text-sm text-[var(--text-muted)] leading-relaxed">
                  {post.subTitle}
                </p>
              </div>
              <span className="font-mono text-xs text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors shrink-0 tabular-nums">
                <time dateTime={post.publishedAt}>{post.publishedLabel}</time> · Read →
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex justify-end">
        <Link
          href="/blog/"
          className="font-mono text-xs text-[var(--accent)] hover:underline underline-offset-4"
        >
          View all articles →
        </Link>
      </div>
    </section>
  );
}
