import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import FinalCta from "@/components/FinalCta";
import { blogPosts } from "@/lib/content";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — Decar Solutions`,
    description: post.excerpt,
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Link href="/blog" className="post-back">
            ← All posts
          </Link>
          <div className="post-meta">
            <span className="tag">{post.tag}</span>
            <span>{formatDate(post.date)}</span>
            <span>{post.readTime}</span>
          </div>
          <h1>{post.title}</h1>
        </div>
      </section>

      <section className="section section-flush-top">
        <div className="wrap">
          <div className="post-body">
            {post.body.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
