import { isFunction } from "./function.ts";
import { isObject } from "./object.ts";

// toJSON
interface HasToJSON {
  toJSON(): unknown;
}
export function hasToJSON(value: unknown): value is HasToJSON {
  return isObject(value) && isFunction((value as HasToJSON).toJSON);
}

// fromJSON
interface HasFromJSON<T extends abstract new (...args: any) => any> {
  fromJSON(json: any): InstanceType<T>;
}
export function hasFromJSON<T extends abstract new (...args: any) => any>(
  value: unknown
): value is HasFromJSON<T> {
  return isObject(value) && isFunction((value as HasFromJSON<T>).fromJSON);
}
