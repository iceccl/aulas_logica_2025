const prompt = require('prompt-sync')();

soma = 0;
let menor = Infinity;
let maior = 0
let entrada;
let i = 0;
while (i <= 10){
    entrada = Number(prompt("digite um número: "));
    if (entrada > maior) {
        maior = entrada;
    }
    if(entrada < menor){
        menor = entrada;
    }

    soma += entrada;
    //soma = entrada + soma
    i++
}
let media = soma /10
console.log(`Maior valor: ${maior}`);
console.log(`Menor valor: ${menor}`);
console.log(`Media: ${media.toFixed(2)}`);

