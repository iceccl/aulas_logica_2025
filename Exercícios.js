const prompt = require ('prompt-sync')();
console.log("bem-vindo ao curso de JavaScript!");
console.log("Estou aprendendo a usar o console.log.");
console.log(" 15 + 25=", 15 + 25);
console.log("100 - 45=", 100 - 45);
console.log("  12 * 7=", 12 * 7);
console.log("144 / 12=", 144 / 12);
console.log("  20 % 3=", 20 % 3);
console.log("  2 ** 5=", 2 ** 5);
 

//Exercícios de variáveis

let nomeAluno = "Lyuz";
let altura = 1.63;
let escola = "sesi ce025";
let ano = "2º EM-A";

let nomeProfessor = "Ricardo";
let materia = "Desenvolvimento de sistemas";
let anoIngresso = "2022";

//exibir os valores das variáveis

nomeAluno = prompt('qual é seu nome?');
altura = parseFloat(prompt('qual é a sua altura?'));
escola = prompt('qual escola você estuda?');
ano = prompt('em que ano letivo você está?');
nomeProfessor = prompt('qual o nome do seu professor?');
materia = prompt('qual matéria ele educa?');
anoIngresso = parseInt(prompt('em que ano ele ingressou na escola?'));

console.log(`seu nome é ${nomeAluno} você tem ${altura}m e estuda na escola ${escola} no ${ano}.`);

console.log(`o nome do(a) seu(ua) professor(a) é ${nomeProfessor} e ele leciona ${materia} e ingressou na escola 
    no ano de ${anoIngresso}`);



