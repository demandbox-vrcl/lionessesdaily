import Link from "next/link";
import { categories } from "@/data/categories";
import { ScoreRing } from "@/components/ScoreRing";
import { StarRating } from "@/components/StarRating";

export function FeaturedReview() {
  const category = categories[0];
  const product = category.products[0];

  return (
    <section className="max-w-[1280px] mx-auto px-5 md:px-20 py-20 md:py-[120px]">
      {/* Section label */}
      <div
        className="pb-5 mb-[60px]"
        style={{ borderBottom: "1px solid var(--color-border)" }}
      >
        <p className="t-label" style={{ color: "var(--color-gold)" }}>
          EDITOR&apos;S PICK
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-12 md:gap-20">
        {/* Left — Image */}
        <div className="md:w-[42%]">
          <div
            className="relative w-full"
            style={{
              aspectRatio: "3/4",
              backgroundColor: "var(--color-surface)",
              border: "1px solid var(--color-border)",
            }}
          >
            {/* Gold corner accent */}
            <div
              className="absolute top-4 left-4 w-10 h-10"
              style={{
                borderTop: "2px solid var(--color-gold)",
                borderLeft: "2px solid var(--color-gold)",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="t-caption" style={{ color: "var(--color-muted)" }}>
                Product Image
              </span>
            </div>
          </div>
        </div>

        {/* Right — Content */}
        <div className="md:w-[58%] flex flex-col justify-center">
          <p className="t-label" style={{ color: "var(--color-muted)" }}>
            {category.title.toUpperCase()}
          </p>

          <h2
            className="t-headline mt-3"
            style={{ color: "var(--color-cream)" }}
          >
            {product.brand} {product.name}
          </h2>

          <div className="flex items-center gap-4 mt-4">
            <ScoreRing score={product.score} size={56} />
            <StarRating rating={product.score / 2} />
            <span
              className="font-display text-2xl"
              style={{ color: "var(--color-gold)" }}
            >
              {product.score} / 10
            </span>
          </div>

          <div
            className="my-7 h-px"
            style={{ backgroundColor: "var(--color-border)" }}
          />

          <p className="t-body max-w-[460px]">{product.summary}</p>

          {/* Pros */}
          <div className="mt-6">
            {product.pros.slice(0, 3).map((pro) => (
              <div
                key={pro}
                className="flex items-start gap-3 py-2.5"
                style={{ borderBottom: "1px solid var(--color-border)" }}
              >
                <span
                  className="font-body text-sm flex-shrink-0"
                  style={{ color: "var(--color-gold)" }}
                >
                  ✓
                </span>
                <span
                  className="font-body text-[15px]"
                  style={{ color: "var(--color-cream)" }}
                >
                  {pro}
                </span>
              </div>
            ))}
          </div>

          {/* CTA row */}
          <div className="flex items-center gap-8 mt-8">
            <Link
              href={`/${category.slug}`}
              className="t-label transition-colors duration-150 hover:!text-[var(--color-gold-light)]"
              style={{ color: "var(--color-gold)" }}
            >
              Read Full Review →
            </Link>
            <span className="t-caption">{product.price} {product.priceNote ? `— ${product.priceNote}` : ""}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
