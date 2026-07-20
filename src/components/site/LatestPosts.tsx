import Link from "next/link";
import { blogPosts } from "@/lib/blog";

export function LatestPosts() {
  const latest = blogPosts.slice(0, 3);

  return (
    <section className="border-t border-border py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-secondary">Blog</p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-[-0.03em]">
            Latest articles.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-2xl border border-border bg-surface p-6 hover:border-primary/30 transition-colors flex flex-col"
            >
              <div className="flex items-center gap-2 text-xs text-secondary mb-3">
                <span className="rounded-full bg-primary/10 text-primary px-2 py-0.5">
                  {post.category}
                </span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="font-semibold tracking-tight group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-secondary leading-relaxed line-clamp-2">
                {post.description}
              </p>
              <div className="mt-4 pt-4 border-t border-border text-xs text-secondary mt-auto">
                Read article &rarr;
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 rounded-full border border-border text-foreground px-5 py-3 text-sm font-medium transition hover:bg-black/5"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
