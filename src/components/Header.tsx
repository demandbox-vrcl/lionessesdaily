"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Reviews", href: "/#reviews" },
  { label: "Compare", href: "/#compare" },
  { label: "Top Picks", href: "/#top-picks" },
  { label: "Methodology", href: "/methodology" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        backgroundColor: "var(--color-bg)",
        borderBottom: "1px solid rgba(201,148,58,0.3)",
      }}
    >
      {/* Desktop */}
      <div className="hidden md:flex items-center justify-between h-[68px] px-20 max-w-[1280px] mx-auto">
        <Link href="/" className="flex flex-col leading-none">
          <span
            className="font-display text-[28px] font-bold tracking-wide"
            style={{ color: "var(--color-gold)" }}
          >
            LIONESSES
          </span>
          <span
            className="font-body text-[10px] font-normal"
            style={{ letterSpacing: "0.35em", color: "var(--color-muted)" }}
          >
            DAILY
          </span>
        </Link>

        <nav className="flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="t-label transition-colors duration-150"
              style={{ color: "var(--color-cream)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--color-gold)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--color-cream)")
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <div
            className="h-5 w-px"
            style={{ backgroundColor: "var(--color-border)" }}
          />
          <Link
            href="/quiz"
            className="font-body text-[11px] font-semibold uppercase tracking-[0.12em] px-[22px] py-[10px] rounded-[2px] transition-colors duration-150"
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
            START HERE →
          </Link>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden items-center justify-between h-14 px-5">
        <Link href="/" className="flex flex-col leading-none">
          <span
            className="font-display text-xl font-bold tracking-wide"
            style={{ color: "var(--color-gold)" }}
          >
            LIONESSES
          </span>
          <span
            className="font-body text-[9px]"
            style={{ letterSpacing: "0.35em", color: "var(--color-muted)" }}
          >
            DAILY
          </span>
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col justify-center gap-[6px] w-6 h-6"
          aria-label="Toggle menu"
        >
          <span
            className="block h-px w-full"
            style={{ backgroundColor: "var(--color-cream)" }}
          />
          <span
            className="block h-px w-full"
            style={{ backgroundColor: "var(--color-cream)" }}
          />
          <span
            className="block h-px w-full"
            style={{ backgroundColor: "var(--color-cream)" }}
          />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          className="md:hidden px-5 pb-6"
          style={{ backgroundColor: "var(--color-surface)" }}
        >
          <nav className="flex flex-col gap-0">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="t-label py-4 transition-colors duration-150"
                style={{
                  color: "var(--color-cream)",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/quiz"
            onClick={() => setMenuOpen(false)}
            className="block text-center font-body text-[11px] font-semibold uppercase tracking-[0.12em] px-[22px] py-[12px] rounded-[2px] mt-4 transition-colors duration-150"
            style={{
              backgroundColor: "var(--color-gold)",
              color: "var(--color-bg)",
            }}
          >
            START HERE →
          </Link>
        </div>
      )}
    </header>
  );
}
