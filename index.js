import { validateArrayOfObjects } from './validationFunctions/validation.js'
import { userValidationRule } from '../task/validationRules/userValidationRule.js'
import { carsValidationRule } from '../task/validationRules/carValidationRule.js'
import { listOfUsers } from './objectsForValidation/users.js'
import { listOfCars } from './objectsForValidation/cars.js'
import { dumpErrorsUser } from '../task/dumpErrors/dumpErrorsUser.js'
import { dumpErrorsCars } from '../task/dumpErrors/dumpErrorsCars.js'

const resultCars = validateArrayOfObjects(listOfCars,carsValidationRule);

if (resultCars.length == 0) {
    console.log("Everything is right");
} else { 
    resultCars.map(array => { 
        dumpErrorsCars(array,array[0] );
    })
}

const resultUsers = validateArrayOfObjects(listOfUsers,userValidationRule);

if (resultUsers.length == 0) {
    console.log("Everything is right");
} else { 
    resultUsers.map(array => { 
        dumpErrorsUser(array,array[0] );
    })
}