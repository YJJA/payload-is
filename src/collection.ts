// collection

export function isSet(payload: unknown): payload is Set<any> {
  return payload instanceof Set;
}

export function isWeakSet(payload: unknown): payload is WeakSet<any> {
  return payload instanceof WeakSet;
}

export function isMap(payload: unknown): payload is Map<any, any> {
  return payload instanceof Map;
}

export function isWeakMap(payload: unknown): payload is WeakMap<any, any> {
  return payload instanceof WeakMap;
}

export function isWeakRef(payload: unknown): payload is WeakRef<any> {
  return payload instanceof WeakRef;
}
