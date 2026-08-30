"use client";

import { useState } from "react";
import { benefits, type Audience } from "@/lib/content";

const AUDIENCES: { key: Audience; label: string }[] = [
  { key: "corporation", label: "corporations" },
  { key: "startup", label: "startups" },
];

export default function Benefits() {
  const [audience, setAudience] = useState<Audience>("corporation");

  return (
    <section className="benefits" id="benefits">
      <div className="wrap">
        <h2 className="benefits-head">
          Benefits for{" "}
          <span className="benefits-toggle" role="tablist" aria-label="Audience">
            {AUDIENCES.map((a) => (
              <button
                key={a.key}
                type="button"
                role="tab"
                id={`benefits-tab-${a.key}`}
                aria-selected={audience === a.key}
                aria-controls="benefits-panel"
                className={`benefits-tab${
                  audience === a.key ? " is-active" : ""
                }`}
                onClick={() => setAudience(a.key)}
              >
                {a.label}
              </button>
            ))}
          </span>
        </h2>

        <div
          className="benefits-grid"
          id="benefits-panel"
          role="tabpanel"
          aria-labelledby={`benefits-tab-${audience}`}
        >
          {benefits[audience].map((item) => (
            <div className="benefits-item" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
