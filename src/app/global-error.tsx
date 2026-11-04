"use client";

import { useEffect } from "react";
import { AlertCircle, RotateCcw } from "lucide-react";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error("Critical root application error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          backgroundColor: "#f7f8fa",
          color: "#0b1530",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
          margin: 0,
        }}
      >
        <div
          role="alert"
          style={{
            textAlign: "center",
            maxWidth: "540px",
            backgroundColor: "#ffffff",
            padding: "48px 32px",
            borderRadius: "20px",
            boxShadow: "0 20px 40px -10px rgba(11, 21, 48, 0.1)",
            border: "1px solid rgba(11, 21, 48, 0.08)",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "9999px",
              backgroundColor: "rgba(255, 190, 11, 0.15)",
              color: "#ffbe0b",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "16px",
            }}
          >
            <AlertCircle size={32} aria-hidden="true" />
          </div>

          <h1
            style={{
              fontSize: "24px",
              fontWeight: 800,
              color: "#00488e",
              marginBottom: "12px",
            }}
          >
            Critical System Error
          </h1>

          <p
            style={{
              fontSize: "15px",
              color: "#475569",
              lineHeight: 1.6,
              marginBottom: "24px",
            }}
          >
            An unexpected error interrupted the application shell. Please attempt to reset the application.
          </p>

          <button
            type="button"
            onClick={() => reset()}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 24px",
              backgroundColor: "#ffbe0b",
              color: "#0b1530",
              fontWeight: 700,
              borderRadius: "9999px",
              fontSize: "14px",
              cursor: "pointer",
              border: "none",
              boxShadow: "0 4px 16px rgba(255, 190, 11, 0.35)",
            }}
          >
            <RotateCcw size={16} aria-hidden="true" />
            <span>Reload Application</span>
          </button>
        </div>
      </body>
    </html>
  );
}

