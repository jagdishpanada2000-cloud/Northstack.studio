import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Providers } from "./providers";
import "./globals.css";

const siteUrl = "https://webscraft.in";

export const metadata: Metadata = {
  title: "WebsCraft — AI Product Development Studio for Startups & SaaS",
  description:
    "WebsCraft builds custom AI-powered SaaS platforms, web applications, and automation systems for startups and growing businesses. From concept to launch in weeks.",
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  authors: [{ name: "WebsCraft" }],
  keywords: [
    "AI development",
    "SaaS development",
    "web development studio",
    "AI product development",
    "custom SaaS platform",
    "startup development",
    "automation systems",
    "Next.js development",
  ],
  openGraph: {
    title: "WebsCraft — AI Product Development Studio for Startups & SaaS",
    description:
      "Custom AI-powered SaaS, web apps, and automation systems built for startups. Ship in weeks, not months.",
    url: siteUrl,
    siteName: "WebsCraft",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebsCraft — AI Product Development Studio",
    description: "Custom SaaS, AI apps, and automation for startups. Ship in weeks, not months.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "WebsCraft",
  url: siteUrl,
  logo: `${siteUrl}/icon.svg`,
  description: "AI product development studio for startups and SaaS companies.",
  serviceType: ["AI Application Development", "SaaS Development", "Automation Systems"],
};

const jsonLdWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "WebsCraft",
  url: siteUrl,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
