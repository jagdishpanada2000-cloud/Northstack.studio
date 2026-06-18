"use client";

import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-background/60 border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img src="/logo.png" alt="WebsCraft" className="h-7 w-auto" />
          <span className="font-semibold tracking-tight">WebsCraft</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-secondary">
          <a href="#work" className="hover:text-primary transition">
            Work
          </a>
          <a href="#services" className="hover:text-primary transition">
            Services
          </a>
          <a href="#process" className="hover:text-primary transition">
            Process
          </a>
          <a href="#contact" className="hover:text-primary transition">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
