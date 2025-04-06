// BigInt

import { isObject } from "./object.ts";
import { getType } from "./type.ts";

export function isBigInt(payload: unknown): payload is bigint {
  return typeof payload === "bigint";
}

/**
 * wrapped BigInt values
 * Object((BigInt(10)))
 */

export function isBigIntObject(payload: unknown): payload is BigInt {
  return isObject(payload) && getType(payload) === "BigInt";
}
