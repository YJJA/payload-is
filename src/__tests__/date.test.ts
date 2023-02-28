import { TestData, TestDataKey } from "../__test_utils__/test-data.js";
import { isDate, isInvalidDate, isValidDate } from "../date.js";

describe("date", () => {
  test("isDate", () => {
    const trueKeys: TestDataKey[] = ["nowDate", "invalidDate", "formatData"];

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isDate(value)).toBeTruthy();
      } else {
        expect(isDate(value)).toBeFalsy();
      }
    });
  });

  test("isValidDate", () => {
    const trueKeys: TestDataKey[] = ["nowDate", "formatData"];

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isValidDate(value)).toBeTruthy();
      } else {
        expect(isValidDate(value)).toBeFalsy();
      }
    });
  });

  test("isInvalidDate", () => {
    const trueKeys: TestDataKey[] = ["invalidDate"];

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isInvalidDate(value)).toBeTruthy();
      } else {
        expect(isInvalidDate(value)).toBeFalsy();
      }
    });
  });
});
