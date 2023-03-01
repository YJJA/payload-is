import {
  getTestDataValue,
  TestDataKey,
  TestDataKeys,
} from "../__test_utils__/test-data.js";
import { isPrimitive } from "../primitive.js";

describe("primitive", () => {
  test.each(TestDataKeys)("isPrimitive: %s", (key) => {
    const trueKeys: TestDataKey[] = [
      // string;
      "emptyString",
      "spaceString",
      "fullString",
      "underlineString",
      "templateString",
      "positiveNumberString",
      "zeroNumberString",
      "negativeNumberString",
      "NaNString",
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
      "NaN",

      // bigint
      "bigint",
      "bigint2",

      // boolean
      "true",
      "false",

      // symbol
      "symbol",
      "descSymbol",

      // nundefined null
      "undefined",
      "null",
    ];

    expect(isPrimitive(getTestDataValue(key))).toEqual(trueKeys.includes(key));
  });
});
