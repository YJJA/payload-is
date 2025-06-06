import { it, describe } from "node:test";
import assert from "node:assert/strict";
import { TestData, type TestDataKey } from "../__test_utils__/test-data.ts";
import { isNil, isNull, isUndefined } from "../nil.ts";

describe("nil", () => {
  it("isUndefined: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["undefined"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.strictEqual(
          isUndefined(val),
          trueKeys.includes(key as TestDataKey),
        );
      });
    }
  });

  it("isNull: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["null"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.strictEqual(isNull(val), trueKeys.includes(key as TestDataKey));
      });
    }
  });

  it("isNil: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["undefined", "null"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.strictEqual(isNil(val), trueKeys.includes(key as TestDataKey));
      });
    }
  });
});
