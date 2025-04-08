const prompt = require('prompt-sync')();

let metros = Number(prompt('digite uma quantia em metros: '))
let centimetros = metros * 100
let milimetros = metros * 1000
let kilometros = metros / 1000
console.log(`o número ${metros} em metros pode ser convertido para ${centimetros}cm, ${milimetros}mm, e ${kilometros}km. `);




