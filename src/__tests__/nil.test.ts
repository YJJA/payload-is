import { TestData, TestDataKey } from "../__test_utils__/test-data.js";
import { isNil, isNull, isUndefined } from "../nil.js";

describe("nil", () => {
  test("isUndefined", () => {
    const trueKeys: TestDataKey[] = ["undefined"];

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isUndefined(value)).toBeTruthy();
      } else {
        expect(isUndefined(value)).toBeFalsy();
      }
    });
  });

  test("isNull", () => {
    const trueKeys: TestDataKey[] = ["null"];

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isNull(value)).toBeTruthy();
      } else {
        expect(isNull(value)).toBeFalsy();
      }
    });
  });

  test("isNil", () => {
    const trueKeys: TestDataKey[] = ["undefined", "null"];

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isNil(value)).toBeTruthy();
      } else {
        expect(isNil(value)).toBeFalsy();
      }
    });
  });
});
