export interface Product {
  id: string;
  name: string;
  brand: string;
  brandUrl: string;
  isClient: boolean;
  price: string;
  priceNote?: string;
  format: string;
  score: number;
  rank: number;
  badge?: 'Best Overall' | 'Best Value' | 'Runner-Up' | 'Budget Pick' | 'Bundle Pick';
  pros: string[];
  cons: string[];
  productUrl: string;
  summary?: string;
}

export interface ScoringCriterion {
  key: string;
  label: string;
  weight: 1 | 2 | 3 | 4 | 5;
  description: string;
}

export interface Category {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  introExpanded?: string;
  shortDescription?: string;
  products: Product[];
  scoringCriteria: ScoringCriterion[];
  lastUpdated: string;
  faq: { question: string; answer: string }[];
  ogImage?: string;
}

export interface NewsItem {
  title: string;
  link: string;
  source: string;
  pubDate: string;
  timestamp: number;
}
