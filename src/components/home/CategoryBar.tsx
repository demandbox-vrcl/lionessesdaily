import Link from "next/link";
import { categories } from "@/data/categories";

export function CategoryBar() {
  const display = categories.slice(0, 5);

  return (
    <section
      style={{
        backgroundColor: "var(--color-surface)",
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      {/* Desktop */}
      <div className="hidden md:flex h-24 max-w-[1280px] mx-auto">
        {display.map((cat, i) => (
          <Link
            key={cat.slug}
            href={`/${cat.slug}`}
            className="flex-1 min-w-0 flex flex-col items-center justify-center px-6 transition-all duration-150 group"
            style={{
              borderRight:
                i < display.length - 1
                  ? "1px solid var(--color-border)"
                  : "none",
            }}
          >
            <span
              className="font-display text-[26px] font-semibold text-center transition-colors duration-150 group-hover:!text-[var(--color-gold)]"
              style={{ color: "var(--color-cream)" }}
            >
              {cat.title.replace("Best ", "").replace(" Supplements", "").replace(" for Women", "")}
            </span>
            <span
              className="font-body text-xs mt-1"
              style={{ color: "var(--color-muted)" }}
            >
              {cat.products.length} reviewed
            </span>
          </Link>
        ))}
      </div>

      {/* Mobile */}
      <div className="flex md:hidden overflow-x-auto">
        {display.map((cat, i) => (
          <Link
            key={cat.slug}
            href={`/${cat.slug}`}
            className="flex-shrink-0 flex flex-col items-center justify-center px-6 py-5"
            style={{
              borderRight:
                i < display.length - 1
                  ? "1px solid var(--color-border)"
                  : "none",
            }}
          >
            <span
              className="font-display text-lg font-semibold whitespace-nowrap"
              style={{ color: "var(--color-cream)" }}
            >
              {cat.title.replace("Best ", "").replace(" Supplements", "").replace(" for Women", "")}
            </span>
            <span
              className="font-body text-[11px] mt-1"
              style={{ color: "var(--color-muted)" }}
            >
              {cat.products.length} reviewed
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
