"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlowBox } from "@/components/workshop/GlowBox";
import { Clock, Zap, Wrench, ShieldCheck, Smile, Presentation } from "lucide-react";

export function WhyAttendSection() {
  const benefits = [
    {
      icon: Clock,
      title: "Save Daily Time",
      description: "Save time by automating repetitive daily tasks.",
      badge: "Efficiency",
    },
    {
      icon: Zap,
      title: "Practical AI Skills",
      description: "Learn practical AI skills instead of theoretical concepts.",
      badge: "Real-World",
    },
    {
      icon: Wrench,
      title: "Cross-Role Productivity",
      description: "Discover AI tools that improve productivity across different roles.",
      badge: "Versatile",
    },
    {
      icon: ShieldCheck,
      title: "Responsible & Secure AI",
      description: "Understand responsible and secure AI usage in a corporate environment.",
      badge: "Compliance",
    },
    {
      icon: Smile,
      title: "Build Confidence",
      description: "Build confidence using AI for everyday work.",
      badge: "Empowerment",
    },
    {
      icon: Presentation,
      title: "Hands-on Experience",
      description: "Gain hands-on experience through live demonstrations and exercises.",
      badge: "Interactive",
    },
  ];

  return (
    <section id="why-attend" className="py-20 md:py-28 relative">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs font-medium"
        >
          Why Attend
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white"
        >
          Why Attend This Workshop?{" "}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto"
        >
          Designed specifically for corporate employees looking to boost daily efficiency, build
          practical skills, and maintain strict data security.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ y: -4 }}
            >
              <GlowBox className="h-full">
                <div className="group relative p-7 rounded-3xl bg-neutral-900/60 border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl h-full">
                  <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-white/5 blur-2xl group-hover:bg-white/10 transition-all" />

                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-300 shadow-md">
                        <Icon size={22} />
                      </div>
                      <span className="text-[11px] font-semibold text-pink-400 uppercase tracking-wider px-2.5 py-1 rounded-full bg-pink-500/10 border border-pink-500/20">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2.5 tracking-tight group-hover:text-neutral-100">
                      {item.title}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">{item.description}</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 text-xs text-neutral-500 font-medium flex items-center justify-between">
                    <span>Benefit #{index + 1}</span>
                    <span className="text-neutral-400 group-hover:text-white transition-colors">
                      WebScraft AI Standard +
                    </span>
                  </div>
                </div>
              </GlowBox>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
