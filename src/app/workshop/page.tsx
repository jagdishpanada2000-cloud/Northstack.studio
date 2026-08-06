import React from "react";
import { SplineSceneBasic } from "@/components/workshop/ui/demo";
import { WhyAttendSection } from "@/components/workshop/WhyAttendSection";
import { FinalCtaSection } from "@/components/workshop/FinalCtaSection";
import { PageNav } from "@/components/workshop/PageNav";

export default function Home() {
  return (
    <>
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 md:pt-12 pb-10">
        <SplineSceneBasic />
      </div>

      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <WhyAttendSection />
      </div>

      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <FinalCtaSection />
      </div>

      <PageNav next={{ title: "Workshop Roadmap", href: "/workshop/roadmap" }} />
    </>
  );
}
