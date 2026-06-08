"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type MouseEvent } from "react";

const cards = [
  { tag: "AI", title: "Notes Workspace", sub: "Streaming generation" },
  { tag: "SaaS", title: "Billing Dashboard", sub: "Stripe + analytics" },
  { tag: "Auto", title: "Workflow Engine", sub: "Trigger-based" },
  { tag: "Web", title: "Marketing Site", sub: "Edge-rendered" },
  { tag: "AI", title: "RAG Chat", sub: "Vector search" },
  { tag: "SaaS", title: "Admin Console", sub: "Role-based access" },
];

function FloatingCard({
  i,
  mx,
  my,
  card,
}: {
  i: number;
  mx: ReturnType<typeof useSpring>;
  my: ReturnType<typeof useSpring>;
  card: (typeof cards)[number];
}) {
  // depth based on index for parallax
  const depth = ((i % 3) + 1) * 8;
  const tx = useTransform(mx, (v) => v * depth);
  const ty = useTransform(my, (v) => v * depth);

  return (
    <motion.div
      style={{ x: tx, y: ty }}
      className="card-surface p-6 hover:[border-color:var(--hover-border)] group cursor-default"
    >
      <div className="flex items-center justify-between">
        <span className="text-[10px] uppercase tracking-[0.18em] text-secondary">{card.tag}</span>
        <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
      </div>
      <div className="mt-12 aspect-video rounded-xl bg-gradient-to-br from-white/[0.06] to-white/[0.01] border border-border" />
      <div className="mt-5">
        <div className="text-base font-medium text-white">{card.title}</div>
        <div className="text-xs text-secondary">{card.sub}</div>
      </div>
    </motion.div>
  );
}

export function Showcase() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mx = useSpring(x, { stiffness: 80, damping: 18 });
  const my = useSpring(y, { stiffness: 80, damping: 18 });

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    x.set(px);
    y.set(py);
  }

  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <section
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative py-32 border-t border-border overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-grid radial-fade pointer-events-none opacity-60"
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-secondary">Showcase</p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-[-0.03em]">
            A glimpse of what we ship.
          </h2>
          <p className="mt-4 text-secondary">Move your cursor across the canvas.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <FloatingCard key={c.title} i={i} mx={mx} my={my} card={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
