"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/workshop/ui/logo";

const navLinks = [
  { name: "Home", href: "/workshop" },
  { name: "Workshop Roadmap", href: "/workshop/roadmap" },
  { name: "Agenda", href: "/workshop/agenda" },
  { name: "AI Tools", href: "/workshop/tools" },
  { name: "FAQ", href: "/workshop/faq" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/workshop" ? pathname === "/workshop" : pathname.startsWith(href);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/[0.06] backdrop-blur-md border-b border-white/10"
          : "bg-white/[0.04] backdrop-blur-sm"
      }`}
      aria-label="Primary navigation"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2">
        <Logo variant="navbar" />

        <div className="hidden lg:flex items-center gap-1 text-xs font-medium text-neutral-300">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`relative px-3.5 py-2 rounded-full transition-colors hover:text-white ${
                isActive(link.href) ? "text-white bg-white/10" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/workshop/register"
            className="relative hidden sm:inline-flex items-center justify-center px-5 py-2 rounded-full text-white text-xs font-semibold overflow-hidden bg-gradient-to-b from-pink-500/55 via-pink-500/30 to-fuchsia-600/55 border border-white/20 backdrop-blur-xl hover:scale-105 active:scale-95 transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.35),inset_0_-8px_16px_rgba(255,255,255,0.1),0_4px_20px_rgba(236,72,153,0.35)] hover:border-white/35"
          >
            <span className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.35),transparent_60%)] pointer-events-none" />
            <span className="absolute top-0 left-[8%] right-[8%] h-[45%] rounded-full bg-white/25 blur-lg pointer-events-none" />
            <span className="absolute bottom-0 left-1/4 right-1/4 h-[35%] rounded-full bg-pink-300/25 blur-lg pointer-events-none" />
            <span className="relative">Register</span>
          </Link>

          <button
            className="lg:hidden text-neutral-300 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors min-h-[44px] min-w-[44px]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden bg-neutral-950/95 backdrop-blur-2xl border-b border-white/10"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={`block px-4 py-3.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive(link.href)
                        ? "text-white bg-white/10"
                        : "text-neutral-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.04 }}
                className="pt-2"
              >
                <Link
                  href="/workshop/register"
                  className="block text-center py-3.5 px-6 rounded-xl text-white text-sm font-semibold bg-gradient-to-b from-pink-500/55 via-pink-500/30 to-fuchsia-600/55 border border-white/20 backdrop-blur-xl"
                >
                  Register for the Workshop
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
