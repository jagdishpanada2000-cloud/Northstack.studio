import type { Metadata } from "next";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { services } from "@/lib/services.data";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";

const service = services.find((s) => s.slug === "saas-development")!;

export const metadata: Metadata = {
  title: "Custom SaaS Platform Development | WebsCraft",
  description:
    "WebsCraft builds custom SaaS platforms for startups and businesses. Subscription management, user authentication, payment integration, and scalable architecture.",
  alternates: { canonical: "/saas-development" },
  openGraph: {
    title: "Custom SaaS Platform Development | WebsCraft",
    description:
      "From idea to subscription platform. We build custom SaaS products with billing, dashboards, and admin panels.",
    url: "https://webscraft.in/saas-development",
    siteName: "WebsCraft",
    type: "website",
    images: [{ url: "/og-banner.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom SaaS Development | WebsCraft",
    description:
      "Custom SaaS platform development with subscription billing, user management, and dashboards.",
    images: ["/og-banner.png"],
  },
};

export default function SaasDevelopmentPage() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <ServicePageTemplate service={service} />
      <Footer />
    </main>
  );
}
