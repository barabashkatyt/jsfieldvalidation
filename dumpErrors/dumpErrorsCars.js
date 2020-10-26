export function dumpErrorsCars(errorList, car) {
    errorList.forEach(error => {
        console.log(`Car: ${error.firstKeyOfObject}`);
        console.log(`Field: ${error.key}`);
        console.log(`Provided value: ${error.keyValue}`);
        console.log(`Message: ${error.message}`);
    });
}
