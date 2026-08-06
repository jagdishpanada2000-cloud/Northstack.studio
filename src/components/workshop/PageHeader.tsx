import React from "react";

interface PageHeaderProps {
  badge: string;
  title: string;
  description: string;
}

export function PageHeader({ badge, title, description }: PageHeaderProps) {
  return (
    <header className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 pb-10 md:pb-14">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs font-medium">
          {badge}
        </span>
        <h1 className="text-[clamp(1.75rem,6vw,3.5rem)] font-extrabold tracking-tight text-white">
          {title}
        </h1>
        <p className="text-[clamp(0.9rem,3vw,1.125rem)] text-neutral-400 max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </header>
  );
}
