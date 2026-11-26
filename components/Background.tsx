export default function Background() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="absolute inset-x-0 top-0 h-[420px]"
        style={{
          background:
            "radial-gradient(ellipse 75% 60% at 50% -15%, var(--accent-soft), transparent 75%)",
        }}
      />
    </div>
  );
}
