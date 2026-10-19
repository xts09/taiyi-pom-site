"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ChevronRight, FileSearch, Menu, X } from "lucide-react";
import { useCallback, useEffect, useId, useRef, useState, type ReactNode } from "react";
import { EnglishDestinationBadge } from "@/components/EnglishDestinationBadge";
import { BrandDescriptor } from "@/components/BrandDescriptor";
import type { HeaderMessages } from "@/i18n/types";
import type { HeaderNavigationItem, HeaderNavigationModel } from "@/lib/headerNavigation";

type HeaderMobileMenuProps = {
  messages: HeaderMessages;
  navigation: HeaderNavigationModel;
  rootLinks: HeaderNavigationItem[];
  tdsHref: string;
  languageControl: ReactNode;
  onOpen: () => void;
};
type MenuView = { sectionId?: HeaderNavigationModel["sections"][number]["id"]; groupId?: string };

export function HeaderMobileMenu({
  messages, navigation, rootLinks, tdsHref, languageControl, onOpen,
}: HeaderMobileMenuProps) {
  const dialogId = useId();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const previousOverflow = useRef<string | null>(null);
  const nextFocus = useRef<string | null>(null);
  const [view, setView] = useState<MenuView>({});
  const section = navigation.sections.find(item => item.id === view.sectionId);
  const group = section?.groups.find(item => item.id === view.groupId);
  const overview = group ? group.overview : section?.overview;

  const releaseScroll = useCallback(() => {
    if (previousOverflow.current !== null) {
      document.body.style.overflow = previousOverflow.current;
      previousOverflow.current = null;
    }
  }, []);

  const close = () => dialogRef.current?.close();
  const handleClose = () => {
    releaseScroll();
    if (triggerRef.current?.isConnected) triggerRef.current.focus();
  };
  const open = () => {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;
    onOpen();
    nextFocus.current = `section-${navigation.sections[0]?.id}`;
    setView({});
    previousOverflow.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.showModal();
  };
  const goBack = () => {
    nextFocus.current = group ? `group-${group.id}` : `section-${section?.id}`;
    setView(group ? { sectionId: section?.id } : {});
  };

  useEffect(() => {
    if (!dialogRef.current?.open) return;
    contentRef.current?.scrollTo({ top: 0 });
    const target = nextFocus.current === "title"
      ? titleRef.current
      : contentRef.current?.querySelector<HTMLElement>(`[data-menu-focus="${nextFocus.current}"]`);
    target?.focus();
    nextFocus.current = null;
  }, [view]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1200px)");
    const dialog = dialogRef.current;
    const closeOnDesktop = () => {
      if (desktop.matches && dialog?.open) dialog.close();
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      desktop.removeEventListener("change", closeOnDesktop);
      if (dialog?.open) dialog.close();
      releaseScroll();
    };
  }, [releaseScroll]);

  const itemLink = (item: HeaderNavigationItem, className?: string) => (
    <Link key={`${item.href}-${item.title}`} href={item.href} prefetch={false} onClick={close} className={className ?? "min-h-11"} aria-label={item.accessibleLabel}>
      <span>
        {item.title}
        {item.englishDestination && <EnglishDestinationBadge label={messages.englishDestinationLabel} />}
      </span>
      <ArrowRight aria-hidden="true" size={19} />
    </Link>
  );

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className="header-menu-trigger min-h-11 min-w-11"
        aria-label={messages.menu}
        aria-haspopup="dialog"
        aria-controls={dialogId}
        onClick={open}
      >
        <span>{messages.menu}</span>
        <Menu aria-hidden="true" size={20} />
      </button>
      <dialog
        ref={dialogRef}
        id={dialogId}
        className="header-mobile-dialog"
        aria-label={messages.navigationAria}
        onClose={handleClose}
        onKeyDown={(event) => {
          if (event.key !== "Tab") return;
          const controls = Array.from(event.currentTarget.querySelectorAll<HTMLElement>(
            "a[href], button:not([disabled]), select:not([disabled])",
          )).filter(control => control.getClientRects().length > 0);
          const first = controls[0];
          const last = controls[controls.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last?.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first?.focus();
          }
        }}
      >
        <div className="header-mobile-top">
          {section ? (
            <button type="button" className="header-mobile-back min-h-11" onClick={goBack}>
              <ArrowLeft aria-hidden="true" size={20} />
              <span>{navigation.backLabel}</span>
            </button>
          ) : (
            <div className="header-mobile-brand">
              <Image src="/platform-wordmark.png" alt="PLATFORM" width={155} height={24} sizes="155px" />
              <BrandDescriptor />
            </div>
          )}
          <button type="button" className="header-mobile-close min-h-11 min-w-11" aria-label={messages.close} onClick={close}>
            <X aria-hidden="true" size={23} />
          </button>
        </div>
        <div ref={contentRef} className="header-mobile-content">
          {section && <h2 ref={titleRef} tabIndex={-1} className="header-mobile-title">{group?.title ?? section.title}</h2>}
          <nav className="header-mobile-list" aria-label={group?.title ?? section?.title ?? messages.navigationAria}>
            {!section && (
              <>
                {navigation.sections.map(item => (
                  <button
                    key={item.id}
                    type="button"
                    className="min-h-11"
                    data-menu-focus={`section-${item.id}`}
                    onClick={() => { nextFocus.current = "title"; setView({ sectionId: item.id }); }}
                  >
                    <span>{item.title}</span><ChevronRight aria-hidden="true" size={21} />
                  </button>
                ))}
                {rootLinks.map(item => itemLink(item))}
              </>
            )}
            {section && !group && section.groups.map(item => (
              <button
                key={item.id}
                type="button"
                className="min-h-11"
                data-menu-focus={`group-${item.id}`}
                onClick={() => { nextFocus.current = "title"; setView({ sectionId: section.id, groupId: item.id }); }}
              >
                <span>{item.title}</span><ChevronRight aria-hidden="true" size={21} />
              </button>
            ))}
            {group?.items.map(item => itemLink(item))}
            {overview && itemLink(overview, "header-mobile-overview min-h-11")}
          </nav>
        </div>
        <div className="header-mobile-footer">
          <Link className="header-mobile-data min-h-11" href={tdsHref} prefetch={false} onClick={close}>
            <FileSearch aria-hidden="true" size={20} />
            <span>{messages.findTds}</span>
          </Link>
          {languageControl}
        </div>
      </dialog>
    </>
  );
}
