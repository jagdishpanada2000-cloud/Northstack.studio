"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const WORKSHOP_URL = "https://prototype-beige-psi.vercel.app";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [workshopOpen, setWorkshopOpen] = useState(false);
  const workshopRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (workshopRef.current && !workshopRef.current.contains(e.target as Node)) {
        setWorkshopOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const links = [
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
          <div className="relative" ref={workshopRef}>
            <button
              type="button"
              onClick={() => setWorkshopOpen((open) => !open)}
              className="flex items-center gap-1 hover:text-primary transition-colors"
              aria-expanded={workshopOpen}
              aria-haspopup="menu"
            >
              AI Workshop
              <svg
                className={`h-3.5 w-3.5 transition-transform ${workshopOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
            {workshopOpen && (
              <div
                role="menu"
                className="absolute left-0 top-full mt-2 w-64 rounded-xl bg-[#0A0A0A] text-white border border-[#FFFFFF1A] shadow-2xl py-2 z-50"
              >
                <a
                  href={WORKSHOP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setWorkshopOpen(false)}
                  className="flex items-center justify-between px-4 py-2.5 text-sm text-[#A3A3A3] hover:text-white hover:bg-white/5 transition-colors"
                >
                  Enter AI Workshop
                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </a>
              </div>
            )}
          </div>
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
              href={`${WORKSHOP_URL}`}
              className="text-sm text-white font-medium transition-colors py-1 flex items-center justify-between"
              onClick={() => setMobileOpen(false)}
            >
              AI Workshop
              <svg
                className="h-3.5 w-3.5 text-[#A3A3A3]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
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
