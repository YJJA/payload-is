import { TestData, TestDataKey } from "../__test_utils__/test-data.js";
import { isBlob, isFile } from "../dom.js";

describe("dom", () => {
  test("isBlob", () => {
    const trueKeys: TestDataKey[] = ["Blob"];

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isBlob(value)).toBeTruthy();
      } else {
        expect(isBlob(value)).toBeFalsy();
      }
    });
  });

  test("isFile", () => {
    const trueKeys: TestDataKey[] = ["File"];

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isFile(value)).toBeTruthy();
      } else {
        expect(isFile(value)).toBeFalsy();
      }
    });
  });
});
