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
    question: "What services does Qubizon Digital Solutions offer?",
    answer:
      "We offer digital marketing, web development, graphic design, SEO, social media marketing, CRM solutions, and custom software services.",
  },
  {
    id: "faq-2",
    question: "Can I request more than one service?",
    answer:
      "Yes. You can choose individual services or combine several, such as web development, SEO, and social media marketing, to support a broader digital strategy.",
  },
  {
    id: "faq-3",
    question: "Do you work with small businesses?",
    answer:
      "Yes. We work with businesses at different stages and can discuss solutions suited to your goals, needs, and budget.",
  },
  {
    id: "faq-4",
    question: "Will my website work on mobile devices?",
    answer:
      "We build websites to be responsive, so they can adapt to different screen sizes, including smartphones, tablets, and desktop computers.",
  },
  {
    id: "faq-5",
    question: "How do I get started?",
    answer:
      "Contact us with a brief description of your business and what you need. We’ll discuss your goals and recommend the best next steps.",
  },
  {
    id: "faq-6",
    question: "How much do your services cost?",
    answer:
      "Pricing depends on the service and the scope of your project. Contact us for a consultation and a quote tailored to your requirements.",
  },
  {
    id: "faq-7",
    question: "Do you provide support after a project is completed?",
    answer:
      "Support options depend on the service and project. Please contact us to discuss the ongoing assistance that may be available for your needs.",
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
                <p className={styles.sectionBadge}>• FREQUENTLY ASKED QUESTIONS /</p>
                <p className={styles.lead}>
                  Direct, transparent answers about our digital marketing, web development, design, and software services.
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
