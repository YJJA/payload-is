// string

export function isString(payload: unknown): payload is string {
  return typeof payload === "string";
}

export function isEmptyString(payload: unknown): payload is string {
  return isString(payload) && payload === "";
}

export function isFullString(payload: unknown): payload is string {
  return isString(payload) && payload !== "";
}

export function isStringObject(payload: unknown): payload is String {
  return payload instanceof String;
}
