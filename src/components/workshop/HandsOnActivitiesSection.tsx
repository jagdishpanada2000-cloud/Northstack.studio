"use client";

import React from "react";
import { motion } from "framer-motion";
import { PlayCircle, Users, Code2, FolderKanban, Workflow, HelpCircle } from "lucide-react";

export function HandsOnActivitiesSection() {
  const activities = [
    {
      title: "Live AI Demonstrations",
      description:
        "Watch live walkthroughs of real corporate workflows being solved using modern AI models in real time.",
      icon: PlayCircle,
      badge: "Watch & Learn",
    },
    {
      title: "Interactive Exercises",
      description:
        "Hands-on guided practice sessions where participants execute live prompts on provided sample scenarios.",
      icon: Users,
      badge: "Group Practice",
    },
    {
      title: "Prompt Building",
      description:
        "Construct, test, and optimize custom prompts using WebScraft's proven structured framework.",
      icon: Code2,
      badge: "Skill Builder",
    },
    {
      title: "Business Case Studies",
      description:
        "Analyze how leading enterprise teams reduced task turnaround times by 60%+ using AI.",
      icon: FolderKanban,
      badge: "Real Results",
    },
    {
      title: "Real Workplace Scenarios",
      description:
        "Apply AI solutions to actual operational challenges submitted by your own company participants.",
      icon: Workflow,
      badge: "Tailored Drills",
    },
    {
      title: "Interactive Q&A Session",
      description:
        "Dedicated open-floor time with AI trainers to address specific company policies, tool choices, and workflows.",
      icon: HelpCircle,
      badge: "Expert Q&A",
    },
  ];

  return (
    <section id="activities" className="py-20 md:py-28 relative">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs font-medium"
        >
          Practice
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white"
        >
          Hands-on Activities
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto"
        >
          Learn by doing. Over 50% of workshop duration is spent on active, supervised exercises.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activities.map((act, index) => {
          const Icon = act.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="p-7 rounded-3xl bg-neutral-900/70 border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between group hover:bg-neutral-800/80 shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                    <Icon size={24} />
                  </div>
                  <span className="text-[10px] font-bold text-pink-400 uppercase tracking-wider px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20">
                    {act.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2.5 tracking-tight">{act.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{act.description}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 text-xs text-neutral-400 font-medium">
                Live Trainer Guidance Included
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
