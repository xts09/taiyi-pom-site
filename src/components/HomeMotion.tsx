"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

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

        ScrollTrigger.refresh();
        ScrollTrigger.update();

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

  return (
    <div ref={rootRef} className="home-motion-root">
      {children}
    </div>
  );
}
