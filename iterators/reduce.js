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
// Função soma dois números usada no reduce
const sumNumbers = (accumulador, current) => accumulador + current;

// Para cada iteração chama a funçao sumNumbers, começando com 0
const sumAllNumbers = arrNumbers.reduce(sumNumbers, 0)

// Função que soma os Kis, 
// atenção que o valor accumulador sempre será o valor já somado ou o primeiro valor
// por isso somente o currente usa o atributo ki.
const sumKis = (accumulador, current) => accumulador + current.ki;

const sumAllKis = arrDBZ.reduce(sumKis, 0)

console.log(sumAllNumbers)
console.log(sumAllKis)