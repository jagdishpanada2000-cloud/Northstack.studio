"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  maxLife: number;
  color: [number, number, number];
}

const MAX_PARTICLES = 110;
const COLORS: [number, number, number][] = [
  [236, 72, 153],
  [217, 70, 239],
  [249, 168, 212],
  [232, 121, 249],
  [255, 255, 255],
];

/** Full-viewport canvas that emits glowing particles from the timeline line head. */
export function ParticleEmitter({
  headRef,
  reduced,
}: {
  headRef: React.RefObject<HTMLDivElement | null>;
  reduced: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (reduced) return;
    const canvas = canvasRef.current;
    const head = headRef.current;
    if (!canvas || !head) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particles: Particle[] = [];
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let raf = 0;
    let spawnAccum = 0;
    let lastCy = -1;

    const resize = () => {
      canvas.width = Math.round(window.innerWidth * dpr);
      canvas.height = Math.round(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const pushParticle = (x: number, y: number) => {
      if (particles.length >= MAX_PARTICLES) return;
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.35 + Math.random() * 2.1;
      const life = 55 + Math.random() * 85;
      particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 0.12,
        size: 1 + Math.random() * 2.4,
        life,
        maxLife: life,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      });
    };

    const frame = () => {
      raf = requestAnimationFrame(frame);
      const r = head.getBoundingClientRect();
      const cx = r.x + r.width / 2;
      const cy = r.y + r.height / 2;
      const speed = lastCy < 0 ? 0 : Math.abs(cy - lastCy);
      lastCy = cy;

      const onScreen = cy > -80 && cy < window.innerHeight + 80;
      spawnAccum = onScreen ? spawnAccum + (speed > 0.5 ? Math.min(speed, 6) : 0.12) : 0;
      while (spawnAccum >= 1) {
        spawnAccum -= 1;
        pushParticle(cx, cy);
      }

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.globalCompositeOperation = "lighter";

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.015;
        p.vx *= 0.995;
        p.life -= 1;
        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }
        const t = p.life / p.maxLife;
        const alpha = (t < 0.5 ? t * 2 : 1) * 0.7;
        const [r8, g8, b8] = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r8},${g8},${b8},${alpha * 0.25})`;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r8},${g8},${b8},${alpha})`;
        ctx.fill();
      }
    };

    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [reduced, headRef]);

  return (
    <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed inset-0 z-30" />
  );
}
