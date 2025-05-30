import { getTag, type AnyAsyncFunction, type AnyFunction } from "./type.ts";

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

type DataTypeResult =
  // primitive
  | { type: "undefined"; data: undefined }
  | { type: "number"; data: number }
  | { type: "bigint"; data: bigint }
  | { type: "boolean"; data: boolean }
  | { type: "string"; data: string }
  | { type: "symbol"; data: symbol }
  | { type: "null"; data: null }
  // function
  | { type: "function"; subtype: "Function"; data: AnyFunction }
  | { type: "function"; subtype: "AsyncFunction"; data: AnyAsyncFunction }
  | { type: "function"; subtype: "GeneratorFunction"; data: GeneratorFunction }
  | {
      type: "function";
      subtype: "AsyncGeneratorFunction";
      data: AsyncGeneratorFunction;
    }
  // iterator
  | {
      type: "object";
      subtype: "Segmenter String Iterator";
      data: Intl.SegmentIterator<Intl.SegmentData>;
    }
  | {
      type: "object";
      subtype: "RegExp String Iterator";
      data: RegExpStringIterator<RegExpMatchArray>;
    }
  | {
      type: "object";
      subtype: "String Iterator";
      data: StringIterator<string>;
    }
  | { type: "object"; subtype: "Array Iterator"; data: ArrayIterator<unknown> }
  | { type: "object"; subtype: "Map Iterator"; data: MapIterator<unknown> }
  | { type: "object"; subtype: "Set Iterator"; data: SetIterator<unknown> }
  | { type: "object"; subtype: "Generator"; data: Generator }
  | { type: "object"; subtype: "Iterator"; data: Iterator<unknown> }
  | { type: "object"; subtype: "AsyncGenerator"; data: AsyncGenerator }
  | {
      type: "object";
      subtype: "AsyncIterator";
      data: AsyncIterator<unknown>;
    }
  // buffer
  | { type: "object"; subtype: "ArrayBuffer"; data: ArrayBuffer }
  | { type: "object"; subtype: "SharedArrayBuffer"; data: SharedArrayBuffer }
  | { type: "object"; subtype: "DataView"; data: DataView }
  | { type: "object"; subtype: "Int8Array"; data: Int8Array }
  | { type: "object"; subtype: "Uint8Array"; data: Uint8Array }
  | {
      type: "object";
      subtype: "Uint8ClampedArray";
      data: Uint8ClampedArray;
    }
  | { type: "object"; subtype: "Int16Array"; data: Int16Array }
  | { type: "object"; subtype: "Uint16Array"; data: Uint16Array }
  | { type: "object"; subtype: "Int32Array"; data: Int32Array }
  | { type: "object"; subtype: "Uint32Array"; data: Uint32Array }
  | { type: "object"; subtype: "Float32Array"; data: Float32Array }
  | { type: "object"; subtype: "Float64Array"; data: Float64Array }
  | { type: "object"; subtype: "BigInt64Array"; data: BigInt64Array }
  | { type: "object"; subtype: "BigUint64Array"; data: BigUint64Array }
  // object
  | { type: "object"; subtype: "String"; data: String }
  | { type: "object"; subtype: "Number"; data: Number }
  | { type: "object"; subtype: "BigInt"; data: BigInt }
  | { type: "object"; subtype: "Boolean"; data: Boolean }
  | { type: "object"; subtype: "Symbol"; data: Symbol }
  | { type: "object"; subtype: "Error"; data: Error }
  | { type: "object"; subtype: "Array"; data: unknown[] }
  | { type: "object"; subtype: "Set"; data: Set<unknown> }
  | { type: "object"; subtype: "Map"; data: Map<unknown, unknown> }
  | { type: "object"; subtype: "WeakSet"; data: WeakSet<WeakKey> }
  | { type: "object"; subtype: "WeakMap"; data: WeakMap<WeakKey, unknown> }
  | { type: "object"; subtype: "WeakRef"; data: WeakRef<WeakKey> }
  | { type: "object"; subtype: "Promise"; data: Promise<unknown> }
  | { type: "object"; subtype: "Date"; data: Date }
  | { type: "object"; subtype: "RegExp"; data: RegExp }
  | { type: "object"; subtype: "URL"; data: URL }
  | { type: "object"; subtype: "URLSearchParams"; data: URLSearchParams }
  | { type: "object"; subtype: "File"; data: File }
  | { type: "object"; subtype: "Blob"; data: Blob }
  | { type: "object"; subtype: "FormData"; data: FormData }
  | { type: "object"; subtype: "Headers"; data: Headers }
  | { type: "object"; subtype: "Request"; data: Request }
  | { type: "object"; subtype: "Response"; data: Response }
  | { type: "object"; subtype: "Arguments"; data: IArguments }
  | { type: "object"; subtype: "Atomics"; data: Atomics }
  | { type: "object"; subtype: "JSON"; data: JSON }
  | { type: "object"; subtype: "Reflect"; data: typeof Reflect }
  | {
      type: "object";
      subtype: "FinalizationRegistry";
      data: FinalizationRegistry<unknown>;
    }
  | { type: "object"; subtype: "Object"; data: object };

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
