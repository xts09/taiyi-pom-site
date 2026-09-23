"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Expand, X, ZoomIn, ZoomOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import styles from "./WearEvidenceGallery.module.css";

type Props = {
  grade: string;
  curve: string;
  photos: readonly string[] | null;
  locale: "en" | "zh";
};

export function WearEvidenceGallery({ grade, curve, photos, locale }: Props) {
  const zh = locale === "zh";
  const items = [
    { src: curve, width: 591, height: 424, label: zh ? "试验过程曲线" : "Test process curve", photo: false },
    ...(photos ?? []).map((src, index) => ({
      src, width: 312,
      height: grade === "ETM100-NM" ? (index === 0 ? 421 : 416) : 427,
      label: index === 0 ? (zh ? "试验前" : "Before test") : (zh ? "试验后" : "After test"),
      photo: true,
    })),
  ];
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [zoomed, setZoomed] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const titleId = useId();
  const active = activeIndex === null ? null : items[activeIndex];
  const isOpen = activeIndex !== null;

  useEffect(() => {
    const element = dialog.current;
    if (!isOpen || !element) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    element.showModal();
    closeButton.current?.focus();
    return () => {
      if (element.open) element.close();
      document.body.style.overflow = previousOverflow;
      trigger.current?.focus({ preventScroll: true });
    };
  }, [isOpen]);

  function navigate(direction: number) {
    setActiveIndex(index => index === null ? null : (index + direction + items.length) % items.length);
    setZoomed(false);
  }

  return (
    <>
      <div className={photos ? styles.gallery : styles.curveOnly}>
        {items.map((item, index) => (
          <figure key={item.src} className={item.photo ? styles.photo : styles.curve}>
            <button
              type="button"
              className={styles.preview}
              aria-label={`${zh ? "放大查看" : "Enlarge"} ${grade} · ${item.label}`}
              aria-haspopup="dialog"
              onClick={event => {
                trigger.current = event.currentTarget;
                setZoomed(false);
                setActiveIndex(index);
              }}
            >
              <Image src={item.src} alt={`${grade} · ${item.label}`} width={item.width} height={item.height} sizes={item.photo ? "(max-width: 768px) 45vw, 20vw" : "(max-width: 768px) 90vw, 50vw"} />
            </button>
            <figcaption>{item.label}<span><Expand size={14} aria-hidden="true" />{zh ? "点击放大" : "Enlarge"}</span></figcaption>
          </figure>
        ))}
      </div>
      <dialog
        ref={dialog}
        className={styles.viewer}
        aria-labelledby={titleId}
        onClose={() => setActiveIndex(null)}
        onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}
        onKeyDown={event => {
          if (event.key === "Tab") {
            const controls = event.currentTarget.querySelectorAll<HTMLElement>('button:not([disabled]), [href], [tabindex="0"]');
            const first = controls[0];
            const last = controls[controls.length - 1];
            if (event.shiftKey && document.activeElement === first) {
              event.preventDefault();
              last?.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
              event.preventDefault();
              first?.focus();
            }
          }
          if (!zoomed && event.key === "ArrowLeft") { event.preventDefault(); navigate(-1); }
          if (!zoomed && event.key === "ArrowRight") { event.preventDefault(); navigate(1); }
        }}
      >
        {active ? (
          <div className={styles.viewerContent}>
            <div className={styles.viewerHead}>
              <h2 id={titleId}>{grade} <span>· {active.label}</span></h2>
              <Button ref={closeButton} type="button" variant="ghost" size="form" aria-label={zh ? "关闭图片" : "Close image"} onClick={() => dialog.current?.close()}><X aria-hidden="true" /></Button>
            </div>
            <div className={`${styles.imageStage} ${zoomed ? styles.zoomed : ""}`} tabIndex={0} aria-label={active.label}>
              <Image src={active.src} alt={`${grade} · ${active.label}`} width={active.width} height={active.height} unoptimized />
            </div>
            <div className={styles.viewerControls}>
              <Button type="button" variant="secondary" size="form" aria-label={zh ? "上一张" : "Previous image"} onClick={() => navigate(-1)}><ArrowLeft aria-hidden="true" /></Button>
              <span>{(activeIndex ?? 0) + 1} / {items.length}</span>
              <Button type="button" variant="secondary" size="form" aria-pressed={zoomed} onClick={() => setZoomed(value => !value)}>
                {zoomed ? <ZoomOut aria-hidden="true" /> : <ZoomIn aria-hidden="true" />}
                {zoomed ? (zh ? "适应窗口" : "Fit") : (zh ? "放大" : "Zoom")}
              </Button>
              <Button type="button" variant="secondary" size="form" aria-label={zh ? "下一张" : "Next image"} onClick={() => navigate(1)}><ArrowRight aria-hidden="true" /></Button>
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  );
}
