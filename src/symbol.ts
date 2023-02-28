// symbol

import { isObject } from "./object";
import { getType } from "./utils";

export function isSymbol(payload: unknown): payload is symbol {
  return typeof payload === "symbol";
}

/**
 * wrapped Symbol values
 * Object((Symbol(10)))
 */

export function isSymbolObject(payload: unknown): payload is Symbol {
  return isObject(payload) && getType(payload) === "Symbol";
}
