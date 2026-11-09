"use client";

import { useState } from "react";
import { Star, ArrowDownRight } from "lucide-react";
import styles from "./TestimonialsSection.module.css";

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  initial: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote:
      "The direction and technical execution of our web platform are of a premium standard. Qubizon successfully transformed our legacy infrastructure into a profoundly coherent, sub-second modern digital experience across Kerala and the GCC.",
    author: "Arun Menon",
    role: "Managing Director, Malabar Logistics Group, Kozhikode",
    initial: "A",
  },
  {
    id: "t2",
    quote:
      "Qubizon eliminated our multi-vendor blame games entirely. Having software engineers, technical SEO strategists, and performance PPC media buyers operating in synchronized sprints reduced our customer acquisition cost by 38% in the first quarter.",
    author: "Faisal Al-Nuaimi",
    role: "VP of Growth & Digital Assets, Apex Commercial, Dubai",
    initial: "F",
  },
  {
    id: "t3",
    quote:
      "Their Next.js App Router architecture delivered a 100/100 Core Web Vitals score on mobile 4G networks. The instant WhatsApp lead qualification integration and CRM pipeline routing converted passive regional search traffic into daily high-ticket inquiries.",
    author: "Dr. Rahul Krishnan",
    role: "Chief Technology Officer, Aster Health Networks, Kerala",
    initial: "R",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const active = TESTIMONIALS[currentIndex];

  return (
    <section className={styles.testimonialsSection} id="testimonials" aria-labelledby="testimonials-heading">
      <div className={styles.container}>
        {/* Section Header (Matching Reference Model) */}
        <div className={styles.headerBlock}>
          <p className={styles.categoryTag}>TESTIMONIALS</p>
          <h2 id="testimonials-heading" className={styles.headingTitle}>
            Our community places their <span className={styles.italicAccent}>trust in us</span>
          </h2>
          <p className={styles.subtitle}>
            AND LISTENING TO THEM, WE KNOW WE&apos;RE DOING THE RIGHT THING.
          </p>
        </div>

        {/* Testimonial Card Frame (Reference Model Architecture) */}
        <div className={styles.cardContainer}>
          <article className={styles.testimonialCard}>
            {/* 5-Star Rating (Reference Pastel Steel Blue Stars) */}
            <div className={styles.starsRow} aria-label="5 out of 5 stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className={styles.starIcon} fill="currentColor" aria-hidden="true" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <blockquote className={styles.quoteText}>
              &ldquo;{active.quote}&rdquo;
            </blockquote>

            {/* Author Attribution */}
            <div className={styles.authorRow}>
              <div className={styles.avatarCircle} aria-hidden="true">
                <span>{active.initial}</span>
              </div>
              <div className={styles.authorInfo}>
                <h3 className={styles.authorName}>{active.author}</h3>
                <p className={styles.authorRole}>{active.role}</p>
              </div>
            </div>

            {/* Inset Bottom-Right "NEXT TESTIMONIAL ↘" Button (Reference Model) */}
            <button
              type="button"
              onClick={nextTestimonial}
              className={styles.nextBtn}
              aria-label="Cycle to next client testimonial"
            >
              <span>NEXT TESTIMONIAL</span>
              <span className={styles.btnIconWrap} aria-hidden="true">
                <ArrowDownRight size={14} />
              </span>
            </button>
          </article>
        </div>
      </div>
    </section>
  );
}
