// SET INTERVAL - EXECUTA A CADA X MILISEGUNDOS
//let n = 0
//const intervalo1 = setInterval(function() {

//console.clear()
//console.log("Executando a cada 1 segundo", n);
//n = n + 1
//}, 1000)

//clearInterval(intervalo1)// Stop no intervalo


// SET TIMEOUT - EXECUTA APÓS X MILISEGUNDOS
//setTimeout(function() {
//clearInterval(intervalo1)// Stop no intervalo
//window.alert("já passou 5 segundos ") // Gera um alerta na tela
//location.href = "https://www.google.com.br" // Redireciona para o site
//}, 5000)

// EXERCÍCIO/ DESAFIO! //


// A) CRIE UM PROGRAMA QUE MOSTRE UM NÚMERO RANDÔMICO QUE VAI DE 0 A 10 A CADA 3 SEGUNDOS.

// B) APÓS PASSADOS 15 SEGUNDOS, ENCERRE O INTERVALO USANDO clearInterval e setTimeout

let aleatorio = Math.random() * 10 // Gera um número aleatório entre 0 e 10
console.log(aleatorio)

setInterval(function) {
  let aleatorio = Math.round(Math.random() * 10)
  console.log(aleatorio)

}, 3000) // 3 segundos

setTimeout(function() {
  alert("pop up chato!")
  clearInterval(intervalo2)
  location.href = "https://www.google.com.br" // redirecionamento
}, 15000) //15 segundos