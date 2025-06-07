// date
import { getTag } from "./type.ts";

export function isDate(payload: unknown): payload is Date {
  return getTag(payload) === "Date";
}

export function isValidDate(payload: unknown): payload is Date {
  return isDate(payload) && !isNaN(payload.getTime());
}

export function isInvalidDate(payload: unknown): payload is Date {
  return isDate(payload) && isNaN(payload.getTime());
}
