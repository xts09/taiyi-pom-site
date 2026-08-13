"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { AnalyticsMessages } from "@/i18n/types";
import {
  clearGoogleAnalyticsCookies,
  GOOGLE_ANALYTICS_CONSENT_CHANGE_EVENT,
  GOOGLE_ANALYTICS_CONSENT_OPEN_EVENT,
  type GoogleAnalyticsConsent,
  storeGoogleAnalyticsConsent,
  useGoogleAnalyticsConsent,
  updateGoogleAnalyticsConsent,
} from "@/lib/googleConsent";
import styles from "./AnalyticsConsent.module.css";

type AnalyticsConsentProps = {
  enabled: boolean;
  messages: AnalyticsMessages;
};

export function AnalyticsConsent({
  enabled,
  messages,
}: AnalyticsConsentProps) {
  const choice = useGoogleAnalyticsConsent();
  const [isManuallyOpen, setIsManuallyOpen] = useState(false);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const openSettings = () => setIsManuallyOpen(true);
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

  const isOpen = isManuallyOpen || choice === null;

  if (!enabled || choice === "loading" || !isOpen) {
    return null;
  }

  const choose = (nextChoice: GoogleAnalyticsConsent) => {
    storeGoogleAnalyticsConsent(nextChoice);
    updateGoogleAnalyticsConsent(nextChoice);

    if (nextChoice === "denied") {
      clearGoogleAnalyticsCookies();
    }

    setIsManuallyOpen(false);
    window.dispatchEvent(
      new CustomEvent<GoogleAnalyticsConsent>(
        GOOGLE_ANALYTICS_CONSENT_CHANGE_EVENT,
        { detail: nextChoice },
      ),
    );
  };

  return (
    <section
      className={styles.panel}
      aria-labelledby="analytics-consent-title"
      aria-describedby="analytics-consent-description"
    >
      <div className={styles.copy}>
        <h2 id="analytics-consent-title">{messages.title}</h2>
        <p id="analytics-consent-description">
          {messages.descriptionBeforeLink}{" "}
          <Link href="/privacy">{messages.privacyPolicy}</Link>.
        </p>
        {choice !== null ? (
          <span className={styles.currentChoice}>
            {messages.currentChoice}{" "}
            {choice === "granted" ? messages.accepted : messages.notAccepted}
          </span>
        ) : null}
      </div>
      <div className={styles.actions}>
        <Button
          type="button"
          variant="primary"
          size="form"
          onClick={() => choose("granted")}
        >
          {messages.accept}
        </Button>
        <Button
          type="button"
          variant="secondary"
          size="form"
          onClick={() => choose("denied")}
        >
          {messages.continueWithout}
        </Button>
      </div>
    </section>
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
