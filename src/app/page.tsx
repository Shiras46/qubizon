import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { ShowcaseSection } from "@/components/home/ShowcaseSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { FaqSection } from "@/components/home/FaqSection";
import { ConversionSection } from "@/components/home/ConversionSection";
import { constructMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = constructMetadata({
  title: "Qubizon — Digital Marketing & Web Development Kerala",
  description:
    "Leading B2B digital agency in Kerala specializing in Next.js web development, technical SEO, precision PPC advertising, and CRM systems in Kozhikode & Thrissur.",
  path: "/",
  keywords: [
    "Digital Marketing Company in Kerala",
    "Web Development Company in Kerala",
    "Next.js Development Agency Kerala",
    "SEO Agency Kerala",
    "Digital Marketing Kozhikode",
    "Web Development Kozhikode",
    "SEO Company Thrissur",
    "Technical SEO Agency Kerala",
    "B2B Web Architecture Kerala",
    "PPC Agency Kerala",
    "Content Marketing Agency Kerala",
  ],
});

export default function HomePage() {
  // Top-Level Schema.org Structured Data (ProfessionalService & FAQPage for Google Rich Snippets)
  const homeJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_CONFIG.domain}/#service`,
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.domain,
        telephone: SITE_CONFIG.phone,
        email: SITE_CONFIG.email,
        logo: `${SITE_CONFIG.domain}/Logo%20Png-07.png`,
        image: `${SITE_CONFIG.domain}/hero-collaboration.jpg`,
        priceRange: "₹₹",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Kozhikode",
          addressRegion: "Kerala",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 11.2588,
          longitude: 75.7804,
        },
        areaServed: [
          { "@type": "Country", name: "United Arab Emirates" },
          { "@type": "City", name: "Dubai" },
          { "@type": "City", name: "Abu Dhabi" },
          { "@type": "City", name: "Kozhikode" },
          { "@type": "City", name: "Thrissur" },
          { "@type": "City", name: "Kochi" },
          { "@type": "AdministrativeArea", name: "Kerala" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Qubizon Digital Disciplines",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Website Development & Web Architecture",
                description: "Custom, high-speed Next.js web platforms with sub-second LCP and strict WCAG 2.1 AA accessibility.",
                url: `${SITE_CONFIG.domain}/services/web-development`,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Technical SEO & Schema Entity Modeling",
                description: "Enterprise crawl optimization, structured data entity graphs, and search-intent architecture.",
                url: `${SITE_CONFIG.domain}/services/seo`,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Social Media Strategy & Brand Narrative",
                description: "Strategic executive thought leadership and multi-channel asset production.",
                url: `${SITE_CONFIG.domain}/services/social-media-marketing`,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "High-Intent Paid Advertising & Telemetry",
                description: "Precision Google Search and Meta Ads campaigns with server-side conversion telemetry.",
                url: `${SITE_CONFIG.domain}/services/paid-advertising`,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Content Marketing & Editorial Authority",
                description: "Search-aligned technical whitepapers, case studies, and topical authority pillars.",
                url: `${SITE_CONFIG.domain}/services/content-marketing`,
              },
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_CONFIG.domain}/#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "What makes Qubizon's Next.js web development different?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We build on the modern Next.js App Router using React Server Components, TypeScript, and edge rendering. Unlike traditional WordPress templates with plugin bloat, our platforms load in sub-second LCP, score 100/100 on Core Web Vitals, and are immune to monolithic CMS security vulnerabilities.",
            },
          },
          {
            "@type": "Question",
            name: "How does your Technical SEO ensure search indexation in Kerala?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We design deep Schema.org entity graphs, canonical hierarchies, and automated XML sitemaps that clarify topical relevance to Google and AI search engines. We target high-intent regional searches across Kozhikode, Thrissur, and Kerala with crawl-budget optimized page architecture.",
            },
          },
          {
            "@type": "Question",
            name: "Can we engage Qubizon for a single discipline?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. While our unified cube model delivers compound velocity across disciplines, clients regularly engage us specifically for Next.js App Router engineering, technical SEO crawlability, or performance PPC marketing.",
            },
          },
          {
            "@type": "Question",
            name: "How do you structure code ownership and project onboarding?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "All custom code, design tokens, repository commits, and analytics configurations belong 100% to your organization under standard commercial licensing terms from day one. You retain full administrative control over all digital assets.",
            },
          },
          {
            "@type": "Question",
            name: "How do you track PPC return on investment without vanity metrics?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We install server-side conversion telemetry, Google Tag Manager event tracking, and negative keyword clustering. We track qualified consultation submissions, customer acquisition costs, and verified pipeline revenue rather than vanity impressions.",
            },
          },
          {
            "@type": "Question",
            name: "What happens after I submit a project inquiry?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A senior engineer or technical strategist reviews your requirements and responds within one business day with an architectural assessment and a direct link to schedule an introductory consultation.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      {/* Top-Level Google SERP Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />

      {/* 1. Hero: Light Architectural Blueprint Grid & Live Telemetry HUD */}
      <HeroSection />

      {/* 2. About: Framed Architectural Dark Pavilion (Word-by-Word Scroll Reveal) */}
      <AboutSection />

      {/* 3. Services: Line-Separated Editorial Disciplines on Architectural Canvas */}
      <ServicesOverview />

      {/* 4. Showcase: 3-Column Visual Project Cards & Detailed Directory */}
      <ShowcaseSection />

      {/* 5. Execution Process: 4-Step Frosted Methodology Cards */}
      <ProcessSection />

      {/* 7. Frequently Asked Questions: Interactive Accordion with FAQPage Rich Snippet */}
      <FaqSection />

      {/* 7.5. Enterprise Architecture & Unified Growth Governance Framework */}
      <section style={{ background: "#f8fafc", padding: "clamp(3.5rem, 6vw, 5.5rem) 0", borderTop: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0" }}>
        <div className="container" style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ maxWidth: "860px", marginBottom: "3rem" }}>
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#00488e", display: "block", marginBottom: "0.5rem" }}>
              • THE QUBIZON UNIFIED OPERATING MODEL /
            </span>
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#0a0a0a", marginBottom: "1rem" }}>
              Enterprise Digital Architecture for Ambitious Commercial Brands
            </h2>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "#4a5568", margin: 0 }}>
              Traditional agencies separate design, development, SEO, and advertising into disconnected vendor silos. This fragmentation creates slow page loads, tracking drop-offs, bloated CMS maintenance retainers, and wasted advertising spend. Qubizon unites full-stack software engineering with precision performance marketing under one unified mathematical discipline.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.75rem", marginBottom: "3rem" }}>
            <div style={{ background: "#ffffff", padding: "2rem", borderRadius: "16px", border: "1px solid #e2e8f0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.75rem" }}>
                <CheckCircle2 size={20} style={{ color: "#00488e" }} aria-hidden="true" />
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#0a0a0a", margin: 0 }}>
                  Sub-Second Next.js Web Engineering
                </h3>
              </div>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.65, color: "#64748b", margin: 0 }}>
                We replace bloated WordPress plugins and legacy PHP themes with custom Next.js 15 React Server Components compiled directly to edge servers. Pages achieve sub-second Largest Contentful Paint (LCP &lt; 0.9s), 100/100 Core Web Vitals, and zero layout shift, maximizing mobile conversion rates across India and the GCC.
              </p>
            </div>

            <div style={{ background: "#ffffff", padding: "2rem", borderRadius: "16px", border: "1px solid #e2e8f0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.75rem" }}>
                <CheckCircle2 size={20} style={{ color: "#00488e" }} aria-hidden="true" />
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#0a0a0a", margin: 0 }}>
                  Semantic Search &amp; Knowledge Graphs
                </h3>
              </div>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.65, color: "#64748b", margin: 0 }}>
                Modern search engines rank topical authority rather than isolated keywords. We engineer Schema.org entity graphs, crawl-budget-optimized architectures, and bilingual English-Arabic digital experiences that dominate Google search results across Kerala, the UAE, and international commercial hubs.
              </p>
            </div>

            <div style={{ background: "#ffffff", padding: "2rem", borderRadius: "16px", border: "1px solid #e2e8f0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.75rem" }}>
                <CheckCircle2 size={20} style={{ color: "#00488e" }} aria-hidden="true" />
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#0a0a0a", margin: 0 }}>
                  Server-Side Telemetry &amp; Paid Attribution
                </h3>
              </div>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.65, color: "#64748b", margin: 0 }}>
                Over 40% of digital marketing budgets are wasted on uncalibrated broad-match keywords and tracking blind spots. We deploy server-side Google Tag Manager and Meta Conversions API (CAPI) with 99.8% signal accuracy, eliminating budget waste and lowering customer acquisition costs (CAC).
              </p>
            </div>

            <div style={{ background: "#ffffff", padding: "2rem", borderRadius: "16px", border: "1px solid #e2e8f0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.75rem" }}>
                <CheckCircle2 size={20} style={{ color: "#00488e" }} aria-hidden="true" />
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#0a0a0a", margin: 0 }}>
                  Automated CRM &amp; Instant WhatsApp Pipelines
                </h3>
              </div>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.65, color: "#64748b", margin: 0 }}>
                Lead generation without instantaneous response causes lost revenue. Every prospect submission triggers official WhatsApp Business API webhooks, syncs directly with your HubSpot or Zoho CRM, and assigns immediate follow-up tasks to your sales team within seconds.
              </p>
            </div>
          </div>

          <div style={{ background: "#ffffff", padding: "2rem clamp(1.5rem, 3vw, 2.5rem)", borderRadius: "16px", border: "1px solid #e2e8f0" }}>
            <h4 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.75rem" }}>
              Cross-Border Commercial Corridors &amp; Statutory Compliance
            </h4>
            <p style={{ fontSize: "0.92rem", lineHeight: 1.65, color: "#64748b", marginBottom: "1.5rem" }}>
              Qubizon supports enterprise clients operating across India, the GCC, Europe, and North America. Our systems strictly enforce regional data protection mandates, including the Indian Digital Personal Data Protection (DPDP) Act 2023, European Union GDPR, UAE Federal Decree-Law No. 45/2021, and Saudi Arabia ZATCA Phase 2 e-invoicing protocols.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", fontSize: "0.85rem", color: "#64748b" }}>
              <strong>Regional Delivery Centers:</strong>
              <Link href="/locations/kozhikode" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Kozhikode</Link> &bull;
              <Link href="/locations/thrissur" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Thrissur</Link> &bull;
              <Link href="/locations/uae" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>UAE (Dubai &amp; Abu Dhabi)</Link> &bull;
              <Link href="/locations/saudi-arabia" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Saudi Arabia</Link> &bull;
              <Link href="/locations/qatar" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Qatar</Link> &bull;
              <Link href="/locations/kuwait" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Kuwait</Link> &bull;
              <Link href="/locations/bahrain" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Bahrain</Link> &bull;
              <Link href="/locations/oman" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Oman</Link> &bull;
              <Link href="/locations" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>24 Global Corridors &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Closing Call to Action: Framed Architectural Finale Stage ("Let's work Together") */}
      <ConversionSection />
    </>
  );
}
