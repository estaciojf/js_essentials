const arrNumbers = [1, 2, 3, 4, 5];
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
// Função que iterar os números
const itNumbers = (numbers) => {
  numbers.forEach(number => {
    console.log(`Contantdo ${number}...`)
  })
};

// Itera os números e soma um para cada iteração
const addOne = (numbers) => {
  numbers.forEach(number => {
    console.log(number + 1);
  })
};

// Itera um array mostrando cada atributo (ki) do objeto
const showWarriosKi = (warriors) => {
  warriors.forEach(warrior => {
    console.log(`${warrior.name} tem ${warrior.ki} de Ki`)
  })
}

itNumbers([10, 11, 12]);
itNumbers(arrNumbers);
addOne(arrNumbers);
console.log(arrNumbers);
showWarriosKi(arrDBZ);