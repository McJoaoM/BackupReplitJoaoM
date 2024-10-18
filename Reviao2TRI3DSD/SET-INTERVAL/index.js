// exeplo 01 - ALTERAR O SALARIOS
let salario = 1000;

const nome = 'joão'
const sobreNome = 'Silva'

function imprimeDados(){
  const pessoa = `Meu nome é ${nome} ${sobreNome}`
  const salarioFormatado = `R$ ${salario}`
  console.log("Ganha: ", salarioFormatado)
}

// EXECUÇÃO OU INVOCAÇÃO
imprimeDados()

// IMPRIMIR A CADA 1S INVOCANDO A FUNÇÃO IMPRIMEDADOS

// setInterval(function(){
//   console.clear()
//   console.log(salario)
//   salario = salario + 100;
// }, 200)
