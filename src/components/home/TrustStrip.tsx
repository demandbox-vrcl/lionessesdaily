const stats = [
  { number: "200+", label: "Products Tested" },
  { number: "6", label: "Categories" },
  { number: "Zero", label: "Brand Sponsorships" },
  { number: "4.9★", label: "Avg Trust Score" },
];

export function TrustStrip() {
  return (
    <section
      className="w-full"
      style={{
        backgroundColor: "var(--color-bg-warm)",
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-20 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center px-6 md:px-12 py-4 md:py-0"
              style={{
                borderRight:
                  i < stats.length - 1 && i !== 1
                    ? "1px solid var(--color-border)"
                    : i === 1
                    ? "none"
                    : "none",
                borderLeft:
                  i === 2
                    ? "none"
                    : undefined,
              }}
            >
              <p
                className="font-display text-[40px] font-bold leading-none"
                style={{ color: "var(--color-gold)" }}
              >
                {stat.number}
              </p>
              <p className="t-label mt-1.5" style={{ color: "var(--color-muted)" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
