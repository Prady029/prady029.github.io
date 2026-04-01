"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Cyan orb — top-right */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.18, 0.3, 0.18],
          x: [0, 30, 0],
          y: [0, -25, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-48 -right-48 w-[700px] h-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.45) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      {/* Violet orb — bottom-left */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
          x: [0, -25, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute -bottom-48 -left-48 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.45) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      {/* Blue center orb */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.06, 0.14, 0.06],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 7,
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          opacity: 0.4,
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(3,7,18,0.7) 100%)",
        }}
      />
    </div>
  );
}
