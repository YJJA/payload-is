// Buffer
import { getTag } from "./type.ts";

export function isArrayBuffer(payload: unknown): payload is ArrayBuffer {
  return getTag(payload) === "ArrayBuffer";
}

export function isSharedArrayBuffer(
  payload: unknown,
): payload is SharedArrayBuffer {
  return getTag(payload) === "SharedArrayBuffer";
}

export function isArrayBufferLike(
  payload: unknown,
): payload is ArrayBufferLike {
  return isArrayBuffer(payload) || isSharedArrayBuffer(payload);
}

export function isArrayBufferView(
  payload: unknown,
): payload is ArrayBufferView {
  return ArrayBuffer.isView(payload);
}

export function isDataView(payload: unknown): payload is DataView {
  return getTag(payload) === "DataView";
}

// TypedArray

export function isInt8Array(payload: unknown): payload is Int8Array {
  return getTag(payload) === "Int8Array";
}
export function isUint8Array(payload: unknown): payload is Uint8Array {
  return getTag(payload) === "Uint8Array";
}
export function isUint8ClampedArray(
  payload: unknown,
): payload is Uint8ClampedArray {
  return getTag(payload) === "Uint8ClampedArray";
}
export function isInt16Array(payload: unknown): payload is Int16Array {
  return getTag(payload) === "Int16Array";
}
export function isUint16Array(payload: unknown): payload is Uint16Array {
  return getTag(payload) === "Uint16Array";
}
export function isInt32Array(payload: unknown): payload is Int32Array {
  return getTag(payload) === "Int32Array";
}
export function isUint32Array(payload: unknown): payload is Uint32Array {
  return getTag(payload) === "Uint32Array";
}
export function isFloat32Array(payload: unknown): payload is Float32Array {
  return getTag(payload) === "Float32Array";
}
export function isFloat64Array(payload: unknown): payload is Float64Array {
  return getTag(payload) === "Float64Array";
}
export function isBigInt64Array(payload: unknown): payload is BigInt64Array {
  return getTag(payload) === "BigInt64Array";
}
export function isBigUint64Array(payload: unknown): payload is BigUint64Array {
  return getTag(payload) === "BigUint64Array";
}

export function isTypedArray(
  payload: unknown,
): payload is
  | Int8Array
  | Uint8Array
  | Uint8ClampedArray
  | Int16Array
  | Uint16Array
  | Int32Array
  | Uint32Array
  | Float32Array
  | Float64Array
  | BigInt64Array
  | BigUint64Array {
  return ArrayBuffer.isView(payload) && !isDataView(payload);
}
