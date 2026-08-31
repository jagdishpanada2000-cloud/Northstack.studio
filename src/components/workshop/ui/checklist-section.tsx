"use client";
import React, { useState, useEffect } from "react";
import { ExternalLink, Terminal, Github, KeyRound, Bot, Check } from "lucide-react";

interface ChecklistItem {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  verifyTip: string;
  links?: { name: string; url: string }[];
}

const checklistItems: ChecklistItem[] = [
  {
    id: "req-node",
    title: "Node.js installed locally (v18 or v20+)",
    category: "Local Runtime",
    description:
      "Verify your installation by running `node -v` in your terminal. We recommend Node.js LTS (v20.x or v22.x).",
    icon: Terminal,
    verifyTip: "Run `node -v` (should return >= v18.0.0) and `npm -v`.",
    links: [{ name: "Download Node.js", url: "https://youtu.be/BxHl5k_e_iw?si=cDWmzpZYTvzhTC3P" }],
  },
  {
    id: "req-github",
    title: "Active GitHub account",
    category: "Source Control",
    description:
      "Ensure you have an active GitHub account and have git configured on your local machine for pushing repositories.",
    icon: Github,
    verifyTip: "Test with `git --version` and ensure you can push to your repositories.",
    links: [{ name: "GitHub Login", url: "https://github.com" }],
  },
  {
    id: "req-cloud-accounts",
    title: "Accounts created on Vercel, Supabase, Clerk, and Cloudinary",
    category: "Cloud Services",
    description:
      "Set up free tier developer accounts across all cloud services so you have immediate API access on Day 1.",
    icon: KeyRound,
    verifyTip: "Verify all 4 cloud services with your GitHub SSO login for single-click auth.",
    links: [
      { name: "Vercel", url: "https://vercel.com" },
      { name: "Supabase", url: "https://supabase.com" },
      { name: "Clerk", url: "https://clerk.com" },
      { name: "Cloudinary", url: "https://cloudinary.com" },
    ],
  },
  {
    id: "req-agents",
    title: "OpenCode and Antigravity environments configured",
    category: "AI Tooling",
    description:
      "Install and set up the OpenCode CLI & Antigravity agentic workspace according to the onboarding documentation.",
    icon: Bot,
    verifyTip:
      "Ensure your AI studio / coding agent extensions or workspace CLI tools initialize properly.",
    links: [{ name: "Setup Guide", url: "#checklist" }],
  },
];

export function ChecklistSection() {
  const [checkedState, setCheckedState] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem("webscraft_checklist");
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      // ignore localstorage error
    }
    return {
      "req-node": true,
      "req-github": true,
      "req-cloud-accounts": false,
      "req-agents": false,
    };
  });

  useEffect(() => {
    try {
      localStorage.setItem("webscraft_checklist", JSON.stringify(checkedState));
    } catch (e) {
      // ignore
    }
  }, [checkedState]);

  const toggleCheck = (id: string) => {
    setCheckedState((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const completedCount = Object.values(checkedState).filter(Boolean).length;
  const totalCount = checklistItems.length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  return (
    <section id="checklist" className="py-20 md:py-28 w-full relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-[400px] bg-white/[0.02] blur-[140px] pointer-events-none rounded-full" />

      <div className="mx-auto w-full max-w-6xl px-4 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-sm font-medium mb-5 backdrop-blur-md">
            <span>Pre-Workshop Checklist</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            What You Need{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-500">
              Before Day 1
            </span>
          </h2>
          <p className="text-neutral-400 mt-4 text-base md:text-lg tracking-wide max-w-2xl mx-auto font-normal leading-relaxed">
            Complete this pre-flight checklist before our first session so you can spend 100% of
            live time building rather than debugging environment configurations.
          </p>
        </div>

        {/* Progress Banner */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-8 backdrop-blur-xl shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
                <Check className="size-5 text-white" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Pre-Flight Readiness Status</h3>
                <p className="text-xs text-neutral-400">
                  {completedCount} of {totalCount} prerequisites completed ({progressPercent}%)
                </p>
              </div>
            </div>
            {progressPercent === 100 ? (
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-black text-xs font-bold">
                <Check className="size-3.5 text-black" />
                All Set for Day 1!
              </span>
            ) : (
              <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-neutral-300">
                {totalCount - completedCount} items remaining
              </span>
            )}
          </div>

          {/* Progress Bar */}
          <div className="w-full h-2.5 bg-white/5 rounded-full overflow-hidden border border-white/10">
            <div
              className="h-full bg-white transition-all duration-500 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Interactive Checklist Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {checklistItems.map((item) => {
            const isChecked = !!checkedState[item.id];
            const IconComponent = item.icon;

            return (
              <div
                key={item.id}
                onClick={() => toggleCheck(item.id)}
                className={`rounded-3xl border p-6 transition-all duration-300 flex flex-col justify-between cursor-pointer select-none relative group ${
                  isChecked
                    ? "bg-white/[0.06] border-white/40 shadow-[0_8px_25px_rgba(255,255,255,0.05)]"
                    : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
                }`}
              >
                <div>
                  {/* Top metadata */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2.5 rounded-2xl border transition-colors ${
                          isChecked
                            ? "bg-white/15 border-white/30 text-white"
                            : "bg-white/5 border-white/10 text-neutral-400 group-hover:text-white"
                        }`}
                      >
                        <IconComponent className="size-5 text-white" />
                      </div>
                      <div>
                        <span className="text-[11px] font-medium tracking-wide uppercase px-2 py-0.5 rounded bg-white/5 text-neutral-400 border border-white/5">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    {/* Checkbox Icon */}
                    <div
                      className={`flex-shrink-0 size-7 rounded-xl flex items-center justify-center transition-all ${
                        isChecked
                          ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                          : "border border-white/20 text-transparent group-hover:border-white/40"
                      }`}
                    >
                      <Check className="size-4 stroke-[3]" />
                    </div>
                  </div>

                  {/* Main text */}
                  <h4
                    className={`text-base font-bold transition-colors ${
                      isChecked ? "text-white" : "text-neutral-200 group-hover:text-white"
                    }`}
                  >
                    {item.title}
                  </h4>
                  <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Verification Tip & Links */}
                <div className="mt-5 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5">
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                    <Terminal className="size-3.5 text-neutral-400 flex-shrink-0" />
                    <span className="font-mono text-[11px] truncate max-w-[220px] sm:max-w-xs">
                      {item.verifyTip}
                    </span>
                  </div>

                  {item.links && (
                    <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                      {item.links.map((link, lIdx) => (
                        <a
                          key={lIdx}
                          href={link.url}
                          target={link.url.startsWith("http") ? "_blank" : "_self"}
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-white hover:text-neutral-300 font-medium hover:underline text-xs"
                        >
                          <span>{link.name}</span>
                          <ExternalLink className="size-3 text-white" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
