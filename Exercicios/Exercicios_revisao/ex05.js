const prompt = require('prompt-sync')();

let sexo = prompt('Qual é o seu sexo? (M para Masculino)(F para Feminino): ').toUpperCase()
if (sexo == 'M') {
    console.log('Seu sexo é masculino');
} else if (sexo == 'F') {
    console.log('Seu sexo é feminino');
}else{
    console.log('Sexo inválido');
}