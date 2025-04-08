const prompt = require('prompt-sync')();
let numero = Number(prompt('digite um número: '));
let numero1 = Number(prompt('digite outro número: '));

if (numero > numero1) {
    console.log(`o número ${numero}é maior, e o número ${numero1} é menor`); 
}else{
    console.log(`o número ${numero1} é maior,e o número ${numero} é menor`);
}
