import { companyDetails } from "@/lib/content";

export default function FinalCta() {
  return (
    <section className="final-cta" id="contact">
      <div className="wrap">
        <h2>
          Got a project?
          <br />
          Let&rsquo;s talk!
        </h2>
        <p>
          Tell us what you&rsquo;re trying to build — we&rsquo;ll tell you
          honestly whether it needs a website, an app, some AI, some automation,
          or all four. Book a free consultation and we&rsquo;ll take it from
          there.
        </p>
        <a href={`mailto:${companyDetails.email}`} className="btn btn-primary">
          Book a Free Consultation →
        </a>

        <div className="contact-details">
          <div className="contact-col">
            <h4>Office</h4>
            <p>
              {companyDetails.name}
              {companyDetails.addressLines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </p>
          </div>
          <div className="contact-col">
            <h4>Registration</h4>
            <p>
              {companyDetails.registration.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </p>
          </div>
          <div className="contact-col">
            <h4>Contact</h4>
            <p>
              <a href={`mailto:${companyDetails.email}`}>
                {companyDetails.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
