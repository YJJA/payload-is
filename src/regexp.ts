// RegExp

export function isRegExp(payload: unknown): payload is RegExp {
  return payload instanceof RegExp;
}
