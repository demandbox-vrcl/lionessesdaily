"use client";

import Link from "next/link";
import type { Product } from "@/types";
import { ScoreRing } from "@/components/ScoreRing";
import { WinnerBadge } from "@/components/WinnerBadge";
import { buildAffiliateUrl, trackClick } from "@/lib/tracking";

interface VerdictTableProps {
  products: Product[];
  categorySlug: string;
}

export function VerdictTable({ products, categorySlug }: VerdictTableProps) {
  return (
    <div className="w-full overflow-x-auto" id="top-picks">
      <table className="w-full min-w-[700px]">
        <thead>
          <tr
            style={{
              backgroundColor: "var(--color-surface)",
              borderBottom: "1px solid var(--color-border-gold)",
            }}
          >
            {["#", "Product", "Form", "Score", "Price", "Action"].map(
              (col) => (
                <th
                  key={col}
                  className="t-label text-left px-4 py-3"
                  style={{ color: "var(--color-muted)" }}
                >
                  {col}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {products.map((product, i) => (
            <tr
              key={product.id}
              style={{
                backgroundColor:
                  i % 2 === 0
                    ? "var(--color-bg)"
                    : "var(--color-surface)",
                borderLeft:
                  product.badge === "Best Overall"
                    ? "3px solid var(--color-gold)"
                    : "3px solid transparent",
              }}
            >
              <td className="px-4 py-4">
                <span
                  className="font-display text-lg font-semibold"
                  style={{ color: "var(--color-muted)" }}
                >
                  {product.rank}
                </span>
              </td>
              <td className="px-4 py-4">
                <div className="flex flex-col gap-1">
                  <span
                    className="font-display text-lg font-semibold"
                    style={{ color: "var(--color-cream)" }}
                  >
                    {product.brand} {product.name}
                  </span>
                  {product.badge && <WinnerBadge badge={product.badge} />}
                </div>
              </td>
              <td className="px-4 py-4">
                <span className="t-caption">{product.format}</span>
              </td>
              <td className="px-4 py-4">
                <ScoreRing score={product.score} size={32} />
              </td>
              <td className="px-4 py-4">
                <span
                  className="font-display text-lg"
                  style={{ color: "var(--color-cream)" }}
                >
                  {product.price}
                </span>
              </td>
              <td className="px-4 py-4">
                {product.isClient ? (
                  <a
                    href={buildAffiliateUrl(product, categorySlug)}
                    onClick={() => trackClick(product, categorySlug)}
                    target="_blank"
                    rel="nofollow sponsored"
                    className="t-label transition-colors duration-150 hover:!text-[var(--color-gold-light)]"
                    style={{ color: "var(--color-gold)" }}
                  >
                    Buy Now →
                  </a>
                ) : (
                  <a
                    href={product.productUrl}
                    target="_blank"
                    rel="nofollow"
                    className="t-label transition-colors duration-150 hover:!text-[var(--color-cream)]"
                    style={{ color: "var(--color-muted)" }}
                  >
                    View →
                  </a>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
