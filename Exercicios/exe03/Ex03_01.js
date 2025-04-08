const prompt = require('prompt-sync')();

let dia = Number(prompt('digite um número de 1 a 7: '));
switch (true) {
    case dia == 2:
    console.log(`o dia da semana correspondente de ${dia} é segunda-feira.`);
break;
    case dia == 3:
    console.log(`o dia da semana correspondente de ${dia} é Terça-feira.`);
break;
    case dia == 4:
    console.log(`o dia da semana correspondente de ${dia} é quarta-feira.`);
break;
    case dia == 5:
    console.log(`o dia da semana correspondente de ${dia} é quinta-feira.`);
break;
    case dia == 6:
    console.log(`o dia da semana correspondente de ${dia} é sexta-feira.`);
break;
    case dia == 7:
    console.log(`o dia da semana correspondente de ${dia} é sabado.`);
break;

    case dia == 1:
    console.log(`o dia da semana correspondente de ${dia} é domingo.`);
break;

    default:
    console.log(`o número que você digitou não corresponde a nenhum dia da semana.`)
}





