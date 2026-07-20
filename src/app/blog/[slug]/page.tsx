import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { blogPosts } from "@/lib/blog";
import { services } from "@/lib/services.data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: `${post.title} — WebsCraft Blog`,
      description: post.description,
      url: `https://webscraft.in/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: "/og-banner.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} — WebsCraft Blog`,
      description: post.description,
      images: ["/og-banner.png"],
    },
  };
}

const siteUrl = "https://webscraft.in";

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${siteUrl}/blog/${slug}` },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: { "@type": "Person", name: post.author },
    datePublished: post.date,
    dateModified: post.date,
    publisher: { "@type": "Organization", name: "WebsCraft", url: siteUrl },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${siteUrl}/blog/${slug}` },
  };

  const contentSections = post.content.split("\n## ");

  return (
    <main className="bg-background text-foreground min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Nav />
      <article className="relative pt-32 pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <nav
            className="flex items-center gap-2 text-sm text-secondary mb-8"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-primary transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-foreground truncate max-w-[200px]">{post.title}</span>
          </nav>

          <div className="flex items-center gap-3 text-xs text-secondary mb-4">
            <span className="rounded-full bg-primary/10 text-primary px-2.5 py-0.5 font-medium">
              {post.category}
            </span>
            <span>{post.readTime}</span>
            <span>{post.date}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] leading-[1.05]">
            {post.title}
          </h1>

          <p className="mt-4 text-lg text-secondary leading-relaxed">{post.description}</p>

          <div className="mt-3 text-sm text-secondary">
            By <span className="font-medium text-foreground">{post.author}</span>
          </div>

          <div className="mt-10 prose prose-sm max-w-none text-foreground [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:text-secondary [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:text-secondary [&_ul]:space-y-1 [&_ul]:mb-4 [&_ol]:text-secondary [&_ol]:space-y-1 [&_ol]:mb-4 [&_li]:leading-relaxed [&_strong]:text-foreground [&_a]:text-primary [&_a]:underline [&_a:hover]:opacity-80 [&_table]:w-full [&_table]:border-collapse [&_th]:text-left [&_th]:font-medium [&_th]:text-foreground [&_th]:pb-2 [&_th]:text-sm [&_td]:text-secondary [&_td]:text-sm [&_td]:py-1.5 [&_td]:border-t [&_td]:border-border [&_hr]:border-border [&_hr]:my-8">
            <div
              dangerouslySetInnerHTML={{
                __html: post.content
                  .replace(/^## (.+)$/gm, "<h2>$1</h2>")
                  .replace(/^### (.+)$/gm, "<h3>$1</h3>")
                  .replace(/^### (.+)$/gm, "<h3>$1</h3>")
                  .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
                  .replace(/\n\n/g, "</p><p>")
                  .replace(/^(.+)$/gm, (match) => {
                    if (match.startsWith("<")) return match;
                    if (match.startsWith("|")) {
                      const cells = match.split("|").filter(Boolean);
                      if (cells.length > 1) {
                        const isHeader = match.includes("---");
                        if (isHeader) return "</tbody></table>";
                        const isFirst =
                          match === post.content.split("\n").find((l) => l.startsWith("|"));
                        const tag = match.startsWith("|---") ? "" : "tr";
                        if (tag === "tr") {
                          const row = cells.map((c) => `<td>${c.trim()}</td>`).join("");
                          return `<${tag}>${row}</${tag}>`;
                        }
                      }
                      return "";
                    }
                    if (/^\d+\.\s/.test(match)) return `<li>${match.replace(/^\d+\.\s/, "")}</li>`;
                    if (/^- /.test(match)) return `<li>${match.replace(/^- /, "")}</li>`;
                    if (/^\|/.test(match) && match.endsWith("|")) {
                      return `<table><thead><tr>${match
                        .split("|")
                        .filter(Boolean)
                        .map((c) => `<th>${c.trim()}</th>`)
                        .join("")}</tr></thead><tbody>`;
                    }
                    return `<p>${match}</p>`;
                  }),
              }}
            />
          </div>

          {/* Related services */}
          {post.relatedServices.length > 0 && (
            <div className="mt-16 pt-8 border-t border-border">
              <h2 className="text-lg font-semibold tracking-tight mb-4">Related Services</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {post.relatedServices.map((slug) => {
                  const service = services.find((s) => s.slug === slug);
                  if (!service) return null;
                  return (
                    <Link
                      key={slug}
                      href={`/${slug}`}
                      className="block p-4 rounded-xl border border-border bg-surface hover:border-primary/30 transition-colors"
                    >
                      <div className="font-medium text-sm">{service.title}</div>
                      <p className="text-xs text-secondary mt-1 line-clamp-2">{service.tagline}</p>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* Back link */}
          <div className="mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors"
            >
              &larr; Back to Blog
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
