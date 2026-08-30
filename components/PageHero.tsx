export default function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lede?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="page-hero-eyebrow">{eyebrow}</div>
        <h1>{title}</h1>
        {lede && <p>{lede}</p>}
        {children && <div className="page-hero-actions">{children}</div>}
      </div>
    </section>
  );
}
