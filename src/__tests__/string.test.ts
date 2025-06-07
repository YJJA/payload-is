import assert from "node:assert/strict";
import { it, describe } from "node:test";
import { TestData, type TestDataKey } from "../__test_utils__/test-data.ts";
import {
  isString,
  isEmptyString,
  isFullString,
  isStringObject,
} from "../string.ts";

describe("string", () => {
  it("isString: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = [
      "emptyString",
      "spaceString",
      "fullString",
      "underlineString",
      "templateString",
      "positiveNumberString",
      "zeroNumberString",
      "negativeNumberString",
      "NaNString",
      "bigintString",
      "trueString",
      "falseString",
      "symbolString",
      "undefinedString",
      "nullString",
      "arrayString",
      "emptyArrayString",
      "objectString",
      "emptyObjectString",
    ];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.strictEqual(
          isString(val),
          trueKeys.includes(key as TestDataKey),
        );
      });
    }
  });

  it("isEmptyString: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["emptyString"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.strictEqual(
          isEmptyString(val),
          trueKeys.includes(key as TestDataKey),
        );
      });
    }
  });

  it("isFullString: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = [
      "spaceString",
      "fullString",
      "underlineString",
      "templateString",
      "positiveNumberString",
      "zeroNumberString",
      "negativeNumberString",
      "NaNString",
      "bigintString",
      "trueString",
      "falseString",
      "symbolString",
      "undefinedString",
      "nullString",
      "arrayString",
      "emptyArrayString",
      "objectString",
      "emptyObjectString",
    ];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.strictEqual(
          isFullString(val),
          trueKeys.includes(key as TestDataKey),
        );
      });
    }
  });

  it("isStringObject: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = [
      "stringObject",
      "string2Object",
      "string3Object",
    ];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.strictEqual(
          isStringObject(val),
          trueKeys.includes(key as TestDataKey),
        );
      });
    }
  });
});
