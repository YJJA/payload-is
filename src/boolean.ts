// boolean
import { getTag } from "./type.ts";

export function isBoolean(payload: unknown): payload is boolean {
  return typeof payload === "boolean";
}

export function isTrue(payload: unknown): payload is true {
  return payload === true;
}

export function isFalse(payload: unknown): payload is false {
  return payload === false;
}

export function isBooleanObject(payload: unknown): payload is Boolean {
  return typeof payload === "object" && getTag(payload) === "Boolean";
}
