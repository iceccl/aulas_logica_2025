const prompt = require('prompt-sync')();

let preco = Number(prompt('digite o preço do produto: '));
let precoComdesconto = preco - preco * 0.05
console.log(`preço sem desconto ${preco.toFixed(2)}`);
console.log(`preço com desconto ${precoComdesconto.toFixed(2)}`);


