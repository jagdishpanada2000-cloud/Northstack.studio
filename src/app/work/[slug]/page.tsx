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

const siteUrl = "https://webscraft.in";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  const title = project ? `${project.title} — WebsCraft` : "Project — WebsCraft";
  const description = project?.description ?? "Explore our featured work.";
  return {
    title,
    description,
    alternates: { canonical: `/work/${slug}` },
    openGraph: {
      title,
      description,
      url: `/work/${slug}`,
      siteName: "WebsCraft",
      type: "article",
      images: [{ url: "/og-banner.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-banner.png"],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Work", item: `${siteUrl}/#work` },
      { "@type": "ListItem", position: 3, name: project.title, item: `${siteUrl}/work/${slug}` },
    ],
  };

  return (
    <main className="bg-background text-foreground min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Nav />
      <ProjectDetail project={project} />
      <Footer />
    </main>
  );
}
