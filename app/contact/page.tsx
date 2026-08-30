import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { companyDetails } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact — Decar Solutions",
  description:
    "Tell Decar Solutions what you're trying to build — book a free consultation to find out what it takes.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Got a project? Let's talk."
        lede="Tell us what you're trying to build — we'll tell you honestly whether it needs a website, an app, some AI, some automation, or all four. Book a free consultation and we'll take it from there."
      >
        <a href={`mailto:${companyDetails.email}`} className="btn btn-pill btn-ink btn-lg">
          Book a Free Consultation →
        </a>
      </PageHero>

      <section className="section section-flush-top">
        <div className="wrap">
          <div className="contact-grid">
            <div className="contact-block">
              <h3>How to reach us</h3>
              <div className="contact-methods">
                <div className="contact-method">
                  <h4>Email</h4>
                  <a href={`mailto:${companyDetails.email}`}>{companyDetails.email}</a>
                </div>
                <div className="contact-method">
                  <h4>Office</h4>
                  <p>
                    {companyDetails.name}
                    <br />
                    {companyDetails.addressLines.join(", ")}
                  </p>
                </div>
                <div className="contact-method">
                  <h4>Registration</h4>
                  <p>{companyDetails.registration.join(" · ")}</p>
                </div>
              </div>
            </div>

            <div className="contact-block">
              <h3>What to send us</h3>
              <p>
                A short note on what you&rsquo;re trying to build, roughly where
                you are today (idea, existing product, existing team), and any
                deadline that matters. That&rsquo;s enough for us to come back
                with useful questions rather than a generic reply.
              </p>
              <p>
                We reply within one business day, and a first call is always
                free — there&rsquo;s no obligation to move forward after it.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
