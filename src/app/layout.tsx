import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { ChatBubble } from "@/components/site/ChatBubble";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
});

const siteUrl = "https://webscraft.in";

const defaultTitle = "WebsCraft — Custom Websites, AI Automation & Software for Indian Businesses";
const defaultDescription =
  "WebsCraft builds custom websites, AI chatbots and automation, SaaS platforms, business dashboards, ecommerce stores, restaurant ordering systems, and business software for startups, local businesses, and growing companies in India.";

export const metadata: Metadata = {
  title: {
    default: defaultTitle,
    template: "%s — WebsCraft",
  },
  description: defaultDescription,
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  icons: "/logo.png",
  authors: [{ name: "WebsCraft" }],
  keywords: [
    "web development India",
    "AI automation services",
    "custom website development",
    "SaaS development India",
    "business dashboard development",
    "ecommerce website India",
    "restaurant website",
    "custom business software",
    "AI chatbot India",
    "WhatsApp automation",
    "small business website",
    "startup development India",
    "WebsCraft",
    "webscraft.in",
  ],
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
    siteName: "WebsCraft",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-banner.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WebsCraft — Custom Websites, AI Automation & Software",
    description: defaultDescription,
    images: ["/og-banner.png"],
  },
  other: {
    "google-site-verification": process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

const jsonLdSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "WebsCraft",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: defaultDescription,
    email: "hello@webscraft.in",
    telephone: "+919326345546",
    sameAs: [
      "https://www.linkedin.com/in/sarthak-waghmare-4a0341389/",
      "https://www.linkedin.com/in/jagdish-panada-192a32366/",
      "https://instagram.com/webscraft.in",
    ],
    foundingDate: "2025",
    serviceType: [
      "Web Development",
      "AI Automation",
      "SaaS Development",
      "Dashboard Development",
      "Ecommerce Development",
      "Restaurant Websites",
      "Custom Software Development",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+919326345546",
      contactType: "sales",
      email: "hello@webscraft.in",
      availableLanguage: ["English", "Hindi"],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "WebsCraft",
    url: siteUrl,
    description: defaultDescription,
  },
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact WebsCraft",
    description: "Get in touch with WebsCraft for custom development services.",
    url: `${siteUrl}/contact`,
    mainEntity: {
      "@type": "Organization",
      name: "WebsCraft",
      telephone: "+919326345546",
      email: "hello@webscraft.in",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sarthak Waghmare",
    jobTitle: "Founder",
    url: "https://www.linkedin.com/in/sarthak-waghmare-4a0341389/",
    worksFor: { "@type": "Organization", name: "WebsCraft" },
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jagdish Panada",
    jobTitle: "Co-Founder",
    url: "https://www.linkedin.com/in/jagdish-panada-192a32366/",
    worksFor: { "@type": "Organization", name: "WebsCraft" },
  },
];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {jsonLdSchemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:text-sm focus:font-medium"
        >
          Skip to main content
        </a>
        <Providers>{children}</Providers>
        <ChatBubble />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
      </body>
    </html>
  );
}
