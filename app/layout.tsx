import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CursorReticle from "@/components/CursorReticle";
import { profile } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

const siteUrl = "https://samdaniel.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Sam Daniel | AI/ML Engineer & Full-Stack Developer",
  description:
    "Sam Daniel is an AI/ML Engineer and Full-Stack Developer specializing in Machine Learning, Computer Vision, Retrieval-Augmented Generation (RAG), Generative AI, and MLOps-driven production systems.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Sam Daniel | AI/ML Engineer & Full-Stack Developer",
    description:
      "Production-ready AI systems across Machine Learning, Computer Vision, RAG, and Generative AI — built with modern full-stack engineering.",
    url: siteUrl,
    siteName: "Sam Daniel — Portfolio",
    images: [
      {
        url: "/images/og-placeholder.svg",
        width: 1200,
        height: 630,
        alt: "Sam Daniel — AI/ML Engineer & Full-Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sam Daniel | AI/ML Engineer & Full-Stack Developer",
    description:
      "Production-ready AI systems across Machine Learning, Computer Vision, RAG, and Generative AI.",
    images: ["/images/og-placeholder.svg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-body bg-ink-950 text-bone-100">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <div className="grain" aria-hidden="true" />
        <CursorReticle />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
