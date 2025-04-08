const prompt = require('prompt-sync')();

//operações com variáveis
let nr1 = Number(prompt("digite um número: "));
let nr2 = Number(prompt("digite um número: "));
let soma = nr1 + nr2

console.log(`A soma entre ${nr1} + ${nr2} é igual: ${soma}`)

//Exercícios

let diferenca = nr1 - nr2;

console.log(`A diferença entre ${nr1} - ${nr2} e iguala à: ${diferenca} `);

let multi = nr1 * nr2;

console.log(`A multiplicação entre ${nr1} x ${nr2} se iguala à: ${multi} `);

let divisao = nr1 / nr2;

console.log(`A divisão entre ${nr1} / ${nr2} se iguala à: ${divisao}`);

let exponenciacao = nr1 ** nr2;

console.log(`A exponenciação entre ${nr1} ** ${nr2} se iguala à: ${exponenciacao} `);

//calculando novo preço do celular

let valor = Number(prompt('digite o preço do celular: '));
let desconto = Number(prompt('digite o preço do desconto: '));

valor = valor - desconto
console.log(`O valor do celular após o desconto de R$${desconto} é R$${valor}`);

//exercícios
let numero = Number(prompt('valor do número: '));
let dobro = numero * 2
let metade = numero / 2
console.log(`O dobro do número selecionado é ${dobro}`);
console.log(`a metade do número selecionado é ${metade}`);

//passo 1
var valorHora = Number(prompt('digite o valor da remuneração por hora: '))
var hora = Number(prompt('digite a quantidade de horas trabalhadas por dia: '))
var dia = Number(prompt('digite a quantidade de dias que vou trabalhar: '))
//passo 2
var ganhoTotal = (valorHora * hora) * dia
//passo3
console.log(`trabalhando ${hora} horas por dia, durante ${dia} dias, ganhando ${valorHora}R$ 
    por hora, ao final do projeto você terá ${ganhoTotal}R$. `);

 


