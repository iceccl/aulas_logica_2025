let Impares = [];
let pares = [];
let numeros = [1,4,3,6,7];
for (let numero of numeros) {
    if (numero%2 == 0) {
        pares.push(numero)
    }
    else{
        Impares.push(numero)
    }
}
console.log('impares: ',Impares);
console.log('Pares: ',pares);