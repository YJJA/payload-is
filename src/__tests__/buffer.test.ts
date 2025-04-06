import { it, describe } from "node:test";
import assert from "node:assert/strict";
import { TestData, type TestDataKey } from "../__test_utils__/test-data.ts";
import {
  isArrayBuffer,
  isSharedArrayBuffer,
  isArrayBufferLike,
  isDataView,
  isInt8Array,
  isUint8Array,
  isUint8ClampedArray,
  isInt16Array,
  isUint16Array,
  isInt32Array,
  isUint32Array,
  isFloat32Array,
  isFloat64Array,
  isBigInt64Array,
  isBigUint64Array,
  isTypedArray,
} from "../buffer.ts";

describe("buffer", () => {
  it("isArrayBuffer: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["ArrayBuffer"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.equal(isArrayBuffer(val), trueKeys.includes(key as TestDataKey));
      });
    }
  });

  it("isSharedArrayBuffer: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["SharedArrayBuffer"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.equal(
          isSharedArrayBuffer(val),
          trueKeys.includes(key as TestDataKey)
        );
      });
    }
  });

  it("isArrayBufferLike: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["ArrayBuffer", "SharedArrayBuffer"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.equal(
          isArrayBufferLike(val),
          trueKeys.includes(key as TestDataKey)
        );
      });
    }
  });

  it("isDataView: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["DataView"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.equal(isDataView(val), trueKeys.includes(key as TestDataKey));
      });
    }
  });

  it("isInt8Array: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["Int8Array"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.equal(isInt8Array(val), trueKeys.includes(key as TestDataKey));
      });
    }
  });

  it("isUint8Array: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["Uint8Array"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.equal(isUint8Array(val), trueKeys.includes(key as TestDataKey));
      });
    }
  });

  it("isUint8ClampedArray: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["Uint8ClampedArray"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.equal(
          isUint8ClampedArray(val),
          trueKeys.includes(key as TestDataKey)
        );
      });
    }
  });

  it("isInt16Array: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["Int16Array"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.equal(isInt16Array(val), trueKeys.includes(key as TestDataKey));
      });
    }
  });

  it("isUint16Array: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["Uint16Array"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.equal(isUint16Array(val), trueKeys.includes(key as TestDataKey));
      });
    }
  });

  it("isInt32Array: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["Int32Array"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.equal(isInt32Array(val), trueKeys.includes(key as TestDataKey));
      });
    }
  });

  it("isUint32Array: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["Uint32Array"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.equal(isUint32Array(val), trueKeys.includes(key as TestDataKey));
      });
    }
  });

  it("isFloat32Array: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["Float32Array"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.equal(
          isFloat32Array(val),
          trueKeys.includes(key as TestDataKey)
        );
      });
    }
  });

  it("isFloat64Array: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["Float64Array"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.equal(
          isFloat64Array(val),
          trueKeys.includes(key as TestDataKey)
        );
      });
    }
  });

  it("isBigInt64Array: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["BigInt64Array"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.equal(
          isBigInt64Array(val),
          trueKeys.includes(key as TestDataKey)
        );
      });
    }
  });

  it("isBigUint64Array: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["BigUint64Array"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.equal(
          isBigUint64Array(val),
          trueKeys.includes(key as TestDataKey)
        );
      });
    }
  });

  it("isTypedArray: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = [
      "Int8Array",
      "Uint8Array",
      "Uint8ClampedArray",
      "Int16Array",
      "Uint16Array",
      "Int32Array",
      "Uint32Array",
      "Float32Array",
      "Float64Array",
      "BigInt64Array",
      "BigUint64Array",
    ];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.equal(isTypedArray(val), trueKeys.includes(key as TestDataKey));
      });
    }
  });
});
