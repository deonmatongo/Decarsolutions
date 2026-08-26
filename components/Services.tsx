import { services } from "@/lib/content";
import { serviceIcons } from "./ServiceIcons";

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">What we do</div>
          <h2>
            Every discipline your product needs, working from the same brief.
          </h2>
          <p>
            Most agencies specialize in one layer and leave you to stitch the
            rest together. Decar builds the whole stack — design, code,
            intelligence, and the automation that connects it all.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="service-icon">{serviceIcons[service.id]}</div>
              <h3>{service.title}</h3>
              <p>{service.body}</p>
              <a href="#contact" className="service-link">
                Explore →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
