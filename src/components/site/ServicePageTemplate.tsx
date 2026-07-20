import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Service } from "@/lib/services.data";
import { services } from "@/lib/services.data";

const iconMap: Record<string, React.ReactNode> = {
  Globe: <GlobeIcon />,
  Bot: <BotIcon />,
  BarChart3: <BarChartIcon />,
  Cloud: <CloudIcon />,
  ShoppingCart: <CartIcon />,
  UtensilsCrossed: <UtensilsIcon />,
  Code2: <CodeIcon />,
};

function GlobeIcon() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
      />
    </svg>
  );
}

function BotIcon() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
      />
    </svg>
  );
}

function BarChartIcon() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
      />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
      />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
      />
    </svg>
  );
}

function UtensilsIcon() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
      />
    </svg>
  );
}

const serviceSchema = (service: Service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: service.title,
  provider: { "@type": "Organization", name: "WebsCraft", url: "https://webscraft.in" },
  description: service.description,
  areaServed: "India",
  serviceType: service.title,
});

const faqSchema = (service: Service) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: service.faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
});

export function ServicePageTemplate({ service }: { service: Service }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(service)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(service)) }}
      />

      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid radial-fade pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6">
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-2 text-sm text-secondary mb-8"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-foreground">{service.title}</span>
          </nav>

          <div className="grid lg:grid-cols-5 gap-16 items-start">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  {iconMap[service.icon]}
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-secondary font-medium">
                  {service.shortTitle}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] leading-[1.05]">
                {service.title}
              </h1>
              <p className="mt-4 text-lg text-secondary leading-relaxed">{service.tagline}</p>
            </div>

            <div className="lg:col-span-2 rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <div className="text-xs uppercase tracking-[0.18em] text-secondary mb-2">
                AI-Friendly Summary
              </div>
              <p className="text-sm text-foreground leading-relaxed">{service.summary}</p>
              <div className="mt-6">
                <a
                  href="https://wa.me/919326345546"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium transition hover:bg-primary/90 w-full justify-center"
                >
                  Get a Free Quote
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
              <p className="mt-3 text-xs text-secondary text-center">
                Or email{" "}
                <a href="mailto:hello@webscraft.in" className="text-primary underline">
                  hello@webscraft.in
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="border-t border-border py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">
            What is {service.title}?
          </h2>
          <p className="text-secondary leading-relaxed max-w-3xl text-base sm:text-lg">
            {service.description}
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-t border-border py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-10">Benefits</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {service.benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-3 p-4 rounded-xl border border-border bg-surface"
              >
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-10">Features</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.features.map((feature) => (
              <div key={feature} className="p-4 rounded-xl border border-border bg-surface">
                <div className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary shrink-0 mt-1.5" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="border-t border-border py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">
            Who is this for?
          </h2>
          <p className="text-secondary leading-relaxed max-w-3xl text-base sm:text-lg">
            {service.whoItsFor}
          </p>
          <p className="mt-6 text-sm text-secondary">
            <span className="font-medium text-foreground">Typical timeline:</span>{" "}
            {service.timeline}
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {service.faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-xl border border-border overflow-hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between px-5 py-4 text-sm font-medium text-foreground hover:bg-black/[0.02] transition-colors">
                  {faq.q}
                  <span className="shrink-0 ml-2 text-secondary transition-transform duration-200 group-open:rotate-180">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="px-5 pb-4 text-sm text-secondary leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="dark-section border-t border-border py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Ready to get started?
          </h2>
          <p className="mt-4 text-secondary text-lg">
            Tell us about your project and we will provide a free, fixed-price estimate within 24
            hours.
          </p>
          <div className="mt-8">
            <a
              href="https://wa.me/919326345546"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-4 text-base font-medium transition hover:bg-primary/90"
            >
              Get a Free Quote
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
          <p className="mt-4 text-sm text-secondary">
            Or email{" "}
            <a href="mailto:hello@webscraft.in" className="text-primary underline">
              hello@webscraft.in
            </a>
          </p>
        </div>
      </section>

      {/* Related services */}
      <section className="border-t border-border py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-xl font-semibold tracking-tight mb-6">Related Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services
              .filter((s) => s.slug !== service.slug)
              .slice(0, 4)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/${s.slug}`}
                  className="group p-4 rounded-xl border border-border bg-surface hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <div className="h-4 w-4">{iconMap[s.icon]}</div>
                    </div>
                    <span className="text-sm font-medium">{s.title}</span>
                  </div>
                  <p className="text-xs text-secondary line-clamp-2">{s.tagline}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
