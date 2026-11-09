"use client";

import { useState } from "react";
import styles from "./FaqSection.module.css";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "What makes Qubizon's Next.js web development different?",
    answer:
      "We build on the modern Next.js App Router using React Server Components, TypeScript, and edge rendering. Unlike traditional WordPress templates with plugin bloat, our platforms load in sub-second LCP, score 100/100 on Core Web Vitals, and are immune to monolithic CMS security vulnerabilities.",
  },
  {
    id: "faq-2",
    question: "How does your Technical SEO ensure search indexation in Kerala?",
    answer:
      "We design deep Schema.org entity graphs, canonical hierarchies, and automated XML sitemaps that clarify topical relevance to Google and AI search engines. We target high-intent regional searches across Kozhikode, Thrissur, and Kerala with crawl-budget optimized page architecture.",
  },
  {
    id: "faq-3",
    question: "Can we engage Qubizon for a single discipline?",
    answer:
      "Yes. While our unified cube model delivers compound velocity across disciplines, clients regularly engage us specifically for Next.js App Router engineering, technical SEO crawlability, or performance PPC marketing.",
  },
  {
    id: "faq-4",
    question: "How do you structure code ownership and project onboarding?",
    answer:
      "All custom code, design tokens, repository commits, and analytics configurations belong 100% to your organization under standard commercial licensing terms from day one. You retain full administrative control over all digital assets.",
  },
  {
    id: "faq-5",
    question: "How do you track PPC return on investment without vanity metrics?",
    answer:
      "We install server-side conversion telemetry, Google Tag Manager event tracking, and negative keyword clustering. We track qualified consultation submissions, customer acquisition costs, and verified pipeline revenue rather than vanity impressions.",
  },
  {
    id: "faq-6",
    question: "What happens after I submit a project inquiry?",
    answer:
      "A senior engineer or technical strategist reviews your requirements and responds within one business day with an architectural assessment and a direct link to schedule an introductory consultation.",
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
    <section className={styles.faqSection} id="faq" aria-labelledby="faq-heading">
      <div className={styles.container}>
        <div className={styles.splitLayout}>
          {/* Left Column: Massive Italic Display "FAQ" (Reference Image 2 Model) */}
          <div className={styles.faqLeftCol}>
            <div className={styles.stickyCol}>
              <h2 id="faq-heading" className={styles.massiveFaq}>
                FAQ
              </h2>
              <div className={styles.faqMetaBlock}>
                <p className={styles.sectionBadge}>• CLIENT INTELLIGENCE &amp; CLARITY /</p>
                <p className={styles.lead}>
                  Direct, transparent answers regarding our architectural standards, technical SEO methodologies,
                  and client engagement processes.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Hairline Accordion List (Reference Image 2 Model) */}
          <div className={styles.faqRightCol}>
            <div className={styles.faqList}>
              {FAQS.map((faq) => {
                const isOpen = openIds.includes(faq.id);
                return (
                  <div key={faq.id} className={styles.faqRow}>
                    <button
                      type="button"
                      className={styles.faqTrigger}
                      onClick={() => toggleFaq(faq.id)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${faq.id}`}
                    >
                      <span
                        className={`${styles.faqPlusIcon} ${isOpen ? styles.faqPlusOpen : ""}`}
                        aria-hidden="true"
                      >
                        +
                      </span>
                      <span className={styles.faqQuestion}>{faq.question}</span>
                    </button>
                    {isOpen && (
                      <div id={`faq-answer-${faq.id}`} className={styles.faqAnswer} role="region">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
