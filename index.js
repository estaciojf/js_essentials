const pokemons = [
  {
    name: "Pikachu",
    type: "Eletric",
    trainner: "Ash",
    value: 200,
  },
  {
    name: "Bulbassaur",
    type: "Grass",
    trainner: "Ash",
    value: 200,
  },
  {
    name: "Charmander",
    type: "Fire",
    trainner: "Ed",
    value: 200,
  },
  {
    name: "Squirtle",
    type: "Water",
    trainner: "Ash",
    value: 400,
  },
  {
    name: "Lapras",
    type: "Water",
    trainner: "Ed",
    value: 600,
  }
]

const getWaterPokemon = (pokemon) => pokemon.type == "Water";
const getAshPokeon = (pokemon) => pokemon.trainner == "Ash";

const isTrue = () => true;
const isFalse = () => false

const waterPokemons = pokemons.filter(function(pokemon){
    if (pokemon.type == "water")
      return true;
})

const water = pokemons.filter(getWaterPokemon).filter(getAshPokeon)

const sumValues = (acc, curr) => acc + curr.value

const totalValue = pokemons.reduce(sumValues, 0);

console.log(totalValue)