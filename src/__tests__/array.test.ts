import { it, describe } from "node:test";
import assert from "node:assert/strict";
import { TestData, type TestDataKey } from "../__test_utils__/test-data.ts";
import { isArray, isEmptyArray, isFullArray } from "../array.ts";

describe("array", () => {
  it("isArray: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = [
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
    ];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.strictEqual(isArray(val), trueKeys.includes(key as TestDataKey));
      });
    }
  });

  it("isEmptyArray: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = [
      "emptyArray",
      "prototypeArray",
      "emptyNewArray",
      "emptyZeroArray",
    ];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.strictEqual(
          isEmptyArray(val),
          trueKeys.includes(key as TestDataKey)
        );
      });
    }
  });

  it("isFullArray: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = [
      "numberArray",
      "stringArray",
      "emptyStringArray",
      "stringMoreArray",
      "undefinedArray",
      "undefinedMoreArray",
      "numberNewArray",
      "stringNewArray",
      "stringNewMoreArray",
    ];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.strictEqual(
          isFullArray(val),
          trueKeys.includes(key as TestDataKey)
        );
      });
    }
  });
});
