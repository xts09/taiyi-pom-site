"use client";

import { useEffect, useState, type FormEvent } from "react";
import {
  trackInquiryFallback,
  trackInquirySubmitted,
} from "@/lib/conversionEvents";
import { contactEmail } from "@/lib/contactDetails";
import { pomSubcategoryLabels, productCategoryOrder } from "@/lib/productCategories";
import {
  clearContactRequirement,
  readContactRequirement,
} from "@/lib/contactRequirementStorage";
import {
  clampInquiryMessage,
  inquiryClientTimeoutMs,
  inquiryMessageMaxLength,
} from "@/lib/inquiryLimits";
import type { ContactIntent } from "@/lib/contactContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import type { ContactFormMessages } from "@/i18n/types";
import styles from "./ContactInquiryForm.module.css";

const materialOptions = Array.from(
  new Set([
    "Modified POM Compounds",
    ...productCategoryOrder.map(
      (category) => pomSubcategoryLabels[category] ?? category
    ),
    "PA6 Compounds",
    "PA66 Compounds",
    "PPA Compounds",
    "Conductive & Antistatic Compounds",
    "Other Engineering Plastic Compound",
  ])
);

type ContactInquiryFormProps = {
  contextLabel?: string;
  initialApplication?: string;
  initialGrade?: string;
  initialIntent?: ContactIntent;
  initialMaterial?: string;
  initialMessage?: string;
  initialSource?: string;
  loadStoredRequirement?: boolean;
  messages: ContactFormMessages;
  requirementLabel?: string;
};

type InquiryType = ContactIntent | "quote-supply";

const readField = (
  formData: FormData,
  name: string,
  fallback = "Not specified",
) => String(formData.get(name) ?? "").trim() || fallback;

const buildInquiryMessage = (
  formData: FormData,
  messages: ContactFormMessages["emailDraft"],
) =>
  [
    messages.greeting,
    "",
    messages.intro,
    "",
    `${messages.company}: ${readField(formData, "company", messages.notSpecified)}`,
    `${messages.email}: ${readField(formData, "email", messages.notSpecified)}`,
    `${messages.material}: ${readField(formData, "material", messages.notSpecified)}`,
    `${messages.application}: ${readField(formData, "application", messages.notSpecified)}`,
    `${messages.inquiryType}: ${readField(formData, "inquiryType", messages.notSpecified)}`,
    `${messages.grade}: ${readField(formData, "grade", messages.notSpecified)}`,
    `${messages.source}: ${readField(formData, "source", messages.notSpecified)}`,
    "",
    messages.details,
    readField(formData, "message", messages.notSpecified),
    "",
    messages.closing,
  ].join("\n");

