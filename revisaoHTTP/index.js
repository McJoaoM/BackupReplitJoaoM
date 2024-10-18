// IMPORTANDO MODULO COM REQUIRE
const http = require ('http');

const PORT = 8000 // PORTA DO SERVIDOR
//CRIANDO O SERVIDOR HTTP
const servidor = http.createServer((req, res) => {
  console.log(req.url, req.method);
});
// INICIANDO O SERVIDOR NA PORTA 8000
servidor.listen(PORT, () => {
  console.log (`Servidor rodando na porta ${PORT}`);  
}); 