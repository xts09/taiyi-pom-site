"use client";

import { useState, type FormEvent } from "react";
import {
  trackInquiryFallback,
  trackInquirySubmitted,
} from "@/lib/conversionEvents";
import { pomSubcategoryLabels, productCategoryOrder } from "@/lib/productCategories";
import { contactEmail } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const materialOptions = [
  "Modified POM Compounds",
  ...productCategoryOrder.map(
    (category) => pomSubcategoryLabels[category] ?? category
  ),
  "Other Engineering Plastic Compound",
];

const readField = (formData: FormData, name: string) =>
  String(formData.get(name) ?? "").trim() || "Not specified";

const buildInquiryMessage = (formData: FormData) =>
  [
    "Dear Ethan,",
    "",
    "Please review the following material requirement:",
    "",
    `Company: ${readField(formData, "company")}`,
    `Email: ${readField(formData, "email")}`,
    `Material Interest: ${readField(formData, "material")}`,
    `Application / Part: ${readField(formData, "application")}`,
    "",
    "Requirement Details:",
    readField(formData, "message"),
    "",
    "Regards,",
  ].join("\n");

export function ContactInquiryForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "sent" | "fallback"
  >("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const body = buildInquiryMessage(formData);
    const subject = `Material Requirement Request - ${readField(
      formData,
      "company"
    )}`;
    const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setStatus("submitting");

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          company: readField(formData, "company"),
          email: readField(formData, "email"),
          material: readField(formData, "material"),
          application: readField(formData, "application"),
          message: readField(formData, "message"),
          website: String(formData.get("website") ?? ""),
        }),
      });
      const result = (await response.json()) as {
        delivered?: boolean;
        fallback?: boolean;
      };

      if (response.ok && result.delivered && !result.fallback) {
        trackInquirySubmitted("server_email");
        setStatus("sent");
        form.reset();
        return;
      }
    } catch {
      // Keep the fallback path below available for local and offline cases.
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

      <div className="contact-form-grid">
        <label className="contact-field">
          <span>
            Company{" "}
            <span aria-hidden="true" className="contact-required-marker">
              *
            </span>
          </span>
          <Input
            name="company"
            autoComplete="organization"
            placeholder="Company name"
            required
          />
        </label>

        <label className="contact-field">
          <span>
            Email{" "}
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
          <span>Material Family (optional)</span>
          <Select name="material" defaultValue="">
            <option value="" disabled>
              Choose a material family
            </option>
            {materialOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </label>

        <label className="contact-field">
          <span>
            Application / Part{" "}
            <span aria-hidden="true" className="contact-required-marker">
              *
            </span>
          </span>
          <Input
            name="application"
            autoComplete="off"
            placeholder={"Gear, clip, housing\u2026"}
            required
          />
        </label>

      </div>

      <label className="contact-field contact-message">
        <span>Requirement Details (optional)</span>
        <Textarea
          name="message"
          rows={5}
          autoComplete="off"
          placeholder="Current grade, operating conditions, target properties, annual volume, or document needs."
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
          {status === "submitting" ? "Sending\u2026" : "Submit Project Requirements"}
        </Button>
        <p>
          If direct delivery is unavailable, an email draft will open instead.
        </p>
      </div>

      <p
        className={`contact-submit-status contact-submit-status-${status}`}
        role="status"
        aria-live="polite"
      >
        {status === "sent"
          ? "Submitted. We will review your requirement and reply by email."
          : status === "fallback"
            ? "An email draft was prepared, and the inquiry text was copied when possible."
            : ""}
      </p>
    </form>
  );
}
