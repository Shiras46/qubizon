import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export default function NotFound() {
  return (
    <div
      className="container"
      style={{
        padding: "clamp(3rem, 6vw, 6rem) var(--container-padding)",
        maxWidth: "960px",
        margin: "0 auto",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <p
          style={{
            color: "#00488e",
            fontWeight: 800,
            fontSize: "clamp(3rem, 6vw, 5rem)",
            margin: 0,
            lineHeight: 1,
          }}
        >
          404
        </p>
        <h1
          style={{
            fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
            fontWeight: 800,
            color: "#0a0a0a",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          Resource or Architectural Route Not Found
        </h1>
        <p
          style={{
            fontSize: "1rem",
            color: "#64748b",
            lineHeight: 1.65,
            maxWidth: "600px",
            margin: "0 auto 2rem auto",
          }}
        >
          The requested URL does not match an active route on {SITE_CONFIG.name}. Use the directory below to navigate to our core capabilities, sector solutions, and regional hubs.
        </p>
        <Link
          href="/"
          style={{
            display: "inline-block",
            padding: "12px 28px",
            backgroundColor: "#00488e",
            color: "#ffffff",
            fontWeight: 700,
            borderRadius: "9999px",
            fontSize: "14px",
            textDecoration: "none",
          }}
        >
          Return to Agency Home &rarr;
        </Link>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.5rem",
          background: "#f8fafc",
          padding: "2rem",
          borderRadius: "16px",
          border: "1px solid #e2e8f0",
        }}
      >
        <div style={{ background: "#ffffff", padding: "1.5rem", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.75rem" }}>
            Core Disciplines
          </h2>
          <ul style={{ paddingLeft: "1.2rem", fontSize: "0.9rem", color: "#64748b", lineHeight: 1.8, margin: 0 }}>
            <li><Link href="/services/web-development" style={{ color: "#00488e", textDecoration: "none" }}>Web Architecture &amp; Next.js</Link></li>
            <li><Link href="/services/seo" style={{ color: "#00488e", textDecoration: "none" }}>Technical Search Engine Optimization</Link></li>
            <li><Link href="/services/paid-advertising" style={{ color: "#00488e", textDecoration: "none" }}>Performance Paid Advertising</Link></li>
            <li><Link href="/services/crm" style={{ color: "#00488e", textDecoration: "none" }}>Omnichannel CRM &amp; Automation</Link></li>
            <li><Link href="/services/content-marketing" style={{ color: "#00488e", textDecoration: "none" }}>Authority Content Strategy</Link></li>
          </ul>
        </div>

        <div style={{ background: "#ffffff", padding: "1.5rem", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.75rem" }}>
            Regional Corridors
          </h2>
          <ul style={{ paddingLeft: "1.2rem", fontSize: "0.9rem", color: "#64748b", lineHeight: 1.8, margin: 0 }}>
            <li><Link href="/locations/uae" style={{ color: "#00488e", textDecoration: "none" }}>UAE (Dubai &amp; Abu Dhabi)</Link></li>
            <li><Link href="/locations/saudi-arabia" style={{ color: "#00488e", textDecoration: "none" }}>Saudi Arabia (Riyadh &amp; Jeddah)</Link></li>
            <li><Link href="/locations/qatar" style={{ color: "#00488e", textDecoration: "none" }}>Qatar (Doha &amp; Lusail)</Link></li>
            <li><Link href="/locations/kuwait" style={{ color: "#00488e", textDecoration: "none" }}>Kuwait</Link> &bull; <Link href="/locations/bahrain" style={{ color: "#00488e", textDecoration: "none" }}>Bahrain</Link> &bull; <Link href="/locations/oman" style={{ color: "#00488e", textDecoration: "none" }}>Oman</Link></li>
            <li><Link href="/locations/kozhikode" style={{ color: "#00488e", textDecoration: "none" }}>Kozhikode</Link> &bull; <Link href="/locations/thrissur" style={{ color: "#00488e", textDecoration: "none" }}>Thrissur (Kerala HQ)</Link></li>
          </ul>
        </div>

        <div style={{ background: "#ffffff", padding: "1.5rem", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.75rem" }}>
            Solutions &amp; Sectors
          </h2>
          <ul style={{ paddingLeft: "1.2rem", fontSize: "0.9rem", color: "#64748b", lineHeight: 1.8, margin: 0 }}>
            <li><Link href="/solutions" style={{ color: "#00488e", textDecoration: "none" }}>AI Chatbots &amp; Multi-Agent Systems</Link></li>
            <li><Link href="/solutions" style={{ color: "#00488e", textDecoration: "none" }}>WhatsApp Business Cloud API</Link></li>
            <li><Link href="/industries" style={{ color: "#00488e", textDecoration: "none" }}>Real Estate &amp; Construction</Link></li>
            <li><Link href="/industries" style={{ color: "#00488e", textDecoration: "none" }}>Healthcare &amp; Hospital Networks</Link></li>
            <li><Link href="/contact" style={{ color: "#00488e", textDecoration: "none" }}>Schedule Technical Consultation</Link></li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: "2.5rem", background: "#ffffff", padding: "2rem", borderRadius: "16px", border: "1px solid #e2e8f0" }}>
        <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.75rem" }}>
          About Qubizon Digital Solutions
        </h3>
        <p style={{ fontSize: "0.92rem", lineHeight: 1.7, color: "#4a5568", marginBottom: "1rem" }}>
          Qubizon Digital Solutions is an enterprise digital collective delivering high-performance Next.js 15 web applications, technical SEO knowledge graphs, high-intent Google Ads and Meta paid media management, and automated CRM pipelines. We partner with established commercial organizations across Kozhikode, Thrissur, the United Arab Emirates, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman, and international trade corridors.
        </p>
        <p style={{ fontSize: "0.92rem", lineHeight: 1.7, color: "#4a5568", marginBottom: "1.5rem" }}>
          Our engineering practices emphasize strict adherence to modern web standards: sub-second Largest Contentful Paint (LCP &lt; 1.0s), zero cumulative layout shift (CLS = 0.00), accessibility compliance matching WCAG 2.1 AA benchmarks, and end-to-end telemetry through server-side Google Tag Manager and Meta Conversions API (CAPI). All enterprise engagements guarantee full client ownership of source code, Git repositories, advertising accounts, and customer databases with zero vendor lock-in.
        </p>
        <p style={{ fontSize: "0.92rem", lineHeight: 1.7, color: "#4a5568", marginBottom: "1.5rem" }}>
          Whether you are looking for custom Next.js full-stack software development, automated WhatsApp Business Cloud API CRM routing, enterprise e-commerce architectures with regional payment gateways, or authority content strategy, our multidisciplinary teams maintain synchronous overlapping hours with Gulf Standard Time (GST), Arabia Standard Time (AST), and Indian Standard Time (IST) to ensure seamless communication and delivery velocity.
        </p>
        <p style={{ fontSize: "0.92rem", lineHeight: 1.7, color: "#4a5568", marginBottom: "1.5rem" }}>
          If you arrived here via a broken external link or legacy bookmarked URL, please note that all core agency resources have been consolidated into our modern Next.js 15 routing architecture. You can browse our complete portfolio of case studies, inspect our open-source Core Web Vitals telemetry benchmarks, or submit an inquiry directly through our encrypted contact gateway below.
        </p>
        <p style={{ fontSize: "0.92rem", lineHeight: 1.7, color: "#4a5568", marginBottom: "1.5rem" }}>
          If your organization requires a formal technical proposal, architectural review, or performance audit for an upcoming web application or marketing initiative, our engineering leadership is available for confidential discovery consultations. We provide comprehensive milestone roadmaps, fixed-scope Sprint Zero discovery blueprints, and explicit SLA commitments.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", fontSize: "0.85rem", color: "#64748b" }}>
          <Link href="/about" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>About Our Collective</Link> &bull;
          <Link href="/work" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Public Architectural Benchmarks</Link> &bull;
          <Link href="/blog" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Engineering Whitepapers</Link> &bull;
          <Link href="/privacy" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Data Governance &amp; Privacy</Link> &bull;
          <Link href="/contact" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Contact Our Engineering Team &rarr;</Link>
        </div>
      </div>
    </div>
  );
}
