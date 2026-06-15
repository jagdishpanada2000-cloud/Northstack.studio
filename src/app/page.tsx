import type { Metadata } from "next";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { FeaturedWork } from "@/components/site/FeaturedWork";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { WhyUs } from "@/components/site/WhyUs";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "WebsCraft — AI Products, SaaS & Automation Studio",
  description:
    "We design and develop AI-powered web applications, automation systems, and modern SaaS products for startups and businesses.",
  openGraph: {
    title: "WebsCraft — AI Products, SaaS & Automation Studio",
    description:
      "Building AI products that people actually use. A modern studio for AI, SaaS, and automation.",
  },
};

export default function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <section id="work">
        <FeaturedWork />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="process">
        <Process />
      </section>
      <WhyUs />
      <CTA />
      <Footer />
    </main>
  );
}
