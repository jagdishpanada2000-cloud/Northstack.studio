import Link from "next/link";
import { services } from "@/lib/services.data";

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-[#F5F5F5] border-t border-[#FFFFFF1A]">
      <div className="mx-auto max-w-7xl px-8 pb-8 pt-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="h-6 w-6 rounded-md bg-white" />
              <span className="font-semibold tracking-tight text-white">WebsCraft</span>
            </Link>
            <p className="text-xs text-[#A3A3A3] leading-relaxed max-w-xs">
              Custom websites, AI automation, SaaS platforms, dashboards, and business software for
              startups, local businesses, and growing companies in India.
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.15em] text-white font-medium mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${s.slug}`}
                    className="text-xs text-[#A3A3A3] hover:text-white transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.15em] text-white font-medium mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blog"
                  className="text-xs text-[#A3A3A3] hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-xs text-[#A3A3A3] hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-xs text-[#A3A3A3] hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-xs text-[#A3A3A3] hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.15em] text-white font-medium mb-4">
              Contact
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:hello@webscraft.in"
                  className="text-xs text-[#A3A3A3] hover:text-white transition-colors"
                >
                  hello@webscraft.in
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919326345546"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#A3A3A3] hover:text-white transition-colors"
                >
                  WhatsApp: +91 93263 45546
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/webscraft.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#A3A3A3] hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#FFFFFF1A] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#666666]">
            &copy; {new Date().getFullYear()} WebsCraft. All rights reserved.
          </p>
          <p className="text-xs text-[#666666]">Built with care in India.</p>
        </div>
      </div>
    </footer>
  );
}
