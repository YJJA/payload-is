export type PrimitiveType =
  | boolean
  | number
  | string
  | bigint
  | symbol
  | null
  | undefined;
export type PlainObject = Record<PropertyKey, any>;
export type AnyFunction = (...args: any[]) => any;
export type AnyAsyncFunction = (...args: any[]) => Promise<any>;
export type AnyClass = new (...args: any[]) => any;

export const AsyncFunction = async function () {}.constructor;
export const GeneratorFunction = function* () {}.constructor;
export const AsyncGeneratorFunction = async function* () {}.constructor;

export function getTag(payload: unknown): string {
  return Object.prototype.toString.call(payload).slice(8, -1);
}

export const getType = getTag;
