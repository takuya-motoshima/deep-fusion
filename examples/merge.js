const {merge} = require('../dist/build.common.js');

let a, b, c, result;

// Merge 1-level objects.
// Result: {hello: 1, world: 2}
a = {hello: 1};
b = {world: 2};
result = merge(a, b);
console.log(result);

// Merge 2-level objects.
// Result: {person: {name: 'John', age: 30}}
a = {person: {name: 'John'}};
b = {person: {age: 30}};
result = merge(a, b);
console.log(result);


// Merge objects with buffer values.
// Result: {hello: 1, value: <Buffer 77 6f 72 6c 64>}
a = {hello: 1};
b = {value: Buffer.from('world')};
result = merge(a, b);
console.log(result);

// Merge three or more objects.
// Result: {person: {name: 'John', age: 30, job: 'Leader'}}
a = {person: {name: 'John'}};
b = {person: {age: 30}};
c = {person: {job: 'Leader'}};
result = merge(a, b, c);
console.log(result);