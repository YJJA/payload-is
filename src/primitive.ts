// primitive
import type { PrimitiveType } from "./type.ts";

export function isPrimitive(payload: unknown): payload is PrimitiveType {
  const result = typeof payload;
  return payload === null || (result !== "object" && result !== "function");
}
