import { it, describe } from "node:test";
import assert from "node:assert/strict";
import { TestData, type TestDataKey } from "../__test_utils__/test-data.ts";
import { isBigInt, isBigIntObject } from "../bigint.ts";

describe("bigint", () => {
  it("isBigInt: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["bigint", "bigint2"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.strictEqual(
          isBigInt(val),
          trueKeys.includes(key as TestDataKey)
        );
      });
    }
  });

  it("isBigIntObject: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["bigintObject", "bigint2Object"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.strictEqual(
          isBigIntObject(val),
          trueKeys.includes(key as TestDataKey)
        );
      });
    }
  });
});
