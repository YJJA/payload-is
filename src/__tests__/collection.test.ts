import { TestData, TestDataKey } from "../__test_utils__/test-data.js";
import {
  isSet,
  isMap,
  isWeakSet,
  isWeakMap,
  isWeakRef,
} from "../collection.js";

describe("collection", () => {
  test("isSet", () => {
    const trueKeys: TestDataKey[] = ["Set"];

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isSet(value)).toBeTruthy();
      } else {
        expect(isSet(value)).toBeFalsy();
      }
    });
  });

  test("isWeakSet", () => {
    const trueKeys: TestDataKey[] = ["WeakSet"];

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isWeakSet(value)).toBeTruthy();
      } else {
        expect(isWeakSet(value)).toBeFalsy();
      }
    });
  });

  test("isMap", () => {
    const trueKeys: TestDataKey[] = ["Map"];

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isMap(value)).toBeTruthy();
      } else {
        expect(isMap(value)).toBeFalsy();
      }
    });
  });

  test("isWeakMap", () => {
    const trueKeys: TestDataKey[] = ["WeakMap"];

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isWeakMap(value)).toBeTruthy();
      } else {
        expect(isWeakMap(value)).toBeFalsy();
      }
    });
  });

  test("isWeakRef", () => {
    const trueKeys: TestDataKey[] = ["WeakRef"];

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isWeakRef(value)).toBeTruthy();
      } else {
        expect(isWeakRef(value)).toBeFalsy();
      }
    });
  });
});
