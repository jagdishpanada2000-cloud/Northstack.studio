"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({
  to,
  suffix = "",
  prefix = "",
  decimals = 0,
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(
    mv,
    (v) => `${prefix}${decimals ? v.toFixed(decimals) : Math.floor(v).toLocaleString()}${suffix}`,
  );

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, { duration: 1.8, ease: "easeOut" });
    return controls.stop;
  }, [inView, mv, to]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const stats = [
  { value: 50000, suffix: "+", label: "Questions Processed" },
  { value: 5, suffix: " sec", label: "Average Generation Time" },
  { value: 100, suffix: "+ hrs", label: "Hours Saved" },
  { value: 99.9, suffix: "%", decimals: 1, label: "Reliability" },
];

export function Stats() {
  return (
    <section className="relative py-28 border-y border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-secondary">Trusted Output</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
            Numbers from products we've shipped.
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
              className="card-surface p-8 hover:[&]:[border-color:var(--hover-border)] group"
            >
              <div className="text-4xl sm:text-5xl font-semibold tracking-tight">
                <Counter to={s.value} suffix={s.suffix} decimals={s.decimals} />
              </div>
              <div className="mt-3 text-sm text-secondary">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
