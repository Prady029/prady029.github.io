import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Background from "@/components/Background";
import { blogs, personalInfo } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `Writing — ${personalInfo.name}`,
  description:
    "Articles, technical notes, and essays by Pradyumna Kumar Sahoo on LLM inference, Linux systems, open-source privacy, and research interviews.",
  alternates: {
    canonical: "/blog/",
  },
};

export default function BlogIndexPage() {
  return (
    <div className="relative min-h-screen">
      <Background />
      <Navbar />

      <main className="relative z-10 max-w-editorial mx-auto px-5 sm:px-8 pt-10 pb-16 sm:pt-14 sm:pb-20">
        <div className="mb-8">
          <Link
            href="/"
            className="font-mono text-xs text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
          >
            ← Back to profile
          </Link>
        </div>

        <header className="mb-8 pb-5 border-b border-[var(--border)]">
          <h1 className="font-editorial text-3xl sm:text-4xl font-medium tracking-tight text-[var(--text)]">
            Writing
          </h1>
          <p className="mt-2 text-sm sm:text-[15px] text-[var(--text-muted)] max-w-2xl leading-relaxed">
            Technical notes, open-source tooling lists, and personal reflections hosted on this site.
          </p>
        </header>

        <ul className="divide-y divide-[var(--border)] border-b border-[var(--border)]">
          {blogs.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}/`}
                className="group py-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-8"
              >
                <div className="max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] text-[var(--text-muted)] mb-1.5">
                    <span className="text-[var(--accent)]">{post.kind}</span>
                    <span aria-hidden="true">·</span>
                    <time dateTime={post.publishedAt}>{post.publishedLabel}</time>
                    <span aria-hidden="true">·</span>
                    <span>{post.readingTime}</span>
                  </div>
                  <h2 className="text-lg font-medium text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-1.5 text-sm text-[var(--text-muted)] leading-relaxed">
                    {post.subTitle}
                  </p>
                </div>
                <span className="font-mono text-xs text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors shrink-0">
                  Read →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
