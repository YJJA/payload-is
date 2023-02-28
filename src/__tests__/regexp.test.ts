import { TestData, TestDataKey } from "../__test_utils__/test-data.js";
import { isRegExp } from "../regexp.js";

describe("regexp", () => {
  test("isRegExp", () => {
    const trueKeys: TestDataKey[] = [
      "numberRegExp",
      "globalRegExp",
      "newRegExp",
    ];

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isRegExp(value)).toBeTruthy();
      } else {
        expect(isRegExp(value)).toBeFalsy();
      }
    });
  });
});
