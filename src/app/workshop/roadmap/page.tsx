import React from "react";
import { PageHeader } from "@/components/workshop/PageHeader";
import { RoadmapSection } from "@/components/workshop/RoadmapSection";
import { SplineBackground } from "@/components/workshop/SplineBackground";
import { WhoShouldAttendSection } from "@/components/workshop/WhoShouldAttendSection";
import { PageNav } from "@/components/workshop/PageNav";

export const metadata = {
  title: "Workshop Roadmap",
  description:
    "A structured 7-step journey from AI fundamentals to hands-on exercises and advanced workplace automation.",
};

export default function RoadmapPage() {
  return (
    <>
      <SplineBackground />
      <div className="relative z-10">
        <PageHeader
          badge="Workshop Roadmap"
          title="Your 7-Step AI Journey"
          description="A structured path from foundational concepts to hands-on exercises and advanced workplace automation."
        />
        <RoadmapSection />
        <WhoShouldAttendSection />
        <PageNav
          prev={{ title: "Home", href: "/workshop" }}
          next={{ title: "Workshop Agenda", href: "/workshop/agenda" }}
        />
      </div>
    </>
  );
}
