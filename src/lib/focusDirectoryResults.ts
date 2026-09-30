/** Keep the keyboard reading position with the newly displayed results. */
export function focusDirectoryResults(targetId: string) {
  const region = document.getElementById(targetId);
  if (!region) return;

  const target = region.querySelector<HTMLElement>("h2, h3") ?? region;
  if (!target.hasAttribute("tabindex")) target.tabIndex = -1;
  target.focus({ preventScroll: true });
  region.scrollIntoView({ block: "start", behavior: "instant" });

  // Match the secondary navigation's settling window after sticky transitions
  // and content-visibility rows change the available scroll offset.
  window.setTimeout(() => {
    if (target.isConnected && document.activeElement === target) {
      region.scrollIntoView({ block: "start", behavior: "instant" });
    }
  }, 220);
}
