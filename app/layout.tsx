import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

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
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="icon"
          href="https://avatars.githubusercontent.com/u/40775401?v=4"
          type="image/png"
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans text-white antialiased`}
        style={{ backgroundColor: "#030712" }}
      >
        {children}
      </body>
    </html>
  );
}
