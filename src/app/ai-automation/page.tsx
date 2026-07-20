import type { Metadata } from "next";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { services } from "@/lib/services.data";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";

const service = services.find((s) => s.slug === "ai-automation")!;

export const metadata: Metadata = {
  title: "AI Automation Services for Businesses in India",
  description:
    "WebsCraft builds custom AI automation systems — chatbots, workflow automation, document processing — to reduce manual work and help your business run 24/7.",
  alternates: { canonical: "/ai-automation" },
  openGraph: {
    title: "AI Automation Services for Indian Businesses | WebsCraft",
    description:
      "Reduce manual work by 60-80% with custom AI automation. Chatbots, workflow automation, document processing for Indian businesses.",
    url: "https://webscraft.in/ai-automation",
    siteName: "WebsCraft",
    type: "website",
    images: [{ url: "/og-banner.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Services | WebsCraft",
    description:
      "Custom AI chatbots, workflow automation, and document processing for businesses in India.",
    images: ["/og-banner.png"],
  },
};

export default function AiAutomationPage() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <ServicePageTemplate service={service} />
      <Footer />
    </main>
  );
}
