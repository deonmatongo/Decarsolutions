import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FinalCta from "@/components/FinalCta";
import { workItems } from "@/lib/content";

export const metadata: Metadata = {
  title: "Case Studies — Decar Solutions",
  description:
    "How Decar Solutions has taken web, mobile, AI and automation projects from a real business problem to a shipped result.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="The problem, the build, and what changed"
        lede="Every project here follows the same shape: the constraint the client actually had, what we built to remove it, and the result once it shipped."
      >
        <a href="/contact" className="btn btn-pill btn-ink btn-lg">
          Start a project like this →
        </a>
      </PageHero>

      <section className="section section-flush-top">
        <div className="wrap">
          <span className="work-note">
            Placeholder projects — replace with real client work
          </span>
          <div className="work-grid">
            {workItems.map((item) => (
              <Link
                href={`/work/${item.slug}`}
                className="work-card"
                key={item.slug}
              >
                <div className="work-thumb">Project thumbnail</div>
                <div className="work-body">
                  <div className="work-tags">
                    {item.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
