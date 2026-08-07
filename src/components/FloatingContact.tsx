"use client";

import Link from "next/link";
import { ArrowUpRight, Mail, MessageCircle, Phone, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { contactEmail } from "@/lib/seo";

import styles from "./FloatingContact.module.css";

const contactPhoneDisplay = "+86 187 9641 8919";
const contactPhoneDigits = "8618796418919";

const directContactActions = [
  {
    href: `mailto:${contactEmail}?subject=Material%20Requirement%20Request`,
    label: "Email",
    detail: contactEmail,
    icon: Mail,
    external: false,
  },
  {
    href: `https://wa.me/${contactPhoneDigits}`,
    label: "WhatsApp",
    detail: contactPhoneDisplay,
    icon: MessageCircle,
    external: true,
  },
  {
    href: `tel:+${contactPhoneDigits}`,
    label: "Call",
    detail: contactPhoneDisplay,
    icon: Phone,
    external: false,
  },
] as const;

function FloatingContactShell() {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelTitleId = useId();
  const panelId = useId();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    closeRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") {
        return;
      }

      setIsOpen(false);
      triggerRef.current?.focus();
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (
        rootRef.current &&
        event.target instanceof Node &&
        !rootRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isOpen]);

  const closePanel = (restoreFocus = false) => {
    setIsOpen(false);

    if (restoreFocus) {
      window.requestAnimationFrame(() => triggerRef.current?.focus());
    }
  };

  return (
    <div
      ref={rootRef}
      className={`${styles.root} ${isOpen ? styles.open : ""}`}
    >
      {isOpen ? (
        <button
          className={styles.backdrop}
          type="button"
          tabIndex={-1}
          aria-label="Close contact options"
          onClick={() => closePanel()}
        />
      ) : null}

      <aside
        id={panelId}
        className={styles.panel}
        aria-labelledby={panelTitleId}
        aria-hidden={!isOpen}
      >
        <div className={styles.panelHeader}>
          <div>
            <span className={styles.eyebrow}>Sales contact</span>
            <h2 id={panelTitleId}>Discuss Your Application</h2>
          </div>
          <button
            ref={closeRef}
            className={styles.closeButton}
            type="button"
            aria-label="Close contact options"
            onClick={() => closePanel(true)}
          >
            <X aria-hidden="true" size={18} />
          </button>
        </div>

        <p className={styles.description}>
          Share your part, performance targets, and document needs with our
          material team.
        </p>

        <Button
          asChild
          className={styles.inquiryAction}
          variant="primary"
          size="form"
        >
          <Link href="/contact" onClick={() => closePanel()}>
            Discuss Your Application
            <ArrowUpRight aria-hidden="true" size={16} />
          </Link>
        </Button>

        <ul className={styles.directActions} aria-label="Direct contact options">
          {directContactActions.map((action) => {
            const Icon = action.icon;

            return (
              <li key={action.label}>
                <a
                  href={action.href}
                  target={action.external ? "_blank" : undefined}
                  rel={action.external ? "noreferrer" : undefined}
                  onClick={() => closePanel()}
                >
                  <span className={styles.actionIcon}>
                    <Icon aria-hidden="true" size={18} />
                  </span>
                  <span className={styles.actionCopy}>
                    <strong>{action.label}</strong>
                    <span>{action.detail}</span>
                  </span>
                  {action.external ? (
                    <ArrowUpRight
                      className={styles.externalIcon}
                      aria-hidden="true"
                      size={15}
                    />
                  ) : null}
                </a>
              </li>
            );
          })}
        </ul>
      </aside>

      <button
        ref={triggerRef}
        className={styles.trigger}
        type="button"
        aria-controls={panelId}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close contact options" : "Open contact options"}
        onClick={() => setIsOpen((current) => !current)}
      >
        <MessageCircle aria-hidden="true" size={19} />
        <span>Contact</span>
      </button>
    </div>
  );
}

export function FloatingContact() {
  const pathname = usePathname();

  if (pathname === "/contact" || pathname.startsWith("/contact/")) {
    return null;
  }

  return <FloatingContactShell key={pathname} />;
}
