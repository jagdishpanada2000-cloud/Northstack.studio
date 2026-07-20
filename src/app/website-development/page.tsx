import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { services } from "@/lib/services.data";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";

const service = services.find((s) => s.slug === "website-development")!;

export const metadata: Metadata = {
  title: "Custom Website Development for Businesses in India",
  description:
    "WebsCraft builds custom websites for startups, local businesses, and growing companies. Fast, mobile-friendly, SEO-optimized, and designed to convert visitors into customers.",
  alternates: { canonical: "/website-development" },
  openGraph: {
    title: "Custom Website Development for Businesses in India | WebsCraft",
    description:
      "Get a custom website built with modern technology. Fast loading, Google-optimized, mobile-friendly. Starting from ₹15,000.",
    url: "https://webscraft.in/website-development",
    siteName: "WebsCraft",
    type: "website",
    images: [{ url: "/og-banner.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Website Development for Businesses | WebsCraft",
    description:
      "Custom websites built for startups, local businesses, and growing companies. SEO-optimized, mobile-first, fast loading.",
    images: ["/og-banner.png"],
  },
};

export default function WebsiteDevelopmentPage() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <ServicePageTemplate service={service} />
      <Footer />
    </main>
  );
}
