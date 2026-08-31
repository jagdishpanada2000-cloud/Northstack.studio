"use client";
import React, { useState } from "react";
import { Clock, Layers, Database, Rocket, ArrowRight, Check } from "lucide-react";

interface CurriculumDay {
  day: number;
  duration: string;
  title: string;
  subtitle: string;
  tag: string;
  icon: React.ComponentType<{ className?: string }>;
  topics: {
    title: string;
    description: string;
    tool: string;
  }[];
  outcome: string;
}

const curriculumData: CurriculumDay[] = [
  {
    day: 1,
    duration: "3 Hours",
    title: "UI Prototyping & Auth Setup",
    subtitle: "Master generative components & ironclad authentication",
    tag: "Foundation & Frontend",
    icon: Layers,
    topics: [
      {
        title: "Rapid UI components with Next.js & Tailwind CSS",
        description:
          "Architect responsive design systems, interactive component trees, and clean modern styling.",
        tool: "Next.js + Tailwind",
      },
      {
        title: "Configure OpenCode and Antigravity agentic workflows",
        description:
          "Set up multi-agent autonomous programming loops, file system permissions, and context prompt engines.",
        tool: "Antigravity + OpenCode",
      },
      {
        title: "Integrate Clerk authentication into Next.js App Router",
        description:
          "Embed secure sign-up/sign-in modals, session middleware, protected routes, and user profile management.",
        tool: "Clerk Auth + Next.js",
      },
    ],
    outcome:
      "A fully styled, multi-route interactive web app with active authentication & agentic setup.",
  },
  {
    day: 2,
    duration: "3 Hours",
    title: "Database, Cloud Storage & Logic",
    subtitle: "Serverless PostgreSQL, media pipelines & agent coding",
    tag: "Data, Media & Agent Automation",
    icon: Database,
    topics: [
      {
        title: "Design Supabase PostgreSQL schemas & Row Level Security",
        description:
          "Architect relational tables, write RLS access policies, and establish real-time subscriptions with typed client SDKs.",
        tool: "Supabase Postgres",
      },
      {
        title: "Build Cloudinary automated media transform pipelines",
        description:
          "Configure direct media uploads, automated AI image optimization, watermarking, and dynamic responsive transformations.",
        tool: "Cloudinary Media API",
      },
      {
        title: "Execute multi-file feature builds using Antigravity agents",
        description:
          "Deploy AI agents to autonomously write backend server handlers, data models, and connected client hooks.",
        tool: "Antigravity Agents",
      },
    ],
    outcome:
      "A connected database schema with live file pipelines and automated multi-file backend logic.",
  },
  {
    day: 3,
    duration: "3 Hours",
    title: "Deployment & Speed-Run",
    subtitle: "Identity sync, automated edge shipping & live challenge",
    tag: "Production & Hackathon Challenge",
    icon: Rocket,
    topics: [
      {
        title: "Connect Clerk user identity with Supabase profiles",
        description:
          "Synchronize Clerk Webhooks with Supabase user records via PostgreSQL triggers for unified user state.",
        tool: "Webhooks & Identity Sync",
      },
      {
        title: "Deploy automated CI/CD pipelines via GitHub to Vercel",
        description:
          "Set up production environment secrets, automated preview PR deployments, and global edge CDN caching.",
        tool: "GitHub + Vercel",
      },
      {
        title: "Execute the 30-Minute Live Prototyping Challenge",
        description:
          "Build and ship an end-to-end full-stack AI application from a surprise prompt live on stream.",
        tool: "Speed-Run Challenge",
      },
    ],
    outcome:
      "A live production URL deployed on edge infrastructure + competitive speed-prototyping mastery.",
  },
];

