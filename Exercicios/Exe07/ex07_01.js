const prompt = require('prompt-sync')();

let lista = ['Piratas do caribe', 'Jurassic Park', 'Como treinar seu dragão', 'Vingadores', 'Avatar', 'Homem aranha', 'Batman']

//exiba o primeiro filme da lista
console.log('exibindo o primeiro filme da lista:');

console.log(lista[0]);

//exiba o filme da posição quatro
console.log('exibindo o filme da posição quatro:');

console.log(lista[3]);

//substitua o filme da ultima posição
console.log('substituindo o ultimo filme da lista por "Star Wars": ');

lista.pop()
lista.splice(6,0,'Star Wars');
console.log(lista);

//adicione um filme no final da lista e exiba
console.log('Adicionando um filme na ultima posição da lista:');

lista.splice(7,0,'Transformers');
console.log(lista);

//insira um novo filme na posição 5 e exiba a lista
console.log('inserindo um filme na posição 5 "Pantera Negra": ');

lista.splice(4,0,'Pantera Negra')
console.log(lista);

//exclua o primeiro filme da lista e exiba
console.log('Excluindo o primeiro filme da lista: ');

lista.shift()
console.log(lista);

//exclua o ultimo filme da lista e exiba
console.log('Excluindo o ultimo filme da lista: ');

lista.pop();
console.log(lista);

//exiba os 3 primeiros filmes da lista
console.log('Exibindo os 3 primeiros filmes da lista: ');

console.log(lista.slice(0, 3));

//exiba os 4 ultimos filmes da lista
console.log('Exibindo os 4 ultimos filmes da lista: ');

console.log(lista.slice(-4));

//exiba a quantidade de filmes atualmente na lista
console.log('Exibindo a quantidade de filmes na lista: ');

console.log(lista.length);

//ordene os filmes em ordem decrescente e exiba
console.log('Ordenando os filmes em ordem dercrescente: ');

console.log(lista.reverse());


