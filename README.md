<p align="center">
  <a href="https://github.com/YJJA/payload-is" rel="noopener">
    <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo">
  </a>
</p>

<h3 align="center">Payload-is</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/YJJA/payload-is.svg)](https://github.com/YJJA/payload-is/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/YJJA/payload-is.svg)](https://github.com/YJJA/payload-is/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center">
  <b>轻量级、无依赖的 JavaScript/TypeScript 数据类型校验工具库</b><br>
  <i>Simple, dependency-free data type checking for JavaScript & TypeScript</i>
</p>

## 📝 目录

- [简介](#about)
- [快速开始](#getting_started)
- [用法示例](#usage)
- [作者](#authors)

## 🧐 简介 <a name = "about"></a>

Payload-is 提供了一套简洁、直观的 JS/TS 数据类型校验方法，无任何第三方依赖，适用于多种场景。

## 🏁 快速开始 <a name = "getting_started"></a>

### 安装

```bash
npm install payload-is
```

## 用法示例 <a name = "usage"></a>

```js
import {
  isArray,
  isEmptyArray,
  isFullArray,
  isBigInt,
  isBigIntObject,
  isBigIntArray,
  isBoolean,
  isTrue,
  isFalse,
  isBooleanObject,
  isArrayBuffer,
  isSharedArrayBuffer,
  isArrayBufferLike,
  isArrayBufferView,
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
  isSet,
  isMap,
  isWeakSet,
  isWeakMap,
  isWeakRef,
  isMapEntries,
  isDate,
  isValidDate,
  isInvalidDate,
  isBlob,
  isFile,
  isFormData,
  isHeaders,
  isRequest,
  isResponse,
  isError,
  isAggregateError,
  isEvalError,
  isNativeError,
  isRangeError,
  isReferenceError,
  isSyntaxError,
  isTypeError,
  isURIError,
  isFunction,
  isAsyncFunction,
  isAsyncGeneratorFunction,
  isGeneratorFunction,
  isAsyncGenerator,
  isGenerator,
  isAsyncIterable,
  isIterable,
  isAsyncIterator,
  isIterator,
  isNil,
  isNull,
  isUndefined,
  isNumber,
  isValidNumber,
  isInvalidNumber,
  isNumberObject,
  isNumberArray,
  isObject,
  isPlainObject,
  isEmptyObject,
  isFullObject,
  isPrimitive,
  isPromise,
  isPromiseLike,
  isRegExp,
  isString,
  isEmptyString,
  isFullString,
  isStringObject,
  isStringArray,
  isSymbol,
  isSymbolObject,
  getType,
  getTag,
  getDataType,
  isWeakKey,
  isPropertyKey,
  enumerableKeys,
  hasFromJSON,
  hasToJSON,
} from "payload-is";
```

### 常用示例

#### 数组

```js
isArray([]); // true
isEmptyArray([]); // true
isFullArray([1]); // true
```

#### BigInt

```js
isBigInt(1n); // true
isBigIntObject(Object(1n)); // true
isBigIntArray([1n, 2n]); // true
```

#### 布尔值

```js
isBoolean(true); // true
isBooleanObject(new Boolean(true)); // true
isTrue(true); // true
isFalse(false); // true
```

#### Buffer & TypedArray

```js
isArrayBuffer(new ArrayBuffer(32)); // true
isSharedArrayBuffer(new SharedArrayBuffer(32)); // true
isArrayBufferLike(new ArrayBuffer(32)); // true
isArrayBufferLike(new SharedArrayBuffer(32)); // true
isArrayBufferView(new Uint8Array(8)); // true
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
isTypedArray(new Int8Array(32)); // true
```

#### 集合

```js
isSet(new Set()); // true
isMap(new Map()); // true
isWeakSet(new WeakSet()); // true
isWeakMap(new WeakMap()); // true
isWeakRef(new WeakRef({})); // true
isMapEntries([
  [1, 2],
  [3, 4],
]); // true
```

#### 日期

```js
isDate(new Date()); // true
isValidDate(new Date(2022, 2, 22)); // true
isInvalidDate(new Date("invalid")); // true
```

#### DOM

```js
isBlob(new Blob()); // true
isFile(new File([], "a.txt")); // true
isFormData(new FormData()); // true
isHeaders(new Headers()); // true
isRequest(new Request("https://example.com")); // true
isResponse(new Response()); // true
```

#### 错误对象

```js
isError(new Error()); // true
isAggregateError(new AggregateError([])); // true
isEvalError(new EvalError()); // true
isRangeError(new RangeError()); // true
isReferenceError(new ReferenceError()); // true
isSyntaxError(new SyntaxError()); // true
isTypeError(new TypeError()); // true
isURIError(new URIError()); // true
isNativeError(new TypeError()); // true
```

#### 函数

```js
isFunction(function () {}); // true
isAsyncFunction(async function () {}); // true
isGeneratorFunction(function* () {}); // true
isAsyncGeneratorFunction(async function* () {}); // true
```

#### Generator

```js
isGenerator((function* () {})()); // true
isAsyncGenerator((async function* () {})()); // true
```

#### 可迭代对象 & 迭代器

```js
isIterable([]); // true
isAsyncIterable((async function* () {})()); // true
isIterator([].values()); // true
isAsyncIterator((async function* () {})()); // true
```

#### Nil

```js
isNil(null); // true
isNil(undefined); // true
isNull(null); // true
isUndefined(undefined); // true
```

#### 数字

```js
isNumber(10); // true
isValidNumber(10); // true
isInvalidNumber(NaN); // true
isNumberObject(new Number(10)); // true
isNumberArray([1, 2, 3]); // true
```

#### 对象

```js
isObject({}); // true
isPlainObject({}); // true
isEmptyObject({}); // true
isFullObject({ a: 1 }); // true
```

#### 原始类型

```js
isPrimitive(1); // true
isPrimitive(null); // true
isPrimitive(undefined); // true
```

#### Promise

```js
isPromise(Promise.resolve()); // true
isPromiseLike({ then() {} }); // true
```

#### 正则表达式

```js
isRegExp(/abc/); // true
```

#### 字符串

```js
isString(""); // true
isEmptyString(""); // true
isFullString("abc"); // true
isStringObject(new String("abc")); // true
isStringArray(["a", "b"]); // true
```

#### Symbol

```js
isSymbol(Symbol()); // true
isSymbolObject(Object(Symbol())); // true
```

#### 键 & 属性

```js
isWeakKey({}); // true
isPropertyKey("a"); // true
enumerableKeys({ a: 1, b: 2 }); // ['a','b']
```

#### JSON 辅助

```js
hasToJSON({
  toJSON() {
    return 1;
  },
}); // true
hasFromJSON(
  class {
    static fromJSON() {
      return new this();
    }
  },
); // true
```

## 🔧 测试 <a name = "tests"></a>

```bash
npm run test
```

## ✍️ 作者 <a name = "authors"></a>

- [@Hong Liu](https://github.com/YJJA) - 创意 & 初始开发
