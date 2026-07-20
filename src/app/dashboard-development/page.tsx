import type { Metadata } from "next";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { services } from "@/lib/services.data";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";

const service = services.find((s) => s.slug === "dashboard-development")!;

export const metadata: Metadata = {
  title: "Custom Dashboard & Analytics Development | WebsCraft",
  description:
    "WebsCraft builds custom dashboards and analytics platforms for businesses. Real-time data visualization, admin panels, client reporting tools.",
  alternates: { canonical: "/dashboard-development" },
  openGraph: {
    title: "Custom Dashboard Development | WebsCraft",
    description:
      "Real-time business dashboards, admin panels, and analytics platforms built for your specific data and workflows.",
    url: "https://webscraft.in/dashboard-development",
    siteName: "WebsCraft",
    type: "website",
    images: [{ url: "/og-banner.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Dashboard Development | WebsCraft",
    description:
      "Turn your business data into clear, actionable dashboards. Real-time analytics, admin panels, and reporting tools.",
    images: ["/og-banner.png"],
  },
};

export default function DashboardDevelopmentPage() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <ServicePageTemplate service={service} />
      <Footer />
    </main>
  );
}
