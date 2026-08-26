import FlowDiagram from "./FlowDiagram";
import FlowDiagramMobile from "./FlowDiagramMobile";

export default function FlowSection() {
  return (
    <section className="flow-section">
      <div className="wrap">
        <div className="flow-panel media-panel">
          <FlowDiagram />
          <FlowDiagramMobile />
        </div>
      </div>
    </section>
  );
}
