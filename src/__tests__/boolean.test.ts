import {
  getTestDataValue,
  TestDataKey,
  TestDataKeys,
} from "../__test_utils__/test-data.js";
import { isBoolen, isBooleanObject, isTrue, isFalse } from "../boolean.js";

describe("boolean", () => {
  test.each(TestDataKeys)("isBoolen: %s", (key) => {
    const trueKeys: TestDataKey[] = ["true", "false"];

    expect(isBoolen(getTestDataValue(key))).toEqual(trueKeys.includes(key));
  });

  test.each(TestDataKeys)("isTrue: %s", (key) => {
    const trueKeys: TestDataKey[] = ["true"];

    expect(isTrue(getTestDataValue(key))).toEqual(trueKeys.includes(key));
  });

  test.each(TestDataKeys)("isFalse: %s", (key) => {
    const trueKeys: TestDataKey[] = ["false"];

    expect(isFalse(getTestDataValue(key))).toEqual(trueKeys.includes(key));
  });

  test.each(TestDataKeys)("isBooleanObject: %s", (key) => {
    const trueKeys: TestDataKey[] = [
      "booleanObject",
      "boolean2Object",
      "boolean3Object",
    ];

    expect(isBooleanObject(getTestDataValue(key))).toEqual(
      trueKeys.includes(key)
    );
  });
});
