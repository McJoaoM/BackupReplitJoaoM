// veiculo.js

// Função para acelerar o veículo
export function acelerar(kmsPorHora) {
    return `${kmsPorHora} kms/h`;
}

// Função para mostrar dados do veículo
export function mostrarDadosVeiculo(marca, modelo, fabricante) {
    return `Marca: ${marca}, Modelo: ${modelo}, Fabricante: ${fabricante}`;
}
// cjsModule.js
const fs = require('fs');
// Função para criar um arquivo com um conteúdo específico
function criarArquivo(nomeArquivo, conteudo) {
    fs.writeFileSync(nomeArquivo, conteudo, 'utf8');
    console.log(`Arquivo ${nomeArquivo} criado com sucesso!`);
}

module.exports = { criarArquivo };
// index.js

// Importando as funções do módulo veiculo.js
import { acelerar, mostrarDadosVeiculo } from './veiculo.js';

// Importando o módulo CJS usando dynamic import (necessário para CJS em um ambiente ESM)
import('./cjsModule.js').then(cjsModule => {
    // Usando a função do módulo CJS para criar um arquivo
    cjsModule.criarArquivo('veiculo.txt', 'Dados do veículo:');
});

// Usando as funções do módulo veiculo.js
const velocidade = acelerar(120);
console.log(velocidade);  // Output: 120 kms/h

const dadosVeiculo = mostrarDadosVeiculo('Ford', 'Mustang', 'Ford Motor Company');
console.log(dadosVeiculo);  // Output: Marca: Ford, Modelo: Mustang, Fabricante: Ford Motor Company
