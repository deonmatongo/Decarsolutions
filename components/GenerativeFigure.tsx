// Line-art figures drawn from formulas rather than shipped as images, so they
// stay crisp at any size and cost nothing to download. All geometry is
// deterministic — no randomness — so server and client markup match.
//
// Each figure animates in the way its own geometry suggests (see globals.css):
//   torus  — the whole swirl rotates
//   burst  — a light sweep runs around the spokes
//   barrel — a wave travels down the coil
//   globe  — the meridians sweep, so the sphere reads as spinning on its axis
// All of it is disabled under prefers-reduced-motion, which leaves the static
// geometry below on screen.

import BrandGradient from "./BrandGradient";

export type FigureKind = "torus" | "burst" | "barrel" | "globe";

const VB = 200; // viewBox is 200x200
const C = VB / 2; // centre
const R = 82; // outer radius

// animation cycle lengths, mirrored in globals.css
const BURST_CYCLE = 4.5;
const BARREL_CYCLE = 3.6;
const GLOBE_CYCLE = 26;

// hairline that stays 0.8px however far the figure is scaled down
const stroke = {
  fill: "none",
  strokeWidth: 0.8,
  vectorEffect: "non-scaling-stroke" as const,
  strokeOpacity: 0.9,
};

function torus(id: string) {
  // Ellipses of shrinking minor axis, each rotated a little further, which
  // reads as a tilted ring with an off-centre lens of empty space.
  const N = 18;
  return Array.from({ length: N }, (_, i) => {
    const t = i / (N - 1);
    // linear, not cosine: cosine bunches the ellipses at the wide end and the
    // figure fills in as a disc instead of reading as an open ring
    const ry = R - t * (R - 3);
    const rot = -34 + t * 36;
    return (
      <ellipse
        key={i}
        cx={C}
        cy={C}
        rx={R}
        ry={+ry.toFixed(2)}
        transform={`rotate(${+rot.toFixed(2)} ${C} ${C})`}
        stroke={`url(#${id})`}
        {...stroke}
      />
    );
  });
}

function burst(id: string) {
  const N = 76;
  const inner = 3; // small, so the spokes converge into a bright core
  return Array.from({ length: N }, (_, i) => {
    const a = (i * 2 * Math.PI) / N;
    const cos = Math.cos(a);
    const sin = Math.sin(a);
    return (
      <line
        key={i}
        className="fig-shimmer"
        // negative delays put every spoke at a different point of one cycle,
        // so the highlight reads as sweeping around the figure
        style={{ animationDelay: `${-((i / N) * BURST_CYCLE).toFixed(3)}s` }}
        x1={+(C + inner * cos).toFixed(2)}
        y1={+(C + inner * sin).toFixed(2)}
        x2={+(C + R * cos).toFixed(2)}
        y2={+(C + R * sin).toFixed(2)}
        stroke={`url(#${id})`}
        {...stroke}
      />
    );
  });
}

// latitude rings of a sphere, seen from slightly above
function latitudes(
  id: string,
  count: number,
  tilt: number,
  animated = false,
  cycle = 0
) {
  return Array.from({ length: count }, (_, k) => {
    const phi = ((k + 1) * Math.PI) / (count + 1);
    const rx = R * Math.sin(phi);
    return (
      <ellipse
        key={`lat${k}`}
        className={animated ? "fig-wave" : undefined}
        style={
          animated
            ? { animationDelay: `${-((k / count) * cycle).toFixed(3)}s` }
            : undefined
        }
        cx={C}
        cy={+(C - R * Math.cos(phi)).toFixed(2)}
        rx={+rx.toFixed(2)}
        ry={+(rx * tilt).toFixed(2)}
        stroke={`url(#${id})`}
        {...stroke}
      />
    );
  });
}

function barrel(id: string) {
  return latitudes(id, 11, 0.3, true, BARREL_CYCLE);
}

function globe(id: string) {
  const M = 8;
  // Every meridian animates through the same rx range, offset in phase, so the
  // set traces |cos| over time — the look of a sphere turning on its axis. The
  // rx written here is the correct still position if the animation never runs.
  const meridians = Array.from({ length: M }, (_, j) => {
    const rx = Math.abs(R * Math.cos((j * Math.PI) / M));
    return (
      <ellipse
        key={`mer${j}`}
        className="fig-meridian"
        style={{ animationDelay: `${-((j / M) * GLOBE_CYCLE).toFixed(3)}s` }}
        cx={C}
        cy={C}
        rx={+rx.toFixed(2)}
        ry={R}
        stroke={`url(#${id})`}
        {...stroke}
      />
    );
  });
  return [
    <circle key="rim" cx={C} cy={C} r={R} stroke={`url(#${id})`} {...stroke} />,
    ...latitudes(id, 7, 0.28),
    ...meridians,
  ];
}

const BUILDERS: Record<FigureKind, (id: string) => React.ReactNode> = {
  torus,
  burst,
  barrel,
  globe,
};

export default function GenerativeFigure({
  kind,
  idSuffix,
}: {
  kind: FigureKind;
  // A figure can appear in more than one section, and each SVG needs its own
  // gradient id — pass a suffix wherever a kind is reused on the page.
  idSuffix?: string;
}) {
  const id = `fig-grad-${idSuffix ?? kind}`;
  return (
    <svg
      className={`wwd-figure fig-${kind}`}
      viewBox={`0 0 ${VB} ${VB}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <BrandGradient id={id} />
      </defs>
      {BUILDERS[kind](id)}
    </svg>
  );
}
