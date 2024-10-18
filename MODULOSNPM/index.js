const http = require('http');

PORT = 3031

const server = http.createServer(function(req, res){
  console.log(res.statuscode)
  console.log(res, StatusMesage)
  res.sendDate("Hello Home Page");

});
server.listen(PORT, function(error)) {
  console.log("Rodando...");
}
  