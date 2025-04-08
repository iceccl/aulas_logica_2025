const prompt = require('prompt-sync')();

let altura = Number(prompt('qual é a altura da parede (em metro) ?: '))
let largura = Number(prompt('qual é a largura da parede (em metro) ?: '))
let tinta = 2 
console.log(`a sua parede possui ${altura * largura}m² de área,
     seria nescessário ${((altura * largura) / tinta).toFixed(2)} Litros de tinta para pintar`);


