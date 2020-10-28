import {
  validateObject,
  validateArrayOfObjects,
} from "./validationFunctions/validation.js";
import { userValidationRule } from "../task/validationRules/userValidationRule.js";
import { carsValidationRule } from "../task/validationRules/carValidationRule.js";
import { listOfUsers } from "./model/users.js";
import { listOfCars } from "./model/cars.js";
import { dumpErrors } from "../task/dumpErrors/dumpErrors.js";

const resultCars = validateArrayOfObjects(listOfCars, carsValidationRule);

if (resultCars.length == 0) {
  console.log("Everything is right");
} else {
  resultCars.map((array) => {
    dumpErrors(array, "car");
  });
}

const resultUsers = validateArrayOfObjects(listOfUsers, userValidationRule);

if (resultUsers.length == 0) {
  console.log("Everything is right");
} else {
  resultUsers.map((array) => {
    dumpErrors(array, "user");
  });
}
