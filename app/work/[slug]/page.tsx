import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import FinalCta from "@/components/FinalCta";
import { workItems } from "@/lib/content";

export function generateStaticParams() {
  return workItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = workItems.find((w) => w.slug === slug);
  if (!item) return {};
  return {
    title: `${item.title} — Decar Solutions`,
    description: item.body,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = workItems.find((w) => w.slug === slug);
  if (!item) notFound();

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Link href="/work" className="post-back">
            ← All case studies
          </Link>
          <div className="page-hero-eyebrow">
            {item.tags.join(" · ")}
          </div>
          <h1>{item.title}</h1>
          <p>{item.body}</p>
        </div>
      </section>

      <section className="section section-flush-top">
        <div className="wrap">
          <div className="case-meta">
            <div className="case-meta-item">
              <h4>Client</h4>
              <p>{item.client}</p>
            </div>
            <div className="case-meta-item">
              <h4>Services</h4>
              <p>{item.tags.join(", ")}</p>
            </div>
            <div className="case-meta-item case-meta-item--wide">
              <h4>Stack</h4>
              <div className="case-stack">
                {item.stack.map((tech) => (
                  <span className="tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="case-section">
            <h3>The challenge</h3>
            <p>{item.challenge}</p>
          </div>
          <div className="case-section">
            <h3>What we built</h3>
            <p>{item.approach}</p>
          </div>
          <div className="case-section">
            <h3>The result</h3>
            <p>{item.result}</p>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
