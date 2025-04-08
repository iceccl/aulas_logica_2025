const prompt = require('prompt-sync')();

let numero = parseInt(prompt('digite um número inteiro: '));
let numero1 = 2
if ((numero % numero1) == 0) {
    console.log(`o número ${numero} é par`);
}else{
    console.log(`o número ${numero} é impar`);
}

