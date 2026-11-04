import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SITE_CONFIG } from "@/lib/constants";
import { constructMetadata } from "@/lib/metadata";
import { AnalyticsScripts } from "@/components/analytics/AnalyticsScripts";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = constructMetadata({
  title: `${SITE_CONFIG.name} — ${SITE_CONFIG.slogan}`,
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
        email: SITE_CONFIG.email,
        telephone: SITE_CONFIG.phone,
        sameAs: [
          SITE_CONFIG.social.linkedin,
          SITE_CONFIG.social.instagram,
        ],
        slogan: SITE_CONFIG.slogan,
        description: SITE_CONFIG.description,
        areaServed: [
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
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="512x512" />
        <link rel="icon" href="/icon-48.png" type="image/png" sizes="48x48" />
        <link rel="apple-touch-icon" href="/apple-icon.png" sizes="180x180" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <AnalyticsScripts />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" style={{ flex: 1 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
