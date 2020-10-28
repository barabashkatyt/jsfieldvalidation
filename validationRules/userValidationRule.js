import * as check from "../checkFunctions/checkFunctions.js";

export const userValidationRule = {
  firstName: [
    {
      rule: check.checkType,
      params: ["string"],
      message: "First Name is not a string",
    },
    {
      rule: check.checkNotEmpty,
      params: ["string"],
      message: "First Name is empty",
    },
  ],
  lastName: [
    {
      rule: check.checkType,
      params: ["string"],
      message: "Last Name is not a string",
    },
    {
      rule: check.checkNotEmpty,
      params: [],
      message: "Last Name is empty",
    },
  ],
  phoneNumber: [
    {
      rule: check.checkType,
      params: ["string"],
      message: "Phone number is not a string",
    },
    {
      rule: check.checkNotEmpty,
      params: [],
      message: "Phone number is empty",
    },
    {
      rule: check.checkLength,
      params: [9],
      message: "Phone number is too long",
    },
  ],
  age: [
    {
      rule: check.checkType,
      params: ["number"],
      message: "Age is not a number",
    },
    {
      rule: check.checkValue,
      params: [0, 120],
      message: "Age is not correct",
    },
  ],
  status: [
    {
      rule: check.checkBooleanValue,
      params: [],
      message: "Status is false",
    },
  ],
};
