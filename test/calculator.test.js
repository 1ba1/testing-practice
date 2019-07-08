const calculator = require('./calculator');

test('adds two numbers', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('substracts two numbers', () => {
  expect(calculator.substract(5, 3)).toBe(2);
});

test('multiply two numbers', () => {
  expect(calculator.multiply(7, 6)).toBe(42);
});

test('divide', () => {
  expect(calculator.divide(10, 5)).toBe(2);
});
