"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ParticleEmitter } from "@/components/workshop/ParticleEmitter";
import {
  Brain,
  ShieldAlert,
  Sparkles,
  Wrench,
  Briefcase,
  Laptop,
  Users,
  Bot,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

interface Workshop {
  num: string;
  title: string;
  subtitle: string;
  description: string;
  topics: string[];
  label: string;
  duration: string;
  sunday: number;
  icon: React.ElementType;
}

const workshops: Workshop[] = [
  {
    num: "01",
    title: "AI Foundations",
    subtitle: "Understanding Artificial Intelligence",
    description:
      "Build a strong understanding of Artificial Intelligence without technical jargon.",
    topics: [
      "What AI is",
      "Types of AI",
      "Predictive vs Generative AI",
      "Business applications",
      "AI myths vs reality",
    ],
    label: "Key Topics",
    duration: "2 Hours",
    sunday: 1,
    icon: Brain,
  },
  {
    num: "02",
    title: "Responsible AI",
    subtitle: "Security, Privacy & Corporate Policies",
    description: "Learn how to use AI safely and responsibly in a corporate environment.",
    topics: [
      "Enterprise data privacy",
      "Confidential company information",
      "Safe AI usage",
      "AI ethics",
      "Hallucination awareness",
    ],
    label: "Key Topics",
    duration: "2 Hours",
    sunday: 2,
    icon: ShieldAlert,
  },
  {
    num: "03",
    title: "Prompt Engineering",
    subtitle: "Mastering AI Conversations",
    description: "Learn professional prompt engineering techniques for better AI outputs.",
    topics: [
      "Prompt writing",
      "Context & instructions",
      "Prompt frameworks",
      "Iterative refinement",
      "Prompt optimization",
    ],
    label: "Key Topics",
    duration: "2 Hours",
    sunday: 3,
    icon: Sparkles,
  },
  {
    num: "04",
    title: "AI Tools Ecosystem",
    subtitle: "Choosing the Right AI Tool",
    description: "Understand the strengths of today's leading AI platforms.",
    topics: ["ChatGPT", "Gemini", "Claude", "Microsoft Copilot", "NotebookLM", "Perplexity"],
    label: "Key Topics",
    duration: "2 Hours",
    sunday: 4,
    icon: Wrench,
  },
  {
    num: "05",
    title: "AI for Everyday Work",
    subtitle: "Practical Workplace Productivity",
    description: "Use AI to complete common business tasks faster and more effectively.",
    topics: ["Emails", "Reports", "Presentations", "Excel", "Meeting Notes", "Research"],
    label: "Key Topics",
    duration: "2 Hours",
    sunday: 5,
    icon: Briefcase,
  },
  {
    num: "06",
    title: "Hands-on AI Lab",
    subtitle: "Practice with Real Business Scenarios",
    description: "Apply everything learned through guided exercises and instructor feedback.",
    topics: [
      "Email rewriting",
      "Report summarization",
      "Spreadsheet analysis",
      "Presentation generation",
      "Prompt improvement",
    ],
    label: "Activities",
    duration: "2 Hours",
    sunday: 6,
    icon: Laptop,
  },
  {
    num: "07",
    title: "Role-Based AI",
    subtitle: "AI for Every Department",
    description: "Explore practical AI workflows tailored to different business roles.",
    topics: [
      "HR",
      "Sales",
      "Marketing",
      "Customer Support",
      "Operations",
      "Managers",
      "Trainers & Learning Teams",
    ],
    label: "Departments",
    duration: "2 Hours",
    sunday: 7,
    icon: Users,
  },
  {
    num: "08",
    title: "AI Capstone",
    subtitle: "Applying AI in Daily Work",
    description:
      "Bring together everything learned throughout the program by solving complete workplace scenarios.",
    topics: [
      "End-to-end AI workflows",
      "Selecting the right AI tool",
      "Combining prompts effectively",
      "Productivity challenge",
      "Best practices for AI adoption",
      "Open Q&A",
      "Course recap",
      "Certificate Distribution",
    ],
    label: "Key Topics",
    duration: "2 Hours",
    sunday: 8,
    icon: Bot,
  },
];

type NodeStatus = "idle" | "active" | "done";

/** Scroll-driven timeline node. Grows, glows, reveals its icon + checkmark
 *  once its workshop is reached, and stays marked after passing it. */
function TimelineNode({
  status,
  workshop,
  activeIndex,
  nodeRef,
  dataIndex,
}: {
  status: NodeStatus;
  workshop: Workshop;
  activeIndex: number;
  nodeRef?: (el: HTMLDivElement | null) => void;
  dataIndex?: number;
}) {
  const Icon = workshop.icon;
  const isCurrent = Number(workshop.num) - 1 === activeIndex;

  return (
    <motion.div
      ref={nodeRef}
      data-index={dataIndex}
      className="absolute left-[9px] sm:left-[15px] md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center will-change-transform"
      initial={false}
      animate={{ scale: status === "idle" ? 0.5 : 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.div
        className="relative flex items-center justify-center rounded-full border-2 w-9 h-9"
        animate={{
          backgroundColor: status === "idle" ? "rgba(23,23,23,1)" : "rgba(38,38,38,1)",
          borderColor:
            status === "idle"
              ? "rgba(255,255,255,0.2)"
              : status === "active"
                ? "rgba(236,72,153,1)"
                : "rgba(236,72,153,0.6)",
          boxShadow:
            status === "idle"
              ? "0 0 0px rgba(236,72,153,0)"
              : status === "active"
                ? "0 0 16px rgba(236,72,153,0.55)"
                : "0 0 8px rgba(236,72,153,0.25)",
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <motion.span
          className="flex items-center justify-center text-pink-300"
          animate={{ opacity: status === "idle" ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <Icon size={18} strokeWidth={2.5} />
        </motion.span>
      </motion.div>

      <motion.span
        className={`mt-1 text-[9px] font-bold tabular-nums ${
          status === "idle" ? "text-neutral-500" : "text-pink-300"
        }`}
        animate={{ color: status === "idle" ? "rgba(115,115,115,1)" : "rgba(249,168,212,1)" }}
        transition={{ duration: 0.4 }}
      >
        {workshop.num}
      </motion.span>

      {isCurrent && status === "active" && (
        <motion.span
          className="hidden md:block absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-semibold uppercase tracking-widest text-pink-300 whitespace-nowrap"
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Now
        </motion.span>
      )}
    </motion.div>
  );
}

/** Individual workshop card with its own parallax + entrance animation. */
function WorkshopCard({
  workshop,
  index,
  isActive,
  reduced,
}: {
  workshop: Workshop;
  index: number;
  isActive: boolean;
  reduced: boolean;
}) {
  const Icon = workshop.icon;
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [8, -8]);

  return (
    <div ref={cardRef} className="will-change-transform">
      <motion.div
        initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.12 }}
        className="will-change-[transform,opacity]"
      >
        <motion.div style={{ y: reduced ? 0 : parallaxY }} className="will-change-transform">
          <motion.div
            animate={{ scale: isActive ? 1.02 : 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="will-change-transform"
          >
            <div
              className={`group relative p-6 md:p-8 rounded-3xl border transition-colors duration-300 flex flex-col h-full backdrop-blur-2xl ${
                isActive
                  ? "bg-white/[0.08] border-pink-400/50 shadow-[0_10px_50px_rgba(236,72,153,0.25),inset_0_1px_0_rgba(255,255,255,0.15)]"
                  : "bg-white/[0.04] border-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] hover:border-white/30 hover:bg-white/[0.07]"
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? "bg-pink-500/20 border-pink-400/40 text-pink-300"
                        : "bg-white/10 border-white/15 text-white group-hover:bg-white group-hover:text-black"
                    }`}
                  >
                    <Icon size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block mb-1">
                      Workshop {workshop.num}
                    </span>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs font-semibold ${isActive ? "text-pink-300" : "text-emerald-400"}`}
                      >
                        Sunday {workshop.sunday}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-white/20" />
                      <span className="text-xs font-semibold text-pink-400">
                        {workshop.duration}
                      </span>
                    </div>
                  </div>
                </div>

                <ChevronRight
                  size={18}
                  className="text-neutral-500 group-hover:text-white transition-transform group-hover:translate-x-1 shrink-0"
                />
              </div>

              <h3 className="text-xl font-bold text-white mb-1 tracking-tight">{workshop.title}</h3>
              <p
                className={`text-sm font-medium mb-3 ${isActive ? "text-pink-300" : "text-pink-300/90"}`}
              >
                {workshop.subtitle}
              </p>
              <p className="text-neutral-400 text-xs leading-relaxed mb-5">
                {workshop.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-2.5 pt-3 border-t border-white/10 mt-auto">
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block mb-2 md:col-span-2 xl:col-span-3">
                  {workshop.label}
                </span>
                {workshop.topics.map((topic, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                    <CheckCircle2 size={14} className="text-pink-400 shrink-0 mt-0.5" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export function RoadmapSection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const nodeEls = useRef<(HTMLDivElement | null)[]>([]);
  const reduced = useReducedMotion();

  // Continuous scroll progression: the accent line fills smoothly from top to
  // bottom exactly as the user scrolls (no animation lag or snapping).
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  const [activeIndex, setActiveIndex] = React.useState(-1);

  // Activate a node the moment its circle crosses the vertical centre of
  // the viewport (zero-height band at 50% viewport height).
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-index"));
            if (!Number.isNaN(idx)) setActiveIndex(idx);
          }
        }
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
    );
    nodeEls.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const statusFor = (i: number): NodeStatus =>
    i < activeIndex ? "done" : i === activeIndex ? "active" : "idle";

  return (
    <section id="roadmap" className="py-20 md:py-28 relative">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs font-medium"
        >
          The Journey
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white"
        >
          8-Week AI Learning Journey
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto"
        >
          Eight 2-hour Sunday workshops taking you from AI foundations to real workplace mastery.
        </motion.p>
      </div>

      <div ref={timelineRef} className="max-w-4xl md:max-w-7xl mx-auto relative">
        {/* Layer 1 — static gray line */}
        <div className="absolute left-[8px] sm:left-[14px] md:left-1/2 top-0 bottom-0 w-[2px] md:-translate-x-1/2 bg-white/10" />

        {/* Layer 2 — accent line driven by scroll progress (continuous) */}
        <motion.div
          className="absolute left-[8px] sm:left-[14px] md:left-1/2 top-0 bottom-0 w-[2px] md:-translate-x-1/2 origin-top bg-gradient-to-b from-pink-400 via-pink-500 to-fuchsia-600 will-change-transform"
          style={{ scaleY: reduced ? 1 : scrollYProgress }}
        />

        {/* Layer 3 — glowing head riding the tip of the accent line */}
        <motion.div
          ref={headRef}
          aria-hidden="true"
          className="absolute left-[8px] sm:left-[14px] md:left-1/2 md:-translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center pointer-events-none"
          style={{ top: useTransform(scrollYProgress, (v) => `${v * 100}%`) }}
        >
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-400 opacity-50" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-pink-400 shadow-[0_0_14px_rgba(236,72,153,0.95)]" />
          </span>
        </motion.div>

        <div className="space-y-10 relative">
          {workshops.map((item, index) => {
            const isEven = index % 2 === 0;
            const status = statusFor(index);
            const isActive = index === activeIndex;

            return (
              <div
                key={item.num}
                className={`relative flex flex-col md:flex-row items-center pl-8 sm:pl-12 md:pl-0 ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                <TimelineNode
                  status={status}
                  workshop={item}
                  activeIndex={activeIndex}
                  nodeRef={(el) => {
                    nodeEls.current[index] = el;
                  }}
                  dataIndex={index}
                />

                <div className="w-full md:ml-0 md:w-[calc(50%-2.5rem)]">
                  <WorkshopCard
                    workshop={item}
                    index={index}
                    isActive={isActive}
                    reduced={reduced === true}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <ParticleEmitter headRef={headRef} reduced={reduced === true} />
    </section>
  );
}
