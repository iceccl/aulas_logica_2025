const prompt = require('prompt-sync')();

let alcool = Number(prompt('digite o preço do álcool: '));
let gasolina = Number(prompt('didgite o valor da gasolina: '));

let conta = gasolina / (70/100)

if (alcool <= conta) {
    console.log('Abasteça em álcool.');
}else{
    console.log('abasteça em gasolina.');
}