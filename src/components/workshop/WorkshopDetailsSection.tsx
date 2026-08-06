"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Clock,
  MapPin,
  Sparkles,
  CheckCircle,
  Award,
  Globe,
  Layers,
  Building2,
} from "lucide-react";

export function WorkshopDetailsSection() {
  const details = [
    {
      label: "Duration",
      value: "2 Hours",
      subtext: "Fast-paced, focused, high-impact session",
      icon: Clock,
    },
    {
      label: "Mode",
      value: "Online",
      subtext: "Live trainer interaction via video call",
      icon: MapPin,
    },
    {
      label: "Level",
      value: "Beginner Friendly",
      subtext: "No coding or prior AI experience required",
      icon: Sparkles,
    },
    {
      label: "Prerequisites",
      value: "None",
      subtext: "Open to all corporate employees and teams",
      icon: CheckCircle,
    },
    {
      label: "Certificate",
      value: "Participation Certificate",
      subtext: "Optional digital credential for employees",
      icon: Award,
    },
    {
      label: "Language",
      value: "English",
      subtext: "Clear, professional corporate delivery",
      icon: Globe,
    },
    {
      label: "Format",
      value: "Interactive & Hands-on",
      subtext: "Demos, exercises, prompt building & Q&A",
      icon: Layers,
    },
    {
      label: "Conducted By",
      value: "WebScraft",
      subtext: "Expert AI trainers & enterprise consultants",
      icon: Building2,
    },
  ];

  return (
    <section id="details" className="py-20 md:py-28 relative">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs font-medium"
        >
          Logistics
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white"
        >
          Workshop Details
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto"
        >
          Key logistics and operational parameters for hosting the session at your workplace.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {details.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="p-6 rounded-3xl bg-neutral-900/60 border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-white mb-4">
                  <Icon size={20} />
                </div>
                <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block mb-1">
                  {item.label}
                </span>
                <h3 className="text-xl font-extrabold text-white tracking-tight">{item.value}</h3>
              </div>
              <p className="mt-3 text-xs text-neutral-400 leading-relaxed pt-3 border-t border-white/5">
                {item.subtext}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
