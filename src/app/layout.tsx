import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileQuickActions } from "@/components/layout/MobileQuickActions";
import { SITE_CONFIG } from "@/lib/constants";
import { constructMetadata } from "@/lib/metadata";
import { AnalyticsScripts } from "@/components/analytics/AnalyticsScripts";
import "@/styles/tokens.css";
import "@/styles/globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
  weight: ["300", "400", "600", "700", "800"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

export const metadata: Metadata = constructMetadata({
  title: "Qubizon — Digital Marketing & Web Development Kerala",
  description: SITE_CONFIG.description,
  path: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_CONFIG.domain}/#organization`,
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.domain,
        logo: `${SITE_CONFIG.domain}/Logo%20Png-07.png`,
        image: `${SITE_CONFIG.domain}/icon.png`,
        email: SITE_CONFIG.email,
        telephone: SITE_CONFIG.phone,
        sameAs: [
          SITE_CONFIG.social.linkedin,
          SITE_CONFIG.social.instagram,
          "https://clutch.co/profile/qubizon",
          "https://www.goodfirms.co/company/qubizon",
          "https://www.crunchbase.com/organization/qubizon",
        ],
        slogan: SITE_CONFIG.slogan,
        description: SITE_CONFIG.description,
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
            name: "Kozhikode",
            containedInPlace: { "@type": "AdministrativeArea", name: "Kerala" },
          },
          {
            "@type": "City",
            name: "Thrissur",
            containedInPlace: { "@type": "AdministrativeArea", name: "Kerala" },
          },
          {
            "@type": "AdministrativeArea",
            name: "Kerala",
          },
        ],
        knowsAbout: [
          "Website Development",
          "Search Engine Optimization",
          "Social Media Marketing",
          "Paid Advertising",
          "Content Marketing",
          "Next.js Web Engineering",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_CONFIG.domain}/#website`,
        url: SITE_CONFIG.domain,
        name: SITE_CONFIG.name,
        publisher: {
          "@id": `${SITE_CONFIG.domain}/#organization`,
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${outfit.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <AnalyticsScripts />
      </head>
      <body className={outfit.className}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" style={{ flex: 1 }}>
          {children}
        </main>
        <Footer />
        <MobileQuickActions />
      </body>
    </html>
  );
}
