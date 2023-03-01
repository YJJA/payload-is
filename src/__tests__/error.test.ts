import {
  getTestDataValue,
  TestDataKey,
  TestDataKeys,
} from "../__test_utils__/test-data.js";
import {
  isError,
  isEvalError,
  isNativeError,
  isRangeError,
  isReferenceError,
  isSyntaxError,
  isTypeError,
  isURIError,
} from "../error.js";

describe("error", () => {
  test.each(TestDataKeys)("isError: %s", (key) => {
    const trueKeys: TestDataKey[] = [
      "Error",
      "CustomError",
      "EvalError",
      "RangeError",
      "ReferenceError",
      "SyntaxError",
      "TypeError",
      "URIError",
    ];

    expect(isError(getTestDataValue(key))).toEqual(trueKeys.includes(key));
  });

  test.each(TestDataKeys)("isEvalError: %s", (key) => {
    const trueKeys: TestDataKey[] = ["EvalError"];

    expect(isEvalError(getTestDataValue(key))).toEqual(trueKeys.includes(key));
  });

  test.each(TestDataKeys)("isRangeError: %s", (key) => {
    const trueKeys: TestDataKey[] = ["RangeError"];

    expect(isRangeError(getTestDataValue(key))).toEqual(trueKeys.includes(key));
  });

  test.each(TestDataKeys)("isReferenceError: %s", (key) => {
    const trueKeys: TestDataKey[] = ["ReferenceError"];

    expect(isReferenceError(getTestDataValue(key))).toEqual(
      trueKeys.includes(key)
    );
  });

  test.each(TestDataKeys)("isSyntaxError: %s", (key) => {
    const trueKeys: TestDataKey[] = ["SyntaxError"];

    expect(isSyntaxError(getTestDataValue(key))).toEqual(
      trueKeys.includes(key)
    );
  });

  test.each(TestDataKeys)("isTypeError: %s", (key) => {
    const trueKeys: TestDataKey[] = ["TypeError"];

    expect(isTypeError(getTestDataValue(key))).toEqual(trueKeys.includes(key));
  });

  test.each(TestDataKeys)("isURIError: %s", (key) => {
    const trueKeys: TestDataKey[] = ["URIError"];

    expect(isURIError(getTestDataValue(key))).toEqual(trueKeys.includes(key));
  });

  test.each(TestDataKeys)("isNativeError: %s", (key) => {
    const trueKeys: TestDataKey[] = [
      "EvalError",
      "RangeError",
      "ReferenceError",
      "SyntaxError",
      "TypeError",
      "URIError",
    ];

    expect(isNativeError(getTestDataValue(key))).toEqual(
      trueKeys.includes(key)
    );
  });
});
