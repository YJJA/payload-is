// array

export function isArray(payload: unknown): payload is unknown[] {
  return Array.isArray(payload);
}

export function isEmptyArray(payload: unknown): payload is [] {
  return isArray(payload) && payload.length === 0;
}

export function isFullArray(payload: unknown): payload is unknown[] {
  return isArray(payload) && payload.length > 0;
}
