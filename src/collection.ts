// collection

import { getTag } from "./type.ts";

export function isSet(payload: unknown): payload is Set<any> {
  return getTag(payload) === "Set";
}

export function isWeakSet(payload: unknown): payload is WeakSet<any> {
  return getTag(payload) === "WeakSet";
}

export function isMap(payload: unknown): payload is Map<any, any> {
  return getTag(payload) === "Map";
}

export function isWeakMap(payload: unknown): payload is WeakMap<any, any> {
  return getTag(payload) === "WeakMap";
}

export function isWeakRef(payload: unknown): payload is WeakRef<any> {
  return getTag(payload) === "WeakRef";
}

// isMapArray
export function isMapEntries(
  payload: unknown,
): payload is [unknown, unknown][] {
  return (
    Array.isArray(payload) &&
    payload.every((item) => Array.isArray(item) && item.length === 2)
  );
}
