import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Cookie Policy — Decar Solutions",
  description: "How Decar Solutions uses cookies on this site.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Cookie Policy" />
      <section className="section section-flush-top">
        <div className="wrap">
          <span className="work-note">
            Placeholder text — have this reviewed by counsel before launch
          </span>
          <div className="prose">
            <h2>What cookies we use</h2>
            <p>
              This site currently uses only strictly-necessary cookies needed
              to remember interface preferences, such as whether you&rsquo;ve
              dismissed a banner. It does not set third-party advertising or
              tracking cookies.
            </p>
            <h2>Analytics</h2>
            <p>
              If we add analytics in the future, this page will list the
              provider, what it collects, and how to opt out — before it goes
              live, not after.
            </p>
            <h2>Managing cookies</h2>
            <p>
              Every modern browser lets you view, block or delete cookies
              through its settings. Blocking strictly-necessary cookies may
              affect how parts of the site behave.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
