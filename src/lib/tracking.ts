import type { Product } from "@/types";
import { supabase } from "./supabase";

export function buildAffiliateUrl(product: Product, categorySlug: string): string {
  if (!product.isClient) return product.productUrl;

  const url = new URL(product.productUrl);
  url.searchParams.set("utm_source", "lionessesdaily");
  url.searchParams.set("utm_medium", "review");
  url.searchParams.set("utm_campaign", categorySlug);
  url.searchParams.set("utm_content", product.id);
  return url.toString();
}

export function trackClick(product: Product, categorySlug: string): void {
  if (!supabase) return;
  supabase
    .from("link_clicks")
    .insert({
      product_id: product.id,
      product_name: product.name,
      category_slug: categorySlug,
      utm_source: "lionessesdaily",
      utm_medium: "review",
      utm_campaign: categorySlug,
    })
    .then(() => {});
}
