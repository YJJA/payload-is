import assert from "node:assert/strict";
import { it, describe } from "node:test";
import { TestData, type TestDataKey } from "../__test_utils__/test-data.ts";
import { isAsyncIterable, isIterable } from "../iterable.ts";

describe("iterable", () => {
  it("isIterable: ", { concurrency: true }, (t) => {
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

      "IteratorObject",

      "ArrayIterator",
      "StringIterator",
      "MapIterator",
      "SetIterator",

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

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.strictEqual(
          isIterable(val),
          trueKeys.includes(key as TestDataKey),
        );
      });
    }
  });

  it("isAsyncIterable: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["AsyncGenerator", "AsyncIteratorObject"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.strictEqual(
          isAsyncIterable(val),
          trueKeys.includes(key as TestDataKey),
        );
      });
    }
  });
});
