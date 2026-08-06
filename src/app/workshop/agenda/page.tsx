import React from "react";
import { PageHeader } from "@/components/workshop/PageHeader";
import { SyllabusSection } from "@/components/workshop/SyllabusSection";
import { WhatYouWillLearnSection } from "@/components/workshop/WhatYouWillLearnSection";
import { HandsOnActivitiesSection } from "@/components/workshop/HandsOnActivitiesSection";
import { WorkshopDetailsSection } from "@/components/workshop/WorkshopDetailsSection";
import { PageNav } from "@/components/workshop/PageNav";

export const metadata = {
  title: "Workshop Agenda",
  description:
    "An 8-module curriculum covering AI fundamentals, prompt engineering, productivity tools, and hands-on exercises.",
};

export default function AgendaPage() {
  return (
    <>
      <PageHeader
        badge="Workshop Agenda"
        title="What We Cover in 2 Hours"
        description="A comprehensive 8-module curriculum designed for practical enterprise adoption."
      />
      <SyllabusSection />
      <WhatYouWillLearnSection />
      <HandsOnActivitiesSection />
      <WorkshopDetailsSection />
      <PageNav
        prev={{ title: "Workshop Roadmap", href: "/workshop/roadmap" }}
        next={{ title: "AI Tools Covered", href: "/workshop/tools" }}
      />
    </>
  );
}
