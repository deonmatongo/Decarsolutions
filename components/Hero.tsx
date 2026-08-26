export default function Hero() {
  return (
    <section className="hero--light">
      <div className="wrap">
        <h1 className="hero-headline">
          <span className="headline-lead-line">Four disciplines.</span>
          <span className="headline-split">
            <span>One</span>{" "}
            <span className="headline-rule" aria-hidden="true" />{" "}
            {/* explicit lines so the block shrink-wraps its widest line and
                the rule absorbs the remaining width. The {" "} separators are
                ignored by the flex layout here but supply the spaces when
                these spans go inline on narrow screens. */}
            <span className="headline-tail">
              <span>system that</span>{" "}
              <span>
                <em>ships.</em>
              </span>
            </span>
          </span>
        </h1>

        <div className="hero-lede">
          <p>
            Decar Solutions designs, builds, and automates the software your
            business runs on — from the first sketch to the systems that keep
            running without you.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-pill btn-ink btn-lg">
              Start a Project →
            </a>
            <a href="#process" className="btn btn-pill btn-outline btn-lg">
              See how we work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
