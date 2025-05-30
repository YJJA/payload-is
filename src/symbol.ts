// symbol

import { getTag } from "./type.ts";

export function isSymbol(payload: unknown): payload is symbol {
  return typeof payload === "symbol";
}

// wrapper
export function isSymbolObject(payload: unknown): payload is Symbol {
  return typeof payload === "object" && getTag(payload) === "Symbol";
}
