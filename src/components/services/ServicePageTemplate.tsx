import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertCircle, ChevronRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import styles from "./ServicePage.module.css";

export interface CapabilityItem {
  title: string;
  description: string;
  deliverables: string[];
}

export interface MethodologyStep {
  step: string;
  title: string;
  description: string;
}

export interface BusinessOutcome {
  title: string;
  description: string;
}

export interface DisciplineConnection {
  discipline: string;
  relationship: string;
  href: string;
}

export interface SiblingService {
  title: string;
  href: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServicePageProps {
  id: string;
  disciplineNumber: string;
  title: string;
  slug: string;
  heroHeadline: string;
  heroSummary: string;
  primaryCtaText: string;
  problemHeading: string;
  problemSubheading: string;
  clientChallenges: string[];
  qubizonSolution: string;
  solutionHighlights: string[];
  capabilitiesHeading: string;
  capabilities: CapabilityItem[];
  methodologyHeading: string;
  methodologySteps: MethodologyStep[];
  outcomesHeading: string;
  outcomes: BusinessOutcome[];
  cubeConnectionHeading: string;
  cubeConnectionSummary: string;
  disciplineConnections: DisciplineConnection[];
  faqs: FAQItem[];
  ctaHeadline: string;
  ctaSummary: string;
  siblingServices: SiblingService[];
}

export function ServicePageTemplate(props: ServicePageProps) {
  const currentUrl = `${SITE_CONFIG.domain}/services/${props.slug}`;

  // Structured Data: BreadcrumbList
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": SITE_CONFIG.domain,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": `${SITE_CONFIG.domain}/services`,
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": props.title,
        "item": currentUrl,
      },
    ],
  };

  // Structured Data: Service
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": props.title,
    "provider": {
      "@type": "Organization",
      "name": SITE_CONFIG.name,
      "url": SITE_CONFIG.domain,
    },
    "description": props.heroSummary,
    "url": currentUrl,
  };

  // Structured Data: FAQPage
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": props.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className={styles.breadcrumbNav}>
        <div className="container">
          <ol className={styles.breadcrumbList}>
            <li className={styles.breadcrumbItem}>
              <Link href="/">Home</Link>
            </li>
            <li className={styles.breadcrumbSeparator} aria-hidden="true">/</li>
            <li className={styles.breadcrumbItem}>
              <Link href="/services">Services</Link>
            </li>
            <li className={styles.breadcrumbSeparator} aria-hidden="true">/</li>
            <li className={styles.breadcrumbCurrent} aria-current="page">
              {props.title}
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <header className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.disciplineBadge}>{props.disciplineNumber}</span>
            <h1 className={styles.heroTitle}>{props.heroHeadline}</h1>
            <p className={styles.heroSummary}>{props.heroSummary}</p>
            <div className={styles.ctaGroup}>
              <Link href="/contact" className={styles.primaryCta}>
                <span>{props.primaryCtaText}</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <a href="#capabilities" className={styles.secondaryCta}>
                <span>Explore Capabilities</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Problem & Solution Section */}
      <section className={styles.problemSection} aria-labelledby="problem-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionBadge}>Market Realities & Solutions</p>
            <h2 id="problem-heading" className={styles.sectionTitle}>
              {props.problemHeading}
            </h2>
            <p className={styles.cardLead}>{props.problemSubheading}</p>
          </div>

          <div className={styles.problemSolutionGrid}>
            <div className={styles.challengeCard}>
              <h3 className={`${styles.cardHeading} ${styles.challengeTitle}`}>Typical Industry Pitfalls</h3>
              <ul className={styles.bulletList}>
                {props.clientChallenges.map((challenge, idx) => (
                  <li key={idx} className={styles.bulletItem}>
                    <AlertCircle size={18} color="#c2410c" style={{ flexShrink: 0, marginTop: "2px" }} aria-hidden="true" />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.solutionCard}>
              <h3 className={`${styles.cardHeading} ${styles.solutionTitle}`}>The Qubizon Engineering Standard</h3>
              <p className={styles.cardLead}>{props.qubizonSolution}</p>
              <ul className={styles.bulletList}>
                {props.solutionHighlights.map((highlight, idx) => (
                  <li key={idx} className={styles.bulletItem}>
                    <CheckCircle2 size={18} color="#00488e" style={{ flexShrink: 0, marginTop: "2px" }} aria-hidden="true" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities & Deliverables */}
      <section id="capabilities" className={styles.capabilitiesSection} aria-labelledby="capabilities-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionBadge}>Technical Capabilities</p>
            <h2 id="capabilities-heading" className={styles.sectionTitle}>
              {props.capabilitiesHeading}
            </h2>
          </div>

          <div className={styles.capabilitiesGrid}>
            {props.capabilities.map((cap, idx) => (
              <article key={idx} className={styles.capabilityCard}>
                <div>
                  <h3 className={styles.capabilityTitle}>{cap.title}</h3>
                  <p className={styles.capabilityDescription}>{cap.description}</p>
                </div>
                <div>
                  <p className={styles.deliverablesHeading}>Key Deliverables</p>
                  <ul className={styles.deliverablesList}>
                    {cap.deliverables.map((d, dIdx) => (
                      <li key={dIdx} className={styles.deliverableItem}>
                        <CheckCircle2 size={14} color="#00488e" aria-hidden="true" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className={styles.methodologySection} aria-labelledby="methodology-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionBadge}>Execution Blueprint</p>
            <h2 id="methodology-heading" className={styles.sectionTitle}>
              {props.methodologyHeading}
            </h2>
          </div>

          <div className={styles.timeline}>
            {props.methodologySteps.map((step, idx) => (
              <div key={idx} className={styles.stepCard}>
                <span className={styles.stepBadge} aria-hidden="true">{step.step}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Outcomes Section */}
      <section className={styles.outcomesSection} aria-labelledby="outcomes-heading">
        <div className="container">
          <div className={`${styles.sectionHeader} ${styles.outcomesHeader}`}>
            <p className={styles.sectionBadge}>Measurable Impact</p>
            <h2 id="outcomes-heading" className={styles.sectionTitle}>
              {props.outcomesHeading}
            </h2>
          </div>

          <div className={styles.outcomesGrid}>
            {props.outcomes.map((outcome, idx) => (
              <div key={idx} className={styles.outcomeCard}>
                <h3 className={styles.outcomeTitle}>{outcome.title}</h3>
                <p className={styles.outcomeDescription}>{outcome.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Cube Connection Section */}
      <section className={styles.connectionSection} aria-labelledby="cube-connection-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionBadge}>The Cube Synergy</p>
            <h2 id="cube-connection-heading" className={styles.sectionTitle}>
              {props.cubeConnectionHeading}
            </h2>
            <p className={styles.cardLead}>{props.cubeConnectionSummary}</p>
          </div>

          <div className={styles.connectionsGrid}>
            {props.disciplineConnections.map((conn, idx) => (
              <div key={idx} className={styles.connectionCard}>
                <div>
                  <h3 className={styles.connectionDiscipline}>{conn.discipline}</h3>
                  <p className={styles.connectionText}>{conn.relationship}</p>
                </div>
                <Link href={conn.href} className={styles.connectionLink}>
                  <span>Explore {conn.discipline}</span>
                  <ChevronRight size={14} aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Structured FAQ Section */}
      <section className={styles.faqSection} aria-labelledby="faq-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionBadge}>Frequently Asked Questions</p>
            <h2 id="faq-heading" className={styles.sectionTitle}>
              Answers to Common Questions
            </h2>
          </div>

          <div className={styles.faqList}>
            {props.faqs.map((faq, idx) => (
              <div key={idx} className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>{faq.question}</h3>
                <p className={styles.faqAnswer}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contextual CTA Section */}
      <section className={styles.ctaSection} aria-labelledby="cta-heading">
        <div className="container">
          <div className={styles.ctaWrapper}>
            <h2 id="cta-heading" className={styles.ctaTitle}>
              {props.ctaHeadline}
            </h2>
            <p className={styles.ctaSubtitle}>{props.ctaSummary}</p>
            <Link href="/contact" className={styles.primaryCta}>
              <span>Discuss Your Requirements</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sibling Services Navigation */}
      <section className={styles.siblingSection} aria-label="Explore Complementary Services">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionBadge}>Complete The Cube</p>
            <h2 className={styles.sectionTitle}>Other Disciplines in the Qubizon Model</h2>
          </div>

          <div className={styles.siblingGrid}>
            {props.siblingServices.map((sibling, idx) => (
              <Link key={idx} href={sibling.href} className={styles.siblingCard}>
                <h3 className={styles.siblingTitle}>{sibling.title} &rarr;</h3>
                <p className={styles.siblingDesc}>{sibling.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
