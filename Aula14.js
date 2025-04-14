let frutas = ['maça', 'Banana', 'Uva', 'Abacaxi'];
//a variável x serve para interar os valores ate o limite da lista.
//  O nome não é obrigatoriamente ser o nome i,
//  x ou contador pode ser qualquer nome de variável
for (let x = 0; x < frutas.length; x++ ){
    //o length identifica o tamanho total da lista
    console.log(`A fruta é ${frutas[x]}`);
    
}

let listaNomes = ['bill Gates', 'Rafinha', 'Raul Seixas', 'Esteves']
//para cada nome da lista nomes escreva um nome
for (let nome of listaNomes) {
    console.log(nome);
    
}

//verificando se é uma consoante
const prompt = require('prompt-sync')();
let vogais = ['a', 'e', 'i', 'o', 'u']
let letra = prompt('digite uma letra: ');
let listaConsoantes = ['b','c','d','f','g','h','j','k','l','n','m','p','q','r','s','t','v','w','x','y','z']

//se letra estiver incluso na lista de vogais, identifico que é uma vogal
if(vogais.includes(letra.toLowerCase())){
    console.log("é uma vogal");

}else if(listaConsoantes.includes(letra.toLowerCase())){
    console.log('é uma consoante');
}else{console.log('não é uma letra');
}
for (let [pos,fruta] of frutas.entries()) {
    //entries retorna o par de cada elemento no vetor, ou seja seja a posição e a fruta
    console.log(`posição${pos}, e fruta${fruta}`);
}
//separando os items em uma lista
let produtos = 'celular, Notebook, TV, Tablet, Headset'
//o split divide a string e forma uma lista a partir do limite no caso abaixo uma virgula
let listaProdutos = produtos.split(',')
for(let produto of listaProdutos){
    console.log(produto);
}

//percorrendo uma string como uma lista(lista de caracteres)
let palavra = 'SENAI'
for(let letra of palavra){
    console.log(letra);
    
}