import type { Metadata } from "next";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — WebsCraft",
};

export default function TermsPage() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <div className="mx-auto max-w-3xl px-6 pt-32 pb-24">
        <h1 className="text-4xl font-semibold tracking-[-0.03em]">Terms of Service</h1>
        <p className="mt-2 text-sm text-secondary">Last updated: June 2026</p>

        <div className="mt-10 space-y-6 text-sm text-secondary leading-relaxed">
          <p>By using the WebsCraft website and services, you agree to these terms.</p>

          <h2 className="text-lg font-semibold text-foreground">Services</h2>
          <p>
            WebsCraft provides AI development, SaaS development, automation, and web development
            services. Each engagement is governed by a separate agreement outlining scope, timeline,
            and pricing.
          </p>

          <h2 className="text-lg font-semibold text-foreground">Intellectual Property</h2>
          <p>
            Upon full payment, you retain full ownership of all custom code, designs, and
            deliverables created specifically for your project. WebsCraft retains the right to
            display work in its portfolio unless otherwise agreed.
          </p>

          <h2 className="text-lg font-semibold text-foreground">Limitation of Liability</h2>
          <p>
            WebsCraft is not liable for indirect or consequential damages arising from the use of
            our services. Our total liability is limited to the amount paid for the specific service
            giving rise to the claim.
          </p>

          <h2 className="text-lg font-semibold text-foreground">Contact</h2>
          <p>
            For questions about these terms, reach us at{" "}
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
