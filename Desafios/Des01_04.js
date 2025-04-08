const prompt = require('prompt-sync')();

let sal1 = Number(prompt('digite o seu salário (em R$): '));

switch(true){
    case sal1 <  2259.20:
    console.log(`IRPF 0% `);
    break;
    case sal1 >= 2259.20 && sal1 <= 2826.65:
    console.log(`IRPF 7.5% = ${sal1 * 0.075}R$ `);
    break;
    case sal1 >= 2826.66 && sal1 <= 3751.05:
    console.log(`IRPF 15% = ${sal1 * 0.15}R$ `);
    break;
    case sal1 >= 3751.06 && sal1 <= 4664.68:
    console.log(`IRPF 22.5% = ${sal1 * 0.225}R$ `);
    break;
    default:
    console.log(`IRPF 27.5% = ${sal1 * 0.275}R$ `);
}
switch(true){
    case sal1 <  1412:
    console.log(`inss 7.5% = ${sal1 * 0.075}R$ `);
    break;
    case sal1 >= 1412.01 && sal1 <= 2666.68:
    console.log(`inss 9% = ${sal1 * 0.09}R$ `);
    break;
    case sal1 >= 2666.69 && sal1 <= 4000.03:
    console.log(`inss 12% = ${sal1 * 0.12}R$ `);
    break;
    case sal1 >= 4000.04 && sal1 <= 7786.02:
    console.log(`inss 14% = ${sal1 * 0.14}R$ `);
    break;
    default:
    console.log(`inss = 908.85R$ `);
}
