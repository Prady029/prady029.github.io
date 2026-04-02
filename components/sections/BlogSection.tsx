"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { blogs } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";

export default function BlogSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const collapsedCount = 6;
  const visibleBlogs = isExpanded ? blogs : blogs.slice(0, collapsedCount);

  return (
    <section id="blog" className="relative py-28 px-4 md:px-8 lg:px-16 z-10">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          label="Writing"
          title="Latest Articles"
          subtitle="Deep-dives into ML research, audio source separation, and multilingual NLP."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visibleBlogs.map((blog, i) => (
            <motion.a
              key={blog.url_title}
              href={blog.external_url ?? `./blog/${blog.url_title}/`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.14 }}
              whileHover={{ y: -6 }}
              className="group backdrop-blur-md bg-white/[0.025] border border-white/[0.08] rounded-2xl overflow-hidden hover:bg-white/[0.05] hover:border-white/[0.14] hover:shadow-[0_12px_50px_rgba(139,92,246,0.09)] transition-all duration-300"
            >
              {/* Image / hero area */}
              <div className={`relative h-52 overflow-hidden bg-gradient-to-br ${blog.color}`}>
                {/* Emoji watermark */}
                <span className="absolute inset-0 flex items-center justify-center text-8xl opacity-20 select-none">
                  {blog.emoji}
                </span>
                {/* Shimmer accent */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                {/* Bottom fade */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-16"
                  style={{
                    background: "linear-gradient(to top, rgba(3,7,18,0.9), transparent)",
                  }}
                />
                {/* Category chip */}
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm bg-white/[0.1] border border-white/[0.15] text-white/80">
                    ML · Deep Learning
                  </span>
                </div>
              </div>

              {/* Text content */}
              <div className="p-6">
                <h3
                  className="font-heading font-bold text-white text-xl mb-2 group-hover:text-violet-300 transition-colors duration-250 leading-snug"
                  style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
                >
                  {blog.title}
                </h3>
                <p className="text-white/52 text-sm leading-relaxed mb-4">
                  {blog.sub_title}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-400 group-hover:gap-2.5 transition-all duration-200">
                  Read Article →
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {blogs.length > collapsedCount ? (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setIsExpanded((prev) => !prev)}
              className="px-5 py-2.5 rounded-full border border-white/15 bg-white/[0.04] text-white/85 text-sm font-semibold hover:bg-white/[0.08] hover:border-white/25 transition-all"
            >
              {isExpanded
                ? "Show fewer articles"
                : `Show all ${blogs.length} articles`}
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
