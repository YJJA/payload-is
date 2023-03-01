import { getType } from "./type.js";

// date

export function isDate(payload: unknown): payload is Date {
  return getType(payload) === "Date";
}

export function isValidDate(payload: unknown): payload is Date {
  return isDate(payload) && !isNaN(payload.getTime());
}

export function isInvalidDate(payload: unknown): payload is Date {
  return isDate(payload) && isNaN(payload.getTime());
}
