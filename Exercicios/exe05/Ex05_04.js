const prompt = require('prompt-sync')();


let inicio = Number(prompt("Digite o valor do início: "));
let fim = Number(prompt("Digite o valor final: "));
let passo = Number(prompt("digite o valor do passo: "))

for(inicio; inicio < fim; inicio += passo) {
    console.log(`Valor inicial: ${inicio}`);
    console.log(`Valor final: ${fim}`);
    console.log(`Valor do passo: ${passo}`);
    console.log("==========================|");
}