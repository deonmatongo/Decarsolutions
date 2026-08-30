import GenerativeFigure from "./GenerativeFigure";
import { tailoredSolutions } from "@/lib/content";

export default function TailoredSolutions() {
  return (
    <section className="wwd tailored">
      <div className="wrap">
        <h2 className="wwd-head">Decar provides tailored solutions</h2>
        <div className="wwd-grid">
          {tailoredSolutions.map((item) => (
            <article className="wwd-item" key={item.id}>
              <GenerativeFigure kind={item.figure} idSuffix={item.id} />
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
