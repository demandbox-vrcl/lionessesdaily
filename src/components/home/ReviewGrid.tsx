import Link from "next/link";
import { categories } from "@/data/categories";

export function ReviewGrid() {
  const featured = categories.slice(0, 6).map((cat) => ({
    category: cat,
    product: cat.products[0],
  }));

  return (
    <section id="reviews" className="max-w-[1280px] mx-auto px-5 md:px-20 py-20 md:py-[120px]">
      {/* Section header */}
      <div
        className="flex items-center justify-between pb-5 mb-12"
        style={{ borderBottom: "1px solid var(--color-border)" }}
      >
        <p className="t-label" style={{ color: "var(--color-muted)" }}>
          RECENT REVIEWS
        </p>
        <Link
          href="/#reviews"
          className="t-label transition-colors duration-150 hover:!text-[var(--color-gold-light)]"
          style={{ color: "var(--color-gold)" }}
        >
          View All Reviews →
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5">
        {featured.map(({ category, product }) => (
          <Link
            key={product.id}
            href={`/${category.slug}`}
            className="group"
          >
            {/* Image area */}
            <div
              className="w-full"
              style={{
                aspectRatio: "16/9",
                backgroundColor: "var(--color-surface)",
              }}
            />

            {/* Content */}
            <div
              className="py-6"
              style={{ borderBottom: "1px solid var(--color-border)" }}
            >
              <p className="t-label" style={{ color: "var(--color-muted)" }}>
                {product.brand}
              </p>
              <h3
                className="font-display text-[26px] font-semibold leading-[1.2] mt-1.5 transition-colors duration-150 group-hover:!text-[var(--color-gold)]"
                style={{ color: "var(--color-cream)" }}
              >
                {product.name}
              </h3>
              <p className="mt-2">
                <span
                  className="font-display text-xl"
                  style={{ color: "var(--color-gold)" }}
                >
                  {product.score}
                </span>
                <span
                  className="font-body text-sm ml-1"
                  style={{ color: "var(--color-muted)" }}
                >
                  /10
                </span>
              </p>
              <p
                className="font-body text-sm mt-2.5 line-clamp-2"
                style={{ color: "var(--color-muted)" }}
              >
                {product.summary}
              </p>
              <p
                className="t-label mt-4 transition-colors duration-150 group-hover:!text-[var(--color-gold-light)]"
                style={{ color: "var(--color-gold)" }}
              >
                Review →
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
