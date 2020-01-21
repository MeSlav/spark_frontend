export function addTwoNumbers(a, b) {
  return a + b;
};

export const sumAllNumbers = (...numbers) => numbers.reduce((acc, curr) => acc + curr);
export const sumAllNumbersWithFive = (...numbers) => numbers.reduce((acc, curr) => acc + curr, 5);

export default {
  x: 5,
  name: 'ivan',
  divideOneByOther: (a,b) => a/b,
  divideOneByFive: a => a/5,
}