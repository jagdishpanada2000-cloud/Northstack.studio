"use client";
import React from "react";
import { Rocket, GraduationCap, Presentation, Cpu } from "lucide-react";

export function WhyAttendSection() {
  const reasons = [
    {
      id: 1,
      title: "Build SIH & Hackathon Prototypes Faster",
      description:
        "Learn how to turn your idea into a working prototype quickly using AI agents and modern development tools—giving you more time to test, improve, and present your solution.",
      icon: Rocket,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "Complete College & End-Semester Projects",
      description:
        "Use the same workflow to build your college projects, mini-projects, and end-semester submissions with a proper UI, authentication, database, and deployment.",
      icon: GraduationCap,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      title: "Create a Production-Ready Project",
      description:
        "Go beyond a basic demo. Learn how to build and deploy a functional full-stack application that you can confidently demonstrate during your project viva and final presentation.",
      icon: Presentation,
      color: "from-orange-500 to-amber-500",
    },
    {
      id: 4,
      title: "Learn Industry-Relevant AI Skills",
      description:
        "Get hands-on experience with AI coding agents, GitHub, Vercel, Supabase, Clerk, Cloudinary, and modern AI development workflows—skills that can strengthen your portfolio and prepare you for placements.",
      icon: Cpu,
      color: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <section id="why-attend" className="py-20 md:py-28 w-full relative">
      <div className="mx-auto w-full max-w-6xl px-4 relative z-10 space-y-16">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            Why Should Students <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-500">
              Attend This Workshop?
            </span>
          </h2>
        </div>

        {/* Grid of Reasons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {reasons.map((reason) => {
            const IconComponent = reason.icon;
            return (
              <div
                key={reason.id}
                className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300"
              >
                {/* Subtle background glow effect on hover */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl bg-gradient-to-br ${reason.color} blur-xl`}
                />

                <div className="relative z-10">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 p-3 rounded-2xl bg-white/5 border border-white/10">
                      <IconComponent className="w-6 h-6 text-neutral-300 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
                      <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
