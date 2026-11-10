import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Bot,
  Cpu,
  MessageSquare,
  CreditCard,
  ShieldCheck,
  Building,
  Send,
  Code2,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Zap,
  Lock,
  Globe2,
  Check,
} from "lucide-react";
import { constructMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/constants";
import styles from "@/components/solutions/SolutionsPage.module.css";

export const metadata: Metadata = constructMetadata({
  title: "AI & Development Solutions | Qubizon",
  description:
    "Enterprise AI chatbot development, agentic workflows, WhatsApp Business API integrations, custom SaaS platforms, and secure billing systems engineered by Qubizon.",
  path: "/solutions",
  keywords: [
    "AI Chatbot Development",
    "AI Agent Development",
    "WhatsApp Business API Solutions",
    "SaaS MVP Development",
    "Subscription Management API",
    "GDPR Compliance Software",
    "Digital Lease Management",
    "WhatsApp Marketing Automation",
    "Enterprise Software Solutions",
  ],
});

const SOLUTIONS_FAQS = [
  {
    q: "How does Qubizon engineer enterprise AI chatbots and agentic workflows?",
    a: "We architect multi-tiered conversational agents utilizing Retrieval-Augmented Generation (RAG) pipelines, secure vector databases, and custom guardrails. Our agentic systems integrate directly with your internal ERPs, CRMs, and customer databases to perform actions—such as appointment scheduling, invoice retrieval, and qualification triage—without hallucinations.",
  },
  {
    q: "What capabilities are included in your WhatsApp Business API integrations?",
    a: "Our WhatsApp solutions provide official Meta Cloud API connectivity, automated interactive catalog browsing, multi-agent shared team inboxes, automated template notifications for payment receipts and order status, and instant lead capture routing directly into your CRM with automated SLA escalation.",
  },
  {
    q: "Can you develop custom subscription management and billing APIs?",
    a: "Yes. We engineer recurring billing engines supporting multi-tier subscriptions, automated invoice generation with regional tax compliance (ZATCA Phase 2, UAE FTA VAT, Indian GST), automated dunning workflows for failed renewals, and seamless Stripe, KNET, and regional payment gateway orchestration.",
  },
  {
    q: "How do your solutions ensure GDPR and data privacy compliance?",
    a: "Every software application we deploy incorporates strict role-based access control (RBAC), end-to-end data encryption at rest and in transit, automatic consent management, user data deletion endpoints (Right to be Forgotten), and audit trails meeting GDPR and Indian DPDP Act requirements.",
  },
];

export default function SolutionsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_CONFIG.domain },
          { "@type": "ListItem", position: 2, name: "Solutions", item: `${SITE_CONFIG.domain}/solutions` },
        ],
      },
      {
        "@type": "Service",
        "@id": `${SITE_CONFIG.domain}/solutions#service`,
        name: "Enterprise AI & Custom Development Solutions",
        provider: { "@id": `${SITE_CONFIG.domain}/#organization` },
        serviceType: "AI Automation, Agentic Workflows, WhatsApp API, SaaS MVP Development",
        description:
          "Full-stack AI automation, intelligent agent development, WhatsApp Business API integrations, and scalable enterprise software solutions.",
      },
      {
        "@type": "FAQPage",
        mainEntity: SOLUTIONS_FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    ],
  };

  return (
    <div className={styles.container}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
        <ol>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li aria-current="page">
            <ChevronRight size={14} aria-hidden="true" />
            <span>AI &amp; Development Solutions</span>
          </li>
        </ol>
      </nav>

      {/* Header: Modern Split Architecture (Image 2 & 3 Inspiration) */}
      <header className={styles.header}>
        <div className={styles.headerSplit}>
          <div className={styles.headerLeft}>
            <div className={styles.regionBadge}>
              <Sparkles size={14} aria-hidden="true" />
              <span>ENTERPRISE AI &bull; PLATFORM ENGINEERING &bull; AUTOMATION</span>
            </div>
            <h1 className={styles.title}>
              AI &amp; Development Solutions Engineered for Scale
            </h1>
            <p className={styles.subtitle}>
              Modern commercial enterprises demand software that automates manual workflows, converts incoming demand in seconds, and eliminates operational friction. We engineer purpose-built AI agents, WhatsApp Business ecosystems, subscription APIs, and secure SaaS applications backed by senior engineering discipline.
            </p>

            <div className={styles.headerActions}>
              <Link href="/contact?interest=solutions" className={styles.btnPill}>
                <span>Book a Technical Discovery Call</span>
                <ArrowRight size={13} aria-hidden="true" />
              </Link>
              <div className={styles.trustIndicators}>
                <span className={styles.trustItem}>
                  <Check size={14} className={styles.trustIcon} aria-hidden="true" />
                  <span>Sub-Second Response</span>
                </span>
                <span className={styles.trustItem}>
                  <Check size={14} className={styles.trustIcon} aria-hidden="true" />
                  <span>Meta-Verified Cloud API</span>
                </span>
              </div>
            </div>
          </div>

          <div className={styles.headerRight}>
            <div className={styles.visualFrame}>
              <div className={styles.floatingBadge}>
                <span className={styles.emeraldPulse} />
                <span>ENTERPRISE PLATFORM NODE / HIGH-CONCURRENCY</span>
              </div>
              <Image
                src="/hero-collaboration.jpg"
                alt="Qubizon enterprise platform engineering and AI solution architecture"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className={styles.visualImage}
              />
            </div>
          </div>
        </div>

        {/* Bottom Proof Strip (Image 3 Inspiration) */}
        <div className={styles.statsStrip}>
          <div className={styles.statCard}>
            <span className={styles.statValue}>Sub-Second</span>
            <span className={styles.statLabel}>AI Agent &amp; Chatbot Response</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statValue}>100%</span>
            <span className={styles.statLabel}>First-Party Code Ownership</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statValue}>Meta-Verified</span>
            <span className={styles.statLabel}>Official WhatsApp Cloud API</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statValue}>A+ Security</span>
            <span className={styles.statLabel}>Strict GDPR &amp; HSTS Compliance</span>
          </div>
        </div>
      </header>

      {/* Solutions Grid (Image 4 Inspiration: Modern 3-Column Cards) */}
      <section className={styles.solutionsSection}>
        <span className={styles.sectionBadge}>
          • CORE SOLUTION CAPABILITIES /
        </span>
        <h2 className={styles.sectionTitle}>
          Intelligent Software Platforms That Accelerate Revenue
        </h2>
        <p className={styles.sectionLead}>
          From customer-facing generative AI tools to backend recurring billing engines, our solutions are engineered modularly to integrate into your existing tech stack without vendor lock-in.
        </p>

        <div className={styles.solutionsGrid}>
          {/* 1. AI Chatbots */}
          <div className={styles.solutionCard}>
            <div>
              <div className={styles.cardIconWrapper}>
                <Bot size={22} aria-hidden="true" />
              </div>
              <h3 className={styles.cardTitle}>
                AI Chatbot Development
              </h3>
              <p className={styles.cardLead}>
                Intelligent conversational agents powered by Retrieval-Augmented Generation (RAG). Capable of answering complex customer queries, understanding industry-specific catalogs, and capturing qualified leads 24/7 across web and mobile.
              </p>
              <ul className={styles.cardBulletList}>
                <li className={styles.cardBulletItem}>Zero-hallucination RAG document search</li>
                <li className={styles.cardBulletItem}>Multi-lingual support (English, Arabic, Hindi)</li>
                <li className={styles.cardBulletItem}>Direct CRM &amp; ticketing system handoff</li>
              </ul>
            </div>
            <Link href="/contact?interest=ai-chatbot" className={styles.cardFooterLink}>
              <span>Explore AI Chatbot Solutions</span>
              <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>

          {/* 2. AI Agents */}
          <div className={styles.solutionCard}>
            <div>
              <div className={styles.cardIconWrapper}>
                <Cpu size={22} aria-hidden="true" />
              </div>
              <h3 className={styles.cardTitle}>
                AI Agent &amp; Workflow Automation
              </h3>
              <p className={styles.cardLead}>
                Autonomous software agents designed to execute multi-step operational workflows. From reading incoming supplier invoices to cross-referencing inventory levels and scheduling executive calendar slots.
              </p>
              <ul className={styles.cardBulletList}>
                <li className={styles.cardBulletItem}>Multi-step reasoning &amp; tool invocation</li>
                <li className={styles.cardBulletItem}>Automated document OCR &amp; structured data extraction</li>
                <li className={styles.cardBulletItem}>Human-in-the-loop review checkpoints</li>
              </ul>
            </div>
            <Link href="/contact?interest=ai-agents" className={styles.cardFooterLink}>
              <span>Explore AI Agent Systems</span>
              <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>

          {/* 3. WhatsApp Business API */}
          <div className={styles.solutionCard}>
            <div>
              <div className={styles.cardIconWrapper}>
                <MessageSquare size={22} aria-hidden="true" />
              </div>
              <h3 className={styles.cardTitle}>
                WhatsApp Business API Development
              </h3>
              <p className={styles.cardLead}>
                Enterprise WhatsApp Cloud API integration connecting your marketing campaigns directly to verified business chats. Enable automated catalogs, instant appointment bookings, and unified team inbox management.
              </p>
              <ul className={styles.cardBulletList}>
                <li className={styles.cardBulletItem}>Meta-verified green tick onboarding assistance</li>
                <li className={styles.cardBulletItem}>Click-to-WhatsApp ad conversion tracking</li>
                <li className={styles.cardBulletItem}>Interactive message buttons &amp; quick-reply bots</li>
              </ul>
            </div>
            <Link href="/contact?interest=whatsapp-api" className={styles.cardFooterLink}>
              <span>Explore WhatsApp API Integrations</span>
              <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>

          {/* 4. Subscription & Billing API */}
          <div className={styles.solutionCard}>
            <div>
              <div className={styles.cardIconWrapper}>
                <CreditCard size={22} aria-hidden="true" />
              </div>
              <h3 className={styles.cardTitle}>
                Subscription &amp; Billing API Architecture
              </h3>
              <p className={styles.cardLead}>
                Custom recurring billing, proration, and subscription tier infrastructure. Engineered with tax compliance algorithms supporting ZATCA Phase 2 (Saudi Arabia), UAE FTA VAT, and Indian GST e-invoicing.
              </p>
              <ul className={styles.cardBulletList}>
                <li className={styles.cardBulletItem}>Multi-currency payment gateway routing</li>
                <li className={styles.cardBulletItem}>Automated dunning &amp; smart retry on card failures</li>
                <li className={styles.cardBulletItem}>Self-service customer invoice &amp; plan portal</li>
              </ul>
            </div>
            <Link href="/contact?interest=billing-api" className={styles.cardFooterLink}>
              <span>Explore Billing Infrastructure</span>
              <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>

          {/* 5. GDPR & Data Governance */}
          <div className={styles.solutionCard}>
            <div>
              <div className={styles.cardIconWrapper}>
                <ShieldCheck size={22} aria-hidden="true" />
              </div>
              <h3 className={styles.cardTitle}>
                GDPR &amp; Data Compliance Software
              </h3>
              <p className={styles.cardLead}>
                Enterprise data governance engines that automate user consent tracking, cookie banner compliance, data subject access requests (DSAR), and cryptographic anonymization for European and international privacy mandates.
              </p>
              <ul className={styles.cardBulletList}>
                <li className={styles.cardBulletItem}>Granular consent audit logs &amp; cookie telemetry</li>
                <li className={styles.cardBulletItem}>Automated right-to-erasure (RTBF) workflows</li>
                <li className={styles.cardBulletItem}>Full alignment with Indian DPDP Act &amp; EU GDPR</li>
              </ul>
            </div>
            <Link href="/contact?interest=gdpr-compliance" className={styles.cardFooterLink}>
              <span>Explore Compliance Frameworks</span>
              <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>

          {/* 6. Digital Lease & Rental Software */}
          <div className={styles.solutionCard}>
            <div>
              <div className={styles.cardIconWrapper}>
                <Building size={22} aria-hidden="true" />
              </div>
              <h3 className={styles.cardTitle}>
                Digital Lease &amp; Rental Management
              </h3>
              <p className={styles.cardLead}>
                End-to-end digital leasing platforms for commercial property developers, vehicle rental fleets, and equipment hire enterprises. Featuring digital signature workflows, automatic deposit reconciliation, and renewal reminders.
              </p>
              <ul className={styles.cardBulletList}>
                <li className={styles.cardBulletItem}>Online tenancy agreement &amp; document signing</li>
                <li className={styles.cardBulletItem}>Real-time asset availability calendar</li>
                <li className={styles.cardBulletItem}>Automated security deposit &amp; damage settlement</li>
              </ul>
            </div>
            <Link href="/contact?interest=lease-software" className={styles.cardFooterLink}>
              <span>Explore Rental &amp; Lease Solutions</span>
              <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>

          {/* 7. WhatsApp Marketing Automation */}
          <div className={styles.solutionCard}>
            <div>
              <div className={styles.cardIconWrapper}>
                <Send size={22} aria-hidden="true" />
              </div>
              <h3 className={styles.cardTitle}>
                WhatsApp Marketing &amp; Omnichannel Campaigns
              </h3>
              <p className={styles.cardLead}>
                Targeted promotional broadcast engines with 98%+ open rates. Send personalized offers, seasonal re-engagement messages, and abandoned cart alerts safely within Meta&apos;s commercial messaging policies.
              </p>
              <ul className={styles.cardBulletList}>
                <li className={styles.cardBulletItem}>Audience segment filtering &amp; tag clustering</li>
                <li className={styles.cardBulletItem}>A/B testing for messaging templates &amp; media</li>
                <li className={styles.cardBulletItem}>Live conversion attribution back to ad spend</li>
              </ul>
            </div>
            <Link href="/contact?interest=whatsapp-marketing" className={styles.cardFooterLink}>
              <span>Explore Broadcast Automation</span>
              <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>

          {/* 8. SaaS MVP Development */}
          <div className={styles.solutionCard}>
            <div>
              <div className={styles.cardIconWrapper}>
                <Code2 size={22} aria-hidden="true" />
              </div>
              <h3 className={styles.cardTitle}>
                Custom SaaS MVP Engineering
              </h3>
              <p className={styles.cardLead}>
                Rapid 6-to-12 week full-stack product engineering sprints taking founders and corporate innovation teams from technical blueprint to market release. Engineered in Next.js 15 with scalable serverless infrastructure.
              </p>
              <ul className={styles.cardBulletList}>
                <li className={styles.cardBulletItem}>Production-grade auth, RBAC, and multi-tenancy</li>
                <li className={styles.cardBulletItem}>Automated CI/CD pipelines on AWS and Vercel</li>
                <li className={styles.cardBulletItem}>Sub-second database performance with PostgreSQL/Prisma</li>
              </ul>
            </div>
            <Link href="/contact?interest=saas-mvp" className={styles.cardFooterLink}>
              <span>Explore MVP Engineering</span>
              <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Engineering Rigor: Modern Vision & Mission Style Cards (Image 1 Inspiration) */}
      <section className={styles.integrationSection}>
        <span className={styles.sectionBadge}>
          • ENGINEERING RIGOR &amp; GOVERNANCE /
        </span>
        <h2 className={styles.sectionTitle}>
          The Qubizon Solution Architecture Standard
        </h2>
        <p className={styles.sectionLead}>
          Unlike agency prototypes that fail under real commercial loads, every solution we engineer is constructed to withstand high concurrency, stringent security audits, and strict compliance scrutiny.
        </p>

        <div className={styles.integrationGrid}>
          <div className={styles.integrationCard}>
            <div className={styles.cardIconWrapper}>
              <Lock size={22} aria-hidden="true" />
            </div>
            <h3>Defense-in-Depth Security</h3>
            <p>
              Server-side input sanitization, automated SQL injection prevention, strict rate-limiting, and comprehensive HSTS headers protecting all user data channels.
            </p>
            <Link href="/contact?interest=security-audit">
              <span>Inspect Security Protocols</span>
              <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>

          <div className={styles.integrationCard}>
            <div className={styles.cardIconWrapper}>
              <Zap size={22} aria-hidden="true" />
            </div>
            <h3>Sub-Second Core Web Vitals</h3>
            <p>
              Every interface is tuned for sub-second Largest Contentful Paint (LCP &lt; 1.0s), zero cumulative layout shifts (CLS = 0.00), and rapid touch responsiveness (INP &lt; 100ms).
            </p>
            <Link href="/contact?interest=cwv-optimization">
              <span>Inspect Performance Gates</span>
              <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>

          <div className={styles.integrationCard}>
            <div className={styles.cardIconWrapper}>
              <Globe2 size={22} aria-hidden="true" />
            </div>
            <h3>Cross-Border Sovereign Hosting</h3>
            <p>
              Deployments configured for in-region data residency across AWS UAE (me-central-1), AWS Bahrain (me-south-1), AWS India (ap-south-1), and EU servers matching local statutory mandates.
            </p>
            <Link href="/contact?interest=cloud-residency">
              <span>Inspect Cloud Residency</span>
              <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>

          <div className={styles.integrationCard}>
            <div className={styles.cardIconWrapper}>
              <Code2 size={22} aria-hidden="true" />
            </div>
            <h3>Event-Driven Webhook Architecture</h3>
            <p>
              All solution integrations utilize resilient event-driven webhooks with HMAC-SHA256 signature validation and automatic exponential backoff retry algorithms to guarantee zero dropped transactions.
            </p>
            <Link href="/contact?interest=api-integration">
              <span>Inspect Webhook Architecture</span>
              <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Production Technology Stack & API Architecture Framework */}
      <section className={styles.integrationSection}>
        <span className={styles.sectionBadge}>
          • PRODUCTION TECHNOLOGY STACK /
        </span>
        <h2 className={styles.sectionTitle}>
          Modern Technology Standards &amp; Enterprise Tooling
        </h2>
        <p className={styles.sectionLead}>
          We build with open, modern technologies that eliminate proprietary lock-in. Every solution is engineered using modular, type-safe frameworks that scale horizontally across high-concurrency commercial environments.
        </p>

        <div className={styles.integrationGrid}>
          <div className={styles.integrationCard}>
            <h3>Next.js 15 &amp; TypeScript Runtime</h3>
            <p>
              Strict TypeScript compiler type safety, zero client runtime bloat, and sub-second React Server Components compiled directly for global edge content delivery networks.
            </p>
            <Link href="/services/web-development">
              <span>Explore Web Architecture</span>
              <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>

          <div className={styles.integrationCard}>
            <h3>PostgreSQL &amp; pgvector Semantic Search</h3>
            <p>
              Enterprise relational persistence paired with pgvector embedding tables, enabling instant semantic document search and zero-hallucination RAG customer support automation.
            </p>
            <Link href="/contact?interest=pgvector">
              <span>Explore Vector Databases</span>
              <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>

          <div className={styles.integrationCard}>
            <h3>Meta WhatsApp Business Cloud API v21.0</h3>
            <p>
              Direct integration with Meta Graph APIs, handling webhook verification, interactive message templates, catalog synchronization, and live two-way customer messaging.
            </p>
            <Link href="/contact?interest=whatsapp-cloud-api">
              <span>Explore WhatsApp API</span>
              <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>

          <div className={styles.integrationCard}>
            <h3>ZATCA, KNET &amp; Regional Financial Gateways</h3>
            <p>
              Pre-configured cryptographic XML and QR generation for Saudi ZATCA Phase 2, native KNET debit switch integration in Kuwait, and BenefitPay mobile payments in Bahrain.
            </p>
            <Link href="/contact?interest=regional-gateways">
              <span>Explore Payment APIs</span>
              <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className={styles.faqsSection}>
        <span className={styles.sectionBadge}>
          • QUESTIONS &amp; ANSWERS /
        </span>
        <h2 className={styles.sectionTitle}>
          Frequently Asked Questions on Solution Engineering
        </h2>
        <div className={styles.faqGrid}>
          {SOLUTIONS_FAQS.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>{faq.q}</h3>
              <p className={styles.faqAnswer}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Card (Obsidian Editorial Stage) */}
      <section className={styles.ctaBanner}>
        <span className={styles.sectionBadge} style={{ background: "rgba(255, 190, 11, 0.12)", color: "#FFBE0B", borderColor: "rgba(255, 190, 11, 0.28)" }}>
          • ARCHITECT YOUR NEXT SOLUTION WITH QUBIZON /
        </span>
        <h2 className={styles.ctaTitle}>
          Ready to Build a High-Converting Digital Solution?
        </h2>
        <p className={styles.ctaSubtitle}>
          Schedule a technical discovery session with our senior solution architects. We will inspect your system requirements, integration APIs, and deliver a transparent architectural roadmap.
        </p>
        <div className={styles.ctaActions} style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/contact?interest=solutions" className={styles.ctaBtn}>
            <span>Book a Technical Discovery Call</span>
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
          <Link href="/work" className={styles.ctaBtn} style={{ background: "transparent", color: "#f9efe7", border: "1px solid rgba(249, 239, 231, 0.25)" }}>
            <span>Inspect Our Benchmarks</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
