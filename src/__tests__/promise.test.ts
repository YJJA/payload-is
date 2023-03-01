import {
  getTestDataValue,
  TestDataKey,
  TestDataKeys,
} from "../__test_utils__/test-data.js";
import { isPromise, isPromiseLike } from "../promise.js";

describe("promise", () => {
  test.each(TestDataKeys)("isPromise: %s", (key) => {
    const trueKeys: TestDataKey[] = [
      "loadingPromise",
      "rejectPromise",
      "resolvePromise",
    ];

    expect(isPromise(getTestDataValue(key))).toEqual(trueKeys.includes(key));
  });

  test.each(TestDataKeys)("isPromiseLike: %s", (key) => {
    const trueKeys: TestDataKey[] = [
      "loadingPromise",
      "rejectPromise",
      "resolvePromise",
      "promiseLike",
    ];

    expect(isPromiseLike(getTestDataValue(key))).toEqual(
      trueKeys.includes(key)
    );
  });
});
