const prompt = require('prompt-sync')();
//exemplo operadores lógicos

let altura = Number(prompt('digite sua altura: '));
let peso = Number(prompt(' digite seu peso: '));
let imc = peso/(altura**2);
console.log(imc);
if (imc < 18.5){
    console.log('abaixo do peso ideal');
}else if (imc >= 18.5 && imc < 25){
    console.log('peso ideal');
}else if (imc >= 25 && imc < 30){
    console.log('sobrepeso');
}else {console.log('obesidade');
}

//verificar se o triangulo é equilatero ou escaleno
//receber lado 1
let lado1 = Number(prompt('digite o valor do lado 1: '));
let lado2 =  Number(prompt('digite o valor do lado 2: '));
let lado3 =  Number(prompt('digite o valor do lado 3: '));
//verificar se o triangulo é equilatero caso tenha todos os lados iguais
if ((lado1 == lado2) && (lado2 == lado3)) {
    console.log('Triangulo Equilatero');
}else if ((lado1 != lado2) && (lado2 != lado3) && (lado1 != lado3)) {
    console.log('triangulo escaleno');
}else {
    console.log('triangulo isóceles');
}
//Descobrir a quantidade de horas trabalhadas
let horas = Number(prompt('Total de horas trabalhadas: '));
let vendas =  Number(prompt('Total de vendas: '));

//validar se uma das condições foi atendida (mais de 5000 em vendas ou mais de 40 horas trabalhadas)
if (vendas > 5000 || horas > 40 ) {
    console.log('Tem direito ao bônus');
}else{
    console.log('Não tem direito ao bônus');
}

let caractere = String(prompt('digire uma letra: '));

if (caractere == "a" || caractere == "e" || caractere == "i" || caractere == "o" || caractere == "u") {
    console.log('seu caractere é uma vogal.');
}else{
    console.log('seu caractere é uma consoante.');
}
