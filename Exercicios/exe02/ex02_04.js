const prompt = require('prompt-sync')();


let Numero = Number(prompt('digite um número: '));
if (Numero > 0) {
    console.log(`O número ${Numero} é positivo`);
}else{
    console.log(`O número ${Numero} é negativo`);
}
