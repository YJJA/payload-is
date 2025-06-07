// string
import { getTag } from "./type.ts";

export function isString(payload: unknown): payload is string {
  return typeof payload === "string";
}

export function isEmptyString(payload: unknown): payload is string {
  return isString(payload) && payload === "";
}

export function isFullString(payload: unknown): payload is string {
  return isString(payload) && payload !== "";
}

export function isStringObject(payload: unknown): payload is String {
  return typeof payload === "object" && getTag(payload) === "String";
}

// isStringArray
export function isStringArray(payload: unknown): payload is string[] {
  return Array.isArray(payload) && payload.every((item) => isString(item));
}
