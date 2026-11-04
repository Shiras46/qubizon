import type { Metadata } from "next";
import { SITE_CONFIG } from "./constants";

export interface PageMetadataParams {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
  keywords?: string[];
}

/**
 * Generates verified, standardized Next.js Metadata with strict canonical resolution.
 * Production origin: https://qubizon.com
 */
export function constructMetadata({
  title,
  description,
  path = "",
  noIndex = false,
  keywords,
}: PageMetadataParams): Metadata {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = `${SITE_CONFIG.domain}${normalizedPath === "/" ? "" : normalizedPath}`;
  const formattedTitle = title.includes(SITE_CONFIG.shortName)
    ? title
    : `${title} | ${SITE_CONFIG.shortName}`;

  return {
    title: formattedTitle,
    description,
    ...(keywords && keywords.length > 0 ? { keywords } : {}),
    alternates: {
      canonical: canonicalUrl,
    },
    icons: {
      icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
      apple: [{ url: "/icon.svg", type: "image/svg+xml" }],
    },
    metadataBase: new URL(SITE_CONFIG.domain),
    openGraph: {
      title: formattedTitle,
      description,
      url: canonicalUrl,
      siteName: SITE_CONFIG.name,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: formattedTitle,
      description,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
