import type { Metadata } from "next";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { FeaturedWork } from "@/components/site/FeaturedWork";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { WhyUs } from "@/components/site/WhyUs";
import { CTA } from "@/components/site/CTA";
import { FAQ } from "@/components/site/FAQ";
import { Footer } from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "WebsCraft — AI Product Development Studio for Startups & SaaS",
  description:
    "WebsCraft builds custom AI-powered SaaS platforms, web applications, and automation systems for startups and growing businesses. From concept to launch in weeks.",
  openGraph: {
    title: "WebsCraft — AI Product Development Studio for Startups & SaaS",
    description:
      "Custom AI-powered SaaS, web apps, and automation systems built for startups. Ship in weeks, not months.",
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
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
