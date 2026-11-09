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
  featuredArticle?: {
    title: string;
    href: string;
    excerpt: string;
    readTime: string;
  };
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

      {/* Featured Engineering Insight (Rich Internal Linking) */}
      {props.featuredArticle && (
        <section className={styles.connectionSection} aria-labelledby="featured-insight-heading">
          <div className="container">
            <div style={{ background: "rgba(255, 255, 255, 0.85)", border: "1px solid rgba(0, 0, 0, 0.08)", borderRadius: "24px", padding: "clamp(2rem, 3.5vw, 3rem)" }}>
              <span className={styles.sectionBadge}>Practitioner Case Analysis</span>
              <h2 id="featured-insight-heading" style={{ fontSize: "clamp(1.5rem, 2.2vw, 2.2rem)", fontWeight: 800, color: "var(--clr-foreground, #0a0a0a)", marginTop: "0.5rem", marginBottom: "0.75rem" }}>
                {props.featuredArticle.title}
              </h2>
              <p style={{ fontSize: "1rem", color: "var(--color-text-secondary, #64748b)", lineHeight: "1.6", maxWidth: "800px", marginBottom: "1.5rem" }}>
                {props.featuredArticle.excerpt}
              </p>
              <Link
                href={props.featuredArticle.href}
                className={styles.primaryBtn}
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none" }}
              >
                <span>Read Full Engineering Blueprint ({props.featuredArticle.readTime})</span>
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Engineering Assurance & Service Quality Benchmarks */}
      <section className={styles.section} aria-labelledby="standards-heading" style={{ background: "rgba(255, 255, 255, 0.75)", borderTop: "1px solid rgba(0, 0, 0, 0.06)", borderBottom: "1px solid rgba(0, 0, 0, 0.06)", padding: "clamp(2.5rem, 5vw, 4.5rem) 0" }}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionBadge}>Practitioner Quality Assurance</p>
            <h2 id="standards-heading" className={styles.sectionTitle}>
              Engineering Assurance &amp; SLA Standards
            </h2>
            <p className={styles.sectionLead}>
              Every deliverable within our {props.title} discipline is governed by quantifiable engineering criteria, strict technical debt minimization, and transparent performance verification.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.75rem", marginTop: "2rem" }}>
            <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.08)", borderRadius: "16px", padding: "1.75rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.75rem" }}>
                <CheckCircle2 size={20} style={{ color: "var(--brand-blue, #00488e)" }} aria-hidden="true" />
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, margin: 0, color: "var(--clr-foreground, #0a0a0a)" }}>Performance &amp; Core Web Vitals SLA</h3>
              </div>
              <p style={{ fontSize: "0.925rem", color: "var(--color-text-secondary, #475569)", lineHeight: 1.6, margin: 0 }}>
                We engineer all code for sub-second Largest Contentful Paint (LCP &lt; 1.2s), zero layout shifts (CLS = 0.00), and rapid Interaction to Next Paint (INP &lt; 200ms). Web applications load instantaneously across low-latency 4G and 5G connections without bloated third-party dependencies.
              </p>
            </div>

            <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.08)", borderRadius: "16px", padding: "1.75rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.75rem" }}>
                <CheckCircle2 size={20} style={{ color: "var(--brand-blue, #00488e)" }} aria-hidden="true" />
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, margin: 0, color: "var(--clr-foreground, #0a0a0a)" }}>WCAG 2.1 AA Accessibility Conformance</h3>
              </div>
              <p style={{ fontSize: "0.925rem", color: "var(--color-text-secondary, #475569)", lineHeight: 1.6, margin: 0 }}>
                Every digital touchpoint is tested against strict WCAG 2.1 AA benchmarks. We implement semantic HTML landmarks, high-contrast color ratios, visible focus indicators, and comprehensive keyboard tab sequences to ensure universal usability for all user cohorts.
              </p>
            </div>

            <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.08)", borderRadius: "16px", padding: "1.75rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.75rem" }}>
                <CheckCircle2 size={20} style={{ color: "var(--brand-blue, #00488e)" }} aria-hidden="true" />
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, margin: 0, color: "var(--clr-foreground, #0a0a0a)" }}>100% Client IP &amp; Code Ownership</h3>
              </div>
              <p style={{ fontSize: "0.925rem", color: "var(--color-text-secondary, #475569)", lineHeight: 1.6, margin: 0 }}>
                You retain complete, unencumbered ownership of all git repositories, analytics datasets, media assets, and advertising accounts from project inception. We build with open standard web technologies—zero proprietary lock-in or licensing gates.
              </p>
            </div>

            <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.08)", borderRadius: "16px", padding: "1.75rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.75rem" }}>
                <CheckCircle2 size={20} style={{ color: "var(--brand-blue, #00488e)" }} aria-hidden="true" />
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, margin: 0, color: "var(--clr-foreground, #0a0a0a)" }}>Verified Pre-Release Protocol</h3>
              </div>
              <p style={{ fontSize: "0.925rem", color: "var(--color-text-secondary, #475569)", lineHeight: 1.6, margin: 0 }}>
                Prior to production deployment, our multi-stage quality gate validates TypeScript type safety, ESLint compliance, crawl schema validation in Google Search Console test suites, and cross-browser visual fidelity across mobile, tablet, and desktop viewport dimensions.
              </p>
            </div>

            <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.08)", borderRadius: "16px", padding: "1.75rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.75rem" }}>
                <CheckCircle2 size={20} style={{ color: "var(--brand-blue, #00488e)" }} aria-hidden="true" />
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, margin: 0, color: "var(--clr-foreground, #0a0a0a)" }}>Transport Security &amp; HSTS Enforcement</h3>
              </div>
              <p style={{ fontSize: "0.925rem", color: "var(--color-text-secondary, #475569)", lineHeight: 1.6, margin: 0 }}>
                All client interactions and form endpoints are protected by HTTP Strict Transport Security (HSTS), TLS 1.3 protocol mandates, and strict defensive headers (nosniff, sameorigin) to safeguard data integrity against interception or unencrypted downgrade attacks.
              </p>
            </div>

            <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.08)", borderRadius: "16px", padding: "1.75rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.75rem" }}>
                <CheckCircle2 size={20} style={{ color: "var(--brand-blue, #00488e)" }} aria-hidden="true" />
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, margin: 0, color: "var(--clr-foreground, #0a0a0a)" }}>Semantic Knowledge Graph Integration</h3>
              </div>
              <p style={{ fontSize: "0.925rem", color: "var(--color-text-secondary, #475569)", lineHeight: 1.6, margin: 0 }}>
                Every capability deliverable is programmatically mapped into Schema.org Service, Organization, and BreadcrumbList JSON-LD graphs, ensuring rapid indexing velocity and definitive snippet eligibility across search engines and AI answer engines.
              </p>
            </div>
          </div>

          {/* Deep Architectural Methodology & Sector Integration Framework */}
          <div style={{ marginTop: "3.5rem", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "20px", padding: "clamp(2rem, 4vw, 3rem)" }}>
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#00488e", display: "block", marginBottom: "0.5rem" }}>
              • DELIVERY RIGOR &amp; MULTI-INDUSTRY INTEGRATION /
            </span>
            <h3 style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.85rem)", fontWeight: 800, color: "#0a0a0a", marginBottom: "1rem" }}>
              Enterprise Cross-Border Delivery &amp; Operational Governance
            </h3>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "#4a5568", maxWidth: "900px", marginBottom: "2rem" }}>
              Deploying enterprise software and high-intent growth campaigns across Kerala, the UAE, and international commercial corridors requires absolute architectural discipline. We operate under structured agile frameworks designed to eliminate scope creep, protect user privacy, and ensure predictable return on investment across every business engagement.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: "1.5rem", marginBottom: "2rem" }}>
              <div style={{ background: "#ffffff", padding: "1.5rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
                <h4 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
                  1. Discovery &amp; Architectural Sprint Zero
                </h4>
                <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
                  Before writing production code or allocating advertising budgets, our senior practitioners conduct a deep-dive technical audit. We inspect your existing crawl hierarchy, analyze keyword difficulty and competitor search intent, review database bottlenecks, and define atomic design tokens to ensure complete cross-platform alignment.
                </p>
              </div>

              <div style={{ background: "#ffffff", padding: "1.5rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
                <h4 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
                  2. Two-Week Agile Sprint Cadence
                </h4>
                <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
                  We engineer in disciplined two-week sprint cycles with live demonstration reviews and shared Git commit logs. Every release increment includes automated type validation, unit test execution, and preview environments—giving your executive stakeholders direct visibility without administrative delays.
                </p>
              </div>

              <div style={{ background: "#ffffff", padding: "1.5rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
                <h4 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
                  3. Edge-First Cloud Infrastructure
                </h4>
                <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
                  Every web property is distributed across enterprise global content delivery networks with data residency alignment. Assets are cached across AWS regional edge nodes (UAE me-central-1, India ap-south-1, and Frankfurt eu-central-1), achieving sub-second Time to First Byte (TTFB &lt; 200ms) for international audiences.
                </p>
              </div>

              <div style={{ background: "#ffffff", padding: "1.5rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
                <h4 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
                  4. Regulatory &amp; Statutory Compliance
                </h4>
                <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
                  Our platforms natively support regional and international compliance mandates. From Indian Digital Personal Data Protection (DPDP) Act 2023 and European GDPR standards to ZATCA Phase 2 e-invoicing for Saudi Arabia and UAE Federal Tax Authority (FTA) invoice structures, compliance is built into the data layer.
                </p>
              </div>
            </div>

            <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: "1.5rem", display: "flex", flexWrap: "wrap", gap: "1.5rem", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ fontSize: "0.85rem", color: "#64748b", lineHeight: 1.5, maxWidth: "680px" }}>
                <strong>Industry Solutions Available:</strong> We provide specialized implementation architectures for{" "}
                <Link href="/industries" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Real Estate</Link>,{" "}
                <Link href="/industries" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Healthcare &amp; Hospitals</Link>,{" "}
                <Link href="/industries" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Retail &amp; E-Commerce</Link>,{" "}
                <Link href="/industries" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>B2B Manufacturing</Link>,{" "}
                <Link href="/industries" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Fintech</Link>, and{" "}
                <Link href="/industries" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Logistics</Link>.
              </div>
              <Link
                href="/industries"
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  color: "#00488e",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <span>View Sector Specializations</span>
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Technical Specifications & Implementation Protocols */}
          <div style={{ marginTop: "3rem", background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "20px", padding: "clamp(2rem, 4vw, 3rem)" }}>
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#00488e", display: "block", marginBottom: "0.5rem" }}>
              • ARCHITECTURAL BENCHMARKS &amp; SPECIFICATIONS /
            </span>
            <h3 style={{ fontSize: "clamp(1.3rem, 2.2vw, 1.75rem)", fontWeight: 800, color: "#0a0a0a", marginBottom: "1rem" }}>
              Technical Implementation Standards for {props.title}
            </h3>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "#4a5568", maxWidth: "900px", marginBottom: "2rem" }}>
              Unlike traditional agencies that treat digital production as cosmetic styling, Qubizon treats every digital channel as a critical piece of enterprise infrastructure. Each deliverable within our {props.title} practice undergoes rigorous code-level and data-level verification before client handover.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginBottom: "2rem" }}>
              <div style={{ padding: "1.25rem", borderRadius: "12px", background: "#f8fafc", border: "1px solid #edf2f7" }}>
                <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.4rem" }}>
                  Telemetry &amp; Signal Accuracy
                </h4>
                <p style={{ fontSize: "0.85rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
                  We implement dual-tagging architectures combining client-side Google Tag Manager with server-side API webhooks. This circumvents client-side tracking loss caused by browser ad-blockers, ITP restrictions, and third-party cookie deprecation, ensuring 99.8% event fidelity into Google Analytics 4 and advertising dashboards.
                </p>
              </div>

              <div style={{ padding: "1.25rem", borderRadius: "12px", background: "#f8fafc", border: "1px solid #edf2f7" }}>
                <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.4rem" }}>
                  Automated Security &amp; Defensive Headers
                </h4>
                <p style={{ fontSize: "0.85rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
                  Every application routes traffic through strict Content Security Policy (CSP), Strict-Transport-Security (HSTS 2-year preload), X-Content-Type-Options: nosniff, and Referrer-Policy: strict-origin-when-cross-origin. We eliminate third-party script vulnerabilities and protect client brand reputation.
                </p>
              </div>

              <div style={{ padding: "1.25rem", borderRadius: "12px", background: "#f8fafc", border: "1px solid #edf2f7" }}>
                <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.4rem" }}>
                  Dynamic Knowledge Graph Modeling
                </h4>
                <p style={{ fontSize: "0.85rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
                  We engineer structured JSON-LD schemas validating entity relationships, geographic service areas, author credentials, and service capabilities. This establishes direct factual eligibility for Google Search rich snippets, AI overview citations, and conversational search engines.
                </p>
              </div>

              <div style={{ padding: "1.25rem", borderRadius: "12px", background: "#f8fafc", border: "1px solid #edf2f7" }}>
                <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.4rem" }}>
                  Regional Commercial Optimization
                </h4>
                <p style={{ fontSize: "0.85rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
                  Our architectures are pre-configured to adapt to the unique business conditions of target markets: sub-second local edge caching in the GCC (UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman), bilingual English and Arabic typographic hierarchies, and deep payment gateway integration (KNET, Mada, BenefitPay, UPI, Stripe).
                </p>
              </div>
            </div>

            <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: "1.25rem", fontSize: "0.85rem", color: "#64748b", lineHeight: 1.6 }}>
              <strong>Regional Delivery Corridors:</strong> Explore local implementation standards in{" "}
              <Link href="/locations/uae" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>UAE (Dubai &amp; Abu Dhabi)</Link>,{" "}
              <Link href="/locations/saudi-arabia" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Saudi Arabia (Riyadh &amp; Jeddah)</Link>,{" "}
              <Link href="/locations/qatar" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Qatar (Doha &amp; Lusail)</Link>,{" "}
              <Link href="/locations/kuwait" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Kuwait</Link>,{" "}
              <Link href="/locations/bahrain" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Bahrain</Link>,{" "}
              <Link href="/locations/oman" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Oman</Link>,{" "}
              <Link href="/locations/kozhikode" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Kozhikode</Link>, and{" "}
              <Link href="/locations/thrissur" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Thrissur</Link>.
            </div>
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
