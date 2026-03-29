import { notFound } from "next/navigation";
import Link from "next/link";
import { getCategoryBySlug, getAllSlugs } from "@/data/categories";
import { VerdictTable } from "@/components/comparison/VerdictTable";
import { ProductCard } from "@/components/comparison/ProductCard";
import { CriteriaSection } from "@/components/comparison/CriteriaSection";
import { ComparisonTable } from "@/components/comparison/ComparisonTable";
import { WinnerBadge } from "@/components/WinnerBadge";
import { ComparisonFAQ } from "./ComparisonFAQ";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  return {
    title: category.metaTitle,
    description: category.metaDescription,
    alternates: { canonical: `https://lionessesdaily.com/${category.slug}` },
    openGraph: {
      title: category.metaTitle,
      description: category.metaDescription,
      url: `https://lionessesdaily.com/${category.slug}`,
      type: "article" as const,
      images: category.ogImage ? [{ url: category.ogImage }] : [],
    },
  };
}

export default async function ComparisonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: category.faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: category.products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: `${p.brand} ${p.name}`,
        review: {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: p.score,
            bestRating: 10,
          },
          author: { "@type": "Organization", name: "Lionesses Daily" },
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <div className="max-w-[1280px] mx-auto px-5 md:px-20">
        {/* Page header */}
        <section className="pt-12 md:pt-20 pb-10 md:pb-[60px]">
          <nav className="t-caption flex items-center gap-1.5 mb-6">
            <Link
              href="/"
              className="transition-colors duration-150 hover:!text-[var(--color-gold)]"
              style={{ color: "var(--color-muted)" }}
            >
              Home
            </Link>
            <span style={{ color: "var(--color-muted)" }}>/</span>
            <Link
              href="/#reviews"
              className="transition-colors duration-150 hover:!text-[var(--color-gold)]"
              style={{ color: "var(--color-muted)" }}
            >
              Reviews
            </Link>
            <span style={{ color: "var(--color-muted)" }}>/</span>
            <span style={{ color: "var(--color-cream-dim)" }}>
              {category.title}
            </span>
          </nav>

          <h1 className="t-display" style={{ color: "var(--color-cream)" }}>
            {category.title}
          </h1>

          <p className="t-subhead mt-4">
            Tested and ranked — updated {category.lastUpdated}
          </p>

          <div className="mt-4">
            <span
              className="t-label inline-block px-3 py-1 rounded-[2px]"
              style={{
                border: "1px solid var(--color-gold)",
                color: "var(--color-gold)",
              }}
            >
              INDEPENDENT REVIEW
            </span>
          </div>
        </section>

        {/* Quick verdict table */}
        <section className="pb-16">
          <VerdictTable
            products={category.products}
            categorySlug={category.slug}
          />
        </section>

        {/* Editorial intro */}
        <section className="flex flex-col md:flex-row gap-12 md:gap-16 pb-16">
          <div className="md:w-[65%]">
            <p className="t-body">{category.intro}</p>
            {category.introExpanded && (
              <p className="t-body mt-6">{category.introExpanded}</p>
            )}
          </div>
          <div className="md:w-[35%] md:sticky md:top-24 self-start">
            <div
              className="p-8"
              style={{ border: "1px solid var(--color-border)" }}
            >
              <p
                className="t-label mb-5"
                style={{ color: "var(--color-gold)" }}
              >
                SCORING CRITERIA
              </p>
              {category.scoringCriteria.map((c) => (
                <div key={c.key} className="mb-4">
                  <div className="flex justify-between items-center mb-1">
                    <span
                      className="font-body text-sm font-medium"
                      style={{ color: "var(--color-cream)" }}
                    >
                      {c.label}
                    </span>
                    <span className="t-caption">{c.weight}/5</span>
                  </div>
                  <div
                    className="h-1 w-full rounded-sm"
                    style={{ backgroundColor: "var(--color-border)" }}
                  >
                    <div
                      className="h-1 rounded-sm"
                      style={{
                        width: `${(c.weight / 5) * 100}%`,
                        backgroundColor: "var(--color-gold)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed product cards */}
        <section>
          {category.products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              categorySlug={category.slug}
            />
          ))}
        </section>

        {/* Comparison table */}
        <ComparisonTable products={category.products} />

        {/* Criteria section */}
        <CriteriaSection criteria={category.scoringCriteria} />

        {/* FAQ */}
        <ComparisonFAQ faq={category.faq} />

        {/* Affiliate disclosure */}
        <section
          className="py-10 mt-10"
          style={{
            backgroundColor: "var(--color-surface)",
            borderTop: "1px solid var(--color-border)",
          }}
        >
          <p
            className="font-body text-[13px] px-5 md:px-0"
            style={{ color: "var(--color-muted)" }}
          >
            Affiliate Disclosure: Some links on this page are affiliate links.
            If you make a purchase through these links, we may earn a commission
            at no additional cost to you. This does not influence our editorial
            judgment — all reviews are independently conducted and scored.
          </p>
        </section>
      </div>
    </>
  );
}
