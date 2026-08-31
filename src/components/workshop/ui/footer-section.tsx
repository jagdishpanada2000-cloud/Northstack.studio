"use client";
import React from "react";
import type { ComponentProps, ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Github, Twitter, Linkedin, ArrowUpRight } from "lucide-react";

interface FooterLink {
  title: string;
  href: string;
  external?: boolean;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const footerColumns: FooterColumn[] = [
  {
    title: "Event & Curriculum",
    links: [
      { title: "Day 1: UI & Auth", href: "#curriculum" },
      { title: "Day 2: DB & Logic", href: "#curriculum" },
      { title: "Day 3: Deploy & Speedrun", href: "#curriculum" },
      { title: "Prerequisites Checklist", href: "#checklist" },
    ],
  },
  {
    title: "Developer Stack",
    links: [
      { title: "Antigravity & OpenCode", href: "#tech-stack" },
      { title: "Next.js & React", href: "#tech-stack" },
      { title: "Supabase PostgreSQL", href: "#tech-stack" },
      { title: "Clerk Authentication", href: "#tech-stack" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "GitHub Workshop Starter", href: "https://github.com", external: true },
      { title: "Discord Community", href: "https://discord.com", external: true },
      { title: "Vercel Deployment Docs", href: "https://vercel.com/docs", external: true },
      { title: "Next.js 14 App Router", href: "https://nextjs.org/docs", external: true },
    ],
  },
];

export function Footer() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <footer className="relative w-full mt-24 overflow-hidden border-t border-white/10 bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/[0.01] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[80px] bg-white/[0.03] blur-[90px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          <AnimatedContainer className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                <div className="w-3.5 h-3.5 rounded-full bg-white flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-black" />
                </div>
              </div>
              <span className="text-white font-bold text-2xl tracking-tight">WebsCraft</span>
            </div>
            <p className="text-neutral-400 text-sm max-w-sm leading-relaxed font-normal">
              A 3-day intensive live workshop equipping developers to architect, code, and deploy
              full-stack AI SaaS applications with speed.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="WebsCraft on GitHub"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 hover:scale-105 transition-all"
              >
                <Github className="size-4 text-white" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="WebsCraft on Twitter"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 hover:scale-105 transition-all"
              >
                <Twitter className="size-4 text-white" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="WebsCraft on LinkedIn"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 hover:scale-105 transition-all"
              >
                <Linkedin className="size-4 text-white" />
              </a>
            </div>
          </AnimatedContainer>

          {/* Navigation Columns */}
          {footerColumns.map((col, idx) => (
            <AnimatedContainer key={col.title} delay={0.1 * (idx + 1)} className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.title}>
                    <a
                      href={link.href}
                      onClick={(e) => handleScrollTo(e, link.href)}
                      target={link.external ? "_blank" : "_self"}
                      rel={link.external ? "noreferrer" : undefined}
                      className="text-neutral-400 hover:text-white text-sm transition-colors duration-200 inline-flex items-center group"
                    >
                      <span>{link.title}</span>
                      {link.external && (
                        <ArrowUpRight className="size-3 ml-1 text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </AnimatedContainer>
          ))}
        </div>

        {/* Bottom Bar */}
        <AnimatedContainer
          delay={0.4}
          className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500"
        >
          <p>© {new Date().getFullYear()} WebsCraft Workshop. Built for modern builders.</p>
          <div className="flex items-center gap-6">
            <a
              href="#home"
              onClick={(e) => handleScrollTo(e, "#home")}
              className="hover:text-neutral-300 transition-colors"
            >
              Home
            </a>
            <a
              href="#tech-stack"
              onClick={(e) => handleScrollTo(e, "#tech-stack")}
              className="hover:text-neutral-300 transition-colors"
            >
              Stack
            </a>
            <a
              href="#curriculum"
              onClick={(e) => handleScrollTo(e, "#curriculum")}
              className="hover:text-neutral-300 transition-colors"
            >
              Curriculum
            </a>
            <a
              href="#register"
              onClick={(e) => handleScrollTo(e, "#register")}
              className="hover:text-neutral-300 text-white font-medium transition-colors"
            >
              Register
            </a>
          </div>
        </AnimatedContainer>
      </div>
    </footer>
  );
}

type ViewAnimationProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>["className"];
  children: ReactNode;
  key?: React.Key;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
