import type { MessageLocale } from "@/i18n/config";
import type { SiteMessages } from "@/i18n/types";

const messageLoaders: Record<
  MessageLocale,
  () => Promise<{ default: SiteMessages }>
> = {
  en: () => import("@/i18n/messages/en"),
  de: () => import("@/i18n/messages/de"),
  fr: () => import("@/i18n/messages/fr"),
  "pt-BR": () => import("@/i18n/messages/pt-BR"),
};

export const loadMessages = async (locale: MessageLocale) =>
  (await messageLoaders[locale]()).default;
