import { TestData } from "../__test_utils__/test-data.js";
import { getType, isType } from "../utils.js";

describe("utils", () => {
  test("getType", () => {
    expect(getType({})).toEqual("Object");
    expect(getType([])).toEqual("Array");
  });

  test("isType", () => {
    expect(isType(TestData.emptyArray, Array)).toBeTruthy();
    expect(isType(TestData.emptyObject, Object)).toBeTruthy();
    expect(isType(TestData.myClassObject, TestData.MyClass)).toBeTruthy();
    expect(isType(TestData.newRegExp, RegExp)).toBeTruthy();
  });
});
