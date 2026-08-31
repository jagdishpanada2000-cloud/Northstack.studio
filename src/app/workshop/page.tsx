import { SplineSceneBasic } from "@/components/workshop/ui/demo";
import DemoOne from "@/components/workshop/ui/feature-demo";
import { CurriculumSection } from "@/components/workshop/ui/curriculum-section";
import { ChecklistSection } from "@/components/workshop/ui/checklist-section";

export default function Home() {
  return (
    <>
      {/* Background Ambience & Lighting Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.08)_0%,transparent_60%)]" />
        <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-cyan-500/[0.02] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
      </div>

      <div className="w-full flex flex-col items-center relative z-10">
        {/* Hero Section */}
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-12 md:pt-36 md:pb-16">
          <SplineSceneBasic />
        </div>

        {/* Section 1: The Modern Stack */}
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <DemoOne />
        </div>

        {/* Section 2: 3-Day Workshop Curriculum */}
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <CurriculumSection />
        </div>

        {/* Section 3: Prerequisites & Pre-Flight Checklist */}
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <ChecklistSection />
        </div>
      </div>
    </>
  );
}
