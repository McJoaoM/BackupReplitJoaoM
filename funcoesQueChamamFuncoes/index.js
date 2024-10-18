// crie um array objetos => pessoas
//com os seguntes atributos: nome, idade, peso, altura
//crie uma função que intere sobre o array e retire nomes e sobrenomes
//crie uma variavel com o conteúdo: 
//         -> | const emailBase = "@escola.pr.gov.br" |
// a partir desses dados forme um @escola com nome.sobrenome+emailBase
//execute a função.



const pessoas = [
  {nome: "Jonas", sobrenome: "martins" },
  {nome: "Marta", sobrenome: "Kent"  },
  ];

// EMAIL BASE

const emailBase = "@escola.pr.gov.br"


for (pessoa of pessoas) {
  // console.log(pessoa);
  console.log(pessoa.nome);
// nome.sobrenome+emailBase
}