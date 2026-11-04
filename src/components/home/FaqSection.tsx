"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./FaqSection.module.css";

interface FaqItem {
  id: string;
  number: string;
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    number: "1.",
    question: "What happens after I submit a technical enquiry?",
    answer: "A senior Next.js engineer or technical strategist reviews your requirements and responds within one business day with an initial audit or scheduling link for an introductory technical consultation.",
  },
  {
    id: "faq-2",
    number: "2.",
    question: "Do you sign non-disclosure agreements (NDAs) prior to detailed discovery?",
    answer: "Yes. We execute standard mutual non-disclosure agreements before reviewing proprietary codebases, analytics data, or confidential commercial workflows.",
  },
  {
    id: "faq-3",
    number: "3.",
    question: "Can we engage Qubizon for a single discipline?",
    answer: "Yes. While our unified cube model delivers compound velocity across disciplines, clients regularly engage us specifically for Next.js App Router engineering, technical SEO crawlability, or performance marketing.",
  },
  {
    id: "faq-4",
    number: "4.",
    question: "How do you structure client onboarding and code ownership?",
    answer: "All custom code, design tokens, repository commits, and analytics configurations belong 100% to your organization under standard commercial licensing terms from day one.",
  },
  {
    id: "faq-5",
    number: "5.",
    question: "What technology stack does Qubizon use for website development?",
    answer: "We engineer exclusively on modern Next.js App Router, React Server Components, TypeScript, and high-performance vanilla CSS or modular systems targeting sub-second LCP and zero Cumulative Layout Shift.",
  },
  {
    id: "faq-6",
    number: "6.",
    question: "How long does it take to see results from technical SEO?",
    answer: "Technical crawl and indexing improvements reflect as soon as Google re-crawls your XML sitemaps and schema graphs. Competitive organic keyword rankings typically mature within 3 to 6 months.",
  },
];

export function FaqSection() {
  const [openIds, setOpenIds] = useState<string[]>(["faq-1"]);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className={styles.section} aria-labelledby="faq-heading">
      <div className="container">
        {/* Asymmetrical Header matching Reference Image 4 */}
        <div className={styles.headerRow}>
          <div className={styles.badgeWrapper}>
            <span className={styles.badgeDot} aria-hidden="true" />
            <p className={styles.sectionBadge}>FAQ</p>
          </div>

          <div className={styles.headingContent}>
            <h2 id="faq-heading" className={styles.sectionTitle}>
              Got Questions? We&apos;ve Got Answers! Frequently Asked Questions
            </h2>
          </div>
        </div>

        {/* 2-Column Grid of Rounded Pill Accordion Cards (matching Image 4) */}
        <div className={styles.faqGrid}>
          {FAQS.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className={`${styles.faqCard} ${isOpen ? styles.faqCardOpen : ""}`}
              >
                <button
                  type="button"
                  id={`faq-btn-${faq.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className={styles.faqButton}
                  onClick={() => toggleFaq(faq.id)}
                >
                  <span className={styles.questionText}>
                    <span className={styles.faqNumber}>{faq.number}</span> {faq.question}
                  </span>
                  <div className={`${styles.iconCircle} ${isOpen ? styles.iconCircleOpen : ""}`}>
                    <ChevronDown size={18} aria-hidden="true" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${faq.id}`}
                    className={styles.answerArea}
                  >
                    <p className={styles.answerText}>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
