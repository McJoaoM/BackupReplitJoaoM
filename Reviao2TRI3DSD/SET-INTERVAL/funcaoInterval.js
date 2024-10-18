// setInterval
/**
 * Uma função personalizada
 *  - deve imprimir um objeto js
 * que seja executada de 2 em 2s
 * pela SetInteral
 *
 */

const { clear } = require("console");

function imprimirObjeto() {
  const objeto = {
    nome: "João",
    idade: 17,
    cidade: "Exemploville",
  };

  console.log(objeto);
}

const intervalo1 = setInterval(() => {
  console.log(funcionario());
}, 200);

setTimeout (function(){
  clearInterval(intervalo1);
  console.info("Intervalo 1 encerrado")
}, 5000)


// setTimeOut
// clearInterval
