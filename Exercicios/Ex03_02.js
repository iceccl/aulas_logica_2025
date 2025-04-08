const prompt = require('prompt-sync')();

let anoAtual = parseInt(prompt('em que ano estamos?: '));
let anoNasc = parseInt(prompt('em que ano você nasceu?; '));
let anos = anoAtual - anoNasc
switch (true) {
    case anos <= 10:
    console.log('criança ou um nenem, gugu dada');
    break;
 case ( anos >= 11 && anos <17 ) :
    console.log('adolescente.');
    break;
 case (anos >= 18 && anos <59):
    console.log('adulto.');
    break;
 case anos >=60 && anos < 138:
    console.log('idoso.');
    break;
default:
    console.log('é imortal rsrsr');
}




