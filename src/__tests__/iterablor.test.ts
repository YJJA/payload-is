import { it, describe } from "node:test";
import assert from "node:assert/strict";
import { TestData, type TestDataKey } from "../__test_utils__/test-data.ts";
import { isAsyncIterator, isIterator } from "../iterator.ts";

describe("iterator", () => {
  it("isIterator: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = [
      // generator
      "Generator",

      "ArrayIterator",
      "StringIterator",
      "MapIterator",
      "SetIterator",
    ];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.strictEqual(
          isIterator(val),
          trueKeys.includes(key as TestDataKey)
        );
      });
    }
  });

  it("isAsyncIterator: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["AsyncGenerator"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.strictEqual(
          isAsyncIterator(val),
          trueKeys.includes(key as TestDataKey)
        );
      });
    }
  });
});
