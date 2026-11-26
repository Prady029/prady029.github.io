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
    <section id="blog" className="relative py-24 px-4 md:px-8 lg:px-16 z-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Writing"
          title="Latest Articles"
          subtitle="Technical deep-dives into ML research, audio source separation, and multilingual NLP."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {visibleBlogs.map((blog, i) => (
            <motion.a
              key={blog.url_title}
              href={blog.external_url ?? `./blog/${blog.url_title}/`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.35, delay: Math.min(i * 0.05, 0.35) }}
              whileHover={{ y: -4 }}
              className="group flex flex-col backdrop-blur-md bg-white/[0.025] border border-white/[0.08] rounded-2xl overflow-hidden hover:bg-white/[0.045] hover:border-white/[0.15] hover:shadow-[0_12px_45px_rgba(139,92,246,0.08)] transition-all duration-300"
            >
              <div className={`relative aspect-video overflow-hidden bg-gradient-to-br ${blog.color}`}>
                {blog.image_url ? (
                  <img
                    src={blog.image_url}
                    alt={blog.title}
                    className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    loading="lazy"
                  />
                ) : (
                  <span className="absolute inset-0 flex items-center justify-center text-6xl opacity-20 select-none">
                    {blog.emoji}
                  </span>
                )}
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3
                  className="font-heading font-bold text-white text-base mb-2 group-hover:text-cyan-300 transition-colors duration-200 leading-snug"
                  style={{ fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
                >
                  {blog.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                  {blog.sub_title}
                </p>
                <span className="text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors inline-flex items-center gap-1">
                  Read Article →
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {blogs.length > collapsedCount && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setIsExpanded((prev) => !prev)}
              className="px-5 py-2.5 rounded-full border border-white/15 bg-white/[0.04] text-white/85 text-sm font-semibold hover:bg-white/[0.08] hover:border-white/25 transition-all"
            >
              {isExpanded ? "Show fewer articles" : `Show all ${blogs.length} articles`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
