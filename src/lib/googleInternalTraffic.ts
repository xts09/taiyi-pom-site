export const GOOGLE_INTERNAL_TRAFFIC_STORAGE_KEY =
  "taiyi_google_internal_traffic";

export const GOOGLE_INTERNAL_TRAFFIC_QUERY_PARAMETER = "ga_internal";

export const GOOGLE_INTERNAL_TRAFFIC_DISABLED_VALUE = "disabled";

export function resolveGoogleInternalTrafficDisabled(
  queryValue: string | null,
  storedValue: string | null,
) {
  if (queryValue === "1") {
    return true;
  }

  if (queryValue === "0") {
    return false;
  }

  return storedValue === GOOGLE_INTERNAL_TRAFFIC_DISABLED_VALUE;
}
