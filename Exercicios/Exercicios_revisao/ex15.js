let divida = 1000;
console.log('////////////////////////');
console.log('tabela de Juros:' );
console.log(`1 parcela: ${divida / 1}, sem juros`);
console.log(`3 parcelas: ${(divida / 3).toFixed(2)},+ 10% de juros ${((divida / 3) - (10/100)).toFixed(2)}`);
console.log(`6 parcelas: ${(divida / 6).toFixed(2)},+ 15% de juros ${((divida / 6) - (15/100)).toFixed(2)}`);
console.log(`9 parcelas: ${(divida / 9).toFixed(2)},+ 20% de juros ${((divida / 9) - (20/100)).toFixed(2)}`);
console.log(`12 parcelas: ${(divida / 12).toFixed(2)},+ 25% de juros ${((divida / 12) - (25/100)).toFixed(2)}`);
//IMCOMPLETO

