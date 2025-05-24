export type PlainObject = Record<string | number | symbol, any>;
export type AnyFunction = (...args: any[]) => any;
export type AnyAsyncFunction = (...args: any[]) => Promise<any>;
export type AnyClass = new (...args: any[]) => any;

export const AsyncFunction = async function () {}.constructor;
export const GeneratorFunction = function* () {}.constructor;
export const AsyncGeneratorFunction = async function* () {}.constructor;

/** get payload type */
export function getType(payload: unknown): string {
  return Object.prototype.toString.call(payload).slice(8, -1);
}
