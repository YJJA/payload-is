import {
  getTestDataValue,
  TestDataKey,
  TestDataKeys,
} from "../__test_utils__/test-data.js";
import { isArray, isEmptyArray, isFullArray } from "../array.js";

describe("array", () => {
  test.each(TestDataKeys)("isArray: %s", (key) => {
    const trueKeys: TestDataKey[] = [
      "emptyArray",
      "prototypeArray",
      "emptyNewArray",
      "emptyZeroArray",
      "numberArray",
      "stringArray",
      "emptyStringArray",
      "stringMoreArray",
      "undefinedArray",
      "undefinedMoreArray",
      "numberNewArray",
      "stringNewArray",
      "stringNewMoreArray",
    ];

    expect(isArray(getTestDataValue(key))).toEqual(trueKeys.includes(key));
  });

  test.each(TestDataKeys)("isEmptyArray: %s", (key) => {
    const trueKeys: TestDataKey[] = [
      "emptyArray",
      "prototypeArray",
      "emptyNewArray",
      "emptyZeroArray",
    ];

    expect(isEmptyArray(getTestDataValue(key))).toEqual(trueKeys.includes(key));
  });

  test.each(TestDataKeys)("isFullArray: %s", (key) => {
    const trueKeys: TestDataKey[] = [
      "numberArray",
      "stringArray",
      "emptyStringArray",
      "stringMoreArray",
      "undefinedArray",
      "undefinedMoreArray",
      "numberNewArray",
      "stringNewArray",
      "stringNewMoreArray",
    ];

    expect(isFullArray(getTestDataValue(key))).toEqual(trueKeys.includes(key));
  });
});
