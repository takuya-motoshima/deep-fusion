import {merge} from 'deep-fusion';

const a = {person: {name: 'John'}};
const b = {person: {age: 30}};
const c = {person: {job: 'Leader'}};
const result = merge(a, b, c);

const resultElement = document.querySelector('#result');
if (resultElement)
  resultElement.innerHTML = JSON.stringify(result, null, 2);
else
  alert('#result selector No corresponding element found');