const { sum } = require('./calculator');

// deveria somar 2 e 2 e o resultado deve ser 4"
it('should sum 2 and 2 and the result must be 4', () => {
  expect(sum(2, 2)).toBe(4);
});

// deveria somar 2 e 2, mesmo se um deles for uma string, o resultado deve ser 4"
it('should sum 2 and 2 even if one of the is a string and the result must be 4', () => {
  expect(sum('2', 2)).toBe(4);
});

// deveria lançar um erro, se o que é fornecido ao método não pode ser somado
it('should throw an error if what is provided to the method cannot be summed', () => {
  expect(() => {
    sum('', 2);
  }).toThrowError();

  expect(() => {
    sum([2, 2]);
  }).toThrowError();

  expect(() => {
    sum({});
  }).toThrowError();

  expect(() => {
    sum();
  }).toThrowError();
});
