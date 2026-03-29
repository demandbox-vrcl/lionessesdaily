import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Methodology — Lionesses Daily",
  description:
    "How we test, score, and rank supplements. Full transparency on our review process.",
};

export default function MethodologyPage() {
  return (
    <div className="max-w-[1280px] mx-auto px-5 md:px-20 py-16 md:py-[120px]">
      <p className="t-label mb-8" style={{ color: "var(--color-gold)" }}>
        OUR METHODOLOGY
      </p>

      <h1 className="t-display" style={{ color: "var(--color-cream)" }}>
        How We Review
      </h1>

      <p className="t-subhead mt-6 max-w-2xl">
        Every review on Lionesses Daily follows a rigorous, repeatable process.
        Here&apos;s exactly how we do it — no black boxes.
      </p>

      <div
        className="h-px w-20 my-12"
        style={{ backgroundColor: "var(--color-border)" }}
      />

      <div className="max-w-3xl space-y-16">
        <section>
          <h2
            className="t-headline mb-4"
            style={{ color: "var(--color-cream)" }}
          >
            1. Category Selection
          </h2>
          <p className="t-body">
            We choose categories where women are most underserved — where
            marketing hype significantly exceeds clinical evidence. We focus on
            supplements with meaningful research behind them, not trends.
          </p>
        </section>

        <section>
          <h2
            className="t-headline mb-4"
            style={{ color: "var(--color-cream)" }}
          >
            2. Product Selection
          </h2>
          <p className="t-body">
            Within each category, we select the top-selling products, the most
            recommended by practitioners, and emerging brands with strong
            clinical backing. Every product must be commercially available with
            transparent ingredient labeling.
          </p>
        </section>

        <section>
          <h2
            className="t-headline mb-4"
            style={{ color: "var(--color-cream)" }}
          >
            3. Scoring Criteria
          </h2>
          <p className="t-body">
            Each category has 4–5 weighted scoring criteria specific to that
            supplement type. Criteria and weights are published on every review
            page. We prioritize bioavailability, clinical dosing, and
            third-party testing over taste, branding, or packaging.
          </p>
        </section>

        <section>
          <h2
            className="t-headline mb-4"
            style={{ color: "var(--color-cream)" }}
          >
            4. Testing Period
          </h2>
          <p className="t-body">
            We test products over 6–10 weeks, combining published clinical
            research, third-party lab certifications, and structured user
            feedback. Scores are composite weighted averages — not subjective
            opinions.
          </p>
        </section>

        <section>
          <h2
            className="t-headline mb-4"
            style={{ color: "var(--color-cream)" }}
          >
            5. Independence
          </h2>
          <p className="t-body">
            We never accept payment for reviews. Brands cannot influence scores
            or rankings. Some products include affiliate links — if you
            purchase through our link, we earn a commission at no cost to you.
            This funds our independent testing and keeps the site free.
            Affiliate partnerships never affect editorial judgment.
          </p>
        </section>

        <section>
          <h2
            className="t-headline mb-4"
            style={{ color: "var(--color-cream)" }}
          >
            6. Updates
          </h2>
          <p className="t-body">
            We re-evaluate every category quarterly. Rankings update when
            formulations change, new clinical evidence emerges, or a better
            product enters the market. Every page shows its last-updated date.
          </p>
        </section>
      </div>
    </div>
  );
}
