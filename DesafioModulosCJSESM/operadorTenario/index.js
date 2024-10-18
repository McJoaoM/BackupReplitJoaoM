// OPERADOR TENARIO SERVE PARA FAZER ESCOLHA DO FLUXO DE UMA CONDIÇÃO, OU SEJA,
//PODEMOS SUBSITUIR O USO DO IF/ELSE POR ELE.

const { arrayBuffer } = require("stream/consumers");

// EX0: <variavel> = <condição> ? <valor_verdadeiro> : <valor_falso>;

const idade = 7;
if(idade >= 18) {
  console.log("PERMITA A ENTRADA")  
} else {
console.log("ACESSO NEGADO")
}
const passe = idade >= 18 ? "PERMITA A ENTRADA" : "ACESSO NEGADO"
console.log(passe)


// EX1 TERNARIO COM MULTIPLOS VALORES
// const operador = "+"
// function calcula(n1, n2, op){
//   const res = op === "+" ? n1 + n2 
//     : op === "-" ? n1 - n2 
//     : op === "*" ? n1 * n2
//     : n1 / n2 
//     return res
// }
// console.log(calcula(2,5, operador))

//const operador = "+"
//function //calcular(n1, n2, op) {
  //const res = 0;
  //if(op === "+") {
    //res = n1 + n2
    //}
   // else if (op === "*") {
   // res = n1 * n2
   // }
   // else if (op === "-") {
   // res = n1 - n2
    //} else {
      //res = n1 / n2
   // }
   // return res
// }
//console.log(calcular(2,5, operador))

// Desafio
//1) crie um array pessoas
//deve conter um objeto como nome/idade/sexo
//2) crie um array vazio (meninos)
//3) crie um array vazio (meninas)
//Faça uma função que
  // Intere (loop) sobre o array pessoas
  // Caso o atributo seja == "F"
  // Adicione o objeto atual no array meninas
// (arrayBuffer.push(obj))
// caso contrario, se for "M" adicione ao objeto (Meninos)
// IMPRIMA OS OBJETOS > [pessoas, meninos, meninas]


// 1) Crie um array 'pessoas' contendo objetos com nome, idade e sexo.
let pessoas = [
    { nome: "Maria", idade: 25, sexo: "F" },
    { nome: "João", idade: 30, sexo: "M" },
    { nome: "Ana", idade: 20, sexo: "F" },
    { nome: "Pedro", idade: 22, sexo: "M" },
    { nome: "Carla", idade: 28, sexo: "F" }
];

// 2) Crie um array vazio 'meninos'.
let meninos = [];

// 3) Crie um array vazio 'meninas'.
let meninas = [];


//as questões 4, 5, e 6 usei o chat gpt para resolver.
// 4) Função para separar as pessoas por sexo.
function separarPorSexo() {
    for (let pessoa of pessoas) {
        // 5) Caso o atributo sexo seja "F", adicione o objeto atual ao array 'meninas'.
        if (pessoa.sexo === "F") {
            meninas.push(pessoa);
        } 
        // 6) Caso contrário, se for "M", adicione ao array 'meninos'.
        else if (pessoa.sexo === "M") {
            meninos.push(pessoa);
        }
    }
    // 7) Imprime os arrays de pessoas, meninos e meninas.
    console.log("Pessoas:", pessoas);
    console.log("Meninos:", meninos);
    console.log("Meninas:", meninas);
}

// Chama a função para separar as pessoas por sexo.
separarPorSexo();