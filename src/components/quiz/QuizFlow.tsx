"use client";

import { useState } from "react";
import Link from "next/link";
import { Lock } from "lucide-react";
import { categories } from "@/data/categories";
import { ScoreRing } from "@/components/ScoreRing";

interface QuizStep {
  question: string;
  options: string[];
}

const steps: QuizStep[] = [
  {
    question: "What's your primary health goal?",
    options: [
      "Better sleep & relaxation",
      "Skin, hair & anti-aging",
      "Gut health & digestion",
      "Energy & stress management",
      "Heart & brain health",
    ],
  },
  {
    question: "How do you prefer to take supplements?",
    options: ["Capsules / tablets", "Powder (mix into drinks)", "Liquid drops", "Gummies", "No preference"],
  },
  {
    question: "What's your monthly supplement budget?",
    options: ["Under $15", "$15 – $30", "$30 – $50", "$50+", "Price isn't a factor"],
  },
  {
    question: "Have you taken supplements before?",
    options: [
      "Yes, regularly for years",
      "On and off — I struggle with consistency",
      "Tried a few but didn't notice results",
      "This is my first time",
    ],
  },
];

const goalToCategory: Record<string, number> = {
  "Better sleep & relaxation": 0,
  "Skin, hair & anti-aging": 1,
  "Gut health & digestion": 2,
  "Energy & stress management": 4,
  "Heart & brain health": 5,
};

