import { validateArrayOfObjects, validateObject } from "./validation";
import { carsValidationRule } from "../validationRules/carValidationRule";

let object = {
  carBrand: "Tesla",
  year: 1800,
  status: true,
};
let rulesCar = carsValidationRule;
let array = [
  {
    firstKeyOfObject: "Tesla",
    key: "year",
    keyValue: 1800,
    message: "Year is not correct",
  },
];

describe("test valudateObject", () => {
  test("validate object", () => {
    expect(validateObject(object, rulesCar)).toEqual(array);
  });
});
