type SecondarySectionNavMotionOptions = {
  navHeightProperty: string;
  root: HTMLElement;
  sectionNav: HTMLElement;
  tabLinkSelector: string;
  showCompactActions?: boolean;
};

export function setupSecondarySectionNavMotion({
  navHeightProperty,
  root,
  sectionNav,
  tabLinkSelector,
  showCompactActions = true,
}: SecondarySectionNavMotionOptions) {
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const sectionLinks = Array.from(
    sectionNav.querySelectorAll<HTMLAnchorElement>(tabLinkSelector),
  );
  const allSectionLinks = Array.from(
    sectionNav.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'),
  );
  const sectionTargets = sectionLinks
    .map((link) => {
      const target = document.getElementById(link.hash.slice(1));

      return target ? { link, target } : null;
    })
    .filter(
      (item): item is { link: HTMLAnchorElement; target: HTMLElement } =>
        Boolean(item),
    );

  let sectionNavHeight = sectionNav.offsetHeight;
  let stickyFrame = 0;
  let activeFrame = 0;
  let alignmentTimeout = 0;
  const temporarilyFocusableTargets = new Set<HTMLElement>();

  const readSectionNavTop = () => {
    const navStickyTop = Number.parseFloat(
      window.getComputedStyle(sectionNav).top,
    );

    return Number.isFinite(navStickyTop) ? navStickyTop : 0;
  };

  const syncSectionNavHeight = () => {
    sectionNavHeight = sectionNav.offsetHeight;
    root.style.setProperty(navHeightProperty, `${sectionNavHeight}px`);
  };

  const resizeObserver = new ResizeObserver(syncSectionNavHeight);
  resizeObserver.observe(sectionNav);
  syncSectionNavHeight();

  const updateStickyState = () => {
    stickyFrame = 0;

    const stickyTop = readSectionNavTop();
    const navRect = sectionNav.getBoundingClientRect();
    const isSectionNavPinned = navRect.top <= stickyTop + 1 && window.scrollY > 24;

    root.classList.toggle("is-section-nav-pinned", isSectionNavPinned);
    document.documentElement.classList.toggle(
      "is-secondary-section-nav-pinned",
      isSectionNavPinned,
    );
    root.classList.toggle(
      "is-sticky-actions-visible",
      showCompactActions && isSectionNavPinned,
    );
  };

  const requestStickyState = () => {
    if (stickyFrame !== 0) {
      return;
    }

    stickyFrame = window.requestAnimationFrame(updateStickyState);
  };

  const updateActiveSection = () => {
    activeFrame = 0;

    if (sectionTargets.length === 0) {
      return;
    }

    const readLine = readSectionNavTop() + sectionNavHeight + 24;
    let active = sectionTargets[0];

    sectionTargets.forEach((item) => {
      if (item.target.getBoundingClientRect().top <= readLine) {
        active = item;
      }
    });
    allSectionLinks.forEach((link) => {
      const isActive = link.hash === active?.link.hash;

      link.classList.toggle("is-active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "location");
      } else if (link.getAttribute("aria-current") === "location") {
        link.removeAttribute("aria-current");
      }
    });
  };

  const requestActiveSection = () => {
    if (activeFrame !== 0) {
      return;
    }

    activeFrame = window.requestAnimationFrame(updateActiveSection);
  };

  const focusSectionTarget = (target: HTMLElement) => {
    const hadTabIndex = target.hasAttribute("tabindex");

    if (!hadTabIndex) {
      target.setAttribute("tabindex", "-1");
      temporarilyFocusableTargets.add(target);
    }

    target.focus({ preventScroll: true });

    if (!hadTabIndex) {
      target.addEventListener(
        "blur",
        () => {
          target.removeAttribute("tabindex");
          temporarilyFocusableTargets.delete(target);
        },
        { once: true },
      );
    }
  };

  const scheduleTargetAlignment = (
    target: HTMLElement,
    behavior: ScrollBehavior,
    shouldFocusTarget = false,
  ) => {
    if (alignmentTimeout !== 0) {
      window.clearTimeout(alignmentTimeout);
    }

    // Let sticky-nav transitions and content-visibility rows settle before
    // applying the exact offset for the final pinned layout.
    alignmentTimeout = window.setTimeout(() => {
      alignmentTimeout = 0;
      updateStickyState();
      syncSectionNavHeight();

      const targetTop =
        window.scrollY +
        target.getBoundingClientRect().top -
        readSectionNavTop() -
        sectionNavHeight -
        10;

      window.scrollTo({
        top: Math.max(0, targetTop),
        behavior,
      });
      if (shouldFocusTarget) {
        focusSectionTarget(target);
      }
      requestActiveSection();
    }, 220);
  };

  const handleSectionLinkClick = (event: MouseEvent) => {
    const link = event.currentTarget as HTMLAnchorElement;
    const target = document.getElementById(link.hash.slice(1));

    if (!target) {
      return;
    }

    scheduleTargetAlignment(
      target,
      reduceMotion ? "auto" : "smooth",
      true,
    );
  };

  allSectionLinks.forEach((link) => {
    link.addEventListener("click", handleSectionLinkClick);
  });

  updateStickyState();
  updateActiveSection();

  const initialTarget = sectionTargets.find(
    ({ link }) => link.hash === window.location.hash,
  )?.target;
  if (initialTarget) {
    initialTarget.scrollIntoView({ behavior: "auto", block: "start" });
    scheduleTargetAlignment(initialTarget, "auto");
  }

  window.addEventListener("scroll", requestStickyState, { passive: true });
  window.addEventListener("scroll", requestActiveSection, { passive: true });
  window.addEventListener("resize", requestStickyState);
  window.addEventListener("resize", requestActiveSection);

  return () => {
    resizeObserver.disconnect();

    if (stickyFrame !== 0) {
      window.cancelAnimationFrame(stickyFrame);
    }
    if (activeFrame !== 0) {
      window.cancelAnimationFrame(activeFrame);
    }
    if (alignmentTimeout !== 0) {
      window.clearTimeout(alignmentTimeout);
    }

    window.removeEventListener("scroll", requestStickyState);
    window.removeEventListener("scroll", requestActiveSection);
    window.removeEventListener("resize", requestStickyState);
    window.removeEventListener("resize", requestActiveSection);
    allSectionLinks.forEach((link) => {
      link.removeEventListener("click", handleSectionLinkClick);
      link.classList.remove("is-active");
      if (link.getAttribute("aria-current") === "location") {
        link.removeAttribute("aria-current");
      }
    });
    temporarilyFocusableTargets.forEach((target) => {
      target.removeAttribute("tabindex");
    });
    temporarilyFocusableTargets.clear();
    root.style.removeProperty(navHeightProperty);
    root.classList.remove("is-section-nav-pinned", "is-sticky-actions-visible");
    document.documentElement.classList.remove("is-secondary-section-nav-pinned");
  };
}
