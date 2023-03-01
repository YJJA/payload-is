import { getType } from "../type.js";

describe("utils", () => {
  test("getType", () => {
    expect(getType({})).toEqual("Object");
    expect(getType([])).toEqual("Array");
  });
});
