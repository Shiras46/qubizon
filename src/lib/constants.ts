export const SITE_CONFIG = {
  name: "Qubizon Digital Solutions",
  shortName: "Qubizon",
  slogan: "All your digital needs in one cube.",
  description:
    "Qubizon Digital Solutions unifies high-performance website development, technical SEO, social media marketing, paid advertising, and content marketing under one disciplined agency partner.",
  domain: "https://qubizon.com",
  email: "info@qubizon.com",
  phone: "079029 11961",
  phoneTel: "+917902911961",
  social: {
    linkedin: "https://www.linkedin.com/company/qubizondigitalsolutions/",
    instagram: "https://www.instagram.com/qubizon?vrfl=MXR2b2JqcWQ1MXlkZw==",
  },
} as const;

export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export const MAIN_NAV_ITEMS: readonly NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
] as const;

export interface ServiceDefinition {
  id: string;
  title: string;
  slug: string;
  href: string;
  shortDescription: string;
  cubeFace: "front" | "top" | "right" | "left" | "back";
}

export const CORE_SERVICES: readonly ServiceDefinition[] = [
  {
    id: "web-dev",
    title: "Website Development",
    slug: "web-development",
    href: "/services/web-development",
    shortDescription: "Custom, high-speed, accessible web platforms built with modern Next.js and resilient architecture.",
    cubeFace: "front",
  },
  {
    id: "seo",
    title: "Search Engine Optimization",
    slug: "seo",
    href: "/services/seo",
    shortDescription: "Technical SEO, crawl engineering, keyword clustering, and sustainable organic search dominance.",
    cubeFace: "top",
  },
  {
    id: "social-media",
    title: "Social Media Marketing",
    slug: "social-media-marketing",
    href: "/services/social-media-marketing",
    shortDescription: "Targeted social growth, active community management, and consistent multi-channel brand presence.",
    cubeFace: "right",
  },
  {
    id: "paid-ads",
    title: "Paid Advertising",
    slug: "paid-advertising",
    href: "/services/paid-advertising",
    shortDescription: "Performance marketing, high-intent PPC, and conversion-optimized ad campaigns engineered for positive ROI.",
    cubeFace: "left",
  },
  {
    id: "content",
    title: "Content Marketing",
    slug: "content-marketing",
    href: "/services/content-marketing",
    shortDescription: "Authoritative editorial, search-aligned content strategy, and narrative assets that build trust.",
    cubeFace: "back",
  },
] as const;
