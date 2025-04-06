// array

import { getType } from "./type.ts";

export function isArray(payload: unknown): payload is unknown[] {
  return getType(payload) === "Array";
}

export function isEmptyArray(payload: unknown): payload is [] {
  return isArray(payload) && payload.length === 0;
}

export function isFullArray(payload: unknown): payload is unknown[] {
  return isArray(payload) && payload.length > 0;
}
