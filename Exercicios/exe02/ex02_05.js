const prompt = require('prompt-sync')();

let ano_nascimento = Number(prompt('quantos anos você tem?: '));

if (ano_nascimento >= 18) {
    console.log('você é maior de idade.');
}else{
    console.log('você é menor de idade.');
}

