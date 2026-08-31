"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FeatureCard, FeatureType } from "@/components/workshop/ui/grid-feature-cards";
import {
  AntigravityLogo,
  OpenCodeLogo,
  NextjsLogo,
  SupabaseLogo,
  ClerkLogo,
  CloudinaryLogo,
  VercelGitHubLogo,
} from "@/components/workshop/ui/tech-logos";

const modernStackTools: FeatureType[] = [
  {
    title: "Antigravity",
    category: "Agentic AI",
    icon: AntigravityLogo,
    description:
      "Agentic AI Workflow Framework for orchestrating autonomous coding and system prototyping.",
    highlight: "Core AI Agent System",
  },
  {
    title: "OpenCode",
    category: "Coding Agent",
    icon: OpenCodeLogo,
    description:
      "Open-Source Agentic Coding Environment designed for rapid terminal & workspace automation.",
    highlight: "Open-Source Tooling",
  },
  {
    title: "Next.js & React",
    category: "Frontend Framework",
    icon: NextjsLogo,
    description:
      "Production Frontend Framework delivering lightning-fast SSR, App Router architecture, and edge speed.",
    highlight: "Modern Web Foundation",
  },
  {
    title: "Supabase",
    category: "Backend & Database",
    icon: SupabaseLogo,
    description:
      "PostgreSQL, Realtime Data & Row Level Security (RLS) for resilient, serverless database workflows.",
    highlight: "Scalable SQL Infrastructure",
  },
  {
    title: "Clerk",
    category: "Authentication",
    icon: ClerkLogo,
    description:
      "User Authentication & Access Control offering turnkey user management and secure session handling.",
    highlight: "Seamless Auth Integration",
  },
  {
    title: "Cloudinary",
    category: "Media Engine",
    icon: CloudinaryLogo,
    description:
      "Media Pipeline & AI Transformations for optimized image/video asset hosting and dynamic manipulation.",
    highlight: "AI-Powered Asset Pipeline",
  },
  {
    title: "Vercel & GitHub",
    category: "DevOps & CI/CD",
    icon: VercelGitHubLogo,
    description:
      "Automated CI/CD Deployment linking repository commits to worldwide edge deployments in seconds.",
    highlight: "Zero-Config Edge Delivery",
  },
];

export default function DemoOne() {
  return (
    <section id="tech-stack" className="py-20 md:py-28 w-full relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent pointer-events-none" />

      <div className="mx-auto w-full max-w-6xl space-y-14 px-4 relative z-10">
        <AnimatedContainer className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-sm font-medium mb-5 backdrop-blur-md">
            <span>Tools Covered</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-balance text-white">
            The Complete{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-500">
              Developer Toolchain
            </span>
          </h2>
          <p className="text-neutral-400 mt-4 text-base md:text-lg tracking-wide text-balance max-w-2xl mx-auto font-normal leading-relaxed">
            Harness the exact modern toolchain top hackers and builders use to turn napkin concepts
            into production-grade deployments in single weekend sprints.
          </p>
        </AnimatedContainer>

        <AnimatedContainer
          delay={0.2}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {modernStackTools.map((feature, i) => (
            <FeatureCard
              key={i}
              feature={feature}
              className={i === 6 ? "sm:col-span-2 lg:col-span-3 xl:col-span-1" : ""}
            />
          ))}
        </AnimatedContainer>
      </div>
    </section>
  );
}

type ViewAnimationProps = {
  delay?: number;
  className?: React.ComponentProps<typeof motion.div>["className"];
  children: React.ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ filter: "blur(10px)", y: 20, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay, duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
