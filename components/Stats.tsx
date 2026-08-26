import { stats } from "@/lib/content";

export default function Stats() {
  return (
    <section className="stats">
      <div className="wrap">
        {stats.map((stat) => (
          <div className="stat" key={stat.label}>
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
