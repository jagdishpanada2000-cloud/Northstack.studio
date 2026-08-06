"use client";
import React from "react";
import type { ComponentProps, ReactNode } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Building2, ShieldCheck } from "lucide-react";
import { Logo } from "@/components/workshop/ui/logo";

interface FooterLink {
  title: string;
  href: string;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    label: "Workshop",
    links: [
      { title: "Home", href: "/workshop" },
      { title: "Workshop Roadmap", href: "/workshop/roadmap" },
      { title: "Workshop Agenda", href: "/workshop/agenda" },
    ],
  },
  {
    label: "Learn More",
    links: [
      { title: "AI Tools Covered", href: "/workshop/tools" },
      { title: "Frequently Asked Questions", href: "/workshop/faq" },
      { title: "Book Your Seat", href: "/workshop/register" },
    ],
  },
  {
    label: "Conducting Body",
    links: [
      { title: "WebScraft Enterprise AI", href: "/" },
      { title: "Responsible AI Framework", href: "/" },
      { title: "Corporate Training Programs", href: "/" },
      { title: "Contact WebScraft", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative w-full mt-20 overflow-hidden border-t border-white/10 bg-neutral-950">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/[0.02] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          <AnimatedContainer className="lg:col-span-2 space-y-6">
            <Logo variant="footer" />
            <p className="text-neutral-400 text-sm max-w-sm leading-relaxed">
              Workshop conducted by <strong className="text-white font-semibold">WebScraft</strong>.
              Empowering corporate teams with safe, practical, and effective Artificial Intelligence
              skills.
            </p>
            <div className="pt-2 text-xs text-neutral-400 space-y-2">
              <div className="flex items-center gap-2">
                <Building2 size={14} className="text-white" />
                <span>Corporate Headquarters: WebScraft AI Learning Hub</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-emerald-400" />
                <span>Enterprise Data Protection & Responsible AI Standard</span>
              </div>
            </div>
          </AnimatedContainer>

          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {footerLinks.map((section, index) => (
              <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
                <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                  {section.label}
                </h3>
                <ul className="mt-5 space-y-3">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <Link
                        href={link.href}
                        className="group inline-flex items-center text-neutral-400 hover:text-white transition-colors duration-300 text-xs font-medium"
                      >
                        {link.title}
                        <ArrowUpRight className="size-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </AnimatedContainer>
            ))}
          </div>
        </div>

        <AnimatedContainer
          delay={0.4}
          className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-neutral-400 text-xs font-normal">
            Ac {new Date().getFullYear()} WebScraft. Workshop conducted by WebScraft. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-neutral-400">
            <span className="text-neutral-400">Online Corporate Workshop</span>
            <span className="text-neutral-600">|</span>
            <span className="text-neutral-400">Beginner Friendly</span>
            <span className="text-neutral-600">|</span>
            <span className="text-white font-medium">WebScraft</span>
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
  key?: string | number;
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
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
