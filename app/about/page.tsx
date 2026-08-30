import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Team from "@/components/Team";
import FinalCta from "@/components/FinalCta";
import { aboutStats, aboutValues, careers, companyDetails } from "@/lib/content";

export const metadata: Metadata = {
  title: "About us — Decar Solutions",
  description:
    "Decar Solutions is a software house of strategists, designers and engineers who build custom web, mobile, AI and automation products.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A software house built around the outcome, not the ticket"
        lede="We started Decar because too much custom software gets delivered on spec and still misses the point. Our team stays close to the business problem from discovery through to the support window after launch, so what ships is the thing that actually solves it."
      >
        <a href="/work" className="btn btn-pill btn-ink btn-lg">
          See our work →
        </a>
        <a href="/contact" className="btn btn-pill btn-outline btn-lg">
          Get in touch
        </a>
      </PageHero>

      <section className="section section-flush-top">
        <div className="wrap">
          <span className="work-note">
            Illustrative figures — replace with real numbers as they land
          </span>
          <div className="stat-row">
            {aboutStats.map((stat) => (
              <div className="stat-item" key={stat.label}>
                <span className="num">{stat.num}</span>
                <span className="label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-flush-top">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">How we work</div>
            <h2>What doesn&rsquo;t change from project to project</h2>
          </div>
          <div className="about-values">
            {aboutValues.map((value) => (
              <div className="about-value" key={value.title}>
                <h3>{value.title}</h3>
                <p>{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Team />

      <section className="section" id="careers">
        <div className="wrap">
          <div className="careers-card">
            <h3>{careers.heading}</h3>
            <p>{careers.body}</p>
            <a
              href={`mailto:${companyDetails.email}?subject=Introduction`}
              className="btn btn-primary"
            >
              {careers.ctaLabel} →
            </a>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
