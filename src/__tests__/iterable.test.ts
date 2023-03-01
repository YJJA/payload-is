import {
  getTestDataValue,
  TestDataKey,
  TestDataKeys,
} from "../__test_utils__/test-data.js";
import { isAsyncIterable, isIterable } from "../iterable.js";

describe("iterable", () => {
  test.each(TestDataKeys)("isIterable: %s", (key) => {
    const trueKeys: TestDataKey[] = [
      // string
      "stringObject",
      "string2Object",
      "string3Object",

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

    expect(isIterable(getTestDataValue(key))).toEqual(trueKeys.includes(key));
  });

  test.each(TestDataKeys)("isAsyncIterable: %s", (key) => {
    const trueKeys: TestDataKey[] = ["AsyncGenerator"];

    expect(isAsyncIterable(getTestDataValue(key))).toEqual(
      trueKeys.includes(key)
    );
  });
});
