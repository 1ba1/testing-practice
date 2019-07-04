const reverseString = require('./reverse');

test('reverses a string', () => {
  expect(reverseString('microverse')).toBe('esrevorcim');
});
