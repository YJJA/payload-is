// "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function"

class CustomError extends Error {}

const _Object = { fn: () => {}, method() {} };

function CustomClass() {}
CustomClass.prototype.constructor = CustomClass;
// @ts-ignore
const customClassObject = new CustomClass();

class CustomOtherClass {
  constructor() {}
}

export const TestData = {
  // string
  emptyString: "",
  spaceString: "    ",
  fullString: "abcdeft",
  underlineString: "_",
  templateString: `sfaf`,
  // number string
  positiveNumberString: "-1",
  zeroNumberString: "0",
  negativeNumberString: "1",
  NaNString: "NaN",
  // bigint string
  bigintString: "10n",
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

  // number
  positiveNumber: -1,
  zeroNumber: 0,
  negativeNumber: 1,
  MAX_VALUENumber: Number.MAX_VALUE,
  MIN_VALUENumber: Number.MIN_VALUE,
  InfinityNumber: Infinity,
  NaN: NaN,

  // bigint
  bigint: 10n,
  bigint2: BigInt(10),

  // boolean
  true: true,
  false: false,

  // symbol
  symbol: Symbol(),
  descSymbol: Symbol("description"),

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
  CustomClass: CustomClass,
  MyOtherClass: CustomOtherClass,

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
  customClassObject: customClassObject,
  // string object
  stringObject: Object("abc"),
  string2Object: new String("abc"),
  string3Object: new Object("abc"),
  // number object
  numberObject: Object(1),
  number2Object: new Object(1),
  number3Object: new Number(1),
  // boolean object
  booleanObject: Object(true),
  boolean2Object: new Object(true),
  boolean3Object: new Boolean(false),
  // bigint object
  bigintObject: Object(10n),
  bigint2Object: new Object(10n),
  // symbol object
  symbolObject: Object(Symbol()),
  symbol2Object: new Object(Symbol()),

  // date
  nowDate: new Date(),
  invalidDate: new Date("_"),
  formatDate: new Date(2022, 2, 23),

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

export const TestDataKeys = Object.keys(TestData) as TestDataKey[];

export function getTestDataValue(key: TestDataKey) {
  return Reflect.get(TestData, key);
}
