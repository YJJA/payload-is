import { TestData, TestDataKey } from "../__test_utils__/test-data.js";
import { isPromise, isPromiseLike } from "../promise.js";

describe("promise", () => {
  test("isPromise", () => {
    const trueKeys: TestDataKey[] = [
      "loadingPromise",
      "rejectPromise",
      "resolvePromise",
    ];

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isPromise(value)).toBeTruthy();
      } else {
        expect(isPromise(value)).toBeFalsy();
      }
    });
  });

  test("isPromiseLike", () => {
    const trueKeys: TestDataKey[] = [
      "loadingPromise",
      "rejectPromise",
      "resolvePromise",
      "promiseLike",
    ];

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isPromiseLike(value)).toBeTruthy();
      } else {
        expect(isPromiseLike(value)).toBeFalsy();
      }
    });
  });
});
