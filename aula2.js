//importando a biblioteca para a entrada de dados
const prompt = require ('prompt-sync')();
//Variaveis e constantes

//receber o nome da pessoa
let nome = "Lyuz";
let idade = "15 anos";
let peso = "36,9kg";
console.log(nome, idade, peso);

//receber e armazenar o texto em uma variável
  let    curso    =       "desenvolvimento de sistemas";
//tipo   nome   recebe    valor      na variável

//exibir o valor armazenado
console.log("curso")//imprimo uma string(texto)
console.log(curso)//imprimi o valor que esta dentro da variavel
console.log("curso", curso);

//criando e atribuindo valor a outras variaveis
let idade2 = 35; //valor do tipo int
let temperatura = 23.5; //valor do tipo float
let nome2 = "Lyuz"
console.log("olá", nome2, "você tem:", idade2, "hoje esta fazendo", temperatura, "ºC" );

//usando template string
console.log(`Olá ${nome}, você tem ${idade2}, e hoje esta fazendo: ${temperatura} ºC`);

let chovendo = false;
let dia = true;
//nas constantes não poden ser reatribuidos novos valores
const PI = 3.1415;
console.log(PI);

 //utilizando prompt para receber dados
//entrada de dados
//usando o parsefloat ou parseint converte os valores recebidos que vem como string para int ou float.
//no prompt sempre recebemos uma string
nome = prompt('qual é seu nome?:');
idade = parseInt(prompt('qual é a sua idade?:'));
peso =parseFloat(prompt('qual seu peso?:'));

console.log(`seu nome é ${nome}, você tem ${idade} e pesa ${peso}kg`);
//valida o tipo de variavel
console.log(typeof(idade));
console.log(typeof(peso));
//após a conversão dos valores é possivel realizar calculos aritméticos
console.log(idade + peso);
