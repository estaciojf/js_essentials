const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const arrDBZ = [
  {
    name: "Goku",
    ki: 9000,
    raca: "Sayajin"
  },
  {
    name: "Vegeta",
    ki: 10000,
    raca: "Sayajin"
  },
  {
    name: "Kuririn",
    ki: 1,
    raca: "Humnao"
  },
  {
    name: "Yamcha",
    ki: -100,
    raca: "Humano"
  }
]
// Retonar apenas números pares
const retornaPar = (number) => {
  if (number % 2 === 0)
    return number;
}
// Soma usada no reduce
const soma = (acumulador, atual) => acumulador + atual; 

// Soma todos os pares
const somaPares = arr
  .filter(retornaPar)
  .reduce(soma)

console.log(somaPares)


const somaKis = (acumulador, atual) => acumulador + atual.ki;

const retornarSayajin = (warrior) => {
  if (warrior.raca === "Sayajin")
    return warrior;
}

const somaKisSayajins = arrDBZ
  .filter(retornarSayajin)
  .reduce(somaKis, 0)

console.log(somaKisSayajins)

const aumentaKiSayajins = arr