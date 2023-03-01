import {
  getTestDataValue,
  TestDataKey,
  TestDataKeys,
} from "../__test_utils__/test-data.js";
import {
  isString,
  isEmptyString,
  isFullString,
  isStringObject,
} from "../string.js";

describe("string", () => {
  test.each(TestDataKeys)("isString: %s", (key) => {
    const trueKeys: TestDataKey[] = [
      "emptyString",
      "spaceString",
      "fullString",
      "underlineString",
      "templateString",
      "positiveNumberString",
      "zeroNumberString",
      "negativeNumberString",
      "NaNString",
      "bigintString",
      "trueString",
      "falseString",
      "symbolString",
      "undefinedString",
      "nullString",
      "arrayString",
      "emptyArrayString",
      "objectString",
      "emptyObjectString",
    ];

    expect(isString(getTestDataValue(key))).toEqual(trueKeys.includes(key));
  });

  test.each(TestDataKeys)("isEmptyString: %s", (key) => {
    const trueKeys: TestDataKey[] = ["emptyString"];

    expect(isEmptyString(getTestDataValue(key))).toEqual(
      trueKeys.includes(key)
    );
  });

  test.each(TestDataKeys)("isFullString: %s", (key) => {
    const trueKeys: TestDataKey[] = [
      "spaceString",
      "fullString",
      "underlineString",
      "templateString",
      "positiveNumberString",
      "zeroNumberString",
      "negativeNumberString",
      "NaNString",
      "bigintString",
      "trueString",
      "falseString",
      "symbolString",
      "undefinedString",
      "nullString",
      "arrayString",
      "emptyArrayString",
      "objectString",
      "emptyObjectString",
    ];

    expect(isFullString(getTestDataValue(key))).toEqual(trueKeys.includes(key));
  });

  test.each(TestDataKeys)("isStringObject: %s", (key) => {
    const trueKeys: TestDataKey[] = [
      "stringObject",
      "string2Object",
      "string3Object",
    ];

    expect(isStringObject(getTestDataValue(key))).toEqual(
      trueKeys.includes(key)
    );
  });
});
