// "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function"

class CustomError extends Error {}

const _Object = { fn: () => {}, method() {} };

function MyClass() {}
MyClass.prototype.constructor = MyClass;
// @ts-ignore
const myClass = new MyClass();

class MyOtherClass {
  constructor() {}
}

export const TestData = {
  // string
  emptyString: "",
  spaceString: "    ",
  fullString: "abcdeft",
  xhxString: "_",
  tempString: `sfaf`,
  invalidString: "invalid",
  // number string
  positiveNumberString: "-1",
  zeroNumberString: "0",
  negativeNumberString: "1",
  NANString: "NaN",
  // bigint string
  bigintString: "BigInt(10)",
  // boolean string
  trueString: "true",
  falseString: "false",
  // symbol string
  symbolString: "Symbol()",
  // undefined string
  undefinedString: "undefined",
  // null string
  nullString: "null",
  // array string
  arrayString: "Array",
  emptyArrayString: "[]",
  // object string
  objectString: "Object",
  emptyObjectString: "{}",
  stringObejct: new String("abc"),

  // number
  positiveNumber: -1,
  zeroNumber: 0,
  negativeNumber: 1,
  MAX_VALUENumber: Number.MAX_VALUE,
  MIN_VALUENumber: Number.MIN_VALUE,
  InfinityNumber: Infinity,
  NAN: NaN,
  numberObject: new Number(1),

  // bigint
  bigint: BigInt(10),
  bigintObject: Object(BigInt(10)),

  // boolean
  true: true,
  false: false,
  trueObject: new Boolean(true),
  falseObject: new Boolean(false),

  // symbol
  defaultSymbol: Symbol(),
  descSymbol: Symbol("description"),
  symbolObject: Object(Symbol()),

  // undefined,
  undefined: undefined,

  // null
  null: null,

  // function
  noopFunction: function () {},
  arrowFunction: () => {},
  objectFnFunction: _Object.fn,
  objectMethodFunction: _Object.method,

  asyncFunction: async function () {},
  asyncArrowFunction: async () => {},

  generatorFunction: function* () {},
  asyncGeneratorFunction: async function* () {},

  // class
  MyClass: MyClass,
  MyOtherClass: MyOtherClass,

  // array
  emptyArray: [],
  prototypeArray: Array.prototype,
  numberArray: [1],
  stringArray: ["abc"],
  emptyStringArray: [""],
  stringMoreArray: ["a", "b", "c"],
  undefinedArray: [undefined],
  undefinedMoreArray: [undefined, undefined, undefined],
  emptyNewArray: new Array(),
  emptyZeroArray: new Array(0),
  numberNewArray: new Array(3),
  stringNewArray: new Array("abc"),
  stringNewMoreArray: new Array("a", "b", "c"),

  // object
  emptyObject: {},
  fullObject: { key: "abc" },
  newObject: new Object(),
  nullObject: Object.create(null),
  newEmptyObject: new Object({}),
  emptyNumberObject: { 0: "" },
  emptyStringObject: { "": "" },
  constructorObject: { constructor: "123" },
  myClassObject: myClass,

  // date
  nowDate: new Date(),
  invalidDate: new Date("_"),
  formatData: new Date(2022, 2, 23),

  // promise
  loadingPromise: new Promise(() => {}),
  rejectPromise: Promise.resolve(new Error("message")),
  resolvePromise: Promise.resolve({}),

  // promiseLike
  promiseLike: { then: () => {} },

  // generator
  Generator: (function* () {})(),
  AsyncGenerator: (async function* () {})(),

  // RegExp
  numberRegExp: /\d+/,
  globalRegExp: /\d+/g,
  newRegExp: new RegExp("abc"),

  // error
  Error: new Error("message"),
  CustomError: new CustomError("message"),
  EvalError: new EvalError("message"),
  RangeError: new RangeError("message"),
  ReferenceError: new ReferenceError("message"),
  SyntaxError: new SyntaxError("message"),
  TypeError: new TypeError("message"),
  URIError: new URIError("message"),

  // collection
  Set: new Set(),
  WeakSet: new WeakSet(),
  Map: new Map(),
  WeakMap: new WeakMap(),
  WeakRef: new WeakRef(_Object),

  // buffer
  DataView: new DataView(new ArrayBuffer(32)),
  ArrayBuffer: new ArrayBuffer(32),
  SharedArrayBuffer: new SharedArrayBuffer(32),

  Int8Array: new Int8Array(32),
  Uint8Array: new Uint8Array(32),
  Uint8ClampedArray: new Uint8ClampedArray(32),
  Int16Array: new Int16Array(32),
  Uint16Array: new Uint16Array(32),
  Int32Array: new Int32Array(32),
  Uint32Array: new Uint32Array(32),
  Float32Array: new Float32Array(32),
  Float64Array: new Float64Array(32),
  BigInt64Array: new BigInt64Array(32),
  BigUint64Array: new BigUint64Array(32),

  // dom
  Blob: new Blob(),
  File: new File([""], "test"),
};

export type TestDataKey = keyof typeof TestData;
