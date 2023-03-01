import {
  getTestDataValue,
  TestDataKey,
  TestDataKeys,
} from "../__test_utils__/test-data.js";
import {
  isAsyncFunction,
  isAsyncGeneratorFunction,
  isFunction,
  isGeneratorFunction,
} from "../function.js";

describe("function", () => {
  test.each(TestDataKeys)("isFunction: %s", (key) => {
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

    expect(isFunction(getTestDataValue(key))).toEqual(trueKeys.includes(key));
  });

  test.each(TestDataKeys)("isAsyncFunction: %s", (key) => {
    const trueKeys: TestDataKey[] = ["asyncFunction", "asyncArrowFunction"];

    expect(isAsyncFunction(getTestDataValue(key))).toEqual(
      trueKeys.includes(key)
    );
  });

  test.each(TestDataKeys)("isGeneratorFunction: %s", (key) => {
    const trueKeys: TestDataKey[] = ["generatorFunction"];

    expect(isGeneratorFunction(getTestDataValue(key))).toEqual(
      trueKeys.includes(key)
    );
  });

  test.each(TestDataKeys)("isAsyncGeneratorFunction: %s", (key) => {
    const trueKeys: TestDataKey[] = ["asyncGeneratorFunction"];

    expect(isAsyncGeneratorFunction(getTestDataValue(key))).toEqual(
      trueKeys.includes(key)
    );
  });
});
