import type { Metadata } from "next";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — WebsCraft",
};

export default function PrivacyPage() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <div className="mx-auto max-w-3xl px-6 pt-32 pb-24">
        <h1 className="text-4xl font-semibold tracking-[-0.03em]">Privacy Policy</h1>
        <p className="mt-2 text-sm text-secondary">Last updated: June 2026</p>

        <div className="mt-10 space-y-6 text-sm text-secondary leading-relaxed">
          <p>
            WebsCraft ("we", "our", "us") respects your privacy. This policy explains how we
            collect, use, and protect your personal information when you use our website.
          </p>

          <h2 className="text-lg font-semibold text-foreground">Information We Collect</h2>
          <p>
            We collect information you voluntarily provide, such as your name, email address, and
            project details when you submit our contact form or communicate with us via email or
            WhatsApp.
          </p>

          <h2 className="text-lg font-semibold text-foreground">How We Use Your Information</h2>
          <p>
            We use your information solely to respond to your inquiries, provide our services, and
            improve our website. We do not sell, rent, or share your personal information with third
            parties except as required by law.
          </p>

          <h2 className="text-lg font-semibold text-foreground">Data Security</h2>
          <p>
            We take reasonable measures to protect your information. However, no method of
            transmission over the internet is 100% secure.
          </p>

          <h2 className="text-lg font-semibold text-foreground">Contact</h2>
          <p>
            For questions about this policy, reach us at{" "}
            <a href="mailto:hello@webscraft.in" className="text-primary underline">
              hello@webscraft.in
            </a>
            .
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
