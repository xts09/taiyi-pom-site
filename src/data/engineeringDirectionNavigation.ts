import { findEngineeringGfLandingByDirection } from "./engineeringGfLandingRegistry.ts";
import { isReleaseSurfaceEnabledForPath } from "../i18n/releaseManifest.ts";

const gradeDirectoryFallback = "#pom-grades";

export function getEngineeringDirectionHref(family: string, direction: string) {
  const candidate = findEngineeringGfLandingByDirection(family, direction);

  return candidate &&
    isReleaseSurfaceEnabledForPath(candidate.path, "publicNavigation")
    ? candidate.path
    : gradeDirectoryFallback;
}
