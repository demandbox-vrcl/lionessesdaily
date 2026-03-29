import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Lionesses Daily",
  description: "Terms of service for using Lionesses Daily.",
};

export default function TermsPage() {
  return (
    <div className="max-w-[1280px] mx-auto px-5 md:px-20 py-16 md:py-[120px]">
      <p className="t-label mb-8" style={{ color: "var(--color-muted)" }}>
        LEGAL
      </p>
      <h1 className="t-display" style={{ color: "var(--color-cream)" }}>
        Terms of Service
      </h1>
      <p className="t-subhead mt-4">Last updated: March 2025</p>

      <div className="max-w-3xl mt-16 space-y-12">
        <section>
          <h2 className="t-headline mb-4" style={{ color: "var(--color-cream)" }}>
            Use of This Site
          </h2>
          <p className="t-body">
            Lionesses Daily provides editorial supplement reviews for informational
            purposes only. Our content is not medical advice. Always consult a healthcare
            professional before starting any supplement regimen. By using this site, you
            agree to these terms.
          </p>
        </section>

        <section>
          <h2 className="t-headline mb-4" style={{ color: "var(--color-cream)" }}>
            Affiliate Relationships
          </h2>
          <p className="t-body">
            Some links on this site are affiliate links. When you purchase through these
            links, we may earn a commission at no additional cost to you. Affiliate
            relationships do not influence our editorial judgment, scores, or rankings.
          </p>
        </section>

        <section>
          <h2 className="t-headline mb-4" style={{ color: "var(--color-cream)" }}>
            Intellectual Property
          </h2>
          <p className="t-body">
            All content on Lionesses Daily — including reviews, scores, methodology
            descriptions, and design — is the intellectual property of Lionesses Daily.
            Reproduction without written permission is prohibited.
          </p>
        </section>

        <section>
          <h2 className="t-headline mb-4" style={{ color: "var(--color-cream)" }}>
            Limitation of Liability
          </h2>
          <p className="t-body">
            Lionesses Daily is not responsible for any adverse effects resulting from
            supplement use based on our reviews. Product formulations may change after
            our review date. Always verify current product information with the
            manufacturer.
          </p>
        </section>

        <section>
          <h2 className="t-headline mb-4" style={{ color: "var(--color-cream)" }}>
            Contact
          </h2>
          <p className="t-body">
            For questions about these terms, email legal@lionessesdaily.com.
          </p>
        </section>
      </div>
    </div>
  );
}
