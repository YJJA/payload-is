import { TestData, TestDataKey } from "../__test_utils__/test-data.js";
import { isBigInt, isBigIntObject } from "../bigint.js";

describe("bigint", () => {
  test("isBigInt", () => {
    const trueKeys: TestDataKey[] = ["bigint"];

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isBigInt(value)).toBeTruthy();
      } else {
        expect(isBigInt(value)).toBeFalsy();
      }
    });
  });

  test("isBigIntObject", () => {
    const trueKeys: TestDataKey[] = ["bigintObject"];

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isBigIntObject(value)).toBeTruthy();
      } else {
        expect(isBigIntObject(value)).toBeFalsy();
      }
    });
  });
});
