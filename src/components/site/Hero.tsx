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
          background: "radial-gradient(ellipse at center, rgba(255,255,255,0.08), transparent 60%)",
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
            Building AI Products
            <br />
            <span className="text-secondary">That People Actually Use.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="mt-7 max-w-xl text-base sm:text-lg text-secondary leading-relaxed"
          >
            We design and develop AI-powered web applications, automation systems, and modern SaaS
            products for startups and businesses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-white text-background px-5 py-3 text-sm font-medium transition hover:bg-white/90"
            >
              View Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
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
            />
          </div>

          {/* floating chip */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-4 -bottom-4 rounded-2xl border border-border bg-card px-4 py-3 text-xs text-secondary glow-soft"
          >
            <div className="text-white font-medium">+ 38% conversion</div>
            <div>vs. previous build</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
