const prompt =  require('prompt-sync')();

let nota1 = Number(prompt('digite a primeira nota: '));
let nota2 = Number(prompt('digite a segunda nota: '));
let media =  (nota1 + nota2) / 2
switch(true){
    case media < 5:
    console.log('Quem mandou não estudar rsrsrs, você está reprovado.');
    break;
case(media >= 5 && media <7):
    console.log('por pouco hein, você está de recuperação.');
    break;
case(media > 7 && media <=10):
    console.log('Parabéns!, você está aprovado.');
break;
default:
    console.log('Sua inteligência está tão acima da média que eu não consegui compreender o que você digitou');
}


