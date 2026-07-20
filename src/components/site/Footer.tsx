import Link from "next/link";
import { services } from "@/lib/services.data";

export function Footer() {
  return (
    <footer className="dark-section border-t border-border">
      <div className="mx-auto max-w-7xl px-8 pb-8 pt-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="h-6 w-6 rounded-md bg-white" />
              <span className="font-semibold tracking-tight">WebsCraft</span>
            </Link>
            <p className="text-xs text-[color:var(--muted-foreground)] leading-relaxed max-w-xs">
              Custom websites, AI automation, SaaS platforms, dashboards, and business software for
              startups, local businesses, and growing companies in India.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.15em] text-foreground font-medium mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${s.slug}`}
                    className="text-xs text-[color:var(--muted-foreground)] hover:text-primary transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.15em] text-foreground font-medium mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blog"
                  className="text-xs text-[color:var(--muted-foreground)] hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-xs text-[color:var(--muted-foreground)] hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-xs text-[color:var(--muted-foreground)] hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-xs text-[color:var(--muted-foreground)] hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.15em] text-foreground font-medium mb-4">
              Contact
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:hello@webscraft.in"
                  className="text-xs text-[color:var(--muted-foreground)] hover:text-primary transition-colors"
                >
                  hello@webscraft.in
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919326345546"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[color:var(--muted-foreground)] hover:text-primary transition-colors"
                >
                  WhatsApp: +91 93263 45546
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/webscraft.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[color:var(--muted-foreground)] hover:text-primary transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[color:var(--border)] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[color:var(--muted-foreground)]">
            &copy; {new Date().getFullYear()} WebsCraft. All rights reserved.
          </p>
          <p className="text-xs text-[color:var(--muted-foreground)]">Built with care in India.</p>
        </div>
      </div>
    </footer>
  );
}
