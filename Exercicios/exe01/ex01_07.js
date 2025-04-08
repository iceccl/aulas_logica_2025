const prompt = require('prompt-sync')();

let grana = Number(prompt('qual a sua quantia em dinheiro em R$?: '))
let cotacao = Number(prompt('digite a cotação do dólar atualmente: '))
let dolar = grana / cotacao
console.log(`você possui ${grana}R$ em sua carteira, que equivale à:  ${dolar.toFixed(2)}$ (dólares americanos).`);




