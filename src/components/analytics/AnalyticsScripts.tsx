import Script from "next/script";

/**
 * Secure, zero-overhead Analytics and Tag Management Injector.
 * Gated strictly by environment variables:
 * - NEXT_PUBLIC_GA_ID: Google Analytics 4 Measurement ID (must match ^G-[A-Za-z0-9]+$)
 * - NEXT_PUBLIC_GTM_ID: Google Tag Manager Container ID (must match ^GTM-[A-Za-z0-9]+$)
 * - NEXT_PUBLIC_CLARITY_ID: Microsoft Clarity Project ID
 *
 * Rules:
 * 1. Remains 100% dormant if IDs are missing, empty, or invalid.
 * 2. If GTM is active, direct GA4 script injection is automatically disabled to prevent
 *    accidental duplicate page-view events.
 * 3. Client IP anonymization is enforced by default.
 */
export function AnalyticsScripts() {
  const rawGa = process.env.NEXT_PUBLIC_GA_ID?.trim();
  const rawGtm = process.env.NEXT_PUBLIC_GTM_ID?.trim();
  const rawClarity = process.env.NEXT_PUBLIC_CLARITY_ID?.trim();

  // Strict format guards preventing accidental placeholder injections
  const isValidGa = !!rawGa && /^G-[A-Za-z0-9]+$/.test(rawGa);
  const isValidGtm = !!rawGtm && /^GTM-[A-Za-z0-9]+$/.test(rawGtm);
  const isValidClarity = !!rawClarity && /^[a-z0-9]{6,16}$/i.test(rawClarity);

  // Prevent double-counting: if GTM is installed, manage GA4 exclusively through GTM
  const shouldInjectDirectGa = isValidGa && !isValidGtm;

  if (!shouldInjectDirectGa && !isValidGtm && !isValidClarity) {
    return null;
  }

  return (
    <>
      {/* 1. Direct GA4 (Only when valid GA4 ID is present AND GTM is NOT present) */}
      {shouldInjectDirectGa && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${rawGa}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${rawGa}', {
                page_path: window.location.pathname,
                anonymize_ip: true
              });
            `}
          </Script>
        </>
      )}

      {/* 2. Google Tag Manager (Only when valid GTM Container ID is present) */}
      {isValidGtm && (
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${rawGtm}');
          `}
        </Script>
      )}

      {/* 3. Microsoft Clarity (Only when valid Clarity ID is present) */}
      {isValidClarity && (
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${rawClarity}");
          `}
        </Script>
      )}
    </>
  );
}
