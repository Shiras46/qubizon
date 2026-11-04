import crypto from "crypto";

export interface RateLimitResult {
  isAllowed: boolean;
  limit: number;
  remaining: number;
  resetSeconds: number;
}

// In-memory window store for local/single-server environments
interface RateLimitEntry {
  count: number;
  windowStart: number;
}

const memoryStore = new Map<string, RateLimitEntry>();

// Clean up expired entries every 15 minutes to avoid memory leaks
setInterval(() => {
  const now = Date.now();
  const windowMs = 60 * 60 * 1000; // 1 hour
  memoryStore.forEach((entry, key) => {
    if (now - entry.windowStart > windowMs) {
      memoryStore.delete(key);
    }
  });
}, 15 * 60 * 1000).unref(); // unref so it does not block node process exit

/**
 * Creates a one-way privacy-preserving SHA-256 hash of an IP address.
 * Never stores raw IP addresses in databases, cache, or logs.
 */
export function hashIpAddress(ip: string): string {
  const salt = process.env.IP_HASH_SALT || "qubizon_secure_fallback_salt_2026";
  return crypto.createHash("sha256").update(`${salt}:${ip.trim()}`).digest("hex");
}

/**
 * Extracts client IP address from standard reverse-proxy headers (x-forwarded-for, x-real-ip)
 * or socket address.
 */
export function extractClientIp(headers: Headers): string {
  // Edge proxy headers (Cloudflare, AWS CloudFront, Vercel) are authoritative
  const cfConnectingIp = headers.get("cf-connecting-ip");
  if (cfConnectingIp && cfConnectingIp.trim().length > 0) return cfConnectingIp.trim();

  const realIp = headers.get("x-real-ip");
  if (realIp && realIp.trim().length > 0) return realIp.trim();

  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) {
    const firstIp = forwarded.split(",")[0].trim();
    if (firstIp) return firstIp;
  }

  return "127.0.0.1";
}

/**
 * Evaluates rate limit for a hashed identifier within a sliding 1-hour window.
 */
export async function checkRateLimit(ipHash: string): Promise<RateLimitResult> {
  const maxRequests = parseInt(process.env.RATE_LIMIT_MAX_PER_HOUR || "5", 10);
  const windowMs = 60 * 60 * 1000; // 1 hour
  const now = Date.now();

  const entry = memoryStore.get(ipHash);

  if (!entry || now - entry.windowStart > windowMs) {
    memoryStore.set(ipHash, { count: 1, windowStart: now });
    return {
      isAllowed: true,
      limit: maxRequests,
      remaining: maxRequests - 1,
      resetSeconds: 3600,
    };
  }

  if (entry.count >= maxRequests) {
    const elapsed = now - entry.windowStart;
    const resetSeconds = Math.max(1, Math.ceil((windowMs - elapsed) / 1000));
    return {
      isAllowed: false,
      limit: maxRequests,
      remaining: 0,
      resetSeconds,
    };
  }

  entry.count += 1;
  const elapsed = now - entry.windowStart;
  const resetSeconds = Math.max(1, Math.ceil((windowMs - elapsed) / 1000));

  return {
    isAllowed: true,
    limit: maxRequests,
    remaining: maxRequests - entry.count,
    resetSeconds,
  };
}

/**
 * Helper to reset rate limit for a specific hash (useful for testing).
 */
export function resetRateLimitForTesting(ipHash: string): void {
  memoryStore.delete(ipHash);
}
