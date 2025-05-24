import { it, describe } from "node:test";
import assert from "node:assert/strict";
import { TestData, type TestDataKey } from "../__test_utils__/test-data.ts";
import {
  isError,
  isEvalError,
  isNativeError,
  isRangeError,
  isReferenceError,
  isSyntaxError,
  isTypeError,
  isURIError,
} from "../error.ts";

describe("error", () => {
  it("isError: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = [
      "Error",
      "CustomError",
      "EvalError",
      "RangeError",
      "ReferenceError",
      "SyntaxError",
      "TypeError",
      "URIError",
    ];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.strictEqual(isError(val), trueKeys.includes(key as TestDataKey));
      });
    }
  });

  it("isEvalError: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["EvalError"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.strictEqual(
          isEvalError(val),
          trueKeys.includes(key as TestDataKey)
        );
      });
    }
  });

  it("isRangeError: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["RangeError"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.strictEqual(
          isRangeError(val),
          trueKeys.includes(key as TestDataKey)
        );
      });
    }
  });

  it("isReferenceError: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["ReferenceError"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.strictEqual(
          isReferenceError(val),
          trueKeys.includes(key as TestDataKey)
        );
      });
    }
  });

  it("isSyntaxError: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["SyntaxError"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.strictEqual(
          isSyntaxError(val),
          trueKeys.includes(key as TestDataKey)
        );
      });
    }
  });

  it("isTypeError: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["TypeError"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.strictEqual(
          isTypeError(val),
          trueKeys.includes(key as TestDataKey)
        );
      });
    }
  });

  it("isURIError: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["URIError"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.strictEqual(
          isURIError(val),
          trueKeys.includes(key as TestDataKey)
        );
      });
    }
  });

  it("isNativeError: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = [
      "EvalError",
      "RangeError",
      "ReferenceError",
      "SyntaxError",
      "TypeError",
      "URIError",
    ];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.strictEqual(
          isNativeError(val),
          trueKeys.includes(key as TestDataKey)
        );
      });
    }
  });
});
