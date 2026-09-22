"use client";

import { useEffect, useRef, type ReactNode } from "react";

const HERO_VIDEO_CROSSFADE_MS = 1200;

type HomeMotionProps = {
  children: ReactNode;
};

export function HomeMotion({ children }: HomeMotionProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) {
      return;
    }

    const heroVideos = Array.from(
      root.querySelectorAll<HTMLVideoElement>("[data-hero-video]"),
    );
    if (heroVideos.length < 2) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const loopStart = Number(heroVideos[0]?.dataset.loopStart ?? "0");
    const crossfadeSeconds = HERO_VIDEO_CROSSFADE_MS / 1000;
    let activeIndex = 0;
    let crossfading = false;
    let crossfadeTimer: ReturnType<typeof setTimeout> | undefined;
    let activationFrame: number | undefined;

    const seekToLoopStart = (video: HTMLVideoElement) => {
      if (Number.isFinite(video.duration)) {
        video.currentTime = Math.min(
          loopStart,
          Math.max(0, video.duration - 0.05),
        );
      }
    };

    const clearPendingTransition = () => {
      if (crossfadeTimer) {
        clearTimeout(crossfadeTimer);
        crossfadeTimer = undefined;
      }
      if (activationFrame) {
        cancelAnimationFrame(activationFrame);
        activationFrame = undefined;
      }
      crossfading = false;
    };

    const showStaticStartFrame = () => {
      clearPendingTransition();
      activeIndex = 0;
      heroVideos.forEach((video, index) => {
        video.pause();
        video.classList.toggle("is-active", index === activeIndex);
        if (video.readyState >= HTMLMediaElement.HAVE_METADATA) {
          seekToLoopStart(video);
        }
      });
    };

    const beginCrossfade = () => {
      if (crossfading || reducedMotion.matches) {
        return;
      }

      const outgoing = heroVideos[activeIndex];
      const incomingIndex = (activeIndex + 1) % heroVideos.length;
      const incoming = heroVideos[incomingIndex];
      if (
        !outgoing ||
        !incoming ||
        incoming.readyState < HTMLMediaElement.HAVE_METADATA
      ) {
        return;
      }

      crossfading = true;
      seekToLoopStart(incoming);
      incoming
        .play()
        .then(() => {
          activationFrame = requestAnimationFrame(() => {
            incoming.classList.add("is-active");
            outgoing.classList.remove("is-active");
          });

          crossfadeTimer = setTimeout(() => {
            outgoing.pause();
            seekToLoopStart(outgoing);
            activeIndex = incomingIndex;
            crossfading = false;
            crossfadeTimer = undefined;
          }, HERO_VIDEO_CROSSFADE_MS);
        })
        .catch(() => {
          crossfading = false;
          // Autoplay can be blocked; the visible video or poster remains.
        });
    };

    const monitorLoopPoint = (event: Event) => {
      const activeVideo = heroVideos[activeIndex];
      if (
        event.currentTarget !== activeVideo ||
        !Number.isFinite(activeVideo?.duration)
      ) {
        return;
      }

      if (activeVideo.duration - activeVideo.currentTime <= crossfadeSeconds) {
        beginCrossfade();
      }
    };

    const playFromLoopStart = () => {
      if (reducedMotion.matches) {
        showStaticStartFrame();
        return;
      }

      clearPendingTransition();
      activeIndex = 0;
      heroVideos.forEach((video, index) => {
        video.pause();
        video.classList.toggle("is-active", index === activeIndex);
        if (video.readyState >= HTMLMediaElement.HAVE_METADATA) {
          seekToLoopStart(video);
        }
      });

      const activeVideo = heroVideos[activeIndex];
      const play = () => {
        seekToLoopStart(activeVideo);
        activeVideo.play().catch(() => {
          // Autoplay can be blocked; the poster remains as the fallback.
        });
      };

      if (activeVideo.readyState >= HTMLMediaElement.HAVE_METADATA) {
        play();
      } else {
        activeVideo.addEventListener("loadedmetadata", play, { once: true });
      }
    };

    heroVideos.forEach((video) => {
      video.addEventListener("timeupdate", monitorLoopPoint);
      video.addEventListener("ended", beginCrossfade);
    });
    reducedMotion.addEventListener("change", playFromLoopStart);
    playFromLoopStart();

    return () => {
      clearPendingTransition();
      reducedMotion.removeEventListener("change", playFromLoopStart);
      heroVideos.forEach((video) => {
        video.removeEventListener("timeupdate", monitorLoopPoint);
        video.removeEventListener("ended", beginCrossfade);
        video.pause();
      });
    };
  }, []);

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
