import React from "react";
import { PageHeader } from "@/components/workshop/PageHeader";
import { ToolsSection } from "@/components/workshop/ToolsSection";
import { PageNav } from "@/components/workshop/PageNav";

export const metadata = {
  title: "AI Tools Covered",
  description:
    "ChatGPT, Gemini, Microsoft Copilot, Claude, NotebookLM, and Perplexity — learn where each leading AI platform excels.",
};

export default function ToolsPage() {
  return (
    <>
      <PageHeader
        badge="AI Tools Covered"
        title="The Right Tool for Every Task"
        description="We compare the six leading corporate AI platforms so your team knows exactly when to use each one."
      />
      <ToolsSection />
      <PageNav
        prev={{ title: "Workshop Agenda", href: "/workshop/agenda" }}
        next={{ title: "FAQ", href: "/workshop/faq" }}
      />
    </>
  );
}
