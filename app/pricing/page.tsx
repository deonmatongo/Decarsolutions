import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import { pricingPlans, pricingFaqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Pricing — Decar Solutions",
  description:
    "Four ways to work with Decar Solutions: a discovery sprint, a managed build, staff augmentation, or an ongoing support retainer.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Four ways to work with us"
        lede="Pricing here is indicative — every engagement gets a firm quote once we know the real scope. Use this to see which model fits before we talk numbers."
      >
        <a href="/contact" className="btn btn-pill btn-ink btn-lg">
          Get a quote →
        </a>
      </PageHero>

      <section className="section section-flush-top">
        <div className="wrap">
          <div className="pricing-grid">
            {pricingPlans.map((plan) => (
              <div
                className={`pricing-card${plan.featured ? " pricing-card--featured" : ""}`}
                key={plan.id}
              >
                {plan.featured && <span className="pricing-badge">Most popular</span>}
                <h3 className="pricing-name">{plan.name}</h3>
                <p className="pricing-tagline">{plan.tagline}</p>
                <div className="pricing-price">{plan.price}</div>
                <div className="pricing-cadence">{plan.cadence}</div>
                <p className="pricing-best">Best for: {plan.bestFor}</p>
                <ul className="pricing-bullets">
                  {plan.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <a href="/contact" className="btn btn-ghost">
                  Talk to us →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Faq items={pricingFaqs} heading="Pricing questions" id="pricing-faq" />
      <FinalCta />
    </>
  );
}
