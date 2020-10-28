export function dumpErrors(errorList, objectName) {
  errorList.forEach((error) => {
    console.log(`${objectName}: ${error.firstKeyOfObject}`);
    console.log(`Field: ${error.key}`);
    console.log(`Provided value: ${error.keyValue}`);
    console.log(`Message: ${error.message}`);
  });
}
