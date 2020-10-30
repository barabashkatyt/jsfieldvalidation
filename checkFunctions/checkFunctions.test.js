import {
  checkType,
  checkValue,
  checkLength,
  checkNotEmpty,
  checkBooleanValue,
} from "./checkFunctions";

describe("checkType function test", () => {
  test("check boolean type ", () => {
    expect(checkType("str", "string")).toBeTruthy();
  });
  test("check number type ", () => {
    expect(checkType(45, "number")).toBeTruthy();
  });
  test("check with null value ", () => {
    expect(checkType(null, "number")).toBeFalsy();
  });
  test("check with undefined value ", () => {
    expect(checkType(undefined, "number")).toBeFalsy();
  });
});

describe("checkValue functin test", () => {
  test("check if value is in interval", () => {
    expect(checkValue(3, 1, 10)).toBeTruthy();
  });
  test("check if value is in interval", () => {
    expect(checkValue(3, 1, 2)).toBeFalsy();
  });
  test("check if value null is in interval", () => {
    expect(checkValue(null, 1, 10)).toBeFalsy();
  });
  test("check if value undefined is in interval", () => {
    expect(checkValue(undefined, 1, 10)).toBeFalsy();
  });
});

describe("checkLength function test", () => {
  test("if length of value is equal to desired length", () => {
    expect(checkLength("123456789", 9)).toBeTruthy();
  });
  test("if length of value is equal to desired length", () => {
    expect(checkLength("123456789456456", 9)).toBeFalsy();
  });
  test("if length of value is undefined", () => {
    expect(checkLength(undefined, 9)).toBeFalsy();
  });
  test("if length of value is null", () => {
    expect(checkLength(null, 9)).toBeFalsy();
  });
});

describe("check checkNotEmpty function", () => {
  test("if value lentgh is equal to 0", () => {
    expect(checkNotEmpty("")).toBeFalsy();
  });
  test("if value lentgh is not equal to 0", () => {
    expect(checkNotEmpty("ewrw")).toBeTruthy();
  });
  test("if value lentgh is null", () => {
    expect(checkNotEmpty(null)).toBeFalsy();
  });
  test("if value lentgh is undefined", () => {
    expect(checkNotEmpty(undefined)).toBeFalsy();
  });
});

describe("check checkBooleanValue function", () => {
  test("check if value is null", () => {
    expect(checkBooleanValue(null)).toBeFalsy();
  });
  test("check if value is undefined", () => {
    expect(checkBooleanValue(undefined)).toBeFalsy();
  });
  test("check if value is empty", () => {
    expect(checkBooleanValue("")).toBeFalsy();
  });
  test("check if value is 1", () => {
    expect(checkBooleanValue("1")).toBeTruthy();
  });
  test("check if value is false", () => {
    expect(checkBooleanValue(false)).toBeFalsy();
  });
});
