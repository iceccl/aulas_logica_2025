const prompt = require('prompt-sync')();

let numero_int = parseInt(prompt('digite um número inteiro: '))
let sucessor = numero_int + 1
let antecessor = numero_int - 1
console.log(`O sucessor do número ${numero_int} é ${sucessor} e seu antecessor é ${antecessor}`);
