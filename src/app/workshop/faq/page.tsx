import React from "react";
import { PageHeader } from "@/components/workshop/PageHeader";
import { FaqSection } from "@/components/workshop/FaqSection";
import { PageNav } from "@/components/workshop/PageNav";

export const metadata = {
  title: "FAQ",
  description:
    "Everything you need to know about the Future Skills corporate workshop by WebScraft.",
};

export default function FaqPage() {
  return (
    <>
      <PageHeader
        badge="Frequently Asked Questions"
        title="Have Questions? We've Got Answers"
        description="Everything you need to know about the Future Skills corporate workshop by WebScraft."
      />
      <FaqSection />
      <PageNav
        prev={{ title: "AI Tools Covered", href: "/workshop/tools" }}
        next={{ title: "Book Your Seat", href: "/workshop/register" }}
      />
    </>
  );
}
