"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 bg-grid radial-fade pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(37,99,235,0.06), transparent 60%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
            className="text-xs uppercase tracking-[0.2em] text-secondary font-medium"
          >
            Custom Development Studio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.04em] leading-[1.02]"
          >
            We build websites, AI automation
            <br />
            <span className="text-secondary">&amp; custom software for your business.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="mt-7 max-w-xl text-base sm:text-lg text-secondary leading-relaxed"
          >
            WebsCraft builds custom websites, AI chatbots and automation, SaaS platforms, business
            dashboards, and internal software for startups, local businesses, and growing companies
            across India. We take your idea from concept to launch in weeks — not months.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="https://wa.me/919326345546"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium transition hover:bg-primary/90"
            >
              Get a Free Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full border border-border text-foreground px-5 py-3 text-sm font-medium transition hover:bg-black/5"
            >
              View Our Work
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="mt-12 grid grid-cols-3 gap-6 max-w-md"
          >
            {[
              { label: "Projects Delivered", value: "10+" },
              { label: "Avg. Timeline", value: "3–6 wks" },
              { label: "Client Satisfaction", value: "100%" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-semibold tracking-tight">{stat.value}</div>
                <div className="text-xs text-secondary mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
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
              title="Web app demo built by WebsCraft"
              aria-label="Demo of a web application built by WebsCraft"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
