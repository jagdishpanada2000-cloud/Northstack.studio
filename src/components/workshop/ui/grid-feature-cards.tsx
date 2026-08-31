"use client";

import { cn } from "@/lib/utils";
import React from "react";

export type FeatureType = {
  title: string;
  category: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: string;
  highlight?: string;
};

type FeatureCardProps = React.ComponentProps<"div"> & {
  feature: FeatureType;
};

export function FeatureCard({ feature, className, ...props }: FeatureCardProps) {
  const [p, setP] = React.useState<number[][]>([]);

  React.useEffect(() => {
    setP(genRandomPattern());
  }, []);

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-950/40 p-7 transition-all duration-500 hover:bg-neutral-900/60 hover:border-white/25 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between",
        className,
      )}
      {...props}
    >
      {/* Hover Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Grid Pattern */}
      <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)] opacity-40 group-hover:opacity-80 transition-opacity duration-500">
        <div className="from-white/5 to-white/0 absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] opacity-100">
          <GridPattern
            width={20}
            height={20}
            x="-12"
            y="4"
            squares={p}
            className="fill-white/5 stroke-white/10 absolute inset-0 h-full w-full mix-blend-overlay"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20">
        <div className="flex items-center justify-between mb-5">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/10 group-hover:bg-white/15 group-hover:border-white/30 group-hover:scale-105 transition-all duration-300 shadow-inner">
            <feature.icon className="text-white size-6" aria-hidden />
          </div>
          <span className="text-[11px] font-medium tracking-wide uppercase px-2.5 py-1 rounded-full bg-white/5 text-neutral-400 border border-white/10 group-hover:text-white group-hover:border-white/20 transition-colors">
            {feature.category}
          </span>
        </div>

        <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-neutral-100 transition-colors">
          {feature.title}
        </h3>
        <p className="text-neutral-400 mt-2.5 text-sm leading-relaxed font-normal">
          {feature.description}
        </p>
      </div>

      {feature.highlight && (
        <div className="relative z-20 mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-xs text-neutral-400">
          <span className="size-1.5 rounded-full bg-white" />
          <span>{feature.highlight}</span>
        </div>
      )}
    </div>
  );
}

function GridPattern({
  width,
  height,
  x,
  y,
  squares,
  ...props
}: React.ComponentProps<"svg"> & {
  width: number;
  height: number;
  x: string;
  y: string;
  squares?: number[][];
}) {
  const patternId = React.useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y], index) => (
            <rect
              strokeWidth="0"
              key={index}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}

function genRandomPattern(length?: number): number[][] {
  length = length ?? 5;
  return Array.from({ length }, () => [
    Math.floor(Math.random() * 4) + 7,
    Math.floor(Math.random() * 6) + 1,
  ]);
}
