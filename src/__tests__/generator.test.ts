import {
  getTestDataValue,
  TestDataKey,
  TestDataKeys,
} from "../__test_utils__/test-data.js";
import { isAsyncGenerator, isGenerator } from "../generator.js";

describe("generator", () => {
  test.each(TestDataKeys)("isGenerator: %s", (key) => {
    const trueKeys: TestDataKey[] = ["Generator"];

    expect(isGenerator(getTestDataValue(key))).toEqual(trueKeys.includes(key));
  });

  test.each(TestDataKeys)("isAsyncGenerator: %s", (key) => {
    const trueKeys: TestDataKey[] = ["AsyncGenerator"];

    expect(isAsyncGenerator(getTestDataValue(key))).toEqual(
      trueKeys.includes(key)
    );
  });
});
