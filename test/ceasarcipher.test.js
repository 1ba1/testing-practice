const cc = require('./caesarcipher');

test('encrypts lexicographically ordered string', () => {
  expect(cc('abcde', 3)).toBe('defgh');
});

test('encrypts string wrapping from z to a', () => {
  expect(cc('xYz', 3)).toBe('aBc');
});

test('should not encrypt punctuation', () => {
  expect(cc('Programming is cool!', 3)).toBe('Surjudpplqj lv frro!');
});
