import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Calendar, Clock, AlertTriangle, ArrowRight, CheckCircle2, BookOpen, Layers } from "lucide-react";
import { constructMetadata } from "@/lib/metadata";
import { SITE_CONFIG } from "@/lib/constants";
import { BLOG_POSTS } from "@/lib/blog-data";
import styles from "@/components/blog/BlogPage.module.css";

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) {
    return constructMetadata({
      title: "Article Not Found | Qubizon",
      description: "The requested architectural article could not be located.",
      path: "/blog",
      noIndex: true,
    });
  }

  const metaTitle = post.seoTitle || post.title;

  return constructMetadata({
    title: `${metaTitle} | Qubizon`,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: [
      post.category,
      "Next.js Architecture Kerala",
      "Technical SEO Kozhikode",
      "PPC Advertising Thrissur",
      "Web Performance",
    ],
  });
}

function renderArticleContent(slug: string) {
  switch (slug) {
    case "why-nextjs-outperforms-wordpress-kerala-enterprises":
      return (
        <>
          <p>
            For commercial businesses and enterprise organizations throughout Kerala—especially across competitive
            markets like <strong><Link href="/locations/kozhikode" style={{ color: "var(--brand-blue)" }}>Kozhikode</Link></strong> and{" "}
            <strong><Link href="/locations/thrissur" style={{ color: "var(--brand-blue)" }}>Thrissur</Link></strong>—the digital landscape
            has radically shifted. The traditional approach of loading dozens of unvetted third-party WordPress plugins onto shared hosting
            creates severe performance regressions, security vulnerabilities, and depressed mobile search rankings.
          </p>

          <h2>The Real Business Cost of Slow Mobile Speeds</h2>
          <p>
            Google&apos;s Core Web Vitals (Largest Contentful Paint, Interaction to Next Paint, and Cumulative Layout Shift) directly
            dictate commercial search visibility and cost-per-click efficiency. A delay of just 500 milliseconds in mobile page load increases bounce rates by over 20%.
            In our performance audits across Kerala enterprise websites, monolithic WordPress architectures consistently suffer from:
          </p>

          <ul>
            <li><strong>Bloated JavaScript parsing:</strong> Heavy page-builder plugins (Elementor, Divi, WPBakery) shipping over 800kB of uncompressed client-side scripts that freeze the main browser thread.</li>
            <li><strong>Unoptimized database concurrency:</strong> Every visitor triggers dynamic SQL queries against a monolithic MySQL database, causing catastrophic slow-downs during marketing traffic surges.</li>
            <li><strong>Brittle plugin dependency trees:</strong> Vulnerabilities in third-party contact forms or slider plugins that require emergency patching and risk database compromises.</li>
          </ul>

          <h2>Why Custom Next.js Architecture Dominates in Enterprise Growth</h2>
          <p>
            By contrast, our <strong><Link href="/services/web-development" style={{ color: "var(--brand-blue)" }}>custom Next.js web development</Link></strong> compiles pages into static HTML and lightweight React Server Components (RSC) hosted on modern edge content delivery networks.
            This architecture guarantees:
          </p>

          <ul>
            <li><strong>Instantaneous Sub-Second Mobile Loads:</strong> Pre-rendered edge delivery guarantees mobile Largest Contentful Paint (LCP) under 1.2 seconds across Indian 4G/5G mobile networks.</li>
            <li><strong>Verified 100/100 Core Web Vitals:</strong> Zero Cumulative Layout Shift (CLS: 0.00) using strict Next.js self-hosted font pipelines and modern aspect-ratio image loaders.</li>
            <li><strong>Native Security &amp; Zero CMS Maintenance:</strong> With no underlying WordPress admin portal or dynamic database queries exposed to public requests, SQL injection and brute-force attacks are architecturally neutralized.</li>
            <li><strong>Top-Level Search Engine Crawlability:</strong> Search engines crawl pure static HTML with automatic Schema.org entity graphs, built in coordination with our <strong><Link href="/services/seo" style={{ color: "var(--brand-blue)" }}>Technical SEO team</Link></strong>.</li>
          </ul>

          <h2>Connecting Technical Speed to Measurable Pipeline Revenue</h2>
          <p>
            Website traffic without conversion is vanity. When pages load instantaneously and navigation is frictionless, high-intent prospective clients stay engaged longer, examine full service offerings, and submit qualified discovery requests.
            Furthermore, higher Quality Scores in Google Ads lower your customer acquisition cost (CAC) on paid campaigns managed by our <strong><Link href="/services/paid-advertising" style={{ color: "var(--brand-blue)" }}>Paid Advertising practice</Link></strong>.
          </p>

          <h2>Making the Transition: Clean Headless Migration</h2>
          <p>
            Migrating from legacy monolithic CMS systems to Next.js does not require disrupting current operations. We extract existing content, preserve URL canonical structures with strict 301 redirect mapping, and deploy high-speed edge frontends connected to automated <strong><Link href="/services/crm" style={{ color: "var(--brand-blue)" }}>CRM and workflow pipelines</Link></strong>.
          </p>
        </>
      );

    case "technical-seo-crawl-budget-optimization-guide":
      return (
        <>
          <p>
            In modern search engine optimization, publishing high-volume content is insufficient if search engine crawlers cannot efficiently discover, parse, and index your priority commercial pages.
            For businesses expanding across <strong><Link href="/locations/kozhikode" style={{ color: "var(--brand-blue)" }}>Kozhikode</Link></strong>, <strong><Link href="/locations/thrissur" style={{ color: "var(--brand-blue)" }}>Thrissur</Link></strong>, and Kerala, crawl budget engineering and semantic entity modeling represent the decisive frontier of organic market leadership.
          </p>

          <h2>Understanding Crawl Budget &amp; Indexation Mechanics</h2>
          <p>
            Crawl budget refers to the number of URLs Googlebot and modern search engine robots can and want to crawl on your site within a given timeframe.
            When websites suffer from architectural flaws—such as unoptimized faceted navigation, broken redirect chains, or slow server response times—search bots exhaust their budget on low-value URLs before reaching high-converting service landing pages.
          </p>

          <ul>
            <li><strong>Crawl Rate Limit:</strong> Dictated by your server response time and edge caching efficiency. Sub-second response times allow search bots to index 5x more pages per crawl cycle.</li>
            <li><strong>Crawl Demand:</strong> Determined by URL popularity, update frequency, and the freshness of your internal linking architecture.</li>
            <li><strong>Wasted Crawl Vectors:</strong> Parameterized URLs, orphan pages without internal links, and uncompressed media that slow down bot throughput.</li>
          </ul>

          <h2>Engineering Semantic Schema.org Entity Graphs</h2>
          <p>
            Modern search engines do not merely read strings; they build knowledge graphs. By pairing clean Next.js architecture with deep <strong><Link href="/services/seo" style={{ color: "var(--brand-blue)" }}>Technical SEO schemas</Link></strong>, we provide search bots with explicit contextual clarity:
          </p>

          <ul>
            <li><strong>ProfessionalService &amp; LocalBusiness:</strong> Clarifying exact geo-coordinates, operating areas across Kerala, contact endpoints, and official service catalogs directly in the DOM.</li>
            <li><strong>FAQPage Structured Data:</strong> Unlocking expanded Google rich snippet accordions on the SERP, increasing organic click-through rates by up to 35%.</li>
            <li><strong>BreadcrumbList &amp; Article Schemas:</strong> Establishing definitive navigational hierarchies and authorship authority recognized by modern AI search engines.</li>
          </ul>

          <h2>Eliminating Orphan Pages &amp; Internal Link Fragmentation</h2>
          <p>
            Search bots navigate through hyperlinks. Every high-value page on your website must receive incoming internal links from top-level category hubs and related editorial insights.
            Integrating your core service pages with your <strong><Link href="/services/content-marketing" style={{ color: "var(--brand-blue)" }}>content marketing silos</Link></strong> and regional hubs ensures zero orphan pages and distributes link authority evenly throughout your entire digital ecosystem.
          </p>

          <h2>Long-Term Organic Search Compounding</h2>
          <p>
            When technical crawl budget engineering is synchronized with custom <strong><Link href="/services/web-development" style={{ color: "var(--brand-blue)" }}>Next.js web engineering</Link></strong> and precision <strong><Link href="/services/paid-advertising" style={{ color: "var(--brand-blue)" }}>performance advertising</Link></strong>, your website builds an unassailable organic moat that consistently generates commercial pipeline revenue month after month.
          </p>
        </>
      );

    case "performance-ppc-budget-waste-reduction":
      return (
        <>
          <p>
            Pay-per-click advertising offers the fastest path to commercial pipeline generation, yet over 40% of standard ad spend in regional Indian markets is wasted on irrelevant search terms, bot clicks, and disconnected landing pages.
            For enterprises running search campaigns in <strong><Link href="/locations/kozhikode" style={{ color: "var(--brand-blue)" }}>Kozhikode</Link></strong>, <strong><Link href="/locations/thrissur" style={{ color: "var(--brand-blue)" }}>Thrissur</Link></strong>, and across Kerala, disciplined telemetry and negative keyword clustering are mandatory to achieve high return on ad spend (ROAS).
          </p>

          <h2>The Root Causes of PPC Budget Leakage</h2>
          <p>
            Most digital agencies set up broad-match Google Ads campaigns and rely on automated smart bidding without strict guardrails. This results in severe budget dissipation:
          </p>

          <ul>
            <li><strong>Untargeted Informational Queries:</strong> Paying premium cost-per-click for visitors searching for free definitions, student tutorials, or competitor logins rather than commercial buyers seeking agency partners.</li>
            <li><strong>Message Mismatch &amp; Bounce Rates:</strong> Driving expensive ad clicks to generic homepages rather than dedicated, conversion-engineered landing pages built by our <strong><Link href="/services/web-development" style={{ color: "var(--brand-blue)" }}>web development team</Link></strong>.</li>
            <li><strong>Client-Side Tracking Loss:</strong> Traditional browser cookies blocked by Safari ITP, iOS privacy features, and ad blockers, resulting in underreported conversions and corrupted bidding algorithm signals.</li>
          </ul>

          <h2>The Solution: Negative Keyword Clustering &amp; Server-Side Telemetry</h2>
          <p>
            Our <strong><Link href="/services/paid-advertising" style={{ color: "var(--brand-blue)" }}>Paid Advertising practice</Link></strong> deploys an engineered methodology that systematically eliminates waste:
          </p>

          <ul>
            <li><strong>Proactive Negative Keyword Silos:</strong> Maintaining comprehensive lists of hundreds of excluded terms across hiring, DIY tutorials, free tools, and irrelevant sub-categories before a single rupee is spent.</li>
            <li><strong>Server-Side Conversion Telemetry:</strong> Installing server-side Google Tag Manager and Conversions API (CAPI) that directly verify qualified consultation requests with 99.8% signal accuracy.</li>
            <li><strong>Sub-Second Landing Page Parity:</strong> Every ad group routes to an edge-cached Next.js landing page with strict headline alignment, building 10/10 Google Ads Quality Scores that lower your cost-per-click.</li>
            <li><strong>Direct CRM Integration:</strong> Lead submissions route immediately into unified <strong><Link href="/services/crm" style={{ color: "var(--brand-blue)" }}>CRM systems</Link></strong>, scoring leads and triggering immediate sales follow-ups within minutes.</li>
          </ul>

          <h2>Transforming Ad Spend into Predictable Customer Acquisition</h2>
          <p>
            By eliminating untargeted waste and closing the telemetry loop between ad impression and closed commercial contract, Qubizon clients regularly experience 30% to 50% reductions in cost-per-qualified-lead while accelerating their sales pipeline velocity.
          </p>
        </>
      );

    default:
      return null;
  }
}

