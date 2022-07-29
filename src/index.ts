type IntersectArrayElements<T extends any[], A = unknown> = {
  [I in keyof T]: (x: T[I]) => void }[number] extends (x: infer I) => void ? I : never;
type PlainObject = Record<string|number|symbol, any>;

/**
 * Returns the object type of the given payload
 *
 * @param {*} payload
 * @returns {string}
 */
function getType(payload: any): string {
  return Object.prototype.toString.call(payload).slice(8, -1)
}

/**
 * Returns whether the payload is a plain JavaScript object (excluding special classes or objects with other prototypes)
 *
 * @param {*} payload
 * @returns {payload is PlainObject}
 */
function isPlainObject(payload: any): payload is PlainObject {
  if (getType(payload) !== 'Object')
    return false;
  return payload.constructor === Object && Object.getPrototypeOf(payload) === Object.prototype;
}

/**
 * Merge two objects.
 *
 * @param {T1 extends Record<string, any>} target 
 * @param {T2 extends Record<string, any>} sources 
 * @returns {(T1 & T2)|T1|T2} Result of merging two objects.
 */
function merge<T1 extends Record<string, any>|any, T2 extends Record<string, any>|any>(target: T1, sources: T2): (T1 & T2)|T1|T2 {
  if (!isPlainObject(target))
    // Returns an error if the target is not an object.
    return sources;
    // throw new TypeError('Target must be object');
  else if (!isPlainObject(sources))
    // If sources is not an object, return target.
    return target;

  // Merge the elements of the source one by one into the same element of the target.
  for (let [key, source] of Object.entries(sources)) {
    if (!(key in target))
      target[key] = source;
    else if (isPlainObject(target[key]) && isPlainObject(source))
      target[key] = merge(target[key], source);
    else
      target[key] = source;
   }
  return target;
}

/**
 * Recursively merge nested objects.
 *
 * @param {T extends any[]} objects 
 * @return {T extends any[]} Result of merging objects.
 */
export default <T extends any[]>(...objects: [...T]): IntersectArrayElements<T> => {
  // If the parameter is missing, an error is returned.
  if (!objects.length)
    throw new Error('Cannot convert undefined or null to object');

  // Extract the first object.
  const merged = objects[0];

  // Merge all the second and subsequent objects in turn for the first object.
  for (let i=1; i<objects.length; i++)
    merge(merged, objects[i]);

  // Return merge results.
  return merged;
}