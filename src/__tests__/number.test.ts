import { it, describe } from "node:test";
import assert from "node:assert/strict";
import { TestData, type TestDataKey } from "../__test_utils__/test-data.ts";
import {
  isInvalidNumber,
  isNumber,
  isNumberObject,
  isValidNumber,
} from "../number.ts";

describe("number", () => {
  it("isNumber: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = [
      "positiveNumber",
      "zeroNumber",
      "negativeNumber",
      "MAX_VALUENumber",
      "MIN_VALUENumber",
      "InfinityNumber",
      "NaN",
    ];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.strictEqual(
          isNumber(val),
          trueKeys.includes(key as TestDataKey),
        );
      });
    }
  });

  it("isValidNumber: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = [
      "positiveNumber",
      "zeroNumber",
      "negativeNumber",
      "MAX_VALUENumber",
      "MIN_VALUENumber",
      "InfinityNumber",
    ];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.strictEqual(
          isValidNumber(val),
          trueKeys.includes(key as TestDataKey),
        );
      });
    }
  });

  it("isInvalidNumber: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["NaN"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.strictEqual(
          isInvalidNumber(val),
          trueKeys.includes(key as TestDataKey),
        );
      });
    }
  });

  it("isNumberObject: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = [
      "numberObject",
      "number2Object",
      "number3Object",
    ];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.strictEqual(
          isNumberObject(val),
          trueKeys.includes(key as TestDataKey),
        );
      });
    }
  });
});
