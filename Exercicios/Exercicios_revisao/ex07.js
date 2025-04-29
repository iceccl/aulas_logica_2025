const prompt = require('prompt-sync')();
let ganhoPH = Number(prompt('O quanto você ganha por hora?: '))
let horaMes = Number(prompt('Quantas horas você trabalha por mês?: '))
let calculo = ganhoPH * horaMes
let IR = calculo * (11/100)
let inss = calculo * (8/100)
let Sindicato = calculo * (5/100)
let Salario_Liquido = calculo - (IR,inss,Sindicato)
console.log('Você ganhou ', calculo,' neste mês');
console.log(`+ Salário bruto: ${calculo}`);
console.log(`- IR: ${IR}`);
console.log(`- INSS: ${inss}`);
console.log(`- Sindicato: ${Sindicato}`);
console.log(`= Salário líquido: ${Salario_Liquido}`);


