import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  Globe2,
  ArrowRight,
  ShieldCheck,
  Code2,
  Search,
  Target,
  Share2,
  Database,
  Building2,
  CheckCircle2,
  Clock,
  Sparkles,
  Zap,
} from "lucide-react";
import { constructMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/constants";
import styles from "@/components/locations/LocationPage.module.css";

export const metadata: Metadata = constructMetadata({
  title: "Web Development & Marketing in UAE | Qubizon",
  description:
    "Premier Next.js web development, technical SEO, performance advertising, and CRM automation for high-growth enterprises in Dubai, Abu Dhabi, and the GCC.",
  path: "/locations/uae",
  keywords: [
    "Digital Marketing Company in UAE",
    "Web Development Company Dubai",
    "Best Digital Marketing Agency UAE",
    "Next.js Web Development UAE",
    "SEO Agency Dubai",
    "SEO Company Abu Dhabi",
    "PPC Advertising Agency Dubai",
    "Social Media Marketing UAE",
    "CRM Automation UAE GCC",
    "B2B Digital Agency Gulf",
  ],
});

const UAE_FAQS = [
  {
    q: "How does Qubizon collaborate with enterprises and startups based in the UAE and GCC?",
    a: "We operate a high-velocity, cross-border delivery model with dedicated senior practitioners aligned to Gulf Standard Time (GST, UTC+4). With only a 1.5-hour time difference from our Indian engineering centers and frequent direct flights between Dubai, Abu Dhabi, and Kerala, we provide direct real-time communication via dedicated Slack/WhatsApp channels, weekly executive sprint reviews, and in-person discovery sessions in the UAE when required.",
  },
  {
    q: "What makes Qubizon's web development superior to traditional agencies in Dubai?",
    a: "Most digital marketing agencies in Dubai charge inflated retainers while outsourcing projects to junior freelancers or delivering bloated, generic WordPress templates. Qubizon engineers custom Next.js App Router applications with React Server Components, achieving sub-second Largest Contentful Paint (LCP < 1.2s), zero layout shifts, and bank-grade security without expensive recurring template maintenance fees.",
  },
  {
    q: "Can you design bilingual Arabic and English websites with RTL layout support?",
    a: "Yes. We engineer fully localized, bi-directional web applications supporting right-to-left (RTL) Arabic typography alongside left-to-right (LTR) English. We configure localized font optimization pipelines, culturally resonant UX patterns, and geo-targeted Schema.org markup optimized for Google.ae, Google.sa, and regional GCC search engines.",
  },
  {
    q: "How do you handle payments, billing currencies, and commercial contracts for UAE clients?",
    a: "We offer flexible commercial invoicing in United Arab Emirates Dirhams (AED), US Dollars (USD), or Indian Rupees (INR) with standard wire transfer and international corporate payment processing. All contracts include comprehensive intellectual property (IP) assignment clauses guaranteeing 100% client code and asset ownership.",
  },
  {
    q: "Do you sign non-disclosure agreements (NDAs) before reviewing proprietary business data?",
    a: "Yes. Confidentiality is an absolute foundation of our agency practice. We routinely execute mutual non-disclosure agreements (NDAs) prior to inspecting existing web infrastructure, analytics histories, CRM architectures, or corporate growth roadmaps.",
  },
  {
    q: "What digital marketing channels generate the highest return on investment in the UAE?",
    a: "For high-ticket B2B, real estate, luxury retail, and healthcare in the UAE, a synchronized combination of technical Google Search SEO (capturing high-intent buyers on Google.ae), laser-targeted LinkedIn Ads (engaging corporate decision-makers), and Meta/Instagram performance advertising with direct WhatsApp Business lead routing yields the highest conversion rates and lowest customer acquisition cost.",
  },
];

export default function UaeLocationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_CONFIG.domain },
          { "@type": "ListItem", position: 2, name: "Service Areas", item: `${SITE_CONFIG.domain}/locations` },
          { "@type": "ListItem", position: 3, name: "UAE & GCC Hub", item: `${SITE_CONFIG.domain}/locations/uae` },
        ],
      },
      {
        "@type": "Service",
        "@id": `${SITE_CONFIG.domain}/locations/uae#service`,
        name: "Enterprise Web Development & Digital Marketing Services in UAE & GCC",
        provider: { "@id": `${SITE_CONFIG.domain}/#organization` },
        serviceType: "Next.js Web Engineering, Technical SEO, Performance PPC, CRM Automation",
        areaServed: [
          {
            "@type": "Country",
            name: "United Arab Emirates",
            alternateName: "UAE",
          },
          {
            "@type": "City",
            name: "Dubai",
            containedInPlace: { "@type": "Country", name: "United Arab Emirates" },
          },
          {
            "@type": "City",
            name: "Abu Dhabi",
            containedInPlace: { "@type": "Country", name: "United Arab Emirates" },
          },
          {
            "@type": "City",
            name: "Sharjah",
            containedInPlace: { "@type": "Country", name: "United Arab Emirates" },
          },
          {
            "@type": "AdministrativeArea",
            name: "Gulf Cooperation Council",
            alternateName: "GCC",
          },
        ],
        description:
          "Enterprise Next.js web application development, technical search engine optimization, high-intent performance PPC advertising, and CRM workflow automation for commercial enterprises across Dubai, Abu Dhabi, Sharjah, and the GCC.",
      },
      {
        "@type": "FAQPage",
        mainEntity: UAE_FAQS.map((faq) => ({
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
    <div className={`container ${styles.pageContainer}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb">
        <ul className={styles.breadcrumb}>
          <li><Link href="/">Home</Link></li>
          <ChevronRight size={12} aria-hidden="true" />
          <li><Link href="/locations">Service Areas</Link></li>
          <ChevronRight size={12} aria-hidden="true" />
          <li aria-current="page">UAE &amp; GCC Hub</li>
        </ul>
      </nav>

      {/* Hero Header */}
      <header className={styles.hero}>
        <div className={styles.badge}>
          <Globe2 size={14} aria-hidden="true" />
          <span>Global Enterprise Hub • Dubai • Abu Dhabi • GCC</span>
        </div>
        <h1 className={styles.title}>
          Enterprise Web Development &amp; <span className="calligraphy">Digital Growth in the UAE</span>
        </h1>
        <p className={styles.lead}>
          Qubizon partners with forward-thinking business founders, corporate groups, and high-growth commercial enterprises across Dubai, Abu Dhabi, and the wider GCC. We engineer sub-second Next.js web applications, dominate regional search algorithms with technical SEO, and execute precision paid media campaigns that generate verified revenue pipelines.
        </p>

        <div className={styles.ctaRow}>
          <Link href="/contact?location=uae" className={styles.primaryBtn}>
            <span>Schedule UAE Strategy Session</span>
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <a
            href="https://wa.me/917902911961?text=Hi%20Qubizon%2C%20I%20am%20contacting%20you%20from%20the%20UAE%20regarding%20a%20digital%20project."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryBtn}
          >
            <span>Direct WhatsApp Discovery &rarr;</span>
          </a>
        </div>
      </header>

      {/* Why UAE & GCC Enterprises Choose Qubizon */}
      <section className={styles.section} aria-labelledby="why-uae-heading">
        <h2 id="why-uae-heading" className={styles.sectionTitle}>
          Why Leading GCC Enterprises Partner With Qubizon
        </h2>
        <p className={styles.sectionSubtitle}>
          Dubai and the UAE represent one of the world&apos;s most competitive business environments. Traditional agencies often charge astronomical monthly retainers while delivering sluggish, template-based websites that fail to convert. Qubizon delivers an engineered alternative:
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginTop: "2rem" }}>
          <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.08)", borderRadius: "16px", padding: "1.75rem", boxShadow: "0 2px 12px rgba(0,0,0,0.03)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.75rem" }}>
              <Zap size={22} style={{ color: "var(--brand-blue, #00488e)" }} aria-hidden="true" />
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, margin: 0, color: "#0a0a0a" }}>Senior Engineering &amp; Capital Efficiency</h3>
            </div>
            <p style={{ fontSize: "0.925rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
              Access senior full-stack software engineers, Next.js specialists, and search marketing directors at substantial capital efficiency compared to hyper-inflated local Dubai agency retainers, with zero sacrifice in technical rigor or execution speed.
            </p>
          </div>

          <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.08)", borderRadius: "16px", padding: "1.75rem", boxShadow: "0 2px 12px rgba(0,0,0,0.03)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.75rem" }}>
              <Clock size={22} style={{ color: "var(--brand-blue, #00488e)" }} aria-hidden="true" />
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, margin: 0, color: "#0a0a0a" }}>Time-Zone Aligned with GST (UTC+4)</h3>
            </div>
            <p style={{ fontSize: "0.925rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
              Operating with just a 1.5-hour time difference from Gulf Standard Time, our practitioners overlap seamlessly with your working hours. Enjoy real-time collaboration via Slack, instant WhatsApp channels, and rapid turnaround on urgent campaign requests.
            </p>
          </div>

          <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.08)", borderRadius: "16px", padding: "1.75rem", boxShadow: "0 2px 12px rgba(0,0,0,0.03)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.75rem" }}>
              <Sparkles size={22} style={{ color: "var(--brand-blue, #00488e)" }} aria-hidden="true" />
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, margin: 0, color: "#0a0a0a" }}>Sub-Second 5G Speed &amp; Zero CLS</h3>
            </div>
            <p style={{ fontSize: "0.925rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
              With UAE smartphone penetration exceeding 96% and ubiquitous high-speed 5G mobile networks, mobile page speed directly dictates conversion rates. Our Next.js architecture loads in under 1.2 seconds, maximizing user retention and Google Ads Quality Scores.
            </p>
          </div>

          <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.08)", borderRadius: "16px", padding: "1.75rem", boxShadow: "0 2px 12px rgba(0,0,0,0.03)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.75rem" }}>
              <Globe2 size={22} style={{ color: "var(--brand-blue, #00488e)" }} aria-hidden="true" />
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, margin: 0, color: "#0a0a0a" }}>Bilingual Arabic &amp; English Architecture</h3>
            </div>
            <p style={{ fontSize: "0.925rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
              We build bi-directional websites with native Right-to-Left (RTL) Arabic styling, optimized web fonts, and localized search intent structures that engage both regional Emirati decision-makers and the multicultural international expatriate community.
            </p>
          </div>
        </div>
      </section>

      {/* Core Digital Disciplines for UAE Markets */}
      <section className={styles.section} aria-labelledby="uae-services-heading" style={{ marginTop: "3.5rem" }}>
        <h2 id="uae-services-heading" className={styles.sectionTitle}>
          Integrated Capabilities for the UAE &amp; GCC
        </h2>
        <p className={styles.sectionSubtitle}>
          Our unified agency model eliminates the friction of managing separate web development houses, freelance SEO consultants, and disconnected ad buyers:
        </p>

        <div className={styles.servicesGrid}>
          {/* Service 1: Web Development */}
          <div className={styles.serviceCard}>
            <div className={styles.cardIcon}><Code2 size={22} aria-hidden="true" /></div>
            <h3 className={styles.cardTitle}>Next.js Web Applications &amp; Portals</h3>
            <p className={styles.cardDesc}>
              Bespoke corporate websites, customer portals, and headless digital platforms built with Next.js App Router, React Server Components, and Tailwind/CSS tokens for luxury brands and enterprises.
            </p>
            <Link href="/services/web-development" className={styles.cardLink}>
              Explore Web Architecture <ChevronRight size={14} aria-hidden="true" />
            </Link>
          </div>

          {/* Service 2: Technical SEO */}
          <div className={styles.serviceCard}>
            <div className={styles.cardIcon}><Search size={22} aria-hidden="true" /></div>
            <h3 className={styles.cardTitle}>Technical SEO &amp; GCC Search Authority</h3>
            <p className={styles.cardDesc}>
              Dominating competitive commercial search queries on Google.ae and regional engines. We engineer structured Schema.org entity graphs, crawl budget controls, and authoritative topical clusters.
            </p>
            <Link href="/services/seo" className={styles.cardLink}>
              Explore Technical SEO <ChevronRight size={14} aria-hidden="true" />
            </Link>
          </div>

          {/* Service 3: PPC Advertising */}
          <div className={styles.serviceCard}>
            <div className={styles.cardIcon}><Target size={22} aria-hidden="true" /></div>
            <h3 className={styles.cardTitle}>Performance PPC &amp; Paid Media</h3>
            <p className={styles.cardDesc}>
              High-intent Google Search Ads, LinkedIn B2B funnels, and Meta advertising targeting High-Net-Worth Individuals (HNWIs) and corporate buyers with negative keyword hygiene and server-side tracking.
            </p>
            <Link href="/services/paid-advertising" className={styles.cardLink}>
              Explore Paid Advertising <ChevronRight size={14} aria-hidden="true" />
            </Link>
          </div>

          {/* Service 4: Social Media */}
          <div className={styles.serviceCard}>
            <div className={styles.cardIcon}><Share2 size={22} aria-hidden="true" /></div>
            <h3 className={styles.cardTitle}>Social Media &amp; Executive Storytelling</h3>
            <p className={styles.cardDesc}>
              Calibrated for the UAE&apos;s executive and lifestyle networks. We manage high-authority LinkedIn thought leadership for founders and polished Instagram storytelling for consumer brands.
            </p>
            <Link href="/services/social-media-marketing" className={styles.cardLink}>
              Explore Social Strategy <ChevronRight size={14} aria-hidden="true" />
            </Link>
          </div>

          {/* Service 5: CRM & Automation */}
          <div className={styles.serviceCard}>
            <div className={styles.cardIcon}><Database size={22} aria-hidden="true" /></div>
            <h3 className={styles.cardTitle}>CRM &amp; WhatsApp Workflow Automation</h3>
            <p className={styles.cardDesc}>
              Connecting website leads, Google Ads, and Meta instant forms directly to WhatsApp Business APIs, visual deal pipelines, and automated sales follow-up sequences without lost inquiries.
            </p>
            <Link href="/services/crm" className={styles.cardLink}>
              Explore CRM Automation <ChevronRight size={14} aria-hidden="true" />
            </Link>
          </div>

          {/* Service 6: Content Marketing */}
          <div className={styles.serviceCard}>
            <div className={styles.cardIcon}><Building2 size={22} aria-hidden="true" /></div>
            <h3 className={styles.cardTitle}>Content Marketing &amp; Whitepapers</h3>
            <p className={styles.cardDesc}>
              Authoritative B2B market analyses, industry benchmarks, and conversion copywriting that position your company as the undisputed category leader across Dubai, Abu Dhabi, and the GCC.
            </p>
            <Link href="/services/content-marketing" className={styles.cardLink}>
              Explore Content Strategy <ChevronRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Target Industries across the Emirates */}
      <section style={{ marginTop: "3.5rem", background: "rgba(255, 255, 255, 0.85)", border: "1px solid rgba(0, 0, 0, 0.08)", borderRadius: "20px", padding: "clamp(2rem, 4vw, 3.5rem)" }}>
        <h2 className={styles.sectionTitle} style={{ textAlign: "center", marginBottom: "1rem" }}>
          Tailored Digital Solutions for High-Growth UAE Sectors
        </h2>
        <p className={styles.sectionSubtitle} style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 2.5rem auto" }}>
          We design high-converting digital platforms engineered for the specific commercial economics of primary Gulf industries:
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.06)", borderRadius: "14px", padding: "1.5rem" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--brand-blue, #00488e)", marginBottom: "0.5rem" }}>
              Real Estate &amp; Property Developers
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
              Off-plan project showcase landing pages, interactive masterplan viewers, floorplan download lead gates, and targeted NRI/international investor acquisition campaigns across Dubai and Abu Dhabi.
            </p>
          </div>

          <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.06)", borderRadius: "14px", padding: "1.5rem" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--brand-blue, #00488e)", marginBottom: "0.5rem" }}>
              Luxury Retail, Jewellery &amp; Fashion
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
              Sub-second headless e-commerce storefronts engineered with multi-currency checkouts (AED, SAR, USD), zero Cumulative Layout Shift, and high-engagement VIP client booking funnels.
            </p>
          </div>

          <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.06)", borderRadius: "14px", padding: "1.5rem" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--brand-blue, #00488e)", marginBottom: "0.5rem" }}>
              Healthcare, Aesthetic Clinics &amp; Hospitals
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
              Patient appointment booking portals, doctor specialization schemas, and medical tourism marketing attracting patients from the GCC, Europe, and Asia to premier Dubai and Abu Dhabi clinics.
            </p>
          </div>

          <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.06)", borderRadius: "14px", padding: "1.5rem" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--brand-blue, #00488e)", marginBottom: "0.5rem" }}>
              Financial Services, Wealth &amp; Family Offices
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
              Institutional-grade digital presences engineered with strict Content Security Policy (CSP), TLS 1.3 encryption, and HSTS headers, establishing unshakeable credibility in DIFC and ADGM.
            </p>
          </div>

          <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.06)", borderRadius: "14px", padding: "1.5rem" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--brand-blue, #00488e)", marginBottom: "0.5rem" }}>
              Logistics, Maritime &amp; Industrial Supply
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
              B2B quotation engines, container tracking integrations, and international trade directory optimization serving regional logistics hubs across JAFZA, Khalifa Port, and Sharjah.
            </p>
          </div>

          <div style={{ background: "#ffffff", border: "1px solid rgba(0, 0, 0, 0.06)", borderRadius: "14px", padding: "1.5rem" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--brand-blue, #00488e)", marginBottom: "0.5rem" }}>
              Hospitality, Fine Dining &amp; Tourism
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
              Interactive menu presentations, table reservation sync, and multi-lingual global search optimization attracting affluent regional residents and international tourist demographics.
            </p>
          </div>
        </div>
      </section>

      {/* Service Delivery Model */}
      <section className={styles.deliveryCard} aria-labelledby="delivery-heading" style={{ marginTop: "3.5rem" }}>
        <div className={styles.badge}>
          <ShieldCheck size={14} aria-hidden="true" />
          <span>Execution Integrity &amp; SLA Commitment</span>
        </div>
        <h2 id="delivery-heading" className={styles.sectionTitle}>
          Our Delivery Commitments to UAE Clients
        </h2>
        <p className={styles.sectionSubtitle}>
          We combine transparent cross-border engineering with enterprise-grade accountability.
        </p>

        <div className={styles.deliveryGrid}>
          <div className={styles.deliveryItem}>
            <h4>1. Direct Practitioner Access</h4>
            <p>You communicate directly with senior software engineers, technical SEO architects, and media buyers via Slack/WhatsApp without account management delays.</p>
          </div>
          <div className={styles.deliveryItem}>
            <h4>2. 100% Client Code Ownership</h4>
            <p>All source code, Git repositories, advertising accounts, and data pipelines belong fully to you from day one under clean commercial licensing.</p>
          </div>
          <div className={styles.deliveryItem}>
            <h4>3. Verifiable Performance Targets</h4>
            <p>Every sprint is measured against verifiable milestones: sub-second mobile LCP, zero layout shift, Google.ae search rankings, and verified lead volumes.</p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className={styles.section} aria-labelledby="uae-faqs" style={{ marginTop: "3.5rem" }}>
        <h2 id="uae-faqs" className={styles.sectionTitle}>
          Frequently Asked Questions — UAE &amp; GCC Services
        </h2>
        <div className={styles.faqList}>
          {UAE_FAQS.map((faq, index) => (
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

      {/* Enterprise SLA, Compliance & Technical Governance Framework */}
      <section style={{ marginTop: "4rem", background: "#f8fafc", padding: "3rem clamp(1.5rem, 4vw, 3rem)", borderRadius: "20px", border: "1px solid #e2e8f0" }}>
        <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#00488e", display: "block", marginBottom: "0.5rem" }}>
          • UAE REGULATORY COMPLIANCE &amp; ARCHITECTURAL PROTOCOL /
        </span>
        <h2 style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.1rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#0a0a0a", marginBottom: "1rem" }}>
          Enterprise Digital Standards for UAE Commercial Clients
        </h2>
        <p style={{ fontSize: "1rem", lineHeight: 1.65, color: "#4a5568", maxWidth: "860px", marginBottom: "2rem" }}>
          In the competitive commercial hubs of Dubai, Abu Dhabi, and Sharjah, enterprise digital channels must deliver uncompromising execution. Qubizon builds sub-second Next.js web applications, high-intent Google.ae search authority graphs, and automated CRM pipelines tailored to UAE Federal Tax Authority (FTA) compliance and Federal Data Protection Law requirements.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: "1.5rem", marginBottom: "2.5rem" }}>
          <div style={{ background: "#ffffff", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              FTA E-Invoicing &amp; UAE Data Protection Law
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
              Our custom web systems and e-commerce architectures comply natively with UAE Federal Decree-Law No. 45 of 2021 on Personal Data Protection (PDPL) and UAE FTA e-invoicing standards, ensuring automated 5% VAT calculations, encrypted audit trails, and strict data sovereignty.
            </p>
          </div>

          <div style={{ background: "#ffffff", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              Regional Cloud Edge in Dubai &amp; Abu Dhabi
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
              With AWS me-central-1 (UAE), Microsoft Azure UAE North (Dubai), and Google Cloud regions active in Dammam and Doha, our edge-distributed web applications achieve sub-second page loads (LCP &lt; 0.8s) across e&amp; (Etisalat) and du telecom fiber and 5G networks.
            </p>
          </div>

          <div style={{ background: "#ffffff", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              Bilingual English &amp; Arabic RTL Search Authority
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
              We build bidirectional Next.js architectures with native Right-to-Left (RTL) Arabic typography and localized Google.ae entity graphs. This captures high-intent searches from both Emirati nationals and international expatriate commercial decision-makers.
            </p>
          </div>

          <div style={{ background: "#ffffff", padding: "1.75rem", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.5rem" }}>
              Real-Time WhatsApp Cloud API Pipeline Integration
            </h3>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "#64748b", margin: 0 }}>
              Every lead captured via Google Search advertising or organic search is instantly routed into your sales team&apos;s CRM via official WhatsApp Business API triggers, ensuring immediate response within minutes to maximize high-ticket transaction conversion rates.
            </p>
          </div>
        </div>

        <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: "1.5rem", fontSize: "0.88rem", color: "#64748b", lineHeight: 1.6 }}>
          <strong>Related Services in the United Arab Emirates:</strong> Learn how we integrate{" "}
          <Link href="/services/web-development" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Dubai Web Development</Link>,{" "}
          <Link href="/services/seo" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>UAE Technical SEO</Link>,{" "}
          <Link href="/services/paid-advertising" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>High-ROAS Google Ads</Link>, and{" "}
          <Link href="/services/crm" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Omnichannel CRM Automation</Link> for leading UAE businesses. Discover our specialized sector solutions for{" "}
          <Link href="/industries" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>UAE Real Estate, Luxury Retail &amp; Healthcare</Link>.
        </div>
      </section>

      {/* Bottom CTA Card */}
      <section style={{ marginTop: "4rem", background: "linear-gradient(135deg, #0b1530 0%, #00488e 100%)", borderRadius: "24px", padding: "clamp(2.5rem, 5vw, 4rem)", color: "#ffffff", textAlign: "center" }}>
        <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffbe0b", display: "block", marginBottom: "0.75rem" }}>
          • ACCELERATE YOUR UAE &amp; GCC COMMERCIAL PIPELINE /
        </span>
        <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#ffffff", marginBottom: "1rem" }}>
          Ready to Out-Engineer Your Competitors in the UAE?
        </h2>
        <p style={{ fontSize: "1rem", color: "rgba(255, 255, 255, 0.8)", maxWidth: "720px", margin: "0 auto 2rem auto", lineHeight: 1.65 }}>
          Schedule a confidential technical discovery session with our senior engineering team. We will inspect your current website speed, crawl budget, and paid acquisition funnels to map an actionable growth architecture.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="/contact?location=uae"
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

