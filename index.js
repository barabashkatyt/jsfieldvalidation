import { validateArrayOfObjects } from './validationFunctions/validation.js'
import { userValidationRule } from '../task/validationRules/userValidationRule.js'
import { listOfUsers } from './objectsForValidation/users.js'
import { dumpErrorsUser } from '../task/dumpErrors/dumpErrorsUser.js'

const result = validateArrayOfObjects(listOfUsers,userValidationRule);

if (result.length == 0) {
    console.log("Everything is right");
} else { 
    result.map(array => { 
        dumpErrorsUser(array,array[0] );
    })
}