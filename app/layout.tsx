import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://codereddy.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CodeReddy | Interview Ready",
    template: "%s | CodeReddy"
  },
  description:
    "CodeReddy helps trained coding students become interview-ready with DSA practice, project explanation, resume review, and mock interviews.",
  keywords: [
    "software interview preparation",
    "coding interview preparation",
    "fresher software jobs",
    "DSA for freshers",
    "mock interviews",
    "resume review",
    "CodeReddy"
  ],
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.svg"
  },
  openGraph: {
    title: "CodeReddy | Become Interview-Ready",
    description:
      "A focused software interview readiness program for students who learned coding but still struggle to clear interviews.",
    url: siteUrl,
    siteName: "CodeReddy",
    images: [
      {
        url: "/images/codereddy-hero.png",
        width: 1536,
        height: 864,
        alt: "Mentor helping software job aspirants prepare for interviews"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeReddy | Software Interview Preparation for Freshers",
    description:
      "DSA, projects, resume cleanup, and mock interviews for trained students who want to crack software interviews.",
    images: ["/images/codereddy-hero.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body>{children}</body>
    </html>
  );
}
