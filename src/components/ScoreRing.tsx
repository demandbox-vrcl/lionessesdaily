interface ScoreRingProps {
  score: number;
  size?: number;
}

export function ScoreRing({ score, size = 96 }: ScoreRingProps) {
  const strokeWidth = size * 0.08;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (score / 10) * circumference;

  let color = "var(--color-score-low)";
  if (score >= 8.5) color = "var(--color-score-high)";
  else if (score >= 7.0) color = "var(--color-gold)";

  const scoreSize = size * 0.38;
  const labelSize = size * 0.14;

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--color-border)"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          strokeLinecap="round"
          className="transition-all duration-600 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span
          className="font-display font-bold leading-none"
          style={{ fontSize: scoreSize, color }}
        >
          {score.toFixed(1)}
        </span>
        <span
          className="font-body leading-none"
          style={{ fontSize: labelSize, color: "var(--color-muted)", marginTop: 2 }}
        >
          /10
        </span>
      </div>
    </div>
  );
}
