"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const WORKSHOP_URL = "/workshop";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/#services", label: "Services" },
    { href: "/#work", label: "Work" },
    { href: "/blog", label: "Blog" },
    { href: "/#faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-background/60 border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="WebsCraft" className="h-7 w-auto" />
          <span className="font-semibold tracking-tight">WebsCraft</span>
        </Link>
        <nav
          className="hidden md:flex items-center gap-8 text-sm text-secondary"
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-primary transition-colors">
              {link.label}
            </Link>
          ))}
          <Link
            href={WORKSHOP_URL}
            className="inline-flex items-center gap-1.5 rounded-full border border-pink-500/50 bg-pink-500/10 px-4 py-1.5 text-sm font-semibold text-pink-500 shadow-[0_0_20px_rgba(236,72,153,0.45),inset_0_0_12px_rgba(236,72,153,0.15)] transition-all hover:bg-pink-500/20 hover:text-pink-400 hover:shadow-[0_0_28px_rgba(236,72,153,0.65),inset_0_0_16px_rgba(236,72,153,0.2)]"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-pink-500" />
            </span>
            AI Workshop
          </Link>
          <a
            href="https://wa.me/919326345546"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-primary text-primary-foreground px-4 py-1.5 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Get a Quote
          </a>
        </nav>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-t border-[#FFFFFF1A]">
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#A3A3A3] hover:text-white transition-colors py-1"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={WORKSHOP_URL}
              className="rounded-full border border-pink-500/50 bg-pink-500/10 px-4 py-2 text-sm font-semibold text-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.45)] transition-colors py-1"
              onClick={() => setMobileOpen(false)}
            >
              AI Workshop
            </Link>
            <a
              href="https://wa.me/919326345546"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity mt-2"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
