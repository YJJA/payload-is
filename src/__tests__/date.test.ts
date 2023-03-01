import {
  getTestDataValue,
  TestDataKey,
  TestDataKeys,
} from "../__test_utils__/test-data.js";
import { isDate, isInvalidDate, isValidDate } from "../date.js";

describe("date", () => {
  test.each(TestDataKeys)("isDate: %s", (key) => {
    const trueKeys: TestDataKey[] = ["nowDate", "invalidDate", "formatDate"];

    expect(isDate(getTestDataValue(key))).toEqual(trueKeys.includes(key));
  });

  test.each(TestDataKeys)("isValidDate: %s", (key) => {
    const trueKeys: TestDataKey[] = ["nowDate", "formatDate"];

    expect(isValidDate(getTestDataValue(key))).toEqual(trueKeys.includes(key));
  });

  test.each(TestDataKeys)("isInvalidDate: %s", (key) => {
    const trueKeys: TestDataKey[] = ["invalidDate"];

    expect(isInvalidDate(getTestDataValue(key))).toEqual(
      trueKeys.includes(key)
    );
  });
});
