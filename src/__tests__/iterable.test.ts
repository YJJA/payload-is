import { TestData, TestDataKey } from "../__test_utils__/test-data.js";
import { isAsyncIterable, isIterable } from "../iterable.js";

describe("iterable", () => {
  test("isIterable", () => {
    const trueKeys: TestDataKey[] = [
      // string
      "stringObejct",

      // array
      "emptyArray",
      "prototypeArray",
      "emptyNewArray",
      "emptyZeroArray",
      "numberArray",
      "stringArray",
      "emptyStringArray",
      "stringMoreArray",
      "undefinedArray",
      "undefinedMoreArray",
      "numberNewArray",
      "stringNewArray",
      "stringNewMoreArray",

      // generator
      "Generator",

      // collection
      "Set",
      "Map",

      // buffer
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
        expect(isIterable(value)).toBeTruthy();
      } else {
        expect(isIterable(value)).toBeFalsy();
      }
    });
  });

  test("isAsyncIterable", () => {
    const trueKeys: TestDataKey[] = ["AsyncGenerator"];

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isAsyncIterable(value)).toBeTruthy();
      } else {
        expect(isAsyncIterable(value)).toBeFalsy();
      }
    });
  });
});
