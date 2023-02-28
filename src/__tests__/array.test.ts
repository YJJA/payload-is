import { TestData, TestDataKey } from "../__test_utils__/test-data.js";
import { isArray, isEmptyArray, isFullArray } from "../array.js";

describe("array", () => {
  test("isArray", () => {
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

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isArray(value)).toBeTruthy();
      } else {
        expect(isArray(value)).toBeFalsy();
      }
    });
  });

  test("isEmptyArray", () => {
    const trueKeys: TestDataKey[] = [
      "emptyArray",
      "prototypeArray",
      "emptyNewArray",
      "emptyZeroArray",
    ];

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isEmptyArray(value)).toBeTruthy();
      } else {
        expect(isEmptyArray(value)).toBeFalsy();
      }
    });
  });

  test("isFullArray", () => {
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

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isFullArray(value)).toBeTruthy();
      } else {
        expect(isFullArray(value)).toBeFalsy();
      }
    });
  });
});
