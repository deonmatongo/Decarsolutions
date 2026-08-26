import { processSteps } from "@/lib/content";

export default function Process() {
  return (
    <section className="section" id="process">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">How we work</div>
          <h2>A process built for clarity, not surprises.</h2>
        </div>
        <div className="process-list">
          {processSteps.map((step) => (
            <div className="process-row" key={step.num}>
              <div className="process-num">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
