export type Project = {
  slug: string;
  index: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  stack: string[];
  results: string[];
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "ai-notes",
    index: "01",
    title: "AI Notes Generator",
    description:
      "AI-powered platform that turns PDFs, handwritten notes, and academic content into exam-ready answers in seconds.",
    problem:
      "Students spent hours manually searching through study materials, extracting important questions, and preparing notes. The process was repetitive, time-consuming, and often resulted in incomplete or poorly organized study resources.",
    solution:
      "Built an AI-powered workflow that automatically extracts questions from uploaded documents, generates concise exam-focused answers, creates structured study notes, and exports the final content into professional formats. The platform combines intelligent document processing, large language models, and a streamlined user experience to dramatically reduce study preparation time.",
    stack: ["Next.js", "TypeScript", "Supabase", "Cloudinary", "AI Integrations", "Vercel"],
    results: [
      "Reduced note-making time from hours to seconds",
      "Automated question extraction from academic documents",
      "Generated exam-focused answers and revision notes instantly",
      "Improved study efficiency through AI-assisted content organization",
    ],
    liveUrl: "https://mini-notes-six.vercel.app",
  },
  {
    slug: "campusos",
    index: "02",
    title: "CampusOS",
    description:
      "A comprehensive SaaS platform built for educational institutes to manage the entire student lifecycle, from admissions to attendance, examinations, communication, and administration through a single dashboard.",
    problem:
      "Educational institutes relied on multiple disconnected tools, spreadsheets, and manual processes for admissions, attendance tracking, test management, fee records, and student communication. This resulted in inefficiencies, duplicate work, and limited visibility into institute operations.",
    solution:
      "Built a centralized SaaS platform that streamlines every major institute workflow: student admissions and enrollment management, attendance tracking and reporting, test creation, scheduling, and result management, automated notifications and messaging, centralized student, teacher, and academic records, performance analytics and reporting dashboards, AI-powered assistant for task scheduling and workflow automation, and role-based access control for administrators, teachers, and staff.",
    stack: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Clerk",
      "Cloudinary",
      "AI Integrations",
      "Vercel",
    ],
    results: [
      "Unified all institute operations into a single platform",
      "Reduced manual administrative workload significantly",
      "Improved communication between students, teachers, and management",
      "Enabled faster access to academic and operational data through AI-assisted search and filtering",
    ],
  },
  {
    slug: "way2-journey",
    index: "03",
    title: "Way2Journey",
    description:
      "A modern landing page for a tours and travels agency, showcasing destinations, packages, and travel experiences with a sleek, conversion-focused design.",
    problem:
      "Travel agencies struggle to present their offerings in a compelling, digital-first format that drives bookings and builds trust with potential travelers.",
    solution:
      "Designed and developed a visually rich, responsive landing page with destination showcases, package listings, and seamless booking flow integration, optimized for conversions.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    results: [
      "Modern, mobile-first travel booking experience",
      "Clear presentation of packages and destinations",
      "Optimized for search engines and conversions",
    ],
    liveUrl: "https://way2-journey.vercel.app",
  },
];
