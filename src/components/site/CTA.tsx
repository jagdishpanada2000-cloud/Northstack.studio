"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section
      id="contact"
      className="dark-section relative py-40 border-t border-border overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255,255,255,0.10), transparent 60%)",
        }}
      />
      <div className="absolute inset-0 bg-grid radial-fade opacity-50 pointer-events-none" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.04em] leading-[1.02]"
        >
          Have an idea?
          <br />
          <span className="text-secondary">Let's build it.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-xl text-secondary text-lg"
        >
          We take on a small number of partners each quarter. Tell us about your product and we'll
          get back within 24 hours.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-10"
        >
          <a
            href="mailto:hello@webscraft.in"
            className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-4 text-base font-medium transition hover:bg-primary/90 shadow-[0_0_24px_rgba(37,99,235,0.3)] hover:shadow-[0_0_32px_rgba(37,99,235,0.5)]"
          >
            Tell Us About Your Project
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
