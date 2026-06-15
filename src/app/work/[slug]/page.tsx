import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/lib/projects.data";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ProjectDetail } from "./project-detail";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  const title = project ? `${project.title} — WebsCraft` : "Project — WebsCraft";
  const description = project?.description ?? "Explore our featured work.";
  return {
    title,
    description,
    openGraph: { title, description },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-background text-foreground min-h-screen">
      <Nav />
      <ProjectDetail project={project} />
      <Footer />
    </main>
  );
}
