"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/projects.data";

function ScreenshotPlaceholder() {
  return (
    <div className="relative aspect-[4/3] w-full rounded-2xl border border-border bg-[var(--surface)] overflow-hidden glow-soft">
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border">
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
      </div>
      <div className="p-5 grid grid-cols-4 gap-3 h-full">
        <div className="space-y-2">
          <div className="h-6 rounded bg-white/[0.06]" />
          <div className="h-16 rounded bg-white/[0.04]" />
          <div className="h-10 rounded bg-white/[0.04]" />
          <div className="h-10 rounded bg-white/[0.04]" />
        </div>
        <div className="col-span-3 space-y-3">
          <div className="grid grid-cols-3 gap-3">
            <div className="h-14 rounded bg-white/[0.06]" />
            <div className="h-14 rounded bg-white/[0.04]" />
            <div className="h-14 rounded bg-white/[0.04]" />
          </div>
          <div className="h-32 rounded bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-border" />
          <div className="h-8 rounded bg-white/[0.04]" />
        </div>
      </div>
    </div>
  );
}

export function FeaturedWork() {
  return (
    <section id="work" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-secondary">Featured Work</p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-[-0.03em]">
            Real products, in production.
          </h2>
        </div>

        <div className="space-y-32">
          {projects.map((p, i) => {
            const reverse = i % 2 === 1;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`grid lg:grid-cols-5 gap-12 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="lg:col-span-2">
                  <div className="text-xs uppercase tracking-[0.2em] text-secondary">
                    Project {p.index}
                  </div>
                  <h3 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-secondary text-lg leading-relaxed">{p.description}</p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border bg-white/[0.03] px-3 py-1 text-xs text-secondary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {p.results.slice(0, 3).map((r) => (
                      <div
                        key={r}
                        className="rounded-xl border border-border bg-white/[0.02] px-3 py-3 text-xs text-white/90"
                      >
                        {r}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <Button
                      asChild
                      variant="default"
                      className="rounded-full px-8 py-6 text-base shadow-[0_0_24px_rgba(255,255,255,0.25)] hover:shadow-[0_0_32px_rgba(255,255,255,0.4)] transition-shadow"
                    >
                      <Link href={`/work/${p.slug}`}>Explore Project</Link>
                    </Button>
                  </div>
                </div>

                {p.index === "01" ? (
                  <div className="lg:col-span-3">
                    <div className="relative aspect-video w-full rounded-2xl overflow-hidden glow-soft">
                      <video
                        className="h-full w-full object-cover"
                        src="https://res.cloudinary.com/dwta5v9wi/video/upload/v1780764305/0606_qa9zfv.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        title="AI analytics dashboard demo"
                        aria-label="Demo video of an AI-powered analytics dashboard built by WebsCraft"
                      />
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background:
                            "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.6) 100%)",
                        }}
                      />
                    </div>
                  </div>
                ) : p.index === "02" ? (
                  <div className="lg:col-span-3">
                    <div className="relative aspect-video w-full rounded-2xl overflow-hidden glow-soft">
                      <video
                        src="https://res.cloudinary.com/dwta5v9wi/video/upload/v1780936747/ecadd23b-91e9-4a8e-8f26-289c1c96116a_hwuymy.mp4"
                        className="h-full w-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        title="SaaS platform dashboard demo"
                        aria-label="Demo video of a custom SaaS platform built by WebsCraft"
                      />
                    </div>
                  </div>
                ) : p.index === "03" ? (
                  <div className="lg:col-span-3">
                    <div className="relative aspect-video w-full rounded-2xl overflow-hidden glow-soft">
                      <video
                        src="https://res.cloudinary.com/dwta5v9wi/video/upload/v1781180363/0611_gzyc3q.mp4"
                        className="h-full w-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        title="Travel booking webapp demo"
                        aria-label="Demo video of a travel booking web application built by WebsCraft"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="lg:col-span-3">
                    <ScreenshotPlaceholder />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
