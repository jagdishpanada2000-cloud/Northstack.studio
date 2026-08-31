"use client";

import { SplineScene } from "@/components/workshop/ui/splite";
import { Spotlight } from "@/components/workshop/ui/spotlight";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";

export function SplineSceneBasic() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      id="home"
      className="w-full min-h-[720px] md:min-h-[640px] md:h-[640px] relative overflow-hidden flex flex-col md:flex-row rounded-3xl border border-white/10 bg-neutral-950/60 backdrop-blur-3xl shadow-2xl"
    >
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

      <div className="flex flex-col md:flex-row w-full flex-1 relative z-10">
        {/* Left content */}
        <div className="flex-none md:flex-1 p-6 pt-10 pb-4 sm:p-10 md:p-12 lg:p-16 relative z-10 flex flex-col justify-center items-center text-center md:items-start md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]"
          >
            Build Deploy and <br className="hidden sm:block" />
            <span className="text-white">Scale</span> at speed
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-6 text-neutral-300 max-w-xl text-[15px] sm:text-base md:text-lg leading-relaxed font-normal"
          >
            Master rapid prototyping using AI agents, serverless backends, and full-stack cloud
            tools to build winning competition projects in hours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto"
          >
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScJAKZi6sfxpMx4YIQOzWeXWNnYsMcGvdaL4Po7gAInVn0fAg/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              id="hero-primary-btn"
              className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-black bg-white rounded-full overflow-hidden transition-all hover:scale-105 hover:bg-neutral-100 hover:shadow-[0_0_35px_rgba(255,255,255,0.4)] cursor-pointer active:scale-95"
            >
              <span className="relative z-10">Register Now</span>
              <ArrowRight className="relative z-10 size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <button
              onClick={() => scrollTo("#curriculum")}
              id="hero-secondary-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium text-neutral-300 rounded-full border border-white/15 bg-white/[0.03] hover:bg-white/10 hover:text-white transition-all cursor-pointer"
            >
              <BookOpen className="size-4 text-neutral-400" />
              <span>View Curriculum</span>
            </button>
          </motion.div>
        </div>

        <div className="flex-1 relative min-h-[380px] sm:min-h-[420px] md:min-h-0 overflow-hidden rounded-b-3xl md:rounded-r-3xl md:rounded-bl-none">
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent z-10 pointer-events-none md:hidden" />
          <div className="absolute inset-0 flex items-center justify-center">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full transform scale-[1.2] sm:scale-[1.1] md:scale-100 origin-center md:origin-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
