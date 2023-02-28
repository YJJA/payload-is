// array

import { getType } from "./utils.js";

export function isArray(payload: unknown): payload is unknown[] {
  return getType(payload) === "Array";
}

export function isEmptyArray(payload: any): payload is [] {
  return isArray(payload) && payload.length === 0;
}

export function isFullArray(payload: any): payload is unknown[] {
  return isArray(payload) && payload.length > 0;
}
