import type { Metadata } from "next";
import { QuizFlow } from "@/components/quiz/QuizFlow";

export const metadata: Metadata = {
  title: "Find Your Perfect Supplement — Lionesses Daily",
  description:
    "Take our 60-second quiz to find the best supplement for your health goals. Personalized recommendations backed by independent research.",
};

export default function QuizPage() {
  return <QuizFlow />;
}
