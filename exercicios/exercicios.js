// Nos exercícios a baixo encontre e corrija o erro para fazer o que se pede

// Ex 1 - Some todos os número do array
let resultado = [1, 2, 3, 4, 5].reduce(number => {
  return number ++
}, 0)

console.log(resultado)

// Ex 2 - Retone apenas os números pares
resultado = [1, 2, 3, 4].map(number => number % 2 !== 0)
console.log(resultado)

// Ex 3 - Some todos os números positivos
resultado = [1, 2, 3, 4, -1, -10, -2]
  .map(number => number >= -1)
  .reduce((a, b) => a + b)

  