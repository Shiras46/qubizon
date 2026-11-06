import type { MetadataRoute } from "next";
import { SITE_CONFIG, MAIN_NAV_ITEMS, CORE_SERVICES } from "@/lib/constants";
import { BLOG_POSTS } from "@/lib/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  // 1. Root and primary navigation routes
  const staticRoutes: MetadataRoute.Sitemap = MAIN_NAV_ITEMS.map((item) => ({
    url: `${SITE_CONFIG.domain}${item.href === "/" ? "" : item.href}`,
    lastModified: currentDate,
    changeFrequency: item.href === "/" ? "weekly" : "monthly",
    priority: item.href === "/" ? 1.0 : 0.8,
  }));

  // 2. Core service pillar routes
  const serviceRoutes: MetadataRoute.Sitemap = CORE_SERVICES.map((service) => ({
    url: `${SITE_CONFIG.domain}${service.href}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  // 3. Regional Service Area routes (Priority Kerala Hubs)
  const locationRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_CONFIG.domain}/locations`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_CONFIG.domain}/locations/kozhikode`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_CONFIG.domain}/locations/thrissur`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  // 4. Content & Blog routes
  const blogIndexRoute: MetadataRoute.Sitemap = [
    {
      url: `${SITE_CONFIG.domain}/blog`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const blogArticleRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${SITE_CONFIG.domain}/blog/${post.slug}`,
    lastModified: new Date(`${post.date}T00:00:00.000Z`),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // 5. Legal / Privacy Policy
  const legalRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_CONFIG.domain}/privacy`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Combine and deduplicate
  const allRoutes = [
    ...staticRoutes,
    ...serviceRoutes,
    ...locationRoutes,
    ...blogIndexRoute,
    ...blogArticleRoutes,
    ...legalRoutes,
  ];

  const uniqueUrls = new Map<string, MetadataRoute.Sitemap[number]>();
  allRoutes.forEach((route) => {
    if (!uniqueUrls.has(route.url)) {
      uniqueUrls.set(route.url, route);
    }
  });

  return Array.from(uniqueUrls.values());
}
