// nil

export function isUndefined(payload: unknown): payload is undefined {
  return typeof payload === "undefined";
}

export function isNull(payload: unknown): payload is null {
  return payload === null;
}

export function isNil(payload: unknown): payload is null | undefined {
  return isUndefined(payload) || isNull(payload);
}
