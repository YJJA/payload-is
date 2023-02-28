import { isFunction } from "./function.js";
import { isUndefined } from "./nil.js";
import { isObject } from "./object.js";

// Iterable

export function isIterable(payload: unknown): payload is Iterable<any> {
  return (
    typeof Symbol !== "undefined" &&
    !isUndefined(Symbol.iterator) &&
    (isObject(payload) || isFunction(payload)) &&
    isFunction((payload as Iterable<any>)[Symbol.iterator])
  );
}

// AsyncIterable

export function isAsyncIterable(
  payload: unknown
): payload is AsyncIterable<any> {
  return (
    typeof Symbol !== "undefined" &&
    !isUndefined(Symbol.asyncIterator) &&
    (isObject(payload) || isFunction(payload)) &&
    isFunction((payload as AsyncIterable<any>)[Symbol.asyncIterator])
  );
}
