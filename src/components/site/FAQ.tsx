"use client";

import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How long does it take to build an AI-powered SaaS product?",
    a: "Most MVPs ship in 4–8 weeks. Complex platforms with custom AI models typically take 8–14 weeks. We work in weekly sprints with continuous demos so you always know where things stand.",
  },
  {
    q: "What technologies do you use?",
    a: "We build on Next.js, TypeScript, Supabase, and PostgreSQL. For AI, we integrate OpenAI, Anthropic, and custom models deployed on Vercel or AWS. Every stack is chosen for speed, type safety, and scalability.",
  },
  {
    q: "Do you only work with startups?",
    a: "We work with funded startups, early-stage founders, and established businesses launching new AI products. If you're building something new and need to move fast, we're a fit.",
  },
  {
    q: "How much does a custom AI application cost?",
    a: "Every project is scoped individually. We'll work with you to define the requirements and give you a fixed-price estimate before any work begins. Contact us for a free estimate based on your specific needs.",
  },
  {
    q: "What does the engagement process look like?",
    a: "We start with a discovery sprint to align on goals, then move into design, development, and AI integration. You get weekly demos, a dedicated Slack channel, and direct access to the team building your product.",
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
        </div>
      </div>
    </section>
  );
}
