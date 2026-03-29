type BadgeType = "Best Overall" | "Best Value" | "Runner-Up" | "Budget Pick" | "Bundle Pick";

const badgeColors: Record<BadgeType, string> = {
  "Best Overall": "var(--color-gold)",
  "Best Value": "var(--color-score-high)",
  "Runner-Up": "var(--color-cream-dim)",
  "Budget Pick": "var(--color-muted)",
  "Bundle Pick": "var(--color-crimson-bright)",
};

interface WinnerBadgeProps {
  badge: BadgeType;
}

export function WinnerBadge({ badge }: WinnerBadgeProps) {
  const color = badgeColors[badge];

  return (
    <span
      className="t-label inline-block px-3 py-1 rounded-[2px]"
      style={{
        border: `1px solid ${color}`,
        color,
      }}
    >
      {badge}
    </span>
  );
}
