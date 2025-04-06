import { it, describe } from "node:test";
import assert from "node:assert/strict";
import { TestData, type TestDataKey } from "../__test_utils__/test-data.ts";
import { isDate, isInvalidDate, isValidDate } from "../date.ts";

describe("date", () => {
  it("isDate: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["nowDate", "invalidDate", "formatDate"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.equal(isDate(val), trueKeys.includes(key as TestDataKey));
      });
    }
  });

  it("isValidDate: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["nowDate", "formatDate"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.equal(isValidDate(val), trueKeys.includes(key as TestDataKey));
      });
    }
  });

  it("isInvalidDate: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["invalidDate"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.equal(isInvalidDate(val), trueKeys.includes(key as TestDataKey));
      });
    }
  });
});
