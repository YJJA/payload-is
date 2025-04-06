import { isFunction } from "./function.ts";
import { isObject } from "./object.ts";
import { getType } from "./type.ts";

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
