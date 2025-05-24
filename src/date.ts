// date

export function isDate(payload: unknown): payload is Date {
  return payload instanceof Date;
}

export function isValidDate(payload: unknown): payload is Date {
  return isDate(payload) && !isNaN(payload.getTime());
}

export function isInvalidDate(payload: unknown): payload is Date {
  return isDate(payload) && isNaN(payload.getTime());
}
