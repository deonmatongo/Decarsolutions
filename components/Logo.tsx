export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className={`logo${light ? " logo--light" : ""}`}>
      <span className="logo-mark" />
      DECAR
    </div>
  );
}
