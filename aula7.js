const prompt = require('prompt-sync')();
//extruturas condicionais e operadores relacionais.
let a = 2;
let b = 3;
console.log(a == b);//relação de igualdade
console.log(a != b);//relação de diferença
console.log(a > b);//maior
console.log(a >= b);//maior ou igual
console.log(a < b);//menor
console.log(a <= b);//menor ou igual

//estruturas condicionais
let tenhoIngresso = true;
if(tenhoIngresso == true){
    console.log('posso entrar')
}
//validando maioridade

//receber o valor da idade
let idade = Number(prompt('qual sua idade?'));

//maior ou igual a 18?

if (idade >=18) {
    console.log('maior idade');
}

tenhoIngresso = false;
if(tenhoIngresso == true){
    console.log('posso entrar')
}
else{
    console.log('estou barrado no baile');
}
//outro exemplo de estrutura condicional
idade = Number(prompt('digite sua idade: '));
//verificar se é maior que 18
if (idade >= 18) {
    console.log('você é maior de idade');
}else{
    console.log('você é menor de idade');
}

