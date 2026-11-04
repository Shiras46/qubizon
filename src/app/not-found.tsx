import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export default function NotFound() {
  return (
    <div
      className="container"
      style={{
        padding: "var(--space-24) var(--container-padding)",
        textAlign: "center",
        maxWidth: "600px",
      }}
    >
      <p
        style={{
          color: "var(--brand-yellow)",
          fontWeight: "var(--font-weight-bold)",
          fontSize: "var(--font-size-5xl)",
          marginBottom: "var(--space-2)",
        }}
      >
        404
      </p>
      <h1
        style={{
          fontSize: "var(--font-size-3xl)",
          fontWeight: "var(--font-weight-bold)",
          color: "var(--brand-blue)",
          marginBottom: "var(--space-4)",
        }}
      >
        Page Not Found
      </h1>
      <p
        style={{
          fontSize: "var(--font-size-base)",
          color: "var(--color-text-secondary)",
          lineHeight: "var(--line-height-relaxed)",
          marginBottom: "var(--space-8)",
        }}
      >
        The page you are looking for does not exist or may have been moved. Return to our homepage to explore {SITE_CONFIG.name}.
      </p>
      <Link
        href="/"
        style={{
          display: "inline-block",
          padding: "var(--space-3) var(--space-6)",
          backgroundColor: "var(--brand-blue)",
          color: "var(--color-text-inverse)",
          fontWeight: "var(--font-weight-semibold)",
          borderRadius: "var(--radius-md)",
          fontSize: "var(--font-size-sm)",
          textDecoration: "none",
        }}
      >
        Back to Homepage
      </Link>
    </div>
  );
}
