const prompt = require('prompt-sync')();

let lista = []
for (let i = 0; i < 6; i++) {
    lista.push(prompt('digite a comida: '))
    console.log(lista);
}
//exiba a primeira comida da lista
console.log('exibindo a primeira comida da lista:');
console.log(lista[0]);

//exiba a comida da posição quatro
console.log('exibindo a comida da posição quatro:');
console.log(lista[3]);

//substitua a comida da ultima posição
console.log('substituindo o ultima comida da lista por "banana": ');

lista.pop()
lista.splice(6,0,'banana');
console.log(lista);

//adicione uma comida no final da lista e exiba
console.log('Adicionando uma comida na ultima posição da lista:');

lista.splice(7,0,'maçã');
console.log(lista);

//insira um nova comida na posição 5 e exiba a lista
console.log('inserindo uma comida na posição 5 "carambola": ');

lista.splice(4,0,'carambola')
console.log(lista);

//exclua a primeira comida da lista e exiba
console.log('Excluindo a primeira comida da lista: ');

lista.shift()
console.log(lista);

//exclua o ultima comida da lista e exiba
console.log('Excluindo a ultima comida da lista: ');

lista.pop();
console.log(lista);

//exiba as 3 primeiras comidas da lista
console.log('Exibindo as 3 primeiras comidas da lista: ');

console.log(lista.slice(0, 3));

//exiba as 4 ultimas comidas da lista
console.log('Exibindo as 4 ultimas comidas da lista: ');

console.log(lista.slice(-4));

//exiba a quantidade de comidas atualmente na lista
console.log('Exibindo a quantidade de comidas na lista: ');

console.log(lista.length);

//ordene as comidas em ordem decrescente e exiba
console.log('Ordenando as comidas em ordem dercrescente: ');

console.log(lista.reverse());