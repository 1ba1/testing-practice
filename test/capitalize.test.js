const capitalize = require('./capitalize');

test('capitalizes a string', () => {
  expect(capitalize('microverse')).toBe('Microverse');
});
