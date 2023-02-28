import { isFunction } from "./function.js";
import { isObject } from "./object.js";
import { getType } from "./utils.js";

// promise
export function isPromise(payload: unknown): payload is Promise<any> {
  return getType(payload) === "Promise";
}

export function isPromiseLike(payload: unknown): payload is PromiseLike<any> {
  return (
    (isObject(payload) || isFunction(payload)) &&
    isFunction((payload as PromiseLike<any>).then)
  );
}
