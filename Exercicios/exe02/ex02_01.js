const prompt = require('prompt-sync')();
let nota1 = Number(prompt('digite a nota do aluno: '));
let nota2 = Number(prompt('digite a outra nota do aluno: '));
let media = (nota1 + nota2) / 2
if (media >= 7) {
    console.log(`sua nota foi de ${media}, você está aprovado!`)
}else{
    console.log(`sua nota foi de ${media}, você está reprovado!`);
}