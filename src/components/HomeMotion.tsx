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

    const candidates = Array.from(
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

    // Several sections reuse intro classes on a parent and its children.
    // Animate the specific content blocks once, without stacked fades/movement.
    const targets = candidates.filter(
      (element) => !candidates.some((other) => other !== element && element.contains(other)),
    );

    if (targets.length === 0) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const activeAnimations = new Set<Animation>();
    const pending = new Map<HTMLElement, Animation>();
    let frame = 0;

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

    // Prepare only offscreen content, before the user can see it. Starting a
    // fade from zero at the trigger point would hide already-visible content.
    if (!reducedMotion.matches) {
      for (const element of targets) {
        if (element.getBoundingClientRect().top < window.innerHeight) continue;
        const animation = element.animate(
          [
            { opacity: 0, transform: "translateY(18px)" },
            { opacity: 1, transform: "none" },
          ],
          {
            duration: 750,
            delay: staggerDelay(element),
            easing: "cubic-bezier(0.22, 1, 0.36, 1)",
            fill: "backwards",
          },
        );
        animation.pause();
        animation.currentTime = 0;
        pending.set(element, animation);
        activeAnimations.add(animation);
        animation.addEventListener("finish", () => activeAnimations.delete(animation), {
          once: true,
        });
        animation.addEventListener("cancel", () => activeAnimations.delete(animation), {
          once: true,
        });
      }
    }

    const revealUpcoming = () => {
      frame = 0;
      const triggerLine = window.innerHeight * 0.85;
      // Read positions together, then start animations. Checking all remaining
      // targets also handles anchor jumps that skip an observer's intersection.
      const positions = Array.from(pending, ([element, animation]) => ({
        element,
        animation,
        top: element.getBoundingClientRect().top,
      }));
      for (const { element, animation, top } of positions) {
        if (top > triggerLine) continue;
        pending.delete(element);
        if (top < 0) animation.cancel();
        else animation.play();
      }
    };

    const scheduleReveal = () => {
      if (!frame && pending.size) frame = requestAnimationFrame(revealUpcoming);
    };
    const showAll = () => {
      if (!reducedMotion.matches) return;
      pending.clear();
      activeAnimations.forEach((animation) => animation.cancel());
    };
    const showFocused = (event: FocusEvent) => {
      if (!(event.target instanceof Node)) return;
      for (const element of targets) {
        if (!element.contains(event.target)) continue;
        pending.delete(element);
        element.getAnimations().forEach((animation) => {
          if (activeAnimations.has(animation)) animation.cancel();
        });
      }
    };

    window.addEventListener("scroll", scheduleReveal, { passive: true });
    window.addEventListener("resize", scheduleReveal);
    root.addEventListener("focusin", showFocused);
    reducedMotion.addEventListener("change", showAll);
    scheduleReveal();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleReveal);
      window.removeEventListener("resize", scheduleReveal);
      root.removeEventListener("focusin", showFocused);
      reducedMotion.removeEventListener("change", showAll);
      activeAnimations.forEach((animation) => animation.cancel());
    };
  }, []);

  return (
    <div ref={rootRef} className="home-motion-root">
      {children}
    </div>
  );
}
