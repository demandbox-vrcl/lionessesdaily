import type { Category } from "@/types";
import { magnesium } from "./magnesium";
import { collagen } from "./collagen";
import { probiotics } from "./probiotics";
import { vitaminD } from "./vitamin-d";
import { adaptogens } from "./adaptogens";
import { omega3 } from "./omega3";

export const categories: Category[] = [
  magnesium,
  collagen,
  probiotics,
  vitaminD,
  adaptogens,
  omega3,
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getAllSlugs(): string[] {
  return categories.map((c) => c.slug);
}
