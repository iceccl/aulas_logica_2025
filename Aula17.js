const prompt = require('prompt-sync')();

//variáveis globais e locais
function nomeEscola(){
escola = "SESI"
console.log(escola);
//declarando uma variável local:
var cidade = 'Andradina'
}


//essa variável é uma variável global pois ela pode ser acessada em qualquer parte do código
var escola = 'Senai'
console.log(escola);
nomeEscola()
var cidade = 'mirandópolis'
console.log(cidade);

////////////////////////////////////
var x = 10;  //variável global
console.log('fora da função: ', x);
function minhaFuncao(){
    let x = 0; // variável local
    x = x+1;
    console.log('dentro da função: ',x);
}
minhaFuncao()

console.log('fora da função de novo', x);
///////////////////////////////////
var x = 10;  //variável global
console.log('fora da função: ', x);
function minhaFuncao(){
    //Estamos usando a variável global
    x = x+1;
    console.log('dentro da função: ',x);
}
minhaFuncao()
x += 1
console.log('fora da função de novo', x);