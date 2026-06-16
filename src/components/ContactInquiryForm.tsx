"use client";

import { useState, type FormEvent } from "react";
import { pomSubcategoryLabels, productCategoryOrder } from "@/lib/productCategories";

const materialOptions = [
  "Modified POM Compounds",
  ...productCategoryOrder.map(
    (category) => pomSubcategoryLabels[category] ?? category
  ),
  "Other Engineering Plastic Compound",
];

const documentOptions = ["TDS", "SDS", "COA", "REACH", "RoHS"];

const readField = (formData: FormData, name: string) =>
  String(formData.get(name) ?? "").trim() || "Not specified";

const buildInquiryMessage = (formData: FormData, documents: string) =>
  [
    "Dear Ethan,",
    "",
    "Please review the following material requirement:",
    "",
    `Name: ${readField(formData, "name")}`,
    `Company: ${readField(formData, "company")}`,
    `Email: ${readField(formData, "email")}`,
    `Country / Region: ${readField(formData, "region")}`,
    `Material Interest: ${readField(formData, "material")}`,
    `Application / Part: ${readField(formData, "application")}`,
    `Mold Stage / Cavity Count: ${readField(formData, "tooling")}`,
    `Shrinkage / Warpage Concern: ${readField(formData, "shrinkage")}`,
    `Annual Volume: ${readField(formData, "volume")}`,
    `Required Documents: ${documents || "Not specified"}`,
    "",
    "Message:",
    readField(formData, "message"),
    "",
    "Regards,",
  ].join("\n");

export function ContactInquiryForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "sent" | "fallback" | "error"
  >("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const documentList = formData.getAll("documents").map(String);
    const documents = documentList.join(", ");
    const body = buildInquiryMessage(formData, documents);
    const subject = `Material Requirement Request - ${readField(
      formData,
      "company"
    )}`;
    const mailto = `mailto:xiatianshi@jstynm.com?subject=${encodeURIComponent(
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
          name: readField(formData, "name"),
          company: readField(formData, "company"),
          email: readField(formData, "email"),
          region: readField(formData, "region"),
          material: readField(formData, "material"),
          application: readField(formData, "application"),
          tooling: readField(formData, "tooling"),
          shrinkage: readField(formData, "shrinkage"),
          volume: readField(formData, "volume"),
          documents: documentList,
          message: readField(formData, "message"),
          website: String(formData.get("website") ?? ""),
        }),
      });
      const result = (await response.json()) as {
        delivered?: boolean;
        fallback?: boolean;
      };

      if (response.ok && result.delivered && !result.fallback) {
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
          <span>Name</span>
          <input name="name" autoComplete="name" placeholder="Your name" />
        </label>

        <label className="contact-field">
          <span>Company</span>
          <input
            name="company"
            autoComplete="organization"
            placeholder="Company name"
          />
        </label>

        <label className="contact-field">
          <span>Email</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="name@company.com"
            required
          />
        </label>

        <label className="contact-field">
          <span>Country / Region</span>
          <input
            name="region"
            autoComplete="country-name"
            placeholder="Destination market"
          />
        </label>

        <label className="contact-field contact-field-wide">
          <span>Material Interest</span>
          <select name="material" defaultValue="">
            <option value="" disabled>
              Select material direction
            </option>
            {materialOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="contact-field">
          <span>Application / Part</span>
          <input name="application" placeholder="Gear, clip, housing..." />
        </label>

        <label className="contact-field">
          <span>Mold Stage / Cavities</span>
          <input
            name="tooling"
            placeholder="New mold, 8 cavities, trial mold..."
          />
        </label>

        <label className="contact-field">
          <span>Shrinkage / Warpage</span>
          <input
            name="shrinkage"
            placeholder="Target shrinkage, warpage concern..."
          />
        </label>

        <label className="contact-field">
          <span>Annual Volume</span>
          <input name="volume" placeholder="kg/year or tons/year" />
        </label>
      </div>

      <fieldset className="contact-documents">
        <legend>Required Documents</legend>
        <div className="contact-document-options">
          {documentOptions.map((option) => (
            <label key={option} className="contact-document-option">
              <input
                name="documents"
                type="checkbox"
                value={option}
                defaultChecked={option === "TDS"}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="contact-field contact-message">
        <span>Requirement Details</span>
        <textarea
          name="message"
          rows={6}
          placeholder="Please include current material, color, working condition, gate or flow-path notes, target properties, and any known testing requirements."
        />
      </label>

      <div className="contact-form-actions">
        <button
          className="cta-primary px-6 py-3 text-sm"
          type="submit"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending..." : "Send Requirement"}
        </button>
        <p>
          Direct delivery is used when server email is configured. Otherwise,
          we prepare an email draft and copy the inquiry text for backup.
        </p>
      </div>

      <p className={`contact-submit-status contact-submit-status-${status}`}>
        {status === "sent"
          ? "Submitted successfully. We will review your requirement and reply by email."
          : status === "fallback"
            ? "Server delivery is not configured yet, so an email draft was prepared. The inquiry text was also copied when possible."
            : status === "error"
              ? "Submission failed. Please email xiatianshi@jstynm.com directly."
              : ""}
      </p>
    </form>
  );
}
