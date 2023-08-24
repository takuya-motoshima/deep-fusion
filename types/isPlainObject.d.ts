type PlainObject = Record<string | number | symbol, any>;
/**
 * Returns whether the payload is a plain JavaScript object (excluding special classes or objects with other prototypes)
 *
 * @param {*} payload
 * @returns {payload is PlainObject}
 */
declare const _default: (payload: any) => payload is PlainObject;
export default _default;
