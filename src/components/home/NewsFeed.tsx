"use client";

import { useEffect, useState } from "react";
import type { NewsItem } from "@/types";

export function NewsFeed() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    if (!url) {
      setLoading(false);
      setError(true);
      return;
    }

    fetch(`${url}/functions/v1/news-feed`)
      .then((r) => r.json())
      .then((data: NewsItem[]) => {
        setNews(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const featured = news[0];
  const rest = showAll ? news.slice(1) : news.slice(1, 4);

  return (
    <section
      style={{ backgroundColor: "var(--color-bg-warm)" }}
      className="w-full"
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-20 py-20 md:py-[120px]">
        {/* Section header */}
        <div
          className="flex items-center justify-between pb-5 mb-12"
          style={{ borderBottom: "1px solid var(--color-border)" }}
        >
          <p className="t-label" style={{ color: "var(--color-muted)" }}>
            SUPPLEMENT NEWS
          </p>
          <div className="flex items-center gap-2">
            <span
              className="block w-2 h-2 rounded-full"
              style={{ backgroundColor: "var(--color-gold)" }}
            />
            <span className="t-caption" style={{ color: "var(--color-gold)" }}>
              Updated daily
            </span>
          </div>
        </div>

        {loading && (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-12 animate-pulse rounded-sm"
                style={{ backgroundColor: "var(--color-surface)" }}
              />
            ))}
          </div>
        )}

        {error && !loading && (
          <p className="font-body text-sm" style={{ color: "var(--color-muted)" }}>
            News temporarily unavailable.
          </p>
        )}

        {!loading && !error && news.length > 0 && (
          <>
            {/* Featured story */}
            {featured && (
              <a
                href={featured.link}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="block py-6 group"
                style={{ borderBottom: "1px solid var(--color-border)" }}
              >
                <h3
                  className="font-display text-[32px] font-semibold leading-[1.2] transition-colors duration-150 group-hover:!text-[var(--color-gold)]"
                  style={{ color: "var(--color-cream)" }}
                >
                  {featured.title}
                </h3>
                <p className="t-caption mt-2">
                  {featured.source} · {featured.pubDate}
                </p>
              </a>
            )}

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {rest.map((item) => (
                <a
                  key={item.link}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="block py-4 group"
                  style={{ borderBottom: "1px solid var(--color-border)" }}
                >
                  <p
                    className="font-body text-[15px] transition-colors duration-150 group-hover:!text-[var(--color-gold)]"
                    style={{ color: "var(--color-cream)" }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="text-xs mt-1"
                    style={{ color: "var(--color-muted)" }}
                  >
                    {item.source}
                  </p>
                </a>
              ))}
            </div>

            {news.length > 4 && !showAll && (
              <button
                onClick={() => setShowAll(true)}
                className="t-label mt-6 transition-colors duration-150 hover:!text-[var(--color-gold-light)]"
                style={{ color: "var(--color-gold)" }}
              >
                Show more
              </button>
            )}
          </>
        )}
      </div>
    </section>
  );
}
