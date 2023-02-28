import { TestData, TestDataKey } from "../__test_utils__/test-data.js";
import {
  isAsyncFunction,
  isAsyncGeneratorFunction,
  isFunction,
  isGeneratorFunction,
} from "../function.js";

describe("function", () => {
  test("isFunction", () => {
    const trueKeys: TestDataKey[] = [
      "noopFunction",
      "arrowFunction",
      "objectFnFunction",
      "objectMethodFunction",

      "asyncFunction",
      "asyncArrowFunction",

      "generatorFunction",
      "asyncGeneratorFunction",

      "MyClass",
      "MyOtherClass",
    ];

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isFunction(value)).toBeTruthy();
      } else {
        expect(isFunction(value)).toBeFalsy();
      }
    });
  });

  test("isAsyncFunction", () => {
    const trueKeys: TestDataKey[] = ["asyncFunction", "asyncArrowFunction"];

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isAsyncFunction(value)).toBeTruthy();
      } else {
        expect(isAsyncFunction(value)).toBeFalsy();
      }
    });
  });

  test("isGeneratorFunction", () => {
    const trueKeys: TestDataKey[] = ["generatorFunction"];

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isGeneratorFunction(value)).toBeTruthy();
      } else {
        expect(isGeneratorFunction(value)).toBeFalsy();
      }
    });
  });

  test("isAsyncGeneratorFunction", () => {
    const trueKeys: TestDataKey[] = ["asyncGeneratorFunction"];

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isAsyncGeneratorFunction(value)).toBeTruthy();
      } else {
        expect(isAsyncGeneratorFunction(value)).toBeFalsy();
      }
    });
  });
});
