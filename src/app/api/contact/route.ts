import { NextRequest, NextResponse } from "next/server";
import { validateContactSubmission } from "@/lib/validation/contactSchema";
import { checkRateLimit, extractClientIp, hashIpAddress } from "@/lib/security/rateLimiter";
import { saveEnquiry, updateNotificationStatus, getEnquiryById, ConfigurationError } from "@/lib/db";
import { sendEnquiryNotification, categorizeEmailError, calculateNextRetry } from "@/lib/email";

// Maximum allowed payload size: 32 KB
const MAX_PAYLOAD_BYTES = 32 * 1024;

/**
 * Safely streams the request body chunk by chunk.
 * Immediately cancels the stream if byte count exceeds limitBytes to prevent memory exhaustion.
 */
async function readStreamSafely(
  stream: ReadableStream<Uint8Array> | null,
  limitBytes: number
): Promise<{ text: string; isOversized: boolean }> {
  if (!stream) return { text: "", isOversized: false };

  const reader = stream.getReader();
  const chunks: Uint8Array[] = [];
  let totalBytes = 0;

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      if (value) {
        totalBytes += value.byteLength;
        if (totalBytes > limitBytes) {
          // Immediately cancel the stream to stop receiving network data
          await reader.cancel();
          return { text: "", isOversized: true };
        }
        chunks.push(value);
      }
    }
  } catch {
    return { text: "", isOversized: false };
  }

  const merged = new Uint8Array(totalBytes);
  let offset = 0;
  for (const chunk of chunks) {
    merged.set(chunk, offset);
    offset += chunk.byteLength;
  }

  return { text: new TextDecoder("utf-8").decode(merged), isOversized: false };
}

export async function POST(request: NextRequest) {
  try {
    // 1. Content-Length Header Pre-check
    const contentLength = request.headers.get("content-length");
    if (contentLength && parseInt(contentLength, 10) > MAX_PAYLOAD_BYTES) {
      return NextResponse.json(
        { error: "Payload too large. Maximum allowed size is 32KB." },
        { status: 413 }
      );
    }

    // 2. Stream-level Chunk Size Metering (guards against chunked transfer bypass)
    const { text: rawText, isOversized } = await readStreamSafely(request.body, MAX_PAYLOAD_BYTES);
    if (isOversized) {
      return NextResponse.json(
        { error: "Payload too large. Maximum allowed size is 32KB." },
        { status: 413 }
      );
    }

    if (!rawText.trim()) {
      return NextResponse.json(
        { error: "Malformed request payload. JSON format required." },
        { status: 400 }
      );
    }

    // 3. Client IP & Rate Limiting Check
    const rawIp = extractClientIp(request.headers);
    const ipHash = hashIpAddress(rawIp);

    const rateLimit = await checkRateLimit(ipHash);
    if (!rateLimit.isAllowed) {
      return NextResponse.json(
        { error: "Rate limit exceeded. Please wait before submitting another enquiry." },
        {
          status: 429,
          headers: {
            "Retry-After": rateLimit.resetSeconds.toString(),
            "X-RateLimit-Limit": rateLimit.limit.toString(),
            "X-RateLimit-Remaining": rateLimit.remaining.toString(),
          },
        }
      );
    }

    // 4. Safe JSON Parsing
    let rawBody: unknown;
    try {
      rawBody = JSON.parse(rawText);
    } catch {
      return NextResponse.json(
        { error: "Malformed request payload. JSON format required." },
        { status: 400 }
      );
    }

    // 5. Strict Schema Validation & Sanitization
    const validationResult = validateContactSubmission(rawBody);
    if (!validationResult.isValid) {
      return NextResponse.json(
        {
          error: "Validation failed. Please verify the submitted information.",
          details: validationResult.errors,
        },
        { status: 422 }
      );
    }

    const payload = validationResult.data;

    // 6. Database Persistence
    let saveResult;
    try {
      saveResult = await saveEnquiry(payload, ipHash);
    } catch (dbError) {
      if (dbError instanceof ConfigurationError) {
        console.error("[Database Configuration Error] Production DB not configured:", dbError.message);
      } else {
        console.error("[Database Error] Failed to persist enquiry:", dbError);
      }
      return NextResponse.json(
        { error: "A temporary system error occurred. Your enquiry was not saved. Please try again." },
        { status: 500 }
      );
    }

    // If duplicate detected within 5 minutes, return stable existing reference ID
    if (saveResult.isDuplicate) {
      return NextResponse.json(
        {
          success: true,
          referenceId: saveResult.referenceId,
          message: "Duplicate enquiry detected. Your previous submission is already on file.",
        },
        { status: 200 }
      );
    }

    // 7. Decoupled Email Notification (Outbox Reliability Pattern)
    // Runs only after database persistence has succeeded
    const savedRecord = await getEnquiryById(saveResult.id);
    if (savedRecord) {
      try {
        const emailResult = await sendEnquiryNotification(savedRecord);
        if (emailResult.success) {
          await updateNotificationStatus(savedRecord.id, "sent");
        } else {
          console.warn(`[Notification Warning] Email delivery unconfirmed: ${emailResult.error}`);
          const category = emailResult.errorCategory || categorizeEmailError(emailResult.error || "Unknown error");
          const nextRetry = calculateNextRetry(savedRecord.notificationAttempts + 1);
          await updateNotificationStatus(
            savedRecord.id,
            "failed",
            emailResult.error,
            category,
            nextRetry || undefined
          );
        }
      } catch (err: unknown) {
        const errorMsg = err instanceof Error ? err.message : String(err);
        console.error("[Notification Error] Unexpected dispatcher failure:", errorMsg);
        const category = categorizeEmailError(errorMsg);
        const nextRetry = calculateNextRetry(savedRecord.notificationAttempts + 1);
        await updateNotificationStatus(
          savedRecord.id,
          "failed",
          errorMsg,
          category,
          nextRetry || undefined
        );
      }
    }

    // 8. Success Response with Server-Generated Reference ID
    return NextResponse.json(
      {
        success: true,
        referenceId: saveResult.referenceId,
        message: "Enquiry successfully received.",
      },
      {
        status: 201,
        headers: {
          "X-RateLimit-Limit": rateLimit.limit.toString(),
          "X-RateLimit-Remaining": rateLimit.remaining.toString(),
        },
      }
    );
  } catch (error) {
    console.error("[Internal Server Error] Unexpected contact route error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
