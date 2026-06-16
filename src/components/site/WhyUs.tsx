"use client";

import { motion } from "framer-motion";
import { Zap, Brain, Layers, MessageCircle } from "lucide-react";

const items = [
  {
    icon: Zap,
    title: "Fast Iteration",
    desc: "Weekly demos. No three-month silences. Velocity is a feature.",
  },
  {
    icon: Brain,
    title: "AI First",
    desc: "We build with models, evals, and prompts as first-class citizens.",
  },
  {
    icon: Layers,
    title: "Modern Stack",
    desc: "Type-safe, edge-deployed, observable. Built to last beyond launch.",
  },
  {
    icon: MessageCircle,
    title: "Direct Communication",
    desc: "Talk to the people building. No account managers, no handoffs.",
  },
];

export function WhyUs() {
  return (
    <section className="relative py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.035em] leading-[1.05]"
        >
          Traditional agencies sell meetings.
          <br />
          <span className="text-secondary">We ship products.</span>
        </motion.h2>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="card-surface p-6 hover:[border-color:var(--hover-border)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-black/[0.04]">
                <it.icon className="h-4.5 w-4.5 text-foreground" />
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">{it.title}</h3>
              <p className="mt-2 text-sm text-secondary leading-relaxed">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
