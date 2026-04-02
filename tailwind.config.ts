import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          950: "#030712",
          900: "#0a0f1e",
          800: "#111827",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 22s linear infinite",
        "spin-reverse-slow": "spin-reverse 32s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        "spin-reverse": {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-700px 0" },
          "100%": { backgroundPosition: "700px 0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      boxShadow: {
        glass: "0 4px 32px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.08)",
        "glass-cyan": "0 8px 48px rgba(6,182,212,0.18), inset 0 0 0 1px rgba(255,255,255,0.12)",
        "glass-violet": "0 8px 48px rgba(139,92,246,0.18), inset 0 0 0 1px rgba(255,255,255,0.12)",
        glow: "0 0 40px rgba(6,182,212,0.25)",
        "glow-sm": "0 0 20px rgba(6,182,212,0.18)",
        "glow-violet": "0 0 40px rgba(139,92,246,0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
