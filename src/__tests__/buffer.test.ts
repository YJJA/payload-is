import {
  getTestDataValue,
  TestDataKey,
  TestDataKeys,
} from "../__test_utils__/test-data.js";
import {
  isArrayBuffer,
  isSharedArrayBuffer,
  isArrayBufferLike,
  isDataView,
  isInt8Array,
  isUint8Array,
  isUint8ClampedArray,
  isInt16Array,
  isUint16Array,
  isInt32Array,
  isUint32Array,
  isFloat32Array,
  isFloat64Array,
  isBigInt64Array,
  isBigUint64Array,
  isTypedArray,
} from "../buffer.js";

describe("buffer", () => {
  test.each(TestDataKeys)("isArrayBuffer: %s", (key) => {
    const trueKeys: TestDataKey[] = ["ArrayBuffer"];

    expect(isArrayBuffer(getTestDataValue(key))).toEqual(
      trueKeys.includes(key)
    );
  });

  test.each(TestDataKeys)("isSharedArrayBuffer: %s", (key) => {
    const trueKeys: TestDataKey[] = ["SharedArrayBuffer"];

    expect(isSharedArrayBuffer(getTestDataValue(key))).toEqual(
      trueKeys.includes(key)
    );
  });

  test.each(TestDataKeys)("isArrayBufferLike: %s", (key) => {
    const trueKeys: TestDataKey[] = ["ArrayBuffer", "SharedArrayBuffer"];

    expect(isArrayBufferLike(getTestDataValue(key))).toEqual(
      trueKeys.includes(key)
    );
  });

  test.each(TestDataKeys)("isDataView: %s", (key) => {
    const trueKeys: TestDataKey[] = ["DataView"];

    expect(isDataView(getTestDataValue(key))).toEqual(trueKeys.includes(key));
  });

  test.each(TestDataKeys)("isInt8Array: %s", (key) => {
    const trueKeys: TestDataKey[] = ["Int8Array"];

    expect(isInt8Array(getTestDataValue(key))).toEqual(trueKeys.includes(key));
  });

  test.each(TestDataKeys)("isUint8Array: %s", (key) => {
    const trueKeys: TestDataKey[] = ["Uint8Array"];

    expect(isUint8Array(getTestDataValue(key))).toEqual(trueKeys.includes(key));
  });

  test.each(TestDataKeys)("isUint8ClampedArray: %s", (key) => {
    const trueKeys: TestDataKey[] = ["Uint8ClampedArray"];

    expect(isUint8ClampedArray(getTestDataValue(key))).toEqual(
      trueKeys.includes(key)
    );
  });

  test.each(TestDataKeys)("isInt16Array: %s", (key) => {
    const trueKeys: TestDataKey[] = ["Int16Array"];

    expect(isInt16Array(getTestDataValue(key))).toEqual(trueKeys.includes(key));
  });

  test.each(TestDataKeys)("isUint16Array: %s", (key) => {
    const trueKeys: TestDataKey[] = ["Uint16Array"];

    expect(isUint16Array(getTestDataValue(key))).toEqual(
      trueKeys.includes(key)
    );
  });

  test.each(TestDataKeys)("isInt32Array: %s", (key) => {
    const trueKeys: TestDataKey[] = ["Int32Array"];

    expect(isInt32Array(getTestDataValue(key))).toEqual(trueKeys.includes(key));
  });

  test.each(TestDataKeys)("isUint32Array: %s", (key) => {
    const trueKeys: TestDataKey[] = ["Uint32Array"];

    expect(isUint32Array(getTestDataValue(key))).toEqual(
      trueKeys.includes(key)
    );
  });

  test.each(TestDataKeys)("isFloat32Array: %s", (key) => {
    const trueKeys: TestDataKey[] = ["Float32Array"];

    expect(isFloat32Array(getTestDataValue(key))).toEqual(
      trueKeys.includes(key)
    );
  });

  test.each(TestDataKeys)("isFloat64Array: %s", (key) => {
    const trueKeys: TestDataKey[] = ["Float64Array"];

    expect(isFloat64Array(getTestDataValue(key))).toEqual(
      trueKeys.includes(key)
    );
  });

  test.each(TestDataKeys)("isBigInt64Array: %s", (key) => {
    const trueKeys: TestDataKey[] = ["BigInt64Array"];

    expect(isBigInt64Array(getTestDataValue(key))).toEqual(
      trueKeys.includes(key)
    );
  });

  test.each(TestDataKeys)("isBigUint64Array: %s", (key) => {
    const trueKeys: TestDataKey[] = ["BigUint64Array"];

    expect(isBigUint64Array(getTestDataValue(key))).toEqual(
      trueKeys.includes(key)
    );
  });

  test.each(TestDataKeys)("isTypedArray: %s", (key) => {
    const trueKeys: TestDataKey[] = [
      "Int8Array",
      "Uint8Array",
      "Uint8ClampedArray",
      "Int16Array",
      "Uint16Array",
      "Int32Array",
      "Uint32Array",
      "Float32Array",
      "Float64Array",
      "BigInt64Array",
      "BigUint64Array",
    ];

    expect(isTypedArray(getTestDataValue(key))).toEqual(trueKeys.includes(key));
  });
});
