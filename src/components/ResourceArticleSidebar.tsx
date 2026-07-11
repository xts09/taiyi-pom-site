"use client";

import { useEffect, useState } from "react";
import { LineSidebar } from "@/components/LineSidebar";

type ResourceArticleSidebarProps = {
  sections: Array<{
    id: string;
    title: string;
  }>;
};

const compactSectionLabel = (title: string) => {
  if (title.includes("Molded Part")) return "Molded Part First";
  if (title.includes("Application Conditions")) return "Conditions";
  if (title.includes("Standard, Wear-Resistant")) return "POM Direction";
  if (title.includes("Glass Fiber") || title.includes("Carbon Fiber")) {
    return "Reinforced POM";
  }
  if (title.includes("Conductive")) return "Functional Grades";
  if (title.includes("TDS")) return "Reading TDS";
  if (title.includes("Molded-Part Trials")) return "Trials";
  if (title.includes("Wear Resistance and Low Friction")) return "Wear vs Friction";
  if (title.includes("Load, Speed")) return "Load / Speed";
  if (title.includes("Mating Material")) return "Mating Surface";
  if (title.includes("PTFE") || title.includes("MoS2")) return "Additives";
  if (title.includes("Lubrication")) return "Noise / Stick-Slip";
  if (title.includes("Counterpart Wear")) return "Counterpart Wear";
  if (title.includes("Laboratory")) return "Test Limits";
  if (title.includes("What to Send")) return "Review Inputs";

  return title;
};

export function ResourceArticleSidebar({ sections }: ResourceArticleSidebarProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!sections.length) {
      return;
    }

    let frame = 0;

    const updateActiveSection = () => {
      const readingLine = Math.min(window.innerHeight * 0.38, 380);
      const nextIndex = sections.reduce((currentIndex, section, index) => {
        const element = document.getElementById(section.id);

        if (!element) {
          return currentIndex;
        }

        return element.getBoundingClientRect().top <= readingLine
          ? index
          : currentIndex;
      }, 0);

      setActiveIndex(nextIndex);
      frame = 0;
    };

    const scheduleUpdate = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [sections]);

  const handleItemClick = (index: number) => {
    const section = sections[index];
    if (!section) {
      return;
    }

    document.getElementById(section.id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <aside className="resource-article-sidebar" aria-label="Article sections">
      <span>On this page</span>
      <LineSidebar
        items={sections.map((section) => compactSectionLabel(section.title))}
        accentColor="#38bdf8"
        textColor="#cbd5e1"
        markerColor="#64748b"
        showMarker
        maxShift={10}
        markerLength={24}
        markerGap={10}
        itemGap={10}
        fontSize={0.86}
        proximityRadius={95}
        activeIndex={activeIndex}
        onItemClick={handleItemClick}
      />
    </aside>
  );
}
