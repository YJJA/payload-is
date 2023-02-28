<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">Payload is ?</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/YJJA/payload-is.svg)](https://github.com/YJJA/payload-is/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/YJJA/payload-is.svg)](https://github.com/YJJA/payload-is/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> Javascript Data Check (Typescript)
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [TODO](../TODO.md)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

简洁的 JS （Javascript）数据校验方法。支持 Typescript。无其他依赖。

## 🏁 Getting Started <a name = "getting_started"></a>

### Installing

```
npm install payload-is
```

## Usage

```js
import { isObject, isPlainObject } from "payload-is";
```

```js
// array
isArray([]); // true
isEmptyArray([]); // true
isFullArray([1]); // true

// bigint
isBigInt(1n); // true
isBigIntObject(Object(1n)); // true

// boolean
isBoolen(true); // true
isBooleanObject(new Boolean(true)); // true
isTrue(true); // true
isFalse(false); // true

// collection
isSet(new Set()); // true
isMap(new Map()); // true
isWeakSet(new WeakSet()); // true
isWeakMap(new WeakMap()); // true
isWeakRef(new WeakRef()); // true

// date
isDate(new Date()); //true
isValidDate(new Date(2022, 2, 22)); // true
isInvalidDate(new Date("InvalidDate")); // true

// error
isError(new Error("mesage")); //true
isEvalError(new EvalError("mesage"));
isRangeError(new RangeError("mesage"));
isReferenceError(new ReferenceError("mesage"));
isSyntaxError(new SyntaxError("mesage"));
isTypeError(new TypeError("mesage"));
isURIError(new URIError("mesage"));

// EvalError,RangeError,ReferenceError,SyntaxError,TypeError,URIError,
isNativeError(new SyntaxError("message")); // true

// function
isFunction(function () {}); // true;
isAsyncFunction(async function () {}); // true
isAsyncGeneratorFunction(async function* () {}); // true
isGeneratorFunction(function* () {}); // true

// generator
isGenerator((function* () {})()); // true
isAsyncGenerator((async function* () {})()); // true

// iterable
isIterable(new Set()); // true
isIterable(new Map()); // true
isAsyncIterable((async function* () {})()); // true

// nil
isNil(null); // true
isNil(undefined); // true
isNull(null); // true
isUndefined(undefined); // true

// number
isNumber(10); // true
isValidNumber(10); // true
isInvalidNumber(NAN); // true
isNumberObject(new Number(10)); // true

// object
isObject({}); // true
isPlainObject({}); // true
isEmptyObject({}); // true
isFullObject({ key: "abc" }); // true

// primitive
isPrimitive(1); // true
isPrimitive(null); // true
isPrimitive(undefined); // true

// promise
isPromise(new Promise(() => {})); // true
isPromiseLike({ then() {} }); // true

// regexp
isRegExp(/\d+/); // true
isRegExp(new RegExp("abc")); // true

// string
isString(""); // true
isEmptyString(""); // true
isFullString(" "); // true
isStringObject(new String("")); // true

// symbol
isSymbol(Symbol()); // true
isSymbolObject(Object(Symbol("object"))); // true

// buffer
isArrayBuffer(new ArrayBuffer(32)); // true
isSharedArrayBuffer(new SharedArrayBuffer(32)); // true
isArrayBufferLike(new ArrayBuffer(32)); // true
isArrayBufferLike(new SharedArrayBuffer(32)); // true
isDataView(new DataView(new ArrayBuffer(32))); // true

isInt8Array(new Int8Array(32)); // true
isUint8Array(new Uint8Array(32)); // true
isUint8ClampedArray(new Uint8ClampedArray(32)); // true
isInt16Array(new Int16Array(32)); // true
isUint16Array(new Uint16Array(32)); // true
isInt32Array(new Int32Array(32)); // true
isUint32Array(new Uint32Array(32)); // true
isFloat32Array(new Float32Array(32)); // true
isFloat64Array(new Float64Array(32)); // true
isBigInt64Array(new BigInt64Array(32)); // true
isBigUint64Array(new BigUint64Array(32)); // true

// Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array Int32Array | Uint32Array | Float32Array | Float64Array | BigInt64Array | BigUint64Array
isTypedArray(new Int8Array(32)); // true
```

## 🔧 Running the tests <a name = "tests"></a>

```js
npm run test
```

## ✍️ Authors <a name = "authors"></a>

- [@Hong Liu](https://github.com/YJJA) - Idea & Initial work
