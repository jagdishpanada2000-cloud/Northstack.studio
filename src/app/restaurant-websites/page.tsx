import type { Metadata } from "next";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { services } from "@/lib/services.data";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";

const service = services.find((s) => s.slug === "restaurant-websites")!;

export const metadata: Metadata = {
  title: "Restaurant Website & Online Ordering System | WebsCraft",
  description:
    "WebsCraft builds custom restaurant websites with online ordering, digital menus, table reservations, and WhatsApp order notifications. No commission fees.",
  alternates: { canonical: "/restaurant-websites" },
  openGraph: {
    title: "Restaurant Website & Online Ordering | WebsCraft",
    description:
      "Custom restaurant websites with direct online ordering. Save 20-30% commission by avoiding Zomato and Swiggy fees.",
    url: "https://webscraft.in/restaurant-websites",
    siteName: "WebsCraft",
    type: "website",
    images: [{ url: "/og-banner.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Restaurant Website & Online Ordering | WebsCraft",
    description:
      "Restaurant websites with online ordering, digital menu, table reservations. Starting from ₹15,000.",
    images: ["/og-banner.png"],
  },
};

export default function RestaurantWebsitesPage() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <ServicePageTemplate service={service} />
      <Footer />
    </main>
  );
}
