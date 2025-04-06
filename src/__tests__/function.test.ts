import { it, describe } from "node:test";
import assert from "node:assert/strict";
import { TestData, type TestDataKey } from "../__test_utils__/test-data.ts";
import {
  isAsyncFunction,
  isAsyncGeneratorFunction,
  isFunction,
  isGeneratorFunction,
} from "../function.ts";

describe("function", () => {
  it("isFunction: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = [
      "noopFunction",
      "arrowFunction",
      "objectFnFunction",
      "objectMethodFunction",

      "asyncFunction",
      "asyncArrowFunction",

      "generatorFunction",
      "asyncGeneratorFunction",

      "CustomClass",
      "MyOtherClass",
    ];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.equal(isFunction(val), trueKeys.includes(key as TestDataKey));
      });
    }
  });

  it("isAsyncFunction: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["asyncFunction", "asyncArrowFunction"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.equal(
          isAsyncFunction(val),
          trueKeys.includes(key as TestDataKey)
        );
      });
    }
  });

  it("isGeneratorFunction: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["generatorFunction"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.equal(
          isGeneratorFunction(val),
          trueKeys.includes(key as TestDataKey)
        );
      });
    }
  });

  it("isAsyncGeneratorFunction: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["asyncGeneratorFunction"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.equal(
          isAsyncGeneratorFunction(val),
          trueKeys.includes(key as TestDataKey)
        );
      });
    }
  });
});
