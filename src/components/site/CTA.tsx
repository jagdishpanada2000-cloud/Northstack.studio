"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Send } from "lucide-react";

export function CTA() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, project }),
    });
    setSent(true);
    setName("");
    setEmail("");
    setProject("");
  };

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

        {/* Contact form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mx-auto mt-10 max-w-lg space-y-4 text-left"
        >
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:border-primary/50 transition-colors"
          />
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:border-primary/50 transition-colors"
          />
          <textarea
            placeholder="Tell us about your project..."
            value={project}
            onChange={(e) => setProject(e.target.value)}
            required
            rows={4}
            className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:border-primary/50 transition-colors resize-none"
          />
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              type="submit"
              disabled={sent}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground px-6 py-3 text-sm font-medium transition hover:bg-primary/90 disabled:opacity-50"
            >
              {sent ? "Sent!" : "Send"}
              <Send className="h-4 w-4" />
            </button>
            <span className="text-xs text-white/40">or</span>
            <a
              href="https://wa.me/919326345546"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 text-white px-6 py-3 text-sm font-medium transition hover:bg-white/5"
            >
              Tell Us About Your Project
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
