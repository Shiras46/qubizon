import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesOverview } from "@/components/home/ServicesOverview";
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

      {/* 4. Execution Process: 4-Step Frosted Methodology Cards */}
      <ProcessSection />

      {/* 7. Frequently Asked Questions: Interactive Accordion with FAQPage Rich Snippet */}
      <FaqSection />

      {/* 8. Closing Call to Action: Framed Architectural Finale Stage ("Let's work Together") */}
      <ConversionSection />
    </>
  );
}
