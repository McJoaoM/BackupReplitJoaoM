// EXPORTS EJS
// VARIÁVEIS, FUNÇÕES, CLASSES

const nome = "Julius";

function dizOla() {
  return `Olá, ${nome}`;
}
// EXPORTAÇÃO INLINE

export function toUpper(text) {
  return `${text.toUpperCase()}`;
}
// EXPORTAÇÃO DEFAULT (PADRÃO)
  function toLower(text) {
    return `${text.toLowerCase()}`;
  }
export default toLower;

export { nome, dizOla };
