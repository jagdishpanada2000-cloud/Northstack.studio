"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20">
      {/* Background grid + radial fade */}
      <div className="absolute inset-0 bg-grid radial-fade pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />

      {/* Soft top glow */}
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(37,99,235,0.06), transparent 60%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: "easeOut" }}
            className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.04em] leading-[1.02]"
          >
            AI Product Development
            <br />
            <span className="text-secondary">For Startups &amp; SaaS.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="mt-7 max-w-xl text-base sm:text-lg text-secondary leading-relaxed"
          >
            WebsCraft builds custom AI-powered SaaS platforms, web applications, and business
            automation systems for startups and growing businesses. We take your idea from concept
            to launch in weeks — not months.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="/#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium transition hover:bg-primary/90"
            >
              Get a Free Project Estimate
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full border border-border text-foreground px-5 py-3 text-sm font-medium transition hover:bg-black/5"
            >
              View Work
            </a>
          </motion.div>
        </div>

        {/* Showcase image */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden glow-soft">
            <video
              src="https://res.cloudinary.com/dwta5v9wi/video/upload/v1780936408/6bad3c16-128f-4bd3-989e-0aae2013570f_kkdry6.mp4"
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              title="AI-powered SaaS dashboard demo by WebsCraft"
              aria-label="Demo of an AI-powered SaaS dashboard built by WebsCraft"
            />
          </div>

          {/* floating chip */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-4 -bottom-4 rounded-2xl border border-border bg-card px-4 py-3 text-xs text-secondary glow-soft"
          >
            <div className="text-foreground font-medium">+ 38% conversion</div>
            <div>vs. previous build</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
