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

  // Reveal the content, not the section's empty top padding. Nothing is hidden
  // in CSS, so content remains readable before hydration and without JS.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) {
      return;
    }

    const targets = Array.from(
      root.querySelectorAll<HTMLElement>(
        [
          "[data-home-reveal] .home-products-intro",
          "[data-home-reveal] .home-material-family-nav",
          "[data-home-reveal] .home-material-visual",
          "[data-home-reveal] .home-material-active-content",
          "[data-home-reveal] .home-task-intro",
          "[data-home-reveal] .home-application-card",
          "[data-home-reveal] .home-collaboration-intro",
          "[data-home-reveal] .home-collaboration-principles",
          "[data-home-reveal] .home-collaboration-action-wrap",
          "[data-home-reveal] .home-proof-intro-copy",
          "[data-home-reveal] .home-proof-factory-figure",
          "[data-home-reveal] .home-proof-metrics > *",
          "[data-home-reveal] .home-proof-detail",
          "[data-home-reveal] .home-proof-certificates",
          "[data-home-reveal] .home-inquiry-copy",
          "[data-home-reveal] .home-inquiry-panel",
        ].join(", "),
      ),
    );

    if (targets.length === 0) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const activeAnimations = new Set<Animation>();
    const completed = new WeakSet<HTMLElement>();
    const revealLine = window.innerHeight - Math.min(180, window.innerHeight * 0.18);

    const staggerDelay = (element: HTMLElement) => {
      if (!element.matches(".home-application-card, .home-proof-metrics > *")) {
        return 0;
      }

      const siblings = Array.from(element.parentElement?.children ?? []);
      const rowTop = element.offsetTop;
      const position = siblings
        .slice(0, siblings.indexOf(element))
        .filter((sibling) => (sibling as HTMLElement).offsetTop === rowTop).length;
      return Math.min(position, 2) * 70;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) {
            continue;
          }

          observer.unobserve(entry.target);
          const element = entry.target as HTMLElement;
          completed.add(element);
          if (reducedMotion.matches) {
            continue;
          }

          const animation = element.animate(
            [
              { opacity: 0, transform: "translateY(18px)" },
              { opacity: 1, transform: "none" },
            ],
            {
              duration: 600,
              delay: staggerDelay(element),
              easing: "cubic-bezier(0.16, 1, 0.3, 1)",
              fill: "backwards",
            },
          );
          activeAnimations.add(animation);
          animation.addEventListener("finish", () => activeAnimations.delete(animation), {
            once: true,
          });
          animation.addEventListener("cancel", () => activeAnimations.delete(animation), {
            once: true,
          });
        }
      },
      { rootMargin: `0px 0px -${Math.round(window.innerHeight - revealLine)}px 0px` },
    );

    const observeUpcoming = () => {
      observer.disconnect();
      if (reducedMotion.matches) {
        activeAnimations.forEach((animation) => animation.cancel());
        return;
      }

      for (const element of targets) {
        if (completed.has(element)) {
          continue;
        }
        if (element.getBoundingClientRect().top <= revealLine) {
          completed.add(element);
        } else {
          observer.observe(element);
        }
      }
    };

    reducedMotion.addEventListener("change", observeUpcoming);
    observeUpcoming();

    return () => {
      observer.disconnect();
      reducedMotion.removeEventListener("change", observeUpcoming);
      activeAnimations.forEach((animation) => animation.cancel());
    };
  }, []);

  return (
    <div ref={rootRef} className="home-motion-root">
      {children}
    </div>
  );
}
