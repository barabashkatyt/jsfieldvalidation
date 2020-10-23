import {userValidationRule,checkArrayOfUsers} from '../task/validator.js'
import {listOfUsers} from '../task/user.js'

const result = checkArrayOfUsers(listOfUsers,userValidationRule);

if (result.length == 0){
    console.log("Everything is right");
}