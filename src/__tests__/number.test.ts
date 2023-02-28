import { TestData, TestDataKey } from "../__test_utils__/test-data.js";
import {
  isInvalidNumber,
  isNumber,
  isNumberObject,
  isValidNumber,
} from "../number.js";

describe("number", () => {
  test("isNumber", () => {
    const trueKeys: TestDataKey[] = [
      "positiveNumber",
      "zeroNumber",
      "negativeNumber",
      "MAX_VALUENumber",
      "MIN_VALUENumber",
      "InfinityNumber",
      "NAN",
    ];

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isNumber(value)).toBeTruthy();
      } else {
        expect(isNumber(value)).toBeFalsy();
      }
    });
  });

  test("isValidNumber", () => {
    const trueKeys: TestDataKey[] = [
      "positiveNumber",
      "zeroNumber",
      "negativeNumber",
      "MAX_VALUENumber",
      "MIN_VALUENumber",
      "InfinityNumber",
    ];

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isValidNumber(value)).toBeTruthy();
      } else {
        expect(isValidNumber(value)).toBeFalsy();
      }
    });
  });

  test("isInvalidNumber", () => {
    const trueKeys: TestDataKey[] = ["NAN"];

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isInvalidNumber(value)).toBeTruthy();
      } else {
        expect(isInvalidNumber(value)).toBeFalsy();
      }
    });
  });

  test("isNumberObject", () => {
    const trueKeys: TestDataKey[] = ["numberObject"];

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isNumberObject(value)).toBeTruthy();
      } else {
        expect(isNumberObject(value)).toBeFalsy();
      }
    });
  });
});
