import type { Metadata } from "next";
import "@fontsource-variable/ibm-plex-sans/wght.css";
import { NotFoundContent } from "@/components/NotFoundContent";
import { SiteDocument } from "@/components/SiteDocument";
import messages from "@/i18n/messages/en";
import "../../tokens.css";
import "./globals.css";
import "./(en)/styles/header.css";

export const metadata: Metadata = {
  title: "Page Not Found | Taiyi Polymer",
  description: "The requested Taiyi Polymer page could not be found.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function GlobalNotFound() {
  return (
    <SiteDocument htmlLang="en" messages={messages}>
      <NotFoundContent />
    </SiteDocument>
  );
}
