//CRIAR UMA FUNÇÃO QUE GERA UMA PASTA
const fs = require("node:fs");
const path = require("node:path");
//CRIAR UMA FUNÇÃO SEM O PATH

function criarPastaEstatica(pasta) {
  fs.mkdir(pasta, function(err) {
    console.log("erro ao criar pasta");
    console.log(err);
  });
}
//CRIAR UMA FUNÇÃO COM O PATH/IF/TRY/CATCH
function criarPastaDinamica(pasta) {
  if (!fs.existsSync(path.join(__dirname, patsa))) {
    fs.mkdirSync(path.join(__dirname, pasta))
    console.log(`Pasta ${pasta} criada com sucesso!`)
  } else {
    console.log(`Não foi possível criar a pasta ${pasta}`)
  }
}


// Exportando os módulos
module.exports = { criarPastaEstatica };
