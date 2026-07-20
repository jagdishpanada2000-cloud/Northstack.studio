import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles about web development, AI automation, SaaS, business software, and digital growth for Indian businesses and startups.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — WebsCraft",
    description:
      "Practical articles about web development, AI automation, business software, and growing your business online.",
    url: "https://webscraft.in/blog",
    siteName: "WebsCraft",
    type: "website",
    images: [{ url: "/og-banner.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — WebsCraft",
    description:
      "Articles about web development, AI automation, and business software for Indian businesses.",
    images: ["/og-banner.png"],
  },
};

const blogBreadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://webscraft.in" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://webscraft.in/blog" },
  ],
};

const blogCollectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "WebsCraft Blog",
  description: "Articles about web development, AI automation, SaaS, and business software.",
  url: "https://webscraft.in/blog",
};

export default function BlogPage() {
  const categories = [...new Set(blogPosts.map((p) => p.category))];

  return (
    <main className="bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogBreadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogCollectionJsonLd) }}
      />
      <Nav />
      <section className="relative pt-36 pb-24">
        <div className="absolute inset-0 bg-grid radial-fade pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6">
          <nav
            className="flex items-center gap-2 text-sm text-secondary mb-8"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-foreground">Blog</span>
          </nav>

          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-[-0.03em]">Blog.</h1>
            <p className="mt-4 text-lg text-secondary max-w-2xl">
              Practical articles about building websites, automating your business, and choosing the
              right software — written for Indian businesses and startups.
            </p>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <span
                key={cat}
                className="rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-medium"
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-2xl border border-border bg-surface p-6 hover:border-primary/30 transition-colors flex flex-col"
              >
                <div className="flex items-center gap-2 text-xs text-secondary mb-3">
                  <span>{post.category}</span>
                  <span>&middot;</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-lg font-semibold tracking-tight group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-secondary leading-relaxed line-clamp-2">
                  {post.description}
                </p>
                <div className="mt-4 pt-4 border-t border-border flex items-center justify-between text-xs text-secondary">
                  <span>{post.date}</span>
                  <span className="group-hover:text-primary transition-colors">
                    Read article &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
