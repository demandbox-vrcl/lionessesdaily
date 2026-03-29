import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Lionesses Daily",
  description: "How Lionesses Daily collects, uses, and protects your data.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-[1280px] mx-auto px-5 md:px-20 py-16 md:py-[120px]">
      <p className="t-label mb-8" style={{ color: "var(--color-muted)" }}>
        LEGAL
      </p>
      <h1 className="t-display" style={{ color: "var(--color-cream)" }}>
        Privacy Policy
      </h1>
      <p className="t-subhead mt-4">Last updated: March 2025</p>

      <div className="max-w-3xl mt-16 space-y-12">
        <section>
          <h2 className="t-headline mb-4" style={{ color: "var(--color-cream)" }}>
            Information We Collect
          </h2>
          <p className="t-body">
            We collect email addresses when voluntarily submitted through our quiz or
            newsletter signup. We also collect anonymous analytics data including pages
            visited, time on site, and referral sources. We use cookies for analytics
            and to track affiliate link clicks.
          </p>
        </section>

        <section>
          <h2 className="t-headline mb-4" style={{ color: "var(--color-cream)" }}>
            How We Use Your Data
          </h2>
          <p className="t-body">
            Email addresses are used solely for sending supplement recommendations and
            editorial updates. We never sell or share your email with third parties.
            Analytics data helps us understand which reviews are most helpful and
            improve our content.
          </p>
        </section>

        <section>
          <h2 className="t-headline mb-4" style={{ color: "var(--color-cream)" }}>
            Affiliate Links
          </h2>
          <p className="t-body">
            When you click an affiliate link, we track the click anonymously to measure
            the effectiveness of our recommendations. The brand you visit may set their
            own cookies. We recommend reviewing the privacy policy of any site you visit
            through our links.
          </p>
        </section>

        <section>
          <h2 className="t-headline mb-4" style={{ color: "var(--color-cream)" }}>
            Your Rights
          </h2>
          <p className="t-body">
            You can request deletion of your data at any time by contacting us. You can
            unsubscribe from emails using the link in any email we send. We honor Do Not
            Track browser signals.
          </p>
        </section>

        <section>
          <h2 className="t-headline mb-4" style={{ color: "var(--color-cream)" }}>
            Contact
          </h2>
          <p className="t-body">
            For privacy-related inquiries, email privacy@lionessesdaily.com.
          </p>
        </section>
      </div>
    </div>
  );
}
