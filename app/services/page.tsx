import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import GenerativeFigure from "@/components/GenerativeFigure";
import TailoredSolutions from "@/components/TailoredSolutions";
import FinalCta from "@/components/FinalCta";
import { services, serviceDetails } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services — Decar Solutions",
  description:
    "Product discovery, design, development and support — the four disciplines Decar Solutions uses to design, build and automate your software.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Four disciplines. One team that ships."
        lede="We take a product from an unproven idea to something running in production — and we stay on after launch. Every engagement draws on the same four disciplines, in whatever mix your project actually needs."
      >
        <a href="/contact" className="btn btn-pill btn-ink btn-lg">
          Start a project →
        </a>
        <a href="/work" className="btn btn-pill btn-outline btn-lg">
          See our work
        </a>
      </PageHero>

      <section className="section section-flush-top">
        <div className="wrap">
          {services.map((service) => {
            const detail = serviceDetails[service.id];
            return (
              <div className="service-detail" key={service.id} id={service.id}>
                <div className="service-detail-grid">
                  <div>
                    <div className="service-detail-head">
                      <GenerativeFigure kind={service.figure} idSuffix={`svc-${service.id}`} />
                      <h3>{service.title}</h3>
                    </div>
                    <p className="lede">{detail?.summary ?? service.body}</p>
                  </div>
                  <div className="service-detail-col">
                    <h4>What you get</h4>
                    <ul>
                      {detail?.deliverables.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="service-detail-col">
                    <h4>Typical stack</h4>
                    <div className="service-detail-tags">
                      {detail?.stack.map((item) => (
                        <span className="tag" key={item}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <TailoredSolutions />
      <FinalCta />
    </>
  );
}
