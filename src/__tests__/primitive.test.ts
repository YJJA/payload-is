import assert from "node:assert/strict";
import { it, describe } from "node:test";
import { TestData, type TestDataKey } from "../__test_utils__/test-data.ts";
import { isPrimitive } from "../primitive.ts";

describe("primitive", () => {
  it("isPrimitive: ", { concurrency: true }, (t) => {
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

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.strictEqual(
          isPrimitive(val),
          trueKeys.includes(key as TestDataKey),
        );
      });
    }
  });
});
