const prompt = require('prompt-sync')();

let entrada;
let qtdPar = 0;
let somaPar = 0;
let qtdImpar = 0;
let somaImpar = 0; 
console.log('Digite números (0 para encerrar): ');
while (true) {
    entrada = Number(prompt("Número: "))
    if (entrada === 0) {
        break;//Encerra o loop
    }
    if (entrada % 2 == 0) {
        somaPar = entrada + somaPar;
        qtdPar++
    }else{
        somaImpar = entrada + somaImpar;
        qtdImpar++;
    }

}
console.log(`Soma dos pares digitados: ${somaPar}, quantidade se par: ${qtdPar}`);
console.log(`Soma dos ímpares digitados: ${somaImpar}, quantidade se ímpar: ${qtdImpar}`);


