import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://prady029.github.io"),
  title: "Pradyumna Kumar Sahoo — Applied Data Scientist",
  description:
    "Applied Data Scientist with 5+ years of experience building production GraphRAG pipelines, fine-tuned clinical LLMs, multimodal voice agents, and computer vision systems.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  keywords: [
    "Pradyumna Kumar Sahoo",
    "Applied Data Scientist",
    "Senior Data Scientist",
    "GraphRAG",
    "Medical AI",
    "Clinical Decision Support",
    "LLM Fine-tuning",
    "Model Context Protocol",
    "Agentic Systems",
    "Knowledge Graphs",
    "Computer Vision",
  ],
  authors: [{ name: "Pradyumna Kumar Sahoo", url: "https://prady029.github.io/" }],
  creator: "Pradyumna Kumar Sahoo",
  publisher: "Pradyumna Kumar Sahoo",
  openGraph: {
    title: "Pradyumna Kumar Sahoo — Applied Data Scientist",
    description:
      "Production AI/ML across Healthcare and Enterprise Finance — GraphRAG, Clinical LLMs, Multimodal Voice Agents, and Computer Vision.",
    url: "https://prady029.github.io/",
    siteName: "Pradyumna Kumar Sahoo",
    locale: "en_US",
    type: "profile",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/40775401?v=4",
        width: 460,
        height: 460,
        alt: "Pradyumna Kumar Sahoo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Pradyumna Kumar Sahoo — Applied Data Scientist",
    description:
      "Production AI/ML across Healthcare and Enterprise Finance — GraphRAG, Clinical LLMs, and Multimodal Systems.",
    creator: "@prady029",
    images: ["https://avatars.githubusercontent.com/u/40775401?v=4"],
  },
};

const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = (stored === 'light' || stored === 'dark') ? stored : (prefersDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', theme === 'dark');
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://avatars.githubusercontent.com" crossOrigin="anonymous" />
        <link rel="icon" href="/avatar.jpg" type="image/jpeg" />
        <link rel="alternate" type="text/plain" title="LLMs.txt" href="/llms.txt" />
      </head>
      <body className="font-sans antialiased transition-colors duration-200">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
