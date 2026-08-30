import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FinalCta from "@/components/FinalCta";
import { blogPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog — Decar Solutions",
  description:
    "Notes on product strategy, engineering and automation from the Decar Solutions team.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Notes on building software that ships"
        lede="Short, practical writing on product strategy, engineering and automation — the things we wish someone had told us before the last project."
      />

      <section className="section section-flush-top">
        <div className="wrap">
          <span className="work-note">
            Sample posts — replace with real writing before launch
          </span>
          <div className="blog-list">
            {blogPosts.map((post) => (
              <Link href={`/blog/${post.slug}`} className="blog-card" key={post.slug}>
                <div className="blog-card-meta">
                  <span className="tag">{post.tag}</span>
                  <span>{formatDate(post.date)}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
