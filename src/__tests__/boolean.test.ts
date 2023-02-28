import { TestData, TestDataKey } from "../__test_utils__/test-data.js";
import { isBoolen, isBooleanObject, isTrue, isFalse } from "../boolean.js";

describe("boolean", () => {
  test("isBoolen", () => {
    const trueKeys: TestDataKey[] = ["true", "false"];

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isBoolen(value)).toBeTruthy();
      } else {
        expect(isBoolen(value)).toBeFalsy();
      }
    });
  });

  test("isTrue", () => {
    const trueKeys: TestDataKey[] = ["true"];

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isTrue(value)).toBeTruthy();
      } else {
        expect(isTrue(value)).toBeFalsy();
      }
    });
  });

  test("isFalse", () => {
    const trueKeys: TestDataKey[] = ["false"];

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isFalse(value)).toBeTruthy();
      } else {
        expect(isFalse(value)).toBeFalsy();
      }
    });
  });

  test("isBooleanObject", () => {
    const trueKeys: TestDataKey[] = ["trueObject", "falseObject"];

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isBooleanObject(value)).toBeTruthy();
      } else {
        expect(isBooleanObject(value)).toBeFalsy();
      }
    });
  });
});
