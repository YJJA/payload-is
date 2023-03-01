import {
  getTestDataValue,
  TestDataKey,
  TestDataKeys,
} from "../__test_utils__/test-data.js";
import { isNil, isNull, isUndefined } from "../nil.js";

describe("nil", () => {
  test.each(TestDataKeys)("isUndefined: %s", (key) => {
    const trueKeys: TestDataKey[] = ["undefined"];

    expect(isUndefined(getTestDataValue(key))).toEqual(trueKeys.includes(key));
  });

  test.each(TestDataKeys)("isNull: %s", (key) => {
    const trueKeys: TestDataKey[] = ["null"];

    expect(isNull(getTestDataValue(key))).toEqual(trueKeys.includes(key));
  });

  test.each(TestDataKeys)("isNil: %s", (key) => {
    const trueKeys: TestDataKey[] = ["undefined", "null"];

    expect(isNil(getTestDataValue(key))).toEqual(trueKeys.includes(key));
  });
});
