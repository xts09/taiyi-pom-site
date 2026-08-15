import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";
import messages from "@/i18n/messages/en";
import { homeLanguageAlternates } from "@/i18n/releaseManifest";
import { createPageMetadata } from "@/lib/seo";
import "./styles/home.css";

export const metadata: Metadata = createPageMetadata({
  title: messages.Home.metadata.title,
  description: messages.Home.metadata.description,
  path: "/",
  image: "/factory-hero-95b-loop-v6-poster.webp",
  imageAlt: messages.Home.metadata.imageAlt,
  languageAlternates: homeLanguageAlternates,
});

export default function Home() {
  return <HomePage messages={messages.Home} inLanguage="en" />;
}
