"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";

export default function Faq() {
  // null = all closed; only one item is open at a time, matching the original.
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section" id="faq">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">FAQ</div>
          <h2>Questions we hear before &ldquo;let&rsquo;s talk.&rdquo;</h2>
        </div>
        <div className="faq-list">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                className={`faq-item${isOpen ? " open" : ""}`}
                key={item.q}
              >
                <button
                  type="button"
                  className="faq-q"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span>{item.q}</span>
                  <span className="plus" aria-hidden="true">
                    +
                  </span>
                </button>
                <div className="faq-a" id={`faq-answer-${i}`} role="region">
                  <div className="faq-a-inner">{item.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
