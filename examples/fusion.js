const fusion = require('deep-fusion');

const a = {a: 'hello'};
const b = {b: 123};
const c = {c: true};
fusion(a, b, c);
// => {
//   "a": "hello",
//   "b": 123,
//   "c": true
// }

const x = {a: {b: 0}};
const y = {a: {b: 1, c: 2}};
const z = {a: {c: 3}};
fusion(x, y, z);
// => {
//   "a": {
//     "b": 1,
//     "c": 3
//   }
// }