export const caseStudyCollectionId = "customer-case-studies";

export function getCaseStudyNavigation(localeSegment?: string) {
  if (localeSegment && localeSegment !== "zh") return null;
  return {
    href: "/case-studies" as const,
    label: localeSegment === "zh" ? "客户案例" : "Customer Case Studies",
    resourcesLabel: localeSegment === "zh" ? "资料" : "Resources",
    description: localeSegment === "zh"
      ? "了解客户遇到的问题、采用的材料，以及项目验证和后续应用。"
      : "Explore customer challenges, material choices, project validation and production outcomes.",
  };
}

export function isCaseStudyPath(pathname: string) {
  return pathname === "/case-studies" || pathname.startsWith("/case-studies/");
}
