"use client";

"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MessageSquareText,
  Search,
  Bot,
  FileText,
  BrainCircuit,
  LayoutGrid,
  CheckCircle2,
  Compass,
} from "lucide-react";

const tools = [
  {
    name: "ChatGPT",
    icon: MessageSquareText,
    bestFor: "Versatile writing, logic, and fast brainstorming",
    tags: ["Writing", "Logic", "Brainstorming"],
  },
  {
    name: "Gemini",
    icon: BrainCircuit,
    bestFor: "Multimodal analysis and Google ecosystem integration",
    tags: ["Multimodal", "Google Workspace"],
  },
  {
    name: "Microsoft Copilot",
    icon: LayoutGrid,
    bestFor: "Enterprise Word, Excel, and PowerPoint assistant",
    tags: ["Office 365", "Excel", "PPT"],
  },
  {
    name: "Claude",
    icon: Bot,
    bestFor: "Long-document analysis and nuanced editorial writing",
    tags: ["Long Documents", "Editorial"],
  },
  {
    name: "NotebookLM",
    icon: FileText,
    bestFor: "Grounded document synthesis and research",
    tags: ["Research", "Synthesis"],
  },
  {
    name: "Perplexity",
    icon: Search,
    bestFor: "Real-time web search with verified citations",
    tags: ["Web Search", "Citations"],
  },
];

export function ToolsSection() {
  return (
    <section className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <p className="text-[clamp(0.95rem,3.2vw,1.15rem)] text-neutral-300 leading-relaxed mb-10 text-center">
          We demystify the leading corporate AI platforms and teach you exactly where each one
          excels, so you always reach for the right tool for the job.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="p-6 rounded-3xl bg-neutral-900/60 border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                      <Icon size={22} />
                    </div>
                    <span className="text-[11px] font-semibold text-pink-400 uppercase tracking-wider px-2.5 py-1 rounded-full bg-pink-500/10 border border-pink-500/20">
                      AI Tool
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-white mb-2 tracking-tight">{tool.name}</h2>
                  <p className="text-neutral-400 text-sm leading-relaxed">{tool.bestFor}</p>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {tool.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium text-neutral-300 px-2.5 py-1 rounded-md bg-white/5 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 p-6 sm:p-8 rounded-3xl border border-white/10 bg-neutral-900/50"
        >
          <div className="flex items-start gap-3">
            <Compass className="size-5 text-white shrink-0 mt-0.5" />
            <div>
              <h3 className="text-base font-bold text-white mb-2">Tool Selection Matrix</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Every attendee receives a clear decision matrix mapping each workplace task to the
                most effective AI tool — so the right choice is always one glance away.
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "Which tool to use for email, documents, and spreadsheets",
                  "How to combine tools for multi-step workflows",
                  "When to avoid AI and rely on human oversight",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2 text-xs text-neutral-300">
                    <CheckCircle2 size={14} className="text-white shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
