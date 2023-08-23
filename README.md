# deep-fusion
Recursive object extending.

![fusion.png](fusion.png)

## Documentation
* [Changelog](CHANGELOG.md)

## Installation
```sh
npm install --save deep-fusion
```

## API

### `merge(...items: Object[])`
Merges two or more objects and returns a new object with all the elements of each object.  
If an element with the same key exists in another object, the value of the later passed object will appear in the result.  
The merge creates a new object, so the original object remains unchanged.
****
```js
const {merge} = require('deep-fusion');

let a, b, c;

// Merge 1-level objects.
// Result: {hello: 1, world: 2}
a = {hello: 1};
b = {world: 2};
merge(a, b);

// Merge 2-level objects.
// Result: {person: {name: 'John', age: 30}}
a = {person: {name: 'John'}};
b = {person: {age: 30}};
merge(a, b);

// Merge objects with buffer values.
// Result: {hello: 1, value: <Buffer 77 6f 72 6c 64>}
a = {hello: 1};
b = {value: Buffer.from('world')};
merge(a, b);

// Merge three or more objects.
// Result: {person: {name: 'John', age: 30, job: 'Leader'}}
a = {person: {name: 'John'}};
b = {person: {age: 30}};
c = {person: {job: 'Leader'}};
merge(a, b, c);
```

### `isPlainObject(payload: any)`
Returns true for plain JavaScript objects and false for classes and other objects.

```js
const {isPlainObject} = require('deep-fusion');

isPlainObject({});// true
isPlainObject(new Object());// true
isPlainObject({person: {name: 'John'}});// true

// MyClass1.
function MyClass() {}
MyClass.prototype.constructor = MyClass
const myClass = new MyClass()

// MyClass2.
class MyClass2 {
  constructor() {}
}
const myClass2 = new MyClass2()

// MyClass3.
const myClass3 = {}
Object.setPrototypeOf(myClass3, {
  toDate: function () {
    return new Date()
  },
})

isPlainObject(Object.create(null))// false
isPlainObject(myClass)// false
isPlainObject(myClass2)// false
isPlainObject(myClass3)// false
isPlainObject([])// false
isPlainObject(new Array())// false
isPlainObject(new Date('_'))// false
isPlainObject(new Date())// false
```

### `getType(payload: any)`
Returns the object type of the given payload

```js
const {getType} = require('deep-fusion');

getType({hello: 'I am a good old object'});// 'Object'
getType('');// 'String'
getType(undefined);// 'Undefined'
```

## Testing
With [npm](http://npmjs.org) do:

```sh
npm test
```

## Author
**Takuya Motoshima**

* [github/takuya-motoshima](https://github.com/takuya-motoshima)
* [twitter/TakuyaMotoshima](https://twitter.com/TakuyaMotoshima)
* [facebook/takuya.motoshima.7](https://www.facebook.com/takuya.motoshima.7)

## License
[MIT](LICENSE)