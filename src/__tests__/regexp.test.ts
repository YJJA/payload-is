import {
  getTestDataValue,
  TestDataKey,
  TestDataKeys,
} from "../__test_utils__/test-data.js";
import { isRegExp } from "../regexp.js";

describe("regexp", () => {
  test.each(TestDataKeys)("isRegExp: %s", (key) => {
    const trueKeys: TestDataKey[] = [
      "numberRegExp",
      "globalRegExp",
      "newRegExp",
    ];

    expect(isRegExp(getTestDataValue(key))).toEqual(trueKeys.includes(key));
  });
});
