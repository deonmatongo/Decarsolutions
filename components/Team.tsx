import GenerativeFigure from "./GenerativeFigure";
import { team } from "@/lib/content";

export default function Team() {
  return (
    <section className="team">
      <div className="wrap">
        <div className="team-inner">
          <GenerativeFigure kind="torus" idSuffix="team" />
          <div>
            <h2>{team.heading}</h2>
            <p>{team.body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
