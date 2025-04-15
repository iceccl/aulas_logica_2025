const prompt = require('prompt-sync')();
//criando nossa primeira função
function cabecario(texto){
    console.log('-------------------');
    console.log(texto);
    console.log('-------------------');
    
}

//criando outra função, função saudação
function saudacao(){
    let nome = prompt('Digite o seu nome: ')
    console.log(`${nome} tenha um bom dia`);
}

//chamando a função
//Passando o parametro junto com a função
cabecario('SESI/SENAI')
//Posso declarar uma variável e passar como parâmetro para função
let escola = 'SESI 025'
cabecario(escola)

saudacao()

//criei a função soma que ira receber dois valores como parâmetros, 
//a partir destes valores, realizara o calculo e mostra o resultado
function soma(n1, n2) {
    let resultado = n1 + n2
    console.log(resultado);
    
}
soma(5,6)
soma(5,9)
soma(40,8)

function ParImpar(numero) {
    if (numero %2 == 0) {
        console.log(`${numero} é par.`);
    }else {
        console.log(`${numero} é impar`);
    }
}
ParImpar(prompt('Digite um número: '))
ParImpar(prompt('Digite outro número: '))

//função com retorno do resultado
//o calculo é realizado e é retornado para a chamada da função
function media(n1, n2) {
    let resultado = (n1 + n2)/2
    return(resultado)
}

console.log(media(4,9));

//armazenei o retorno da função em uma variável
let valor = media(9,7)

//utilizei o retorno da função para escrever na tela
console.log(valor);

//utilizei a variável que recebeu o retorno da função para 
//chamar a função Par ou Impar passando o valor como parâmetro
ParImpar(valor);
