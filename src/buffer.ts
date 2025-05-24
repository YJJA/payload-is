// Buffer

export function isArrayBuffer(payload: unknown): payload is ArrayBuffer {
  return payload instanceof ArrayBuffer;
}

export function isSharedArrayBuffer(
  payload: unknown
): payload is SharedArrayBuffer {
  return payload instanceof SharedArrayBuffer;
}

export function isArrayBufferLike(
  payload: unknown
): payload is ArrayBufferLike {
  return isArrayBuffer(payload) || isSharedArrayBuffer(payload);
}

export function isArrayBufferView(
  payload: unknown
): payload is ArrayBufferView {
  return ArrayBuffer.isView(payload);
}

export function isDataView(payload: unknown): payload is DataView {
  return payload instanceof DataView;
}

// TypedArray

export function isInt8Array(payload: unknown): payload is Int8Array {
  return payload instanceof Int8Array;
}
export function isUint8Array(payload: unknown): payload is Uint8Array {
  return payload instanceof Uint8Array;
}
export function isUint8ClampedArray(
  payload: unknown
): payload is Uint8ClampedArray {
  return payload instanceof Uint8ClampedArray;
}
export function isInt16Array(payload: unknown): payload is Int16Array {
  return payload instanceof Int16Array;
}
export function isUint16Array(payload: unknown): payload is Uint16Array {
  return payload instanceof Uint16Array;
}
export function isInt32Array(payload: unknown): payload is Int32Array {
  return payload instanceof Int32Array;
}
export function isUint32Array(payload: unknown): payload is Uint32Array {
  return payload instanceof Uint32Array;
}
export function isFloat32Array(payload: unknown): payload is Float32Array {
  return payload instanceof Float32Array;
}
export function isFloat64Array(payload: unknown): payload is Float64Array {
  return payload instanceof Float64Array;
}
export function isBigInt64Array(payload: unknown): payload is BigInt64Array {
  return payload instanceof BigInt64Array;
}
export function isBigUint64Array(payload: unknown): payload is BigUint64Array {
  return payload instanceof BigUint64Array;
}

export function isTypedArray(
  payload: unknown
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
