import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { getDataType } from "../dataType.ts";

test("getDataType", async (t) => {
  t.test("handles primitive types", () => {
    assert.deepStrictEqual(getDataType(undefined), {
      type: "undefined",
      data: undefined,
    });
    assert.deepStrictEqual(getDataType(42), { type: "number", data: 42 });
    assert.deepStrictEqual(getDataType(42n), { type: "bigint", data: 42n });
    assert.deepStrictEqual(getDataType(true), { type: "boolean", data: true });
    assert.deepStrictEqual(getDataType("test"), {
      type: "string",
      data: "test",
    });
    const sym = Symbol("test");
    assert.deepStrictEqual(getDataType(sym), { type: "symbol", data: sym });
    assert.deepStrictEqual(getDataType(null), { type: "null", data: null });
  });

  t.test("handles functions", () => {
    const fn = () => {};
    const asyncFn = async () => {};
    function* genFn() {}
    async function* asyncGenFn() {}

    assert.deepStrictEqual(getDataType(fn), {
      type: "function",
      subtype: "Function",
      data: fn,
    });
    assert.deepStrictEqual(getDataType(asyncFn), {
      type: "function",
      subtype: "AsyncFunction",
      data: asyncFn,
    });
    assert.deepStrictEqual(getDataType(genFn), {
      type: "function",
      subtype: "GeneratorFunction",
      data: genFn,
    });
    assert.deepStrictEqual(getDataType(asyncGenFn), {
      type: "function",
      subtype: "AsyncGeneratorFunction",
      data: asyncGenFn,
    });
  });

  t.test("handles objects", () => {
    assert.deepStrictEqual(getDataType({}), {
      type: "object",
      subtype: "Object",
      data: {},
    });
    assert.deepStrictEqual(getDataType([]), {
      type: "object",
      subtype: "Array",
      data: [],
    });

    const dateResult = getDataType(new Date());
    assert.equal(dateResult.type, "object");
    assert.equal(dateResult.subtype, "Date");
    assert.ok(dateResult.data instanceof Date);

    assert.deepStrictEqual(getDataType(new Map()), {
      type: "object",
      subtype: "Map",
      data: new Map(),
    });
    assert.deepStrictEqual(getDataType(new Set()), {
      type: "object",
      subtype: "Set",
      data: new Set(),
    });
    assert.deepStrictEqual(getDataType(new RegExp("")), {
      type: "object",
      subtype: "RegExp",
      data: /(?:)/,
    });
  });

  t.test("handles buffer types", () => {
    assert.deepStrictEqual(getDataType(new ArrayBuffer(8)), {
      type: "object",
      subtype: "ArrayBuffer",
      data: new ArrayBuffer(8),
    });
    assert.deepStrictEqual(getDataType(new Int8Array(2)), {
      type: "object",
      subtype: "Int8Array",
      data: new Int8Array(2),
    });
    assert.deepStrictEqual(getDataType(new Uint8Array(2)), {
      type: "object",
      subtype: "Uint8Array",
      data: new Uint8Array(2),
    });
    assert.deepStrictEqual(getDataType(new Float32Array(2)), {
      type: "object",
      subtype: "Float32Array",
      data: new Float32Array(2),
    });
  });
});
