import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import "./workshop.css";
import { Navbar } from "@/components/workshop/ui/navbar";
import { Footer } from "@/components/workshop/ui/footer-section";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://webscraft.in/workshop"),
  title: {
    default: "Future Skills - WebScraft Corporate AI Workshop",
    template: "%s | Future Skills - WebScraft",
  },
  description:
    "Learn how to use Artificial Intelligence safely and effectively to improve productivity, automate repetitive tasks, and work smarter.",
  keywords: [
    "AI workshop",
    "corporate AI training",
    "WebScraft",
    "prompt engineering",
    "responsible AI",
    "ChatGPT training",
  ],
  openGraph: {
    title: "Future Skills - WebScraft Corporate AI Workshop",
    description:
      "A 2-hour online interactive workshop for corporate teams. Learn practical AI skills, responsible usage, and productivity workflows.",
    type: "website",
    siteName: "WebScraft AI Workshop",
    url: "https://webscraft.in/workshop",
    images: [{ url: "/og-banner.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Future Skills - WebScraft Corporate AI Workshop",
    description:
      "A 2-hour online interactive workshop for corporate teams. Learn practical AI skills, responsible usage, and productivity workflows.",
    images: ["/og-banner.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function WorkshopLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${spaceGrotesk.variable} workshop-root min-h-screen bg-black text-white selection:bg-white/20 selection:text-white flex flex-col items-center relative overflow-x-hidden isolate font-sans`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-full focus:bg-pink-500 focus:text-white focus:text-sm focus:font-semibold"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" className="w-full flex flex-col items-center">
        {children}
      </main>
      <Footer />
    </div>
  );
}
