export function checkType(value, requiredType) {
  return typeof value === requiredType;
}
export function checkValue(value, valueMin, valueMax) {
  return valueMin <= value && value <= valueMax;
}
export function checkLength(value, requiredLength) {
  return value != null && value.length === requiredLength;
}
export function checkNotEmpty(value) {
  return value != null && value.length > 0;
}
export function checkBooleanValue(value) {
  return !!value === true;
}
