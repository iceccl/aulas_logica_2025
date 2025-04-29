const prompt = require('prompt-sync')();
let ganhoPH = Number(prompt('O quanto você ganha por hora?: '))
let horaMes = Number(prompt('Quantas horas você trabalha por mês?: '))
let calculo = ganhoPH * horaMes
console.log(calculo);