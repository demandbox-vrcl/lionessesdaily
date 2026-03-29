import type { ScoringCriterion } from "@/types";

interface CriteriaSectionProps {
  criteria: ScoringCriterion[];
}

export function CriteriaSection({ criteria }: CriteriaSectionProps) {
  return (
    <section className="py-20 md:py-[120px]">
      <div
        className="pb-5 mb-12"
        style={{ borderBottom: "1px solid var(--color-border)" }}
      >
        <p className="t-label" style={{ color: "var(--color-muted)" }}>
          HOW WE SCORE
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
        {criteria.map((criterion) => (
          <div
            key={criterion.key}
            className="py-6"
            style={{ borderBottom: "1px solid var(--color-border)" }}
          >
            <div className="flex items-center justify-between mb-2">
              <h4
                className="font-display text-xl font-semibold"
                style={{ color: "var(--color-cream)" }}
              >
                {criterion.label}
              </h4>
              <span className="t-label" style={{ color: "var(--color-gold)" }}>
                {criterion.weight}× WEIGHT
              </span>
            </div>

            {/* Weight bar */}
            <div
              className="h-1 w-full mb-3 rounded-sm"
              style={{ backgroundColor: "var(--color-border)" }}
            >
              <div
                className="h-1 rounded-sm transition-all duration-600 ease-out"
                style={{
                  width: `${(criterion.weight / 5) * 100}%`,
                  backgroundColor: "var(--color-gold)",
                }}
              />
            </div>

            <p
              className="font-body text-sm"
              style={{ color: "var(--color-muted)" }}
            >
              {criterion.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
