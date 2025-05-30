import { isFunction } from "./function.ts";
import { isUndefined } from "./nil.ts";
import { isObject } from "./object.ts";

// iterator
export function isIterator(payload: unknown): payload is Iterator<any> {
  return (
    (typeof Iterator !== "undefined" && payload instanceof Iterator) ||
    (typeof Symbol !== "undefined" &&
      !isUndefined(Symbol.iterator) &&
      isObject(payload) &&
      isFunction((payload as IteratorObject<any>)[Symbol.iterator]) &&
      (payload as IteratorObject<any>)[Symbol.iterator]() === payload)
  );
}

// AsyncIterator
export function isAsyncIterator(
  payload: unknown
): payload is AsyncIterator<any> {
  return (
    typeof Symbol !== "undefined" &&
    !isUndefined(Symbol.asyncIterator) &&
    isObject(payload) &&
    isFunction((payload as AsyncIteratorObject<any>)[Symbol.asyncIterator]) &&
    (payload as AsyncIteratorObject<any>)[Symbol.asyncIterator]() === payload
  );
}
