"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How do you choose which supplements to review?",
    answer:
      "We focus on categories where women are most underserved by the market — where marketing hype significantly outpaces clinical evidence. Within each category, we select the top-selling and most-recommended products, plus emerging brands with strong clinical backing. Every product must be commercially available and have transparent labeling.",
  },
  {
    question: "Do you accept payment from supplement brands?",
    answer:
      "No. We never accept payment for reviews, and brands cannot influence our scores or rankings. Some products include affiliate links, meaning we earn a commission if you purchase through our link — but this never affects our editorial judgment. Products without affiliate partnerships receive identical review treatment.",
  },
  {
    question: "How often are reviews updated?",
    answer:
      "We re-evaluate every category quarterly and update rankings when formulations change, new clinical evidence emerges, or a significantly better product enters the market. Each review page shows its last-updated date so you always know how current our recommendations are.",
  },
  {
    question: "What makes your scoring system different?",
    answer:
      "Our scores are weighted composites based on 4–5 criteria specific to each supplement category. We prioritize bioavailability, clinical dosing, and third-party testing — not taste or branding. Criteria weights are published transparently on each review page so you can see exactly how we calculate scores.",
  },
  {
    question: "How do affiliate links work on this site?",
    answer:
      "When you click a product link marked with an affiliate partnership, the brand knows you came from Lionesses Daily. If you purchase, we receive a small commission at no extra cost to you. This revenue funds our independent testing and keeps the site free. Affiliate partnerships never influence scores — our lowest-ranked products sometimes have the highest commissions.",
  },
];

export function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="max-w-[1280px] mx-auto px-5 md:px-20 py-20 md:py-[120px]">
      {/* Section header */}
      <div
        className="pb-5 mb-12"
        style={{ borderBottom: "1px solid var(--color-border)" }}
      >
        <p className="t-label" style={{ color: "var(--color-muted)" }}>
          FREQUENTLY ASKED
        </p>
      </div>

      <div>
        {faqs.map((faq, i) => (
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
                {faq.question}
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
                style={{
                  color: "var(--color-muted)",
                  lineHeight: 1.8,
                }}
              >
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
