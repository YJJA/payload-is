import { TestData, TestDataKey } from "../__test_utils__/test-data.js";
import { isPrimitive } from "../primitive.js";

describe("primitive", () => {
  test("isPrimitive", () => {
    const trueKeys: TestDataKey[] = [
      // string;
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

      // number
      "positiveNumber",
      "zeroNumber",
      "negativeNumber",
      "MAX_VALUENumber",
      "MIN_VALUENumber",
      "InfinityNumber",
      "NAN",
      "bigint",

      // boolean
      "true",
      "false",

      // symbol
      "defaultSymbol",
      "descSymbol",

      // nundefined null
      "undefined",
      "null",
    ];

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isPrimitive(value)).toBeTruthy();
      } else {
        expect(isPrimitive(value)).toBeFalsy();
      }
    });
  });
});
