import { getType } from "./type.ts";

// RegExp

export function isRegExp(payload: unknown): payload is RegExp {
  return getType(payload) === "RegExp";
}
