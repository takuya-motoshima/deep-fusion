import {merge} from '../../dist/build.esm.js';

const a = {person: {name: 'John'}};
const b = {person: {age: 30}};
const c = {person: {job: 'Leader'}};
const result = merge(a, b, c);
console.log(result);