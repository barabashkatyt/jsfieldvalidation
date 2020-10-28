function validateField(object, key, fieldRules) {
  const errorArray = [];
  const objectKeyValue = object[key];

  const firstKeyValueOfObject = object[Object.keys(object)[0]];

  fieldRules.forEach((descr) => {
    const argsArray = [objectKeyValue, ...descr.params];

    if (!descr.rule.apply(null, argsArray)) {
      errorArray.push({
        firstKeyOfObject: firstKeyValueOfObject,
        key,
        keyValue: objectKeyValue,
        message: descr.message,
      });
    } else if (!!descr.rule.apply(null, argsArray) && !!descr.children) {
      errorArray.push(...validateField(object, key, descr.children));
    }
  });

  return errorArray;
}
export function validateObject(object, rules) {
  const errorArray = [];

  Object.keys(rules).forEach((key) => {
    errorArray.push(...validateField(object, key, rules[key]));
  });

  return errorArray;
}

export function validateArrayOfObjects(array, rules) {
  const errorList = [];
  array.forEach((user) => {
    errorList.push(validateObject(user, rules));
  });
  return errorList;
}
