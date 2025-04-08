const prompt = require('prompt-sync')();

let dias = parseInt(prompt('digite a quantidade de dias que o carro foi alugado: '));
let kmpercorrido = parseFloat(prompt('digite a qtd de km percorrido: '));

let custoPordia = 60;
let custoPorkm = 0.15;

let custoTotal = (dias * custoPordia) + (kmpercorrido *custoPorkm);
console.log(`Custo da viagem: ${custoTotal.toFixed(2)}`);


