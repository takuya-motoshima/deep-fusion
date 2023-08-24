type IntersectArrayElements<T extends any[], A = unknown> = {
    [I in keyof T]: (x: T[I]) => void;
}[number] extends (x: infer I) => void ? I : never;
/**
 * Recursively merge nested objects.
 *
 * @param {T extends any[]} items
 * @return {T extends any[]} Result of merging objects.
 */
declare const _default: <T extends any[]>(...items_0: T) => IntersectArrayElements<T, unknown>;
export default _default;
