import { it, describe } from "node:test";
import assert from "node:assert/strict";
import { getType } from "../type.ts";

describe("utils", () => {
  it("getType", () => {
    assert.strictEqual(getType({}), "Object");
    assert.strictEqual(getType([]), "Array");
  });
});
