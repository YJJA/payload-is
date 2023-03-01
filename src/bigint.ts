// BigInt

import { isObject } from "./object.js";
import { getType } from "./type.js";

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
