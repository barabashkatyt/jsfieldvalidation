const userTest = {
    firstName: "FirstName",
    lastName: "LastName",
    phoneNumber: "123456789",
    age: 89,
    status: false,
};
const userTest1 = {
    firstName: "FirstName",
    lastName: "LastName",
    phoneNumber: "123456789",
    age: 89,
    status: true,
};
const userTest2 = {
    firstName: "FirstName",
    lastName: "LastName",
    phoneNumber: "123456789",
    age: 70,
    status: true,
};
const listOfUsers = [userTest,userTest1,userTest2];

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
const userValidationRule = {
    firstName: [{
        validationRule: validateType,
        validationParams: ["string"],
        validationMessage: "First Name is not a string",
    },
    {
        validationRule: checkNotEmpty,
        validationParams: ["string"],
        validationMessage: "First Name is empty",
    }],
    lastName: [{
        validationRule: validateType,
        validationParams: ["string"],
        validationMessage: "Last Name is not a string",
    },
    {
        validationRule: checkNotEmpty,
        validationParams: [],
        validationMessage: "Last Name is empty",
    }],
    phoneNumber: [{
        validationRule: validateType,
        validationParams: ["string"],
        validationMessage: "Phone number is not a string",
    },
    {
        validationRule: checkNotEmpty,
        validationParams: [],
        validationMessage: "Phone number is empty",
    },
    {
        validationRule: checkLength,
        validationParams: [9],
        validationMessage: "Phone number is too long",
    }],
    age: [{
        validationRule: validateType,
        validationParams: ["number"],
        validationMessage: "Age is not a number",
    },
    {
        validationRule: checkValue,
        validationParams: [0,120],
        validationMessage: "Age is not correct",
    }],
    status: [{
        validationRule: checkBooleanValue,
        validationParams: [],
        validationMessage: "Status is false",
    }]
};

function validateField(user, key, keyDescription){
    const errorArray = [];

    const userKeyValue = user[key];

    keyDescription.forEach(descr => {
    const argsArray = [userKeyValue, ...descr.validationParams];

    if (!descr.validationRule.apply(null, argsArray)) {
        errorArray.push({
        user: user.firstName,
        key,
        message: descr.validationMessage,
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
        console.log(`Field: ${error.key}`);
        console.log(`Provided value: ${user[error.key]}`);
        console.log(`Message: ${error.message}`);
    });
}


function checkArrayOfUsers(array,rules){
    const errorList = [];
    array.forEach( user => {
        if (validateUser(user,rules).length>0){
            errorList.push(validateUser(user,rules));
        };
    });
    return errorList;
};

const result = checkArrayOfUsers(listOfUsers,userValidationRule);

// const validation = validateUser(userTest,userValidationRule);

if (result.length > 0){
    // dumpErrors(validation,userTest);
    console.log(result);
}else{
    console.log("Everything is right");
}