import { validateArrayOfobjects } from './validationFunctions/validation.js'
import { userValidationRule } from '../task/validationRules/userValidationRule.js'
import {listOfUsers} from './objectsForValidation/users.js'

const result = validateArrayOfobjects(listOfUsers,userValidationRule);

if (result.length == 0){
    console.log("Everything is right");
}