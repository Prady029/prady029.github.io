import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Background from "@/components/Background";
import { blogs, personalInfo } from "@/data/portfolio";

const SITE_URL = "https://prady029.github.io";

export function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);
  if (!post) return {};

  const canonicalPath = `/blog/${post.slug}/`;
  return {
    title: `${post.title} — ${personalInfo.name}`,
    description: post.subTitle,
    alternates: {
      canonical: canonicalPath,
    },
    keywords: [...post.tags, personalInfo.name, personalInfo.role],
    openGraph: {
      title: post.title,
      description: post.subTitle,
      url: `${SITE_URL}${canonicalPath}`,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [personalInfo.name],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);
  if (!post) notFound();

  const postUrl = `${SITE_URL}/blog/${post.slug}/`;
  const postJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.subTitle,
    datePublished: post.publishedAt,
    url: postUrl,
    mainEntityOfPage: postUrl,
    sameAs: post.mediumUrl,
    keywords: post.tags.join(", "),
    author: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: personalInfo.name,
      url: `${SITE_URL}/`,
    },
    publisher: {
      "@type": "Person",
      name: personalInfo.name,
      url: `${SITE_URL}/`,
    },
  };

  return (
    <div className="relative min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(postJsonLd) }}
      />
      <Background />
      <Navbar />

      <main className="relative z-10 max-w-editorial mx-auto px-5 sm:px-8 pt-10 pb-16 sm:pt-14 sm:pb-20">
        <div className="mb-8 flex items-center gap-4 font-mono text-xs text-[var(--text-muted)]">
          <Link href="/" className="hover:text-[var(--accent)] transition-colors">
            ← Profile
          </Link>
          <span aria-hidden="true">/</span>
          <Link href="/blog/" className="hover:text-[var(--accent)] transition-colors">
            All writing
          </Link>
        </div>

        <article className="max-w-2xl">
          <header className="mb-8 pb-6 border-b border-[var(--border)]">
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[var(--text-muted)] mb-3">
              <time dateTime={post.publishedAt}>{post.publishedLabel}</time>
              <span aria-hidden="true">·</span>
              <span>{post.readingTime}</span>
            </div>

            <h1 className="font-editorial text-3xl sm:text-4xl font-medium tracking-tight leading-[1.15] text-[var(--text)] mb-3">
              {post.title}
            </h1>

            <p className="text-base text-[var(--text-muted)] leading-relaxed mb-4">
              {post.subTitle}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[11px] px-2 py-0.5 rounded bg-[var(--surface-subtle)] border border-[var(--border)] text-[var(--text-muted)]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </header>

          <div
            className="article-prose"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          <footer className="mt-12 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-sm text-[var(--text-muted)]">
              Available on Medium too:{" "}
              <a
                href={post.mediumUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-[var(--accent)] hover:underline underline-offset-4"
              >
                Read on Medium ↗
              </a>
            </p>

            <Link
              href="/blog/"
              className="font-mono text-xs text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
            >
              ← More writing
            </Link>
          </footer>
        </article>
      </main>
    </div>
  );
}
