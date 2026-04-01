"use client";

export default function Background() {
  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #020617 0%, #0b1220 50%, #020617 100%)",
        }}
      />

      <div
        className="absolute top-0 left-0 right-0 h-[34rem]"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(14,165,233,0.14) 0%, rgba(2,6,23,0) 65%)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(148,163,184,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.05) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.75))",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(2,6,23,0) 20%, rgba(2,6,23,0.65) 100%)",
        }}
      />
    </div>
  );
}
