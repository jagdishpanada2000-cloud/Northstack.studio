"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Target,
  Zap,
  Shield,
  MessageSquareText,
  FileText,
  Compass,
  AlertCircle,
  BrainCircuit,
} from "lucide-react";

export function WhatYouWillLearnSection() {
  const outcomes = [
    {
      title: "Write Better Prompts",
      description:
        "Master structured prompt techniques to get accurate, context-aware answers from AI on your first attempt.",
      icon: Target,
    },
    {
      title: "Use AI Responsibly",
      description:
        "Safeguard corporate data privacy, respect intellectual property, and follow company AI compliance rules.",
      icon: Shield,
    },
    {
      title: "Save Time on Repetitive Work",
      description:
        "Automate routine emails, data cleanup, document formatting, and administrative tasks effortless.",
      icon: Zap,
    },
    {
      title: "Improve Communication",
      description:
        "Refine tone, clarity, and impact in internal emails, stakeholder updates, and team announcements.",
      icon: MessageSquareText,
    },
    {
      title: "Generate Reports Faster",
      description:
        "Summarize extensive meeting notes, research papers, and spreadsheets into concise executive digests.",
      icon: FileText,
    },
    {
      title: "Choose the Right AI Tool",
      description:
        "Know exactly when to deploy ChatGPT, Gemini, Copilot, Claude, NotebookLM, or Perplexity.",
      icon: Compass,
    },
    {
      title: "Understand AI Limitations",
      description:
        "Spot hallucinations, verify critical data points, and understand when human oversight is required.",
      icon: AlertCircle,
    },
    {
      title: "Build an AI-First Mindset",
      description:
        "Develop the habit of framing workplace challenges through smart AI assistance and productivity loops.",
      icon: BrainCircuit,
    },
  ];

  return (
    <section id="what-you-will-learn" className="py-20 md:py-28 relative">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs font-medium"
        >
          Outcomes
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white"
        >
          What You Will Learn
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto"
        >
          After completing this workshop, participants will be able to perform these concrete
          workplace competencies:
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {outcomes.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="p-6 rounded-3xl bg-neutral-900/60 border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white mb-4 group-hover:bg-white group-hover:text-black transition-colors">
                  <Icon size={20} />
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 size={16} className="text-white shrink-0" />
                  <h3 className="text-base font-bold text-white tracking-tight">{item.title}</h3>
                </div>

                <p className="text-neutral-400 text-xs leading-relaxed">{item.description}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-medium text-emerald-400">
                Verified Skill Outcome
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
