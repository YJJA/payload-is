import { TestData, TestDataKey } from "../__test_utils__/test-data.js";
import { isAsyncGenerator, isGenerator } from "../generator.js";

describe("generator", () => {
  test("isGenerator", () => {
    const trueKeys: TestDataKey[] = ["Generator"];

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isGenerator(value)).toBeTruthy();
      } else {
        expect(isGenerator(value)).toBeFalsy();
      }
    });
  });

  test("isAsyncGenerator", () => {
    const trueKeys: TestDataKey[] = ["AsyncGenerator"];

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isAsyncGenerator(value)).toBeTruthy();
      } else {
        expect(isAsyncGenerator(value)).toBeFalsy();
      }
    });
  });
});
