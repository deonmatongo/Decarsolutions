// Narrow-screen counterpart to FlowDiagram: the 980x320 wide layout shrinks
// its 12px labels to ~4px on a phone, so small viewports get this stacked
// 2x2 -> hub -> output arrangement instead, where the labels stay legible.
const LINE = "var(--flow-line)";
const NODE_STROKE = "var(--flow-node-stroke)";
const NODE_FILL = "var(--flow-node-fill)";

const NODE_R = 38;

const nodes = [
  { cx: 85, cy: 55, label: "WEB", verb: "develop", pulse: "pulse-m1" },
  { cx: 255, cy: 55, label: "MOBILE", verb: "develop", pulse: "pulse-m2" },
  { cx: 85, cy: 180, label: "AI", verb: "integrate", pulse: "pulse-m3" },
  { cx: 255, cy: 180, label: "AUTOMATE", verb: "connect", pulse: "pulse-m4" },
];

// The top row routes around the OUTSIDE of the bottom row — a straight run to
// the hub would pass behind the AI / AUTOMATE nodes and read as if the top
// node connected to the one beneath it.
// Keep in sync with the offset-path values for .pulse-m1..m4 in globals.css.
const connectors = [
  "M47,55 C8,90 8,260 125,308",
  "M293,55 C332,90 332,260 215,308",
  "M85,218 C85,270 118,298 128,310",
  "M255,218 C255,270 222,298 212,310",
];

export default function FlowDiagramMobile() {
  return (
    <div className="flow flow--mobile" aria-hidden="true">
      <svg viewBox="0 0 340 530" xmlns="http://www.w3.org/2000/svg">
        {connectors.map((d) => (
          <path key={d} d={d} fill="none" stroke={LINE} strokeWidth="1.5" />
        ))}
        <path
          d="M170,377 L170,431"
          fill="none"
          stroke={LINE}
          strokeWidth="1.5"
          strokeDasharray="4 5"
        />

        {nodes.map((n) => (
          <circle key={n.pulse} className={`flow-pulse ${n.pulse}`} r="4" />
        ))}

        {nodes.map((n) => (
          <g key={n.label}>
            <circle
              cx={n.cx}
              cy={n.cy}
              r={NODE_R}
              fill={NODE_FILL}
              stroke={NODE_STROKE}
            />
            <text
              x={n.cx}
              y={n.cy - 2}
              textAnchor="middle"
              className="node-label strong"
            >
              {n.label}
            </text>
            <text
              x={n.cx}
              y={n.cy + 14}
              textAnchor="middle"
              className="node-label"
              fontSize="9"
            >
              {n.verb}
            </text>
          </g>
        ))}

        <g transform="translate(170,325)">
          <circle r="52" fill="var(--amber)" />
          <text y="6" textAnchor="middle" className="hub-label">
            DECAR
          </text>
        </g>

        <g transform="translate(170,455)">
          <circle
            r="24"
            fill="none"
            stroke="var(--flow-accent)"
            strokeWidth="1.5"
            strokeDasharray="3 4"
          />
          <text y="45" textAnchor="middle" className="node-label" fontSize="11">
            shipped &amp;
          </text>
          <text y="59" textAnchor="middle" className="node-label" fontSize="11">
            running
          </text>
        </g>
      </svg>
    </div>
  );
}
