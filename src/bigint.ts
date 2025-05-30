// BigInt

import { getTag } from "./type.ts";

export function isBigInt(payload: unknown): payload is bigint {
  return typeof payload === "bigint";
}

// wrapper for BigInt
export function isBigIntObject(payload: unknown): payload is BigInt {
  return typeof payload === "object" && getTag(payload) === "BigInt";
}

// isBigIntArray
export function isBigIntArray(payload: unknown): payload is bigint[] {
  return Array.isArray(payload) && payload.every((item) => isBigInt(item));
}
