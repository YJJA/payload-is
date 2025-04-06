import { it, describe } from "node:test";
import assert from "node:assert/strict";
import { TestData, type TestDataKey } from "../__test_utils__/test-data.ts";
import { isBoolean, isBooleanObject, isTrue, isFalse } from "../boolean.ts";

describe("boolean", () => {
  it("isBoolean: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["true", "false"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.equal(isBoolean(val), trueKeys.includes(key as TestDataKey));
      });
    }
  });

  it("isTrue: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["true"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.equal(isTrue(val), trueKeys.includes(key as TestDataKey));
      });
    }
  });

  it("isFalse: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["false"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.equal(isFalse(val), trueKeys.includes(key as TestDataKey));
      });
    }
  });

  it("isBooleanObject: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = [
      "booleanObject",
      "boolean2Object",
      "boolean3Object",
    ];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.equal(
          isBooleanObject(val),
          trueKeys.includes(key as TestDataKey)
        );
      });
    }
  });
});
