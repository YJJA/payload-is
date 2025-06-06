import { it, describe } from "node:test";
import assert from "node:assert/strict";
import { TestData, type TestDataKey } from "../__test_utils__/test-data.ts";
import {
  isEmptyObject,
  isFullObject,
  isObject,
  isPlainObject,
} from "../object.ts";

describe("object", () => {
  it("isObject: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = [
      // string
      "stringObject",
      "string2Object",
      "string3Object",

      // nnumber
      "numberObject",
      "number2Object",
      "number3Object",

      // boolean
      "booleanObject",
      "boolean2Object",
      "boolean3Object",

      // bigint
      "bigintObject",
      "bigint2Object",

      // symbol
      "symbolObject",
      "symbol2Object",

      // array
      "emptyArray",
      "prototypeArray",
      "emptyNewArray",
      "emptyZeroArray",
      "numberArray",
      "stringArray",
      "emptyStringArray",
      "stringMoreArray",
      "undefinedArray",
      "undefinedMoreArray",
      "numberNewArray",
      "stringNewArray",
      "stringNewMoreArray",

      // object
      "emptyObject",
      "fullObject",
      "newObject",
      "nullObject",
      "newEmptyObject",
      "emptyNumberObject",
      "emptyStringObject",
      "constructorObject",
      "customClassObject",

      // date
      "nowDate",
      "invalidDate",
      "formatDate",

      // promise
      "loadingPromise",
      "rejectPromise",
      "resolvePromise",

      // promiseLike
      "promiseLike",

      // generator
      "Generator",
      "AsyncGenerator",
      "IteratorObject",
      "AsyncIteratorObject",

      "ArrayIterator",
      "StringIterator",
      "MapIterator",
      "SetIterator",

      // RegExp
      "numberRegExp",
      "globalRegExp",
      "newRegExp",

      // error
      "Error",
      "CustomError",
      "EvalError",
      "RangeError",
      "ReferenceError",
      "SyntaxError",
      "TypeError",
      "URIError",

      // collection
      "Set",
      "WeakSet",
      "Map",
      "WeakMap",
      "WeakRef",

      // buffer
      "DataView",
      "ArrayBuffer",
      "SharedArrayBuffer",

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

      // object
      "Blob",
      "File",
    ];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.strictEqual(
          isObject(val),
          trueKeys.includes(key as TestDataKey),
        );
      });
    }
  });

  it("isPlainObject: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = [
      // object
      "emptyObject",
      "fullObject",
      "newObject",
      "nullObject",
      "newEmptyObject",
      "emptyNumberObject",
      "emptyStringObject",

      // promiseLike
      "promiseLike",

      "IteratorObject",
      "AsyncIteratorObject",
    ];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.strictEqual(
          isPlainObject(val),
          trueKeys.includes(key as TestDataKey),
        );
      });
    }
  });

  it("isEmptyObject: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = [
      // object
      "emptyObject",
      "newObject",
      "nullObject",
      "newEmptyObject",

      "IteratorObject",
      "AsyncIteratorObject",
    ];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.strictEqual(
          isEmptyObject(val),
          trueKeys.includes(key as TestDataKey),
        );
      });
    }
  });

  it("isFullObject: ", { concurrency: true }, (t) => {
    const trueKeys: TestDataKey[] = [
      // object
      "fullObject",
      "emptyNumberObject",
      "emptyStringObject",

      // promiseLike
      "promiseLike",
    ];

    for (const [key, val] of Object.entries(TestData)) {
      t.test(key, () => {
        assert.strictEqual(
          isFullObject(val),
          trueKeys.includes(key as TestDataKey),
        );
      });
    }
  });
});
