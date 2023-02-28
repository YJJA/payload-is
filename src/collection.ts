import { getType } from "./utils.js";

// collection

export function isSet(payload: unknown): payload is Set<any> {
  return getType(payload) === "Set";
}

export function isWeakSet(payload: unknown): payload is WeakSet<any> {
  return getType(payload) === "WeakSet";
}

export function isMap(payload: unknown): payload is Map<any, any> {
  return getType(payload) === "Map";
}

export function isWeakMap(payload: unknown): payload is WeakMap<any, any> {
  return getType(payload) === "WeakMap";
}

export function isWeakRef(payload: unknown): payload is WeakRef<any> {
  return getType(payload) === "WeakRef";
}
