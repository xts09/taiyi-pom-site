"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

type HomeMotionProps = {
  children: ReactNode;
};

export function HomeMotion({ children }: HomeMotionProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) {
        return;
      }

      const heroVideo = root.querySelector<HTMLVideoElement>(".hero-video");
      const heroVideoLoopStart = Number(heroVideo?.dataset.loopStart ?? "0");
      const seekHeroVideoToLoopStart = () => {
        if (
          heroVideo &&
          Number.isFinite(heroVideo.duration) &&
          heroVideo.currentTime < heroVideoLoopStart
        ) {
          heroVideo.currentTime = heroVideoLoopStart;
        }
      };
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: reduce)", () => {
        const showHeroVideoStartFrame = () => {
          seekHeroVideoToLoopStart();
          heroVideo?.pause();
        };

        if (heroVideo) {
          if (heroVideo.readyState >= HTMLMediaElement.HAVE_METADATA) {
            showHeroVideoStartFrame();
          } else {
            heroVideo.addEventListener(
              "loadedmetadata",
              showHeroVideoStartFrame,
              { once: true },
            );
          }
        }

        return () => {
          heroVideo?.removeEventListener(
            "loadedmetadata",
            showHeroVideoStartFrame,
          );
        };
      });

      media.add("(prefers-reduced-motion: no-preference)", () => {
        const playHeroVideo = () => {
          seekHeroVideoToLoopStart();
          heroVideo?.play().catch(() => {
            // Autoplay can be blocked; the poster remains as the fallback.
          });
        };
        const restartHeroVideo = () => {
          if (!heroVideo) {
            return;
          }

          heroVideo.currentTime = heroVideoLoopStart;
          playHeroVideo();
        };

        if (heroVideo) {
          heroVideo.addEventListener("ended", restartHeroVideo);

          if (heroVideo.readyState >= HTMLMediaElement.HAVE_METADATA) {
            playHeroVideo();
          } else {
            heroVideo.addEventListener("loadedmetadata", playHeroVideo, {
              once: true,
            });
          }
        }

        return () => {
          heroVideo?.removeEventListener("ended", restartHeroVideo);
          heroVideo?.removeEventListener("loadedmetadata", playHeroVideo);
          heroVideo?.pause();
        };
      });

      return () => media.revert();
    },
    { scope: rootRef },
  );

  // Section reveals. Each section marked `data-home-reveal` animates in once,
  // when it first enters the viewport. Targets already on screen at mount keep
  // their final state, and nothing is hidden in CSS, so the page reads normally
  // before this effect runs and without JavaScript.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const targets = Array.from(
      root.querySelectorAll<HTMLElement>("[data-home-reveal]"),
    ).filter((element) => element.getBoundingClientRect().top > window.innerHeight);

    if (targets.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) {
            continue;
          }

          observer.unobserve(entry.target);
          entry.target.animate(
            [
              { opacity: 0, transform: "translateY(18px)" },
              { opacity: 1, transform: "none" },
            ],
            {
              duration: 600,
              easing: "cubic-bezier(0.16, 1, 0.3, 1)",
              fill: "none",
            },
          );
        }
      },
      { threshold: 0 },
    );

    for (const element of targets) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rootRef} className="home-motion-root">
      {children}
    </div>
  );
}
