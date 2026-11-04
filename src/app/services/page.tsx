import type { Metadata } from "next";
import Link from "next/link";
import { constructMetadata } from "@/lib/metadata";
import { CORE_SERVICES, SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = constructMetadata({
  title: "Services",
  description: "Explore Qubizon's five core digital disciplines: Web Development, SEO, Social Media, Paid Advertising, and Content Marketing.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div className="container" style={{ padding: "var(--space-20) var(--container-padding)" }}>
      <div style={{ maxWidth: "780px", marginBottom: "var(--space-12)" }}>
        <p style={{ color: "var(--brand-blue)", fontWeight: "var(--font-weight-semibold)", fontSize: "var(--font-size-xs)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "var(--space-2)" }}>
          Full-Spectrum Capabilities
        </p>
        <h1 style={{ fontSize: "var(--font-size-4xl)", fontWeight: "var(--font-weight-bold)", color: "var(--brand-blue)", marginBottom: "var(--space-4)" }}>
          Five Disciplines. Unified Execution.
        </h1>
        <p style={{ fontSize: "var(--font-size-lg)", color: "var(--color-text-secondary)", lineHeight: "var(--line-height-relaxed)" }}>
          {SITE_CONFIG.slogan} Discover how our multidisciplinary teams integrate web engineering, organic search, paid acquisition, and content strategy into a single growth engine.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "var(--space-8)" }}>
        {CORE_SERVICES.map((service) => (
          <article key={service.id} style={{ backgroundColor: "var(--color-bg-surface)", border: "1px solid var(--color-border-subtle)", borderRadius: "var(--radius-xl)", padding: "var(--space-8)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <h2 style={{ fontSize: "var(--font-size-xl)", fontWeight: "var(--font-weight-bold)", color: "var(--brand-blue)", marginBottom: "var(--space-3)" }}>
                {service.title}
              </h2>
              <p style={{ fontSize: "var(--font-size-sm)", color: "var(--color-text-secondary)", lineHeight: "var(--line-height-relaxed)", marginBottom: "var(--space-6)" }}>
                {service.shortDescription}
              </p>
            </div>
            <Link href={service.href} style={{ color: "var(--brand-blue)", fontWeight: "var(--font-weight-semibold)", fontSize: "var(--font-size-sm)", textDecoration: "none" }}>
              Explore {service.title} &rarr;
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
