import type { Product } from "@/types";
import { ScoreRing } from "@/components/ScoreRing";

interface ComparisonTableProps {
  products: Product[];
}

export function ComparisonTable({ products }: ComparisonTableProps) {
  const top = products.slice(0, 4);

  return (
    <section className="py-20 md:py-[120px]">
      <div
        className="pb-5 mb-12"
        style={{ borderBottom: "1px solid var(--color-border)" }}
      >
        <p className="t-label" style={{ color: "var(--color-muted)" }}>
          SIDE-BY-SIDE COMPARISON
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
              <th className="t-label text-left py-4 px-3" style={{ color: "var(--color-muted)" }}>
                Feature
              </th>
              {top.map((p) => (
                <th
                  key={p.id}
                  className="text-center py-4 px-3"
                >
                  <span
                    className="font-display text-lg font-semibold block"
                    style={{ color: "var(--color-cream)" }}
                  >
                    {p.brand}
                  </span>
                  <span className="t-caption block mt-1">{p.name}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              { label: "Score", render: (p: Product) => <ScoreRing score={p.score} size={32} /> },
              { label: "Price", render: (p: Product) => <span className="font-display text-lg" style={{ color: "var(--color-cream)" }}>{p.price}</span> },
              { label: "Format", render: (p: Product) => <span className="t-caption">{p.format}</span> },
              { label: "Top Pro", render: (p: Product) => <span className="font-body text-sm" style={{ color: "var(--color-cream-dim)" }}>{p.pros[0]}</span> },
              { label: "Top Con", render: (p: Product) => <span className="font-body text-sm" style={{ color: "var(--color-muted)" }}>{p.cons[0]}</span> },
            ].map((row) => (
              <tr
                key={row.label}
                style={{ borderBottom: "1px solid var(--color-border)" }}
              >
                <td className="t-label py-4 px-3" style={{ color: "var(--color-muted)" }}>
                  {row.label}
                </td>
                {top.map((p) => (
                  <td key={p.id} className="text-center py-4 px-3">
                    <div className="flex justify-center">{row.render(p)}</div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
