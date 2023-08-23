import isPlainObject from '~/isPlainObject';

type IntersectArrayElements<T extends any[], A = unknown> = {
  [I in keyof T]: (x: T[I]) => void }[number] extends (x: infer I) => void ? I : never;

/**
 * Merge two objects.
 *
 * @param {T1 extends Record<string, any>} target 
 * @param {T2 extends Record<string, any>} source 
 * @returns {(T1 & T2)|T1|T2} Result of merging two objects.
 */
function merge<T1 extends Record<string, any>|any, T2 extends Record<string, any>|any>(target: T1, source: T2): (T1 & T2)|T1|T2  {
  if (!isPlainObject(target))
    // Returns an error if the target is not an object.
    return source;
    // throw new TypeError('Target must be object');
  else if (!isPlainObject(source))
    // If source is not an object, return target.
    return target;

  // Merge the elements of the source one by one into the same element of the target.
  for (let [key, item] of Object.entries(source)) {
    if (!(key in target))
      (target as Record<string, any>)[key] = item;
    else if (isPlainObject(target[key]) && isPlainObject(item))
      (target as Record<string, any>)[key] = merge(target[key], item);
    else
      (target as Record<string, any>)[key] = item;
  }
  return target;
}

/**
 * Recursively merge nested objects.
 *
 * @param {T extends any[]} items 
 * @return {T extends any[]} Result of merging objects.
 */
export default <T extends any[]>(...items: [...T]): IntersectArrayElements<T> => {
  // If the parameter is missing, an error is returned.
  if (!items.length)
    throw new TypeError('Cannot convert undefined or null to object');

  // Extract the first object.
  const source = Object.assign({}, items[0]);
  // const source = items[0];

  // Merge all the second and subsequent objects in turn for the first object.
  for (let i=1; i<items.length; i++)
    merge(source, items[i]);

  // Return merge results.
  return source;
}