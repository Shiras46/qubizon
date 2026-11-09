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

          <h2>Architectural Benchmark Summary &amp; Migration Checklist</h2>
          <p>
            For enterprise technology leads evaluating CMS modernization, our engineering audits demonstrate quantifiable operational advantages when moving from legacy PHP stacks to React Server Components:
          </p>
          <ul>
            <li><strong>Time to First Byte (TTFB):</strong> Drops from 850ms+ on shared WordPress hosting to under 120ms through global Vercel/Cloudflare edge server nodes.</li>
            <li><strong>Security Vulnerability Surface:</strong> Eliminates plugin exploits, WP-JSON brute force attacks, and database injection risks through static compilation and decoupled headless APIs.</li>
            <li><strong>Operational Cost of Ownership:</strong> Replaces expensive recurring premium plugin licenses and continuous security patching retainers with clean, self-contained modern code.</li>
            <li><strong>Long-Term Design System Scalability:</strong> Shared CSS custom properties, fluid typographic clamps, and modular UI components ensure complete brand consistency across new landing pages.</li>
          </ul>

          <h2>Making the Transition: Clean Headless Migration</h2>
          <p>
            Migrating from legacy monolithic CMS systems to Next.js does not require disrupting current operations. We extract existing content, preserve URL canonical structures with strict 301 redirect mapping, and deploy high-speed edge frontends connected to automated <strong><Link href="/services/crm" style={{ color: "var(--brand-blue)" }}>CRM and workflow pipelines</Link></strong>.
          </p>

          <h2>Step-by-Step Enterprise Headless Migration Playbook</h2>
          <p>
            For commercial leadership planning a transition away from brittle WordPress architectures, our engineering team executes a disciplined four-stage migration framework:
          </p>

          <h3>1. Headless Content Ingestion &amp; Schema Normalization</h3>
          <p>
            Rather than discarding historical editorial content, we programmatically query your legacy WordPress REST API or WPGraphQL endpoints. Content objects are sanitized, image references are parsed, and HTML structures are normalized into clean React Server Components or structured MDX documents, ensuring zero lost content or formatting errors.
          </p>

          <h3>2. Strict Canonical Mapping &amp; 301 Redirect Architecture</h3>
          <p>
            Preserving accumulated organic search equity is non-negotiable. Before cutting over domain DNS, our technical SEO architects crawl every indexed URL and compile a 1-to-1 canonical redirect map into Next.js edge middleware. Every legacy permalink resolves to its modern destination in exactly one HTTP 301 hop, preventing indexation drop-offs.
          </p>

          <h3>3. Incremental Static Regeneration (ISR) &amp; Edge Caching</h3>
          <p>
            Custom Next.js App Router applications utilize Incremental Static Regeneration to combine the speed of static HTML with the flexibility of dynamic data. When marketing teams publish new articles or update service packages, background revalidation regenerates the page within milliseconds without triggering server-wide rebuilds or downtime.
          </p>

          <h3>4. Decoupled Form Handlers &amp; DPDP Act Compliance</h3>
          <p>
            Legacy WordPress forms often store sensitive customer inquiries in plain MySQL tables accessible to any installed plugin. We replace these with serverless API route handlers that sanitize untrusted input, enforce cryptographic rate-limiting, and transmit encrypted lead data directly into your enterprise CRM via official WhatsApp Cloud API and webhook connections.
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

          <h2>Technical Verification Checklist for Crawl Efficiency</h2>
          <p>
            When auditing enterprise domains for crawl budget waste, our technical SEO team enforces four primary code-level checkpoints:
          </p>
          <ul>
            <li><strong>Robots.txt Directive Cleanliness:</strong> Disallow low-value query parameters, search filter facets, and internal staging endpoints to prevent search bots from indexing endless URL variations.</li>
            <li><strong>Canonical Tag Self-Referencing:</strong> Ensure every single canonical URL matches its exact destination protocol (https), domain variant (non-www), and path formatting without trailing slash mismatch.</li>
            <li><strong>XML Sitemap Partitioning:</strong> Keep individual sitemaps under 10,000 URLs with accurate &lt;lastmod&gt; timestamps to prioritize Googlebot crawling toward recently updated content assets.</li>
            <li><strong>HTTP 301 Redirect Loop Elimination:</strong> Ensure all legacy URLs resolve to target destinations in exactly one single redirect hop, eliminating crawl-budget-depleting redirect chains.</li>
          </ul>

          <h2>Advanced Entity Knowledge Graph Modeling &amp; Log Analysis</h2>
          <p>
            In addition to standard on-page technical fixes, high-growth enterprise domains require advanced entity disambiguation and continuous server access log analysis:
          </p>

          <h3>1. Semantic JSON-LD Graph Serialization</h3>
          <p>
            Rather than injecting disconnected schema blocks across different template partials, we compile a unified JSON-LD graph into the root DOM document. By interconnecting your <code>Organization</code>, <code>ProfessionalService</code>, <code>FAQPage</code>, and <code>BreadcrumbList</code> nodes via explicit <code>@id</code> URI references, search engines construct an unambiguous understanding of your geographic and commercial footprint.
          </p>

          <h3>2. Eliminating Faceted Navigation Indexation Traps</h3>
          <p>
            For e-commerce portals and real estate directories, faceted search filters can generate millions of thin, parameter-riddled URLs that deplete Googlebot crawl quotas. We engineer client-side filtering via URL hash states or enforce strict server-side <code>rel=&quot;canonical&quot;</code> headers that direct bot equity back to the root category pillar.
          </p>

          <h3>3. Real-Time Server Access Log Telemetry</h3>
          <p>
            We parse raw edge access logs to track Googlebot Desktop and Googlebot Smartphone user-agent hit frequencies in real time. This reveals crawl anomalies, 4xx/5xx server response spikes, and low-priority directories consuming crawl budget before they impact commercial organic search rankings.
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

          <h2>PPC Account Hygiene &amp; Waste Prevention Checklist</h2>
          <p>
            Before allocating capital to paid search or social media marketing, ensure your account architecture conforms to these four defensive engineering principles:
          </p>
          <ul>
            <li><strong>Phrase and Exact Match Isolation:</strong> Never combine broad match exploration and exact match conversion keywords within the same ad set; isolate budgets according to keyword intent certainty.</li>
            <li><strong>Automated Search Query Negative Scrubbing:</strong> Review actual search term reports on a weekly cadence to catch new competitor brand variations, employment seekers, and non-commercial informational queries.</li>
            <li><strong>Server-Side SHA-256 Hashing:</strong> Ensure customer email and phone identifiers are cryptographically hashed using SHA-256 before transmission via Google Enhanced Conversions or Meta CAPI.</li>
            <li><strong>Landing Page Load Time Parity:</strong> Ensure mobile destination pages load in under 1.5 seconds on real mobile devices to prevent high bounce rates before conversion pixels fire.</li>
          </ul>

          <h2>Advanced Server-Side GTM &amp; Offline Lead Attribution Blueprint</h2>
          <p>
            To achieve sustainable customer acquisition efficiency in regional and international search markets, performance media campaigns must be paired with server-side telemetry and closed-loop offline conversion syncing:
          </p>

          <h3>1. Server-Side Google Tag Manager (sGTM) on Cloud Edge</h3>
          <p>
            We route all telemetry events through an isolated server-side GTM container provisioned on AWS or Cloudflare edge servers under your custom sub-domain (e.g., <code>telemetry.yourdomain.com</code>). This first-party context bypasses client-side content blockers, ensures 99.8% event delivery, and sanitizes outgoing payloads to remove sensitive query parameters before forwarding to advertising platforms.
          </p>

          <h3>2. Offline CRM Deal Status Synchronization</h3>
          <p>
            Standard ad algorithms optimize for immediate form submissions, which often incentivizes low-quality leads or unqualified tire-kickers. We build automated webhooks connecting your CRM deal pipeline back to Google Ads via the Google Click ID (GCLID) and Enhanced Conversions API. When a deal reaches &quot;Qualified Opportunity&quot; or &quot;Contract Closed,&quot; the value is uploaded back into the ad platform, training the smart bidding algorithm to acquire high-ticket buyers rather than vanity form fills.
          </p>

          <h3>3. Cross-Border Message Match &amp; RTL Landing Page Parity</h3>
          <p>
            When driving traffic across multilingual markets—such as UAE, Saudi Arabia, or Qatar—every campaign variant must lead to a dedicated, culturally resonant landing page. Our Next.js architectures serve native Arabic Right-to-Left (RTL) and English landing pages with sub-second LCP and dynamic headline parameters matching the exact commercial query searched by the prospect.
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

          {/* Enterprise Engineering SLA & Architectural Standards Card */}
          <div style={{ marginTop: "3.5rem", background: "#f8fafc", padding: "2.5rem clamp(1.5rem, 3.5vw, 2.75rem)", borderRadius: "20px", border: "1px solid #e2e8f0" }}>
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#00488e", display: "block", marginBottom: "0.5rem" }}>
              • PRACTITIONER QUALITY ASSURANCE /
            </span>
            <h3 style={{ fontSize: "clamp(1.3rem, 2vw, 1.65rem)", fontWeight: 800, color: "#0a0a0a", marginBottom: "0.75rem" }}>
              Enterprise Engineering Governance &amp; Quality Mandates
            </h3>
            <p style={{ fontSize: "0.92rem", lineHeight: 1.65, color: "#4a5568", maxWidth: "840px", marginBottom: "1.75rem" }}>
              Every solution referenced in our technical blueprints is governed by strict code quality criteria, zero proprietary lock-in, and transparent milestone reporting. We partner with commercial brands across Kerala, the GCC, and global corridors to build resilient digital infrastructure.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem", marginBottom: "1.75rem" }}>
              <div style={{ background: "#ffffff", padding: "1.25rem", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
                <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.35rem" }}>
                  100% Core Web Vitals Pass Rate
                </h4>
                <p style={{ fontSize: "0.82rem", lineHeight: 1.55, color: "#64748b", margin: 0 }}>
                  Sub-second LCP (&lt; 1.0s), zero layout shift (CLS = 0.00), and rapid interaction responsiveness (INP &lt; 150ms) across real-world mobile networks.
                </p>
              </div>

              <div style={{ background: "#ffffff", padding: "1.25rem", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
                <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.35rem" }}>
                  Unencumbered Client Ownership
                </h4>
                <p style={{ fontSize: "0.82rem", lineHeight: 1.55, color: "#64748b", margin: 0 }}>
                  You retain 100% legal ownership of all Git repositories, databases, analytics events, and advertising accounts from project inception.
                </p>
              </div>

              <div style={{ background: "#ffffff", padding: "1.25rem", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
                <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "0.35rem" }}>
                  Statutory Data Protection
                </h4>
                <p style={{ fontSize: "0.82rem", lineHeight: 1.55, color: "#64748b", margin: 0 }}>
                  Full legal alignment with the Indian DPDP Act 2023, EU GDPR, UAE Federal Decree-Law No. 45/2021, and Saudi Arabia ZATCA Phase 2.
                </p>
              </div>
            </div>

            <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: "1.25rem", fontSize: "0.82rem", color: "#64748b", lineHeight: 1.6 }}>
              <strong>Explore Related Capabilities:</strong>{" "}
              <Link href="/services/web-development" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Web Architecture</Link> &bull;{" "}
              <Link href="/services/seo" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Technical SEO</Link> &bull;{" "}
              <Link href="/services/paid-advertising" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Paid Advertising</Link> &bull;{" "}
              <Link href="/services/crm" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>CRM Systems</Link> &bull;{" "}
              <Link href="/industries" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Enterprise Verticals</Link> &bull;{" "}
              <Link href="/locations" style={{ color: "#00488e", fontWeight: 600, textDecoration: "none" }}>Global Trade Corridors</Link>
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
