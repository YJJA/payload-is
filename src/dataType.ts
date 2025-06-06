import { getTag } from "./type.ts";
import type { DataTypeResult } from "./type.ts";

// Function
const FunctionTag = [
  "Function",
  "AsyncFunction",
  "GeneratorFunction",
  "AsyncGeneratorFunction",
] as const;
type FunctionTag = (typeof FunctionTag)[number];
function toFunctionTag(data: Function): FunctionTag {
  const tag = getTag(data);
  return FunctionTag.includes(tag as FunctionTag)
    ? (tag as FunctionTag)
    : "Function";
}

// object
const ObjectTag = [
  // iterator
  "Segmenter String Iterator",
  "RegExp String Iterator",
  "String Iterator",
  "Array Iterator",
  "Map Iterator",
  "Set Iterator",
  "Generator",
  "Iterator",
  "AsyncGenerator",
  "AsyncIterator",
  // buffer
  "ArrayBuffer",
  "SharedArrayBuffer",
  "DataView",
  "Int8Array",
  "Uint8Array",
  "Int16Array",
  "Uint16Array",
  "Int32Array",
  "Uint32Array",
  "Float32Array",
  "Float64Array",
  "BigInt64Array",
  "BigUint64Array",
  // object
  "String",
  "Number",
  "BigInt",
  "Boolean",
  "Symbol",
  "Error",
  "Array",
  "Set",
  "Map",
  "WeakSet",
  "WeakMap",
  "WeakRef",
  "Promise",
  "Date",
  "RegExp",
  "URL",
  "URLSearchParams",
  "File",
  "Blob",
  "FormData",
  "Headers",
  "Request",
  "Response",
  "Arguments",
  "Atomics",
  "JSON",
  "Reflect",
  "Object",
] as const;
type ObjectTag = (typeof ObjectTag)[number];
function toObjectTag(data: object): ObjectTag {
  const tag = getTag(data);
  return ObjectTag.includes(tag as ObjectTag) ? (tag as ObjectTag) : "Object";
}

export function getDataType(data: unknown): DataTypeResult {
  switch (typeof data) {
    case "undefined":
      return { type: "undefined", data } as const;
    case "number":
      return { type: "number", data } as const;
    case "bigint":
      return { type: "bigint", data } as const;
    case "boolean":
      return { type: "boolean", data } as const;
    case "string":
      return { type: "string", data } as const;
    case "symbol":
      return { type: "symbol", data } as const;
    case "function":
      return { type: "function", subtype: toFunctionTag(data), data } as any;
    case "object":
      if (data === null) {
        return { type: "null", data } as const;
      }
      return { type: "object", subtype: toObjectTag(data), data } as any;
  }
}
