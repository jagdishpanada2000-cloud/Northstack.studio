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
  twinkle: number;
  sparkle: boolean;
}

const MAX_PARTICLES = 600;
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
  const [enabled, setEnabled] = React.useState(false);

  React.useEffect(() => {
    const isAndroid = /Android/i.test(navigator.userAgent || "");
    setEnabled(!isAndroid);
  }, []);

  useEffect(() => {
    if (reduced || !enabled) return;
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

    const isMobile = () => window.innerWidth < 768;
    const speedMult = () => (isMobile() ? 1.6 : 1);

    const pushParticle = (x: number, y: number) => {
      if (particles.length >= MAX_PARTICLES) return;
      const mobile = isMobile();
      const angle = mobile
        ? -Math.PI / 3 + (Math.random() * (2 * Math.PI)) / 3
        : Math.random() * Math.PI * 2;
      const speed = (0.5 + Math.random() * 2) * speedMult();
      const life = 260 + Math.random() * 260;
      particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 0.1,
        size: 0.7 + Math.random() * 1.4,
        life,
        maxLife: life,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        twinkle: Math.random() * Math.PI * 2,
        sparkle: Math.random() < 0.3,
      });
    };

    const emitFromHead = () => {
      const r = head.getBoundingClientRect();
      const cx = r.x + r.width / 2;
      const cy = r.y + r.height / 2;
      if (cy > -80 && cy < window.innerHeight + 80) pushParticle(cx, cy);
    };

    const onScroll = () => emitFromHead();
    window.addEventListener("scroll", onScroll, { passive: true });

    const frame = () => {
      raf = requestAnimationFrame(frame);
      const r = head.getBoundingClientRect();
      const cx = r.x + r.width / 2;
      const cy = r.y + r.height / 2;
      const speed = lastCy < 0 ? 0 : Math.abs(cy - lastCy);
      lastCy = cy;

      const onScreen = cy > -80 && cy < window.innerHeight + 80;
      if (onScreen && speed > 0.3) {
        spawnAccum = Math.min(spawnAccum + Math.min(speed * (isMobile() ? 5 : 3), 16), 24);
      } else {
        spawnAccum = 0;
      }
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
        p.vx *= 0.998;
        p.vy += 0.004;
        p.life -= 1;
        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }
        const t = p.life / p.maxLife;
        const fadeIn = t > 0.8 ? (1 - t) / 0.2 : 1;
        const fadeOut = t < 0.4 ? t / 0.4 : 1;
        const twinkle = 0.65 + 0.35 * Math.sin(p.twinkle + (p.maxLife - p.life) * 0.12);
        const alpha = fadeIn * fadeOut * twinkle * 0.4;
        const [r8, g8, b8] = p.color;
        const spark = p.sparkle ? Math.min(1, fadeIn * fadeOut * 2) * 0.5 : 0;
        if (spark > 0.02) {
          const arm = p.size * 3.2;
          ctx.beginPath();
          ctx.moveTo(p.x - arm, p.y);
          ctx.lineTo(p.x + arm, p.y);
          ctx.moveTo(p.x, p.y - arm);
          ctx.lineTo(p.x, p.y + arm);
          ctx.strokeStyle = `rgba(${r8},${g8},${b8},${alpha * 0.7})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r8},${g8},${b8},${alpha})`;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${Math.min(1, alpha * 1.6)})`;
        ctx.fill();
      }
    };

    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", resize);
    };
  }, [reduced, enabled, headRef]);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10"
    />
  );
}
