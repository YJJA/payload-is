import { it, describe } from "node:test";
import assert from "node:assert/strict";
import { TestData, type TestDataKey } from "../__test_utils__/test-data.ts";
import {
  isSet,
  isMap,
  isWeakSet,
  isWeakMap,
  isWeakRef,
} from "../collection.ts";

describe("collection", () => {
  it("isSet: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["Set"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.strictEqual(isSet(val), trueKeys.includes(key as TestDataKey));
      });
    }
  });

  it("isWeakSet: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["WeakSet"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.strictEqual(
          isWeakSet(val),
          trueKeys.includes(key as TestDataKey)
        );
      });
    }
  });

  it("isMap: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["Map"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.strictEqual(isMap(val), trueKeys.includes(key as TestDataKey));
      });
    }
  });

  it("isWeakMap: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["WeakMap"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.strictEqual(
          isWeakMap(val),
          trueKeys.includes(key as TestDataKey)
        );
      });
    }
  });

  it("isWeakRef: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["WeakRef"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.strictEqual(
          isWeakRef(val),
          trueKeys.includes(key as TestDataKey)
        );
      });
    }
  });
});
