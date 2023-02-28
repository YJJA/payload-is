import { TestData, TestDataKey } from "../__test_utils__/test-data.js";
import { isSymbol, isSymbolObject } from "../symbol.js";

describe("symbol", () => {
  test("isSymbol", () => {
    const trueKeys: TestDataKey[] = ["defaultSymbol", "descSymbol"];

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isSymbol(value)).toBeTruthy();
      } else {
        expect(isSymbol(value)).toBeFalsy();
      }
    });
  });

  test("isSymbolObject", () => {
    const trueKeys: TestDataKey[] = ["symbolObject"];

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isSymbolObject(value)).toBeTruthy();
      } else {
        expect(isSymbolObject(value)).toBeFalsy();
      }
    });
  });
});
