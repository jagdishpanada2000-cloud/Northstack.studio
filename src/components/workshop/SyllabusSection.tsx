"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Shield,
  Sparkles,
  Bot,
  Briefcase,
  Laptop,
  Users,
  Rocket,
  Calendar,
  Check,
  GraduationCap,
} from "lucide-react";

export function SyllabusSection() {
  const modules = [
    {
      code: "Module 01",
      title: "Introduction to AI",
      description:
        "Understand the fundamentals of Artificial Intelligence, common terminology, and how AI is transforming modern workplaces.",
      deliverable: "AI Foundations Guide",
      icon: Brain,
    },
    {
      code: "Module 02",
      title: "Responsible AI & Data Privacy",
      description:
        "Learn how to use AI securely while protecting confidential company information and following responsible AI practices.",
      deliverable: "Responsible AI Checklist",
      icon: Shield,
    },
    {
      code: "Module 03",
      title: "Prompt Engineering",
      description:
        "Master structured prompting techniques to generate accurate, consistent, and high-quality AI responses.",
      deliverable: "Prompt Engineering Playbook",
      icon: Sparkles,
    },
    {
      code: "Module 04",
      title: "AI Productivity Tools",
      description:
        "Compare ChatGPT, Gemini, Microsoft Copilot, Claude, NotebookLM, and Perplexity, and understand where each tool performs best.",
      deliverable: "AI Tool Selection Matrix",
      icon: Bot,
    },
    {
      code: "Module 05",
      title: "AI for Everyday Work",
      description:
        "Apply AI to emails, reports, presentations, spreadsheets, meeting notes, research, and everyday business tasks.",
      deliverable: "Workplace Productivity Toolkit",
      icon: Briefcase,
    },
    {
      code: "Module 06",
      title: "Hands-on AI Lab",
      description:
        "Practice solving real workplace scenarios through guided exercises, live demonstrations, and instructor feedback.",
      deliverable: "Practical Exercise Workbook",
      icon: Laptop,
    },
    {
      code: "Module 07",
      title: "Role-Specific AI Applications",
      description:
        "Explore AI workflows designed specifically for HR, Sales, Marketing, Customer Support, Operations, Managers, and Learning & Development teams.",
      deliverable: "Role-Based AI Workflow Playbook",
      icon: Users,
    },
    {
      code: "Module 08",
      title: "AI Capstone & Workplace Implementation",
      description:
        "Apply everything learned throughout the program by solving complete workplace scenarios and building an AI-first productivity workflow.",
      deliverable: "AI Productivity Action Plan",
      icon: Rocket,
    },
  ];

  return (
    <section id="syllabus" className="py-20 md:py-28 relative">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs font-medium"
        >
          Curriculum
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white"
        >
          8 Core Learning Modules
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto"
        >
          Curated by WebScraft Corporate Trainers
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-3 pt-2"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-neutral-300">
            <Calendar size={14} className="text-pink-400" />
            <span className="font-medium">8 Workshops</span>
            <span className="text-neutral-600">•</span>
            <span className="font-medium">Every Sunday</span>
            <span className="text-neutral-600">•</span>
            <span className="font-medium">2 Hours per Session</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-emerald-400 font-semibold">
            <Check size={14} />
            100% Practical &amp; Interactive
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {modules.map((mod, index) => {
            const Icon = mod.icon;
            return (
              <motion.div
                key={mod.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="group relative flex flex-col h-full rounded-2xl border border-white/10 bg-neutral-900/70 backdrop-blur-2xl p-6 shadow-xl hover:border-pink-500/30 hover:shadow-[0_0_40px_rgba(236,72,153,0.15)] transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-full bg-white/10 border border-white/15 text-white group-hover:text-pink-400 group-hover:border-pink-500/40 transition-colors duration-300">
                    <Icon size={20} />
                  </div>
                  <span className="text-xs font-bold text-pink-400 tracking-wide">{mod.code}</span>
                </div>

                <h4 className="text-base font-bold text-white tracking-tight leading-snug mb-2">
                  {mod.title}
                </h4>

                <p className="text-xs text-neutral-400 leading-relaxed flex-1 mb-4">
                  {mod.description}
                </p>

                <div className="flex items-center gap-2 text-xs">
                  <GraduationCap size={14} className="text-pink-400 shrink-0" />
                  <span className="font-medium text-neutral-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/10 truncate">
                    {mod.deliverable}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
