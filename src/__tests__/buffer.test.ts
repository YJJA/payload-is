import assert from "node:assert/strict";
import { it, describe } from "node:test";
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
        assert.strictEqual(
          isArrayBuffer(val),
          trueKeys.includes(key as TestDataKey),
        );
      });
    }
  });

  it("isSharedArrayBuffer: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["SharedArrayBuffer"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.strictEqual(
          isSharedArrayBuffer(val),
          trueKeys.includes(key as TestDataKey),
        );
      });
    }
  });

  it("isArrayBufferLike: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["ArrayBuffer", "SharedArrayBuffer"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.strictEqual(
          isArrayBufferLike(val),
          trueKeys.includes(key as TestDataKey),
        );
      });
    }
  });

  it("isDataView: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["DataView"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.strictEqual(
          isDataView(val),
          trueKeys.includes(key as TestDataKey),
        );
      });
    }
  });

  it("isInt8Array: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["Int8Array"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.strictEqual(
          isInt8Array(val),
          trueKeys.includes(key as TestDataKey),
        );
      });
    }
  });

  it("isUint8Array: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["Uint8Array"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.strictEqual(
          isUint8Array(val),
          trueKeys.includes(key as TestDataKey),
        );
      });
    }
  });

  it("isUint8ClampedArray: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["Uint8ClampedArray"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.strictEqual(
          isUint8ClampedArray(val),
          trueKeys.includes(key as TestDataKey),
        );
      });
    }
  });

  it("isInt16Array: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["Int16Array"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.strictEqual(
          isInt16Array(val),
          trueKeys.includes(key as TestDataKey),
        );
      });
    }
  });

  it("isUint16Array: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["Uint16Array"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.strictEqual(
          isUint16Array(val),
          trueKeys.includes(key as TestDataKey),
        );
      });
    }
  });

  it("isInt32Array: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["Int32Array"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.strictEqual(
          isInt32Array(val),
          trueKeys.includes(key as TestDataKey),
        );
      });
    }
  });

  it("isUint32Array: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["Uint32Array"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.strictEqual(
          isUint32Array(val),
          trueKeys.includes(key as TestDataKey),
        );
      });
    }
  });

  it("isFloat32Array: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["Float32Array"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.strictEqual(
          isFloat32Array(val),
          trueKeys.includes(key as TestDataKey),
        );
      });
    }
  });

  it("isFloat64Array: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["Float64Array"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.strictEqual(
          isFloat64Array(val),
          trueKeys.includes(key as TestDataKey),
        );
      });
    }
  });

  it("isBigInt64Array: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["BigInt64Array"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.strictEqual(
          isBigInt64Array(val),
          trueKeys.includes(key as TestDataKey),
        );
      });
    }
  });

  it("isBigUint64Array: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = ["BigUint64Array"];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.strictEqual(
          isBigUint64Array(val),
          trueKeys.includes(key as TestDataKey),
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
        assert.strictEqual(
          isTypedArray(val),
          trueKeys.includes(key as TestDataKey),
        );
      });
    }
  });
});
