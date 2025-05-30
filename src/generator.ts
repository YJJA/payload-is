import { getTag } from "./type.ts";

// Generator

export function isGenerator(payload: unknown): payload is Generator {
  return getTag(payload) === "Generator";
}

// AsyncGenerator

export function isAsyncGenerator(payload: unknown): payload is AsyncGenerator {
  return getTag(payload) === "AsyncGenerator";
}
