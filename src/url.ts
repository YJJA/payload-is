import { getTag } from "./type.ts";

// URL
export function isURL(payload: unknown): payload is URL {
  return getTag(payload) === "URL";
}

// URLSearchParams
export function isURLSearchParams(
  payload: unknown,
): payload is URLSearchParams {
  return getTag(payload) === "URLSearchParams";
}
