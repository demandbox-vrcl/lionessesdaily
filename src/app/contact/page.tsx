import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Lionesses Daily",
  description: "Get in touch with the Lionesses Daily editorial team.",
};

export default function ContactPage() {
  return (
    <div className="max-w-[1280px] mx-auto px-5 md:px-20 py-16 md:py-[120px]">
      <p className="t-label mb-8" style={{ color: "var(--color-gold)" }}>
        GET IN TOUCH
      </p>

      <h1 className="t-display" style={{ color: "var(--color-cream)" }}>
        Contact Us
      </h1>

      <p className="t-subhead mt-6 max-w-xl">
        Have a question, correction, or product suggestion? We read every message.
      </p>

      <div
        className="h-px w-20 my-12"
        style={{ backgroundColor: "var(--color-border)" }}
      />

      <div className="max-w-lg space-y-8">
        <div>
          <p className="t-label mb-2" style={{ color: "var(--color-muted)" }}>
            EDITORIAL
          </p>
          <p className="t-body">
            For review questions, corrections, or product suggestions:
          </p>
          <a
            href="mailto:editorial@lionessesdaily.com"
            className="t-body mt-1 inline-block transition-colors duration-150 hover:!text-[var(--color-gold)]"
            style={{ color: "var(--color-cream)" }}
          >
            editorial@lionessesdaily.com
          </a>
        </div>

        <div
          className="h-px"
          style={{ backgroundColor: "var(--color-border)" }}
        />

        <div>
          <p className="t-label mb-2" style={{ color: "var(--color-muted)" }}>
            PARTNERSHIPS
          </p>
          <p className="t-body">
            For affiliate or business inquiries:
          </p>
          <a
            href="mailto:partnerships@lionessesdaily.com"
            className="t-body mt-1 inline-block transition-colors duration-150 hover:!text-[var(--color-gold)]"
            style={{ color: "var(--color-cream)" }}
          >
            partnerships@lionessesdaily.com
          </a>
        </div>

        <div
          className="h-px"
          style={{ backgroundColor: "var(--color-border)" }}
        />

        <div>
          <p className="t-label mb-2" style={{ color: "var(--color-muted)" }}>
            PRIVACY
          </p>
          <p className="t-body">
            For data deletion requests or privacy inquiries:
          </p>
          <a
            href="mailto:privacy@lionessesdaily.com"
            className="t-body mt-1 inline-block transition-colors duration-150 hover:!text-[var(--color-gold)]"
            style={{ color: "var(--color-cream)" }}
          >
            privacy@lionessesdaily.com
          </a>
        </div>
      </div>
    </div>
  );
}
