"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Building2, ShieldCheck, CheckCircle2 } from "lucide-react";

export function FinalCtaSection() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="relative max-w-5xl mx-auto rounded-3xl border border-white/15 bg-gradient-to-b from-neutral-900/90 via-neutral-950 to-black p-8 sm:p-12 md:p-16 text-center overflow-hidden shadow-2xl">
        <div className="pointer-events-none absolute -top-40 -left-40 h-80 w-80 rounded-full bg-pink-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-neutral-200 text-xs font-semibold backdrop-blur-md"
          >
            <Sparkles className="size-3.5 text-white animate-pulse" />
            <span>WebScraft Enterprise Learning</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight"
          >
            Ready to Explore the Future of Work?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-300 text-base sm:text-lg md:text-xl leading-relaxed font-normal max-w-2xl mx-auto"
          >
            Join this interactive workshop and discover how Artificial Intelligence can help you
            work more efficiently, make better decisions, and unlock new possibilities in your daily
            role.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/workshop/register"
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2.5 min-h-[52px] px-8 py-4 rounded-full text-white text-base font-bold overflow-hidden bg-gradient-to-b from-pink-500/70 via-pink-500/40 to-fuchsia-600/70 border border-white/25 backdrop-blur-xl hover:scale-105 active:scale-95 transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.45),inset_0_-8px_16px_rgba(255,255,255,0.15),0_8px_40px_rgba(236,72,153,0.55)] hover:border-white/40 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.55),inset_0_-8px_16px_rgba(255,255,255,0.2),0_8px_55px_rgba(236,72,153,0.75)]"
            >
              <span className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.4),transparent_60%)] pointer-events-none" />
              <span className="absolute top-0 left-[8%] right-[8%] h-[45%] rounded-full bg-white/30 blur-lg pointer-events-none transition-all duration-300 group-hover:bg-white/40" />
              <span className="absolute bottom-0 left-1/4 right-1/4 h-[35%] rounded-full bg-pink-300/30 blur-lg pointer-events-none" />
              <span className="relative z-10">Reserve My Seat</span>
              <ArrowRight size={18} className="relative z-10" />
            </Link>
          </motion.div>

          <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-emerald-400" /> Live & Interactive
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-white" /> Enterprise Safe & Compliant
            </span>
            <span className="flex items-center gap-1.5">
              <Building2 size={14} className="text-white" /> Workshop conducted by{" "}
              <strong>WebScraft</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
