"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Users2,
  GraduationCap,
  Headphones,
  TrendingUp,
  Settings,
  Briefcase,
  Megaphone,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export function WhoShouldAttendSection() {
  const audiences = [
    {
      title: "HR Professionals",
      icon: Users2,
      useCase:
        "Drafting job descriptions, candidate communications, policy documentation, and onboarding workflows.",
      tag: "Human Resources",
    },
    {
      title: "Trainers & Learning Teams",
      icon: GraduationCap,
      useCase:
        "Creating training materials, quizzes, educational guides, and interactive learning outlines.",
      tag: "L&D Teams",
    },
    {
      title: "Customer Support",
      icon: Headphones,
      useCase:
        "Generating empathetic ticket responses, macro templates, FAQ knowledge bases, and troubleshooting summaries.",
      tag: "Client Services",
    },
    {
      title: "Sales Teams",
      icon: TrendingUp,
      useCase:
        "Crafting personalized outreach, deal summaries, proposal generation, and competitive analysis.",
      tag: "Revenue & Sales",
    },
    {
      title: "Operations Teams",
      icon: Settings,
      useCase:
        "Standardizing operating procedures, process documentation, spreadsheet analysis, and task tracking.",
      tag: "Operations",
    },
    {
      title: "Managers & Team Leads",
      icon: Briefcase,
      useCase:
        "Summarizing team status reports, meeting action items, project briefs, and performance reviews.",
      tag: "Leadership",
    },
    {
      title: "Marketing Teams",
      icon: Megaphone,
      useCase:
        "Brainstorming campaign angles, copywriting, newsletter creation, and content repurposing.",
      tag: "Growth & Brand",
    },
    {
      title: "Workplace Innovators",
      icon: Sparkles,
      useCase:
        "Anyone interested in improving workplace productivity, eliminating tedious busywork, and working smarter.",
      tag: "All Employees",
    },
  ];

  return (
    <section id="who-should-attend" className="py-20 md:py-28 relative">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs font-medium"
        >
          Who Should Attend
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white"
        >
          Who Should Attend?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto"
        >
          Tailored business applications designed for professionals across every department and
          level.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {audiences.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="group relative p-6 rounded-2xl bg-neutral-900/50 border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between hover:bg-neutral-800/60"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                    <Icon size={20} />
                  </div>
                  <span className="text-[10px] font-medium text-neutral-400 uppercase tracking-wider px-2 py-0.5 rounded-md bg-white/5 border border-white/10">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 tracking-tight">{item.title}</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">{item.useCase}</p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-medium text-neutral-500 group-hover:text-white transition-colors">
                <span>View Role Workflows</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/workshop/register"
          className="group relative inline-flex items-center gap-2 min-h-[48px] px-6 py-3 rounded-full text-white text-sm font-semibold overflow-hidden bg-gradient-to-b from-pink-500/55 via-pink-500/30 to-fuchsia-600/55 border border-white/20 backdrop-blur-xl hover:scale-105 active:scale-95 transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.35),inset_0_-8px_16px_rgba(255,255,255,0.1),0_8px_32px_rgba(236,72,153,0.35)] hover:border-white/35 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.45),inset_0_-8px_16px_rgba(255,255,255,0.15),0_8px_45px_rgba(236,72,153,0.55)]"
        >
          <span className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.35),transparent_60%)] pointer-events-none" />
          <span className="absolute top-0 left-[8%] right-[8%] h-[45%] rounded-full bg-white/25 blur-lg pointer-events-none transition-all duration-300 group-hover:bg-white/35" />
          <span className="absolute bottom-0 left-1/4 right-1/4 h-[35%] rounded-full bg-pink-300/25 blur-lg pointer-events-none" />
          <span className="relative z-10">Reserve Seats for Your Team</span>
          <ArrowRight size={16} className="relative z-10" />
        </Link>
      </div>
    </section>
  );
}
