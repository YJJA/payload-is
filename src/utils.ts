import { AnyClass, AnyFunction } from "./type";

/** get payload type */
export function getType(payload: unknown): string {
  return Object.prototype.toString.call(payload).slice(8, -1);
}

export function isType<T extends AnyFunction | AnyClass>(
  payload: any,
  type: T
): payload is T {
  if (!(type instanceof Function)) {
    throw new TypeError("Type must be a function");
  }
  if (!Object.prototype.hasOwnProperty.call(type, "prototype")) {
    throw new TypeError("Type is not a class");
  }
  // Classes usually have names (as functions usually have names)
  const name: string | undefined | null = (type as any).name;
  return (
    getType(payload) === name ||
    Boolean(payload && payload.constructor === type)
  );
}
