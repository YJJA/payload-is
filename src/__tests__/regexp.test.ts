import { it, describe } from "node:test";
import assert from "node:assert/strict";
import { TestData, type TestDataKey } from "../__test_utils__/test-data.ts";
import { isRegExp } from "../regexp.ts";

describe("regexp", () => {
  it("isRegExp: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = [
      "numberRegExp",
      "globalRegExp",
      "newRegExp",
    ];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.strictEqual(
          isRegExp(val),
          trueKeys.includes(key as TestDataKey)
        );
      });
    }
  });
});
