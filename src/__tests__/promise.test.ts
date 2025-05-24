import { it, describe } from "node:test";
import assert from "node:assert/strict";
import { TestData, type TestDataKey } from "../__test_utils__/test-data.ts";
import { isPromise, isPromiseLike } from "../promise.ts";

describe("promise", () => {
  it("isPromise: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = [
      "loadingPromise",
      "rejectPromise",
      "resolvePromise",
    ];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.strictEqual(
          isPromise(val),
          trueKeys.includes(key as TestDataKey)
        );
      });
    }
  });

  it("isPromiseLike: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = [
      "loadingPromise",
      "rejectPromise",
      "resolvePromise",
      "promiseLike",
    ];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.strictEqual(
          isPromiseLike(val),
          trueKeys.includes(key as TestDataKey)
        );
      });
    }
  });
});
