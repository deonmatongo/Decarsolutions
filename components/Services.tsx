import GenerativeFigure from "./GenerativeFigure";
import { services } from "@/lib/content";

export default function Services() {
  return (
    <section className="wwd" id="services">
      <div className="wrap">
        <h2 className="wwd-head">
          Discover how one{" "}
          {/* the word and the rule can't break apart, so the rule always
              trails the end of a line rather than indenting the next one */}
          <span className="wwd-nobreak">
            team <span className="wwd-rule" aria-hidden="true" />
          </span>{" "}
          designs, builds, and automates high-quality web and mobile software
        </h2>

        <div className="wwd-grid">
          {services.map((service) => (
            <article className="wwd-item" key={service.id}>
              <GenerativeFigure kind={service.figure} />
              <h3>{service.title}</h3>
              <p>{service.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
