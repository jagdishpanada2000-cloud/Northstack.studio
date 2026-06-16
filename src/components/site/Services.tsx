"use client";

import { motion } from "framer-motion";
import { Sparkles, LayoutDashboard, Workflow, Globe } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "AI Applications",
    desc: "Custom GPT integrations, RAG pipelines, and AI workflows tailored to your product.",
  },
  {
    icon: LayoutDashboard,
    title: "SaaS Development",
    desc: "Modern subscription platforms, dashboards, and billing systems built to scale.",
  },
  {
    icon: Workflow,
    title: "Automation Systems",
    desc: "Business process automation that removes manual work and unlocks throughput.",
  },
  {
    icon: Globe,
    title: "Modern Websites",
    desc: "Fast, conversion-focused marketing sites with premium motion and craft.",
  },
];

export function Services() {
  return (
    <section className="relative py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-secondary">Services</p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-[-0.03em]">
            What we build.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: "easeOut" }}
              className="group card-surface p-8 hover:[border-color:var(--hover-border)] hover:bg-black/[0.02] relative overflow-hidden"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: "radial-gradient(circle, rgba(37,99,235,0.04), transparent 60%)",
                }}
              />
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-black/[0.04]">
                <s.icon className="h-5 w-5 text-foreground" />
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-secondary leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
