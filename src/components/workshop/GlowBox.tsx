"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";

interface GlowBoxProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

/** Wraps a card with a pink glow that fades in as the box scrolls into view,
 *  peaks while it is centred, and fades out again as it leaves the viewport. */
export function GlowBox({ children, className = "", intensity = 1 }: GlowBoxProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Sharp window around the viewport centre: a box glows only while it is
  // near the middle of the screen. Because only one box can occupy that spot
  // at a time, the glow passes from box to box as the user scrolls.
  const progress = useTransform(scrollYProgress, [0, 0.4, 0.5, 0.6, 1], [0, 0, 1, 0, 0]);
  const shadowAlpha = useTransform(progress, (v) => (v * 0.5 * intensity).toFixed(3));
  const shadowAlpha2 = useTransform(progress, (v) => (v * 0.3 * intensity).toFixed(3));
  const spread = useTransform(progress, (v) => `${Math.round(v * 34)}px`);
  const spread2 = useTransform(progress, (v) => `${Math.round(v * 72)}px`);
  const boxShadow = useMotionTemplate`0 0 ${spread} rgba(236,72,153,${shadowAlpha}), 0 0 ${spread2} rgba(217,70,239,${shadowAlpha2})`;
  const overlayOpacity = useTransform(progress, (v) => v * intensity);

  return (
    <motion.div ref={ref} className={`relative rounded-3xl ${className}`} style={{ boxShadow }}>
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-3xl"
        style={{
          opacity: overlayOpacity,
          background:
            "radial-gradient(ellipse 80% 80% at 50% 40%, rgba(236,72,153,0.22), rgba(217,70,239,0.1) 50%, transparent 75%)",
        }}
      />
      <div className="relative">{children}</div>
    </motion.div>
  );
}
