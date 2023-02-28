import { TestData, TestDataKey } from "../__test_utils__/test-data.js";
import {
  isEmptyObject,
  isFullObject,
  isObject,
  isPlainObject,
} from "../object.js";

describe("object", () => {
  test("isObject", () => {
    const trueKeys: TestDataKey[] = [
      // string
      "stringObejct",

      // nnumber
      "numberObject",

      // bigint
      "bigintObject",

      // boolean
      "trueObject",
      "falseObject",

      // symbol
      "symbolObject",

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
      "myClassObject",

      // date
      "nowDate",
      "invalidDate",
      "formatData",

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

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isObject(value)).toBeTruthy();
      } else {
        expect(isObject(value)).toBeFalsy();
      }
    });
  });

  test("isPlainObject", () => {
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

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isPlainObject(value)).toBeTruthy();
      } else {
        expect(isPlainObject(value)).toBeFalsy();
      }
    });
  });

  test("isEmptyObject", () => {
    const trueKeys: TestDataKey[] = [
      // object
      "emptyObject",
      "newObject",
      "nullObject",
      "newEmptyObject",
    ];

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isEmptyObject(value)).toBeTruthy();
      } else {
        expect(isEmptyObject(value)).toBeFalsy();
      }
    });
  });

  test("isFullObject", () => {
    const trueKeys: TestDataKey[] = [
      // object
      "fullObject",
      // "newObject",
      // "nullObject",
      // "newEmptyObject",
      "emptyNumberObject",
      "emptyStringObject",

      // promiseLike
      "promiseLike",
    ];

    Object.keys(TestData).forEach((key: any) => {
      const value = Reflect.get(TestData, key);
      if (trueKeys.includes(key)) {
        expect(isFullObject(value)).toBeTruthy();
      } else {
        expect(isFullObject(value)).toBeFalsy();
      }
    });
  });
});
