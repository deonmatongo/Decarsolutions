"use client";

import { useState } from "react";
import { faqs as defaultFaqs } from "@/lib/content";

type FaqItem = { q: string; a: string };

export default function Faq({
  items = defaultFaqs,
  heading = "Frequently asked questions",
  id = "faq",
}: {
  items?: FaqItem[];
  heading?: string;
  id?: string;
}) {
  // null = all closed; only one item is open at a time, matching the original.
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section" id={id}>
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">FAQ</div>
          <h2>{heading}</h2>
        </div>
        <div className="faq-list">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div className={`faq-item${isOpen ? " open" : ""}`} key={item.q}>
                <button
                  type="button"
                  className="faq-q"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span className="faq-num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="faq-text">{item.q}</span>
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
