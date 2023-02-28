import { getType } from "./utils.js";

// RegExp

export function isRegExp(payload: unknown): payload is RegExp {
  return getType(payload) === "RegExp";
}
