const prompt = require('prompt-sync')();

//estrutura condicional alinhada:
let idade = Number(prompt('digite sua idade: '));

if (idade >= 18 && idade <=70) {
    console.log('Voto obrigatório.');
}else{
    if(idade > 16 ){
        console.log('Você não pode votar.');
    }else{
        if (idade >= 16 || idade >70) {
            console.log('voto facultativo.');
        }
    }
        
}

let n1 = Number(prompt('digite o primeiro número: '));
let n2 = Number(prompt('digite o segundo número: '));
let op = prompt('escolha a operação: (+, -, *, /, **) : ');
//testa o valor da var se é true
//caso a variável for verdadeira, testará cada condição, caso a condição
//for igual a um dos "casos" ele testara
//usamos o break para interromper o processo.
switch (op) {
    case '+':
        console.log(`resultado: ${n1 + n2}`);
        break;
        case '-':
            console.log(`Resultado: ${n1 - n2}`);
        break;
        case '*':
            console.log(`Resultado: ${n1 * n2}`);
        break;
        case '/':
            console.log(`Resultado: ${n1 / n2}`);
        break;
        case '**':
            console.log(`Resultado: ${n1 ** n2}`);
        

    default:
        console.log('você não escolheu a operação correta.'); 
        break;
}
//verificar qual letra é igual.
let letra = prompt('digite uma letra: ').toUpperCase();
//quando usamos switch (variável), o switch  compara exatamente o valor da variável com os cases definidos
switch(letra){
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
        console.log('Vogal')
        break;
    default:
        console.log('consoante');
}

//converter a nota em número para letra
let nota  = parseInt(prompt("digite a nota do aluno: "));
//o switch (true) verifica quais expressões dentro do case retornam true(verdade).
//Ou seja, comparamos as expressões booleans.
switch(true){
    case nota >= 90:
        console.log('Nota A');
    break;
    case nota >= 80:
        console.log('Nota B');
    break;
    case nota >= 70:
        console.log('Nota C')
    case nota >= 60:
        console.log('nota D');
    break;
    default:
        console.log('Nota E');
}


