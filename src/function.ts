import { getTag } from "./type.ts";
import type { AnyAsyncFunction, AnyFunction } from "./type.ts";

// function
export function isFunction(payload: unknown): payload is AnyFunction {
  return typeof payload === "function";
}

// AsyncFunction
export function isAsyncFunction(payload: unknown): payload is AnyAsyncFunction {
  return getTag(payload) === "AsyncFunction";
}

// GeneratorFunction
export function isGeneratorFunction(
  payload: unknown,
): payload is GeneratorFunction {
  return getTag(payload) === "GeneratorFunction";
}

// AsyncGeneratorFunction
export function isAsyncGeneratorFunction(
  payload: unknown,
): payload is AsyncGeneratorFunction {
  return getTag(payload) === "AsyncGeneratorFunction";
}
