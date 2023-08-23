import getType from '~/getType';

test.each([
  [{hello: 'I am a good old object'}, 'Object'],
  ['', 'String'],
  [undefined, 'Undefined'],
])('getType(%o) is %s', (a, expected) => {
  expect(getType(a)).toBe(expected);
});