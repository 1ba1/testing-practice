const analyze = require('./analyze');

test('returns an object with the array\'s average, min, max, and length values', () => {
  const result = {
    average: 23.2,
    min: 1,
    max: 100,
    length: 5,
  }
  expect(analyze([1,10,100,2,3])).toEqual(result);
});