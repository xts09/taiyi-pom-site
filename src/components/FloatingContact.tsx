"use client";

import Link from "next/link";
import { ArrowUpRight, Mail, MessageCircle, Phone, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import type { LocalizedUrlSegment } from "@/i18n/config";
import type { FloatingContactMessages } from "@/i18n/types";
import { contactEmail } from "@/lib/seo";

import styles from "./FloatingContact.module.css";

const contactPhoneDisplay = "+86 187 9641 8919";
const contactPhoneDigits = "8618796418919";

type FloatingContactProps = {
  messages: FloatingContactMessages;
  localeSegment?: LocalizedUrlSegment;
};

function FloatingContactShell({
  messages,
  localeSegment,
}: FloatingContactProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAvailable, setIsAvailable] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const directContactActions = [
    {
      href: `mailto:${contactEmail}?subject=${encodeURIComponent(messages.mailSubject)}`,
      label: messages.email,
      detail: contactEmail,
      icon: Mail,
      external: false,
    },
    {
      href: `https://wa.me/${contactPhoneDigits}`,
      label: messages.whatsapp,
      detail: contactPhoneDisplay,
      icon: MessageCircle,
      external: true,
    },
    {
      href: `tel:+${contactPhoneDigits}`,
      label: messages.call,
      detail: contactPhoneDisplay,
      icon: Phone,
      external: false,
    },
  ] as const;
  const panelTitleId = useId();
  const panelId = useId();

  useEffect(() => {
    const localInquiryAction = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(
        `main a[href^="${localeSegment ? `/${localeSegment}/contact` : "/contact"}"]`,
      ),
    ).find((action) => {
      const rect = action.getBoundingClientRect();
      return rect.width > 0 && rect.height > 0;
    });

    if (!localInquiryAction) {
      const frame = window.requestAnimationFrame(() => setIsAvailable(true));
      return () => window.cancelAnimationFrame(frame);
    }

    const updateAvailability = (isLocalActionVisible: boolean) => {
      setIsAvailable(!isLocalActionVisible);

      if (isLocalActionVisible) {
        setIsOpen(false);
      }
    };
    const frame = window.requestAnimationFrame(() => {
      const rect = localInquiryAction.getBoundingClientRect();
      updateAvailability(rect.bottom > 0 && rect.top < window.innerHeight);
    });

    const observer = new IntersectionObserver(
      ([entry]) => updateAvailability(entry.isIntersecting),
      { threshold: 0.01 },
    );

    observer.observe(localInquiryAction);

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [localeSegment]);

  useEffect(() => {
    const mobileNavigation = window.matchMedia("(max-width: 63.999rem)");
    let focusFrame: number | undefined;

    const syncWithNavigationMode = () => {
      if (!mobileNavigation.matches) {
        return;
      }

      const shouldMoveFocus =
        rootRef.current?.contains(document.activeElement) ?? false;

      setIsOpen(false);

      if (shouldMoveFocus) {
        focusFrame = window.requestAnimationFrame(() => {
          document
            .querySelector<HTMLElement>(".mobile-menu > summary")
            ?.focus();
        });
      }
    };

    syncWithNavigationMode();
    mobileNavigation.addEventListener("change", syncWithNavigationMode);

    return () => {
      mobileNavigation.removeEventListener("change", syncWithNavigationMode);

      if (focusFrame !== undefined) {
        window.cancelAnimationFrame(focusFrame);
      }
    };
  }, []);

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
      className={`${styles.root} ${isAvailable ? styles.available : ""} ${isOpen ? styles.open : ""}`}
    >
      {isOpen ? (
        <button
          className={styles.backdrop}
          type="button"
          tabIndex={-1}
          aria-label={messages.closeOptions}
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
            <span className={styles.eyebrow}>{messages.salesContact}</span>
            <h2 id={panelTitleId}>{messages.title}</h2>
          </div>
          <button
            ref={closeRef}
            className={styles.closeButton}
            type="button"
            aria-label={messages.closeOptions}
            onClick={() => closePanel(true)}
          >
            <X aria-hidden="true" size={18} />
          </button>
        </div>

        <p className={styles.description}>{messages.description}</p>

        <Button
          asChild
          className={styles.inquiryAction}
          variant="primary"
          size="form"
        >
          <Link
            href={localeSegment ? `/${localeSegment}/contact` : "/contact"}
            onClick={() => closePanel()}
          >
            {messages.title}
            <ArrowUpRight aria-hidden="true" size={16} />
          </Link>
        </Button>

        <ul
          className={styles.directActions}
          aria-label={messages.directOptionsAria}
        >
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
        aria-label={isOpen ? messages.closeOptions : messages.openOptions}
        onClick={() => setIsOpen((current) => !current)}
      >
        <MessageCircle aria-hidden="true" size={19} />
        <span>{messages.triggerLabel}</span>
      </button>
    </div>
  );
}

export function FloatingContact({
  messages,
  localeSegment,
}: FloatingContactProps) {
  const pathname = usePathname();
  const contactPath = localeSegment ? `/${localeSegment}/contact` : "/contact";

  if (pathname === contactPath || pathname.startsWith(`${contactPath}/`)) {
    return null;
  }

  return (
    <FloatingContactShell
      key={pathname}
      messages={messages}
      localeSegment={localeSegment}
    />
  );
}
