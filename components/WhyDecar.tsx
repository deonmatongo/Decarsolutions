import { whyDecar } from "@/lib/content";

export default function WhyDecar() {
  return (
    <section className="section section-flush-top">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Why Decar</div>
          <h2>One team. Every handoff removed.</h2>
        </div>
        <div className="why-grid">
          {whyDecar.map((card) => (
            <div className="why-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
