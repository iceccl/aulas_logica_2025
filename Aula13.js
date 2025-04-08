const prompt = require('prompt-sync')();
//declarando um novo vetor(array)
//reconheço que é um vetor pelo uso dos colchetes
let listaVazia = [];

//declarar uma lista de numeros
let numeros = [1,2,3,4,5,6]
console.log(numeros);
console.log(numeros[2]);
console.log(listaVazia);

//declaração de uma lista de strings
let nomes = ['Ana', 'João', 'Maria'];
console.log(nomes);

let misto = [1, 'dois', true, 2.6]
console.log(misto);

let lista = [
    ['coca-cola', 'cachorro-quente'],
    [5.0 , 10.0]
]
console.log(lista);

//Alterando valores da lista
let frutas = ['maçã', 'pera', 'uva', 'abacaxi']
console.log(frutas);
//a função push adiciona um novo elemento no vetor
frutas.push('laranja')
console.log(frutas);
//a função spread adiciona um novo elemento no vetor
frutas = [...frutas, 'banana']
console.log(frutas);

//a função splice sdiciona um item em uma posição especifica a partir do valor no índice.
frutas.splice(2, 0, 'morango' )
console.log(frutas);

//excluindo item na lista com splice
frutas.splice(3,1)
console.log(frutas);

frutas.shift() // excluindo o primeiro item da lista
frutas.pop() //exclui o ultimo item da lista
console.log(frutas);

//acessar os items da lista
console.log(frutas[3]); // acesso a partir de uma posição específica
console.log(frutas.slice(0, 4)); //posição 0 ate 4
console.log(frutas.slice(1)); // a *partir* da posição 1
console.log(frutas.slice(-1)); // mostra os itens do fim para o início, (de trás para frente)
console.log(frutas.length); //total de itens na lista

//Ordenar itens da lista
console.log(frutas);
frutas.sort()//Ordenar lista de forma cresçente
console.log(frutas);
frutas.reverse(); //Ordenando de forma decreçente
console.log(frutas);



