"use client";

import type { Product } from "@/types";
import { ScoreRing } from "@/components/ScoreRing";
import { WinnerBadge } from "@/components/WinnerBadge";
import { buildAffiliateUrl, trackClick } from "@/lib/tracking";

interface ProductCardProps {
  product: Product;
  categorySlug: string;
}

export function ProductCard({ product, categorySlug }: ProductCardProps) {
  return (
    <article
      className="py-[60px]"
      style={{ borderTop: "1px solid var(--color-border-gold)" }}
    >
      <div className="flex flex-col md:flex-row gap-8 md:gap-0">
        {/* Col 1 — Score (15%) */}
        <div className="md:w-[15%] flex flex-col items-center md:items-start gap-3">
          <ScoreRing score={product.score} size={96} />
          <span
            className="font-display text-xl"
            style={{ color: "var(--color-muted)" }}
          >
            #{product.rank}
          </span>
          {product.badge && <WinnerBadge badge={product.badge} />}
        </div>

        {/* Col 2 — Content (55%) */}
        <div className="md:w-[55%] md:px-8">
          <p className="t-label" style={{ color: "var(--color-muted)" }}>
            {product.brand}
          </p>
          <h3
            className="t-headline mt-1.5"
            style={{ color: "var(--color-cream)" }}
          >
            {product.name}
          </h3>

          {product.summary && (
            <>
              <p
                className="t-label mt-6"
                style={{ color: "var(--color-muted)" }}
              >
                WHO IT&apos;S FOR
              </p>
              <p
                className="font-body text-[15px] mt-1"
                style={{ color: "var(--color-cream-dim)" }}
              >
                {product.summary}
              </p>
            </>
          )}

          {/* Pros / Cons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <div>
              {product.pros.map((pro) => (
                <div
                  key={pro}
                  className="flex items-start gap-2 py-3"
                  style={{
                    borderBottom: "1px solid var(--color-border)",
                  }}
                >
                  <span
                    className="font-body text-sm flex-shrink-0"
                    style={{ color: "var(--color-gold)" }}
                  >
                    ✓
                  </span>
                  <span
                    className="font-body text-sm"
                    style={{ color: "var(--color-cream)" }}
                  >
                    {pro}
                  </span>
                </div>
              ))}
            </div>
            <div>
              {product.cons.map((con) => (
                <div
                  key={con}
                  className="flex items-start gap-2 py-3"
                  style={{
                    borderBottom: "1px solid var(--color-border)",
                  }}
                >
                  <span
                    className="font-body text-sm flex-shrink-0"
                    style={{ color: "var(--color-muted)" }}
                  >
                    −
                  </span>
                  <span
                    className="font-body text-sm"
                    style={{ color: "var(--color-cream-dim)" }}
                  >
                    {con}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Verdict quote */}
          {product.summary && (
            <div
              className="mt-6 pl-5"
              style={{ borderLeft: "1px solid var(--color-gold)" }}
            >
              <p
                className="font-display text-xl italic"
                style={{ color: "var(--color-cream)" }}
              >
                &ldquo;{product.summary}&rdquo;
              </p>
            </div>
          )}
        </div>

        {/* Col 3 — Action (30%) */}
        <div className="md:w-[30%]">
          {/* Image placeholder */}
          <div
            className="w-full"
            style={{
              aspectRatio: "4/5",
              backgroundColor: "var(--color-surface)",
              border: "1px solid var(--color-border)",
            }}
          />

          <p
            className="font-display text-[32px] mt-5"
            style={{ color: "var(--color-cream)" }}
          >
            {product.price}
          </p>
          {product.priceNote && (
            <p className="t-caption">{product.priceNote}</p>
          )}

          {product.isClient ? (
            <a
              href={buildAffiliateUrl(product, categorySlug)}
              onClick={() => trackClick(product, categorySlug)}
              target="_blank"
              rel="nofollow sponsored"
              className="block w-full text-center font-body text-xs font-semibold uppercase tracking-[0.1em] py-3.5 rounded-[2px] mt-4 transition-colors duration-150"
              style={{
                backgroundColor: "var(--color-gold)",
                color: "var(--color-bg)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "var(--color-gold-light)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "var(--color-gold)")
              }
            >
              Buy Now →
            </a>
          ) : (
            <a
              href={product.productUrl}
              target="_blank"
              rel="nofollow"
              className="block w-full text-center font-body text-xs font-semibold uppercase tracking-[0.1em] py-3.5 rounded-[2px] mt-4 transition-colors duration-150"
              style={{
                border: "1px solid var(--color-cream-dim)",
                color: "var(--color-cream-dim)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--color-gold)";
                e.currentTarget.style.color = "var(--color-gold)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--color-cream-dim)";
                e.currentTarget.style.color = "var(--color-cream-dim)";
              }}
            >
              View Product →
            </a>
          )}

          <p className="t-caption mt-3">Format: {product.format}</p>
        </div>
      </div>
    </article>
  );
}
