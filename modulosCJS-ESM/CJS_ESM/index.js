// IMPORT ESM
import { getGuilda } from "./lib/personagem.js";
import getPersonagem from "./lib/personagem.js";
import { fs, path, http } from "./lib/nativos.cjs";

//CHAMANDO FUNÇÃO DO MOD. PERSONAGEM
console.log(getPersonagem());
getGuilda(); // CONSOLE.LOG()

// CHAMANDO MODULOS CJS
console.log(fs);
console.log(path);
console.log(http);
