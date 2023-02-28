export type PlainObject = Record<string | number | symbol, any>;
export type AnyFunction = (...args: any[]) => any;
export type AnyAsyncFunction = (...args: any[]) => Promise<any>;
export type AnyClass = new (...args: any[]) => any;
