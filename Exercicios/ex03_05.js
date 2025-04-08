const prompt = require('prompt-sync')();

let kitsobrevivencia = Number(prompt('digite o seu salário: '));
switch (true){
case(kitsobrevivencia <= 2000): 
    console.log(`Você paga as contas?, seu novo aumento com o reajuste de 12% é de ${kitsobrevivencia * 0.12}`);
    break;
case(kitsobrevivencia >= 2001 && kitsobrevivencia <= 4000):
    console.log(`Seu novo aumento com o reajuste de 10% é de ${kitsobrevivencia * 0.10}`);
    break;
default:
    console.log(`Seu novo aumento com o reajuste de 8% é de ${kitsobrevivencia * 0.08}`);
};
    



