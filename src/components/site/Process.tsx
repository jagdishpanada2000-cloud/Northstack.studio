"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  { title: "Discovery", desc: "Deep dives into the problem, users, and constraints." },
  { title: "Design", desc: "Premium interfaces and product flows mapped end-to-end." },
  { title: "Development", desc: "Modern, type-safe stack engineered for speed." },
  { title: "AI Integration", desc: "Models, evals, and pipelines wired into the product." },
  { title: "Launch", desc: "Ship, measure, iterate — together." },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 30%"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative py-32 border-t border-border">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-20 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-secondary">Process</p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-[-0.03em]">
            How we ship.
          </h2>
        </div>

        <div ref={ref} className="relative pl-10 sm:pl-16">
          {/* track */}
          <div className="absolute left-3 sm:left-6 top-2 bottom-2 w-px bg-white/10" />
          {/* animated fill */}
          <motion.div
            style={{ height }}
            className="absolute left-3 sm:left-6 top-2 w-px bg-white"
          />

          <div className="space-y-14">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
                className="relative"
              >
                <div className="absolute -left-[27px] sm:-left-[42px] top-1.5 h-3 w-3 rounded-full bg-white ring-4 ring-background" />
                <div className="text-xs uppercase tracking-[0.18em] text-secondary">
                  Step 0{i + 1}
                </div>
                <h3 className="mt-1 text-2xl sm:text-3xl font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-2 text-secondary max-w-xl">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
