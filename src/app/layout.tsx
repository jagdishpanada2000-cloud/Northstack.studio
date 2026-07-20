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
const siteName = "WebsCraft";
const defaultTitle = "WebsCraft — AI Product Development Studio for Startups & SaaS";
const defaultDescription =
  "WebsCraft builds custom AI-powered SaaS platforms, web applications, and automation systems for startups and growing businesses. From concept to launch in weeks.";

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
    "AI development studio",
    "SaaS development agency",
    "custom AI applications",
    "web development for startups",
    "AI product development",
    "webscraft",
    "startup MVP development",
    "AI automation agency",
    "Next.js development services",
    "AI integration services",
  ],
  openGraph: {
    title: defaultTitle,
    description:
      "Custom AI-powered SaaS, web apps, and automation systems built for startups. Ship in weeks, not months.",
    url: siteUrl,
    siteName,
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-banner.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WebsCraft — AI Product Development Studio",
    description: "Custom SaaS, AI apps, and automation for startups. Ship in weeks, not months.",
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

const organizationJsonLd = {
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
    "AI Application Development",
    "SaaS Development",
    "Automation Systems",
    "Web Development",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+919326345546",
    contactType: "sales",
    email: "hello@webscraft.in",
    availableLanguage: ["English", "Hindi"],
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "WebsCraft",
  url: siteUrl,
  description: defaultDescription,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does it take to build an AI-powered SaaS product?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most MVPs ship in 4–8 weeks. Complex platforms with custom AI models typically take 8–14 weeks. We work in weekly sprints with continuous demos so you always know where things stand.",
      },
    },
    {
      "@type": "Question",
      name: "What technologies do you use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We build on Next.js, TypeScript, Supabase, and PostgreSQL. For AI, we integrate OpenAI, Anthropic, and custom models deployed on Vercel or AWS. Every stack is chosen for speed, type safety, and scalability.",
      },
    },
    {
      "@type": "Question",
      name: "Do you only work with startups?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work with funded startups, early-stage founders, and established businesses launching new AI products. If you're building something new and need to move fast, we're a fit.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a custom AI application cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every project is scoped individually. We work with you to define the requirements and give you a fixed-price estimate before any work begins. Contact us for a free estimate based on your specific needs.",
      },
    },
    {
      "@type": "Question",
      name: "What does the engagement process look like?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We start with a discovery sprint to align on goals, then move into design, development, and AI integration. You get weekly demos, a dedicated Slack channel, and direct access to the team building your product.",
      },
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Application Development",
  provider: { "@type": "Organization", name: "WebsCraft" },
  description: "Custom GPT integrations, RAG pipelines, and AI workflows tailored to your product.",
  areaServed: "India",
};

const sarthakJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sarthak Waghmare",
  jobTitle: "Founder",
  url: "https://www.linkedin.com/in/sarthak-waghmare-4a0341389/",
  worksFor: { "@type": "Organization", name: "WebsCraft" },
  description:
    "Product engineer building AI-powered platforms and SaaS products from the ground up.",
};

const jagdishJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jagdish Panada",
  jobTitle: "Co-Founder",
  url: "https://www.linkedin.com/in/jagdish-panada-192a32366/",
  worksFor: { "@type": "Organization", name: "WebsCraft" },
  description: "Full-stack developer specializing in AI integration and automation systems.",
};

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact WebsCraft",
  description: "Get in touch with WebsCraft for AI development, SaaS, and automation projects.",
  url: `${siteUrl}/#contact`,
  mainEntity: {
    "@type": "Organization",
    name: "WebsCraft",
    telephone: "+919326345546",
    email: "hello@webscraft.in",
    contactType: "sales",
  },
};

const jsonLdSchemas = [
  organizationJsonLd,
  websiteJsonLd,
  faqJsonLd,
  serviceJsonLd,
  sarthakJsonLd,
  jagdishJsonLd,
  contactPageJsonLd,
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
