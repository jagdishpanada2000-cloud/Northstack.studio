"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import type { Project } from "@/lib/projects.data";

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <section className="relative pt-32 pb-20">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm text-secondary hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </Link>

          <div className="mt-8">
            <div className="text-xs uppercase tracking-[0.2em] text-secondary">
              Project {project.index}
            </div>
            <div className="mt-3 flex items-center gap-4 flex-wrap">
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-[-0.03em]">
                {project.title}
              </h1>
            </div>
            <p className="mt-4 text-secondary text-lg leading-relaxed max-w-2xl">
              {project.description}
            </p>
          </div>
        </motion.div>

        {project.slug === "ai-notes" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="mt-12"
          >
            <a
              href="https://mini-notes-six.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="relative rounded-2xl border border-border overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.12)] transition-shadow duration-300 group-hover:shadow-[0_0_60px_rgba(255,255,255,0.25)]">
                <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border bg-white/[0.02]">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
                  <div className="ml-3 flex-1 max-w-[280px] rounded-md bg-white/[0.04] px-3 py-1 text-xs text-secondary truncate">
                    mini-notes-six.vercel.app
                  </div>
                </div>
                <div className="aspect-video w-full bg-[var(--surface)] overflow-hidden">
                  <div className="w-[153.85%] h-[153.85%] origin-top-left scale-[0.65]">
                    <iframe
                      src="https://mini-notes-six.vercel.app"
                      className="h-full w-full"
                      title="Live Webapp Preview"
                      loading="lazy"
                      scrolling="no"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-transparent group-hover:bg-white/[0.03] transition-colors" />
              </div>
              <div className="mt-3 flex items-center gap-2 text-sm">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-secondary group-hover:text-foreground transition-colors">
                  Open live webapp &rarr;
                </span>
              </div>
            </a>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mt-16 space-y-16"
        >
          <div>
            <h2 className="text-xs uppercase tracking-[0.18em] text-secondary mb-4">Problem</h2>
            <p className="text-lg text-white/90 leading-relaxed">{project.problem}</p>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-[0.18em] text-secondary mb-4">Solution</h2>
            <p className="text-lg text-white/90 leading-relaxed">{project.solution}</p>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-[0.18em] text-secondary mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-white/[0.03] px-4 py-1.5 text-sm text-secondary"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-[0.18em] text-secondary mb-4">Results</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.results.map((r) => (
                <div
                  key={r}
                  className="rounded-xl border border-border bg-white/[0.02] px-5 py-4 text-sm text-white/90"
                >
                  {r}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
