import { isFunction } from "./function.ts";
import { isObject } from "./object.ts";
import { getTag } from "./type.ts";

// promise
export function isPromise(payload: unknown): payload is Promise<any> {
  return getTag(payload) === "Promise";
}

export function isPromiseLike(payload: unknown): payload is PromiseLike<any> {
  return (
    (isObject(payload) || isFunction(payload)) &&
    isFunction((payload as PromiseLike<any>).then)
  );
}
