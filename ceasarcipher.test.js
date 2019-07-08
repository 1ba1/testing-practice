const cc = require('./caesarcipher');

test('encrypts string with Caesar Cipher (1)', () => {
  expect(cc('abcde', 3)).toBe('defgh');
});

test('encrypts string with Caesar Cipher (2)', () => {
  expect(cc('xYz', 3)).toBe('aBc');
});

test('encrypts string with Caesar Cipher (3)', () => {
  expect(cc('Programming is cool!', 3)).toBe('Surjudpplqj lv frro!');
});
