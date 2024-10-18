// IMPORTS DE MÓDULOS

import { dizOla, nome, toUpper } from "./lib/strings.js";
// IMPORTAÇÃO DEFAULT
import toLower from "./lib/strings.js";

console.log(nome);

console.log(dizOla());
console.log(toUpper("Marcelo"));
console.log(toLower("Anne"));

/** PASSOS DE UTILIZAÇÃO DOS MÓDULOS EJS 
1) EXPORTAMOS com export ou export default
2) LIBERAMOS o uso de módulos "type: "module"
3) IMPORTAMOS com import 
4) UTILIZAMOS O MÓDULO IMPORTADO DENNTRO DO INDEX.JS 
*/
