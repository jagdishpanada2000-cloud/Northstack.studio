import type { Metadata } from "next";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { services } from "@/lib/services.data";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";

const service = services.find((s) => s.slug === "ecommerce-development")!;

export const metadata: Metadata = {
  title: "Custom Ecommerce Website Development | WebsCraft",
  description:
    "WebsCraft builds custom online stores for Indian businesses. Product catalogs, payment integration, order management, and WhatsApp ordering.",
  alternates: { canonical: "/ecommerce-development" },
  openGraph: {
    title: "Custom Ecommerce Website Development | WebsCraft",
    description:
      "Launch a custom online store with payment gateway, cart, inventory management, and WhatsApp ordering. Starting from ₹25,000.",
    url: "https://webscraft.in/ecommerce-development",
    siteName: "WebsCraft",
    type: "website",
    images: [{ url: "/og-banner.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Ecommerce Development | WebsCraft",
    description:
      "Custom online stores with payment integration, product management, and order tracking.",
    images: ["/og-banner.png"],
  },
};

export default function EcommerceDevelopmentPage() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <ServicePageTemplate service={service} />
      <Footer />
    </main>
  );
}
