// boolean

export function isBoolean(payload: unknown): payload is boolean {
  return typeof payload === "boolean";
}

export function isTrue(payload: unknown): payload is boolean {
  return payload === true;
}

export function isFalse(payload: unknown): payload is boolean {
  return payload === false;
}

export function isBooleanObject(payload: unknown): payload is Boolean {
  return payload instanceof Boolean;
}
