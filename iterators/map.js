const arrNumbers = [1, 2, 3, 4]
const arrDBZ = [
  {
    name: "Goku",
    ki: 9000
  },
  {
    name: "Vegeta",
    ki: 10000
  }
]

// Retornar um array somando um em cada item da iteração
const plusNumbers = arrNumbers.map(number => {
  return number + 1;
})

// Mesma coisa de plusNumbers, porém com uma escrita mais curta 
const plusNumbersSimple = arrNumbers.map(number => number + 1)

// Retorna um novo array com todos os atributos ki + 1000
const upperKis = arrDBZ.map(warrior => warrior.ki + 1000)

// Retorna um novo array com objetos iguais porém com o atributo ki + 1000
const upperKiWarriors = arrDBZ.map(warrior => {
  return {
    name: warrior.name,
    ki: warrior.ki + 1000,
  }
})

console.log(plusNumbers)
console.log(plusNumbersSimple)
console.log(upperKis)
console.log(upperKiWarriors)
