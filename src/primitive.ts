// primitive

export function isPrimitive(
  payload: unknown
): payload is string | number | bigint | boolean | symbol | undefined | null {
  const result = typeof payload;
  return payload === null || (result !== "object" && result !== "function");
}
