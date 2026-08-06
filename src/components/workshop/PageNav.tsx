import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export interface PageNavItem {
  title: string;
  href: string;
  description?: string;
}

interface PageNavProps {
  prev?: PageNavItem;
  next?: PageNavItem;
}

export function PageNav({ prev, next }: PageNavProps) {
  return (
    <nav
      aria-label="Page navigation"
      className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-16 md:mt-20"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {prev ? (
          <Link
            href={prev.href}
            className="group flex items-center gap-4 p-5 rounded-3xl border border-white/10 bg-neutral-900/50 hover:border-white/25 hover:bg-neutral-800/60 transition-all duration-300"
          >
            <span className="flex items-center justify-center w-11 h-11 shrink-0 rounded-full bg-white/10 border border-white/10 text-white group-hover:bg-white group-hover:text-black transition-colors">
              <ArrowLeft size={18} />
            </span>
            <span className="min-w-0">
              <span className="block text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-1">
                Previous
              </span>
              <span className="block text-sm font-semibold text-white truncate">{prev.title}</span>
            </span>
          </Link>
        ) : (
          <div className="hidden sm:block" />
        )}

        {next ? (
          <Link
            href={next.href}
            className="group flex items-center justify-end gap-4 p-5 rounded-3xl border border-white/10 bg-neutral-900/50 hover:border-white/25 hover:bg-neutral-800/60 transition-all duration-300 sm:justify-start sm:flex-row-reverse text-right sm:text-left"
          >
            <span className="flex items-center justify-center w-11 h-11 shrink-0 rounded-full bg-white/10 border border-white/10 text-white group-hover:bg-white group-hover:text-black transition-colors">
              <ArrowRight size={18} />
            </span>
            <span className="min-w-0">
              <span className="block text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-1">
                Next
              </span>
              <span className="block text-sm font-semibold text-white truncate">{next.title}</span>
            </span>
          </Link>
        ) : (
          <div className="hidden sm:block" />
        )}
      </div>
    </nav>
  );
}
