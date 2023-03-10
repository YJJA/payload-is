export type PlainObject = Record<string | number | symbol, any>;
export type AnyFunction = (...args: any[]) => any;
export type AnyAsyncFunction = (...args: any[]) => Promise<any>;
export type AnyClass = new (...args: any[]) => any;

/** get payload type */
export function getType(payload: unknown): string {
  return Object.prototype.toString.call(payload).slice(8, -1);
}
