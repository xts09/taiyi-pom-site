"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { LocalizedUrlSegment } from "@/i18n/config";
import type { AnalyticsMessages } from "@/i18n/types";
import { getLocalizedHref } from "@/i18n/releaseManifest";
import {
  clearGoogleAnalyticsCookies,
  clearGoogleAdvertisingCookies,
  GOOGLE_ANALYTICS_CONSENT_OPEN_EVENT,
  type GoogleConsentPreferences,
  storeGoogleConsentPreferences,
  useGoogleConsentPreferences,
  updateGoogleConsentPreferences,
} from "@/lib/googleConsent";
import styles from "./AnalyticsConsent.module.css";

type AnalyticsConsentProps = {
  enabled: boolean;
  messages: AnalyticsMessages;
  localeSegment?: LocalizedUrlSegment;
};

export type ConsentPreferencesPanelProps = {
  messages: AnalyticsMessages;
  onAcceptAll: () => void;
  onRejectOptional: () => void;
  onDismiss: () => void;
  localeSegment?: LocalizedUrlSegment;
  placement?: "floating" | "inline";
  focusOnOpen?: boolean;
};

export function ConsentPreferencesPanel({
  messages,
  onAcceptAll,
  onRejectOptional,
  onDismiss,
  localeSegment,
  placement = "floating",
  focusOnOpen = false,
}: ConsentPreferencesPanelProps) {
  const panelId = useId();
  const titleId = `${panelId}-title`;
  const descriptionId = `${panelId}-description`;
  const acceptButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (focusOnOpen) {
      acceptButtonRef.current?.focus();
    }
  }, [focusOnOpen]);

  return (
    <section
      className={`${styles.panel} ${placement === "inline" ? styles.inlinePanel : ""}`}
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          onDismiss();
        }
      }}
    >
      <div className={styles.copy}>
        <div className={styles.panelHeader}>
          <h2 id={titleId}>{messages.title}</h2>
          <button
            className={styles.dismissButton}
            type="button"
            aria-label={messages.dismiss}
            title={messages.dismiss}
            onClick={onDismiss}
          >
            <X aria-hidden="true" />
          </button>
        </div>
        <p id={descriptionId}>
          {messages.descriptionBeforeLink}{" "}
          <Link href={getLocalizedHref("/privacy", localeSegment)}>
            {messages.privacyPolicy}
          </Link>{localeSegment === "zh" ? "。" : "."}
        </p>
      </div>

      <div className={styles.notices}>
        <p>{messages.preferenceNotice}</p>
      </div>

      <div className={styles.actions}>
        <Button ref={acceptButtonRef} type="button" variant="primary" size="form" onClick={onAcceptAll}>
          {messages.acceptAll}
        </Button>
        <Button type="button" variant="secondary" size="form" onClick={onRejectOptional}>
          {messages.rejectOptional}
        </Button>
      </div>
    </section>
  );
}

export function AnalyticsConsent({
  enabled,
  messages,
  localeSegment,
}: AnalyticsConsentProps) {
  const choice = useGoogleConsentPreferences();
  const [isManuallyOpen, setIsManuallyOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const openSettings = () => {
      returnFocusRef.current =
        document.activeElement instanceof HTMLElement
          ? document.activeElement
          : null;
      setIsDismissed(false);
      setIsManuallyOpen(true);
    };
    window.addEventListener(
      GOOGLE_ANALYTICS_CONSENT_OPEN_EVENT,
      openSettings,
    );

    return () => {
      window.removeEventListener(
        GOOGLE_ANALYTICS_CONSENT_OPEN_EVENT,
        openSettings,
      );
    };
  }, [enabled]);

  const isOpen = isManuallyOpen || (choice === null && !isDismissed);

  if (
    !enabled ||
    choice === "loading" ||
    !isOpen
  ) {
    return null;
  }

  const choose = (nextChoice: GoogleConsentPreferences) => {
    storeGoogleConsentPreferences(nextChoice);
    updateGoogleConsentPreferences(nextChoice);

    if (nextChoice.analytics === "denied") {
      clearGoogleAnalyticsCookies();
    }
    if (nextChoice.advertising === "denied") {
      clearGoogleAdvertisingCookies();
    }

    returnFocusRef.current?.focus();
    returnFocusRef.current = null;
    setIsManuallyOpen(false);
    setIsDismissed(false);
  };

  const dismiss = () => {
    returnFocusRef.current?.focus();
    returnFocusRef.current = null;
    setIsManuallyOpen(false);
    setIsDismissed(choice === null);
  };

  return (
    <ConsentPreferencesPanel
      messages={messages}
      onAcceptAll={() => choose({ analytics: "granted", advertising: "granted" })}
      onRejectOptional={() => choose({ analytics: "denied", advertising: "denied" })}
      onDismiss={dismiss}
      localeSegment={localeSegment}
      focusOnOpen={isManuallyOpen}
    />
  );
}

export function AnalyticsSettingsButton({
  messages,
}: {
  messages: AnalyticsMessages;
}) {
  return (
    <button
      className={styles.settingsButton}
      type="button"
      onClick={() =>
        window.dispatchEvent(
          new Event(GOOGLE_ANALYTICS_CONSENT_OPEN_EVENT),
        )
      }
    >
      {messages.settings}
    </button>
  );
}
