"use client";

import { useEffect, useState } from "react";
import {
  buildContactDirectEmailHref,
  contactContextChangeEvent,
  parseContactContextHash,
  type ContactContext,
  type ContactDirectEmailCopy,
} from "@/lib/contactContext";
import { contactEmail } from "@/lib/contactDetails";

type ContactDirectEmailLinkProps = {
  initialContext: ContactContext;
  copy: ContactDirectEmailCopy;
  label: string;
};

export function ContactDirectEmailLink({
  initialContext,
  copy,
  label,
}: ContactDirectEmailLinkProps) {
  const [href, setHref] = useState(() =>
    buildContactDirectEmailHref(initialContext, copy, contactEmail),
  );

  useEffect(() => {
    const updateFromHash = () => setHref(buildContactDirectEmailHref(
      parseContactContextHash(window.location.hash), copy, contactEmail,
    ));
    const frame = window.requestAnimationFrame(() => {
      const hashContext = parseContactContextHash(window.location.hash);
      setHref(buildContactDirectEmailHref(
        Object.keys(hashContext).length ? hashContext : initialContext,
        copy,
        contactEmail,
      ));
    });
    window.addEventListener("hashchange", updateFromHash);
    window.addEventListener(contactContextChangeEvent, updateFromHash);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", updateFromHash);
      window.removeEventListener(contactContextChangeEvent, updateFromHash);
    };
  }, [copy, initialContext]);

  return <a href={href} className="cta-secondary px-6 py-3 text-sm">{label}</a>;
}
