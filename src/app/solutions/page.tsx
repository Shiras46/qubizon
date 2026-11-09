import type { Metadata } from "next";
import Link from "next/link";
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
} from "lucide-react";
import { constructMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/constants";
import styles from "@/components/locations/LocationPage.module.css";

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

      {/* Header */}
      <header className={styles.header}>
        <div className={styles.regionBadge}>
          <Sparkles size={15} aria-hidden="true" />
          <span>ENTERPRISE AI &bull; PLATFORM ENGINEERING &bull; AUTOMATION</span>
        </div>
        <h1 className={styles.title}>
          AI &amp; Development Solutions Engineered for Scale
        </h1>
        <p className={styles.subtitle}>
          Modern commercial enterprises demand software that automates manual workflows, converts incoming demand in seconds, and eliminates operational friction. We engineer purpose-built AI agents, WhatsApp Business ecosystems, subscription APIs, and secure SaaS applications backed by senior engineering discipline.
        </p>

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

      {/* Solutions Grid */}
      <section style={{ marginTop: "3.5rem" }}>
        <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#00488e", display: "block", marginBottom: "0.5rem" }}>
          • CORE SOLUTION CAPABILITIES /
        </span>
        <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#0a0a0a", marginBottom: "1.25rem" }}>
          Intelligent Software Platforms That Accelerate Revenue
        </h2>
        <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "#4a5568", maxWidth: "880px", marginBottom: "2.5rem" }}>
          From customer-facing generative AI tools to backend recurring billing engines, our solutions are engineered modularly to integrate into your existing tech stack without vendor lock-in.
        </p>

        <div className={styles.solutionsGrid}>
          {/* 1. AI Chatbots */}
          <div className={styles.solutionCard}>
            <Bot size={26} style={{ color: "#00488e", marginBottom: "1rem" }} aria-hidden="true" />
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem", color: "#0a0a0a" }}>
              AI Chatbot Development
            </h3>
            <p style={{ fontSize: "0.92rem", lineHeight: 1.6, color: "#4a5568", marginBottom: "1rem" }}>
              Intelligent conversational agents powered by Retrieval-Augmented Generation (RAG). Capable of answering complex customer queries, understanding industry-specific catalogs, and capturing qualified leads 24/7 across web and mobile.
            </p>
            <ul style={{ paddingLeft: "1.2rem", fontSize: "0.85rem", color: "#64748b", lineHeight: 1.6 }}>
              <li>Zero-hallucination RAG document search</li>
              <li>Multi-lingual support (English, Arabic, Hindi)</li>
              <li>Direct CRM &amp; ticketing system handoff</li>
            </ul>
          </div>

          {/* 2. AI Agents */}
          <div className={styles.solutionCard}>
            <Cpu size={26} style={{ color: "#00488e", marginBottom: "1rem" }} aria-hidden="true" />
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem", color: "#0a0a0a" }}>
              AI Agent &amp; Workflow Automation
            </h3>
            <p style={{ fontSize: "0.92rem", lineHeight: 1.6, color: "#4a5568", marginBottom: "1rem" }}>
              Autonomous software agents designed to execute multi-step operational workflows. From reading incoming supplier invoices to cross-referencing inventory levels and scheduling executive calendar slots.
            </p>
            <ul style={{ paddingLeft: "1.2rem", fontSize: "0.85rem", color: "#64748b", lineHeight: 1.6 }}>
              <li>Multi-step reasoning &amp; tool invocation</li>
              <li>Automated document OCR &amp; structured data extraction</li>
              <li>Human-in-the-loop review checkpoints</li>
            </ul>
          </div>

          {/* 3. WhatsApp Business API */}
          <div className={styles.solutionCard}>
            <MessageSquare size={26} style={{ color: "#00488e", marginBottom: "1rem" }} aria-hidden="true" />
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem", color: "#0a0a0a" }}>
              WhatsApp Business API Development
            </h3>
            <p style={{ fontSize: "0.92rem", lineHeight: 1.6, color: "#4a5568", marginBottom: "1rem" }}>
              Enterprise WhatsApp Cloud API integration connecting your marketing campaigns directly to verified business chats. Enable automated catalogs, instant appointment bookings, and unified team inbox management.
            </p>
            <ul style={{ paddingLeft: "1.2rem", fontSize: "0.85rem", color: "#64748b", lineHeight: 1.6 }}>
              <li>Meta-verified green tick onboarding assistance</li>
              <li>Click-to-WhatsApp ad conversion tracking</li>
              <li>Interactive message buttons &amp; quick-reply bots</li>
            </ul>
          </div>

          {/* 4. Subscription & Billing API */}
          <div className={styles.solutionCard}>
            <CreditCard size={26} style={{ color: "#00488e", marginBottom: "1rem" }} aria-hidden="true" />
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem", color: "#0a0a0a" }}>
              Subscription &amp; Billing API Architecture
            </h3>
            <p style={{ fontSize: "0.92rem", lineHeight: 1.6, color: "#4a5568", marginBottom: "1rem" }}>
              Custom recurring billing, proration, and subscription tier infrastructure. Engineered with tax compliance algorithms supporting ZATCA Phase 2 (Saudi Arabia), UAE FTA VAT, and Indian GST e-invoicing.
            </p>
            <ul style={{ paddingLeft: "1.2rem", fontSize: "0.85rem", color: "#64748b", lineHeight: 1.6 }}>
              <li>Multi-currency payment gateway routing</li>
              <li>Automated dunning &amp; smart retry on card failures</li>
              <li>Self-service customer invoice &amp; plan portal</li>
            </ul>
          </div>

          {/* 5. GDPR & Data Governance */}
          <div className={styles.solutionCard}>
            <ShieldCheck size={26} style={{ color: "#00488e", marginBottom: "1rem" }} aria-hidden="true" />
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem", color: "#0a0a0a" }}>
              GDPR &amp; Data Compliance Software
            </h3>
            <p style={{ fontSize: "0.92rem", lineHeight: 1.6, color: "#4a5568", marginBottom: "1rem" }}>
              Enterprise data governance engines that automate user consent tracking, cookie banner compliance, data subject access requests (DSAR), and cryptographic anonymization for European and international privacy mandates.
            </p>
            <ul style={{ paddingLeft: "1.2rem", fontSize: "0.85rem", color: "#64748b", lineHeight: 1.6 }}>
              <li>Granular consent audit logs &amp; cookie telemetry</li>
              <li>Automated right-to-erasure (RTBF) workflows</li>
              <li>Full alignment with Indian DPDP Act &amp; EU GDPR</li>
            </ul>
          </div>

          {/* 6. Digital Lease & Rental Software */}
          <div className={styles.solutionCard}>
            <Building size={26} style={{ color: "#00488e", marginBottom: "1rem" }} aria-hidden="true" />
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem", color: "#0a0a0a" }}>
              Digital Lease &amp; Rental Management
            </h3>
            <p style={{ fontSize: "0.92rem", lineHeight: 1.6, color: "#4a5568", marginBottom: "1rem" }}>
              End-to-end digital leasing platforms for commercial property developers, vehicle rental fleets, and equipment hire enterprises. Featuring digital signature workflows, automatic deposit reconciliation, and renewal reminders.
            </p>
            <ul style={{ paddingLeft: "1.2rem", fontSize: "0.85rem", color: "#64748b", lineHeight: 1.6 }}>
              <li>Online tenancy agreement &amp; document signing</li>
              <li>Real-time asset availability calendar</li>
              <li>Automated security deposit &amp; damage settlement</li>
            </ul>
          </div>

          {/* 7. WhatsApp Marketing Automation */}
          <div className={styles.solutionCard}>
            <Send size={26} style={{ color: "#00488e", marginBottom: "1rem" }} aria-hidden="true" />
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem", color: "#0a0a0a" }}>
              WhatsApp Marketing &amp; Omnichannel Campaigns
            </h3>
            <p style={{ fontSize: "0.92rem", lineHeight: 1.6, color: "#4a5568", marginBottom: "1rem" }}>
              Targeted promotional broadcast engines with 98%+ open rates. Send personalized offers, seasonal re-engagement messages, and abandoned cart alerts safely within Meta&apos;s commercial messaging policies.
            </p>
            <ul style={{ paddingLeft: "1.2rem", fontSize: "0.85rem", color: "#64748b", lineHeight: 1.6 }}>
              <li>Audience segment filtering &amp; tag clustering</li>
              <li>A/B testing for messaging templates &amp; media</li>
              <li>Live conversion attribution back to ad spend</li>
            </ul>
          </div>

          {/* 8. SaaS MVP Development */}
          <div className={styles.solutionCard}>
            <Code2 size={26} style={{ color: "#00488e", marginBottom: "1rem" }} aria-hidden="true" />
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem", color: "#0a0a0a" }}>
              Custom SaaS MVP Engineering
            </h3>
            <p style={{ fontSize: "0.92rem", lineHeight: 1.6, color: "#4a5568", marginBottom: "1rem" }}>
              Rapid 6-to-12 week full-stack product engineering sprints taking founders and corporate innovation teams from technical blueprint to market release. Engineered in Next.js 15 with scalable serverless infrastructure.
            </p>
            <ul style={{ paddingLeft: "1.2rem", fontSize: "0.85rem", color: "#64748b", lineHeight: 1.6 }}>
              <li>Production-grade auth, RBAC, and multi-tenancy</li>
              <li>Automated CI/CD pipelines on AWS and Vercel</li>
              <li>Sub-second database performance with PostgreSQL/Prisma</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Engineering Assurance & Methodology */}
      <section style={{ marginTop: "4rem", background: "#f8fafc", padding: "3rem clamp(1.5rem, 4vw, 3rem)", borderRadius: "20px", border: "1px solid #e2e8f0" }}>
        <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#00488e", display: "block", marginBottom: "0.5rem" }}>
          • ENGINEERING RIGOR /
        </span>
        <h2 style={{ fontSize: "clamp(1.6rem, 2.5vw, 2rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#0a0a0a", marginBottom: "1rem" }}>
          The Qubizon Solution Architecture Standard
        </h2>
        <p style={{ fontSize: "1rem", lineHeight: 1.65, color: "#4a5568", maxWidth: "820px", marginBottom: "2rem" }}>
          Unlike agency prototypes that fail under real commercial loads, every solution we engineer is constructed to withstand high concurrency, stringent security audits, and strict compliance scrutiny.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          <div style={{ background: "#ffffff", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <Lock size={22} style={{ color: "#00488e", marginBottom: "0.75rem" }} aria-hidden="true" />
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              Defense-in-Depth Security
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b" }}>
              Server-side input sanitization, automated SQL injection prevention, strict rate-limiting, and comprehensive HSTS headers protecting all user data channels.
            </p>
          </div>

          <div style={{ background: "#ffffff", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <Zap size={22} style={{ color: "#00488e", marginBottom: "0.75rem" }} aria-hidden="true" />
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              Sub-Second Core Web Vitals
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b" }}>
              Every interface is tuned for sub-second Largest Contentful Paint (LCP &lt; 1.0s), zero cumulative layout shifts (CLS = 0.00), and rapid touch responsiveness (INP &lt; 100ms).
            </p>
          </div>

          <div style={{ background: "#ffffff", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <Globe2 size={22} style={{ color: "#00488e", marginBottom: "0.75rem" }} aria-hidden="true" />
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              Cross-Border Sovereign Hosting
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b" }}>
              Deployments configured for in-region data residency across AWS UAE (me-central-1), AWS Bahrain (me-south-1), AWS India (ap-south-1), and EU servers matching local statutory mandates.
            </p>
          </div>
        </div>
      </section>

      {/* Enterprise SLA, Architecture & Integration Governance Framework */}
      <section style={{ marginTop: "4rem", background: "#f8fafc", padding: "3rem clamp(1.5rem, 4vw, 3rem)", borderRadius: "20px", border: "1px solid #e2e8f0" }}>
        <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#00488e", display: "block", marginBottom: "0.5rem" }}>
          • ENTERPRISE INTEGRATION BLUEPRINT /
        </span>
        <h2 style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.1rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#0a0a0a", marginBottom: "1rem" }}>
          Production Architectural Standards &amp; SLA Controls
        </h2>
        <p style={{ fontSize: "1rem", lineHeight: 1.65, color: "#4a5568", maxWidth: "860px", marginBottom: "2rem" }}>
          Every solution engineered by Qubizon is designed for high-availability enterprise environments. We build modular, API-first backends on modern serverless edge infrastructure that seamlessly integrate with your existing ERPs, legacy CRMs, and payment gateways.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: "1.5rem", marginBottom: "2.5rem" }}>
          <div style={{ background: "#ffffff", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              Event-Driven Webhook Architecture
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
              All solution integrations utilize resilient event-driven webhooks with HMAC-SHA256 signature validation and automatic exponential backoff retry algorithms. Whether processing an online lease deposit or a WhatsApp conversational lead, zero events are lost during network degradation.
            </p>
          </div>

          <div style={{ background: "#ffffff", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              Statutory E-Invoicing &amp; Tax Compliance
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
              Our billing and subscription solutions are pre-engineered to generate legally compliant tax invoices matching regional statutory requirements: ZATCA Phase 2 clearance in Saudi Arabia, UAE FTA compliant tax invoices, and Indian GST e-invoices with embedded QR validation.
            </p>
          </div>

          <div style={{ background: "#ffffff", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              Zero-Hallucination Enterprise RAG Models
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
              Our AI chatbot and agent solutions employ strict Retrieval-Augmented Generation (RAG) pipelines over verified internal knowledge bases with deterministic guardrails. Bots never speculate or hallucinate pricing, terms, or sensitive organizational policies.
            </p>
          </div>

          <div style={{ background: "#ffffff", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              Data Sovereignty &amp; Sovereign Cloud Hosting
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
              We enforce strict data residency compliance by provisioning cloud infrastructure in client-mandated geographic zones: AWS UAE (me-central-1), AWS Bahrain (me-south-1), AWS India (ap-south-1), or Frankfurt (eu-central-1) to ensure full statutory compliance.
            </p>
          </div>
        </div>

        <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: "1.5rem", fontSize: "0.88rem", color: "#64748b", lineHeight: 1.6 }}>
          <strong>Cross-Discipline Capabilities:</strong> Connect these solutions to our core practices in{" "}
          <Link href="/services/web-development" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Web Engineering</Link>,{" "}
          <Link href="/services/seo" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Technical SEO</Link>,{" "}
          <Link href="/services/paid-advertising" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Paid Advertising</Link>, and{" "}
          <Link href="/services/crm" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>CRM Systems</Link>. Explore sector implementations in{" "}
          <Link href="/industries" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Global Enterprise Industries</Link>.
        </div>
      </section>

      {/* Production Technology Stack & API Architecture Framework */}
      <section style={{ marginTop: "3.5rem", background: "#ffffff", padding: "3rem clamp(1.5rem, 4vw, 3rem)", borderRadius: "20px", border: "1px solid #e2e8f0" }}>
        <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#00488e", display: "block", marginBottom: "0.5rem" }}>
          • PRODUCTION TECHNOLOGY STACK /
        </span>
        <h2 style={{ fontSize: "clamp(1.5rem, 2.4vw, 2.1rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#0a0a0a", marginBottom: "1rem" }}>
          Modern Technology Standards &amp; Enterprise Tooling
        </h2>
        <p style={{ fontSize: "1rem", lineHeight: 1.65, color: "#4a5568", maxWidth: "860px", marginBottom: "2rem" }}>
          We build with open, modern technologies that eliminate proprietary lock-in. Every solution is engineered using modular, type-safe frameworks that scale horizontally across high-concurrency commercial environments.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: "1.5rem" }}>
          <div style={{ background: "#f8fafc", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              Next.js 15 &amp; TypeScript Runtime
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
              Strict TypeScript compiler type safety, zero client runtime bloat, and sub-second React Server Components compiled directly for global edge content delivery networks.
            </p>
          </div>

          <div style={{ background: "#f8fafc", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              PostgreSQL &amp; pgvector Semantic Search
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
              Enterprise relational persistence paired with pgvector embedding tables, enabling instant semantic document search and zero-hallucination RAG customer support automation.
            </p>
          </div>

          <div style={{ background: "#f8fafc", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              Meta WhatsApp Business Cloud API v21.0
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
              Direct integration with Meta Graph APIs, handling webhook verification, interactive message templates, catalog synchronization, and live two-way customer messaging.
            </p>
          </div>

          <div style={{ background: "#f8fafc", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              ZATCA, KNET &amp; Regional Financial Gateways
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
              Pre-configured cryptographic XML and QR generation for Saudi ZATCA Phase 2, native KNET debit switch integration in Kuwait, and BenefitPay mobile payments in Bahrain.
            </p>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section style={{ marginTop: "4rem" }}>
        <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#00488e", display: "block", marginBottom: "0.5rem" }}>
          • QUESTIONS &amp; ANSWERS /
        </span>
        <h2 style={{ fontSize: "clamp(1.6rem, 2.5vw, 2rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#0a0a0a", marginBottom: "2rem" }}>
          Frequently Asked Questions on Solution Engineering
        </h2>
        <div className={styles.faqList}>
          {SOLUTIONS_FAQS.map((faq, index) => (
            <details key={index} className={styles.faqItem}>
              <summary className={styles.faqQuestion}>
                <span>{faq.q}</span>
                <ChevronRight size={18} aria-hidden="true" />
              </summary>
              <div className={styles.faqAnswer}>
                <p>{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA Card */}
      <section style={{ marginTop: "4rem", background: "linear-gradient(135deg, #0b1530 0%, #00488e 100%)", borderRadius: "24px", padding: "clamp(2.5rem, 5vw, 4rem)", color: "#ffffff", textAlign: "center" }}>
        <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffbe0b", display: "block", marginBottom: "0.75rem" }}>
          • ARCHITECT YOUR NEXT SOLUTION WITH QUBIZON /
        </span>
        <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#ffffff", marginBottom: "1rem" }}>
          Ready to Build a High-Converting Digital Solution?
        </h2>
        <p style={{ fontSize: "1rem", color: "rgba(255, 255, 255, 0.8)", maxWidth: "720px", margin: "0 auto 2rem auto", lineHeight: 1.65 }}>
          Schedule a technical discovery session with our senior solution architects. We will inspect your system requirements, integration APIs, and deliver a transparent architectural roadmap.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="/contact?interest=solutions"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "14px 32px",
              background: "#ffbe0b",
              color: "#0a0a0a",
              fontWeight: 700,
              fontSize: "14px",
              borderRadius: "9999px",
              textDecoration: "none",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
            }}
          >
            <span>Book a Technical Discovery Call</span>
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link
            href="/work"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "14px 28px",
              background: "transparent",
              color: "#ffffff",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              fontWeight: 600,
              fontSize: "14px",
              borderRadius: "9999px",
              textDecoration: "none",
            }}
          >
            <span>Inspect Our Benchmarks</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

