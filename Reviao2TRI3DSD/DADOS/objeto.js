// OBJETOS SÃO UMA ESTRUTURA COMṔLEXAS DE DADOS EM JAVA SCRIPT
// SÃO ORGANZIZADOS POR

const banana = {
  nome: "Banana",
  cor: "amarela",
  casca: true,
  peso: 0.5,
  paisesDeOrigem: ["Brasil", "Chile", "Argentina"],
  decascar: function () {
    this.casca = false;
    return `Banana decascada ohohoh`;
    // console.log("fUNCIONA?") NÃO FUNCIONA
  },
};
// console.log(banana);
// console.log("===================================");
// console.log(Object.keys(banana)); // Retorna as chaves do objeto
// console.log("==================================="); // Retorna os valores do objeto
// console.log(Object.values(banana));
// console.log("===================================");
// console.log(banana.casca);
// console.log(banana.decascar());

// É possivel fazer uma iteração em objetos // for, for in, for off

console.log("Iterando com for...of e Object.entries():");
const entradas = Object.entries(banana);
for (const [chave, valor] of entradas) {
  console.log(`${chave}: ${valor}`);
}

console.log(entradas);

// iteração feita com entries (retorna um iterador que contém pares de índice e valor. Você pode usar esse iterador em um loop)
