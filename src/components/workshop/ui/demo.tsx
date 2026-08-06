"use client";

import React from "react";
import { SplineScene } from "@/components/workshop/ui/splite";
import { Spotlight } from "@/components/workshop/ui/spotlight";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Users } from "lucide-react";
import Link from "next/link";

export function SplineSceneBasic() {
  return (
    <div className="w-full relative overflow-hidden flex flex-col md:flex-row rounded-3xl border border-white/10 bg-neutral-950/80 backdrop-blur-3xl shadow-2xl shadow-white/5">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

      <div className="flex flex-col lg:flex-row w-full flex-1 relative z-10">
        <div className="flex-1 p-6 sm:p-8 md:p-12 lg:p-14 relative z-10 flex flex-col justify-center items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 text-neutral-200 text-xs font-medium mb-6 backdrop-blur-md"
          >
            <Sparkles className="size-3.5 text-white animate-pulse" />
            <span className="text-pink-400 font-semibold">WebScraft</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-[clamp(2rem,8vw,4.5rem)] lg:text-[clamp(3rem,5.5vw,4.5rem)] font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-white via-neutral-100 to-neutral-400 tracking-tight leading-[1.08]"
          >
            Future Skills
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="mt-4 text-[clamp(0.95rem,3.5vw,1.25rem)] text-neutral-200 font-medium leading-snug max-w-xl"
          >
            Learn how to use Artificial Intelligence safely and effectively to improve productivity,
            automate repetitive tasks, and work smarter.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="mt-3 text-[clamp(0.8rem,3vw,1rem)] text-neutral-400 max-w-xl leading-relaxed font-normal"
          >
            This hands-on workshop is designed to help employees understand practical AI
            applications they can immediately apply in their daily work. The session focuses on real
            business use cases, responsible AI usage, and productivity enhancement.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto"
          >
            <Link
              href="/workshop/register"
              className="group relative inline-flex items-center justify-center gap-2.5 min-h-[48px] px-7 py-3.5 text-sm font-semibold text-white rounded-full overflow-hidden transition-all hover:scale-[1.03] active:scale-[0.98] bg-gradient-to-b from-pink-500/70 via-pink-500/40 to-fuchsia-600/70 border border-white/25 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.45),inset_0_-8px_16px_rgba(255,255,255,0.15),0_8px_40px_rgba(236,72,153,0.55)] hover:border-white/40 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.55),inset_0_-8px_16px_rgba(255,255,255,0.2),0_8px_55px_rgba(236,72,153,0.75)]"
            >
              <span className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.4),transparent_60%)] pointer-events-none" />
              <span className="absolute top-0 left-[8%] right-[8%] h-[45%] rounded-full bg-white/30 blur-lg pointer-events-none transition-all duration-300 group-hover:bg-white/40" />
              <span className="absolute bottom-0 left-1/4 right-1/4 h-[35%] rounded-full bg-pink-300/30 blur-lg pointer-events-none" />
              <span className="relative z-10">Book Your Seat</span>
              <ArrowRight className="relative z-10 size-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/workshop/roadmap"
              className="inline-flex items-center justify-center gap-2 min-h-[48px] px-7 py-3.5 text-sm font-medium text-neutral-300 rounded-full border border-white/15 hover:bg-white/10 hover:text-white transition-all backdrop-blur-md"
            >
              <span>View Workshop Roadmap</span>
              <ArrowRight className="size-4 text-neutral-400" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-neutral-400"
          >
            <div className="flex items-center gap-2">
              <span>
                Conducted by <strong className="text-white">WebScraft</strong>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="size-4 text-neutral-300" />
              <span>Tailored for Corporate Teams</span>
            </div>
          </motion.div>
        </div>

        <div className="hidden md:flex flex-1 relative min-h-[500px] lg:min-h-[620px] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none lg:hidden" />
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <div className="relative w-full h-full">
              <div className="absolute top-1/2 left-1/2 -translate-x-[calc(50%+40px)] -translate-y-[calc(50%+10px)] w-[125%] h-[125%] sm:top-0 sm:left-0 sm:translate-x-0 sm:translate-y-0 sm:translate-x-[70px] sm:w-full sm:h-full">
                <SplineScene
                  scene="https://prod.spline.design/kEpfqRISwpVkW1n6/scene.splinecode"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 z-20 pointer-events-none">
            <div
              className="absolute rounded-full bg-gradient-to-br from-pink-400 via-pink-500 to-fuchsia-600 shadow-[0_-10px_60px_rgba(236,72,153,0.45),0_0_30px_rgba(236,72,153,0.3)]"
              style={{ width: 320, height: 320, bottom: -213, right: -113 }}
            />
            <div
              className="absolute rounded-full bg-pink-400/25 blur-2xl"
              style={{ width: 420, height: 420, bottom: -280, right: -130 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
