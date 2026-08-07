"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
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
};

export function AnalyticsConsent({ enabled }: AnalyticsConsentProps) {
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
        <h2 id="analytics-consent-title">Analytics choices</h2>
        <p id="analytics-consent-description">
          We use Google Analytics to understand site use and improve material
          information. Analytics stays off unless you accept. Read our{" "}
          <Link href="/privacy">Privacy Policy</Link>.
        </p>
        {choice !== null ? (
          <span className={styles.currentChoice}>
            Current choice: {choice === "granted" ? "accepted" : "not accepted"}
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
          Accept analytics
        </Button>
        <Button
          type="button"
          variant="secondary"
          size="form"
          onClick={() => choose("denied")}
        >
          Continue without analytics
        </Button>
      </div>
    </section>
  );
}

export function AnalyticsSettingsButton() {
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
      Cookie Settings
    </button>
  );
}
