const prompt =  require('prompt-sync')();

let num1 = parseInt(prompt('digite um número inteiro: '));
let num2 = parseInt(prompt('digite outro número inteiro: '));

if (num1 == num2) {
    console.log('ambos os números são iguais.');
}else{
console.log('os números selecionados não são se equivalem.');
}

