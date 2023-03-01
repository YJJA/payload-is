import {
  getTestDataValue,
  TestDataKey,
  TestDataKeys,
} from "../__test_utils__/test-data.js";
import {
  isEmptyObject,
  isFullObject,
  isObject,
  isPlainObject,
} from "../object.js";

describe("object", () => {
  test.each(TestDataKeys)("isObject: %s", (key) => {
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

    expect(isObject(getTestDataValue(key))).toEqual(trueKeys.includes(key));
  });

  test.each(TestDataKeys)("isPlainObject: %s", (key) => {
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
    ];

    expect(isPlainObject(getTestDataValue(key))).toEqual(
      trueKeys.includes(key)
    );
  });

  test.each(TestDataKeys)("isEmptyObject: %s", (key) => {
    const trueKeys: TestDataKey[] = [
      // object
      "emptyObject",
      "newObject",
      "nullObject",
      "newEmptyObject",
    ];

    expect(isEmptyObject(getTestDataValue(key))).toEqual(
      trueKeys.includes(key)
    );
  });

  test.each(TestDataKeys)("isFullObject: %s", (key) => {
    const trueKeys: TestDataKey[] = [
      // object
      "fullObject",
      "emptyNumberObject",
      "emptyStringObject",

      // promiseLike
      "promiseLike",
    ];

    expect(isFullObject(getTestDataValue(key))).toEqual(trueKeys.includes(key));
  });
});
