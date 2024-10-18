//DesafioPessoasOpTenario


// 1) crie um array pessoas
// deve um objeto com nome/idade/sexo
// 2) Crie um array vazio (meninos)
// 3) Crie um array vazio (meninas)
//4) Faça uma função que:
// Itere(loop) sobre o array pessoas
// Casso o atributo sexo seja == "F"
//5) Adicione o objeto atual ao array meninas (array.push(obj))
//6) Caso contrário, se for "M" adicione ao objeto (meninos))
//7) IMPRIMA OS OBJETOS> [pessoas, meninos, meninas]]
const pessoas = [
  {nome:"Ana", idade: 22, sexo: "F"},
  {nome:"bruno", idade: 36, sexo: "M"},
  {nome:"Luiz", idade: 20, sexo: "M"},
  {nome:"jose", idade: 65, sexo: "F"},
  {nome:"amanda", idade: 40, sexo: "F"},

];

const meninas = [];
const meninos = [];

function filtroPessoas(arrPessoas) {
if (typeof arrPessoas == "object") {
  for (pessoa of arrPessoas){
    pessoas.sexo == "F" 
      ? meninas.push(pessoa) 
      : meninos.push(pessoa)}
  }
}

filtroPessoas(pessoas);
filtroPessoas(pessoas);

// ARRAY > OBJETO ANIMAL: RAÇA, PELO, SEXO



 
// console.log(pessoas[3].nome) // Como eu objeto bruno
// for (pessoa of pessoas){
//   if (pessoa.sexo == "F"){
//     meninas.push(pessoa);
//   } else if (pessoa.sexo == "M"){
//     meninos.push(pessoa);
//   } else {
//     console.log("Sexo inválido");
//   }
// }


 
 console.log("---meninas---");
console.log(meninas);

console.log("---meninos---");
console.log(meninos)