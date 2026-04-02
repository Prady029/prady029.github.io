export default function Background() {
  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Cyan orb — top-right (CSS animation, no JS) */}
      <div
        className="orb-cyan absolute -top-48 -right-48 w-[700px] h-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.45) 0%, transparent 70%)",
          filter: "blur(70px)",
          willChange: "transform, opacity",
        }}
      />

      {/* Violet orb — bottom-left */}
      <div
        className="orb-violet absolute -bottom-48 -left-48 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.45) 0%, transparent 70%)",
          filter: "blur(70px)",
          willChange: "transform, opacity",
        }}
      />

      {/* Blue center orb */}
      <div
        className="orb-blue absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)",
          filter: "blur(90px)",
          willChange: "transform, opacity",
        }}
      />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 dark:opacity-40 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(100,116,139,0.15) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Vignette — dark mode */}
      <div
        className="absolute inset-0 dark:block hidden"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(3,7,18,0.7) 100%)",
        }}
      />
      {/* Vignette — light mode */}
      <div
        className="absolute inset-0 dark:hidden block"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(240,246,255,0.7) 100%)",
        }}
      />
    </div>
  );
}
