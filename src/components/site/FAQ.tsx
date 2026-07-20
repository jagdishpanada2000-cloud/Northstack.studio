"use client";

import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    q: "What does WebsCraft build?",
    a: "We build custom websites, AI chatbots and automation systems, SaaS platforms, business dashboards, ecommerce stores, restaurant online ordering systems, and custom business software. We work with startups, local businesses, and growing companies across India.",
  },
  {
    q: "How much does a custom website cost?",
    a: "Website costs vary based on complexity. A simple business site starts at ₹15,000. Ecommerce stores start at ₹25,000. Custom platforms start at ₹50,000. Every project receives a fixed-price quote before work begins. Contact us for a free estimate.",
  },
  {
    q: "How long does it take to build a website or software?",
    a: "A standard business website takes 2–3 weeks. AI chatbots take 1–2 weeks. Ecommerce stores take 3–5 weeks. SaaS platforms take 6–14 weeks for an MVP. Custom software takes 4–10 weeks depending on complexity.",
  },
  {
    q: "Do you work with small businesses or only startups?",
    a: "We work with everyone. Startups, local businesses (restaurants, clinics, salons, agencies), and established companies launching new digital products. If you need a website, automation, or software built, we can help.",
  },
  {
    q: "How do I get started?",
    a: "Contact us via WhatsApp at +91 93263 45546 or email hello@webscraft.in. Tell us about your project and we'll provide a free estimate within 24 hours. Once approved, we start building and show you progress every week.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-32 border-t border-border">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-16 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-secondary">FAQ</p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-[-0.03em]">
            Frequently asked questions.
          </h2>
        </div>

        <Accordion.Root type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.04, ease: "easeOut" }}
            >
              <Accordion.Item
                value={`item-${i}`}
                className="card-surface border border-border rounded-xl overflow-hidden"
              >
                <Accordion.Header className="flex">
                  <Accordion.Trigger className="group flex flex-1 items-center justify-between px-6 py-5 text-left text-base sm:text-lg font-medium tracking-tight hover:[border-color:var(--hover-border)] transition-colors">
                    <span>{faq.q}</span>
                    <ChevronDown className="h-4 w-4 shrink-0 text-secondary transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <div className="px-6 pb-5 text-sm text-secondary leading-relaxed">{faq.a}</div>
                </Accordion.Content>
              </Accordion.Item>
            </motion.div>
          ))}
        </Accordion.Root>

        <div className="mt-12 text-center">
          <button
            onClick={() => window.dispatchEvent(new Event("open-chat"))}
            className="rounded-xl bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Still have questions? Chat with AI
          </button>
          <div className="mt-4">
            <Link
              href="/contact"
              className="text-sm text-secondary hover:text-primary transition-colors underline"
            >
              Or visit our contact page
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
