import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FinalCta from "@/components/FinalCta";
import { industries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Industries — Decar Solutions",
  description:
    "Decar Solutions builds software for retail, fintech, healthcare, logistics, professional services and manufacturing teams.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Software shaped by the industry it runs in"
        lede="A payments dashboard and a warehouse dashboard solve completely different problems, even when the tech stack looks the same on paper. We build for the constraints your industry actually has — compliance, uptime, integration with what you already run."
      >
        <a href="/contact" className="btn btn-pill btn-ink btn-lg">
          Talk about your industry →
        </a>
      </PageHero>

      <section className="section section-flush-top">
        <div className="wrap">
          <div className="industry-grid">
            {industries.map((industry) => (
              <article className="industry-card" key={industry.slug} id={industry.slug}>
                <h3>{industry.title}</h3>
                <p>{industry.summary}</p>
                <ul>
                  {industry.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
