import { it, describe } from "node:test";
import assert from "node:assert/strict";
import { TestData, type TestDataKey } from "../__test_utils__/test-data.ts";
import { isAsyncGenerator, isGenerator } from "../generator.ts";

describe("generator", () => {
  it("isGenerator: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["Generator"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.strictEqual(
          isGenerator(val),
          trueKeys.includes(key as TestDataKey)
        );
      });
    }
  });

  it("isAsyncGenerator: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["AsyncGenerator"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.strictEqual(
          isAsyncGenerator(val),
          trueKeys.includes(key as TestDataKey)
        );
      });
    }
  });
});
