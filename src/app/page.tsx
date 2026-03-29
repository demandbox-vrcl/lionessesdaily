import { Hero } from "@/components/home/Hero";
import { CategoryBar } from "@/components/home/CategoryBar";
import { FeaturedReview } from "@/components/home/FeaturedReview";
import { TrustStrip } from "@/components/home/TrustStrip";
import { ReviewGrid } from "@/components/home/ReviewGrid";
import { ComparisonCTA } from "@/components/home/ComparisonCTA";
import { NewsFeed } from "@/components/home/NewsFeed";
import { HomeFAQ } from "@/components/home/HomeFAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryBar />
      <FeaturedReview />
      <TrustStrip />
      <ReviewGrid />
      <ComparisonCTA />
      <NewsFeed />
      <HomeFAQ />
    </>
  );
}
