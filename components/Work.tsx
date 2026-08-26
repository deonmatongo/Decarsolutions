import { workItems } from "@/lib/content";

export default function Work() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Selected work</div>
          <h2>A sample of the kind of systems we build.</h2>
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
            <div className="work-card" key={item.title}>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
