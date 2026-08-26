// Themed by CSS custom properties so the diagram works on dark or light
// surfaces — see --flow-* in globals.css.
import BrandGradient from "./BrandGradient";

const LINE = "var(--flow-line)";
const NODE_STROKE = "var(--flow-node-stroke)";
const NODE_FILL = "var(--flow-node-fill)";

const connectors = [
  { d: "M120,60 C220,60 260,170 400,170" },
  { d: "M340,60 C360,110 380,140 400,170" },
  { d: "M640,60 C620,110 600,140 580,170" },
  { d: "M860,60 C760,60 720,170 580,170" },
  { d: "M580,170 C700,170 760,170 860,225", dashed: true },
];

const inputNodes = [
  { cx: 120, label: "WEB", verb: "develop" },
  { cx: 340, label: "MOBILE", verb: "develop" },
  { cx: 640, label: "AI", verb: "integrate" },
  { cx: 860, label: "AUTOMATE", verb: "connect" },
];

export default function FlowDiagram() {
  return (
    <div className="flow flow--wide" aria-hidden="true">
      <svg viewBox="0 0 980 320" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* same sweep as the "what we do" figures */}
          <BrandGradient id="hub-grad-wide" />
        </defs>
        {/* connector lines */}
        {connectors.map((c) => (
          <path
            key={c.d}
            d={c.d}
            fill="none"
            stroke={LINE}
            strokeWidth="1.5"
            strokeDasharray={c.dashed ? "4 5" : undefined}
          />
        ))}

        {/* traveling pulses */}
        <circle className="flow-pulse pulse-a" r="4" />
        <circle className="flow-pulse pulse-b" r="4" />
        <circle className="flow-pulse pulse-c" r="4" />
        <circle className="flow-pulse pulse-d" r="4" />

        {/* input nodes */}
        {inputNodes.map((node) => (
          <g key={node.label}>
            <circle
              cx={node.cx}
              cy={60}
              r={34}
              fill={NODE_FILL}
              stroke={NODE_STROKE}
            />
            <text
              x={node.cx}
              y={56}
              textAnchor="middle"
              className="node-label strong"
            >
              {node.label}
            </text>
            <text
              x={node.cx}
              y={72}
              textAnchor="middle"
              className="node-label"
              fontSize="9"
            >
              {node.verb}
            </text>
          </g>
        ))}

        {/* hub */}
        <g transform="translate(490,170)">
          <circle r="52" fill="url(#hub-grad-wide)" />
          <text y="6" textAnchor="middle" className="hub-label">
            DECAR
          </text>
        </g>

        {/* output */}
        <g transform="translate(890,236)">
          <circle
            r="26"
            fill="none"
            stroke="var(--flow-accent)"
            strokeWidth="1.5"
            strokeDasharray="3 4"
          />
          <text y="-46" textAnchor="middle" className="node-label" fontSize="10">
            shipped &amp;
          </text>
          <text y="-34" textAnchor="middle" className="node-label" fontSize="10">
            running
          </text>
        </g>
      </svg>
    </div>
  );
}
