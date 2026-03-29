"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

function FadeUp({ delay, children }: { delay: number; children: React.ReactNode }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div
      className="transition-all duration-700 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
      }}
    >
      {children}
    </div>
  );
}

const stats = [
  { number: "200+", label: "PRODUCTS TESTED" },
  { number: "3 YRS", label: "TRACK RECORD" },
  { number: "4.9", label: "TRUST SCORE" },
];

export function Hero() {
  return (
    <section
      className="min-h-screen relative"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 50%, rgba(201,148,58,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-5 md:px-20 py-20 md:py-0">
        <div className="flex flex-col md:flex-row md:min-h-screen">
          {/* Left Column (62%) */}
          <div className="md:w-[62%] flex flex-col justify-center py-16 md:py-32">
            <FadeUp delay={0}>
              <p className="t-label" style={{ color: "var(--color-gold)", marginBottom: 40 }}>
                INDEPENDENT SUPPLEMENT REVIEWS
              </p>
            </FadeUp>

            <FadeUp delay={100}>
              <h1 className="t-hero">
                <span style={{ color: "var(--color-cream)" }}>HONEST</span>
                <br />
                <span style={{ color: "var(--color-cream)" }}>REVIEWS FOR</span>
                <br />
                <span className="italic" style={{ color: "var(--color-gold)" }}>
                  Women Who Care.
                </span>
              </h1>
            </FadeUp>

            <FadeUp delay={200}>
              <div
                className="my-9 w-20 h-px"
                style={{ backgroundColor: "var(--color-border)" }}
              />
              <p className="t-subhead max-w-[400px]">
                We test, research, and rank the supplements that actually matter.
                No sponsorships. No fluff. Just the truth.
              </p>
            </FadeUp>

            <FadeUp delay={300}>
              <div className="flex items-center gap-10 mt-12">
                <Link
                  href="/#reviews"
                  className="font-body text-xs font-semibold uppercase tracking-[0.1em] px-8 py-3.5 rounded-[2px] transition-colors duration-150"
                  style={{
                    backgroundColor: "var(--color-gold)",
                    color: "var(--color-bg)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "var(--color-gold-light)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "var(--color-gold)")
                  }
                >
                  Browse Reviews →
                </Link>
                <Link
                  href="/methodology"
                  className="font-body text-xs font-semibold uppercase tracking-[0.1em] transition-colors duration-150"
                  style={{ color: "var(--color-cream-dim)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--color-gold)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--color-cream-dim)")
                  }
                >
                  How We Test →
                </Link>
              </div>
            </FadeUp>
          </div>

          {/* Right Column (38%) */}
          <div
            className="md:w-[38%] flex flex-col justify-center md:pl-16 pb-16 md:pb-0"
            style={{ borderLeft: "1px solid var(--color-border)" }}
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="py-8"
                style={{
                  borderTop: i === 0 ? "none" : "1px solid var(--color-border)",
                }}
              >
                <p
                  className="font-display text-[80px] font-bold leading-none"
                  style={{ color: "var(--color-gold)" }}
                >
                  {stat.number}
                </p>
                <p className="t-label mt-2" style={{ color: "var(--color-muted)" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
