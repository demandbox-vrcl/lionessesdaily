"use client";

import { useState } from "react";

interface ComparisonFAQProps {
  faq: { question: string; answer: string }[];
}

export function ComparisonFAQ({ faq }: ComparisonFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-[120px]">
      <div
        className="pb-5 mb-12"
        style={{ borderBottom: "1px solid var(--color-border)" }}
      >
        <p className="t-label" style={{ color: "var(--color-muted)" }}>
          FREQUENTLY ASKED
        </p>
      </div>

      <div>
        {faq.map((item, i) => (
          <div
            key={i}
            style={{ borderBottom: "1px solid var(--color-border)" }}
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between py-7 text-left"
            >
              <h3
                className="font-display text-[26px] font-semibold pr-4"
                style={{ color: "var(--color-cream)" }}
              >
                {item.question}
              </h3>
              <span
                className="font-display text-[28px] flex-shrink-0"
                style={{ color: "var(--color-gold)" }}
              >
                {openIndex === i ? "−" : "+"}
              </span>
            </button>
            <div
              className="overflow-hidden transition-all duration-250 ease-in-out"
              style={{
                maxHeight: openIndex === i ? "500px" : "0",
              }}
            >
              <p
                className="font-body text-base pb-7"
                style={{ color: "var(--color-muted)", lineHeight: 1.8 }}
              >
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
