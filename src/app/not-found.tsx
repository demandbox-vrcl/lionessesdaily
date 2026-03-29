import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-[1280px] mx-auto px-5 md:px-20 py-32 text-center">
      <p
        className="font-display text-[120px] font-bold leading-none"
        style={{ color: "var(--color-gold)" }}
      >
        404
      </p>
      <h1
        className="font-display text-4xl font-semibold mt-4"
        style={{ color: "var(--color-cream)" }}
      >
        Page not found
      </h1>
      <p className="t-subhead mt-4 max-w-md mx-auto">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-block mt-10 font-body text-xs font-semibold uppercase tracking-[0.1em] px-8 py-3.5 rounded-[2px] transition-colors duration-150"
        style={{
          backgroundColor: "var(--color-gold)",
          color: "var(--color-bg)",
        }}
      >
        Back to Home →
      </Link>
    </div>
  );
}