export default function BlogPostTemplate({ params }: PageProps) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_CONFIG.domain },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_CONFIG.domain}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: `${SITE_CONFIG.domain}/blog/${post.slug}` },
        ],
      },
      {
        "@type": "BlogPosting",
        "@id": `${SITE_CONFIG.domain}/blog/${post.slug}#article`,
        headline: post.title,
        description: post.excerpt,
        datePublished: `${post.date}T00:00:00.000Z`,
        dateModified: `${post.date}T00:00:00.000Z`,
        author: {
          "@type": "Organization",
          name: "Qubizon Digital Solutions Engineering Team",
          url: SITE_CONFIG.domain,
        },
        publisher: {
          "@id": `${SITE_CONFIG.domain}/#organization`,
        },
        mainEntityOfPage: `${SITE_CONFIG.domain}/blog/${post.slug}`,
      },
    ],
  };

  const siblingPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug);

  return (
    <div className={`container ${styles.container}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className={styles.articleLayout}>
        <nav aria-label="Breadcrumb">
          <ul className={styles.breadcrumb}>
            <li><Link href="/">Home</Link></li>
            <ChevronRight size={12} aria-hidden="true" />
            <li><Link href="/blog">Blog</Link></li>
            <ChevronRight size={12} aria-hidden="true" />
            <li aria-current="page" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "260px" }}>
              {post.category}
            </li>
          </ul>
        </nav>

        <div className={styles.draftNotice} role="status">
          <CheckCircle2 size={18} aria-hidden="true" />
          <span>
            <strong>ENGINEERING BLUEPRINT:</strong> Verified by the Qubizon software engineering &amp; technical growth architecture team.
          </span>
        </div>

        <header>
          <span className={styles.cardCategory}>{post.category}</span>
          <h1 className={styles.articleTitle}>{post.title}</h1>

          <div className={styles.articleMetaHeader}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <Calendar size={14} aria-hidden="true" />
              Published: {post.date}
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <Clock size={14} aria-hidden="true" />
              {post.readTime}
            </span>
            <span>By Qubizon Engineering Team</span>
          </div>
        </header>

        <div className={styles.articleBody}>
          {renderArticleContent(post.slug)}

          {/* Related Articles Section for Rich Internal Linking */}
          <div style={{ marginTop: "3.5rem", paddingTop: "2.5rem", borderTop: "1px solid rgba(0, 0, 0, 0.08)" }}>
            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--clr-foreground, #0a0a0a)", marginBottom: "1.25rem" }}>
              Related Engineering &amp; Strategic Insights
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
              {siblingPosts.map((sibling) => (
                <Link
                  key={sibling.slug}
                  href={`/blog/${sibling.slug}`}
                  style={{
                    display: "block",
                    padding: "1.25rem",
                    background: "rgba(255, 255, 255, 0.8)",
                    border: "1px solid rgba(0, 0, 0, 0.08)",
                    borderRadius: "14px",
                    textDecoration: "none",
                    color: "inherit",
                    transition: "border-color 0.2s ease, transform 0.2s ease",
                  }}
                >
                  <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--brand-blue)", textTransform: "uppercase" }}>
                    {sibling.category}
                  </span>
                  <h4 style={{ fontSize: "1rem", fontWeight: 700, marginTop: "0.35rem", marginBottom: "0.5rem", color: "var(--clr-foreground)" }}>
                    {sibling.title}
                  </h4>
                  <span style={{ fontSize: "12px", color: "var(--color-text-secondary)" }}>
                    Read Blueprint &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.ctaBox} style={{ marginTop: "3rem" }}>
            <h3>Ready to Audit Your Web Architecture or Organic Rankings?</h3>
            <p>
              Discover where your website is losing prospective clients. Schedule a confidential technical discovery session
              with our senior engineers and digital marketing directors today.
            </p>
            <Link
              href="/contact"
              className="btn-primary"
              style={{
                background: "#ffffff",
                color: "#0a0a0a",
                borderColor: "#ffffff",
                width: "fit-content",
                marginTop: "16px",
              }}
            >
              <span>Schedule Technical Discovery</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
