"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const founders = [
  {
    name: "Sarthak Wagmare",
    role: "Founder",
    bio: "Product engineer with experience building AI-powered platforms and SaaS products from the ground up. Focused on shipping fast, iterating with real feedback, and keeping teams small and direct.",
    linkedin: "https://linkedin.com/in/sarthak-wagmare",
  },
  {
    name: "Jagdish Panada",
    role: "Co-Founder",
    bio: "Full-stack developer specializing in AI integration and automation systems. Passionate about turning complex technical challenges into clean, maintainable products that scale.",
    linkedin: "https://linkedin.com/in/jagdishpanada",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-32 border-t border-border">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-16 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-secondary">About</p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-[-0.03em]">
            Built by builders.
          </h2>
          <p className="mt-4 text-secondary text-base sm:text-lg leading-relaxed max-w-xl">
            No account managers, no layers. Just engineers who design, build, and ship your product
            directly.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {founders.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="card-surface border border-border rounded-2xl p-6 flex flex-col gap-4"
            >
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center text-lg font-semibold text-primary shrink-0">
                {person.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold tracking-tight">{person.name}</span>
                  <span className="text-xs text-secondary bg-secondary/10 px-2 py-0.5 rounded-full">
                    {person.role}
                  </span>
                </div>
                <p className="mt-2 text-sm text-secondary leading-relaxed">{person.bio}</p>
              </div>
              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-secondary hover:text-primary transition-colors mt-auto"
              >
                <Linkedin className="h-3.5 w-3.5" />
                LinkedIn
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