export function CurriculumSection() {
  const [activeDay, setActiveDay] = useState<number>(1);

  return (
    <section id="curriculum" className="py-20 md:py-28 w-full relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-[400px] bg-white/[0.02] blur-[140px] pointer-events-none rounded-full" />

      <div className="mx-auto w-full max-w-6xl px-4 relative z-10 space-y-14">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-sm font-medium mb-5 backdrop-blur-md">
            <span>Live Schedule</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            9 Hours to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-500">
              Full-Stack AI Mastery
            </span>
          </h2>
          <p className="text-neutral-400 mt-4 text-base md:text-lg tracking-wide max-w-2xl mx-auto font-normal leading-relaxed">
            Three action-packed, 3-hour intensive live sessions designed with zero fluff — straight
            practical coding, real architectural patterns, and production deployments.
          </p>
        </div>

        {/* Day Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {curriculumData.map((item) => (
            <button
              key={item.day}
              onClick={() => setActiveDay(item.day)}
              className={`group px-5 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 flex items-center gap-3 border cursor-pointer ${
                activeDay === item.day
                  ? "bg-white text-black border-white shadow-[0_0_25px_rgba(255,255,255,0.15)]"
                  : "bg-white/[0.03] border-white/10 text-neutral-400 hover:text-white hover:border-white/25"
              }`}
            >
              <span
                className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold ${
                  activeDay === item.day ? "bg-black text-white" : "bg-white/10 text-white"
                }`}
              >
                {item.day}
              </span>
              <span>
                Day {item.day}: {item.title.split("&")[0]}
              </span>
              <span
                className={`text-xs font-normal hidden sm:inline ${activeDay === item.day ? "text-neutral-600" : "text-neutral-500"}`}
              >
                ({item.duration})
              </span>
            </button>
          ))}
        </div>

        {/* Curriculum Day Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {curriculumData.map((dayItem) => {
            const isSelected = activeDay === dayItem.day;
            const IconComponent = dayItem.icon;
            return (
              <div
                key={dayItem.day}
                onClick={() => setActiveDay(dayItem.day)}
                className={`rounded-3xl border transition-all duration-500 p-7 flex flex-col justify-between relative overflow-hidden cursor-pointer ${
                  isSelected
                    ? "bg-white/[0.06] border-white/30 shadow-[0_15px_40px_rgba(0,0,0,0.8)] ring-1 ring-white/20"
                    : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
                }`}
              >
                {/* Top Header */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2.5 rounded-2xl bg-white/10 border border-white/20 text-white shadow-lg">
                        <IconComponent className="size-5 text-white" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                          Day {dayItem.day}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                          <Clock className="size-3 text-neutral-400" />
                          <span>{dayItem.duration}</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full border border-white/15 bg-white/5 text-neutral-300">
                      {dayItem.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight mt-3">
                    {dayItem.title}
                  </h3>
                  <p className="text-neutral-400 text-xs mt-1 font-light">{dayItem.subtitle}</p>

                  {/* 3 Specific Points */}
                  <div className="mt-6 space-y-3.5 pt-4 border-t border-white/10">
                    {dayItem.topics.map((topic, tIdx) => (
                      <div key={tIdx} className="flex items-start gap-3 group/topic">
                        <div className="mt-0.5 w-5 h-5 rounded-full bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 text-white">
                          <Check className="size-3 text-white" />
                        </div>
                        <div className="space-y-0.5">
                          <p className="text-sm font-medium text-neutral-200 leading-snug">
                            {topic.title}
                          </p>
                          <p className="text-xs text-neutral-400 leading-relaxed font-light">
                            {topic.description}
                          </p>
                          <span className="inline-block mt-1 text-[11px] text-neutral-300 font-mono bg-white/5 px-2 py-0.5 rounded border border-white/10">
                            {topic.tool}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Milestone */}
                <div className="mt-8 pt-4 border-t border-white/10 bg-white/[0.02] -mx-7 -mb-7 p-5 rounded-b-3xl">
                  <div className="flex items-center gap-2 text-xs font-semibold text-neutral-300 mb-1">
                    <span className="size-2 rounded-full bg-white" />
                    <span>Day {dayItem.day} Deliverable:</span>
                  </div>
                  <p className="text-xs text-neutral-400 font-light">{dayItem.outcome}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick CTA banner */}
        <div className="rounded-2xl border border-white/15 bg-white/[0.03] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <span className="size-2 rounded-full bg-white" />
              <span>Hands-on Code Alongs & Live Support</span>
            </h4>
            <p className="text-sm text-neutral-400 max-w-xl">
              All code templates, starter boilerplate repositories, and slide decks are distributed
              prior to each session.
            </p>
          </div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScJAKZi6sfxpMx4YIQOzWeXWNnYsMcGvdaL4Po7gAInVn0fAg/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all shadow-lg shadow-white/10 flex-shrink-0 cursor-pointer"
          >
            <span>Claim Workshop Seat</span>
            <ArrowRight className="size-4 text-black" />
          </a>
        </div>
      </div>
    </section>
  );
}
