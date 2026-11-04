---
name: technical-seo
description: Workflows for implementing technical search engine optimization, metadata architecture, OpenGraph/Twitter cards, structured data, and search indexation controls.
---

# Technical SEO Skill

This skill guides technical search engine optimization, crawlability, and search metadata configuration.

## Prerequisite Checks

Before optimizing SEO assets:
1. Identify the site architecture (Static HTML, Next.js App Router, SPA, etc.) to determine the appropriate metadata mechanism.
2. Verify if `chrome-devtools-mcp` is active and available before attempting automated Lighthouse SEO audits or DOM crawl inspection. If unavailable, perform manual HTML inspections and report results without automated auditing.

## Step-by-Step Procedure

### Step 1: Document Outline & Semantic Markup
- Enforce a strict single `<h1>` tag per page containing the core page subject.
- Maintain logical heading hierarchy (`<h2>` for sections, `<h3>` for subsections) without skipping levels.
- Ensure all content images have descriptive, context-aware `alt` text. Decorative images must have `alt=""` and `aria-hidden="true"`.
- Use descriptive anchor text for internal links; avoid generic labels like "click here" or "learn more".

### Step 2: Meta Tags & Social Sharing
- Configure unique `<title>` and `<meta name="description">` tags per route segment.
  - Recommended title length target: 50–60 characters.
  - Recommended description length target: 140–160 characters.
- Add canonical URLs (`<link rel="canonical" href="...">`) to prevent duplicate content penalties.
- Include OpenGraph (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`) and Twitter card tags (`twitter:card`, `twitter:title`, `twitter:image`).

### Step 3: Structured Data (Schema.org JSON-LD)
- When applicable to the page type, inject valid JSON-LD schemas:
  - Global: `WebSite`, `Organization`.
  - Content-specific: `Article`, `BreadcrumbList`, `Product`, `FAQPage`.
- Format JSON-LD inside `<script type="application/ld+json">` without syntax errors.

### Step 4: Indexation & Crawl Files
- Implement a clear `robots.txt` specifying allowed and disallowed routes, with a reference to the XML sitemap.
- Generate or configure a dynamic or static `sitemap.xml` listing public, canonical URLs and last modification dates.

### Step 5: Verification & Auditing
- If `chrome-devtools-mcp` is verified and operational:
  - Run `call_mcp_tool` with `lighthouse_audit` specifying the SEO category.
  - Note: Treat Lighthouse SEO scores (e.g., target 95+) as measurable evaluation targets, not guaranteed outcomes. Always record actual score, tested URL, and specific diagnostic findings.
- If MCP is unavailable:
  - Inspect rendered HTML sources directly or execute DOM checks to verify presence of canonicals, titles, descriptions, and JSON-LD payloads.

## Acceptance Criteria
- [ ] Each unique route provides distinct, descriptive title and meta description tags.
- [ ] Canonical link tags present and pointing to the authoritative URL.
- [ ] Document heading outline uses exactly one `<h1>` with sequential subordinate headings.
- [ ] Valid JSON-LD structured data embedded where schema models apply.
- [ ] Accessible `robots.txt` and `sitemap.xml` endpoints configured.
- [ ] Audit results report measured metrics and test environment conditions.
