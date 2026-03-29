import Link from "next/link";

export function ComparisonCTA() {
  return (
    <section
      id="compare"
      className="w-full"
      style={{ backgroundColor: "var(--color-crimson)" }}
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-20 py-16 md:py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
          <p
            className="t-label"
            style={{ color: "rgba(242,234,216,0.6)" }}
          >
            NOT SURE WHERE TO START?
          </p>
          <h2
            className="font-display text-3xl md:text-[56px] font-semibold leading-[1.1] mt-3"
            style={{ color: "var(--color-cream)" }}
          >
            Let us find your perfect supplement.
          </h2>
        </div>
        <div className="flex-shrink-0">
          <Link
            href="/quiz"
            className="inline-block font-body text-xs font-semibold uppercase tracking-[0.1em] px-9 py-4 rounded-[2px] transition-colors duration-150 hover:bg-white"
            style={{
              backgroundColor: "var(--color-cream)",
              color: "var(--color-crimson)",
            }}
          >
            Use Our Comparison Tool →
          </Link>
        </div>
      </div>
    </section>
  );
}
