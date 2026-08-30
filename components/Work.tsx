import Link from "next/link";
import { workItems } from "@/lib/content";

export default function Work() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Case studies</div>
          <h2>Our work</h2>
          <p>
            Swap these for your real case studies as they land — keep the same
            structure: challenge, build, result.
          </p>
        </div>
        <span className="work-note">
          Placeholder projects — replace with real client work
        </span>
        <div className="work-grid">
          {workItems.map((item) => (
            <Link href={`/work/${item.slug}`} className="work-card" key={item.slug}>
              <div className="work-thumb">Project thumbnail</div>
              <div className="work-body">
                <div className="work-tags">
                  {item.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="work-more">
          <Link href="/work" className="btn btn-ghost">
            See all case studies →
          </Link>
        </div>
      </div>
    </section>
  );
}
