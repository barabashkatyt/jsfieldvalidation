import {userValidationRule,checkArrayOfUsers} from '../task/validator.js'
import {listOfUsers} from '../task/user.js'

const result = checkArrayOfUsers(listOfUsers,userValidationRule);

// const validation = validateUser(userTest,userValidationRule);

if (result.length > 0){
    // dumpErrors(validation,userTest);
    console.log(result);
}else{
    console.log("Everything is right");
}