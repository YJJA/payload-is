import { isNumber } from "./number.ts";
import { isString } from "./string.ts";
import { isSymbol } from "./symbol.ts";

// isPropertyKey
export function isPropertyKey(payload: unknown): payload is PropertyKey {
  return isString(payload) || isNumber(payload) || isSymbol(payload);
}

// enumerableKeys
export function enumerableKeys(value: object): (string | symbol)[] {
  return Reflect.ownKeys(value).filter((key) => {
    const desc = Object.getOwnPropertyDescriptor(value, key);
    return desc && desc.enumerable;
  });
}
