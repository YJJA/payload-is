import { getType } from "./type.js";

// RegExp

export function isRegExp(payload: unknown): payload is RegExp {
  return getType(payload) === "RegExp";
}
