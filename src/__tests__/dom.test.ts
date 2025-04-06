import { it, describe } from "node:test";
import assert from "node:assert/strict";
import { TestData, type TestDataKey } from "../__test_utils__/test-data.ts";
import { isBlob, isFile } from "../dom.ts";

describe("dom", () => {
  it("isBlob: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["Blob"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.equal(isBlob(val), trueKeys.includes(key as TestDataKey));
      });
    }
  });

  it("isFile: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["File"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.equal(isFile(val), trueKeys.includes(key as TestDataKey));
      });
    }
  });
});
