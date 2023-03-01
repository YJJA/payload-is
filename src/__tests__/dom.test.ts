import {
  getTestDataValue,
  TestDataKey,
  TestDataKeys,
} from "../__test_utils__/test-data.js";
import { isBlob, isFile } from "../dom.js";

describe("dom", () => {
  test.each(TestDataKeys)("isBlob: %s", (key) => {
    const trueKeys: TestDataKey[] = ["Blob"];

    expect(isBlob(getTestDataValue(key))).toEqual(trueKeys.includes(key));
  });

  test.each(TestDataKeys)("isFile: %s", (key) => {
    const trueKeys: TestDataKey[] = ["File"];

    expect(isFile(getTestDataValue(key))).toEqual(trueKeys.includes(key));
  });
});
