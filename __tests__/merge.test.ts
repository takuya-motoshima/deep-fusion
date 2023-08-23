import merge from '~/merge';

test('1-level objects should be merged', () => {
  const a = {hello: 1};
  const b = {world: 2};
  expect(merge(a, b)).toMatchObject({
    hello: 1,
    world: 2,
  });
});

test('2-level objects should be merged', () => {
  const a = {person: {name: 'John'}};
  const b = {person: {age: 30}};
  expect(merge(a, b)).toMatchObject({
    person: {
      name: 'John',
      age: 30,
    }
  });
});

test('Objects with buffer values should be merged', () => {
  const a = {hello: 1};
  const b = {value: Buffer.from('world')};
  expect(merge(a, b)).toMatchObject({
    hello: 1,
    value: Buffer.from('world')
  });
});

test('Three or more objects should be merged', () => {
  const a = {person: {name: 'John'}};
  const b = {person: {age: 30}};
  const c = {person: {job: 'Leader'}};
  expect(merge(a, b, c)).toMatchObject({
    person: {
      name: 'John',
      age: 30,
      job: 'Leader',
    }
  });
});