export function ContactInquiryForm({
  contextLabel,
  initialApplication = "",
  initialGrade = "",
  initialIntent,
  initialMaterial = "",
  initialMessage = "",
  initialSource = "",
  loadStoredRequirement = false,
  messages,
  requirementLabel = "Priority requirement",
}: ContactInquiryFormProps) {
  const safeInitialMessage = clampInquiryMessage(initialMessage);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "sent" | "fallback"
  >("idle");
  const [application, setApplication] = useState(initialApplication);
  const [grade, setGrade] = useState(initialGrade);
  const [inquiryType, setInquiryType] = useState<InquiryType | "">(
    initialIntent ?? "",
  );
  const [material, setMaterial] = useState(initialMaterial);
  const [message, setMessage] = useState(safeInitialMessage);
  const [prefilledMessage, setPrefilledMessage] = useState(safeInitialMessage);
  const [source, setSource] = useState(initialSource);
  const [showContext, setShowContext] = useState(Boolean(contextLabel));
  const selectableMaterialOptions =
    initialMaterial && !materialOptions.includes(initialMaterial)
      ? [initialMaterial, ...materialOptions]
      : materialOptions;

  useEffect(() => {
    if (!loadStoredRequirement) return;

    const frame = window.requestAnimationFrame(() => {
      const requirement = readContactRequirement();
      if (!requirement) return;

      const nextPrefilledMessage = clampInquiryMessage(
        [initialMessage, `${requirementLabel}: ${requirement}`]
          .filter(Boolean)
          .join("\n"),
      );

      setPrefilledMessage(nextPrefilledMessage);
      setMessage((value) =>
        value === safeInitialMessage ? nextPrefilledMessage : value,
      );
    });

    return () => window.cancelAnimationFrame(frame);
  }, [initialMessage, loadStoredRequirement, requirementLabel, safeInitialMessage]);

  useEffect(() => {
    if (!window.location.search) return;

    window.history.replaceState(
      window.history.state,
      "",
      `${window.location.pathname}${window.location.hash}`,
    );
  }, []);

  const clearContext = () => {
    if (loadStoredRequirement) clearContactRequirement();
    setShowContext(false);
    setApplication((value) =>
      value === initialApplication ? "" : value
    );
    setMaterial((value) => (value === initialMaterial ? "" : value));
    setMessage((value) => (value === prefilledMessage ? "" : value));
    setGrade("");
    setInquiryType("");
    setSource("");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const body = buildInquiryMessage(formData, messages.emailDraft);
    const subject = `${messages.emailDraft.subjectPrefix} - ${readField(
      formData,
      "company"
    )}`;
    const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setStatus("submitting");

    const controller = new AbortController();
    const timeoutId = window.setTimeout(
      () => controller.abort(),
      inquiryClientTimeoutMs,
    );

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          company: readField(formData, "company"),
          email: readField(formData, "email"),
          grade: readField(formData, "grade", ""),
          inquiryType: readField(formData, "inquiryType", ""),
          intent: readField(formData, "intent", ""),
          material: readField(formData, "material"),
          application: readField(formData, "application"),
          message: readField(formData, "message"),
          source: readField(formData, "source", ""),
          website: String(formData.get("website") ?? ""),
        }),
        signal: controller.signal,
      });
      const result = (await response.json()) as {
        delivered?: boolean;
        fallback?: boolean;
      };

      if (response.ok && result.delivered && !result.fallback) {
        trackInquirySubmitted("server_email");
        setStatus("sent");
        form.reset();
        setApplication("");
        setGrade("");
        setInquiryType("");
        setMaterial("");
        setMessage("");
        setSource("");
        setShowContext(false);
        clearContactRequirement();
        return;
      }
    } catch {
      // Keep the fallback path below available for local and offline cases.
    } finally {
      window.clearTimeout(timeoutId);
    }

    try {
      await navigator.clipboard?.writeText(body);
    } catch {
      // Clipboard support is optional; the email draft still contains the body.
    }

    setStatus("fallback");
    trackInquiryFallback("mailto_draft");
    window.location.href = mailto;
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        className="hidden"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <input name="grade" type="hidden" value={grade} readOnly />
      <input
        name="inquiryType"
        type="hidden"
        value={inquiryType ? messages.inquiryTypeOptions[inquiryType] : ""}
        readOnly
      />
      <input name="source" type="hidden" value={source} readOnly />

      {showContext && contextLabel ? (
        <div className={styles.context}>
          <div className={styles.contextCopy}>
            <span className={styles.contextEyebrow}>{messages.contextFrom}</span>
            <strong>{contextLabel}</strong>
            <p>{messages.contextPrefilled}</p>
          </div>
          <button
            className={styles.contextClear}
            type="button"
            onClick={clearContext}
          >
            {messages.clearContext}
          </button>
        </div>
      ) : null}

      <div className="contact-form-grid">
        <label className="contact-field">
          <span>{messages.inquiryTypeLabel}</span>
          <Select
            name="intent"
            value={inquiryType}
            onChange={(event) =>
              setInquiryType(event.target.value as InquiryType | "")
            }
          >
            <option value="" disabled>
              {messages.inquiryTypePlaceholder}
            </option>
            {Object.entries(messages.inquiryTypeOptions).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </Select>
        </label>

        <label className="contact-field">
          <span>
            {messages.companyLabel}{" "}
            <span aria-hidden="true" className="contact-required-marker">
              *
            </span>
          </span>
          <Input
            name="company"
            autoComplete="organization"
            placeholder={messages.companyPlaceholder}
            required
          />
        </label>

        <label className="contact-field">
          <span>
            {messages.emailLabel}{" "}
            <span aria-hidden="true" className="contact-required-marker">
              *
            </span>
          </span>
          <Input
            name="email"
            type="email"
            autoComplete="email"
            spellCheck={false}
            placeholder="name@company.com"
            required
          />
        </label>

        <label className="contact-field">
          <span>{messages.materialLabel}</span>
          <Select
            name="material"
            value={material}
            onChange={(event) => setMaterial(event.target.value)}
          >
            <option value="" disabled>
              {messages.materialPlaceholder}
            </option>
            {selectableMaterialOptions.map((option) => (
              <option key={option} value={option}>
                {messages.materialOptionLabels[option] ?? option}
              </option>
            ))}
          </Select>
        </label>

        <label className="contact-field">
          <span>
            {messages.applicationLabel}{" "}
            <span aria-hidden="true" className="contact-required-marker">
              *
            </span>
          </span>
          <Input
            name="application"
            autoComplete="off"
            placeholder={messages.applicationPlaceholder}
            value={application}
            onChange={(event) => setApplication(event.target.value)}
            required
          />
        </label>

      </div>

      <label className="contact-field contact-message">
        <span className={styles.messageLabel}>
          <span>{messages.detailsLabel}</span>
          <span className={styles.characterCount} id="contact-message-count">
            {message.length} / {inquiryMessageMaxLength}
          </span>
        </span>
        <Textarea
          name="message"
          rows={5}
          autoComplete="off"
          aria-describedby="contact-message-count"
          maxLength={inquiryMessageMaxLength}
          placeholder={messages.detailsPlaceholder}
          value={message}
          onChange={(event) => setMessage(clampInquiryMessage(event.target.value))}
        />
      </label>

      <div className="contact-form-actions">
        <Button
          variant="primary"
          size="form"
          type="submit"
          disabled={status === "submitting"}
          aria-busy={status === "submitting"}
        >
          {status === "submitting" ? messages.sending : messages.submit}
        </Button>
        <p>{messages.fallbackNote}</p>
      </div>

      <p
        className={`contact-submit-status contact-submit-status-${status}`}
        role="status"
        aria-live="polite"
      >
        {status === "sent"
          ? messages.sentStatus
          : status === "fallback"
            ? messages.fallbackStatus
            : ""}
      </p>
    </form>
  );
}
