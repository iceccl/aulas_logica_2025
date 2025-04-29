const prompt = require('prompt-sync')();

let altura = prompt('digite sua altura: ')
let sexo = prompt('digite seu sexo(M/F): ').toUpperCase()
if (sexo == 'M') {
    console.log(`Seu peso ideal é ${(72.7 * altura) - 58}kg`)
}else if (sexo == 'F'){
    console.log(`Seu peso ideal é ${(62.1 * altura) - 44.7}kg`);
}else{
    console.log('Sexo inválido');
}
