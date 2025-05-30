// isClasses
export function isClasses(fn: Function) {
  if (fn.prototype === undefined) {
    return false;
  }
  if (fn.toString().startsWith("class ")) {
    return true;
  }
  return false;
}
