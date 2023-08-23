import isPlainObject from '~/isPlainObject';

describe('Result should be true for plain objects', () => {
  test.each([
    [{}, true],
    [new Object(), true],
    [{person: {name: 'John'}}, true],
  ])('isPlainObject(%o) is %s', (a, expected) => {
    expect(isPlainObject(a)).toBe(expected);
  });
});


describe('Result should be false for non-plain objects', () => {
  // MyClass1.
  function MyClass() {}
  MyClass.prototype.constructor = MyClass
  // @ts-ignore
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

  test.each([
    [Object.create(null), false],
    [myClass, false],
    [myClass2, false],
    [myClass3, false],
    [[], false],
    [new Array(), false],
    [new Date('_'), false],
    [new Date(), false],
  ])('isPlainObject(%o) is %s', (a, expected) => {
    expect(isPlainObject(a)).toBe(expected);
  });
});