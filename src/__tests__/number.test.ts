import {
  getTestDataValue,
  TestDataKey,
  TestDataKeys,
} from "../__test_utils__/test-data.js";
import {
  isInvalidNumber,
  isNumber,
  isNumberObject,
  isValidNumber,
} from "../number.js";

describe("number", () => {
  test.each(TestDataKeys)("isNumber: %s", (key) => {
    const trueKeys: TestDataKey[] = [
      "positiveNumber",
      "zeroNumber",
      "negativeNumber",
      "MAX_VALUENumber",
      "MIN_VALUENumber",
      "InfinityNumber",
      "NaN",
    ];

    expect(isNumber(getTestDataValue(key))).toEqual(trueKeys.includes(key));
  });

  test.each(TestDataKeys)("isValidNumber: %s", (key) => {
    const trueKeys: TestDataKey[] = [
      "positiveNumber",
      "zeroNumber",
      "negativeNumber",
      "MAX_VALUENumber",
      "MIN_VALUENumber",
      "InfinityNumber",
    ];

    expect(isValidNumber(getTestDataValue(key))).toEqual(
      trueKeys.includes(key)
    );
  });

  test.each(TestDataKeys)("isInvalidNumber: %s", (key) => {
    const trueKeys: TestDataKey[] = ["NaN"];

    expect(isInvalidNumber(getTestDataValue(key))).toEqual(
      trueKeys.includes(key)
    );
  });

  test.each(TestDataKeys)("isNumberObject: %s", (key) => {
    const trueKeys: TestDataKey[] = [
      "numberObject",
      "number2Object",
      "number3Object",
    ];

    expect(isNumberObject(getTestDataValue(key))).toEqual(
      trueKeys.includes(key)
    );
  });
});
