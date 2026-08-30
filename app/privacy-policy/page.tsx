import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { companyDetails } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy — Decar Solutions",
  description: "How Decar Solutions collects, uses and protects your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="section section-flush-top">
        <div className="wrap">
          <span className="work-note">
            Placeholder text — have this reviewed by counsel before launch
          </span>
          <div className="prose">
            <h2>What we collect</h2>
            <p>
              When you contact us or book a consultation, we collect the
              information you provide directly — your name, email address,
              company, and anything you tell us about your project. When you
              browse this site, we may collect standard analytics data such as
              pages viewed and referring source.
            </p>
            <h2>How we use it</h2>
            <p>
              We use the information you give us to respond to your enquiry,
              scope potential work, and — if you agree to be contacted — to
              follow up about our services. We do not sell your data to third
              parties.
            </p>
            <h2>How we store it</h2>
            <p>
              Data is stored in the tools we use to run the business (email,
              CRM, project management) and is retained only as long as
              necessary for the purpose it was collected for.
            </p>
            <h2>Your rights</h2>
            <p>
              You can ask us what data we hold about you, request a
              correction, or ask us to delete it, by emailing{" "}
              <a href={`mailto:${companyDetails.email}`}>
                {companyDetails.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
