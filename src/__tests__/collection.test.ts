import {
  getTestDataValue,
  TestDataKey,
  TestDataKeys,
} from "../__test_utils__/test-data.js";
import {
  isSet,
  isMap,
  isWeakSet,
  isWeakMap,
  isWeakRef,
} from "../collection.js";

describe("collection", () => {
  test.each(TestDataKeys)("isSet: %s", (key) => {
    const trueKeys: TestDataKey[] = ["Set"];

    expect(isSet(getTestDataValue(key))).toEqual(trueKeys.includes(key));
  });

  test.each(TestDataKeys)("isWeakSet: %s", (key) => {
    const trueKeys: TestDataKey[] = ["WeakSet"];

    expect(isWeakSet(getTestDataValue(key))).toEqual(trueKeys.includes(key));
  });

  test.each(TestDataKeys)("isMap: %s", (key) => {
    const trueKeys: TestDataKey[] = ["Map"];

    expect(isMap(getTestDataValue(key))).toEqual(trueKeys.includes(key));
  });

  test.each(TestDataKeys)("isWeakMap: %s", (key) => {
    const trueKeys: TestDataKey[] = ["WeakMap"];

    expect(isWeakMap(getTestDataValue(key))).toEqual(trueKeys.includes(key));
  });

  test.each(TestDataKeys)("isWeakRef: %s", (key) => {
    const trueKeys: TestDataKey[] = ["WeakRef"];

    expect(isWeakRef(getTestDataValue(key))).toEqual(trueKeys.includes(key));
  });
});
