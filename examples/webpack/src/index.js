import {merge} from 'deep-fusion';

const a = {person: {name: 'John'}};
const b = {person: {age: 30}};
const c = {person: {job: 'Leader'}};
const result = merge(a, b, c);

const resultElement = document.querySelector('#result');
resultElement.innerHTML = JSON.stringify(result, null, 2);