import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { ProcessSection } from "@/components/home/ProcessSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
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
                name: "Digital Marketing",
                description: "Strategic digital campaigns designed to improve brand awareness, attract potential customers, and support business growth.",
                url: `${SITE_CONFIG.domain}/services/paid-advertising`,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Web Development",
                description: "Responsive, user-friendly websites that present your business professionally and work smoothly across desktop, tablet, and mobile devices.",
                url: `${SITE_CONFIG.domain}/services/web-development`,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Graphic Design",
                description: "Professional design for logos, social media graphics, marketing materials, and digital or print assets reflecting your identity.",
                url: `${SITE_CONFIG.domain}/services`,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Search Engine Optimization (SEO)",
                description: "Improve your website’s visibility in search results, target relevant search terms, and make it easier for customers to find you.",
                url: `${SITE_CONFIG.domain}/services/seo`,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Social Media Marketing (SMM)",
                description: "Content planning, creative posts, audience engagement, and campaign management to keep your brand active on social media.",
                url: `${SITE_CONFIG.domain}/services/social-media-marketing`,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "CRM Solutions",
                description: "Organize customer information, lead tracking, follow-ups, and sales processes to manage customer relationships effectively.",
                url: `${SITE_CONFIG.domain}/services/crm`,
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
            name: "What services does Qubizon Digital Solutions offer?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We offer digital marketing, web development, graphic design, SEO, social media marketing, CRM solutions, and custom software services.",
            },
          },
          {
            "@type": "Question",
            name: "Can I request more than one service?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. You can choose individual services or combine several, such as web development, SEO, and social media marketing, to support a broader digital strategy.",
            },
          },
          {
            "@type": "Question",
            name: "Do you work with small businesses?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We work with businesses at different stages and can discuss solutions suited to your goals, needs, and budget.",
            },
          },
          {
            "@type": "Question",
            name: "Will my website work on mobile devices?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We build websites to be responsive, so they can adapt to different screen sizes, including smartphones, tablets, and desktop computers.",
            },
          },
          {
            "@type": "Question",
            name: "How do I get started?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Contact us with a brief description of your business and what you need. We’ll discuss your goals and recommend the best next steps.",
            },
          },
          {
            "@type": "Question",
            name: "How much do your services cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Pricing depends on the service and the scope of your project. Contact us for a consultation and a quote tailored to your requirements.",
            },
          },
          {
            "@type": "Question",
            name: "Do you provide support after a project is completed?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Support options depend on the service and project. Please contact us to discuss the ongoing assistance that may be available for your needs.",
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

      {/* 5. Testimonials: Interactive Community Trust Card (Reference Image 1 Model) */}
      <TestimonialsSection />

      {/* 6. Frequently Asked Questions: Split Layout with Big "FAQ" + Hairline Accordion (Reference Image 2 Model) */}
      <FaqSection />

      {/* 8. Closing Call to Action: Framed Architectural Finale Stage ("Let's work Together") */}
      <ConversionSection />
    </>
  );
}
