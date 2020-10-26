import * as check from '../checkFunctions/checkFunctions.js'

export const carsValidationRule = {
    carBrand: [{
        rule: check.checkType,
        params: ["string"],  
        message: "Car brand is not a string",
    },
    {
        rule: check.checkNotEmpty,
        params: ["string"],
        message: "Car brand is empty",
    }],
    year: [{
        rule: check.checkType,
        params: ["number"],
        message: "Year is not a number",
    },
    {
        rule: check.checkValue,
        params: [1886,2020],
        message: "Year is not correct",
    }],
    status: [{
        rule: check.checkBooleanValue,
        params: [],
        message: "Status is false",
    }]
};