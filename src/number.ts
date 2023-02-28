// number

export function isNumber(payload: unknown): payload is number {
  return typeof payload === "number";
}

export function isValidNumber(payload: unknown): payload is number {
  return isNumber(payload) && !isNaN(payload);
}

export function isInvalidNumber(payload: unknown): payload is number {
  return isNumber(payload) && isNaN(payload);
}

export function isNumberObject(payload: unknown): payload is Number {
  return payload instanceof Number;
}
