import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Pradyumna Kumar Sahoo | Senior Data Scientist",
  description:
    "Senior Data Scientist with 5+ years building production-grade AI/ML systems — GraphRAG, Medical AI, LLM Fine-tuning, GenAI, Agentic Systems, Computer Vision.",
  keywords: [
    "Data Scientist",
    "GenAI",
    "GraphRAG",
    "LLM Fine-tuning",
    "Medical AI",
    "Machine Learning",
    "AI Engineer",
    "Agentic Systems",
    "Knowledge Graphs",
  ],
  authors: [{ name: "Pradyumna Kumar Sahoo" }],
  openGraph: {
    title: "Pradyumna Kumar Sahoo | Senior Data Scientist",
    description:
      "Senior Data Scientist specializing in GenAI, GraphRAG, Medical AI, and Agentic Systems.",
    url: "https://prady029.github.io",
    type: "profile",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/40775401?v=4",
        width: 800,
        height: 800,
        alt: "Pradyumna Kumar Sahoo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pradyumna Kumar Sahoo | Senior Data Scientist",
    description:
      "Senior Data Scientist specializing in GenAI, GraphRAG, Medical AI, and Agentic Systems.",
    creator: "@prady029",
    images: ["https://avatars.githubusercontent.com/u/40775401?v=4"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external origins used on this page */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://analyticsdrift.com" />
        <link rel="preconnect" href="https://avatars.githubusercontent.com" crossOrigin="anonymous" />
        <link rel="icon" href="/avatar.jpg" type="image/jpeg" />
      </head>
      <body
        className="font-sans antialiased bg-[#030712] dark:bg-[#030712] text-slate-900 dark:text-white transition-colors duration-300"
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
