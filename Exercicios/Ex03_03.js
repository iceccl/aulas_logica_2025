const prompt = require('prompt-sync')();

let mes = parseInt(prompt('digite o numero do mês (1-12): '))
switch (true) { 
    case(mes == 1):
    console.log('Janeiro tem 31 dias');
    break;
case(mes == 2):
    console.log('Fevereiro tem 28 dias (29 em anos bisextos)');
    break
case(mes == 3):
    console.log('Março tem 31 dias');
    break;
case(mes == 4):
    console.log('Abril tem 30 dias');
    break;
case( mes == 5):
    console.log('Maio tem 31 dias');
    break
case(mes == 6):
    console.log('Junho tem 30 dias');
    break;
case(mes == 7):
    console.log('Julho tem 31 dias');
    break;
case(mes == 8):
    console.log('Agosto tem 31 dias');
    break;
case(mes == 9):
    console.log('Setembro tem 30 dias');
    break;
case(mes == 10):
    console.log('Outubro tem 31 dias');
    break;
case(mes == 11):
    console.log('Novembro tem 30 dias');
    break;
case(mes == 12):
    console.log('Dezembro tem 31 dias');
break;
default:
    console.log('Mora em marte, Elon Musk?');
}



