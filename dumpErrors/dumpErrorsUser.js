export function dumpErrorsUser(errorList, user) {
    errorList.forEach(error => {
        console.log(`User: ${error.firstKeyOfObject}`);
        console.log(`Field: ${error.key}`);
        console.log(`Provided value: ${error.keyValue}`);
        console.log(`Message: ${error.message}`);
    });
}
