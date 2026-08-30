import { clientLogos } from "@/lib/content";

export default function ClientMarquee() {
  return (
    <section className="marquee-section" aria-label="Clients">
      <div className="wrap">
        <span className="work-note">
          Placeholder client names — replace with real logos once you have
          permission to use them
        </span>
      </div>

      {/* Two identical runs side by side: the first scrolls fully out of view
          as the second arrives, so the loop has no visible seam. The copy is
          aria-hidden so the list is announced once. */}
      <div className="marquee">
        <ul className="marquee-run">
          {clientLogos.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
        <ul className="marquee-run" aria-hidden="true">
          {clientLogos.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
