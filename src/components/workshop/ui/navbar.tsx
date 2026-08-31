"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Tech Stack", href: "#tech-stack" },
    { label: "Curriculum", href: "#curriculum" },
    { label: "Checklist", href: "#checklist" },
  ];

  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    href: string,
  ) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-500 ${scrolled ? "top-2 md:top-4" : ""}`}
    >
      <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-3.5 rounded-full bg-black/80 border border-white/20 backdrop-blur-xl shadow-2xl shadow-black/90">
        {/* Left: Logo - Strictly White */}
        <a
          href="#home"
          onClick={(e) => handleScrollTo(e, "#home")}
          className="flex items-center gap-2.5 pl-1 md:pl-0 group"
          id="navbar-brand-logo"
        >
          <div className="w-8 h-8 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:scale-105 group-hover:bg-white/20 transition-all duration-300">
            <div className="w-3.5 h-3.5 rounded-full bg-white flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-black" />
            </div>
          </div>
          <span className="text-white font-bold tracking-tight text-lg group-hover:text-white transition-colors">
            WebsCraft
          </span>
        </a>

        {/* Right: Links + CTA */}
        <div className="flex items-center gap-2 md:gap-8">
          <div className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-400">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className="relative hover:text-white transition-colors duration-200 group py-1"
                id={`nav-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {item.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            ))}
          </div>

          <button
            onClick={(e) => handleScrollTo(e, "#register")}
            id="navbar-cta-register"
            className="hidden md:inline-flex items-center justify-center gap-1.5 px-6 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:scale-105 hover:bg-neutral-100 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] cursor-pointer active:scale-95"
          >
            <span>Register Now</span>
            <ArrowRight className="size-4 text-black" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle"
            aria-label="Toggle navigation menu"
            className="md:hidden text-neutral-300 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X size={20} className="text-white" />
            ) : (
              <Menu size={20} className="text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 w-full mt-2 p-4 rounded-3xl bg-black/95 border border-white/20 backdrop-blur-2xl flex flex-col gap-2 shadow-2xl shadow-black overflow-hidden"
          >
            {navLinks.map((item, i) => (
              <motion.a
                key={item.label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className="text-neutral-300 hover:text-white text-base font-medium transition-colors px-5 py-3.5 rounded-xl hover:bg-white/10 flex items-center justify-between"
              >
                <span>{item.label}</span>
                <ArrowRight className="size-4 text-white" />
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              onClick={(e) => handleScrollTo(e, "#register")}
              className="mt-2 mx-1 px-6 py-3.5 rounded-xl bg-white text-black text-base font-semibold hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Register Now</span>
              <ArrowRight className="size-4 text-black" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
