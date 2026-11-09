import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ShieldCheck, Mail, Lock } from "lucide-react";
import { constructMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = constructMetadata({
  title: "Privacy & Data Handling Policy",
  description:
    "Transparent data handling, retention policies, and security practices for Qubizon Digital Solutions.",
  path: "/privacy",
});

export default function PrivacyPage() {
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
            name: "Privacy Policy",
            item: `${SITE_CONFIG.domain}/privacy`,
          },
        ],
      },
    ],
  };

  return (
    <main id="main-content" className="container" style={{ padding: "var(--space-16) var(--container-padding) var(--space-24)", maxWidth: "880px" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" style={{ marginBottom: "var(--space-8)" }}>
        <ol style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", listStyle: "none", fontSize: "var(--font-size-xs)", color: "var(--color-text-secondary)" }}>
          <li>
            <Link href="/" style={{ color: "var(--color-text-secondary)", textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li>
            <ChevronRight size={14} style={{ color: "var(--color-text-muted)" }} aria-hidden="true" />
          </li>
          <li>
            <span style={{ color: "var(--brand-blue)", fontWeight: "var(--font-weight-semibold)" }} aria-current="page">
              Privacy Policy
            </span>
          </li>
        </ol>
      </nav>

      <div style={{
        background: "rgba(255, 255, 255, 0.78)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        border: "1px solid rgba(0, 0, 0, 0.1)",
        borderRadius: "28px",
        padding: "clamp(2rem, 5vw, 3.5rem)",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)"
      }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: "var(--space-2)", padding: "6px 16px", backgroundColor: "rgba(255, 255, 255, 0.85)", backdropFilter: "blur(8px)", color: "var(--brand-blue)", fontSize: "var(--font-size-xs)", fontWeight: "var(--font-weight-semibold)", borderRadius: "var(--radius-full)", textTransform: "uppercase", letterSpacing: "var(--letter-spacing-caps)", marginBottom: "var(--space-6)", border: "1px solid rgba(0, 72, 142, 0.14)" }}>
          <ShieldCheck size={14} aria-hidden="true" />
          Transparent Governance
        </span>

        <h1 style={{ fontSize: "clamp(2.2rem, 3.5vw, 3.2rem)", fontWeight: 800, color: "var(--color-text-primary)", letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: "var(--space-4)" }}>
          Privacy & <span className="calligraphy">Data Governance</span>
        </h1>
        <p style={{ fontSize: "var(--font-size-base)", color: "var(--color-text-secondary)", lineHeight: "var(--line-height-relaxed)", marginBottom: "var(--space-10)" }}>
          Last updated: October 2026. This policy describes how {SITE_CONFIG.name} (&quot;Qubizon&quot;, &quot;we&quot;, &quot;our&quot;)
          collects, processes, and protects information submitted through our website ({SITE_CONFIG.domain}).
        </p>

        <section style={{ marginBottom: "var(--space-10)" }}>
          <h2 style={{ fontSize: "var(--font-size-xl)", fontWeight: 700, color: "var(--color-text-primary)", letterSpacing: "-0.01em", marginBottom: "var(--space-3)" }}>
            1. Information We Collect
          </h2>
          <p style={{ fontSize: "var(--font-size-sm)", color: "var(--color-text-secondary)", lineHeight: "var(--line-height-relaxed)", marginBottom: "var(--space-4)" }}>
            We collect only the business information voluntarily provided when you submit an enquiry through our contact form:
          </p>
          <ul style={{ paddingLeft: "var(--space-6)", fontSize: "var(--font-size-sm)", color: "var(--color-text-secondary)", lineHeight: "var(--line-height-relaxed)", display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
            <li>
              <strong>Project Overview:</strong> Desired discipline (e.g. Web Development, SEO, Paid Advertising), optional project or brand name, optional current website address, and a brief description of your project objectives.
            </li>
            <li>
              <strong>Contact Details:</strong> Your full name, business email address, and optional phone number and company name.
            </li>
            <li>
              <strong>Project Scope:</strong> Optional estimated budget range and target implementation timeframe.
            </li>
            <li>
              <strong>Anti-Abuse Technical Data:</strong> When submitting an enquiry, we generate a privacy-preserving SHA-256 hash of your network IP address combined with an internal salt. We do not store raw IP addresses in our application database or application logs.
            </li>
          </ul>
        </section>

        <section style={{ marginBottom: "var(--space-10)" }}>
          <h2 style={{ fontSize: "var(--font-size-xl)", fontWeight: 700, color: "var(--color-text-primary)", letterSpacing: "-0.01em", marginBottom: "var(--space-3)" }}>
            2. Purpose of Processing
          </h2>
          <p style={{ fontSize: "var(--font-size-sm)", color: "var(--color-text-secondary)", lineHeight: "var(--line-height-relaxed)", marginBottom: "var(--space-4)" }}>
            We process submitted information strictly for legitimate commercial business purposes:
          </p>
          <ul style={{ paddingLeft: "var(--space-6)", fontSize: "var(--font-size-sm)", color: "var(--color-text-secondary)", lineHeight: "var(--line-height-relaxed)", display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
            <li>Evaluating the technical and strategic feasibility of your requested project.</li>
            <li>Communicating directly with you to schedule discovery calls and provide proposals.</li>
            <li>Protecting our public endpoints against automated denial-of-service and form-spam attacks.</li>
          </ul>
        </section>

        <section style={{ marginBottom: "var(--space-10)" }}>
          <h2 style={{ fontSize: "var(--font-size-xl)", fontWeight: 700, color: "var(--color-text-primary)", letterSpacing: "-0.01em", marginBottom: "var(--space-3)" }}>
            3. Recipients & Third-Party Disclosure
          </h2>
          <p style={{ fontSize: "var(--font-size-sm)", color: "var(--color-text-secondary)", lineHeight: "var(--line-height-relaxed)", marginBottom: "var(--space-4)" }}>
            We never sell, rent, trade, or lease personal or client data to data brokers or third-party advertisers. Information submitted is accessible solely to authorized internal Qubizon team members and leadership responsible for project scoping and execution.
          </p>
          <p style={{ fontSize: "var(--font-size-sm)", color: "var(--color-text-secondary)", lineHeight: "var(--line-height-relaxed)" }}>
            Internal email notifications are delivered over encrypted TLS connections directly to our company inbox (<code>{SITE_CONFIG.email}</code>).
          </p>
        </section>

        <section style={{ marginBottom: "var(--space-10)" }}>
          <h2 style={{ fontSize: "var(--font-size-xl)", fontWeight: 700, color: "var(--color-text-primary)", letterSpacing: "-0.01em", marginBottom: "var(--space-3)" }}>
            4. Data Storage, Security & Retention
          </h2>
          <p style={{ fontSize: "var(--font-size-sm)", color: "var(--color-text-secondary)", lineHeight: "var(--line-height-relaxed)", marginBottom: "var(--space-4)" }}>
            Enquiry records are stored in secure, server-isolated database infrastructure with access controls and parameterized query protections. We retain enquiry records for as long as necessary to evaluate the business opportunity or fulfill an active client agreement.
          </p>
          <p style={{ fontSize: "var(--font-size-sm)", color: "var(--color-text-secondary)", lineHeight: "var(--line-height-relaxed)" }}>
            Enquiries that do not lead to an active contract may be archived or permanently purged after 12 months, or sooner upon written request.
          </p>
        </section>

        <section style={{ marginBottom: "var(--space-10)" }}>
          <h2 style={{ fontSize: "var(--font-size-xl)", fontWeight: 700, color: "var(--color-text-primary)", letterSpacing: "-0.01em", marginBottom: "var(--space-3)" }}>
            5. Indian DPDP Act &amp; International Data Governance Standards
          </h2>
          <p style={{ fontSize: "var(--font-size-sm)", color: "var(--color-text-secondary)", lineHeight: "var(--line-height-relaxed)", marginBottom: "var(--space-4)" }}>
            Qubizon complies with the principles of the Digital Personal Data Protection (DPDP) Act of India and international benchmarks including GDPR. We collect only personal data necessary for legitimate business inquiry evaluation, operate with complete transparency, and enforce strict purpose-limitation controls.
          </p>
          <p style={{ fontSize: "var(--font-size-sm)", color: "var(--color-text-secondary)", lineHeight: "var(--line-height-relaxed)" }}>
            For corporate clients and cross-border partners in the GCC, Europe, and North America, we execute data processing agreements (DPAs) upon engagement kick-off, establishing explicit data residency, processing scopes, and confidential breach notification protocols.
          </p>
        </section>

        <section style={{ marginBottom: "var(--space-10)" }}>
          <h2 style={{ fontSize: "var(--font-size-xl)", fontWeight: 700, color: "var(--color-text-primary)", letterSpacing: "-0.01em", marginBottom: "var(--space-3)" }}>
            6. Cookie Governance &amp; Local Telemetry
          </h2>
          <p style={{ fontSize: "var(--font-size-sm)", color: "var(--color-text-secondary)", lineHeight: "var(--line-height-relaxed)", marginBottom: "var(--space-4)" }}>
            Our web platform uses minimal, strictly essential session indicators and anonymized aggregate analytics. We do not set persistent cross-site tracking cookies or sell behavioral telemetry to programmatic advertising networks.
          </p>
          <p style={{ fontSize: "var(--font-size-sm)", color: "var(--color-text-secondary)", lineHeight: "var(--line-height-relaxed)" }}>
            Where first-party measurement tools (such as Google Analytics 4) are configured, client IP addresses are masked and anonymized at the edge before storage.
          </p>
        </section>

        <section style={{ marginBottom: "var(--space-10)" }}>
          <h2 style={{ fontSize: "var(--font-size-xl)", fontWeight: 700, color: "var(--color-text-primary)", letterSpacing: "-0.01em", marginBottom: "var(--space-3)" }}>
            7. Technical Safeguards &amp; Transport Layer Security (HSTS)
          </h2>
          <p style={{ fontSize: "var(--font-size-sm)", color: "var(--color-text-secondary)", lineHeight: "var(--line-height-relaxed)", marginBottom: "var(--space-4)" }}>
            All web traffic between client browsers and Qubizon infrastructure is strictly governed by HTTP Strict Transport Security (HSTS), enforcing TLS 1.3 encryption across all root domains and subdomains. We configure defensive HTTP response headers including X-Content-Type-Options: nosniff, strict Referrer-Policy, and restricted Permissions-Policy.
          </p>
        </section>

        <section style={{ marginBottom: "var(--space-10)" }}>
          <h2 style={{ fontSize: "var(--font-size-xl)", fontWeight: 700, color: "var(--color-text-primary)", letterSpacing: "-0.01em", marginBottom: "var(--space-3)" }}>
            8. Your Privacy Rights &amp; Contact Method
          </h2>
          <p style={{ fontSize: "var(--font-size-sm)", color: "var(--color-text-secondary)", lineHeight: "var(--line-height-relaxed)", marginBottom: "var(--space-4)" }}>
            You have the right to request access to the information you submitted, request corrections, or request complete deletion of your enquiry record from our systems.
          </p>
          <div style={{
            backgroundColor: "rgba(248, 250, 252, 0.75)",
            backdropFilter: "blur(4px)",
            border: "1px solid rgba(0, 0, 0, 0.08)",
            borderRadius: "16px",
            padding: "var(--space-6)"
          }}>
            <p style={{ fontSize: "var(--font-size-sm)", color: "var(--color-text-primary)", marginBottom: "var(--space-2)", fontWeight: 600 }}>
              To exercise your privacy rights, please contact our team directly:
            </p>
            <a href={`mailto:${SITE_CONFIG.email}`} style={{ display: "inline-flex", alignItems: "center", gap: "var(--space-2)", color: "var(--brand-blue)", fontWeight: "var(--font-weight-bold)", fontSize: "var(--font-size-base)", textDecoration: "underline" }}>
              <Mail size={16} aria-hidden="true" />
              <span>{SITE_CONFIG.email}</span>
            </a>
          </div>
        </section>

        <section style={{ marginBottom: "var(--space-10)" }}>
          <h2 style={{ fontSize: "var(--font-size-xl)", fontWeight: 700, color: "var(--color-text-primary)", letterSpacing: "-0.01em", marginBottom: "var(--space-3)" }}>
            9. Cross-Border International Data Governance &amp; GCC Compliance
          </h2>
          <p style={{ fontSize: "var(--font-size-sm)", color: "var(--color-text-secondary)", lineHeight: "var(--line-height-relaxed)", marginBottom: "var(--space-4)" }}>
            As a global digital engineering collective serving enterprises across India, the United Arab Emirates, the Kingdom of Saudi Arabia, Qatar, Kuwait, Bahrain, and the Sultanate of Oman, Qubizon enforces jurisdictional privacy parity:
          </p>
          <ul style={{ paddingLeft: "var(--space-6)", fontSize: "var(--font-size-sm)", color: "var(--color-text-secondary)", lineHeight: "var(--line-height-relaxed)", display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
            <li><strong>European Union (GDPR):</strong> All data processing adheres to EU Regulation 2016/679 with standard contractual clauses (SCCs) governing cross-border transfers.</li>
            <li><strong>India (DPDP Act 2023):</strong> Personal data is processed exclusively under lawful consent guidelines with explicit purpose limitation and designated Data Protection Officer oversight.</li>
            <li><strong>UAE Federal Decree-Law No. 45 of 2021:</strong> Enterprise client databases comply with UAE national data protection mandates and sovereign localization options.</li>
            <li><strong>Saudi Arabia (PDPL):</strong> Systems handling Saudi resident data strictly comply with the Personal Data Protection Law promulgated by Royal Decree No. M/19.</li>
          </ul>
        </section>

        <section style={{ marginBottom: "var(--space-10)" }}>
          <h2 style={{ fontSize: "var(--font-size-xl)", fontWeight: 700, color: "var(--color-text-primary)", letterSpacing: "-0.01em", marginBottom: "var(--space-3)" }}>
            10. Third-Party Subprocessor Oversight &amp; Audit Protocols
          </h2>
          <p style={{ fontSize: "var(--font-size-sm)", color: "var(--color-text-secondary)", lineHeight: "var(--line-height-relaxed)", marginBottom: "var(--space-4)" }}>
            We maintain strict vendor risk management protocols. Third-party cloud infrastructure providers utilized for platform hosting, edge routing, and communications (including Amazon Web Services, Cloudflare, Vercel, and Meta WhatsApp Business Cloud API) are audited for SOC 2 Type II, ISO/IEC 27001, and PCI-DSS Level 1 compliance.
          </p>
          <p style={{ fontSize: "var(--font-size-sm)", color: "var(--color-text-secondary)", lineHeight: "var(--line-height-relaxed)" }}>
            We execute formal Data Processing Agreements (DPAs) with every subprocessor, mandating technical encryption standards and immediate 24-hour breach notification obligations.
          </p>
        </section>

        <section style={{ marginBottom: "var(--space-10)" }}>
          <h2 style={{ fontSize: "var(--font-size-xl)", fontWeight: 700, color: "var(--color-text-primary)", letterSpacing: "-0.01em", marginBottom: "var(--space-3)" }}>
            11. Enterprise Incident Response &amp; Breach Protocol SLA
          </h2>
          <p style={{ fontSize: "var(--font-size-sm)", color: "var(--color-text-secondary)", lineHeight: "var(--line-height-relaxed)", marginBottom: "var(--space-4)" }}>
            In the event of a suspected or confirmed security anomaly affecting customer information, Qubizon activates an automated incident containment protocol within 60 minutes. Affected enterprise stakeholders and statutory authorities are notified in accordance with regulatory timetables (within 72 hours for GDPR and immediate notification under DPDP Act requirements).
          </p>
          <p style={{ fontSize: "var(--font-size-sm)", color: "var(--color-text-secondary)", lineHeight: "var(--line-height-relaxed)" }}>
            For questions regarding our enterprise security posture, please review our <a href="/contact" style={{ color: "var(--brand-blue)", textDecoration: "underline" }}>Enterprise Consultation Portal</a> or review our core <a href="/services/web-development" style={{ color: "var(--brand-blue)", textDecoration: "underline" }}>Web Architecture SLAs</a> and <a href="/services/crm" style={{ color: "var(--brand-blue)", textDecoration: "underline" }}>CRM Governance Protocols</a>.
          </p>
        </section>
      </div>
    </main>
  );
}
