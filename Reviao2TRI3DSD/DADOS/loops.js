// LOOPS SÃO LAÇOS/CICLOS DE REPETIÇÃO INFINITA
// for, for in, for of, for each, while, do while
// LOOP: inicialização, condição de parada. incremento

const pokedex = ["Pikachu", "Charizard", "Bulbassauro", "Squirtle", "Eevee"];
//    0           1            2            3           4            5
const valores = [150, 250, 1000, 3500];

const pokemonList = [
  { nome: "Pikachu", tipo: "eletrico" },
  { nome: "Charmander", tipo: "fogo" },
  { nome: "Blastoise", tipo: "Agua" },
  { nome: "Pichu", tipo: "eletrico" },
];

for (let pokemon of pokemonList) {
  const nome = pokemon.nome
  const tipo = pokemon.tipo
  console.log(`O pokemon ${nome} é do tipo ${tipo}`)
}

//for (let i = 0; i < pokedex.length; i++) {}

//for (let i in valores) {
//console.log(valores[i]);}

//for (let i of valores) {
//console.log(i);
//}

//https://pythontutor.com/

//console.log (pokedex[3])
// LOOP FOR IN