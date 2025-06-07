// RegExp
import { getTag } from "./type.ts";

export function isRegExp(payload: unknown): payload is RegExp {
  return getTag(payload) === "RegExp";
}
