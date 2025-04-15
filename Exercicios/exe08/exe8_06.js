const prompt = require('prompt-sync')();
let vogais = ['a','e','i','o','u']
let palavra = String(prompt('Digite uma palavra: '))
let qtdVogais = 0

for (let letra of palavra) {
    if (vogais.includes(letra)) {
        qtdVogais++
    }
}
console.log(`${palavra} tem ${qtdVogais} vogais`);

