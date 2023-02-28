import { TestData, TestDataKey } from "../__test_utils__/test-data.js";
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
  test("isError", () => {
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

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isError(value)).toBeTruthy();
      } else {
        expect(isError(value)).toBeFalsy();
      }
    });
  });

  test("isEvalError", () => {
    const trueKeys: TestDataKey[] = ["EvalError"];
    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isEvalError(value)).toBeTruthy();
      } else {
        expect(isEvalError(value)).toBeFalsy();
      }
    });
  });

  test("isRangeError", () => {
    const trueKeys: TestDataKey[] = ["RangeError"];
    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isRangeError(value)).toBeTruthy();
      } else {
        expect(isRangeError(value)).toBeFalsy();
      }
    });
  });

  test("isReferenceError", () => {
    const trueKeys: TestDataKey[] = ["ReferenceError"];
    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isReferenceError(value)).toBeTruthy();
      } else {
        expect(isReferenceError(value)).toBeFalsy();
      }
    });
  });

  test("isSyntaxError", () => {
    const trueKeys: TestDataKey[] = ["SyntaxError"];
    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isSyntaxError(value)).toBeTruthy();
      } else {
        expect(isSyntaxError(value)).toBeFalsy();
      }
    });
  });

  test("isTypeError", () => {
    const trueKeys: TestDataKey[] = ["TypeError"];
    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isTypeError(value)).toBeTruthy();
      } else {
        expect(isTypeError(value)).toBeFalsy();
      }
    });
  });

  test("isURIError", () => {
    const trueKeys: TestDataKey[] = ["URIError"];
    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isURIError(value)).toBeTruthy();
      } else {
        expect(isURIError(value)).toBeFalsy();
      }
    });
  });

  test("isNativeError", () => {
    const trueKeys: TestDataKey[] = [
      "EvalError",
      "RangeError",
      "ReferenceError",
      "SyntaxError",
      "TypeError",
      "URIError",
    ];
    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isNativeError(value)).toBeTruthy();
      } else {
        expect(isNativeError(value)).toBeFalsy();
      }
    });
  });
});
