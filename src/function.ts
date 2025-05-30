import {
  AsyncFunction,
  AsyncGeneratorFunction,
  GeneratorFunction,
  getTag,
} from "./type.ts";
import type { AnyAsyncFunction, AnyFunction } from "./type.ts";

// function
export function isFunction(payload: unknown): payload is AnyFunction {
  return typeof payload === "function";
}

// AsyncFunction
export function isAsyncFunction(payload: unknown): payload is AnyAsyncFunction {
  return (
    payload instanceof AsyncFunction || getTag(payload) === "AsyncFunction"
  );
}

// GeneratorFunction
export function isGeneratorFunction(
  payload: unknown
): payload is GeneratorFunction {
  return (
    payload instanceof GeneratorFunction ||
    getTag(payload) === "GeneratorFunction"
  );
}

// AsyncGeneratorFunction
export function isAsyncGeneratorFunction(
  payload: unknown
): payload is AsyncGeneratorFunction {
  return (
    payload instanceof AsyncGeneratorFunction ||
    getTag(payload) === "AsyncGeneratorFunction"
  );
}
