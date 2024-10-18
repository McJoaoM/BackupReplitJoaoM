// INPORTAR O FS
// INPORTAR O HTTP
// CRIAR UM SERVIDOR QUE INTERPRETE O ARQUIVO HTML
const fs = require("fs");
const http = require("http");

const PORT = 3000;
const servidor = http.createServer(function (req, res) {
  if (req.url === "/") {
    fs.readFile("./docs/index.html", "utf-8", function (err, arquivo) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(arquivo);
      res.end();
    });
  }
});
servidor.listen(PORT, function () {
  console.log("Servidor rodando na porta: " + PORT);
});