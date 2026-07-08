"use client";

import {
  useEffect,
  useRef,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AnimationDirection = "horizontal" | "vertical";

type AnimatedContentProps = HTMLAttributes<HTMLDivElement> & {
  animateOpacity?: boolean;
  children: ReactNode;
  container?: string | HTMLElement | null;
  delay?: number;
  disappearAfter?: number;
  disappearDuration?: number;
  disappearEase?: string;
  distance?: number;
  direction?: AnimationDirection;
  duration?: number;
  ease?: string;
  initialOpacity?: number;
  onComplete?: () => void;
  onDisappearanceComplete?: () => void;
  reverse?: boolean;
  scale?: number;
  threshold?: number;
};

export default function AnimatedContent({
  animateOpacity = true,
  children,
  className = "",
  container,
  delay = 0,
  disappearAfter = 0,
  disappearDuration = 0.5,
  disappearEase = "power3.in",
  distance = 100,
  direction = "vertical",
  duration = 0.8,
  ease = "power3.out",
  initialOpacity = 0,
  onComplete,
  onDisappearanceComplete,
  reverse = false,
  scale = 1,
  style,
  threshold = 0.1,
  ...props
}: AnimatedContentProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    let scrollerTarget: string | HTMLElement | null =
      container ?? document.getElementById("snap-main-container") ?? null;

    if (typeof scrollerTarget === "string") {
      scrollerTarget = document.querySelector<HTMLElement>(scrollerTarget);
    }

    const axis = direction === "horizontal" ? "x" : "y";
    const offset = reverse ? -distance : distance;
    const startPct = (1 - threshold) * 100;

    gsap.set(element, {
      [axis]: offset,
      opacity: animateOpacity ? initialOpacity : 1,
      scale,
      visibility: "visible",
    });

    const timeline = gsap.timeline({
      delay,
      onComplete: () => {
        onComplete?.();

        if (disappearAfter > 0) {
          gsap.to(element, {
            [axis]: reverse ? distance : -distance,
            delay: disappearAfter,
            duration: disappearDuration,
            ease: disappearEase,
            onComplete: () => onDisappearanceComplete?.(),
            opacity: animateOpacity ? initialOpacity : 0,
            scale: 0.8,
          });
        }
      },
      paused: true,
    });

    timeline.to(element, {
      [axis]: 0,
      duration,
      ease,
      opacity: 1,
      scale: 1,
    });

    const scrollTrigger = ScrollTrigger.create({
      onEnter: () => timeline.play(),
      once: true,
      scroller: scrollerTarget,
      start: `top ${startPct}%`,
      trigger: element,
    });

    return () => {
      scrollTrigger.kill();
      timeline.kill();
    };
  }, [
    animateOpacity,
    container,
    delay,
    disappearAfter,
    disappearDuration,
    disappearEase,
    direction,
    distance,
    duration,
    ease,
    initialOpacity,
    onComplete,
    onDisappearanceComplete,
    reverse,
    scale,
    threshold,
  ]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ ...style, visibility: "hidden" }}
      {...props}
    >
      {children}
    </div>
  );
}
