import {
  getTestDataValue,
  TestDataKey,
  TestDataKeys,
} from "../__test_utils__/test-data.js";
import { isBigInt, isBigIntObject } from "../bigint.js";

describe("bigint", () => {
  test.each(TestDataKeys)("isBigInt: %s", (key) => {
    const trueKeys: TestDataKey[] = ["bigint", "bigint2"];

    expect(isBigInt(getTestDataValue(key))).toEqual(trueKeys.includes(key));
  });

  test.each(TestDataKeys)("isBigIntObject: %s", (key) => {
    const trueKeys: TestDataKey[] = ["bigintObject", "bigint2Object"];

    expect(isBigIntObject(getTestDataValue(key))).toEqual(
      trueKeys.includes(key)
    );
  });
});
