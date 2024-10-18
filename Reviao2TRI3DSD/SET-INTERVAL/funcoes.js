// DECLARAÇÃO DE FUNÇÃO
function dizOi() {
  console.log("oi");
}
function opaBom(nome) {
  console.log("Olá, " + nome);
}
const salario = 2500;

function formataSalario() {
  return "R$ " + salario + ",00";
}

// FUNÇÃO DO TIPO ARROW (FUNÇÃO SETA)
const imprimeMeuTime = () => {
  return "Cruzeiro";
};

//  INVOCAÇÃO DE FUNÇÃO
dizOi();
opaBom("Girino");
//formataSalario()
console.log(formataSalario());
console.log(imprimeMeuTime());