export function QuizFlow() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [emailError, setEmailError] = useState("");

  const quizComplete = answers.length === steps.length;
  const showResults = quizComplete && emailSubmitted;

  const handleSelect = (option: string) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setEmailError("Please enter a valid email.");
      return;
    }
    setEmailSubmitted(true);
    setEmailError("");
  };

  const categoryIdx = goalToCategory[answers[0]] ?? 0;
  const topCategory = categories[categoryIdx];
  const topProduct = topCategory?.products[0];
  const runners = topCategory?.products.slice(1, 3) ?? [];

  const retake = () => {
    setCurrentStep(0);
    setAnswers([]);
    setEmail("");
    setEmailSubmitted(false);
  };

  return (
    <div className="max-w-[640px] mx-auto px-5 py-16 md:py-20">
      {/* Progress bar */}
      <div
        className="h-0.5 w-full mb-12 rounded-sm"
        style={{ backgroundColor: "var(--color-border)" }}
      >
        <div
          className="h-0.5 rounded-sm transition-all duration-300 ease-out"
          style={{
            width: `${((quizComplete ? steps.length : currentStep) / steps.length) * 100}%`,
            backgroundColor: "var(--color-gold)",
          }}
        />
      </div>

      {/* Quiz Steps */}
      {!quizComplete && (
        <div className="text-center">
          <p className="t-label" style={{ color: "var(--color-muted)" }}>
            STEP {currentStep + 1} OF {steps.length}
          </p>
          <h2
            className="font-display text-[40px] font-semibold leading-[1.1] mt-4 mb-12"
            style={{ color: "var(--color-cream)" }}
          >
            {steps[currentStep].question}
          </h2>
          <div className="flex flex-col gap-0.5">
            {steps[currentStep].options.map((option) => (
              <button
                key={option}
                onClick={() => handleSelect(option)}
                className="w-full text-left px-6 py-5 font-body text-base transition-all duration-150"
                style={{
                  border: "1px solid var(--color-border)",
                  color: "var(--color-cream)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-border-warm)";
                  e.currentTarget.style.backgroundColor = "var(--color-surface)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-border)";
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Email Gate */}
      {quizComplete && !emailSubmitted && (
        <div className="text-center relative">
          {/* Blurred results behind */}
          <div className="absolute inset-0 -top-8 blur-md opacity-30 pointer-events-none">
            <div className="flex flex-col items-center gap-4 pt-12">
              <div
                className="w-20 h-20 rounded-full"
                style={{ backgroundColor: "var(--color-surface)" }}
              />
              <div
                className="w-48 h-4 rounded-sm"
                style={{ backgroundColor: "var(--color-surface)" }}
              />
              <div
                className="w-32 h-3 rounded-sm"
                style={{ backgroundColor: "var(--color-surface)" }}
              />
            </div>
          </div>

          <div className="relative z-10 py-12">
            <Lock
              size={32}
              style={{ color: "var(--color-gold)" }}
              className="mx-auto mb-6"
            />
            <h2
              className="font-display text-[32px] font-semibold leading-[1.1]"
              style={{ color: "var(--color-cream)" }}
            >
              Enter your email to unlock your results
            </h2>
            <form onSubmit={handleEmailSubmit} className="mt-10 max-w-sm mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full bg-transparent font-body text-base px-0 py-3 outline-none"
                style={{
                  color: "var(--color-cream)",
                  borderBottom: "1px solid var(--color-cream-dim)",
                }}
                onFocus={(e) =>
                  (e.currentTarget.style.borderBottomColor = "var(--color-gold)")
                }
                onBlur={(e) =>
                  (e.currentTarget.style.borderBottomColor = "var(--color-cream-dim)")
                }
              />
              {emailError && (
                <p
                  className="font-body text-sm mt-2 text-left"
                  style={{ color: "var(--color-score-low)" }}
                >
                  {emailError}
                </p>
              )}
              <button
                type="submit"
                className="w-full font-body text-xs font-semibold uppercase tracking-[0.1em] py-3.5 rounded-[2px] mt-6 transition-colors duration-150"
                style={{
                  backgroundColor: "var(--color-gold)",
                  color: "var(--color-bg)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "var(--color-gold-light)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "var(--color-gold)")
                }
              >
                Unlock My Results →
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Results */}
      {showResults && topProduct && (
        <div className="text-center">
          <p className="t-label mb-3" style={{ color: "var(--color-gold)" }}>
            YOUR TOP PICK
          </p>

          {/* Featured result */}
          <div
            className="py-8 mb-8"
            style={{ borderBottom: "1px solid var(--color-border)" }}
          >
            <div className="flex justify-center mb-4">
              <ScoreRing score={topProduct.score} size={80} />
            </div>
            <h3
              className="font-display text-3xl font-semibold"
              style={{ color: "var(--color-cream)" }}
            >
              {topProduct.brand} {topProduct.name}
            </h3>
            <p className="t-body mt-2 max-w-md mx-auto">
              {topProduct.summary}
            </p>
            <Link
              href={`/${topCategory.slug}`}
              className="inline-block mt-6 font-body text-xs font-semibold uppercase tracking-[0.1em] px-8 py-3.5 rounded-[2px] transition-colors duration-150"
              style={{
                backgroundColor: "var(--color-gold)",
                color: "var(--color-bg)",
              }}
            >
              Read Full Review →
            </Link>
          </div>

          {/* Runners up */}
          {runners.length > 0 && (
            <div className="grid grid-cols-2 gap-4">
              {runners.map((p) => (
                <div
                  key={p.id}
                  className="py-6 px-4"
                  style={{ border: "1px solid var(--color-border)" }}
                >
                  <div className="flex justify-center mb-3">
                    <ScoreRing score={p.score} size={48} />
                  </div>
                  <h4
                    className="font-display text-lg font-semibold"
                    style={{ color: "var(--color-cream)" }}
                  >
                    {p.brand}
                  </h4>
                  <p className="t-caption mt-1">{p.name}</p>
                </div>
              ))}
            </div>
          )}

          <button
            onClick={retake}
            className="t-label mt-8 transition-colors duration-150 hover:!text-[var(--color-cream)]"
            style={{ color: "var(--color-muted)" }}
          >
            Retake Quiz
          </button>
        </div>
      )}
    </div>
  );
}
