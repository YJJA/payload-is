// object

import type { PlainObject } from "./type";

export function isObject(payload: unknown): payload is object {
  return typeof payload === "object" && payload !== null;
}

export function isPlainObject(payload: unknown): payload is PlainObject {
  if (!isObject(payload)) {
    return false;
  }

  const _ctor = payload.constructor;
  const _proto = Object.getPrototypeOf(payload);

  return (
    (_ctor === undefined && _proto === null) ||
    (_ctor === Object && _proto === Object.prototype)
  );
}

export function isEmptyObject(
  payload: unknown
): payload is { [K in any]: never } {
  return isPlainObject(payload) && Object.keys(payload).length === 0;
}

export function isFullObject(payload: any): payload is PlainObject {
  return isPlainObject(payload) && Object.keys(payload).length > 0;
}
