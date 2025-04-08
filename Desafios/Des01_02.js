const prompt = require('prompt-sync')();

let hora = parseInt(prompt('digite o horário: '));
if (hora >= 5 && hora <=11) {
    console.log('Bom dia!');
}else if(hora >= 12 && hora <=17){
    console.log('Boa Tarde!');
}else if(hora >= 18 && hora <= 23){
    console.log('Boa Noite!');
}else{
    console.log('Boa madrugada!');
}



