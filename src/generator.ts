import { getType } from "./type.js";

// Generator

export function isGenerator(payload: unknown): payload is Generator {
  return getType(payload) === "Generator";
}

// AsyncGenerator

export function isAsyncGenerator(payload: unknown): payload is AsyncGenerator {
  return getType(payload) === "AsyncGenerator";
}
