function validateType(value,requiredType){
    return typeof value === requiredType;
};
function checkValue(value,valueMin,valueMax){
    return valueMin <= value && value <= valueMax;
};
function checkLength(value,requiredLength){
    return value.length === requiredLength;
};
function checkNotEmpty(value){
    return value.length > 0;
};
function checkBooleanValue(value){
    return value===true;
}
export const userValidationRule = {
    firstName: [{
        rule: validateType,
        params: ["string"],  
        message: "First Name is not a string",
    },
    {
        rule: checkNotEmpty,
        params: ["string"],
        message: "First Name is empty",
    }],
    lastName: [{
        rule: validateType,
        params: ["string"],
        message: "Last Name is not a string",
    },
    {
        rule: checkNotEmpty,
        params: [],
        message: "Last Name is empty",
    }],
    phoneNumber: [{
        rule: validateType,
        params: ["string"],
        message: "Phone number is not a string",
    },
    {
        rule: checkNotEmpty,
        params: [],
        message: "Phone number is empty",
    },
    {
        rule: checkLength,
        params: [9],
        message: "Phone number is too long",
    }],
    age: [{
        rule: validateType,
        params: ["number"],
        message: "Age is not a number",
    },
    {
        rule: checkValue,
        params: [0,120],
        message: "Age is not correct",
    }],
    status: [{
        rule: checkBooleanValue,
        params: [],
        message: "Status is false",
    }]
};

function validateField(user, key, keyDescription){
    const errorArray = [];

    const userKeyValue = user[key];
    const userFirstName = user.firstName;

    keyDescription.forEach(descr => {
    const argsArray = [userKeyValue, ...descr.params];

    if (!descr.rule.apply(null, argsArray)) {
        errorArray.push({
        userFirstName,
        key,
        userKeyValue,
        message: descr.message,
        });
    }});
    
    return errorArray;
}
function validateUser(user, rules){
    const errorArray = [];

    Object.keys(rules).forEach(key => {
        errorArray.push(...validateField(user,key,rules[key]))
    });

    return errorArray;
}

function dumpErrors(errorList, user) {
    errorList.forEach(error => {
        console.log(`User: ${error.userFirstName}`);
        console.log(`Field: ${error.key}`);
        console.log(`Provided value: ${error.userKeyValue}`);
        console.log(`Message: ${error.message}`);
    });
}


export function checkArrayOfUsers(array,rules){
    const errorList = [];
    array.forEach(user => {
        errorList.push(validateUser(user, rules));
    });
    if (errorList.length > 0) { 
        errorList.map(array => { 
            dumpErrors(array,array[0] );
        })
    }
    return errorList;
};