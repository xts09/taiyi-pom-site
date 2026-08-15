import "server-only";
import type { MessageLocale } from "@/i18n/config";
import type { ProductFunnelMessages } from "@/i18n/productFunnelTypes";

const messageLoaders = {
  de: () => import("@/i18n/messages/de-product-funnel").then((module) => module.default),
  fr: () => import("@/i18n/messages/fr-product-funnel").then((module) => module.default),
  "pt-BR": () =>
    import("@/i18n/messages/pt-BR-product-funnel").then((module) => module.default),
} satisfies Record<Exclude<MessageLocale, "en">, () => Promise<ProductFunnelMessages>>;

export const loadProductFunnelMessages = async (
  locale: Exclude<MessageLocale, "en">,
) => messageLoaders[locale]();
