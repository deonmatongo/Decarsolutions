// The brand's orange sweep, sampled from public/logo.png (#FC7C00 at the top
// of the mark, #FA4300 low) with the brand amber leading in. Defined once so
// every SVG that uses it — the "what we do" figures and the flow diagram hub —
// stays in step.
export const BRAND_STOPS = [
  { offset: "0%", color: "#FFB454" },
  { offset: "50%", color: "#FC7C00" },
  { offset: "100%", color: "#F94300" },
];

export default function BrandGradient({ id }: { id: string }) {
  return (
    <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
      {BRAND_STOPS.map((s) => (
        <stop key={s.offset} offset={s.offset} stopColor={s.color} />
      ))}
    </linearGradient>
  );
}
