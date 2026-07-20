import type { Metadata } from "next";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { services } from "@/lib/services.data";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";

const service = services.find((s) => s.slug === "custom-software")!;

export const metadata: Metadata = {
  title: "Custom Business Software Development | WebsCraft",
  description:
    "WebsCraft builds custom business software — CRM, inventory management, booking platforms, internal tools — tailored to your exact workflow.",
  alternates: { canonical: "/custom-software" },
  openGraph: {
    title: "Custom Business Software Development | WebsCraft",
    description:
      "Tailored CRM, inventory, booking, and operations software for businesses with unique processes that off-the-shelf tools can't handle.",
    url: "https://webscraft.in/custom-software",
    siteName: "WebsCraft",
    type: "website",
    images: [{ url: "/og-banner.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Business Software | WebsCraft",
    description:
      "Custom CRM, inventory, booking, and operations software built for your exact business processes.",
    images: ["/og-banner.png"],
  },
};

export default function CustomSoftwarePage() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <ServicePageTemplate service={service} />
      <Footer />
    </main>
  );
}
