import { getType } from "../utils.js";

describe("utils", () => {
  test("getType", () => {
    expect(getType({})).toEqual("Object");
    expect(getType([])).toEqual("Array");
  });
});
