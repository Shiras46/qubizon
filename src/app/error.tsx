"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RotateCcw, Home } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Application runtime error:", error);
  }, [error]);

  return (
    <div
      className="container"
      role="alert"
      aria-live="assertive"
      style={{
        padding: "var(--space-24) var(--container-padding)",
        textAlign: "center",
        maxWidth: "620px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "var(--radius-full)",
          backgroundColor: "var(--brand-yellow-subtle)",
          color: "var(--brand-yellow)",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "var(--space-4)",
        }}
      >
        <AlertCircle size={32} aria-hidden="true" />
      </div>

      <h1
        style={{
          fontSize: "var(--font-size-3xl)",
          fontWeight: "var(--font-weight-extrabold)",
          color: "var(--brand-blue)",
          marginBottom: "var(--space-3)",
          letterSpacing: "var(--letter-spacing-tight)",
        }}
      >
        Something went wrong
      </h1>

      <p
        style={{
          fontSize: "var(--font-size-base)",
          color: "var(--color-text-secondary)",
          lineHeight: "var(--line-height-relaxed)",
          marginBottom: "var(--space-8)",
        }}
      >
        An unexpected application error occurred while rendering this page. You can attempt to reload the view or return to the homepage of {SITE_CONFIG.name}.
      </p>

      <div
        style={{
          display: "inline-flex",
          flexWrap: "wrap",
          gap: "var(--space-3)",
          justifyContent: "center",
        }}
      >
        <button
          type="button"
          onClick={() => reset()}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "var(--space-2)",
            padding: "12px 24px",
            backgroundColor: "var(--brand-yellow)",
            color: "var(--color-accent-text)",
            fontWeight: "var(--font-weight-bold)",
            borderRadius: "var(--radius-full)",
            fontSize: "var(--font-size-sm)",
            cursor: "pointer",
            border: "none",
            boxShadow: "0 4px 16px rgba(255, 190, 11, 0.35)",
            transition: "all var(--transition-fast)",
          }}
        >
          <RotateCcw size={16} aria-hidden="true" />
          <span>Try Again</span>
        </button>

        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "var(--space-2)",
            padding: "12px 24px",
            backgroundColor: "transparent",
            color: "var(--brand-blue)",
            border: "1px solid var(--brand-blue)",
            fontWeight: "var(--font-weight-semibold)",
            borderRadius: "var(--radius-full)",
            fontSize: "var(--font-size-sm)",
            textDecoration: "none",
            transition: "all var(--transition-fast)",
          }}
        >
          <Home size={16} aria-hidden="true" />
          <span>Back to Homepage</span>
        </Link>
      </div>

      {error.digest && (
        <p
          style={{
            marginTop: "var(--space-6)",
            fontSize: "var(--font-size-xs)",
            color: "var(--color-text-muted)",
            fontFamily: "var(--font-family-mono)",
          }}
        >
          Error Reference: {error.digest}
        </p>
      )}
    </div>
  );
}

