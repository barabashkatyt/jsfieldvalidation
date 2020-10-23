import { dumpErrorsUser } from '../dumpErrors/dumpErrorsUser.js'

function validateField(object, key, keyDescription) {
    const errorArray = [];
    const objectKeyValue = object[key];

    const firstKeyOfObject = Object.keys(object)[0];

    keyDescription.forEach(descr => {
    const argsArray = [objectKeyValue, ...descr.params];

    if (!descr.rule.apply(null, argsArray)) {
        errorArray.push({
        firstKeyOfObject,
        key,
        keyValue: objectKeyValue,
        message: descr.message,
        });
    }});
    
    return errorArray;
}
function validateObject(object, rules){
    const errorArray = [];

    Object.keys(rules).forEach(key => {
        errorArray.push(...validateField(object,key,rules[key]))
    });

    return errorArray;
}


export function validateArrayOfobjects(array, rules) {
    const errorList = [];
    array.forEach(user => {
        errorList.push(validateObject(user, rules));
    });
    if (errorList.length > 0) { 
        errorList.map(array => { 
            dumpErrorsUser(array,array[0] );
        })
    }
    return errorList;
};