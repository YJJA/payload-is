import {
  getTestDataValue,
  TestDataKey,
  TestDataKeys,
} from "../__test_utils__/test-data.js";
import { isSymbol, isSymbolObject } from "../symbol.js";

describe("symbol", () => {
  test.each(TestDataKeys)("isSymbol: %s", (key) => {
    const trueKeys: TestDataKey[] = ["symbol", "descSymbol"];

    expect(isSymbol(getTestDataValue(key))).toEqual(trueKeys.includes(key));
  });

  test.each(TestDataKeys)("isSymbolObject: %s", (key) => {
    const trueKeys: TestDataKey[] = ["symbolObject", "symbol2Object"];

    expect(isSymbolObject(getTestDataValue(key))).toEqual(
      trueKeys.includes(key)
    );
  });
});
