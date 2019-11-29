// Ex 1 - Some todos os impares

const numbers = [1, 2, 3, 4, 5, 6, 7, 10];
const negativeNumbers = numbers.map(number => number * -1)

// Versão bixão
const sum = (a, b) => a + b;
let resultado = numbers
  .filter(number => number % 2 !== 0)
  .reduce(sum, 0)

console.log('A soma de todos os ímpares: ', resultado)


// Versão suave
resultado = numbers.filter(number => {
  if (number % 2 !== 0) return true;
}).reduce((a, b) => {
  return a + b
}, 0)

console.log('A soma de todos os ímpares: ', resultado)

//Ex 2 - Encontra o maior numero

const isBigger = (a, b) => {
  console.log(a, b)
  if (a > b) return a;
  return b;
}

const biggerNumber = negativeNumbers.reduce(isBigger, -Infinity)
console.log('O maior número é: ', biggerNumber)

