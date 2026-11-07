import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  Mail,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Clock,
  Sparkles,
} from "lucide-react";
import { constructMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/constants";
import { ContactForm } from "@/components/contact/ContactForm";
import styles from "@/components/contact/ContactPage.module.css";

export const metadata: Metadata = constructMetadata({
  title: "Contact & Project Consultation",
  description:
    "Schedule a confidential technical discovery session with Qubizon Digital Solutions. Discuss Next.js web development, technical SEO, social media, paid ads, or content strategy.",
  path: "/contact",
});

const CONTACT_FAQS = [
  {
    question: "What happens after I submit this enquiry?",
    answer:
      "Your project summary is securely reviewed directly by our senior engineers and digital strategists. Within one to two business days, a practitioner will respond via email with initial feasibility observations and an invitation to schedule an architectural discovery call.",
  },
  {
    question: "Do you sign non-disclosure agreements (NDAs) prior to detailed discovery?",
    answer:
      "Yes. We regularly execute standard mutual non-disclosure agreements before reviewing proprietary codebases, analytics records, or product roadmaps. Confidentiality is an absolute foundation of our agency practice.",
  },
  {
    question: "Can we engage Qubizon for a single discipline (e.g. only Technical SEO or Next.js development)?",
    answer:
      "Absolutely. While our integrated cube model offers maximum velocity when disciplines are synchronized, many client partnerships begin with a focused engagement—such as a Core Web Vitals remediation sprint or a technical SEO overhaul—and expand as needed.",
  },
  {
    question: "How do you structure client onboarding and code ownership?",
    answer:
      "You retain 100% ownership of all code repositories, database schemas, ad accounts, and creative assets from day one. We commit directly to your Git repositories with clean documentation and zero proprietary vendor lock-in.",
  },
  {
    question: "What is your typical project kickoff timeline once scope is approved?",
    answer:
      "Following statement of work (SOW) confirmation and mutual access setup (repository, analytics, ad manager), our sprint zero begins within three to five business days. We operate in clear two-week agile development cycles with measurable deliverables submitted at each milestone.",
  },
  {
    question: "Do you offer post-launch technical maintenance and SLA support?",
    answer:
      "Yes. Every production web application we engineer includes a post-launch warranty period followed by optional continuous SLA retainers covering Core Web Vitals monitoring, security dependency patches, Next.js framework upgrades, and proactive SEO crawl maintenance.",
  },
  {
    question: "How do you handle communications and sprint reviews with distributed teams?",
    answer:
      "We provide direct practitioner access through shared dedicated Slack or WhatsApp workspaces, weekly video standups, and bi-weekly sprint demonstration calls with shared Git commit logs—ensuring complete transparency without bureaucratic account coordination.",
  },
];

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_CONFIG.domain,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Contact & Consultation",
            item: `${SITE_CONFIG.domain}/contact`,
          },
        ],
      },
      {
        "@type": "ContactPage",
        "@id": `${SITE_CONFIG.domain}/contact#webpage`,
        url: `${SITE_CONFIG.domain}/contact`,
        name: "Contact Qubizon Digital Solutions",
        description:
          "Get in touch with the Qubizon Digital Solutions engineering and strategy team to discuss your project.",
        isPartOf: {
          "@type": "WebSite",
          "@id": `${SITE_CONFIG.domain}/#website`,
          name: SITE_CONFIG.name,
          url: SITE_CONFIG.domain,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: CONTACT_FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <main id="main-content" className={styles.mainContainer}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb Navigation */}
      <div className="container">
        <nav aria-label="Breadcrumb" className={styles.breadcrumbNav}>
          <ol className={styles.breadcrumbList}>
            <li className={styles.breadcrumbItem}>
              <Link href="/" className={styles.breadcrumbLink}>
                Home
              </Link>
              <ChevronRight size={14} className={styles.breadcrumbSeparator} aria-hidden="true" />
            </li>
            <li className={styles.breadcrumbItem}>
              <span className={styles.breadcrumbCurrent} aria-current="page">
                Contact & Consultation
              </span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Hero Section */}
      <section className={styles.heroSection} aria-labelledby="contact-hero-heading">
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.badge}>
              <ShieldCheck size={14} aria-hidden="true" />
              Confidential Discovery & Consultation
            </span>
            <h1 id="contact-hero-heading" className={styles.heroTitle}>
              Let&apos;s Build a <span className="calligraphy">High-Performance</span> Digital Engine
            </h1>
            <p className={styles.heroLead}>
              We partner with organizations seeking a unified, disciplined agency partner across
              web architecture, technical search, paid acquisition, social growth, and editorial strategy.
              Complete our structured enquiry form below or email us directly.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="container">
        <div className={styles.layoutGrid}>
          {/* Form Column */}
          <div>
            <ContactForm />
          </div>

          {/* Sidebar Column */}
          <aside className={styles.sidebar} aria-label="Direct Inquiries and Commitments">
            <div className={styles.sidebarCard}>
              <p className={styles.sidebarBadge}>Direct Communication</p>
              <h2 className={styles.sidebarTitle}>Direct Practitioner Contact</h2>
              <p className={styles.sidebarText}>
                Prefer to connect directly with our engineering and strategy leadership? Reach out via phone or email:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", marginBottom: "var(--space-4)" }}>
                <a href={`mailto:${SITE_CONFIG.email}`} className={styles.contactEmailLink}>
                  <Mail size={18} aria-hidden="true" />
                  <span>{SITE_CONFIG.email}</span>
                </a>
                <a href={`tel:${SITE_CONFIG.phoneTel}`} className={styles.contactEmailLink}>
                  <Phone size={18} aria-hidden="true" />
                  <span>{SITE_CONFIG.phone}</span>
                </a>
              </div>

              <p className={styles.sidebarBadge} style={{ marginTop: "var(--space-4)" }}>Official Channels</p>
              <div style={{ display: "flex", gap: "var(--space-3)", marginTop: "var(--space-2)" }}>
                <a
                  href={SITE_CONFIG.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "var(--font-size-xs)", fontWeight: 600, color: "var(--brand-blue)", textDecoration: "underline" }}
                  aria-label="Qubizon Digital Solutions on LinkedIn"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
                <a
                  href={SITE_CONFIG.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "var(--font-size-xs)", fontWeight: 600, color: "var(--brand-blue)", textDecoration: "underline" }}
                  aria-label="Qubizon on Instagram"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                  <span>Instagram</span>
                </a>
              </div>
            </div>

            <div className={styles.sidebarCard}>
              <p className={styles.sidebarBadge}>Engagement Commitments</p>
              <h2 className={styles.sidebarTitle}>What You Can Expect</h2>
              <ul className={styles.commitmentsList}>
                <li className={styles.commitmentItem}>
                  <CheckCircle2 size={16} className={styles.checkIcon} aria-hidden="true" />
                  <span>
                    <strong>Direct Practitioner Access:</strong> Communicate with the developers and
                    strategists handling your account.
                  </span>
                </li>
                <li className={styles.commitmentItem}>
                  <CheckCircle2 size={16} className={styles.checkIcon} aria-hidden="true" />
                  <span>
                    <strong>Mutual NDA Protection:</strong> We protect your proprietary data, code,
                    and strategy under mutual confidentiality.
                  </span>
                </li>
                <li className={styles.commitmentItem}>
                  <CheckCircle2 size={16} className={styles.checkIcon} aria-hidden="true" />
                  <span>
                    <strong>100% Client Ownership:</strong> Full ownership of all code, assets, and
                    ad accounts from day one.
                  </span>
                </li>
                <li className={styles.commitmentItem}>
                  <CheckCircle2 size={16} className={styles.checkIcon} aria-hidden="true" />
                  <span>
                    <strong>Zero High-Pressure Sales:</strong> Transparent feasibility and engineering
                    evaluations only.
                  </span>
                </li>
              </ul>
            </div>
          </aside>
        </div>

        {/* Architectural Discovery & Project Evaluation Roadmap */}
        <section style={{ marginTop: "4rem", marginBottom: "3rem", background: "rgba(255, 255, 255, 0.85)", border: "1px solid rgba(0, 0, 0, 0.08)", borderRadius: "24px", padding: "clamp(2rem, 4vw, 3.5rem)" }}>
          <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 2.5rem auto" }}>
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--brand-blue, #00488e)", display: "block", marginBottom: "0.5rem" }}>
              • ENGAGEMENT PROTOCOL /
            </span>
            <h2 style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.3rem)", fontWeight: 800, color: "var(--clr-foreground, #0a0a0a)", letterSpacing: "-0.02em", marginBottom: "1rem" }}>
              What Happens During Your Discovery Session
            </h2>
            <p style={{ fontSize: "0.975rem", color: "var(--color-text-secondary, #64748b)", lineHeight: 1.65 }}>
              We do not believe in superficial sales pitches or high-pressure commitments. Every consultation is conducted by senior software engineers and growth marketing leads focused on technical viability.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.06)", borderRadius: "16px", padding: "1.5rem" }}>
              <span style={{ fontSize: "12px", fontWeight: 800, color: "var(--brand-blue, #00488e)", display: "block", marginBottom: "0.5rem" }}>PHASE 01</span>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#0a0a0a" }}>Infrastructure Review</h3>
              <p style={{ fontSize: "0.9rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
                We inspect your existing domain architecture, Core Web Vitals profiling, mobile Largest Contentful Paint (LCP), and current CMS dependencies.
              </p>
            </div>

            <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.06)", borderRadius: "16px", padding: "1.5rem" }}>
              <span style={{ fontSize: "12px", fontWeight: 800, color: "var(--brand-blue, #00488e)", display: "block", marginBottom: "0.5rem" }}>PHASE 02</span>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#0a0a0a" }}>Crawl &amp; Schema Audit</h3>
              <p style={{ fontSize: "0.9rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
                We assess your Google Search Console indexation health, XML sitemap configuration, canonical integrity, and regional keyword competition in Kerala and GCC markets.
              </p>
            </div>

            <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.06)", borderRadius: "16px", padding: "1.5rem" }}>
              <span style={{ fontSize: "12px", fontWeight: 800, color: "var(--brand-blue, #00488e)", display: "block", marginBottom: "0.5rem" }}>PHASE 03</span>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#0a0a0a" }}>Funnel &amp; CRM Diagnosis</h3>
              <p style={{ fontSize: "0.9rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
                We evaluate paid traffic bounce rates, lead capture form friction, server-side tracking integrity, and operational CRM follow-up latency.
              </p>
            </div>

            <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.06)", borderRadius: "16px", padding: "1.5rem" }}>
              <span style={{ fontSize: "12px", fontWeight: 800, color: "var(--brand-blue, #00488e)", display: "block", marginBottom: "0.5rem" }}>PHASE 04</span>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#0a0a0a" }}>Architectural Blueprint</h3>
              <p style={{ fontSize: "0.9rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
                You receive a documented implementation roadmap with milestone definitions, transparent engineering timelines, and clear commercial pricing.
              </p>
            </div>
          </div>
        </section>

        {/* Consultation FAQs */}
        <section className={styles.faqSection} aria-labelledby="contact-faq-heading">
          <div className={styles.faqHeader}>
            <p className={styles.sidebarBadge}>Common Questions</p>
            <h2 id="contact-faq-heading" className={styles.faqTitle}>
              Consultation & Engagement FAQs
            </h2>
          </div>

          <div className={styles.faqList}>
            {CONTACT_FAQS.map((faq, idx) => (
              <details key={idx} className={styles.faqItem}>
                <summary className={styles.faqSummary}>
                  <span>{faq.question}</span>
                  <ChevronRight size={18} aria-hidden="true" />
                </summary>
                <div className={styles.faqAnswer}>
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
