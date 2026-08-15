export const selectionWorkspaceContactSource =
  "POM grade cross-reference workspace";

const storageKey = "taiyi-contact-requirement:v1";
const maxRequirementLength = 160;

export const normalizeContactRequirement = (value: string) =>
  value
    .replace(/[\u0000-\u001f\u007f]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxRequirementLength);

export const storeContactRequirement = (value: string) => {
  if (typeof window === "undefined") return false;

  try {
    const normalized = normalizeContactRequirement(value);

    if (normalized) {
      window.sessionStorage.setItem(storageKey, normalized);
    } else {
      window.sessionStorage.removeItem(storageKey);
    }

    return true;
  } catch {
    return false;
  }
};

export const readContactRequirement = () => {
  if (typeof window === "undefined") return "";

  try {
    return normalizeContactRequirement(
      window.sessionStorage.getItem(storageKey) ?? "",
    );
  } catch {
    return "";
  }
};

export const clearContactRequirement = () => {
  if (typeof window === "undefined") return;

  try {
    window.sessionStorage.removeItem(storageKey);
  } catch {
    // Storage can be unavailable in restricted browsing modes.
  }
};
