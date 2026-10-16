import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../styles/products.css";

import { ComponentShowcase } from "@/components/design-system/ComponentShowcase";
import { resolvePreviewConfig } from "@/components/design-system/showcase-config";

export const metadata: Metadata = {
  title: "组件验收 · Taiyi Polymer",
  description: "Taiyi Polymer 共享组件与页面组合的本地验收入口。",
  alternates: { canonical: "/design-system" },
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default async function DesignSystemPage({
  searchParams,
}: { searchParams: Promise<{ lang?: string | string[] }> }) {
  if (process.env.NODE_ENV !== "development") notFound();
  const preview = resolvePreviewConfig((await searchParams).lang);
  if (!preview) notFound();

  return <ComponentShowcase preview={preview} />;
}
