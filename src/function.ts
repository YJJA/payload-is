import { getType } from "./type.js";
import type { AnyAsyncFunction, AnyFunction } from "./type.js";

// function

export function isFunction(payload: unknown): payload is AnyFunction {
  return typeof payload === "function";
}

export function isPlainFunction(payload: unknown): payload is AnyFunction {
  return getType(payload) === "Function";
}

export function isAsyncFunction(payload: unknown): payload is AnyAsyncFunction {
  return getType(payload) === "AsyncFunction";
}

export function isGeneratorFunction(
  payload: unknown
): payload is GeneratorFunction {
  return getType(payload) === "GeneratorFunction";
}

export function isAsyncGeneratorFunction(
  payload: unknown
): payload is AsyncGeneratorFunction {
  return getType(payload) === "AsyncGeneratorFunction";
}
