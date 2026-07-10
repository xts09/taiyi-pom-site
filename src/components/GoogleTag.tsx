import Script from "next/script";
import { googleTagConfigIds, googleTagId } from "@/lib/googleTracking";

export function GoogleTag() {
  if (!googleTagId) {
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
gtag("js", new Date());
${configCalls}
          `.trim(),
        }}
      />
    </>
  );
}

