import { it, describe } from "node:test";
import assert from "node:assert/strict";
import { TestData, type TestDataKey } from "../__test_utils__/test-data.ts";
import { isSymbol, isSymbolObject } from "../symbol.ts";

describe("symbol", () => {
  it("isSymbol: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["symbol", "descSymbol"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.strictEqual(
          isSymbol(val),
          trueKeys.includes(key as TestDataKey),
        );
      });
    }
  });

  it("isSymbolObject: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["symbolObject", "symbol2Object"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.strictEqual(
          isSymbolObject(val),
          trueKeys.includes(key as TestDataKey),
        );
      });
    }
  });
});
