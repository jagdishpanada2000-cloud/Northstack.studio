import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { FeaturedWork } from "@/components/site/FeaturedWork";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { WhyUs } from "@/components/site/WhyUs";
import { About } from "@/components/site/About";
import { CTA } from "@/components/site/CTA";
import { FAQ } from "@/components/site/FAQ";
import { Footer } from "@/components/site/Footer";
import { LatestPosts } from "@/components/site/LatestPosts";

export default function HomePage() {
  return (
    <main id="main-content" className="bg-background text-foreground">
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
      <About />
      <LatestPosts />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
