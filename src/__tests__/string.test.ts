import { TestData, TestDataKey } from "../__test_utils__/test-data.js";
import {
  isString,
  isEmptyString,
  isFullString,
  isStringObject,
} from "../string.js";

describe("string", () => {
  test("isString", () => {
    const trueKeys: TestDataKey[] = [
      "emptyString",
      "spaceString",
      "fullString",
      "xhxString",
      "tempString",
      "invalidString",
      "positiveNumberString",
      "zeroNumberString",
      "negativeNumberString",
      "NANString",
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

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isString(value)).toBeTruthy();
      } else {
        expect(isString(value)).toBeFalsy();
      }
    });
  });

  test("isEmptyString", () => {
    const trueKeys: (keyof typeof TestData)[] = ["emptyString"];

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isEmptyString(value)).toBeTruthy();
      } else {
        expect(isEmptyString(value)).toBeFalsy();
      }
    });
  });

  test("isFullString", () => {
    const trueKeys: (keyof typeof TestData)[] = [
      "spaceString",
      "fullString",
      "xhxString",
      "tempString",
      "invalidString",
      "positiveNumberString",
      "zeroNumberString",
      "negativeNumberString",
      "NANString",
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

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isFullString(value)).toBeTruthy();
      } else {
        expect(isFullString(value)).toBeFalsy();
      }
    });
  });

  test("isStringObject", () => {
    const trueKeys: (keyof typeof TestData)[] = ["stringObejct"];

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isStringObject(value)).toBeTruthy();
      } else {
        expect(isStringObject(value)).toBeFalsy();
      }
    });
  });
});
