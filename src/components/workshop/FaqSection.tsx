"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Do I need prior AI experience?",
      a: "No prior experience is necessary. The workshop is specifically crafted for corporate employees with little or no background in Artificial Intelligence. All concepts are introduced step-by-step using plain language.",
    },
    {
      q: "Will practical examples be covered?",
      a: "Yes, over half of the workshop focuses on real business use cases. We cover actual workplace scenarios like writing emails, summarizing documents, organizing meeting notes, spreadsheet assistance, and presentation creation.",
    },
    {
      q: "Can non-technical employees attend?",
      a: "Absolutely. The curriculum is non-technical and focuses entirely on user-friendly AI tools and natural language prompts. It is ideal for HR, Sales, Operations, Marketing, Support, Management, and L&D teams.",
    },
    {
      q: "Which AI tools will be demonstrated?",
      a: "We demonstrate leading corporate AI platforms including ChatGPT, Gemini, Microsoft Copilot, Claude, NotebookLM, and Perplexity, providing clear guidance on which tool to use for specific workplace tasks.",
    },
    {
      q: "Will there be hands-on activities?",
      a: "Yes. Attendees will participate in live exercises including prompt building, document summarization, email refinement, and spreadsheet analysis with direct trainer guidance.",
    },
    {
      q: "Can I apply these skills immediately?",
      a: "Yes! Every framework, tool recommendation, and prompt pattern taught during the session can be put to work immediately on your very next business task.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 relative">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs font-medium"
        >
          Support
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white"
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto"
        >
          Everything you need to know about the Future Skills corporate workshop by WebScraft.
        </motion.p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-3xl border border-white/10 bg-neutral-900/60 overflow-hidden transition-colors hover:border-white/20"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-white text-base sm:text-lg focus:outline-none"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle size={20} className="text-neutral-400 shrink-0" />
                  <span>{faq.q}</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white">
                  {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="px-6 pb-6 pt-0 text-neutral-300 text-sm leading-relaxed border-t border-white/5"
                  >
                    <div className="pt-3">{faq.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
