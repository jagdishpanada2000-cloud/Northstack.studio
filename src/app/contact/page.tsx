import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact WebsCraft for custom websites, AI automation, SaaS development, dashboards, and business software. Get a free estimate within 24 hours.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact WebsCraft — Get a Free Estimate",
    description:
      "Ready to start your project? Contact WebsCraft for a free, no-obligation estimate. We build websites, AI automation, SaaS, and custom software.",
    url: "https://webscraft.in/contact",
    siteName: "WebsCraft",
    type: "website",
    images: [{ url: "/og-banner.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact WebsCraft — Get a Free Estimate",
    description: "Contact WebsCraft for custom development. Free estimate within 24 hours.",
    images: ["/og-banner.png"],
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact WebsCraft",
  description: "Get in touch with WebsCraft for custom development services.",
  url: "https://webscraft.in/contact",
  mainEntity: {
    "@type": "Organization",
    name: "WebsCraft",
    telephone: "+919326345546",
    email: "hello@webscraft.in",
  },
};

export default function ContactPage() {
  return (
    <main className="bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <Nav />
      <section className="relative pt-36 pb-24">
        <div className="absolute inset-0 bg-grid radial-fade pointer-events-none" />
        <div className="relative mx-auto max-w-5xl px-6">
          <nav
            className="flex items-center gap-2 text-sm text-secondary mb-8"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-foreground">Contact</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-[-0.03em]">
                Let's talk about your project.
              </h1>
              <p className="mt-4 text-lg text-secondary leading-relaxed">
                Tell us what you are building and we will provide a free, fixed-price estimate
                within 24 hours. No pressure, no sales calls — just a straightforward conversation
                about your project.
              </p>

              <div className="mt-12 space-y-6">
                <a
                  href="https://wa.me/919326345546"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-border p-5 bg-surface hover:border-primary/30 transition-colors"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#25D366]/10 text-[#25D366]">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-medium">WhatsApp</div>
                    <div className="text-sm text-secondary">+91 93263 45546</div>
                    <div className="text-xs text-secondary">Typically replies within 1 hour</div>
                  </div>
                </a>

                <a
                  href="tel:+919326345546"
                  className="group flex items-center gap-4 rounded-2xl border border-border p-5 bg-surface hover:border-primary/30 transition-colors"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-sm text-secondary">+91 93263 45546</div>
                  </div>
                </a>

                <a
                  href="mailto:hello@webscraft.in"
                  className="group flex items-center gap-4 rounded-2xl border border-border p-5 bg-surface hover:border-primary/30 transition-colors"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-sm text-secondary">hello@webscraft.in</div>
                    <div className="text-xs text-secondary">We respond within 24 hours</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 rounded-2xl border border-border p-5 bg-surface opacity-70">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-sm text-secondary">
                      India (Remote — we work with clients across India)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-8">
              <h2 className="text-xl font-semibold tracking-tight mb-4">What happens next?</h2>
              <ol className="space-y-6">
                <li className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    1
                  </span>
                  <div>
                    <div className="font-medium text-sm">You tell us about your project</div>
                    <p className="text-sm text-secondary mt-1">
                      Share what you are building, your timeline, and budget range via WhatsApp or
                      email.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    2
                  </span>
                  <div>
                    <div className="font-medium text-sm">We review and respond</div>
                    <p className="text-sm text-secondary mt-1">
                      Our team reviews your requirements and gets back within 24 hours with
                      questions or a preliminary estimate.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    3
                  </span>
                  <div>
                    <div className="font-medium text-sm">Fixed-price proposal</div>
                    <p className="text-sm text-secondary mt-1">
                      We provide a detailed scope and fixed-price quote. If it works for you, we
                      start building.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    4
                  </span>
                  <div>
                    <div className="font-medium text-sm">Weekly demos until launch</div>
                    <p className="text-sm text-secondary mt-1">
                      We work in weekly sprints with continuous demos. You see progress every week.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
