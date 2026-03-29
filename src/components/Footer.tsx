import Link from "next/link";

const footerLinks = [
  { label: "Reviews", href: "/#reviews" },
  { label: "Compare", href: "/#compare" },
  { label: "Top Picks", href: "/#top-picks" },
  { label: "Methodology", href: "/methodology" },
  { label: "Quiz", href: "/quiz" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--color-surface)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-20 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20">
          {/* Brand */}
          <div>
            <Link href="/" className="flex flex-col leading-none">
              <span
                className="font-display text-[28px] font-bold tracking-wide"
                style={{ color: "var(--color-gold)" }}
              >
                LIONESSES
              </span>
              <span
                className="font-body text-[10px]"
                style={{
                  letterSpacing: "0.35em",
                  color: "var(--color-muted)",
                }}
              >
                DAILY
              </span>
            </Link>
            <p
              className="font-body text-sm mt-5 max-w-[220px]"
              style={{ color: "var(--color-muted)", lineHeight: 1.7 }}
            >
              Independent supplement reviews for women who give a damn.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p
              className="t-label mb-5"
              style={{ color: "var(--color-gold)" }}
            >
              Explore
            </p>
            <nav className="flex flex-col">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-body text-sm py-3 transition-colors duration-150 hover:!text-[var(--color-gold)]"
                  style={{
                    color: "var(--color-cream-dim)",
                    borderBottom: "1px solid var(--color-border)",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Disclosure */}
          <div>
            <p
              className="t-label mb-5"
              style={{ color: "var(--color-muted)" }}
            >
              Disclosure
            </p>
            <p
              className="font-body text-[13px]"
              style={{
                color: "var(--color-muted)",
                lineHeight: 1.85,
              }}
            >
              We may earn a commission on purchases made through our links.
              All reviews are editorially independent. Views are entirely our
              own.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row justify-between items-start md:items-center mt-15 pt-7 gap-4"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          <p className="text-xs" style={{ color: "var(--color-muted)" }}>
            © 2025 Lionesses Daily. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="text-xs transition-colors duration-150 hover:!text-[var(--color-gold)]"
              style={{ color: "var(--color-muted)" }}
            >
              Privacy Policy
            </Link>
            <span className="text-xs" style={{ color: "var(--color-muted)" }}>
              ·
            </span>
            <Link
              href="/terms"
              className="text-xs transition-colors duration-150 hover:!text-[var(--color-gold)]"
              style={{ color: "var(--color-muted)" }}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
