import { TestData, TestDataKey } from "../__test_utils__/test-data.js";
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
  test("isArrayBuffer", () => {
    const trueKeys: TestDataKey[] = ["ArrayBuffer"];

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isArrayBuffer(value)).toBeTruthy();
      } else {
        expect(isArrayBuffer(value)).toBeFalsy();
      }
    });
  });

  test("isSharedArrayBuffer", () => {
    const trueKeys: TestDataKey[] = ["SharedArrayBuffer"];

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isSharedArrayBuffer(value)).toBeTruthy();
      } else {
        expect(isSharedArrayBuffer(value)).toBeFalsy();
      }
    });
  });

  test("isArrayBufferLike", () => {
    const trueKeys: TestDataKey[] = ["ArrayBuffer", "SharedArrayBuffer"];

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isArrayBufferLike(value)).toBeTruthy();
      } else {
        expect(isArrayBufferLike(value)).toBeFalsy();
      }
    });
  });

  test("isDataView", () => {
    const trueKeys: TestDataKey[] = ["DataView"];

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isDataView(value)).toBeTruthy();
      } else {
        expect(isDataView(value)).toBeFalsy();
      }
    });
  });

  test("isInt8Array", () => {
    const trueKeys: TestDataKey[] = ["Int8Array"];

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isInt8Array(value)).toBeTruthy();
      } else {
        expect(isInt8Array(value)).toBeFalsy();
      }
    });
  });

  test("isUint8Array", () => {
    const trueKeys: TestDataKey[] = ["Uint8Array"];

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isUint8Array(value)).toBeTruthy();
      } else {
        expect(isUint8Array(value)).toBeFalsy();
      }
    });
  });

  test("isUint8ClampedArray", () => {
    const trueKeys: TestDataKey[] = ["Uint8ClampedArray"];

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isUint8ClampedArray(value)).toBeTruthy();
      } else {
        expect(isUint8ClampedArray(value)).toBeFalsy();
      }
    });
  });

  test("isInt16Array", () => {
    const trueKeys: TestDataKey[] = ["Int16Array"];

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isInt16Array(value)).toBeTruthy();
      } else {
        expect(isInt16Array(value)).toBeFalsy();
      }
    });
  });

  test("isUint16Array", () => {
    const trueKeys: TestDataKey[] = ["Uint16Array"];

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isUint16Array(value)).toBeTruthy();
      } else {
        expect(isUint16Array(value)).toBeFalsy();
      }
    });
  });

  test("isInt32Array", () => {
    const trueKeys: TestDataKey[] = ["Int32Array"];

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isInt32Array(value)).toBeTruthy();
      } else {
        expect(isInt32Array(value)).toBeFalsy();
      }
    });
  });

  test("isUint32Array", () => {
    const trueKeys: TestDataKey[] = ["Uint32Array"];

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isUint32Array(value)).toBeTruthy();
      } else {
        expect(isUint32Array(value)).toBeFalsy();
      }
    });
  });

  test("isFloat32Array", () => {
    const trueKeys: TestDataKey[] = ["Float32Array"];

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isFloat32Array(value)).toBeTruthy();
      } else {
        expect(isFloat32Array(value)).toBeFalsy();
      }
    });
  });

  test("isFloat64Array", () => {
    const trueKeys: TestDataKey[] = ["Float64Array"];

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isFloat64Array(value)).toBeTruthy();
      } else {
        expect(isFloat64Array(value)).toBeFalsy();
      }
    });
  });

  test("isBigInt64Array", () => {
    const trueKeys: TestDataKey[] = ["BigInt64Array"];

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isBigInt64Array(value)).toBeTruthy();
      } else {
        expect(isBigInt64Array(value)).toBeFalsy();
      }
    });
  });

  test("isBigUint64Array", () => {
    const trueKeys: TestDataKey[] = ["BigUint64Array"];

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isBigUint64Array(value)).toBeTruthy();
      } else {
        expect(isBigUint64Array(value)).toBeFalsy();
      }
    });
  });

  test("isTypedArray", () => {
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

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isTypedArray(value)).toBeTruthy();
      } else {
        expect(isTypedArray(value)).toBeFalsy();
      }
    });
  });
});
