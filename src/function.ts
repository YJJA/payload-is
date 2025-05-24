import {
  AsyncFunction,
  AsyncGeneratorFunction,
  GeneratorFunction,
  getType,
} from "./type.ts";
import type { AnyAsyncFunction, AnyFunction } from "./type.ts";

// function

export function isFunction(payload: unknown): payload is AnyFunction {
  return typeof payload === "function";
}

export function isPlainFunction(payload: unknown): payload is AnyFunction {
  return isFunction(payload) && getType(payload) === "Function";
}

export function isAsyncFunction(payload: unknown): payload is AnyAsyncFunction {
  return payload instanceof AsyncFunction;
}

export function isGeneratorFunction(
  payload: unknown
): payload is GeneratorFunction {
  return payload instanceof GeneratorFunction;
}

export function isAsyncGeneratorFunction(
  payload: unknown
): payload is AsyncGeneratorFunction {
  return payload instanceof AsyncGeneratorFunction;
}
