"use client";

import Script from "next/script";
import { useGoogleAnalyticsConsent } from "@/lib/googleConsent";
import { googleTagConfigIds, googleTagId } from "@/lib/googleTracking";

export function GoogleTag() {
  const consent = useGoogleAnalyticsConsent();

  if (!googleTagId || consent !== "granted") {
    return null;
  }

  const configCalls = googleTagConfigIds
    .map((id) => `gtag("config", "${id}");`)
    .join("\n");

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${googleTagId}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-tag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag("consent", "update", {
  analytics_storage: "granted",
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied"
});
gtag("js", new Date());
${configCalls}
          `.trim(),
        }}
      />
    </>
  );
}
