import { NextRequest, NextResponse } from "next/server";
import { getRepository } from "@/lib/db";
import { processOutboxQueue } from "@/lib/email";

export const dynamic = "force-dynamic";

/**
 * Protected Cron Endpoint: Processes Pending Notification Outbox Queue
 * 
 * Invoked by external scheduled runners (e.g. Vercel Cron, system crontab, or EventBridge).
 * Authenticated via Bearer token matching the CRON_SECRET environment variable.
 */
export async function GET(request: NextRequest) {
  const cronSecret = process.env.CRON_SECRET;

  // Security Gate: Ensure a secret is configured before accepting calls
  if (!cronSecret || cronSecret.trim().length === 0) {
    console.error("[Cron Security Alert] CRON_SECRET is not configured on the server.");
    return NextResponse.json(
      { error: "Cron execution endpoint is disabled. Server configuration required." },
      { status: 503 }
    );
  }

  // Authorization Check: Extract Bearer token from Authorization header
  const authHeader = request.headers.get("authorization");
  const bearerToken = authHeader?.startsWith("Bearer ") ? authHeader.slice(7).trim() : null;

  // Fallback Check: Allow query parameter for webhook providers that don't support custom headers
  const queryToken = request.nextUrl.searchParams.get("key");

  const providedToken = bearerToken || queryToken;

  if (!providedToken || providedToken !== cronSecret) {
    return NextResponse.json(
      { error: "Unauthorized. Valid cron token required." },
      { status: 401 }
    );
  }

  try {
    const repo = getRepository();
    const result = await processOutboxQueue(repo, 25);

    return NextResponse.json(
      {
        success: true,
        message: "Outbox processing completed.",
        metrics: {
          processed: result.processed,
          succeeded: result.succeeded,
          failed: result.failed,
        },
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : "Internal worker error";
    console.error("[Cron Worker Error] Outbox processing failure:", errorMsg);

    return NextResponse.json(
      { error: "Outbox worker encountered an internal processing error." },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  // Allow POST invocation identically to GET for webhook compatibility
  return GET(request);
}
